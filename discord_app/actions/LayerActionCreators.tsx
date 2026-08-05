// discord_app/actions/LayerActionCreators.tsx
const result = require("set").fileFinishedImporting("actions/LayerActionCreators.tsx");

export const pushLayer = function pushLayer(component) {
  let obj = require("../Dispatcher.tsx");
  obj = { type: "LAYER_PUSH", component };
  obj.dispatch(obj);
};
export const popLayer = function popLayer() {
  require("../Dispatcher.tsx").dispatch({ type: "LAYER_POP" });
};
export const popAllLayers = function popAllLayers() {
  require("../Dispatcher.tsx").dispatch({ type: "LAYER_POP_ALL" });
};