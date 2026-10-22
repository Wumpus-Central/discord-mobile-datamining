// === Module 10682: ConjureModelSettingsStore ===

// Module 10682 (ConjureModelSettingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const map = new Map();
const Store = initializeDefault.Store;
class ConjureModelSettingsStore extends Store {
}
ConjureModelSettingsStore.prototype["getModelSettings"] = function getModelSettings(projectId) {
  value = map.get(projectId);
  if (value == null) {
    value = null;
  }
  return value;
};
const conjureModelSettingsStore = new ConjureModelSettingsStore(DispatcherDefault, {
  CONJURE_MODEL_SETTINGS_SET: function handleModelSettingsSet(settings) {
    const result = map.set(settings.projectId, { settings: settings.settings, tierSettings: settings.tierSettings, tiers: settings.tiers, choices: settings.choices });
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/model_settings/ConjureModelSettingsStore.tsx");

export default conjureModelSettingsStore;