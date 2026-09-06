// discord_app/stores/LayerStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";

function handlePopAllLayers() {
  closure_0 = [];
}
let closure_0 = [];
const Store = initializeDefault.Store;
class LayerStore extends Store {}
const prototype = LayerStore.prototype;
prototype["hasLayers"] = function hasLayers() {
  return closure_0.length > 0;
};
prototype["getLayers"] = function getLayers() {
  return closure_0;
};
LayerStore.displayName = "LayerStore";
const layerStore = new LayerStore(DispatcherDefault, {
  LAYER_PUSH: function handleAddLayer(component) {
    component = component.component;
    if (closure_0.indexOf(component) >= 0) {
      return false;
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(closure_0, 0)] = component;
      closure_0 = items;
    }
  },
  LAYER_POP: function handleRemoveLayer() {
    if (0 === closure_0.length) {
      return false;
    } else {
      closure_0 = closure_0.slice(0, -1);
    }
  },
  LAYER_POP_ALL: handlePopAllLayers,
  LOGOUT: handlePopAllLayers,
  NOTIFICATION_CLICK: handlePopAllLayers,
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/LayerStore.tsx");

export default layerStore;
