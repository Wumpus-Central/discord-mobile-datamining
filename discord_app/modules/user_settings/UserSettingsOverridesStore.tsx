// === Module 4137: updateExistingSettings ===

// Module 4137 (updateExistingSettings)
import initializeDefault from "initialize" /* 589 */;
import Storage3 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import closure_2 from "handleConnectionClosedOrResumed" /* 1340 */;

require = arg1;
function updateExistingSettings() {
  const settings = closure_2.settings;
  const textAndImages = settings.textAndImages;
  let value;
  if (textAndImages != null) {
    if (textAndImages.gifAutoPlay != null) {
      value = iter.value;
    }
  }
  const obj = { gifAutoPlay: value, animateEmoji: null, animateStickers: null };
  const textAndImages2 = settings.textAndImages;
  value = undefined;
  if (textAndImages2 != null) {
    if (textAndImages2.animateEmoji != null) {
      value = iter2.value;
    }
  }
  obj[1] = value;
  const textAndImages3 = settings.textAndImages;
  let value1;
  if (textAndImages3 != null) {
    if (textAndImages3.animateStickers != null) {
      value1 = iter3.value;
    }
  }
  obj[2] = value1;
  return false;
}
let closure_3 = {};
let closure_4 = {};
const PersistedStore = initializeDefault.PersistedStore;
class UserSettingsOverridesStore extends PersistedStore {
}
const prototype = UserSettingsOverridesStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  const items = [closure_2];
  this.syncWith(items, updateExistingSettings);
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getAppliedOverrideReasonKey"] = function getAppliedOverrideReasonKey(animateEmoji) {
  let reasonKey;
  if (dependencyMap[animateEmoji] != null) {
    reasonKey = tmp.reasonKey;
  }
  return reasonKey;
};
prototype["getOverride"] = function getOverride(arg0) {
  return dependencyMap[arg0];
};
UserSettingsOverridesStore.displayName = "UserSettingsOverridesStore";
UserSettingsOverridesStore.persistKey = "UserSettingsOverridesStore";
let items = [
  () => {
    const Storage = Storage3.Storage;
    let obj = Storage.get("UserSettingsStoreOverrides");
    if (obj == null) {
      obj = {};
    }
    const Storage2 = Storage3.Storage;
    Storage2.remove("UserSettingsStoreOverrides");
    return obj;
  }
];
UserSettingsOverridesStore.migrations = items;
const userSettingsOverridesStore = new UserSettingsOverridesStore(dispatcherDefault, {
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    const settings = closure_2.settings;
    const textAndImages = settings.textAndImages;
    let value;
    if (textAndImages != null) {
      if (textAndImages.gifAutoPlay != null) {
        value = iter.value;
      }
    }
    const obj = { gifAutoPlay: value, animateEmoji: null, animateStickers: null };
    const textAndImages2 = settings.textAndImages;
    value = undefined;
    if (textAndImages2 != null) {
      if (textAndImages2.animateEmoji != null) {
        value = iter2.value;
      }
    }
    obj[1] = value;
    const textAndImages3 = settings.textAndImages;
    let value1;
    if (textAndImages3 != null) {
      if (textAndImages3.animateStickers != null) {
        value1 = iter3.value;
      }
    }
    obj[2] = value1;
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        let tmp11 = tmp9;
        let tmp12 = table;
        if (obj[tmp9] === table[tmp9]) {
          continue;
        } else {
          let tmp10 = closure_3;
          delete tmp2[tmp3];
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  },
  USER_SETTINGS_OVERRIDE_APPLY: function handleApplySettingsOverride(settings) {
    const obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(settings.settings);
  },
  USER_SETTINGS_OVERRIDE_CLEAR: function handleClearSettingsOverride(arg0) {
    for (const item10006 of tmp3) {
      let tmp4 = closure_3;
      delete tmp[tmp2];
      continue;
    }
  },
  LOGOUT: function handleLogOut() {
    closure_3 = {};
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    closure_3 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/user_settings/UserSettingsOverridesStore.tsx");

export default userSettingsOverridesStore;