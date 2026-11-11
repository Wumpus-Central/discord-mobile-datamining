// === Module 5267: ClientThemesBackgroundStore ===

// Module 5267 (ClientThemesBackgroundStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ClientThemesUtils from "ClientThemesUtils" /* 1239 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import dismissible_content from "dismissible_content" /* 5076 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5285 */;
import UserUtils from "UserUtils" /* 5309 */;
import ThemeActionCreators from "ThemeActionCreators" /* 5313 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import UnsyncedUserSettingsStore from "UnsyncedUserSettingsStore" /* 1194 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
function getAppliedHexagonCampaignPreset() {
  const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  let tmp3;
  if (obj.isHexagonCampaignClientThemePreset(backgroundGradientPresetId)) {
    let tmp5;
    if (null != backgroundGradientPresetId) {
      let tmp8;
      if (null != dependencyMap[backgroundGradientPresetId]) {
        const result = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(tmp7.id);
        let tmp10 = !result;
        if (result) {
          tmp10 = null == UserStore.getCurrentUser();
        }
        if (!tmp10) {
          tmp10 = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
          const tmpResult2 = require("HexagonCampaignPerkAvailability");
        }
        if (tmp10) {
          tmp8 = tmp7;
        }
        const tmpResult = require("HexagonCampaignUtils");
      }
      tmp5 = tmp8;
    }
    tmp3 = tmp5;
  }
  return tmp3;
}
function reset() {
  if (closure_15) {
    closure_3 = getAppliedHexagonCampaignPreset();
  }
  c17 = false;
  c16 = false;
}
function handleUserStoreChange() {
  if (null != user) {
    if (!c17) {
      const result = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(user.id);
      let tmp6 = !result;
      if (result) {
        tmp6 = null == UserStore.getCurrentUser();
      }
      if (!tmp6) {
        tmp6 = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
        const tmp3Result = require("HexagonCampaignPerkAvailability");
      }
      if (!tmp6) {
        user = undefined;
        let flag = true;
      }
      const obj = require("HexagonCampaignUtils");
      const tmp14 = !PremiumUtilsDefault.canUseClientThemes(UserStore.getCurrentUser());
      if (tmp14 === closure_15) {
        return flag;
      } else {
        closure_15 = tmp14;
        c17 = false;
      }
    }
  }
  flag = false;
  if (null == user) {
    const tmp10 = getAppliedHexagonCampaignPreset();
    flag = false;
    if (null != tmp10) {
      user = tmp10;
      flag = true;
    }
  }
}
function handleSelectivelySyncedStoreChange() {
  const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  if (null == backgroundGradientPresetId) {
    if (null == closure_3) {
      return false;
    } else {
      closure_3 = undefined;
    }
  } else {
    let tmp10;
    if (null != backgroundGradientPresetId) {
      let tmp5;
      if (null != dependencyMap[backgroundGradientPresetId]) {
        const result = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(tmp4.id);
        let tmp7 = !result;
        if (result) {
          tmp7 = null == UserStore.getCurrentUser();
        }
        if (!tmp7) {
          tmp7 = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
          const tmpResult2 = require("HexagonCampaignPerkAvailability");
        }
        if (tmp7) {
          tmp5 = tmp4;
        }
        const tmpResult = require("HexagonCampaignUtils");
      }
      tmp10 = tmp5;
    }
    if (tmp10 === closure_3) {
      return false;
    } else {
      closure_3 = tmp10;
    }
  }
}
function handleSyncedModeChange() {
  return require("isPerModeThemingActive").isPerModeThemingActive();
}
function handleSameAsDeviceThemeToggle() {
  return true;
}
function handleUserSettingsProtoStoreUpdate() {
  const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
  const backgroundGradientPresetId = ClientThemeSettings.getSetting().backgroundGradientPresetId;
  let result = UnsyncedUserSettingsStore.useSystemTheme !== SystemThemeState.ON;
  if (!result) {
    result = null == backgroundGradientPresetId;
  }
  if (!result) {
    result = require("isPerModeThemingActive").isPerModeThemingActive();
    const tmpResult = require("isPerModeThemingActive");
  }
  if (!result) {
    ThemeActionCreators.setUseSystemTheme(SystemThemeState.OFF);
    const tmpResult4 = ThemeActionCreators;
  }
  if (null != backgroundGradientPresetId) {
    if (null != dependencyMap[backgroundGradientPresetId]) {
      const result1 = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(tmp9.id);
      let tmp11 = !result1;
      if (result1) {
        tmp11 = null == UserStore.getCurrentUser();
      }
      if (!tmp11) {
        tmp11 = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
        const tmpResult6 = require("HexagonCampaignPerkAvailability");
      }
      if (tmp11) {
        let id;
        if (user != null) {
          id = user.id;
        }
        if (id !== tmp9.id) {
          user = tmp9;
        }
      } else {
        user = undefined;
      }
      const tmpResult5 = require("HexagonCampaignUtils");
    }
  } else if (null != user) {
    user = undefined;
  }
}
const isGuildTextChannelType = fn(5096).isGuildTextChannelType;
const dependencyMap = fn(1240).BACKGROUND_GRADIENT_PRESETS_MAP;
const HexagonCampaignPerk = fn(5268).HexagonCampaignPerk;
const SystemThemeState = fn(1195).SystemThemeState;
let closure_15 = true;
let c16 = false;
let c17 = false;
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
  c17 = false;
  if (null != gradientPresetId) {
    gradientPresetId = gradientPresetId.gradientPresetId;
    let tmp10;
    if (null != gradientPresetId) {
      let tmp3;
      if (null != dependencyMap[gradientPresetId]) {
        const result = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(tmp2.id);
        let tmp7 = !result;
        if (result) {
          tmp7 = null == UserStore.getCurrentUser();
        }
        if (!tmp7) {
          tmp7 = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
          const tmp4Result = require("HexagonCampaignPerkAvailability");
        }
        if (tmp7) {
          tmp3 = tmp2;
        }
        const obj = require("HexagonCampaignUtils");
      }
      tmp10 = tmp3;
    }
    closure_3 = tmp10;
    closure_15 = true !== gradientPresetId.canUseClientThemes;
  }
  this.waitFor(ChannelStore, SelectivelySyncedUserSettingsStore, ThemeStore, UnsyncedUserSettingsStore, UserSettingsProtoStore, UserStore);
  items = [UserStore];
  this.syncWith(items, handleUserStoreChange);
  const items1 = [SelectivelySyncedUserSettingsStore];
  this.syncWith(items1, handleSelectivelySyncedStoreChange);
};
prototype["getState"] = function getState() {
  if (closure_15) {
    if (!c17) {
      if (null != user) {
        if (obj2.isHexagonCampaignClientThemePreset(user.id)) {
          let obj3 = { gradientPresetId: user.id };
        }
        obj2 = require("HexagonCampaignUtils");
      }
    }
    obj3 = {};
  } else {
    let id;
    if (user != null) {
      id = user.id;
    }
    const obj = { gradientPresetId: id, canUseClientThemes: true };
    return obj;
  }
};
Object.defineProperty(prototype, "gradientPreset", {
  get: function gradientPreset() {
    if (obj.isPerModeThemingActive()) {
      const syncedClientTheme = ThemeStore.getSyncedClientTheme(ThemeStore.systemTheme);
      let prop;
      if (syncedClientTheme != null) {
        prop = syncedClientTheme.backgroundGradientPresetId;
      }
      let tmp16;
      if (null != prop) {
        let tmp19;
        if (null != dependencyMap[prop]) {
          const result = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(tmp18.id);
          let tmp21 = !result;
          if (result) {
            tmp21 = null == UserStore.getCurrentUser();
          }
          if (!tmp21) {
            tmp21 = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
            const tmpResult5 = require("HexagonCampaignPerkAvailability");
          }
          if (tmp21) {
            tmp19 = tmp18;
          }
          const tmpResult = require("HexagonCampaignUtils");
        }
        tmp16 = tmp19;
      }
      if (!closure_15) {
        return tmp16;
      } else if (c17) {
      } else if (null != tmp16) {
        tmpResult6 = require("HexagonCampaignUtils");
      }
    } else {
      let tmp5;
      if (null != user) {
        if (c17) {
          tmp5 = user;
        } else {
          const result1 = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(user.id);
          let tmp9 = !result1;
          if (result1) {
            tmp9 = null == UserStore.getCurrentUser();
          }
          if (!tmp9) {
            tmp9 = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
            const tmpResult8 = require("HexagonCampaignPerkAvailability");
          }
          const tmpResult7 = require("HexagonCampaignUtils");
        }
      }
      return tmp5;
    }
    obj = require("isPerModeThemingActive");
  },
  set: undefined
});
prototype["getLinearGradient"] = function getLinearGradient() {
  let linearGradientForBackgroundGradient = null;
  if (null != this.gradientPreset) {
    linearGradientForBackgroundGradient = ClientThemesUtils.getLinearGradientForBackgroundGradient(tmp.gradientPreset);
  }
  return linearGradientForBackgroundGradient;
};
Object.defineProperty(prototype, "hasHiddenHexagonCampaignPreset", {
  get: function hasHiddenHexagonCampaignPreset() {
    const ClientThemeSettings = require("UserSettings").ClientThemeSettings;
    let result = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(ClientThemeSettings.getSetting().backgroundGradientPresetId);
    if (result) {
      const self = this;
      result = null == this.gradientPreset;
    }
    return result;
  },
  set: undefined
});
Object.defineProperty(prototype, "isPreview", {
  get: function isPreview() {
    return closure_15;
  },
  set: undefined
});
Object.defineProperty(prototype, "isCoachmark", {
  get: function isCoachmark() {
    return c16;
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
const clientThemesBackgroundStore = new ClientThemesBackgroundStore(DispatcherDefault, {
  UPDATE_BACKGROUND_GRADIENT_PRESET: function handleUpdateBackgroundGradientPreset(presetId) {
    presetId = presetId.presetId;
    let tmp = closure_15;
    if (closure_15) {
      tmp = null != presetId;
    }
    if (tmp) {
      let result = require("HexagonCampaignUtils").isHexagonCampaignClientThemePreset(presetId);
      if (result) {
        result = !require("HexagonCampaignPerkAvailability").isHexagonCampaignPerkExpiredForCurrentUser(HexagonCampaignPerk.CLIENT_THEME);
        const tmp3Result = require("HexagonCampaignPerkAvailability");
      }
      tmp = !result;
      const obj = require("HexagonCampaignUtils");
    }
    c17 = tmp;
    let tmp7;
    if (null != presetId) {
      tmp7 = dependencyMap[presetId];
    }
    closure_3 = tmp7;
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
    let tmp;
    if (closure_15) {
      tmp = getAppliedHexagonCampaignPreset();
    }
    closure_3 = tmp;
    c17 = false;
  },
  CLIENT_THEMES_EDITOR_CLOSE: reset,
  CHANNEL_SELECT: function handleChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      if (null != channelId.guildId) {
        if (!obj2.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.CLIENT_THEMES_COACHMARK)) {
          if (tmp6Result.ageEligibleForPremiumUpsell(tmp)) {
            const channel = ChannelStore.getChannel(channelId);
            let tmp4 = null != channel;
            if (tmp4) {
              tmp4 = isGuildTextChannelType(channel.type);
            }
            if (tmp4) {
              c16 = true;
            }
          }
          tmp6Result = UserUtils;
        }
        obj2 = DismissibleContentUnsafeUtils;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/client_themes/ClientThemesBackgroundStore.tsx");

export default clientThemesBackgroundStore;