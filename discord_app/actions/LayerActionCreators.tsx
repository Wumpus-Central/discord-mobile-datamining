// === Module 5353: pushLayer ===

// Module 5353 (pushLayer)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  const obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  dispatcherDefault.dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  dispatcherDefault.dispatch({ type: "LAYER_POP_ALL" });
};