// === Module 13569: EmailSettingsStore ===

// Module 13569 (EmailSettingsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

function reset() {
  let c1 = null;
}
let categories = {};
let c1 = null;
const Store = get_initializedDefault.Store;
class EmailSettingsStore extends Store {
  getEmailSettings() {
    categories = { categories, initialized };
    return categories;
  }
}
const prototype = EmailSettingsStore.prototype;
EmailSettingsStore.displayName = "EmailSettingsStore";
categories = {
  CONNECTION_OPEN: reset,
  LOGOUT: reset,
  EMAIL_SETTINGS_FETCH_SUCCESS: function handleFetchSuccess(settings) {
    let c1;
    let obj;
    ({ categories: obj, initialized: c1 } = settings.settings);
  },
  EMAIL_SETTINGS_UPDATE_SUCCESS: function handleUpdateSuccess(settings) {

  },
  EMAIL_SETTINGS_UPDATE: function handleUpdate(updates) {
    updates = updates.updates;
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(updates);
  }
};
const emailSettingsStore = new EmailSettingsStore(DispatcherDefault, categories);
const result = size.fileFinishedImporting("modules/user_settings/notifications/EmailSettingsStore.tsx");

export default emailSettingsStore;