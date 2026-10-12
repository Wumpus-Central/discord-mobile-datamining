// discord_app/modules/conjure/settings/ConjureSettingsStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";

const map = new Map();
let closure_1 = [];
const Store = initializeDefault.Store;
class ConjureSettingsStore extends Store {}
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/settings/ConjureSettingsStore.tsx");

export default conjureSettingsStore;
