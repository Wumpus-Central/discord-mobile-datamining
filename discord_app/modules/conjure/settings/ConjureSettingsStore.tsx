// === Module 10995: ConjureSettingsStore ===

// Module 10995 (ConjureSettingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const map = new Map();
let closure_1 = [];
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
prototype["getDeclaredConnections"] = function getDeclaredConnections(projectId) {
  value = map.get(projectId);
  let connections;
  if (value != null) {
    connections = value.connections;
  }
  if (connections == null) {
    connections = closure_1;
  }
  return connections;
};
const conjureSettingsStore = new ConjureSettingsStore(DispatcherDefault, {
  CONJURE_SETTINGS_SET: function handleSettingsSet(projectId) {
    const result = map.set(projectId.projectId, projectId.settings);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/ConjureSettingsStore.tsx");

export default conjureSettingsStore;