const patcherAssetURL = "https://assets.codepen.io/t-2071/codepen-lfo-example.export_3.json";

let device;
const control = document.getElementById("control");
const speaker = document.getElementById("speaker");

// Create AudioContext
const WAContext = window.AudioContext || window.webkitAudioContext;
const context = new WAContext();

async function setup() {

  // Create gain node and connect it to audio output
  const outputNode = context.createGain();
  outputNode.connect(context.destination);

  // Fetch the exported patcher
  const response = await fetch(patcherAssetURL);
  const patcher = await response.json();

  // Create the device
  device = await RNBO.createDevice({ context, patcher });

  // Connect the device to the web audio graph
  device.node.connect(outputNode);

  // Connect the slider
  control.addEventListener("pointerdown", (event) => {
    context.resume();
    device.parametersById.get("on").value = 1;
    speaker.setAttribute("fill", "#E65C4E");
  });
  
  control.addEventListener("input", (event) => {
    device.parametersById.get("lfo-frequency").value = control.value;
  });

  control.addEventListener("pointerup", (event) => {
    device.parametersById.get("on").value = 0;
    speaker.setAttribute("fill", "#958d41");
  });
  
  device.messageEvent.subscribe(e => {
    if (e.tag === "lfo-phase");
    const cy = -Math.cos(e.payload * 2 * Math.PI) * 100 + 150;
    const cx = Math.sin(e.payload * 2 * Math.PI) * 100 + 150;
    speaker.setAttribute("cx", cx);
    speaker.setAttribute("cy", cy);
  });
}

setup();