// discord_app/modules/client_themes/native/CustomThemeMobileStore.tsx
import initialize from "initialize";
import handleThemeChange from "handleThemeChange";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { PersistedStore } from "initialize";
import { create } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { isPerModeThemingActive } from "../../user_settings/isPerModeThemingActive.tsx";
import { getThemeForColor } from "../ClientThemesUtils.tsx";

const require = arg1;
function reset() {
  let c3;
  let c4;
  let c5;
}
function handleSyncedModeChange() {
  return isPerModeThemingActive.isPerModeThemingActive(isSyncedModeThemesEnabled);
}
function handleSameAsDeviceThemeToggle() {
  return useIsMobileVisualRefreshExperimentEnabled.isMobileVisualRefreshEnabled("CustomThemeMobileStore");
}
function loadFromProtoSettings() {
  if (initialize.shouldSync("appearance")) {
    const appearance = handleConnectionClosedOrResumed.settings.appearance;
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
      dispatcher.wait(() => callback(table[8]).dispatch({ type: "REFRESH_THEME" }));
      const obj2 = dispatcher;
    }
  }
}
function handleSelectivelySyncedUserSettingsUpdate() {
  if (initialize.shouldSync("appearance")) {
    const appearance = handleConnectionClosedOrResumed.settings.appearance;
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
      dispatcher.wait(() => callback(table[8]).dispatch({ type: "REFRESH_THEME" }));
      const obj2 = dispatcher;
    }
  }
}
function isSyncedModeThemesEnabled() {
  return useIsMobileVisualRefreshExperimentEnabled.isMobileVisualRefreshEnabled("CustomThemeMobileStore");
}
class CustomThemeMobileStore extends PersistedStore {
}
const prototype = CustomThemeMobileStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let customTheme = arg0;
  if (null == arg0) {
    const self = this;
    const self2 = this;
    this.waitFor(initialize, handleThemeChange, CHANNEL_SIDEBAR_WIDTH, handleConnectionClosedOrResumed);
    const items = [initialize];
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
    obj = { theme: "Array", customTheme: "HermesInternal" };
  }
  return obj;
};
prototype["getCustomTheme"] = function getCustomTheme() {
  let obj = isPerModeThemingActive;
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
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
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
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
    if (obj5.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
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
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
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
const customThemeMobileStore = new CustomThemeMobileStore(require("dispatcher"), {
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
    let c5;
  },
  RESET_CUSTOM_THEME: reset,
  CACHE_LOADED: loadFromProtoSettings,
  POST_CONNECTION_OPEN: loadFromProtoSettings,
  USER_SETTINGS_PROTO_UPDATE: function handleUserSettingsProtoUpdate(settings) {
    settings = settings.settings;
    if (initialize.shouldSync("appearance")) {
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
        dispatcher.wait(() => callback(table[8]).dispatch({ type: "REFRESH_THEME" }));
        const obj2 = dispatcher;
      }
    }
  },
  LOGOUT: reset
});
const result = require("CHANNEL_SIDEBAR_WIDTH").fileFinishedImporting("modules/client_themes/native/CustomThemeMobileStore.tsx");

export default customThemeMobileStore;