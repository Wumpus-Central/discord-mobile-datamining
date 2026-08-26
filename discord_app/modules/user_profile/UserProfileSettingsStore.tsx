// === Module 8484: handleFormOpen ===

// Module 8484 (handleFormOpen)
import initializeDefault from "initialize" /* 589 */;
import INVITE from "INVITE" /* 677 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import date from "date" /* 1429 */;
import ANALYTICS_NAME from "ANALYTICS_NAME" /* 8485 */;
import useBioMaxLength from "useBioMaxLength" /* 8486 */;
import ME from "ME" /* 676 */;
import set from "set" /* 2 */;

function handleFormOpen() {
  const OPEN = FormStates.OPEN;
  closure_13 = {};
}
function handleReset() {
  closure_9 = {};
  closure_13 = {};
  closure_10 = obj;
  CLOSED = FormStates.CLOSED;
  closure_13 = {};
}
const FormStates = ME.FormStates;
({ ME: c3, UserSettingsSections: c4 } = ME);
let closure_5 = {};
let obj = {};
let closure_7 = {};
let items = [...INVITE.PSEUDO_GUILD_IDS, date.FAVORITES_RAW_GUILD_ID, ANALYTICS_NAME.NOTIFICATIONS_INBOX_RAW_GUILD_ID];
let set = new Set(items);
let closure_9 = {};
let c11;
let CLOSED = FormStates.CLOSED;
let closure_13 = {};
const Store = initializeDefault.Store;
class UserProfileSettingsStore extends Store {
}
const prototype = UserProfileSettingsStore.prototype;
Object.defineProperty(prototype, "selectedGuildId", {
  get: function selectedGuildId(arg0) {
    return c11;
  },
  set: undefined
});
prototype["getFormState"] = function getFormState() {
  return CLOSED;
};
prototype["getErrors"] = function getErrors(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_3;
  }
  let tmp3 = closure_13[tmp];
  if (tmp3 == null) {
    tmp3 = closure_7;
  }
  return tmp3;
};
prototype["getPendingChanges"] = function getPendingChanges(closure_0) {
  let tmp = closure_0;
  if (closure_0 == null) {
    tmp = closure_3;
  }
  let tmp3 = closure_9[tmp];
  if (tmp3 == null) {
    tmp3 = closure_5;
  }
  return tmp3;
};
prototype["getTryItOutChanges"] = function getTryItOutChanges() {
  return obj;
};
prototype["hasTryItOutChanges"] = function hasTryItOutChanges() {
  const values = Object.values(obj);
  return values.some((arg0) => undefined !== arg0);
};
prototype["hasUnsavedChanges"] = function hasUnsavedChanges() {
  let values = Object.values(closure_9);
  return values.some((arg0) => {
    const values = Object.values(arg0);
    return values.some((arg0) => undefined !== arg0);
  });
};
prototype["showNotice"] = function showNotice() {
  const self = this;
  let values = Object.values(this.getPendingChanges(closure_3));
  let someResult = values.some((arg0) => undefined !== arg0);
  if (!someResult) {
    const _Object = Object;
    values = Object.values(self.getPendingChanges(c11));
    someResult = values.some((arg0) => undefined !== arg0);
  }
  return someResult;
};
prototype["canSubmit"] = function canSubmit() {
  const self = this;
  useBioMaxLength;
  const items = [closure_3, c11];
  for (const item10016 of items) {
    let pendingChanges = self.getPendingChanges(item10016);
    if (undefined !== pendingChanges.pendingBio) {
      let tmp5 = pendingChanges;
      if (tmp4.pendingBio.length > tmp2) {
        let tmp6 = obj;
        obj.return();
        let flag = false;
        return false;
      }
    }
    continue;
  }
  return true;
};
UserProfileSettingsStore.displayName = "UserProfileSettingsStore";
obj = {
  USER_SETTINGS_MODAL_INIT: handleFormOpen,
  USER_SETTINGS_MODAL_OPEN: handleFormOpen,
  USER_SETTINGS_MODAL_SET_SECTION: function handleSectionChange(section) {
    if (section.section !== constants.ACCOUNT) {
      return false;
    } else {
      const OPEN = FormStates.OPEN;
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
    const OPEN = FormStates.OPEN;
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
    const SUBMITTING = FormStates.SUBMITTING;
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: function handleFormSubmitSuccess(guildId) {
    guildId = guildId.guildId;
    if (OPEN !== FormStates.SUBMITTING) {
      return false;
    } else {
      OPEN = tmp.OPEN;
      if (guildId == null) {
        guildId = closure_3;
      }
      closure_13[guildId] = closure_7;
    }
  },
  USER_PROFILE_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(arg0) {
    ({ guildId, errors } = arg0);
    if (OPEN !== FormStates.SUBMITTING) {
      return false;
    } else {
      OPEN = tmp.OPEN;
      if (guildId == null) {
        guildId = closure_3;
      }
      if (errors == null) {
        errors = closure_7;
      }
      closure_13[guildId] = errors;
    }
  },
  USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: function handleSetPendingChanges(arg0) {
    ({ type, guildId } = arg0);
    const merged = Object.assign(arg0, Object.create(null));
    let tmp3 = guildId;
    if (guildId == null) {
      tmp3 = closure_3;
    }
    if (guildId == null) {
      guildId = closure_3;
    }
    const merged1 = Object.assign(closure_9[guildId]);
    const merged2 = Object.assign(merged);
    closure_9[tmp3] = {};
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: function handleSetTryItOutAvatar(avatar) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutAvatar = avatar.avatar;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: function handleSetTryItOutAvatarDecoration(avatarDecoration) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutAvatarDecoration = avatarDecoration.avatarDecoration;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: function handleSetTryItOutProfileEffect(profileEffect) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutProfileEffect = profileEffect.profileEffect;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: function handleSetTryItOutBanner(banner) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutBanner = banner.banner;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: function handleSetTryItOutThemeColors(themeColors) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutThemeColors = themeColors.themeColors;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: function handleSetTryItOutDisplayNameStyles(displayNameStyles) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutDisplayNameStyles = displayNameStyles.displayNameStyles;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_CUSTOM_TYPING_INDICATOR_STYLE: function handleSetTryItOutCustomTypingIndicatorStyle(customTypingIndicatorStyle) {
    obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutCustomTypingIndicatorStyle = customTypingIndicatorStyle.customTypingIndicatorStyle;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: function handleSetTryItOutPreset(avatarDecoration) {
    let tryItOutAvatarDecoration = avatarDecoration.avatarDecoration;
    obj = {};
    ({ banner, themeColors, displayNameStyles } = avatarDecoration);
    const merged = Object.assign(obj);
    obj.tryItOutBanner = banner;
    obj.tryItOutThemeColors = themeColors;
    if (undefined === tryItOutAvatarDecoration) {
      tryItOutAvatarDecoration = obj.tryItOutAvatarDecoration;
    }
    obj.tryItOutAvatarDecoration = tryItOutAvatarDecoration;
    obj.tryItOutDisplayNameStyles = displayNameStyles;
  },
  USER_PROFILE_SETTINGS_CLEAR_ERRORS: function handleResetErrors() {
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: function handleResetPendingAccountChanges() {
    const entries = Object.entries(closure_9);
    closure_9 = Object.fromEntries(entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      obj = {};
      const merged = Object.assign(tmp2);
      obj.pendingGlobalName = undefined;
      obj.pendingNickname = undefined;
      obj.pendingDisplayNameStyles = undefined;
      obj.pendingCustomTypingIndicatorStyle = undefined;
      obj.pendingAvatar = undefined;
      obj.pendingAvatarDecoration = undefined;
      obj.pendingNameplate = undefined;
      items[1] = obj;
      return items;
    }));
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES: function handleResetPendingProfileChanges() {
    const entries = Object.entries(closure_9);
    closure_9 = Object.fromEntries(entries.map((arg0) => {
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      obj = {};
      const merged = Object.assign(tmp2);
      obj.pendingPronouns = undefined;
      obj.pendingProfileEffect = undefined;
      obj.pendingProfileFrame = undefined;
      obj.pendingBanner = undefined;
      obj.pendingAccentColor = undefined;
      obj.pendingThemeColors = undefined;
      obj.pendingBio = undefined;
      items[1] = obj;
      return items;
    }));
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: function handleResetPendingChanges() {
    closure_9 = {};
    closure_13 = {};
  },
  USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: function handleResetTryItOutChanges() {
    closure_10 = obj;
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: function handleResetPendingLegacyUsernameDisabled() {
    obj = dependencyMap[closure_3];
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
      obj = {};
      const merged = Object.assign(dependencyMap[tmp]);
      obj.pendingLegacyUsernameDisabled = undefined;
      dependencyMap[tmp] = obj;
    }
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: function handleResetPendingPrimaryGuildChanges() {
    obj = dependencyMap[closure_3];
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
      obj = {};
      const merged = Object.assign(dependencyMap[tmp]);
      obj.pendingPrimaryGuildId = undefined;
      dependencyMap[tmp] = obj;
    }
  },
  USER_PROFILE_UPDATE_FAILURE: function handleProfileUpdateFailure(arg0) {
    ({ guildId, errors } = arg0);
    const OPEN = FormStates.OPEN;
    if (guildId == null) {
      guildId = closure_3;
    }
    if (errors == null) {
      errors = closure_7;
    }
    closure_13[guildId] = errors;
  },
  LOGOUT: handleReset
};
const userProfileSettingsStore = new UserProfileSettingsStore(dispatcherDefault, obj);
const result = set.fileFinishedImporting("modules/user_profile/UserProfileSettingsStore.tsx");

export default userProfileSettingsStore;
export const IGNORE_GUILD_IDS = set;