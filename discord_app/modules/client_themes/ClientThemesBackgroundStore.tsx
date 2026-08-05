// discord_app/modules/client_themes/ClientThemesBackgroundStore.tsx
import initialize from "initialize";
import handleThemeChange from "handleThemeChange";
import CHANNEL_SIDEBAR_WIDTH from "CHANNEL_SIDEBAR_WIDTH";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import { isGuildTextChannelType } from "createChannelRecord";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_12 } from "items1";
import { SystemThemeState } from "SystemThemeState";
import { PersistedStore } from "initialize";
import { DismissibleContent } from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { getPremiumPlanItem } from "../../utils/PremiumUtils.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { isPerModeThemingActive } from "../user_settings/isPerModeThemingActive.tsx";
import { setSystemTheme } from "../user_settings/ThemeActionCreators.tsx";
import { explicitContentFromProto } from "../user_settings/UserSettings.tsx";
import { getThemeForColor } from "ClientThemesUtils.tsx";

const require = arg1;
function isSyncedModeThemesEnabled() {
  return useIsMobileVisualRefreshExperimentEnabled /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("ClientThemesBackgroundStore");
}
function reset() {
  if (c14) {
    let c3;
  }
  let c15 = false;
}
function handleUserStoreChange() {
  const tmp = !getPremiumPlanItem.canUseClientThemes(currentUser.getCurrentUser());
  if (tmp === c14) {
    return false;
  } else {
    c14 = tmp;
  }
  const obj = getPremiumPlanItem;
}
function handleSelectivelySyncedStoreChange() {
  if (initialize.shouldSync("appearance")) {
    const ClientThemeSettings = explicitContentFromProto /* explicitContentFromProto */.ClientThemeSettings;
    const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
    if (null == backgroundGradientPresetId) {
      if (null == c3) {
        return false;
      } else {
        c3 = undefined;
      }
    } else if (dependencyMap[backgroundGradientPresetId] === c3) {
      return false;
    } else {
      c3 = tmp5;
    }
  } else {
    return false;
  }
}
function handleSyncedModeChange() {
  return isPerModeThemingActive /* isPerModeThemingActive */.isPerModeThemingActive(isSyncedModeThemesEnabled);
}
function handleSameAsDeviceThemeToggle() {
  return useIsMobileVisualRefreshExperimentEnabled /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("ClientThemesBackgroundStore");
}
function handleUserSettingsProtoStoreUpdate() {
  if (initialize.shouldSync("appearance")) {
    const ClientThemeSettings = explicitContentFromProto /* explicitContentFromProto */.ClientThemeSettings;
    const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
    let result = useSystemTheme.useSystemTheme !== SystemThemeState.ON;
    if (!result) {
      result = null == backgroundGradientPresetId;
    }
    if (!result) {
      result = handleThemeChange.isSameAsDeviceThemeEnabled();
    }
    if (!result) {
      setSystemTheme /* setSystemTheme */.setUseSystemTheme(SystemThemeState.OFF);
      const tmpResult = setSystemTheme /* setSystemTheme */;
    }
    if (null != backgroundGradientPresetId) {
      let tmp13 = null == tmp12;
      if (!tmp13) {
        let id;
        if (user != null) {
          id = user.id;
        }
        let id1;
        if (tmp12 != null) {
          id1 = tmp12.id;
        }
        tmp13 = id === id1;
      }
      if (!tmp13) {
        user = tmp12;
      }
    } else if (null != user) {
      user = undefined;
    }
  } else {
    return false;
  }
}
let c14 = true;
let c15 = false;
class ClientThemesBackgroundStore extends PersistedStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    items = [];
    items[0] = (gradientPreset) => {
      let gradientPresetId;
      if (gradientPreset != null) {
        gradientPreset = gradientPreset.gradientPreset;
        if (gradientPreset != null) {
          gradientPresetId = gradientPreset.id;
        }
      }
      return { gradientPresetId };
    };
    applyArgumentsResult.migrations = items;
    return applyArgumentsResult;
  }
}
const prototype = ClientThemesBackgroundStore.prototype;
prototype["initialize"] = function initialize(gradientPresetId) {
  if (null != gradientPresetId) {
    gradientPresetId = undefined;
    if (gradientPresetId != null) {
      gradientPresetId = gradientPresetId.gradientPresetId;
    }
    let tmp2;
    if (null != gradientPresetId) {
      tmp2 = dependencyMap[gradientPresetId.gradientPresetId];
    }
    let closure_3 = tmp2;
  }
  this.waitFor(ensureGuildLoaded, initialize, handleThemeChange, CHANNEL_SIDEBAR_WIDTH, handleConnectionClosedOrResumed, mergeGuildAvatar);
  const items = [mergeGuildAvatar];
  this.syncWith(items, handleUserStoreChange);
  const items1 = [initialize];
  this.syncWith(items1, handleSelectivelySyncedStoreChange);
};
prototype["getState"] = function getState() {
  if (c14) {
    let obj = {};
  } else {
    let id;
    if (user != null) {
      id = user.id;
    }
    obj = { gradientPresetId: null };
    obj[0] = id;
  }
  return obj;
};
Object.defineProperty(prototype, "gradientPreset", {
  get: function gradientPreset() {
    if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
      const syncedClientTheme = handleThemeChange.getSyncedClientTheme(handleThemeChange.systemTheme);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.backgroundGradientPresetId;
      }
      let tmp6;
      if (null != prop) {
        tmp6 = dependencyMap[prop];
      }
      return tmp6;
    } else {
      return closure_3;
    }
    obj = isPerModeThemingActive /* isPerModeThemingActive */;
  },
  set: undefined
});
prototype["getLinearGradient"] = function getLinearGradient() {
  let linearGradientForBackgroundGradient = null;
  if (null != this.gradientPreset) {
    linearGradientForBackgroundGradient = getThemeForColor /* getThemeForColor */.getLinearGradientForBackgroundGradient(tmp.gradientPreset);
    const obj = getThemeForColor /* getThemeForColor */;
  }
  return linearGradientForBackgroundGradient;
};
Object.defineProperty(prototype, "isPreview", {
  get: function isPreview() {
    return c14;
  },
  set: undefined
});
Object.defineProperty(prototype, "isCoachmark", {
  get: function isCoachmark() {
    return c15;
  },
  set: undefined
});
Object.defineProperty(prototype, "mobilePendingThemeIndex", {
  get: function mobilePendingThemeIndex() {
    return closure_4;
  },
  set: undefined
});
ClientThemesBackgroundStore.displayName = "ClientThemesBackgroundStore";
ClientThemesBackgroundStore.persistKey = "ClientThemesBackgroundStore";
const clientThemesBackgroundStore = new ClientThemesBackgroundStore(require("dispatcher"), {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    let tmp;
    if (null != presetId) {
      tmp = dependencyMap[presetId];
    }
    let closure_3 = tmp;
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: function handleUpdateMobilePendingThemeIndex(mobileThemesIndex) {
    mobileThemesIndex = mobileThemesIndex.mobileThemesIndex;
    let tmp;
    if (null != mobileThemesIndex) {
      tmp = mobileThemesIndex;
    }
    let closure_4 = tmp;
  },
  RESET_PREVIEW_CLIENT_THEME: function handleResetPreviewClientTheme() {
    let c3;
  },
  CLIENT_THEMES_EDITOR_CLOSE: reset,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != channelId.guildId) {
        if (!obj2.UNSAFE_isDismissibleContentDismissed(DismissibleContent /* DismissibleContent */.DismissibleContent.CLIENT_THEMES_COACHMARK)) {
          if (tmp6Result.ageEligibleForPremiumUpsell(tmp)) {
            channel = channel.getChannel(channelId);
            let tmp4 = null != channel;
            if (tmp4) {
              tmp4 = isGuildTextChannelType(channel.type);
            }
            if (tmp4) {
              let c15 = true;
            }
          }
          tmp6Result = tmp6(4124);
        }
        obj2 = UNSAFE_isDismissibleContentDismissed /* UNSAFE_isDismissibleContentDismissed */;
        tmp6 = require;
      }
    }
  },
  LOGOUT: reset,
  CACHE_LOADED: handleUserSettingsProtoStoreUpdate,
  CONNECTION_OPEN: handleUserSettingsProtoStoreUpdate,
  OVERLAY_INITIALIZE: handleUserSettingsProtoStoreUpdate,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: handleUserSettingsProtoStoreUpdate,
  UNSYNCED_USER_SETTINGS_UPDATE: handleUserSettingsProtoStoreUpdate,
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsProtoStoreUpdate,
  SYSTEM_THEME_CHANGE: handleSyncedModeChange,
  UPDATE_SYNCED_CLIENT_THEME: handleSyncedModeChange,
  SET_SAME_AS_DEVICE_THEME_ENABLED: handleSameAsDeviceThemeToggle,
  CLEAR_SYNCED_CLIENT_THEMES: handleSameAsDeviceThemeToggle
});
let result = require("CHANNEL_SIDEBAR_WIDTH").fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default clientThemesBackgroundStore;