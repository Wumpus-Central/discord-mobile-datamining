// === Module 10849: ConjureSettingsStore ===

// Module 10849 (ConjureSettingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

const map = new Map();
const map1 = new Map();
let closure_2 = [];
const Store = initializeDefault.Store;
class ConjureSettingsStore extends Store {
}
const prototype = ConjureSettingsStore.prototype;
prototype["getSettings"] = function getSettings(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getLoadState"] = function getLoadState(arg0) {
  value = map1.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["getDeclaredConnections"] = function getDeclaredConnections(projectId) {
  value = map.get(projectId);
  let connections;
  if (value != null) {
    connections = value.connections;
  }
  if (connections == null) {
    connections = closure_2;
  }
  return connections;
};
const conjureSettingsStore = new ConjureSettingsStore(DispatcherDefault, {
  CONJURE_SETTINGS_SET: function handleSettingsSet(projectId) {
    projectId = projectId.projectId;
    const result = map.set(projectId, projectId.settings);
    const result1 = map1.set(projectId, "loaded");
  },
  CONJURE_SETTINGS_LOAD_STATE_SET: function handleLoadStateSet(arg0) {
    ({ projectId, state } = arg0);
    value = map1.get(projectId);
    if (value !== state) {
      const result = map1.set(projectId, state);
    }
    return false;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/ConjureSettingsStore.tsx");

export default conjureSettingsStore;