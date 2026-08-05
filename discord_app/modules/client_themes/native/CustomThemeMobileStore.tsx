import { create } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { isPerModeThemingActive } from "../../user_settings/isPerModeThemingActive.tsx";
// discord_app/modules/client_themes/native/CustomThemeMobileStore.tsx
import initialize from "initialize";
import handleThemeChange from "handleThemeChange";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { PROTO_THEME_MAP_MOBILE } from "SystemThemeState";
import { UserSettingsTypes } from "MAX_FAVORITES";
import { PersistedStore } from "initialize";

const require = arg1;
function reset() {
  let c2;
  let c3;
  let c4;
}
function handleSyncedModeChange() {
  return isPerModeThemingActive /* isPerModeThemingActive */.isPerModeThemingActive(isSyncedModeThemesEnabled);
}
function handleSameAsDeviceThemeToggle() {
  return useIsMobileVisualRefreshExperimentEnabled /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("CustomThemeMobileStore");
}
function loadFromProtoSettings() {
  if (initialize.shouldSync("appearance")) {
    const appearance = handleConnectionClosedOrResumed.settings.appearance;
    if (null != appearance) {
      let UNSET = appearance.theme;
      if (UNSET == null) {
        UNSET = create /* create */.Theme.UNSET;
      }
      let closure_2 = PROTO_THEME_MAP_MOBILE[UNSET];
      const clientThemeSettings = appearance.clientThemeSettings;
      let prop;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
  }
}
function handleSelectivelySyncedUserSettingsUpdate() {
  if (initialize.shouldSync("appearance")) {
    const appearance = handleConnectionClosedOrResumed.settings.appearance;
    if (null != appearance) {
      let UNSET = appearance.theme;
      if (UNSET == null) {
        UNSET = create /* create */.Theme.UNSET;
      }
      let closure_2 = PROTO_THEME_MAP_MOBILE[UNSET];
      const clientThemeSettings = appearance.clientThemeSettings;
      let prop;
      if (clientThemeSettings != null) {
        prop = clientThemeSettings.customUserThemeSettings;
      }
    }
  }
}
function isSyncedModeThemesEnabled() {
  return useIsMobileVisualRefreshExperimentEnabled /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("CustomThemeMobileStore");
}
class CustomThemeMobileStore extends PersistedStore {
}
const prototype = CustomThemeMobileStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let closure_2;
  let closure_3;
  if (null != arg0) {
    ({ theme: closure_2, customTheme: closure_3 } = arg0);
  }
  this.waitFor(initialize, handleThemeChange, CHANNEL_SIDEBAR_WIDTH, handleConnectionClosedOrResumed);
  const items = [initialize];
  this.syncWith(items, handleSelectivelySyncedUserSettingsUpdate);
};
prototype["getState"] = function getState() {
  let tmp2 = null != closure_2 && null != tmp;
  if (tmp2) {
    tmp2 = tmp.colors.length > 0;
  }
  if (tmp2) {
    let obj = { theme: null, customTheme: null };
    obj[0] = closure_2;
    obj[1] = closure_3;
  } else {
    obj = { theme: "body", customTheme: "useStateFromStores" };
  }
  return obj;
};
prototype["getCustomTheme"] = function getCustomTheme() {
  let obj = isPerModeThemingActive /* isPerModeThemingActive */;
  obj = { baseTheme: null, customTheme: null };
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
    obj[0] = store.theme;
    const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    obj[1] = prop;
    let tmp3 = obj;
  } else {
    obj[0] = closure_2;
    obj[1] = closure_3;
    tmp3 = obj;
  }
  let customTheme = tmp3.customTheme;
  let tmp8 = null != tmp3.baseTheme && null != customTheme;
  if (tmp8) {
    tmp8 = customTheme.colors.length > 0;
  }
  customTheme = undefined;
  if (tmp8) {
    customTheme = tmp3.customTheme;
  }
  return customTheme;
};
prototype["getBaseTheme"] = function getBaseTheme() {
  let obj = isPerModeThemingActive /* isPerModeThemingActive */;
  obj = { baseTheme: null, customTheme: null };
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
    obj[0] = store.theme;
    const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    obj[1] = prop;
    let tmp3 = obj;
  } else {
    obj[0] = closure_2;
    obj[1] = closure_3;
    tmp3 = obj;
  }
  const customTheme = tmp3.customTheme;
  let tmp8 = null != tmp3.baseTheme && null != customTheme;
  if (tmp8) {
    tmp8 = customTheme.colors.length > 0;
  }
  let baseTheme;
  if (tmp8) {
    baseTheme = tmp3.baseTheme;
  }
  return baseTheme;
};
prototype["getPreviewTheme"] = function getPreviewTheme() {
  return closure_4;
};
prototype["getCustomThemeDisplaySettings"] = function getCustomThemeDisplaySettings() {
  if (undefined !== closure_4) {
    return closure_4;
  } else {
    let obj = { baseTheme: null, customTheme: null };
    if (obj2.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
      obj[0] = store.theme;
      const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.customUserThemeSettings;
      }
      obj[1] = prop;
      let tmp3 = obj;
    } else {
      obj[0] = closure_2;
      obj[1] = closure_3;
      tmp3 = obj;
    }
    const customTheme = tmp3.customTheme;
    let tmp9 = null != tmp3.baseTheme && null != customTheme;
    if (tmp9) {
      tmp9 = customTheme.colors.length > 0;
    }
    let tmp10;
    if (tmp9) {
      obj = { baseTheme: null, customTheme: null };
      ({ baseTheme: obj[0], customTheme: obj[1] } = tmp3);
      tmp10 = obj;
    }
    return tmp10;
  }
};
prototype["hasCustomTheme"] = function hasCustomTheme() {
  let obj = isPerModeThemingActive /* isPerModeThemingActive */;
  obj = { baseTheme: null, customTheme: null };
  if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
    obj[0] = store.theme;
    const syncedClientTheme = store.getSyncedClientTheme(store.systemTheme);
    let prop;
    if (syncedClientTheme != null) {
      prop = syncedClientTheme.customUserThemeSettings;
    }
    obj[1] = prop;
    let tmp3 = obj;
  } else {
    obj[0] = closure_2;
    obj[1] = closure_3;
    tmp3 = obj;
  }
  const customTheme = tmp3.customTheme;
  let tmp8 = null != tmp3.baseTheme && null != customTheme;
  if (tmp8) {
    tmp8 = customTheme.colors.length > 0;
  }
  return tmp8;
};
CustomThemeMobileStore.displayName = "CustomThemeMobileStore";
CustomThemeMobileStore.persistKey = "CustomThemeMobileStore";
const customThemeMobileStore = new CustomThemeMobileStore(require("dispatcher"), {
  UPDATE_CUSTOM_THEME: function handleUpdateCustomTheme(arg0) {
    let closure_2;
    let closure_3;
    ({ customTheme: closure_3, theme: closure_2 } = arg0);
  },
  SYSTEM_THEME_CHANGE: handleSyncedModeChange,
  UPDATE_SYNCED_CLIENT_THEME: handleSyncedModeChange,
  UPDATE_THEME_PREFERENCES: handleSyncedModeChange,
  SET_SAME_AS_DEVICE_THEME_ENABLED: handleSameAsDeviceThemeToggle,
  CLEAR_SYNCED_CLIENT_THEMES: handleSameAsDeviceThemeToggle,
  PREVIEW_CUSTOM_THEME: function previewCustomTheme(previewCustomTheme) {
    previewCustomTheme = previewCustomTheme.previewCustomTheme;
  },
  CLEAR_PREVIEW_CUSTOM_THEME: function clearPreviewTheme() {
    let c4;
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
          UNSET = create /* create */.Theme.UNSET;
        }
        let closure_2 = PROTO_THEME_MAP_MOBILE[UNSET];
        const clientThemeSettings = tmp3.clientThemeSettings;
        let prop;
        if (clientThemeSettings != null) {
          prop = clientThemeSettings.customUserThemeSettings;
        }
      }
    }
  },
  LOGOUT: reset
});
const result = require("CHANNEL_SIDEBAR_WIDTH").fileFinishedImporting("modules/client_themes/native/CustomThemeMobileStore.tsx");

export default customThemeMobileStore;