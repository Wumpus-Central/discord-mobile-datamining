// === Module 12144: LayerStore ===

// Module 12144 (LayerStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_0;

function handlePopAllLayers() {
  closure_0 = [];
}
const React = [];
const Store = get_initializedDefault.Store;
class LayerStore extends Store {
  hasLayers() {
    return closure_0.length > 0;
  }
  getLayers() {
    return closure_0;
  }
}
const prototype = LayerStore.prototype;
LayerStore.displayName = "LayerStore";
const obj = {
  LAYER_PUSH: function handleAddLayer(component) {
    component = component.component;
    if (closure_0.indexOf(component) >= 0) {
      return false;
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(items, closure_0, 0)] = component;
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
  NOTIFICATION_CLICK: handlePopAllLayers
};
const layerStore = new LayerStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/LayerStore.tsx");

export default layerStore;