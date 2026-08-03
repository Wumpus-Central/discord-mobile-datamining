import ME from "ME";
import { Store } from "initialize";
import set from "ANALYTICS_NAME";

let FormStates;
let c0;
let c3;
let obj1;
function handleFormOpen() {
  const OPEN = FormStates.OPEN;
  let closure_12 = {};
}
function handleReset() {
  let closure_8 = {};
  let closure_12 = {};
  let closure_9 = obj;
  const CLOSED = FormStates.CLOSED;
  closure_12 = {};
}
({ BIO_MAX_LENGTH: c0, FormStates } = ME);
({ ME: obj1, UserSettingsSections: c3 } = ME);
let closure_4 = {};
let obj = {};
let closure_6 = {};
let items = [...require("INVITE").PSEUDO_GUILD_IDS, require("date").FAVORITES_RAW_GUILD_ID, require("ANALYTICS_NAME").NOTIFICATIONS_INBOX_RAW_GUILD_ID];
let set = new Set(items);
let closure_8 = {};
let c10;
let CLOSED = FormStates.CLOSED;
let closure_12 = {};
class UserProfileSettingsStore extends Store {
}
const prototype = UserProfileSettingsStore.prototype;
Object.defineProperty(prototype, "selectedGuildId", {
  get: function selectedGuildId(arg0) {
    return c10;
  },
  set: undefined
});
prototype["getFormState"] = function getFormState() {
  return CLOSED;
};
prototype["getErrors"] = function getErrors(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = closure_2;
  }
  let tmp3 = closure_12[tmp];
  if (tmp3 == null) {
    tmp3 = closure_6;
  }
  return tmp3;
};
prototype["getPendingChanges"] = function getPendingChanges(closure_0) {
  let tmp = closure_0;
  if (closure_0 == null) {
    tmp = closure_2;
  }
  let tmp3 = closure_8[tmp];
  if (tmp3 == null) {
    tmp3 = closure_4;
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
  let values = Object.values(closure_8);
  return values.some((arg0) => {
    const values = Object.values(arg0);
    return values.some((arg0) => undefined !== arg0);
  });
};
prototype["showNotice"] = function showNotice() {
  const self = this;
  let values = Object.values(this.getPendingChanges(closure_2));
  let someResult = values.some((arg0) => undefined !== arg0);
  if (!someResult) {
    const _Object = Object;
    values = Object.values(self.getPendingChanges(c10));
    someResult = values.some((arg0) => undefined !== arg0);
  }
  return someResult;
};
prototype["canSubmit"] = function canSubmit() {
  const self = this;
  const items = [closure_2, c10];
  for (const item10009 of items) {
    let pendingChanges = self.getPendingChanges(item10009);
    if (undefined !== pendingChanges.pendingBio) {
      let tmp3 = pendingChanges;
      let tmp4 = closure_0;
      if (tmp2.pendingBio.length > closure_0) {
        let tmp5 = obj;
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
      let closure_12 = {};
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
    let c10 = tmp;
    const OPEN = FormStates.OPEN;
    let closure_12 = {};
  },
  USER_PROFILE_SETTINGS_SET_GUILD: function handleSetGuild(guildId) {
    guildId = guildId.guildId;
    let tmp;
    if (null != guildId) {
      if (!set.has(guildId)) {
        tmp = guildId;
      }
    }
    let c10 = tmp;
    let closure_12 = {};
  },
  USER_PROFILE_SETTINGS_CLOSE: function handleFormClose() {
    const CLOSED = FormStates.CLOSED;
    let closure_12 = {};
  },
  USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: handleReset,
  USER_PROFILE_SETTINGS_SUBMIT: function handleFormSubmit() {
    const SUBMITTING = FormStates.SUBMITTING;
    let closure_12 = {};
  },
  USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: function handleFormSubmitSuccess(guildId) {
    guildId = guildId.guildId;
    if (OPEN !== FormStates.SUBMITTING) {
      return false;
    } else {
      OPEN = tmp.OPEN;
      if (guildId == null) {
        guildId = closure_2;
      }
      closure_12[guildId] = closure_6;
    }
  },
  USER_PROFILE_SETTINGS_SUBMIT_FAILURE: function handleFormSubmitFailure(arg0) {
    let errors;
    let guildId;
    ({ guildId, errors } = arg0);
    if (OPEN !== FormStates.SUBMITTING) {
      return false;
    } else {
      OPEN = tmp.OPEN;
      if (guildId == null) {
        guildId = closure_2;
      }
      if (errors == null) {
        errors = closure_6;
      }
      closure_12[guildId] = errors;
    }
  },
  USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: function handleSetPendingChanges(arg0) {
    let guildId;
    let type;
    ({ type, guildId } = arg0);
    const merged = Object.assign(arg0, Object.create(null));
    let tmp3 = guildId;
    if (guildId == null) {
      tmp3 = closure_2;
    }
    if (guildId == null) {
      guildId = closure_2;
    }
    const merged1 = Object.assign(closure_8[guildId]);
    const merged2 = Object.assign(merged);
    closure_8[tmp3] = {};
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: function handleSetTryItOutAvatar(avatar) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutAvatar = avatar.avatar;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: function handleSetTryItOutAvatarDecoration(avatarDecoration) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutAvatarDecoration = avatarDecoration.avatarDecoration;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: function handleSetTryItOutProfileEffect(profileEffect) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutProfileEffect = profileEffect.profileEffect;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: function handleSetTryItOutBanner(banner) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutBanner = banner.banner;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: function handleSetTryItOutThemeColors(themeColors) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutThemeColors = themeColors.themeColors;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: function handleSetTryItOutDisplayNameStyles(displayNameStyles) {
    const obj = {};
    const merged = Object.assign(obj);
    obj.tryItOutDisplayNameStyles = displayNameStyles.displayNameStyles;
  },
  USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: function handleSetTryItOutPreset(avatarDecoration) {
    let banner;
    let displayNameStyles;
    let themeColors;
    let tryItOutAvatarDecoration = avatarDecoration.avatarDecoration;
    const obj = {};
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
    let closure_12 = {};
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: function handleResetPendingAccountChanges() {
    const entries = Object.entries(closure_8);
    closure_8 = Object.fromEntries(entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      const obj = {};
      const merged = Object.assign(tmp2);
      obj.pendingGlobalName = undefined;
      obj.pendingNickname = undefined;
      obj.pendingDisplayNameStyles = undefined;
      obj.pendingAvatar = undefined;
      obj.pendingAvatarDecoration = undefined;
      obj.pendingNameplate = undefined;
      items[1] = obj;
      return items;
    }));
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES: function handleResetPendingProfileChanges() {
    const entries = Object.entries(closure_8);
    closure_8 = Object.fromEntries(entries.map((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      const items = [tmp, ];
      const obj = {};
      const merged = Object.assign(tmp2);
      obj.pendingPronouns = undefined;
      obj.pendingProfileEffect = undefined;
      obj.pendingProfileFrame = undefined;
      obj.pendingBanner = undefined;
      obj.pendingBannerOriginalMd5 = undefined;
      obj.pendingAccentColor = undefined;
      obj.pendingThemeColors = undefined;
      obj.pendingBio = undefined;
      items[1] = obj;
      return items;
    }));
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: function handleResetPendingChanges() {
    let closure_8 = {};
    let closure_12 = {};
  },
  USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: function handleResetTryItOutChanges() {
    let closure_9 = obj;
  },
  USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: function handleResetPendingLegacyUsernameDisabled() {
    let obj = dependencyMap[closure_2];
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
    let obj = dependencyMap[closure_2];
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
    let errors;
    let guildId;
    ({ guildId, errors } = arg0);
    const OPEN = FormStates.OPEN;
    if (guildId == null) {
      guildId = closure_2;
    }
    if (errors == null) {
      errors = closure_6;
    }
    closure_12[guildId] = errors;
  },
  LOGOUT: handleReset
};
const userProfileSettingsStore = new UserProfileSettingsStore(require("dispatcher"), obj);
const result = set.fileFinishedImporting("modules/user_profile/UserProfileSettingsStore.tsx");

export default userProfileSettingsStore;
export const IGNORE_GUILD_IDS = set;