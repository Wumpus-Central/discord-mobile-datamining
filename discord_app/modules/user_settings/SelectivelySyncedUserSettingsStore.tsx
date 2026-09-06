// === Module 1184: SelectivelySyncedUserSettingsStore ===

// Module 1184 (SelectivelySyncedUserSettingsStore)
import _modDef12 from "module_12" /* 12 */;
import initializeDefault from "initialize" /* 504 */;
import Storage4 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const UserSettingsSections = Constants.UserSettingsSections;
let closure_4 = {};
const PersistedStore = initializeDefault.PersistedStore;
class SelectivelySyncedUserSettingsStore extends PersistedStore {
}
const prototype = SelectivelySyncedUserSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  closure_4 = obj;
};
prototype["getState"] = function getState() {
  return closure_4;
};
prototype["shouldSync"] = function shouldSync(appearance) {
  let shouldSync;
  if (closure_4[appearance] != null) {
    shouldSync = tmp.shouldSync;
  }
  return false !== shouldSync;
};
prototype["getTextSettings"] = function getTextSettings() {
  const text = closure_4.text;
  let settings;
  if (text != null) {
    settings = text.settings;
  }
  return settings;
};
prototype["getAppearanceSettings"] = function getAppearanceSettings() {
  const appearance = closure_4.appearance;
  let settings;
  if (appearance != null) {
    settings = appearance.settings;
  }
  return settings;
};
SelectivelySyncedUserSettingsStore.displayName = "SelectivelySyncedUserSettingsStore";
SelectivelySyncedUserSettingsStore.persistKey = "SelectivelySyncedUserSettingsStore";
const items = [
  () => {
    const Storage = Storage4.Storage;
    let obj = Storage.get("UserSettingsSync");
    if (obj == null) {
      obj = {};
    }
    const Storage2 = tmp(510).Storage;
    value = Storage2.get("UserSettingsStore");
    if (value == null) {
      value = {};
    }
    const Storage3 = tmp(510).Storage;
    Storage3.remove("UserSettingsSync");
    obj = {};
    if (false === obj[UserSettingsSections.TEXT]) {
      const obj1 = { shouldSync: false, settings: _modDef12.pick(value, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay", "defaultReactionEmoji"]) };
      obj.text = obj1;
    }
    if (false === obj[tmp4.APPEARANCE]) {
      const obj2 = { shouldSync: false, settings: _modDef12.pick(value, ["theme", "clientThemeSettings", "developerMode"]) };
      obj.appearance = obj2;
    }
    return obj;
  },
  (appearance) => {
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
      let obj = {};
      const merged = Object.assign(appearance);
      obj = {};
      const merged1 = Object.assign(appearance.appearance);
      obj = {};
      const merged2 = Object.assign(appearance.appearance.settings);
      obj.theme = "midnight";
      obj.settings = obj;
      obj.appearance = obj;
      return obj;
    }
  }
];
SelectivelySyncedUserSettingsStore.migrations = items;
const selectivelySyncedUserSettingsStore = new SelectivelySyncedUserSettingsStore(DispatcherDefault, {
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate(changes) {
    changes = changes.changes;
    for (const key10008 in changes) {
      ({ shouldSync, settings } = changes[key10008]);
      if (true !== shouldSync) {
        if (false === shouldSync) {
          let obj = { shouldSync, settings: {} };
          closure_4[key10008] = obj;
        }
        let tmp7 = closure_4[key10008];
        shouldSync = undefined;
        if (tmp7 != null) {
          shouldSync = tmp7.shouldSync;
        }
        if (false !== shouldSync) {
          continue;
        } else {
          let keys = Object.keys();
          if (keys === undefined) {
            continue;
          } else {
            let tmp11 = keys[tmp];
            while (tmp11 !== undefined) {
              closure_4[key10008].settings[tmp11] = settings[tmp11];
              continue;
            }
          }
          continue;
        }
        continue;
      } else {
        delete tmp2[tmp3];
        continue;
      }
      continue;
    }
  },
  LOGOUT: function handleLogOut() {
    closure_4 = {};
  }
});
const result = size.fileFinishedImporting("modules/user_settings/SelectivelySyncedUserSettingsStore.tsx");

export default selectivelySyncedUserSettingsStore;