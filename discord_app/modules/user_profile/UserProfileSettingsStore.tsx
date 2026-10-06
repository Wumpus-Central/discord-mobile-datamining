// discord_app/modules/user_profile/UserProfileSettingsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import RouteConstants from "../routing/RouteConstants.tsx";
import FavoritesConstants from "../favorites/FavoritesConstants.tsx";
import NotificationsInboxConstants from "../notifications_inbox/NotificationsInboxConstants.tsx";
import BioMaxLengthExperiment from "experiments/BioMaxLengthExperiment.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
function handleFormOpen() {
  CLOSED = FormStates.OPEN;
  closure_13 = {};
}
function handleReset() {
  closure_9 = {};
  closure_13 = {};
  CLOSED = FormStates.CLOSED;
  closure_13 = {};
}
const FormStates = Constants.FormStates;
({ ME: c3, UserSettingsSections: closure_4 } = Constants);
const FAVORITES_RAW_GUILD_ID = FavoritesConstants.FAVORITES_RAW_GUILD_ID;
let closure_5 = {};
let obj = {};
let closure_7 = {};
let items = [
  ...RouteConstants.PSEUDO_GUILD_IDS,
  FAVORITES_RAW_GUILD_ID,
  NotificationsInboxConstants.NOTIFICATIONS_INBOX_RAW_GUILD_ID,
];
const set = new Set(items);
let closure_9 = {};
let guildId;
let CLOSED = FormStates.CLOSED;
let closure_13 = {};
const Store = get_initializedDefault.Store;
class UserProfileSettingsStore extends Store {
  getFormState() {
    return CLOSED;
  }
  getErrors(arg0) {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = _false;
    }
    let tmp3 = closure_13[tmp];
    if (tmp3 == null) {
      tmp3 = closure_7;
    }
    return tmp3;
  }
  getPendingChanges(guildId) {
    let tmp = guildId;
    if (guildId == null) {
      tmp = _false;
    }
    let tmp3 = closure_9[tmp];
    if (tmp3 == null) {
      tmp3 = closure_5;
    }
    return tmp3;
  }
  getTryItOutChanges() {
    return obj;
  }
  hasTryItOutChanges() {
    const values = Object.values(obj);
    return values.some((item) => undefined !== item);
  }
  hasUnsavedChanges() {
    let values = Object.values(closure_9);
    return values.some((item) => {
      const values = Object.values(item);
      return values.some((item) => undefined !== item);
    });
  }
  showNotice() {
    const self = this;
    const values = Object.values(this.getPendingChanges(_false));
    let someResult = values.some((item) => undefined !== item);
    if (!someResult) {
      const _Object = Object;
      const values2 = Object.values(self.getPendingChanges(guildId));
      someResult = values2.some((item) => undefined !== item);
    }
    return someResult;
  }
  canSubmit() {
    const self = this;
    BioMaxLengthExperiment;
    const items = [_false, guildId];
    for (const item10016 of items) {
      let pendingChanges = self.getPendingChanges(item10016);
      if (undefined !== pendingChanges.pendingBio) {
        if (tmp4.pendingBio.length > tmp2) {
          obj.return();
          let flag = false;
          return false;
        }
      }
      continue;
    }
    return true;
  }
}
Object.defineProperty(UserProfileSettingsStore.prototype, "selectedGuildId", {
  get: function selectedGuildId() {
    return guildId;
  },
  set: undefined,
});
UserProfileSettingsStore.displayName = "UserProfileSettingsStore";
let obj2 = {
  USER_SETTINGS_MODAL_INIT: handleFormOpen,
  USER_SETTINGS_MODAL_OPEN: handleFormOpen,
  USER_SETTINGS_MODAL_SET_SECTION: function handleSectionChange(section) {
    if (section.section !== constants.ACCOUNT) {
      return false;
    } else {
      CLOSED = FormStates.OPEN;
      closure_13 = {};
    }
  },
  USER_PROFILE_SETTINGS_INIT: function handleInit(guildId) {
    guildId = guildId.guildId;
    let tmp;
    if (null != guildId) {
      if (!set.has(guildId)) {
        tmp = guildId;
      }
    }
    guildId = tmp;
    CLOSED = FormStates.OPEN;
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_SET_GUILD: function handleSetGuild(guildId) {
    guildId = guildId.guildId;
    let tmp;
    if (null != guildId) {
      if (!set.has(guildId)) {
        tmp = guildId;
      }
    }
    guildId = tmp;
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_CLOSE: function handleFormClose() {
    CLOSED = FormStates.CLOSED;
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: handleReset,
  USER_PROFILE_SETTINGS_SUBMIT: function handleFormSubmit() {
    CLOSED = FormStates.SUBMITTING;
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: function handleFormSubmitSuccess(guildId) {
    guildId = guildId.guildId;
    if (CLOSED !== FormStates.SUBMITTING) {
      return false;
    } else {
      CLOSED = tmp.OPEN;
      if (guildId == null) {
        guildId = _false;
      }
      closure_13[guildId] = closure_7;
    }
  },
  USER_PROFILE_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(arg0) {
    let errors;
    ({ guildId, errors } = arg0);
    if (CLOSED !== FormStates.SUBMITTING) {
      return false;
    } else {
      CLOSED = tmp.OPEN;
      if (guildId == null) {
        guildId = _false;
      }
      if (errors == null) {
        errors = closure_7;
      }
      closure_13[guildId] = errors;
    }
  },
  USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: function handleSetPendingChanges(arg0) {
    let type;
    ({ type, guildId } = arg0);
    const merged = Object.assign(arg0, Object.assign({ type: 0, guildId: 0 }));
    let tmp3 = guildId;
    if (guildId == null) {
      tmp3 = _false;
    }
    if (guildId == null) {
      guildId = _false;
    }
    obj = {};
    const merged1 = Object.assign(closure_9[guildId]);
    const merged2 = Object.assign(merged);
    closure_9[tmp3] = obj;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: function handleSetTryItOutAvatar(avatar) {
    obj = { tryItOutAvatar: avatar };
    avatar = avatar.avatar;
    const merged = Object.assign(obj);
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: function handleSetTryItOutAvatarDecoration(avatarDecoration) {
    obj = { tryItOutAvatarDecoration: avatarDecoration };
    avatarDecoration = avatarDecoration.avatarDecoration;
    const merged = Object.assign(obj);
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: function handleSetTryItOutProfileEffect(profileEffect) {
    obj = { tryItOutProfileEffect: profileEffect };
    profileEffect = profileEffect.profileEffect;
    const merged = Object.assign(obj);
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: function handleSetTryItOutBanner(banner) {
    obj = { tryItOutBanner: banner };
    banner = banner.banner;
    const merged = Object.assign(obj);
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: function handleSetTryItOutThemeColors(themeColors) {
    obj = { tryItOutThemeColors: themeColors };
    themeColors = themeColors.themeColors;
    const merged = Object.assign(obj);
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: function handleSetTryItOutDisplayNameStyles(
    displayNameStyles,
  ) {
    obj = { tryItOutDisplayNameStyles: displayNameStyles };
    displayNameStyles = displayNameStyles.displayNameStyles;
    const merged = Object.assign(obj);
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_CUSTOM_TYPING_INDICATOR_STYLE:
    function handleSetTryItOutCustomTypingIndicatorStyle(customTypingIndicatorStyle) {
      obj = { tryItOutCustomTypingIndicatorStyle: customTypingIndicatorStyle };
      customTypingIndicatorStyle = customTypingIndicatorStyle.customTypingIndicatorStyle;
      const merged = Object.assign(obj);
    },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: function handleSetTryItOutPreset(arg0) {
    let avatarDecoration;
    let banner;
    let displayNameStyles;
    let lastPreset;
    let themeColors;
    ({ lastPreset, avatarDecoration } = arg0);
    obj = {
      tryItOutLastPreset: lastPreset,
      tryItOutBanner: banner,
      tryItOutThemeColors: themeColors,
      tryItOutAvatarDecoration: avatarDecoration,
      tryItOutDisplayNameStyles: displayNameStyles,
    };
    ({ banner, themeColors, displayNameStyles } = arg0);
    const merged = Object.assign(obj);
    if (undefined === lastPreset) {
      lastPreset = obj.tryItOutLastPreset;
    }
    if (undefined === avatarDecoration) {
      avatarDecoration = obj.tryItOutAvatarDecoration;
    }
  },
  USER_PROFILE_SETTINGS_CLEAR_ERRORS: function handleResetErrors() {
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: function handleResetPendingAccountChanges() {
    const entries = Object.entries(closure_9);
    closure_9 = fromEntries(
      entries.map((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        const items = [tmp];
        obj = {
          pendingGlobalName: undefined,
          pendingNickname: undefined,
          pendingDisplayNameStyles: undefined,
          pendingCustomTypingIndicatorStyle: undefined,
          pendingAvatar: undefined,
          pendingAvatarDecoration: undefined,
          pendingNameplate: undefined,
        };
        const merged = Object.assign(tmp2);
        items[1] = obj;
        return items;
      }),
    );
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES: function handleResetPendingProfileChanges() {
    const entries = Object.entries(closure_9);
    closure_9 = fromEntries(
      entries.map((item) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = item;
        const items = [tmp];
        obj = {
          pendingPronouns: undefined,
          pendingProfileEffect: undefined,
          pendingProfileFrame: undefined,
          pendingBanner: undefined,
          pendingAccentColor: undefined,
          pendingThemeColors: undefined,
          pendingBio: undefined,
        };
        const merged = Object.assign(tmp2);
        items[1] = obj;
        return items;
      }),
    );
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: function handleResetPendingChanges() {
    closure_9 = {};
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: function handleResetTryItOutChanges() {},
  USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: function handleResetPendingLegacyUsernameDisabled() {
    obj = closure_9[_false];
    if (obj == null) {
      obj = {};
    }
    let prop;
    if (obj != null) {
      prop = obj.pendingLegacyUsernameDisabled;
    }
    if (undefined === prop) {
      return false;
    } else {
      const obj2 = { pendingLegacyUsernameDisabled: undefined };
      const merged = Object.assign(closure_9[_false]);
      closure_9[_false] = obj2;
    }
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: function handleResetPendingPrimaryGuildChanges() {
    obj = closure_9[_false];
    if (obj == null) {
      obj = {};
    }
    let prop;
    if (obj != null) {
      prop = obj.pendingPrimaryGuildId;
    }
    if (undefined === prop) {
      return false;
    } else {
      const obj2 = { pendingPrimaryGuildId: undefined };
      const merged = Object.assign(closure_9[_false]);
      closure_9[_false] = obj2;
    }
  },
  USER_PROFILE_UPDATE_FAILURE: function handleProfileUpdateFailure(arg0) {
    let errors;
    ({ guildId, errors } = arg0);
    CLOSED = FormStates.OPEN;
    if (guildId == null) {
      guildId = _false;
    }
    if (errors == null) {
      errors = closure_7;
    }
    closure_13[guildId] = errors;
  },
  LOGOUT: handleReset,
};
const userProfileSettingsStore = new UserProfileSettingsStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileSettingsStore.tsx");

export default userProfileSettingsStore;
export const IGNORE_GUILD_IDS = set;
