// === Module 7753: LayerActionCreators ===

// Module 7753 (LayerActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("actions/LayerActionCreators.tsx");

export function pushLayer(component) {
  DispatcherDefault.dispatch({ type: "LAYER_PUSH", component });
}
export function popLayer() {
  DispatcherDefault.dispatch({ type: "LAYER_POP" });
}
export function popAllLayers() {
  DispatcherDefault.dispatch({ type: "LAYER_POP_ALL" });
}