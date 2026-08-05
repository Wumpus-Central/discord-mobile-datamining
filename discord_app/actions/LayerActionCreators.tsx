// discord_app/actions/LayerActionCreators.tsx
import { dispatcher } from "../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  let obj = dispatcher;
  obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  dispatcher.dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  dispatcher.dispatch({ type: "LAYER_POP_ALL" });
};