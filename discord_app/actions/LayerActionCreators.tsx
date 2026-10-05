// === Module 7096: LayerActionCreators ===

// Module 7096 (LayerActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  const obj = DispatcherDefault;
  const obj2 = { type: "LAYER_PUSH", component };
  obj.dispatch(obj2);
};
export const popLayer = function popLayer() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "LAYER_POP_ALL" });
};