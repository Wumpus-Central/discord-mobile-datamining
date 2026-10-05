// === Module 1194: SelectivelySyncedUserSettingsStore ===

// Module 1194 (SelectivelySyncedUserSettingsStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage4 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_4;

const UserSettingsSections = Constants.UserSettingsSections;
const React3 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class SelectivelySyncedUserSettingsStore extends PersistedStore {
  initialize(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    closure_4 = obj;
  }
  getState() {
    return closure_4;
  }
  shouldSync(appearance) {
    let shouldSync;
    if (closure_4[appearance] != null) {
      shouldSync = tmp.shouldSync;
    }
    return false !== shouldSync;
  }
  getTextSettings() {
    const text = closure_4.text;
    let settings;
    if (text != null) {
      settings = text.settings;
    }
    return settings;
  }
  getAppearanceSettings() {
    const appearance = closure_4.appearance;
    let settings;
    if (appearance != null) {
      settings = appearance.settings;
    }
    return settings;
  }
}
const prototype = SelectivelySyncedUserSettingsStore.prototype;
SelectivelySyncedUserSettingsStore.displayName = "SelectivelySyncedUserSettingsStore";
SelectivelySyncedUserSettingsStore.persistKey = "SelectivelySyncedUserSettingsStore";
const items = [
  () => {
    let obj5;
    let obj7;
    const Storage = Storage4.Storage;
    let obj = Storage.get("UserSettingsSync");
    if (obj == null) {
      obj = {};
    }
    const Storage2 = Storage4.Storage;
    let value2 = Storage2.get("UserSettingsStore");
    if (value2 == null) {
      value2 = {};
    }
    const Storage3 = Storage4.Storage;
    Storage3.remove("UserSettingsSync");
    const obj2 = {};
    if (false === obj[UserSettingsSections.TEXT]) {
      const obj3 = { shouldSync: false, settings: obj5.pick(value2, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay", "defaultReactionEmoji"]) };
      obj2.text = obj3;
      obj5 = _modDef12;
    }
    if (false === obj[UserSettingsSections.APPEARANCE]) {
      const obj4 = { shouldSync: false, settings: obj7.pick(value2, ["theme", "clientThemeSettings", "developerMode"]) };
      obj2.appearance = obj4;
      obj7 = _modDef12;
    }
    return obj2;
  },
  (appearance) => {
    let obj2;
    let obj3;
    let theme;
    if (appearance != null) {
      appearance = appearance.appearance;
      if (appearance != null) {
        const settings = appearance.settings;
        if (settings != null) {
          theme = settings.theme;
        }
      }
    }
    if ("amoled" === theme) {
      const obj = { appearance: obj2 };
      const merged = Object.assign(appearance);
      obj2 = { settings: obj3 };
      const merged1 = Object.assign(appearance.appearance);
      obj3 = { theme: "midnight" };
      const merged2 = Object.assign(appearance.appearance.settings);
      return obj;
    }
  }
];
SelectivelySyncedUserSettingsStore.migrations = items;
let obj = {
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate(changes) {
    let settings;
    let shouldSync;
    changes = changes.changes;
    for (const key10008 in changes) {
      ({ shouldSync, settings } = changes[key10008]);
      if (true !== shouldSync) {
        if (false === shouldSync) {
          let obj = { shouldSync, settings: {} };
          closure_4[key10008] = obj;
        }
        let tmp4 = closure_4[key10008];
        let shouldSync1;
        if (tmp4 != null) {
          shouldSync1 = tmp4.shouldSync;
        }
        if (false !== shouldSync1) {
          continue;
        } else {
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp8 = keys[tmp];
            while (tmp8 !== undefined) {
              closure_4[key10008].settings[tmp8] = settings[tmp8];
              continue;
            }
          }
          continue;
        }
        continue;
      } else {
        delete closure_4[tmp9];
        continue;
      }
      continue;
    }
  },
  LOGOUT: function handleLogOut() {
    closure_4 = {};
  }
};
const selectivelySyncedUserSettingsStore = new SelectivelySyncedUserSettingsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/user_settings/SelectivelySyncedUserSettingsStore.tsx");

export default selectivelySyncedUserSettingsStore;