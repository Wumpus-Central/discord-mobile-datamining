// === Module 15179: EmailSettingsStore ===

// Module 15179 (EmailSettingsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

function reset() {
  c1 = null;
  c2 = false;
}
let categories = {};
let c1 = null;
let c2 = false;
const Store = initializeDefault.Store;
class EmailSettingsStore extends Store {
}
const prototype = EmailSettingsStore.prototype;
Object.defineProperty(prototype, "isFetching", {
  get: function isFetching() {
    return c2;
  },
  set: undefined
});
prototype["getEmailSettings"] = function getEmailSettings() {
  categories = { categories, initialized };
  return categories;
};
EmailSettingsStore.displayName = "EmailSettingsStore";
categories = {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  EMAIL_SETTINGS_FETCH_START() {
    c2 = true;
  },
  EMAIL_SETTINGS_FETCH_SUCCESS: function handleFetchSuccess(settings) {
    ({ categories: obj, initialized: c1 } = settings.settings);
    c2 = false;
  },
  EMAIL_SETTINGS_FETCH_FAILURE() {
    c2 = false;
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function handleUpdateSuccess(settings) {

  },
  EMAIL_SETTINGS_UPDATE: function handleUpdate(updates) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(updates.updates);
  },
  EMAIL_SETTINGS_UPDATE_FAILURE: function handleUpdateFailure(previous) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(previous.previous);
  }
};
const emailSettingsStore = new EmailSettingsStore(DispatcherDefault, categories);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsStore.tsx");

export default emailSettingsStore;