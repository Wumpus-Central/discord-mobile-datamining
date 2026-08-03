// === Module 6943: pushLayer ===

// Module 6943 (pushLayer)
const result = require("set").fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  let obj = importDefault(709);
  obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  importDefault(709).dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  importDefault(709).dispatch({ type: "LAYER_POP_ALL" });
};