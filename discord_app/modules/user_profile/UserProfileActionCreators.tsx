// === Module 8416: _saveProfileChanges ===

// Module 8416 (_saveProfileChanges)
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ComponentDispatcher from "ComponentDispatcher" /* 1231 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 1363 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

require = arg1;
function _saveProfileChanges() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body2 = tmp3;
              closure_4 = tmp7;
              let headersForMd5 = callback;
              let bannerSurface = id;
              callback = id;
              id = undefined;
              let body;
              closure_3 = undefined;
              closure_4 = undefined;
              const currentUser = closure_1_4.getCurrentUser();
              id = undefined;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (null != id) {
                let obj7 = callback(body[8]);
                let shouldConvertBioEmoji = null != headersForMd5.bio;
                if (shouldConvertBioEmoji) {
                  shouldConvertBioEmoji = obj7.getShouldConvertBioEmoji();
                }
                if (shouldConvertBioEmoji) {
                  let obj8 = callback2(body[9]);
                  headersForMd5.bio = obj8.parse(undefined, headersForMd5.bio).content;
                }
                c7 = 1;
                let obj9 = callback2(body[10]);
                obj1 = { type: "USER_PROFILE_UPDATE_START", userId: null, guildId: null };
                obj1[1] = id;
                obj1[2] = bannerSurface;
                obj9.dispatch(obj1);
                if (null != bannerSurface) {
                  const obj2 = { url: null, bannerSurface: null };
                  obj2[0] = c7.USER_GUILD_PROFILE(bannerSurface, c8);
                  obj2[1] = callback(body[11]).SafetyScannedUploadSurface.USER_GUILD_PROFILE_BANNER;
                  let obj3 = obj2;
                } else {
                  obj3 = { url: null, bannerSurface: null };
                  obj3[0] = c7.USER_PROFILE(c8);
                  obj3[1] = callback(body[11]).SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_BANNER;
                }
                bannerSurface = obj3.bannerSurface;
                const HTTP = callback(body[12]).HTTP;
                let obj4 = { url: null, body: null, headers: null, oldFormErrors: true, rejectWithError: false };
                obj4[0] = obj3.url;
                obj4[1] = headersForMd5;
                const obj5 = {};
                obj5[bannerSurface] = tmp71;
                headersForMd5 = callback2(body[13]).buildHeadersForMd5(obj5);
                obj4[2] = headersForMd5;
                HTTP.patch(obj4);
                c8 = 2;
                c9 = 1;
                const obj15 = callback2(body[13]);
              } else {
                c9 = 3;
                return { value: "HermesInternal", done: null };
              }
              tmp71 = body;
            }
          } else if (1 === tmp7) {
            c7 = 0;
            body2 = closure_6;
            const aPIError = new callback(body[14]).APIError(body2);
            closure_3 = aPIError;
            body = undefined;
            if (body2 != null) {
              body = body2.body;
            }
            closure_3 = body;
            if (body == null) {
              closure_3 = {};
            }
            closure_4 = closure_3;
            obj4 = id(body[10]);
            const obj6 = { type: "USER_PROFILE_UPDATE_FAILURE", guildId: null, errors: null, apiError: null };
            obj6[1] = callback;
            obj6[2] = closure_4;
            obj6[3] = closure_3;
            obj4.dispatch(obj6);
            c9 = 3;
            obj7 = { value: null, done: true };
            obj7[0] = body2;
            return obj7;
          } else if (arg0 === 1) {
            c9 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            obj8 = { value: null, done: true };
            obj8[0] = arg1;
            return obj8;
          } else {
            body = arg1;
            obj = id(body[10]);
            obj9 = { type: "USER_PROFILE_UPDATE_SUCCESS", userId: null, guildId: null };
            obj9[1] = id;
            obj9[2] = callback;
            const merged = Object.assign(body.body);
            obj.dispatch(obj9);
            c7 = 0;
            c9 = 3;
            const obj10 = { value: null, done: true };
            obj10[0] = body;
            return obj10;
          }
        } catch (tmp62) {
          closure_6 = tmp62;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp62;
          } else {
            c8 = tmp;
          }
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ComponentActions: c5, AnalyticEvents: closure_6, Endpoints: error, ME: closure_8 } = ME);
({ AnalyticsPremiumFeatureTiers: c9, AnalyticsPremiumFeatureNames: c10 } = GuildFeatures);
const result = require("set").fileFinishedImporting("modules/user_profile/UserProfileActionCreators.tsx");

export const notifyUnsavedUserProfileChangesInModal = function notifyUnsavedUserProfileChangesInModal() {
  const ComponentDispatch = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch.dispatch(constants.SHAKE_PROFILE_MODAL);
  const ComponentDispatch2 = ComponentDispatcher.ComponentDispatch;
  ComponentDispatch2.dispatch(constants.EMPHASIZE_NOTICE);
  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
  const intl = getSystemLocale.intl;
  const intl2 = getSystemLocale.intl;
  AccessibilityAnnouncer.announce("" + intl.string(getSystemLocale.t.GP7JLE) + " " + intl2.string(getSystemLocale.t.gKoO1D));
};
export const saveProfileChanges = function saveProfileChanges(closure_8, id2, bannerOriginalMd5) {
  const self = this;
  const apply = _saveProfileChanges.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const pinUserProfileBadgesOnClient = function pinUserProfileBadgesOnClient(items, arg1) {
  currentUser = currentUser.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    let obj = dispatcherDefault;
    obj = { type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: null, ttlInSeconds: null, userId: null };
    obj[1] = items;
    obj[2] = arg1;
    obj[3] = id;
    obj.dispatch(obj);
  }
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPendingChanges = function resetAllPendingChanges() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOutChanges = function resetAllTryItOutChanges() {
  dispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const setTryItOutAvatar = function setTryItOutAvatar(closure_1_4) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar: closure_1_4 };
  obj.dispatch(obj);
  obj = { feature_name: constants4.ANIMATED_AVATAR, feature_tier: constants3.PREMIUM_STANDARD };
  expandEventPropertiesDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutAvatarDecoration = function setTryItOutAvatarDecoration(avatarDecoration) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration };
  obj.dispatch(obj);
  obj = { feature_name: constants4.AVATAR_DECORATION, feature_tier: constants3.PREMIUM_STANDARD };
  expandEventPropertiesDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutProfileEffect = function setTryItOutProfileEffect(profileEffect) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT", profileEffect };
  obj.dispatch(obj);
  obj = { feature_name: constants4.PROFILE_EFFECT, feature_tier: constants3.PREMIUM_STANDARD };
  expandEventPropertiesDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutBanner = function setTryItOutBanner(closure_1_8) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner: closure_1_8 };
  obj.dispatch(obj);
  obj = { feature_name: constants4.PROFILE_BANNER, feature_tier: constants3.PREMIUM_STANDARD };
  expandEventPropertiesDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutThemeColors = function setTryItOutThemeColors(themeColors) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors };
  obj.dispatch(obj);
  obj = { feature_name: constants4.PROFILE_THEME_COLOR, feature_tier: constants3.PREMIUM_STANDARD };
  expandEventPropertiesDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutDisplayNameStyles = function setTryItOutDisplayNameStyles(displayNameStyles) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles };
  obj.dispatch(obj);
  obj = { feature_name: constants4.DISPLAY_NAME_STYLES, feature_tier: constants3.PREMIUM_STANDARD };
  expandEventPropertiesDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutPreset = function setTryItOutPreset(arg0) {
  let obj = dispatcherDefault;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
  obj = { feature_name: constants4.PRESET, feature_tier: constants3.PREMIUM_STANDARD };
  expandEventPropertiesDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};