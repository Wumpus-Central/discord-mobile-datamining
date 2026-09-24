// === Module 7916: LayerActionCreators ===

// Module 7916 (LayerActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  DispatcherDefault.dispatch({ type: "LAYER_PUSH", component });
};
export const popLayer = function popLayer() {
  DispatcherDefault.dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  DispatcherDefault.dispatch({ type: "LAYER_POP_ALL" });
};