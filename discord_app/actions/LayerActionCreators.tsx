// discord_app/actions/LayerActionCreators.tsx
import obj132 from "../../_runtime/00002_obj132.js";
import dispatcherDefault from "../Dispatcher.tsx";

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