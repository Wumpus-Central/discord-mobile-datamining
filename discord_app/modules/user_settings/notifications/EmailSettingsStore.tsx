// === Module 13634: reset ===

// Module 13634 (reset)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

function reset() {
  closure_0 = {};
  c1 = null;
}
let closure_0 = {};
let c1 = null;
const Store = initializeDefault.Store;
class EmailSettingsStore extends Store {
}
EmailSettingsStore.prototype["getEmailSettings"] = function getEmailSettings() {
  return { categories: closure_0, initialized: c1 };
};
EmailSettingsStore.displayName = "EmailSettingsStore";
const emailSettingsStore = new EmailSettingsStore(dispatcherDefault, {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  EMAIL_SETTINGS_FETCH_SUCCESS: function handleFetchSuccess(settings) {
    ({ categories: closure_0, initialized: c1 } = settings.settings);
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function handleUpdateSuccess(settings) {
    const categories = settings.settings.categories;
  },
  EMAIL_SETTINGS_UPDATE: function handleUpdate(updates) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(updates.updates);
  }
});
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/EmailSettingsStore.tsx");

export default emailSettingsStore;