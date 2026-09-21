// === Module 8436: UserProfileActionCreators ===

// Module 8436 (UserProfileActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import shared from "shared" /* 4607 */;
import InlineUploaderDefault from "InlineUploader" /* 5386 */;
import safetyScannedUploadSurfaces from "safetyScannedUploadSurfaces" /* 7230 */;
import MessageParserDefault from "MessageParser" /* 7918 */;
import useShouldConvertBioEmoji from "useShouldConvertBioEmoji" /* 8437 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
let closure_11 = async function _saveProfileChanges(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          let headersForMd5 = closure_0;
          let bannerSurface = closure_1;
          closure_132_0 = closure_1;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          closure_132_1 = id;
          if (null != id) {
            let shouldConvertBioEmoji = null != headersForMd5.bio;
            if (shouldConvertBioEmoji) {
              shouldConvertBioEmoji = obj8.getShouldConvertBioEmoji();
            }
            if (shouldConvertBioEmoji) {
              headersForMd5.bio = MessageParserDefault.parse(undefined, headersForMd5.bio).content;
            }
            c7 = 1;
            obj8 = useShouldConvertBioEmoji;
            const obj4 = { type: "USER_PROFILE_UPDATE_START", userId: id, guildId: bannerSurface };
            DispatcherDefault.dispatch(obj4);
            if (null != bannerSurface) {
              const obj6 = { url: React5.USER_GUILD_PROFILE(bannerSurface, React6), bannerSurface: safetyScannedUploadSurfaces.SafetyScannedUploadSurface.USER_GUILD_PROFILE_BANNER };
              let obj7 = obj6;
            } else {
              obj7 = { url: React5.USER_PROFILE(React6), bannerSurface: safetyScannedUploadSurfaces.SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_BANNER };
            }
            bannerSurface = obj7.bannerSurface;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: obj7.url, body: headersForMd5, headers: null, oldFormErrors: true, rejectWithError: false };
            const obj11 = {};
            obj11[bannerSurface] = closure_2;
            headersForMd5 = InlineUploaderDefault.buildHeadersForMd5(obj11);
            request.headers = headersForMd5;
            HTTP.patch(request);
            c8 = 2;
            c9 = 1;
          } else {
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
        }
      } else if (1 === tmp7) {
        c7 = 0;
        closure_132_5 = closure_6;
        const aPIError = new closure_133_0(closure_133_2[14]).APIError(closure_132_5);
        closure_132_3 = aPIError;
        let body;
        if (closure_132_5 != null) {
          body = closure_132_5.body;
        }
        closure_3 = body;
        if (body == null) {
          closure_3 = {};
        }
        closure_132_4 = closure_3;
        const obj12 = { type: "USER_PROFILE_UPDATE_FAILURE", guildId: closure_132_0, errors: closure_132_4, apiError: closure_132_3 };
        closure_133_1(closure_133_2[10]).dispatch(obj12);
        c9 = 3;
        const obj13 = { value: closure_132_5, done: true };
        return obj13;
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        const obj14 = { value, done: true };
        return obj14;
      } else {
        closure_132_2 = value;
        const obj16 = { type: "USER_PROFILE_UPDATE_SUCCESS", userId: closure_132_1, guildId: closure_132_0 };
        const merged = Object.assign(closure_132_2.body);
        closure_133_1(closure_133_2[10]).dispatch(obj16);
        c7 = 0;
        c9 = 3;
        const obj17 = { value: closure_132_2, done: true };
        return obj17;
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
};
const Constants = fn(1074);
({ ComponentActions: hasOwnProperty, AnalyticEvents: metroRequire, Endpoints: closure_7, ME: closure_8 } = Constants);
const PremiumConstants = fn(1374);
({ AnalyticsPremiumFeatureTiers: closure_9, AnalyticsPremiumFeatureNames: c10 } = PremiumConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileActionCreators.tsx");

export const notifyUnsavedUserProfileChangesInModal = function notifyUnsavedUserProfileChangesInModal() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(constants.SHAKE_PROFILE_MODAL);
  const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch2.dispatch(constants.EMPHASIZE_NOTICE);
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  const intl = util.intl;
  const intl2 = util.intl;
  AccessibilityAnnouncer.announce("" + intl.string(util.t.GP7JLE) + " " + intl2.string(util.t.gKoO1D));
};
export const saveProfileChanges = function saveProfileChanges() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const pinUserProfileBadgesOnClient = function pinUserProfileBadgesOnClient(items, ttlInSeconds) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    const obj2 = { type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: items, ttlInSeconds, userId: id };
    DispatcherDefault.dispatch(obj2);
  }
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPendingChanges = function resetAllPendingChanges() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOutChanges = function resetAllTryItOutChanges() {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const setTryItOutAvatar = function setTryItOutAvatar(avatar) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.ANIMATED_AVATAR, feature_tier: constants3.PREMIUM_STANDARD });
};
export const setTryItOutAvatarDecoration = function setTryItOutAvatarDecoration(avatarDecoration) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.AVATAR_DECORATION, feature_tier: constants3.PREMIUM_STANDARD });
};
export const setTryItOutProfileEffect = function setTryItOutProfileEffect(purchasedItem) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT", profileEffect: purchasedItem });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT", profileEffect: purchasedItem };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.PROFILE_EFFECT, feature_tier: constants3.PREMIUM_STANDARD });
};
export const setTryItOutBanner = function setTryItOutBanner(banner) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.PROFILE_BANNER, feature_tier: constants3.PREMIUM_STANDARD });
};
export const setTryItOutThemeColors = function setTryItOutThemeColors(themeColors) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.PROFILE_THEME_COLOR, feature_tier: constants3.PREMIUM_STANDARD });
};
export const setTryItOutDisplayNameStyles = function setTryItOutDisplayNameStyles(displayNameStyles) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.DISPLAY_NAME_STYLES, feature_tier: constants3.PREMIUM_STANDARD });
};
export const setTryItOutCustomTypingIndicatorStyle = function setTryItOutCustomTypingIndicatorStyle(customTypingIndicatorStyle) {
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_CUSTOM_TYPING_INDICATOR_STYLE", customTypingIndicatorStyle });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_CUSTOM_TYPING_INDICATOR_STYLE", customTypingIndicatorStyle };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.TYPING_INDICATOR, feature_tier: constants3.PREMIUM_STANDARD });
};
export const setTryItOutPreset = function setTryItOutPreset(arg0) {
  const merged = Object.assign(arg0);
  DispatcherDefault.dispatch({ type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET" });
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET" };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, { feature_name: constants4.PRESET, feature_tier: constants3.PREMIUM_STANDARD });
};