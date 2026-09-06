// discord_app/modules/user_profile/UserProfileActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ComponentDispatchUtils from "../../utils/ComponentDispatchUtils.tsx";
import util from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import shared from "../../design/shared.tsx";
import InlineUploaderDefault from "../../lib/uploader_inline/InlineUploader.tsx";
import safetyScannedUploadSurfaces from "../../lib/uploader_inline/safetyScannedUploadSurfaces.tsx";
import MessageParserDefault from "../messages/MessageParser.tsx";
import useShouldConvertBioEmoji from "hooks/useShouldConvertBioEmoji.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
let closure_11 = async function _saveProfileChanges(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
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
            let obj7 = useShouldConvertBioEmoji;
            let shouldConvertBioEmoji = null != headersForMd5.bio;
            if (shouldConvertBioEmoji) {
              shouldConvertBioEmoji = obj7.getShouldConvertBioEmoji();
            }
            if (shouldConvertBioEmoji) {
              let obj8 = MessageParserDefault;
              headersForMd5.bio = obj8.parse(undefined, headersForMd5.bio).content;
            }
            c7 = 1;
            let obj9 = DispatcherDefault;
            const obj1 = { type: "USER_PROFILE_UPDATE_START", userId: id, guildId: bannerSurface };
            obj9.dispatch(obj1);
            if (null != bannerSurface) {
              const obj2 = {
                url: React5.USER_GUILD_PROFILE(bannerSurface, React6),
                bannerSurface: safetyScannedUploadSurfaces.SafetyScannedUploadSurface.USER_GUILD_PROFILE_BANNER,
              };
              let obj3 = obj2;
            } else {
              obj3 = {
                url: React5.USER_PROFILE(React6),
                bannerSurface: safetyScannedUploadSurfaces.SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_BANNER,
              };
            }
            bannerSurface = obj3.bannerSurface;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: obj3.url,
              body: headersForMd5,
              headers: null,
              oldFormErrors: true,
              rejectWithError: false,
            };
            let obj4 = {};
            obj4[bannerSurface] = tmp70;
            headersForMd5 = InlineUploaderDefault.buildHeadersForMd5(obj4);
            request.headers = headersForMd5;
            HTTP.patch(request);
            c8 = 2;
            c9 = 1;
          } else {
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
          tmp70 = closure_2;
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
        obj4 = closure_133_1(closure_133_2[10]);
        const obj5 = {
          type: "USER_PROFILE_UPDATE_FAILURE",
          guildId: closure_132_0,
          errors: closure_132_4,
          apiError: closure_132_3,
        };
        obj4.dispatch(obj5);
        c9 = 3;
        const obj6 = { value: closure_132_5, done: true };
        return obj6;
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        obj7 = { value, done: true };
        return obj7;
      } else {
        closure_132_2 = value;
        obj = closure_133_1(closure_133_2[10]);
        obj8 = { type: "USER_PROFILE_UPDATE_SUCCESS", userId: closure_132_1, guildId: closure_132_0 };
        const merged = Object.assign(closure_132_2.body);
        obj.dispatch(obj8);
        c7 = 0;
        c9 = 3;
        obj9 = { value: closure_132_2, done: true };
        return obj9;
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
const PremiumConstants = fn(1373);
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
    const obj = { type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: items, ttlInSeconds, userId: id };
    obj.dispatch(obj);
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
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar };
  obj.dispatch(obj);
  obj = { feature_name: constants4.ANIMATED_AVATAR, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutAvatarDecoration = function setTryItOutAvatarDecoration(avatarDecoration) {
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration };
  obj.dispatch(obj);
  obj = { feature_name: constants4.AVATAR_DECORATION, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutProfileEffect = function setTryItOutProfileEffect(purchasedItem) {
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT", profileEffect: purchasedItem };
  obj.dispatch(obj);
  obj = { feature_name: constants4.PROFILE_EFFECT, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutBanner = function setTryItOutBanner(banner) {
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner };
  obj.dispatch(obj);
  obj = { feature_name: constants4.PROFILE_BANNER, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutThemeColors = function setTryItOutThemeColors(themeColors) {
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors };
  obj.dispatch(obj);
  obj = { feature_name: constants4.PROFILE_THEME_COLOR, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutDisplayNameStyles = function setTryItOutDisplayNameStyles(displayNameStyles) {
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles };
  obj.dispatch(obj);
  obj = { feature_name: constants4.DISPLAY_NAME_STYLES, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutCustomTypingIndicatorStyle = function setTryItOutCustomTypingIndicatorStyle(
  customTypingIndicatorStyle,
) {
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_CUSTOM_TYPING_INDICATOR_STYLE", customTypingIndicatorStyle };
  obj.dispatch(obj);
  obj = { feature_name: constants4.TYPING_INDICATOR, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
export const setTryItOutPreset = function setTryItOutPreset(arg0) {
  let obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET" };
  const merged = Object.assign(arg0);
  obj.dispatch(obj);
  obj = { feature_name: constants4.PRESET, feature_tier: constants3.PREMIUM_STANDARD };
  AnalyticsUtilsDefault.track(constants2.PREMIUM_FEATURE_TRY_OUT, obj);
};
