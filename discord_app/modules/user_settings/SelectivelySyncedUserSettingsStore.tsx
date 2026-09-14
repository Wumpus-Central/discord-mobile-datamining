// discord_app/modules/user_settings/SelectivelySyncedUserSettingsStore.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const UserSettingsSections = Constants.UserSettingsSections;
let closure_4 = {};
const PersistedStore = initializeDefault.PersistedStore;
class SelectivelySyncedUserSettingsStore extends PersistedStore {}
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
    const Storage2 = Storage4.Storage;
    value2 = Storage2.get("UserSettingsStore");
    if (value2 == null) {
      value2 = {};
    }
    const Storage3 = Storage4.Storage;
    Storage3.remove("UserSettingsSync");
    const obj2 = {};
    if (false === obj[UserSettingsSections.TEXT]) {
      const obj3 = {
        shouldSync: false,
        settings: _modDef12.pick(value2, [
          "inlineAttachmentMedia",
          "inlineEmbedMedia",
          "renderEmbeds",
          "renderReactions",
          "animateEmoji",
          "animateStickers",
          "gifAutoPlay",
          "defaultReactionEmoji",
        ]),
      };
      obj2.text = obj3;
    }
    if (false === obj[UserSettingsSections.APPEARANCE]) {
      const obj4 = {
        shouldSync: false,
        settings: _modDef12.pick(value2, ["theme", "clientThemeSettings", "developerMode"]),
      };
      obj2.appearance = obj4;
    }
    return obj2;
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
      const obj = {};
      const merged = Object.assign(appearance);
      const obj2 = {};
      const merged1 = Object.assign(appearance.appearance);
      const obj3 = {};
      const merged2 = Object.assign(appearance.appearance.settings);
      obj3.theme = "midnight";
      obj2.settings = obj3;
      obj.appearance = obj2;
      return obj;
    }
  },
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
        let shouldSync1;
        if (tmp7 != null) {
          shouldSync1 = tmp7.shouldSync;
        }
        if (false !== shouldSync1) {
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
  },
});
const result = size.fileFinishedImporting("modules/user_settings/SelectivelySyncedUserSettingsStore.tsx");

export default selectivelySyncedUserSettingsStore;
