// === Module 1303: initialize ===

// Module 1303 (initialize)
import obj132 from "obj132" /* 2 */;
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import Storage4 from "Storage" /* 595 */;
import ME from "ME" /* 676 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const UserSettingsSections = ME.UserSettingsSections;
let closure_4 = {};
const PersistedStore = initializeDefault.PersistedStore;
class SelectivelySyncedUserSettingsStore extends PersistedStore {
}
const prototype = SelectivelySyncedUserSettingsStore.prototype;
prototype["initialize"] = function initialize(arg0) {

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
    const Storage2 = Storage4.Storage;
    let value = Storage2.get("UserSettingsStore");
    if (value == null) {
      value = {};
    }
    const Storage3 = Storage4.Storage;
    Storage3.remove("UserSettingsSync");
    obj = {};
    if (false === obj[UserSettingsSections.TEXT]) {
      obj1 = { shouldSync: false, settings: null };
      obj1[1] = applyDefault.pick(value, ["inlineAttachmentMedia", "inlineEmbedMedia", "renderEmbeds", "renderReactions", "animateEmoji", "animateStickers", "gifAutoPlay", "defaultReactionEmoji"]);
      obj.text = obj1;
    }
    if (false === obj[UserSettingsSections.APPEARANCE]) {
      const obj2 = { shouldSync: false, settings: null };
      obj2[1] = applyDefault.pick(value, ["theme", "clientThemeSettings", "developerMode"]);
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
      const merged = Object.assign(appearance);
      const merged1 = Object.assign(appearance.appearance);
      const obj = {};
      const merged2 = Object.assign(appearance.appearance.settings);
      obj.theme = "midnight";
      obj.settings = obj;
      obj.appearance = obj;
      return obj;
    }
  }
];
SelectivelySyncedUserSettingsStore.migrations = items;
const selectivelySyncedUserSettingsStore = new SelectivelySyncedUserSettingsStore(dispatcherDefault, {
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: function handleSelectivelySyncedUserSettingsUpdate(changes) {
    changes = changes.changes;
    for (const key10008 in changes) {
      ({ shouldSync, settings } = changes[key10008]);
      if (true !== shouldSync) {
        if (false === shouldSync) {
          let obj = { shouldSync: null, settings: null };
          obj[0] = shouldSync;
          obj[1] = {};
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
const result = obj132.fileFinishedImporting("modules/user_settings/SelectivelySyncedUserSettingsStore.tsx");

export default selectivelySyncedUserSettingsStore;