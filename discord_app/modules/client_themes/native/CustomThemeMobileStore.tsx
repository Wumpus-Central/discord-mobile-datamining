// discord_app/modules/client_themes/native/CustomThemeMobileStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ClientThemesUtils from "../ClientThemesUtils.tsx";
import isPerModeThemingActive from "../../user_settings/isPerModeThemingActive.tsx";
import SelectivelySyncedUserSettingsStore from "../../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";

require = fn;
function reset() {
  closure_3 = undefined;
  prop = undefined;
  c5 = undefined;
}
function handleSyncedModeChange() {
  return isPerModeThemingActive.isPerModeThemingActive();
}
function handleSameAsDeviceThemeToggle() {
  return true;
}
function loadFromProtoSettings() {
  if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
    const appearance = UserSettingsProtoStore.settings.appearance;
    if (null != appearance) {
      let UNSET = appearance.theme;
      if (UNSET == null) {
        UNSET = preloaded_user_settings.Theme.UNSET;
      }
      const baseTheme = ClientThemesUtils.getBaseTheme(UNSET);
      const clientThemeSettings = appearance.clientThemeSettings;
      prop = undefined;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
      DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "REFRESH_THEME" }));
    }
  }
}
function handleSelectivelySyncedUserSettingsUpdate() {
  if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
    const appearance = UserSettingsProtoStore.settings.appearance;
    if (null != appearance) {
      let UNSET = appearance.theme;
      if (UNSET == null) {
        UNSET = preloaded_user_settings.Theme.UNSET;
      }
      const baseTheme = ClientThemesUtils.getBaseTheme(UNSET);
      const clientThemeSettings = appearance.clientThemeSettings;
      prop = undefined;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
      DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "REFRESH_THEME" }));
    }
  }
}
const UserSettingsTypes = fn(1084).UserSettingsTypes;
const PersistedStore = initializeDefault.PersistedStore;
class CustomThemeMobileStore extends PersistedStore {}
const prototype = CustomThemeMobileStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let customTheme = arg0;
  if (null == arg0) {
    const self = this;
    const self2 = this;
    this.waitFor(SelectivelySyncedUserSettingsStore, ThemeStore, UnsyncedUserSettingsStore, UserSettingsProtoStore);
    const items = [SelectivelySyncedUserSettingsStore];
    this.syncWith(items, handleSelectivelySyncedUserSettingsUpdate);
  } else {
    if (null == customTheme.theme) {
      const theme = customTheme.theme;
      customTheme = customTheme.customTheme;
      prop = customTheme;
    } else {
      const customTheme2 = customTheme.customTheme;
      let tmp = null != customTheme.theme && null != customTheme2;
      if (tmp) {
        tmp = customTheme2.colors.length > 0;
      }
    }
    const customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(customTheme.theme);
  }
};
prototype["getState"] = function getState() {
  let tmp2 = null != theme && null != prop;
  if (tmp2) {
    tmp2 = prop.colors.length > 0;
  }
  if (tmp2) {
    let obj = { theme, customTheme: prop };
  } else {
    obj = { theme: "hash", customTheme: "call" };
  }
  return obj;
};
prototype["getCustomTheme"] = function getCustomTheme() {
  let obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive()) {
    obj = ThemeStore;
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
    prop = undefined;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null == prop) {
      let theme = obj.theme;
    } else {
      theme = ClientThemesUtils.getCustomThemeBaseTheme(obj.theme);
      const tmpResult = ClientThemesUtils;
    }
    obj = { baseTheme: theme, customTheme: prop };
  } else {
    obj = { baseTheme, customTheme: prop };
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
    obj = ThemeStore;
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
    prop = undefined;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null == prop) {
      let theme = obj.theme;
    } else {
      theme = ClientThemesUtils.getCustomThemeBaseTheme(obj.theme);
      const tmpResult = ClientThemesUtils;
    }
    obj = { baseTheme: theme, customTheme: prop };
  } else {
    obj = { baseTheme, customTheme: prop };
    const customTheme = obj.customTheme;
    let tmp10 = null != obj.baseTheme && null != customTheme;
    if (tmp10) {
      tmp10 = customTheme.colors.length > 0;
    }
    baseTheme = undefined;
    if (tmp10) {
      baseTheme = obj.baseTheme;
    }
    return baseTheme;
  }
};
prototype["getPreviewTheme"] = function getPreviewTheme() {
  return c5;
};
prototype["getCustomThemeDisplaySettings"] = function getCustomThemeDisplaySettings() {
  if (undefined !== c5) {
    return c5;
  } else {
    if (obj5.isPerModeThemingActive()) {
      let obj = ThemeStore;
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
      prop = undefined;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      if (null == prop) {
        let theme = obj.theme;
      } else {
        theme = ClientThemesUtils.getCustomThemeBaseTheme(obj.theme);
        const tmp10Result = ClientThemesUtils;
      }
      obj = { baseTheme: theme, customTheme: prop };
    } else {
      obj = { baseTheme, customTheme: prop };
      const customTheme = obj.customTheme;
      let tmp8 = null != obj.baseTheme && null != customTheme;
      if (tmp8) {
        tmp8 = customTheme.colors.length > 0;
      }
      let tmp9;
      if (tmp8) {
        obj = { baseTheme: null, customTheme: null };
        ({ baseTheme: obj4.baseTheme, customTheme: obj4.customTheme } = obj);
        tmp9 = obj;
      }
      return tmp9;
    }
    obj5 = isPerModeThemingActive;
  }
};
prototype["hasCustomTheme"] = function hasCustomTheme() {
  let obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive()) {
    obj = ThemeStore;
    const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
    prop = undefined;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    if (null == prop) {
      let theme = obj.theme;
    } else {
      theme = ClientThemesUtils.getCustomThemeBaseTheme(obj.theme);
      const tmpResult = ClientThemesUtils;
    }
    obj = { baseTheme: theme, customTheme: prop };
  } else {
    obj = { baseTheme, customTheme: prop };
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
const customThemeMobileStore = new CustomThemeMobileStore(DispatcherDefault, {
  UPDATE_CUSTOM_THEME: function handleUpdateCustomTheme(customTheme) {
    prop = customTheme.customTheme;
    const customThemeBaseTheme = ClientThemesUtils.getCustomThemeBaseTheme(customTheme.theme);
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
    obj.baseTheme = ClientThemesUtils.getCustomThemeBaseTheme(previewCustomTheme.baseTheme);
    c5 = obj;
  },
  CLEAR_PREVIEW_CUSTOM_THEME: function clearPreviewTheme() {
    c5 = undefined;
  },
  RESET_CUSTOM_THEME: reset,
  CACHE_LOADED: loadFromProtoSettings,
  POST_CONNECTION_OPEN: loadFromProtoSettings,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    settings = settings.settings;
    if (SelectivelySyncedUserSettingsStore.shouldSync("appearance")) {
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
          UNSET = preloaded_user_settings.Theme.UNSET;
        }
        const baseTheme = ClientThemesUtils.getBaseTheme(UNSET);
        const clientThemeSettings = tmp3.clientThemeSettings;
        prop = undefined;
        if (clientThemeSettings != null) {
          prop = clientThemeSettings.customUserThemeSettings;
        }
        DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "REFRESH_THEME" }));
      }
    }
  },
  LOGOUT: reset,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileStore.tsx");

export default customThemeMobileStore;
