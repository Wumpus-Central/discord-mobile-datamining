// discord_app/modules/user_profile/UserProfileActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import ComponentDispatchUtils from "../../utils/ComponentDispatchUtils.tsx";
import intl3 from "../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import shared from "../../design/shared.tsx";
import InlineUploaderDefault from "../../lib/uploader_inline/InlineUploader.tsx";
import safetyScannedUploadSurfaces from "../../lib/uploader_inline/safetyScannedUploadSurfaces.tsx";
import MessageParserDefault from "../messages/MessageParser.tsx";
import useShouldConvertBioEmoji from "hooks/useShouldConvertBioEmoji.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import PremiumConstants from "../premium/PremiumConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3, closure_6, errors, guildId, value2;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _saveProfileChanges() {
  obj = _asyncToGenerator(async (guildId, arg1, value) => {
    guildId = arg1;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function (arg0, value, arg2) {
      let bannerSurface;
      let obj11;
      let obj14;
      let url;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let aPIError;
          let id;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              value2 = tmp;
              value = undefined;
              aPIError = undefined;
              errors = undefined;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              const tmp65 = value;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (null != id) {
                let obj10;
                let shouldConvertBioEmoji = null != tmp63.bio;
                const obj7 = useShouldConvertBioEmoji;
                if (shouldConvertBioEmoji) {
                  shouldConvertBioEmoji = obj7.getShouldConvertBioEmoji();
                }
                if (shouldConvertBioEmoji) {
                  const obj8 = MessageParserDefault;
                  guildId.bio = obj8.parse(undefined, guildId.bio).content;
                }
                c7 = 1;
                const obj5 = { type: "USER_PROFILE_UPDATE_START", userId: id, guildId };
                const obj9 = DispatcherDefault;
                obj9.dispatch(obj5);
                if (null != guildId) {
                  obj10 = {
                    url: closure_2_7.USER_GUILD_PROFILE(guildId, closure_2_8),
                    bannerSurface: safetyScannedUploadSurfaces.SafetyScannedUploadSurface.USER_GUILD_PROFILE_BANNER,
                  };
                  const obj6 = {
                    url: closure_2_7.USER_GUILD_PROFILE(guildId, closure_2_8),
                    bannerSurface: safetyScannedUploadSurfaces.SafetyScannedUploadSurface.USER_GUILD_PROFILE_BANNER,
                  };
                } else {
                  obj10 = {
                    url: closure_2_7.USER_PROFILE(closure_2_8),
                    bannerSurface: safetyScannedUploadSurfaces.SafetyScannedUploadSurface.USER_DEFAULT_PROFILE_BANNER,
                  };
                }
                ({ url, bannerSurface } = obj10);
                const HTTP = HTTPUtils.HTTP;
                const request = {
                  url,
                  body: guildId,
                  headers: obj14.buildHeadersForMd5(obj11),
                  oldFormErrors: true,
                  rejectWithError: false,
                };
                const patch = HTTP.patch;
                obj11 = {};
                obj11[bannerSurface] = tmp65;
                c8 = 2;
                c9 = 1;
                obj14 = InlineUploaderDefault;
                const obj12 = { value: patch(request), done: false };
                return obj12;
              } else {
                c9 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (1 === c8) {
            c7 = 0;
            value2 = closure_6;
            const self = this;
            const self2 = this;
            aPIError = new closure_133_0(closure_133_2[14]).APIError(value2);
            let body;
            if (value2 != null) {
              body = value2.body;
            }
            closure_3 = body;
            if (body == null) {
              closure_3 = {};
            }
            errors = closure_3;
            const obj13 = { type: "USER_PROFILE_UPDATE_FAILURE", guildId, errors, apiError: aPIError };
            const obj4 = closure_133_1(closure_133_2[10]);
            obj4.dispatch(obj13);
            c9 = 3;
            return { value: value2, done: true };
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            obj = { type: "USER_PROFILE_UPDATE_SUCCESS", userId: id, guildId };
            const dispatch = closure_133_1(closure_133_2[10]).dispatch;
            closure_133_1(closure_133_2[10]);
            const merged = Object.assign(value.body);
            dispatch(obj);
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          }
        } catch (tmp56) {
          closure_6 = tmp56;
          if (0 === c7) {
            c9 = 3;
            throw tmp56;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({
  ComponentActions: hasOwnProperty,
  AnalyticEvents: metroRequire,
  Endpoints: metroImportDefault,
  ME: metroImportAll,
} = Constants);
({ AnalyticsPremiumFeatureTiers: c9, AnalyticsPremiumFeatureNames: c10 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/user_profile/UserProfileActionCreators.tsx");

export const notifyUnsavedUserProfileChangesInModal = function notifyUnsavedUserProfileChangesInModal() {
  const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch.dispatch(hasOwnProperty.SHAKE_PROFILE_MODAL);
  const ComponentDispatch2 = ComponentDispatchUtils.ComponentDispatch;
  ComponentDispatch2.dispatch(hasOwnProperty.EMPHASIZE_NOTICE);
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  const announce = AccessibilityAnnouncer.announce;
  const intl = intl3.intl;
  const stringResult = intl.string(intl3.t.GP7JLE);
  const intl2 = intl3.intl;
  announce("" + stringResult + " " + intl2.string(intl3.t.gKoO1D));
};
export const saveProfileChanges = function saveProfileChanges() {
  return obj(...arguments);
};
export const pinUserProfileBadgesOnClient = function pinUserProfileBadgesOnClient(items, ttlInSeconds) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  if (null != id) {
    const obj2 = { type: "USER_PROFILE_PIN_BADGES_ON_CLIENT", badges: items, ttlInSeconds, userId: id };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};
export const resetPendingProfileChanges = function resetPendingProfileChanges() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
};
export const resetAllPendingChanges = function resetAllPendingChanges() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
};
export const resetAllTryItOutChanges = function resetAllTryItOutChanges() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES" });
};
export const setTryItOutAvatar = function setTryItOutAvatar(avatar) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR", avatar };
  obj.dispatch(obj2);
  const ANIMATED_AVATAR = constants4.ANIMATED_AVATAR;
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { feature_name: ANIMATED_AVATAR, feature_tier: constants3.PREMIUM_STANDARD };
  obj3.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj4);
};
export const setTryItOutAvatarDecoration = function setTryItOutAvatarDecoration(avatarDecoration) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION", avatarDecoration };
  obj.dispatch(obj2);
  const AVATAR_DECORATION = constants4.AVATAR_DECORATION;
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { feature_name: AVATAR_DECORATION, feature_tier: constants3.PREMIUM_STANDARD };
  obj3.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj4);
};
export const setTryItOutProfileEffect = function setTryItOutProfileEffect(purchasedItem) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT", profileEffect: purchasedItem };
  obj.dispatch(obj2);
  const PROFILE_EFFECT = constants4.PROFILE_EFFECT;
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { feature_name: PROFILE_EFFECT, feature_tier: constants3.PREMIUM_STANDARD };
  obj3.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj4);
};
export const setTryItOutBanner = function setTryItOutBanner(banner) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER", banner };
  obj.dispatch(obj2);
  const PROFILE_BANNER = constants4.PROFILE_BANNER;
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { feature_name: PROFILE_BANNER, feature_tier: constants3.PREMIUM_STANDARD };
  obj3.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj4);
};
export const setTryItOutThemeColors = function setTryItOutThemeColors(themeColors) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS", themeColors };
  obj.dispatch(obj2);
  const PROFILE_THEME_COLOR = constants4.PROFILE_THEME_COLOR;
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { feature_name: PROFILE_THEME_COLOR, feature_tier: constants3.PREMIUM_STANDARD };
  obj3.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj4);
};
export const setTryItOutDisplayNameStyles = function setTryItOutDisplayNameStyles(displayNameStyles) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES", displayNameStyles };
  obj.dispatch(obj2);
  const DISPLAY_NAME_STYLES = constants4.DISPLAY_NAME_STYLES;
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { feature_name: DISPLAY_NAME_STYLES, feature_tier: constants3.PREMIUM_STANDARD };
  obj3.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj4);
};
export const setTryItOutCustomTypingIndicatorStyle = function setTryItOutCustomTypingIndicatorStyle(
  customTypingIndicatorStyle,
) {
  obj = DispatcherDefault;
  const obj2 = {
    type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_CUSTOM_TYPING_INDICATOR_STYLE",
    customTypingIndicatorStyle,
  };
  obj.dispatch(obj2);
  const TYPING_INDICATOR = constants4.TYPING_INDICATOR;
  const obj3 = AnalyticsUtilsDefault;
  const obj4 = { feature_name: TYPING_INDICATOR, feature_tier: constants3.PREMIUM_STANDARD };
  obj3.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj4);
};
export const setTryItOutPreset = function setTryItOutPreset(arg0) {
  const dispatch = DispatcherDefault.dispatch;
  obj = { type: "USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET" };
  DispatcherDefault;
  const merged = Object.assign(arg0);
  dispatch(obj);
  const PRESET = constants4.PRESET;
  const obj2 = AnalyticsUtilsDefault;
  const obj3 = { feature_name: PRESET, feature_tier: constants3.PREMIUM_STANDARD };
  obj2.track(metroRequire.PREMIUM_FEATURE_TRY_OUT, obj3);
};
