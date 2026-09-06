// discord_app/actions/LayerActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  const obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  DispatcherDefault.dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  DispatcherDefault.dispatch({ type: "LAYER_POP_ALL" });
};
