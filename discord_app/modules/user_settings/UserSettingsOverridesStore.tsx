// discord_app/modules/user_settings/UserSettingsOverridesStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage3 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3;

function updateExistingSettings() {
  const settings = UserSettingsProtoStore.settings;
  const textAndImages = settings.textAndImages;
  let value;
  if (textAndImages != null) {
    if (textAndImages.gifAutoPlay != null) {
      value = iter.value;
    }
  }
  const textAndImages2 = settings.textAndImages;
  let value3;
  if (textAndImages2 != null) {
    if (textAndImages2.animateEmoji != null) {
      value3 = iter2.value;
    }
  }
  const textAndImages3 = settings.textAndImages;
  let value4;
  if (textAndImages3 != null) {
    if (textAndImages3.animateStickers != null) {
      value4 = iter3.value;
    }
  }
  return false;
}
const _false = {};
let obj = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class UserSettingsOverridesStore extends PersistedStore {
  initialize(arg0) {
    obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    closure_3 = obj;
    const items = [UserSettingsProtoStore];
    this.syncWith(items, updateExistingSettings);
  }
  getState() {
    return closure_3;
  }
  getAppliedOverrideReasonKey(animateEmoji) {
    let reasonKey;
    if (closure_3[animateEmoji] != null) {
      reasonKey = tmp.reasonKey;
    }
    return reasonKey;
  }
  getOverride(arg0) {
    return closure_3[arg0];
  }
}
const prototype = UserSettingsOverridesStore.prototype;
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
    let value3;
    let value4;
    const settings = UserSettingsProtoStore.settings;
    const textAndImages = settings.textAndImages;
    let value;
    if (textAndImages != null) {
      if (textAndImages.gifAutoPlay != null) {
        value = iter.value;
      }
    }
    obj = { gifAutoPlay: value, animateEmoji: value3, animateStickers: value4 };
    const textAndImages2 = settings.textAndImages;
    value3 = undefined;
    if (textAndImages2 != null) {
      if (textAndImages2.animateEmoji != null) {
        value3 = iter2.value;
      }
    }
    const textAndImages3 = settings.textAndImages;
    value4 = undefined;
    if (textAndImages3 != null) {
      if (textAndImages3.animateStickers != null) {
        value4 = iter3.value;
      }
    }
    let flag = false;
    let flag2 = false;
    const keys = Object.keys();
    if (keys !== undefined) {
      flag2 = flag;
      while (keys[tmp] !== undefined) {
        if (obj[tmp7] === obj[tmp7]) {
          continue;
        } else {
          delete closure_3[tmp8];
          flag = true;
          continue;
        }
        continue;
      }
    }
    return flag2;
  },
  USER_SETTINGS_OVERRIDE_APPLY: function handleApplySettingsOverride(settings) {
    settings = settings.settings;
    obj = {};
    const merged = Object.assign(closure_3);
    const merged1 = Object.assign(settings);
    closure_3 = obj;
  },
  USER_SETTINGS_OVERRIDE_CLEAR: function handleClearSettingsOverride(settings) {
    settings = settings.settings;
    for (const item10006 of settings) {
      delete closure_3[item10006];
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
const result = size.fileFinishedImporting("modules/user_settings/UserSettingsOverridesStore.tsx");

export default userSettingsOverridesStore;
