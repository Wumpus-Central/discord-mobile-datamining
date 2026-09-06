// === Module 13742: EmailSettingsStore ===

// Module 13742 (EmailSettingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

function reset() {
  c1 = null;
}
let categories = {};
let c1 = null;
const Store = initializeDefault.Store;
class EmailSettingsStore extends Store {
}
EmailSettingsStore.prototype["getEmailSettings"] = function getEmailSettings() {
  categories = { categories, initialized };
  return categories;
};
EmailSettingsStore.displayName = "EmailSettingsStore";
categories = {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  EMAIL_SETTINGS_FETCH_SUCCESS: function handleFetchSuccess(settings) {
    ({ categories: obj, initialized: c1 } = settings.settings);
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function handleUpdateSuccess(settings) {

  },
  EMAIL_SETTINGS_UPDATE: function handleUpdate(updates) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(updates.updates);
  }
};
const emailSettingsStore = new EmailSettingsStore(DispatcherDefault, categories);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsStore.tsx");

export default emailSettingsStore;