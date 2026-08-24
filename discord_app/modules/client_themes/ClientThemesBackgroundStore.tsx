// discord_app/modules/client_themes/ClientThemesBackgroundStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import getThemeForColor from "ClientThemesUtils.tsx";
import useIsMobileVisualRefreshExperimentEnabled from "../themes/experiments/MobileVisualRefreshExperiment.tsx";
import DismissibleContent from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import getPremiumPlanItemDefault from "../../utils/PremiumUtils.tsx";
import explicitContentFromProto from "../user_settings/UserSettings.tsx";
import UNSAFE_isDismissibleContentDismissed from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import closure_5 from "../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import closure_6 from "../user_settings/ThemeStore.tsx";
import closure_7 from "../user_settings/UnsyncedUserSettingsStore.tsx";
import closure_8 from "../user_settings/UserSettingsProtoStore.tsx";
import { isGuildTextChannelType } from "../../records/ChannelRecord.tsx";
import closure_10 from "../../stores/ChannelStore.tsx";
import closure_11 from "../../stores/UserStore.tsx";
import { BACKGROUND_GRADIENT_PRESETS_MAP as closure_12 } from "ClientThemesConstants.tsx";
import { SystemThemeState } from "../user_settings/ThemeConstants.tsx";
import { isPerModeThemingActive } from "../user_settings/isPerModeThemingActive.tsx";

require = arg1;
function isSyncedModeThemesEnabled() {
  return useIsMobileVisualRefreshExperimentEnabled.isMobileVisualRefreshEnabled("ClientThemesBackgroundStore");
}
function reset() {
  if (c14) {
    c3 = undefined;
  }
  c16 = false;
  c15 = false;
}
function handleUserStoreChange() {
  const tmp = !getPremiumPlanItemDefault.canUseClientThemes(currentUser.getCurrentUser());
  if (tmp === closure_14) {
    return false;
  } else {
    closure_14 = tmp;
    c16 = false;
  }
  const obj = getPremiumPlanItemDefault;
}
function handleSelectivelySyncedStoreChange() {
  const ClientThemeSettings = explicitContentFromProto.ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  if (null == backgroundGradientPresetId) {
    if (null == closure_3) {
      return false;
    } else {
      closure_3 = undefined;
    }
  } else if (dependencyMap[backgroundGradientPresetId] === closure_3) {
    return false;
  } else {
    closure_3 = tmp2;
  }
}
function handleSyncedModeChange() {
  return isPerModeThemingActive /* isPerModeThemingActive */.isPerModeThemingActive(isSyncedModeThemesEnabled);
}
function handleSameAsDeviceThemeToggle() {
  return useIsMobileVisualRefreshExperimentEnabled.isMobileVisualRefreshEnabled("ClientThemesBackgroundStore");
}
function handleUserSettingsProtoStoreUpdate() {
  const ClientThemeSettings = explicitContentFromProto.ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  let result = useSystemTheme.useSystemTheme !== SystemThemeState.ON;
  if (!result) {
    result = null == backgroundGradientPresetId;
  }
  if (!result) {
    let tmpResult = tmp(1366);
    result = tmpResult.isPerModeThemingActive(isSyncedModeThemesEnabled);
  }
  if (!result) {
    tmpResult = tmp(4226);
    tmpResult.setUseSystemTheme(SystemThemeState.OFF);
  }
  if (null != backgroundGradientPresetId) {
    let tmp11 = null == tmp10;
    if (!tmp11) {
      let id;
      if (user != null) {
        id = user.id;
      }
      let id1;
      if (tmp10 != null) {
        id1 = tmp10.id;
      }
      tmp11 = id === id1;
    }
    if (!tmp11) {
      user = tmp10;
    }
  } else if (null != user) {
    user = undefined;
  }
}
let c14 = true;
let c15 = false;
let c16 = false;
const PersistedStore = initializeDefault.PersistedStore;
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
  c16 = false;
  if (null != gradientPresetId) {
    let tmp;
    if (null != gradientPresetId.gradientPresetId) {
      tmp = dependencyMap[gradientPresetId.gradientPresetId];
    }
    closure_3 = tmp;
    closure_14 = true !== gradientPresetId.canUseClientThemes;
  }
  this.waitFor(closure_10, closure_5, closure_6, closure_7, closure_8, closure_11);
  const items = [closure_11];
  this.syncWith(items, handleUserStoreChange);
  const items1 = [closure_5];
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
    obj = { gradientPresetId: null, canUseClientThemes: true };
    obj[0] = id;
  }
  return obj;
};
Object.defineProperty(prototype, "gradientPreset", {
  get: function gradientPreset() {
    if (obj.isPerModeThemingActive(isSyncedModeThemesEnabled)) {
      if (c14) {
        let tmp10;
        if (c16) {
          tmp10 = closure_3;
        }
        return tmp10;
      } else {
        syncedClientTheme = syncedClientTheme.getSyncedClientTheme(syncedClientTheme.systemTheme);
        let prop;
        if (syncedClientTheme != null) {
          prop = syncedClientTheme.backgroundGradientPresetId;
        }
        let tmp7;
        if (null != prop) {
          tmp7 = dependencyMap[prop];
        }
        return tmp7;
      }
    } else {
      return closure_3;
    }
    obj = isPerModeThemingActive;
  },
  set: undefined
});
prototype["getLinearGradient"] = function getLinearGradient() {
  let linearGradientForBackgroundGradient = null;
  if (null != this.gradientPreset) {
    linearGradientForBackgroundGradient = getThemeForColor.getLinearGradientForBackgroundGradient(tmp.gradientPreset);
    const obj = getThemeForColor;
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
const clientThemesBackgroundStore = new ClientThemesBackgroundStore(dispatcherDefault, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    closure_16 = c14;
    let tmp;
    if (null != presetId) {
      tmp = dependencyMap[presetId];
    }
    closure_3 = tmp;
  },
  UPDATE_MOBILE_PENDING_THEME_INDEX: function handleUpdateMobilePendingThemeIndex(mobileThemesIndex) {
    mobileThemesIndex = mobileThemesIndex.mobileThemesIndex;
    let tmp;
    if (null != mobileThemesIndex) {
      tmp = mobileThemesIndex;
    }
    mobileThemesIndex = tmp;
  },
  RESET_PREVIEW_CLIENT_THEME: function handleResetPreviewClientTheme() {
    c3 = undefined;
    c16 = false;
  },
  CLIENT_THEMES_EDITOR_CLOSE: reset,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != channelId.guildId) {
        if (!obj2.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.CLIENT_THEMES_COACHMARK)) {
          if (tmp6Result.ageEligibleForPremiumUpsell(tmp)) {
            channel = channel.getChannel(channelId);
            let tmp4 = null != channel;
            if (tmp4) {
              tmp4 = isGuildTextChannelType(channel.type);
            }
            if (tmp4) {
              c15 = true;
            }
          }
          tmp6Result = tmp6(4223);
        }
        obj2 = UNSAFE_isDismissibleContentDismissed;
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
let result = require("set").fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default clientThemesBackgroundStore;