// === Module 4697: ClientThemesBackgroundStore ===

// Module 4697 (ClientThemesBackgroundStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ThemeConstants from "ThemeConstants" /* 1196 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import ClientThemesConstants from "ClientThemesConstants" /* 1240 */;
import UserSettings from "UserSettings" /* 2028 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import ChannelRecord from "ChannelRecord" /* 2055 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4528 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import UserUtils from "UserUtils" /* 4722 */;
import ThemeActionCreators from "ThemeActionCreators" /* 4726 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1194 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1195 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _undefined;

function reset() {
  if (closure_14) {
    let c3;
  }
  c16 = false;
  c15 = false;
}
function handleUserStoreChange() {
  const obj = PremiumUtilsDefault;
  const tmp = !obj.canUseClientThemes(UserStore.getCurrentUser());
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
  } else if (closure_12[backgroundGradientPresetId] === c3) {
    return false;
  } else {
    c3 = tmp2;
  }
}
function handleSyncedModeChange() {
  const obj = require("isPerModeThemingActive");
  return obj.isPerModeThemingActive();
}
function handleSameAsDeviceThemeToggle() {
  return true;
}
function handleUserSettingsProtoStoreUpdate() {
  const ClientThemeSettings = UserSettings.ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  let result = UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.ON || null == backgroundGradientPresetId;
  if (!result) {
    const tmpResult = require("isPerModeThemingActive");
    result = tmpResult.isPerModeThemingActive();
  }
  if (!result) {
    const tmpResult2 = ThemeActionCreators;
    tmpResult2.setUseSystemTheme(SystemThemeState.OFF);
  }
  if (null != backgroundGradientPresetId) {
    let tmp10 = null == tmp9;
    if (!tmp10) {
      let id;
      if (_undefined != null) {
        id = _undefined.id;
      }
      let id1;
      if (closure_12[backgroundGradientPresetId] != null) {
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
const isGuildTextChannelType = ChannelRecord.isGuildTextChannelType;
let closure_12 = ClientThemesConstants.BACKGROUND_GRADIENT_PRESETS_MAP;
const SystemThemeState = ThemeConstants.SystemThemeState;
let closure_14 = true;
let c15 = false;
let c16 = false;
const PersistedStore = get_initializedDefault.PersistedStore;
class ClientThemesBackgroundStore extends PersistedStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const items = [
      (gradientPreset) => {
        let gradientPresetId;
        if (gradientPreset != null) {
          gradientPreset = gradientPreset.gradientPreset;
          if (gradientPreset != null) {
            gradientPresetId = gradientPreset.id;
          }
        }
        return { gradientPresetId };
      }
    ];
    applyArgumentsResult.migrations = items;
    return applyArgumentsResult;
  }
  initialize(gradientPresetId) {
    c16 = false;
    if (null != gradientPresetId) {
      let tmp;
      if (null != gradientPresetId.gradientPresetId) {
        tmp = closure_12[gradientPresetId.gradientPresetId];
      }
      let c3 = tmp;
      closure_14 = true !== gradientPresetId.canUseClientThemes;
    }
    this.waitFor(ChannelStore, SelectivelySyncedUserSettingsStore, ThemeStore, UnsyncedUserSettingsStore, UserSettingsProtoStore, UserStore);
    const items = [UserStore];
    this.syncWith(items, handleUserStoreChange);
    const items1 = [SelectivelySyncedUserSettingsStore];
    this.syncWith(items1, handleSelectivelySyncedStoreChange);
  }
  getState() {
    let obj;
    if (closure_14) {
      obj = {};
    } else {
      let id;
      if (_undefined != null) {
        id = _undefined.id;
      }
      obj = { gradientPresetId: id, canUseClientThemes: true };
    }
    return obj;
  }
  getLinearGradient() {
    let linearGradientForBackgroundGradient = null;
    if (null != this.gradientPreset) {
      const obj = ClientThemesUtils;
      linearGradientForBackgroundGradient = obj.getLinearGradientForBackgroundGradient(tmp.gradientPreset);
    }
    return linearGradientForBackgroundGradient;
  }
}
const prototype = ClientThemesBackgroundStore.prototype;
Object.defineProperty(prototype, "gradientPreset", {
  get: function gradientPreset() {
    const obj = require("isPerModeThemingActive");
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
          tmp7 = closure_12[prop];
        }
        return tmp7;
      }
    } else {
      return c3;
    }
  },
  set: undefined
});
Object.defineProperty(prototype, "isPreview", {
  get: function isPreview() {
    return closure_14;
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
    return mobileThemesIndex;
  },
  set: undefined
});
ClientThemesBackgroundStore.displayName = "ClientThemesBackgroundStore";
ClientThemesBackgroundStore.persistKey = "ClientThemesBackgroundStore";
let obj = {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    c16 = closure_14;
    let tmp;
    if (null != presetId) {
      tmp = closure_12[presetId];
    }
    let c3 = tmp;
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
    let c3;
    c16 = false;
  },
  CLIENT_THEMES_EDITOR_CLOSE: reset,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    const guildId = channelId.guildId;
    if (null != channelId) {
      if (null != guildId) {
        const obj2 = DismissibleContentUnsafeUtils;
        if (!obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.CLIENT_THEMES_COACHMARK)) {
          const tmp6Result = UserUtils;
          if (tmp6Result.ageEligibleForPremiumUpsell(tmp)) {
            const channel = ChannelStore.getChannel(channelId);
            const tmp4 = null != channel && isGuildTextChannelType(channel.type);
            if (tmp4) {
              c15 = true;
            }
          }
        }
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
};
const clientThemesBackgroundStore = new ClientThemesBackgroundStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default clientThemesBackgroundStore;