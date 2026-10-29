// discord_app/actions/LayerActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

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
