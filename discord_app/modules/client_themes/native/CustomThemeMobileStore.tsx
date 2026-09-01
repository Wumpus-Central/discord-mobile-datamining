// discord_app/modules/client_themes/native/CustomThemeMobileStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import create from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import getThemeForColor from "../ClientThemesUtils.tsx";
import isPerModeThemingActive from "../../user_settings/isPerModeThemingActive.tsx";
import closure_6 from "../../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import closure_7 from "../../user_settings/ThemeStore.tsx";
import closure_8 from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_9 from "../../user_settings/UserSettingsProtoStore.tsx";
import { UserSettingsTypes } from "../../user_settings/UserSettingsConstants.tsx";

require = arg1;
function reset() {
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
}
function handleSyncedModeChange() {
  return isPerModeThemingActive.isPerModeThemingActive();
}
function handleSameAsDeviceThemeToggle() {
  return true;
}
function loadFromProtoSettings() {
  if (closure_6.shouldSync("appearance")) {
    const appearance = closure_9.settings.appearance;
    if (null != appearance) {
      let UNSET = appearance.theme;
      if (UNSET == null) {
        UNSET = create.Theme.UNSET;
      }
      const baseTheme = getThemeForColor.getBaseTheme(UNSET);
      const clientThemeSettings = appearance.clientThemeSettings;
      let prop;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
      const obj = getThemeForColor;
      dispatcherDefault.wait(() => callback(table[8]).dispatch({ type: "REFRESH_THEME" }));
      const obj2 = dispatcherDefault;
    }
  }
}
function handleSelectivelySyncedUserSettingsUpdate() {
  if (closure_6.shouldSync("appearance")) {
    const appearance = closure_9.settings.appearance;
    if (null != appearance) {
      let UNSET = appearance.theme;
      if (UNSET == null) {
        UNSET = create.Theme.UNSET;
      }
      const baseTheme = getThemeForColor.getBaseTheme(UNSET);
      const clientThemeSettings = appearance.clientThemeSettings;
      let prop;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
      const obj = getThemeForColor;
      dispatcherDefault.wait(() => callback(table[8]).dispatch({ type: "REFRESH_THEME" }));
      const obj2 = dispatcherDefault;
    }
  }
}
const PersistedStore = initializeDefault.PersistedStore;
class CustomThemeMobileStore extends PersistedStore {}
const prototype = CustomThemeMobileStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let customTheme = arg0;
  if (null == arg0) {
    const self = this;
    const self2 = this;
    this.waitFor(closure_6, closure_7, closure_8, closure_9);
    const items = [closure_6];
    this.syncWith(items, handleSelectivelySyncedUserSettingsUpdate);
  } else {
    if (null == customTheme.theme) {
      const theme = customTheme.theme;
      customTheme = customTheme.customTheme;
    } else {
      const customTheme2 = customTheme.customTheme;
      let tmp = null != customTheme.theme && null != customTheme2;
      if (tmp) {
        tmp = customTheme2.colors.length > 0;
      }
    }
    const customThemeBaseTheme = getThemeForColor.getCustomThemeBaseTheme(customTheme.theme);
    const obj = getThemeForColor;
  }
};
prototype["getState"] = function getState() {
  let tmp2 = null != closure_3 && null != tmp;
  if (tmp2) {
    tmp2 = tmp.colors.length > 0;
  }
  if (tmp2) {
    let obj = { theme: null, customTheme: null };
    obj[0] = closure_3;
    obj[1] = closure_4;
  } else {
    obj = { theme: "children", customTheme: "c" };
  }
  return obj;
};
prototype["getCustomTheme"] = function getCustomTheme() {
  let obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive()) {
    obj = store;
    const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null == prop) {
      let theme = obj.theme;
    } else {
      theme = getThemeForColor.getCustomThemeBaseTheme(obj.theme);
      const tmpResult = getThemeForColor;
    }
    obj = { baseTheme: null, customTheme: null };
    obj[0] = theme;
    obj[1] = prop;
  } else {
    obj = { baseTheme: null, customTheme: null };
    obj[0] = closure_3;
    obj[1] = closure_4;
    let customTheme = obj.customTheme;
    let tmp10 = null != obj.baseTheme && null != customTheme;
    if (tmp10) {
      tmp10 = customTheme.colors.length > 0;
    }
    customTheme = undefined;
    if (tmp10) {
      customTheme = obj.customTheme;
    }
    return customTheme;
  }
};
prototype["getBaseTheme"] = function getBaseTheme() {
  let obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive()) {
    obj = store;
    const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null == prop) {
      let theme = obj.theme;
    } else {
      theme = getThemeForColor.getCustomThemeBaseTheme(obj.theme);
      const tmpResult = getThemeForColor;
    }
    obj = { baseTheme: null, customTheme: null };
    obj[0] = theme;
    obj[1] = prop;
  } else {
    obj = { baseTheme: null, customTheme: null };
    obj[0] = closure_3;
    obj[1] = closure_4;
    const customTheme = obj.customTheme;
    let tmp10 = null != obj.baseTheme && null != customTheme;
    if (tmp10) {
      tmp10 = customTheme.colors.length > 0;
    }
    let baseTheme;
    if (tmp10) {
      baseTheme = obj.baseTheme;
    }
    return baseTheme;
  }
};
prototype["getPreviewTheme"] = function getPreviewTheme() {
  return closure_5;
};
prototype["getCustomThemeDisplaySettings"] = function getCustomThemeDisplaySettings() {
  if (undefined !== closure_5) {
    return closure_5;
  } else {
    if (obj5.isPerModeThemingActive()) {
      let obj = store;
      const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      if (null == prop) {
        let theme = obj.theme;
      } else {
        theme = tmp10(1347).getCustomThemeBaseTheme(obj.theme);
        const tmp10Result = tmp10(1347);
      }
      obj = { baseTheme: null, customTheme: null };
      obj[0] = theme;
      obj[1] = prop;
    } else {
      obj = { baseTheme: null, customTheme: null };
      obj[0] = closure_3;
      obj[1] = closure_4;
      const customTheme = obj.customTheme;
      let tmp8 = null != obj.baseTheme && null != customTheme;
      if (tmp8) {
        tmp8 = customTheme.colors.length > 0;
      }
      let tmp9;
      if (tmp8) {
        obj = { baseTheme: null, customTheme: null };
        ({ baseTheme: obj4[0], customTheme: obj4[1] } = obj);
        tmp9 = obj;
      }
      return tmp9;
    }
    obj5 = isPerModeThemingActive;
    tmp10 = require;
  }
};
prototype["hasCustomTheme"] = function hasCustomTheme() {
  let obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive()) {
    obj = store;
    const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null == prop) {
      let theme = obj.theme;
    } else {
      theme = getThemeForColor.getCustomThemeBaseTheme(obj.theme);
      const tmpResult = getThemeForColor;
    }
    obj = { baseTheme: null, customTheme: null };
    obj[0] = theme;
    obj[1] = prop;
  } else {
    obj = { baseTheme: null, customTheme: null };
    obj[0] = closure_3;
    obj[1] = closure_4;
    const customTheme = obj.customTheme;
    let tmp10 = null != obj.baseTheme && null != customTheme;
    if (tmp10) {
      tmp10 = customTheme.colors.length > 0;
    }
    return tmp10;
  }
};
CustomThemeMobileStore.displayName = "CustomThemeMobileStore";
CustomThemeMobileStore.persistKey = "CustomThemeMobileStore";
const customThemeMobileStore = new CustomThemeMobileStore(dispatcherDefault, {
  UPDATE_CUSTOM_THEME: function handleUpdateCustomTheme(customTheme) {
    customTheme = customTheme.customTheme;
    const customThemeBaseTheme = getThemeForColor.getCustomThemeBaseTheme(customTheme.theme);
  },
  SYSTEM_THEME_CHANGE: handleSyncedModeChange,
  UPDATE_SYNCED_CLIENT_THEME: handleSyncedModeChange,
  UPDATE_THEME_PREFERENCES: handleSyncedModeChange,
  SET_SAME_AS_DEVICE_THEME_ENABLED: handleSameAsDeviceThemeToggle,
  CLEAR_SYNCED_CLIENT_THEMES: handleSameAsDeviceThemeToggle,
  PREVIEW_CUSTOM_THEME: function previewCustomTheme(previewCustomTheme) {
    previewCustomTheme = previewCustomTheme.previewCustomTheme;
    const obj = {};
    const merged = Object.assign(previewCustomTheme);
    obj.baseTheme = getThemeForColor.getCustomThemeBaseTheme(previewCustomTheme.baseTheme);
  },
  CLEAR_PREVIEW_CUSTOM_THEME: function clearPreviewTheme() {
    c5 = undefined;
  },
  RESET_CUSTOM_THEME: reset,
  CACHE_LOADED: loadFromProtoSettings,
  POST_CONNECTION_OPEN: loadFromProtoSettings,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    settings = settings.settings;
    if (closure_6.shouldSync("appearance")) {
      let tmp3 = null;
      if (settings.type === UserSettingsTypes.PRELOADED_USER_SETTINGS) {
        const proto = settings.proto;
        let appearance;
        if (proto != null) {
          appearance = proto.appearance;
        }
        tmp3 = appearance;
      }
      if (null != tmp3) {
        let UNSET = tmp3.theme;
        if (UNSET == null) {
          UNSET = create.Theme.UNSET;
        }
        const baseTheme = getThemeForColor.getBaseTheme(UNSET);
        const clientThemeSettings = tmp3.clientThemeSettings;
        let prop;
        if (clientThemeSettings != null) {
          prop = clientThemeSettings.customUserThemeSettings;
        }
        const obj = getThemeForColor;
        dispatcherDefault.wait(() => callback(table[8]).dispatch({ type: "REFRESH_THEME" }));
        const obj2 = dispatcherDefault;
      }
    }
  },
  LOGOUT: reset,
});
const result = require("set").fileFinishedImporting("modules/client_themes/native/CustomThemeMobileStore.tsx");

export default customThemeMobileStore;
