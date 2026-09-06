// discord_app/modules/user_settings/UserSettingsOverridesStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";

require = fn;
function updateExistingSettings() {
  const settings = UserSettingsProtoStore.settings;
  const textAndImages = settings.textAndImages;
  value = undefined;
  if (textAndImages != null) {
    if (textAndImages.gifAutoPlay != null) {
      value = iter.value;
    }
  }
  obj = { gifAutoPlay: value, animateEmoji: null, animateStickers: null };
  const textAndImages2 = settings.textAndImages;
  value = undefined;
  if (textAndImages2 != null) {
    if (textAndImages2.animateEmoji != null) {
      value = iter2.value;
    }
  }
  obj.animateEmoji = value;
  const textAndImages3 = settings.textAndImages;
  let value1;
  if (textAndImages3 != null) {
    if (textAndImages3.animateStickers != null) {
      value1 = iter3.value;
    }
  }
  obj.animateStickers = value1;
  return false;
}
const dependencyMap = {};
let obj = {};
const PersistedStore = initializeDefault.PersistedStore;
class UserSettingsOverridesStore extends PersistedStore {}
const prototype = UserSettingsOverridesStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  closure_3 = obj;
  const items = [UserSettingsProtoStore];
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
    obj = Storage.get("UserSettingsStoreOverrides");
    if (obj == null) {
      obj = {};
    }
    const Storage2 = Storage3.Storage;
    Storage2.remove("UserSettingsStoreOverrides");
    return obj;
  },
];
UserSettingsOverridesStore.migrations = items;
obj = {
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate() {
    const settings = UserSettingsProtoStore.settings;
    const textAndImages = settings.textAndImages;
    value = undefined;
    if (textAndImages != null) {
      if (textAndImages.gifAutoPlay != null) {
        value = iter.value;
      }
    }
    obj = { gifAutoPlay: value, animateEmoji: null, animateStickers: null };
    const textAndImages2 = settings.textAndImages;
    value = undefined;
    if (textAndImages2 != null) {
      if (textAndImages2.animateEmoji != null) {
        value = iter2.value;
      }
    }
    obj.animateEmoji = value;
    const textAndImages3 = settings.textAndImages;
    let value1;
    if (textAndImages3 != null) {
      if (textAndImages3.animateStickers != null) {
        value1 = iter3.value;
      }
    }
    obj.animateStickers = value1;
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        if (obj[tmp9] === obj[tmp9]) {
          continue;
        } else {
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
    const merged = Object.assign(closure_3);
    const merged1 = Object.assign(settings.settings);
    closure_3 = {};
  },
  USER_SETTINGS_OVERRIDE_CLEAR: function handleClearSettingsOverride(arg0) {
    for (const item10006 of tmp3) {
      delete tmp[tmp2];
      continue;
    }
  },
  LOGOUT: function handleLogOut() {
    closure_3 = {};
  },
  LOGIN_SUCCESS: function handleLogInSuccess() {
    closure_3 = {};
  },
};
const userSettingsOverridesStore = new UserSettingsOverridesStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsOverridesStore.tsx");

export default userSettingsOverridesStore;
