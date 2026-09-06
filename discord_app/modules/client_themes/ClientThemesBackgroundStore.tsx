// discord_app/modules/client_themes/ClientThemesBackgroundStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import ClientThemesUtils from "ClientThemesUtils.tsx";
import UserSettings from "../user_settings/UserSettings.tsx";
import dismissible_content from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import PremiumUtilsDefault from "../../utils/PremiumUtils.tsx";
import DismissibleContentUnsafeUtils from "../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import SelectivelySyncedUserSettingsStore from "../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import ThemeStore from "../user_settings/ThemeStore.tsx";
import UnsyncedUserSettingsStore from "../user_settings/UnsyncedUserSettingsStore.tsx";
import UserSettingsProtoStore from "../user_settings/UserSettingsProtoStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
function reset() {
  if (closure_14) {
    c3 = undefined;
  }
  c16 = false;
  c15 = false;
}
function handleUserStoreChange() {
  const tmp = !PremiumUtilsDefault.canUseClientThemes(UserStore.getCurrentUser());
  if (tmp === closure_14) {
    return false;
  } else {
    closure_14 = tmp;
    c16 = false;
  }
}
function handleSelectivelySyncedStoreChange() {
  const ClientThemeSettings = UserSettings.ClientThemeSettings;
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
    c3 = tmp2;
  }
}
function handleSyncedModeChange() {
  return require("isPerModeThemingActive").isPerModeThemingActive();
}
function handleSameAsDeviceThemeToggle() {
  return true;
}
function handleUserSettingsProtoStoreUpdate() {
  const ClientThemeSettings = UserSettings.ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  let result = UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.ON;
  if (!result) {
    result = null == backgroundGradientPresetId;
  }
  if (!result) {
    let tmpResult = tmp(4407);
    result = tmpResult.isPerModeThemingActive();
  }
  if (!result) {
    tmpResult = tmp(4408);
    tmpResult.setUseSystemTheme(SystemThemeState.OFF);
  }
  if (null != backgroundGradientPresetId) {
    let tmp10 = null == tmp9;
    if (!tmp10) {
      let id;
      if (_undefined != null) {
        id = _undefined.id;
      }
      let id1;
      if (tmp9 != null) {
        id1 = tmp9.id;
      }
      tmp10 = id === id1;
    }
    if (!tmp10) {
      _undefined = tmp9;
    }
  } else if (null != _undefined) {
    _undefined = undefined;
  }
}
const isGuildTextChannelType = fn(1961).isGuildTextChannelType;
const dependencyMap = fn(1230).BACKGROUND_GRADIENT_PRESETS_MAP;
const SystemThemeState = fn(1186).SystemThemeState;
let closure_14 = true;
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
    c3 = tmp;
    closure_14 = true !== gradientPresetId.canUseClientThemes;
  }
  this.waitFor(
    ChannelStore,
    SelectivelySyncedUserSettingsStore,
    ThemeStore,
    UnsyncedUserSettingsStore,
    UserSettingsProtoStore,
    UserStore,
  );
  const items = [UserStore];
  this.syncWith(items, handleUserStoreChange);
  const items1 = [SelectivelySyncedUserSettingsStore];
  this.syncWith(items1, handleSelectivelySyncedStoreChange);
};
prototype["getState"] = function getState() {
  if (closure_14) {
    let obj = {};
  } else {
    let id;
    if (_undefined != null) {
      id = _undefined.id;
    }
    obj = { gradientPresetId: id, canUseClientThemes: true };
  }
  return obj;
};
Object.defineProperty(prototype, "gradientPreset", {
  get: function gradientPreset() {
    if (obj.isPerModeThemingActive()) {
      if (closure_14) {
        let tmp10;
        if (c16) {
          tmp10 = c3;
        }
        return tmp10;
      } else {
        const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
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
      return c3;
    }
    obj = require("isPerModeThemingActive");
  },
  set: undefined,
});
prototype["getLinearGradient"] = function getLinearGradient() {
  let linearGradientForBackgroundGradient = null;
  if (null != this.gradientPreset) {
    linearGradientForBackgroundGradient = ClientThemesUtils.getLinearGradientForBackgroundGradient(tmp.gradientPreset);
  }
  return linearGradientForBackgroundGradient;
};
Object.defineProperty(prototype, "isPreview", {
  get: function isPreview() {
    return closure_14;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isCoachmark", {
  get: function isCoachmark() {
    return c15;
  },
  set: undefined,
});
Object.defineProperty(prototype, "mobilePendingThemeIndex", {
  get: function mobilePendingThemeIndex() {
    return mobileThemesIndex;
  },
  set: undefined,
});
ClientThemesBackgroundStore.displayName = "ClientThemesBackgroundStore";
ClientThemesBackgroundStore.persistKey = "ClientThemesBackgroundStore";
const clientThemesBackgroundStore = new ClientThemesBackgroundStore(DispatcherDefault, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    c16 = closure_14;
    let tmp;
    if (null != presetId) {
      tmp = dependencyMap[presetId];
    }
    c3 = tmp;
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
        if (
          !obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.CLIENT_THEMES_COACHMARK)
        ) {
          if (tmp6Result.ageEligibleForPremiumUpsell(tmp)) {
            const channel = ChannelStore.getChannel(channelId);
            let tmp4 = null != channel;
            if (tmp4) {
              tmp4 = isGuildTextChannelType(channel.type);
            }
            if (tmp4) {
              c15 = true;
            }
          }
          tmp6Result = tmp6(4404);
        }
        obj2 = DismissibleContentUnsafeUtils;
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
  CLEAR_SYNCED_CLIENT_THEMES: handleSameAsDeviceThemeToggle,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default clientThemesBackgroundStore;
