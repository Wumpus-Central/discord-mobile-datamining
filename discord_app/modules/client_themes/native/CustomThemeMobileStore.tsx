// discord_app/modules/client_themes/native/CustomThemeMobileStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import UserSettingsConstants from "../../user_settings/UserSettingsConstants.tsx";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ClientThemesUtils from "../ClientThemesUtils.tsx";
import isPerModeThemingActive from "../../user_settings/isPerModeThemingActive.tsx";
import SelectivelySyncedUserSettingsStore from "../../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../../user_settings/ThemeStore.tsx";
import UnsyncedUserSettingsStore from "../../user_settings/UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "../../user_settings/UserSettingsProtoStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c5, closure_3, prop;

const f83792 = () => {
  const obj = DispatcherDefault;
  return obj.dispatch({ type: "REFRESH_THEME" });
};
function reset() {
  closure_3 = undefined;
  prop = undefined;
  c5 = undefined;
}
function handleSyncedModeChange() {
  const obj = isPerModeThemingActive;
  return obj.isPerModeThemingActive();
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
      const obj = ClientThemesUtils;
      const baseTheme = obj.getBaseTheme(UNSET);
      const clientThemeSettings = appearance.clientThemeSettings;
      prop = undefined;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
      const obj2 = DispatcherDefault;
      obj2.wait(f83792);
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
      const obj = ClientThemesUtils;
      const baseTheme = obj.getBaseTheme(UNSET);
      const clientThemeSettings = appearance.clientThemeSettings;
      prop = undefined;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
      const obj2 = DispatcherDefault;
      obj2.wait(f83792);
    }
  }
}
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const PersistedStore = get_initializedDefault.PersistedStore;
class CustomThemeMobileStore extends PersistedStore {
  initialize(theme) {
    if (null != theme) {
      if (null != theme.theme) {
        const customTheme = theme.customTheme;
        const tmp = null != theme.theme && null != customTheme && customTheme.colors.length > 0;
        if (tmp) {
          const obj = ClientThemesUtils;
          theme = obj.getCustomThemeBaseTheme(theme.theme);
        }
        closure_3 = theme;
        prop = theme.customTheme;
      }
      theme = theme.theme;
    }
    this.waitFor(SelectivelySyncedUserSettingsStore, ThemeStore, UnsyncedUserSettingsStore, UserSettingsProtoStore);
    const items = [SelectivelySyncedUserSettingsStore];
    this.syncWith(items, handleSelectivelySyncedUserSettingsUpdate);
  }
  getState() {
    let obj;
    const tmp2 = null != theme && null != prop && prop.colors.length > 0;
    if (tmp2) {
      obj = { theme, customTheme: prop };
      const obj2 = { theme, customTheme: prop };
    } else {
      obj = { theme: "start", customTheme: "unicodeVersion" };
    }
    return obj;
  }
  getCustomTheme() {
    let obj3;
    const obj = isPerModeThemingActive;
    if (obj.isPerModeThemingActive()) {
      let theme;
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
      prop = undefined;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      if (null == prop) {
        theme = ThemeStore.theme;
      } else {
        const tmpResult = ClientThemesUtils;
        theme = tmpResult.getCustomThemeBaseTheme(ThemeStore.theme);
      }
      obj3 = { baseTheme: theme, customTheme: prop };
      const obj2 = { baseTheme: theme, customTheme: prop };
    } else {
      obj3 = { baseTheme, customTheme: prop };
    }
    const customTheme = obj3.customTheme;
    let customTheme1;
    const tmp9 = null != obj3.baseTheme && null != customTheme && customTheme.colors.length > 0;
    if (tmp9) {
      customTheme1 = obj3.customTheme;
    }
    return customTheme1;
  }
  getBaseTheme() {
    let baseTheme;
    let obj3;
    const obj = isPerModeThemingActive;
    if (obj.isPerModeThemingActive()) {
      let theme;
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
      prop = undefined;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      if (null == prop) {
        theme = ThemeStore.theme;
      } else {
        const tmpResult = ClientThemesUtils;
        theme = tmpResult.getCustomThemeBaseTheme(ThemeStore.theme);
      }
      obj3 = { baseTheme: theme, customTheme: prop };
      const obj2 = { baseTheme: theme, customTheme: prop };
    } else {
      obj3 = { baseTheme, customTheme: prop };
    }
    const customTheme = obj3.customTheme;
    baseTheme = undefined;
    const tmp9 = null != obj3.baseTheme && null != customTheme && customTheme.colors.length > 0;
    if (tmp9) {
      baseTheme = obj3.baseTheme;
    }
    return baseTheme;
  }
  getPreviewTheme() {
    return c5;
  }
  getCustomThemeDisplaySettings() {
    if (undefined !== c5) {
      return c5;
    } else {
      let obj;
      const obj5 = isPerModeThemingActive;
      if (obj5.isPerModeThemingActive()) {
        let theme;
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
        prop = undefined;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.customUserThemeSettings;
        }
        if (null == prop) {
          theme = ThemeStore.theme;
        } else {
          const tmp10Result = ClientThemesUtils;
          theme = tmp10Result.getCustomThemeBaseTheme(ThemeStore.theme);
        }
        obj = { baseTheme: theme, customTheme: prop };
        const obj2 = { baseTheme: theme, customTheme: prop };
      } else {
        obj = { baseTheme, customTheme: prop };
      }
      const customTheme = obj.customTheme;
      let tmp9;
      const tmp8 = null != obj.baseTheme && null != customTheme && customTheme.colors.length > 0;
      if (tmp8) {
        const obj3 = { baseTheme: null, customTheme: null };
        ({ baseTheme: obj4.baseTheme, customTheme: obj4.customTheme } = obj);
        tmp9 = obj3;
      }
      return tmp9;
    }
  }
  hasCustomTheme() {
    let obj3;
    const obj = isPerModeThemingActive;
    if (obj.isPerModeThemingActive()) {
      let theme;
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
      prop = undefined;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      if (null == prop) {
        theme = ThemeStore.theme;
      } else {
        const tmpResult = ClientThemesUtils;
        theme = tmpResult.getCustomThemeBaseTheme(ThemeStore.theme);
      }
      obj3 = { baseTheme: theme, customTheme: prop };
      const obj2 = { baseTheme: theme, customTheme: prop };
    } else {
      obj3 = { baseTheme, customTheme: prop };
    }
    const customTheme = obj3.customTheme;
    return null != obj3.baseTheme && null != customTheme && customTheme.colors.length > 0;
  }
}
const prototype = CustomThemeMobileStore.prototype;
CustomThemeMobileStore.displayName = "CustomThemeMobileStore";
CustomThemeMobileStore.persistKey = "CustomThemeMobileStore";
let obj = {
  UPDATE_CUSTOM_THEME: function handleUpdateCustomTheme(customTheme) {
    prop = customTheme.customTheme;
    const theme = customTheme.theme;
    const obj = ClientThemesUtils;
    const customThemeBaseTheme = obj.getCustomThemeBaseTheme(theme);
  },
  SYSTEM_THEME_CHANGE: handleSyncedModeChange,
  UPDATE_SYNCED_CLIENT_THEME: handleSyncedModeChange,
  UPDATE_THEME_PREFERENCES: handleSyncedModeChange,
  SET_SAME_AS_DEVICE_THEME_ENABLED: handleSameAsDeviceThemeToggle,
  CLEAR_SYNCED_CLIENT_THEMES: handleSameAsDeviceThemeToggle,
  PREVIEW_CUSTOM_THEME: function previewCustomTheme(previewCustomTheme) {
    let obj2;
    previewCustomTheme = previewCustomTheme.previewCustomTheme;
    const obj = { baseTheme: obj2.getCustomThemeBaseTheme(previewCustomTheme.baseTheme) };
    const merged = Object.assign(previewCustomTheme);
    c5 = obj;
    obj2 = ClientThemesUtils;
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
        let obj = ClientThemesUtils;
        const baseTheme = obj.getBaseTheme(UNSET);
        const clientThemeSettings = tmp3.clientThemeSettings;
        prop = undefined;
        if (clientThemeSettings != null) {
          prop = clientThemeSettings.customUserThemeSettings;
        }
        const obj2 = DispatcherDefault;
        obj2.wait(f83792);
      }
    }
  },
  LOGOUT: reset,
};
const customThemeMobileStore = new CustomThemeMobileStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/client_themes/native/CustomThemeMobileStore.tsx");

export default customThemeMobileStore;
