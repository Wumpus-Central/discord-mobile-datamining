// === Module 11971: handlePopAllLayers ===

// Module 11971 (handlePopAllLayers)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

function handlePopAllLayers() {
  closure_0 = [];
}
let closure_0 = [];
const Store = initializeDefault.Store;
class LayerStore extends Store {
}
const prototype = LayerStore.prototype;
prototype["hasLayers"] = function hasLayers() {
  return arr.length > 0;
};
prototype["getLayers"] = function getLayers() {
  return closure_0;
};
LayerStore.displayName = "LayerStore";
const layerStore = new LayerStore(dispatcherDefault, {
  LAYER_PUSH: function handleAddLayer(component) {
    component = component.component;
    if (items.indexOf(component) >= 0) {
      return false;
    } else {
      items = [];
      items[HermesBuiltin.arraySpread(items, 0)] = component;
    }
  },
  LAYER_POP: function handleRemoveLayer() {
    if (0 === arr.length) {
      return false;
    } else {
      arr = arr.slice(0, -1);
    }
  },
  LAYER_POP_ALL: handlePopAllLayers,
  LOGOUT: handlePopAllLayers,
  NOTIFICATION_CLICK: handlePopAllLayers
});
const result = require("set").fileFinishedImporting("stores/LayerStore.tsx");

export default layerStore;