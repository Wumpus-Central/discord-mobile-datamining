// === Module 11109: UserProfilePreview ===

// Module 11109 (UserProfilePreview)
import nativeDefault from "native" /* 576 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8224 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8160 */;

const require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
const View = fn(17).View;
const Constants = fn(7208);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7, UserProfileThemeTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num = arg2;
  if (arg2 == null) {
    num = 263;
  }
  let obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: null, profileInnerContent: null, aboutMeCard: null, profileEffect: null };
  obj = { overflow: "hidden", minHeight: num2, borderWidth: 1, borderColor: null, borderRadius: null };
  const colors = nativeDefault.colors;
  if (arg1) {
    let BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  obj.borderColor = BACKGROUND_SURFACE_HIGH;
  obj.borderRadius = tmp4(576).radii.lg;
  obj.profileContentContainer = obj;
  obj.profileInnerContent = { flexGrow: 1 };
  obj = { marginTop: tmp4(576).space.PX_12 };
  obj.aboutMeCard = obj;
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default function UserProfilePreview(hideFrame) {
  ({ user, displayName, guildId } = hideFrame);
  ({ profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, compact } = hideFrame);
  ({ accessibilityLabel, style } = hideFrame);
  if (compact === undefined) {
    compact = false;
  }
  let flag = hideFrame.hideFrame;
  if (flag === undefined) {
    flag = false;
  }
  ({ additionalBadges, maxWidth } = hideFrame);
  if (additionalBadges === undefined) {
    additionalBadges = [];
  }
  importDefault = undefined;
  let set;
  let first;
  noop = undefined;
  let obj = guildId(set[8]);
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => UserProfileSettingsStore.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp5 = require("useDisplayProfile")(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors }));
  const tmp8 = closure_12(compact, null != primaryColor, maxWidth);
  const tmp9 = require("UserProfileSharedStyles")();
  let obj1 = guildId(set[12]);
  const customStatusActivity = obj1.useCustomStatusActivity();
  let tmp27Result = null != customStatusActivity && !compact;
  let tmpResult = guildId(tmp2[13]);
  const userProfileColors = tmpResult.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBackground, gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (undefined !== profileEffectOverride) {
    pendingProfileEffect = profileEffectOverride;
  }
  if (undefined !== profileFrameOverride) {
    pendingProfileFrame = profileFrameOverride;
  }
  if (undefined !== displayNameStylesOverride) {
    pendingDisplayNameStyles = displayNameStylesOverride;
  }
  tmpResult = guildId(tmp2[14]);
  obj = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp5 != null) {
    profileEffect = tmp5.profileEffect;
  }
  obj.userValue = profileEffect;
  let profileEffect1;
  if (tmp5 != null) {
    const _guildMemberProfile = tmp5._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj.guildValue = profileEffect1;
  obj.guildId = guildId;
  let str = tmpResult.getProfilePreviewValue(obj);
  let profilePreviewValue;
  if (!flag) {
    obj = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
    let profileFrame;
    if (tmp5 != null) {
      profileFrame = tmp5.profileFrame;
    }
    obj.userValue = profileFrame;
    let profileFrame1;
    if (tmp5 != null) {
      const _guildMemberProfile2 = tmp5._guildMemberProfile;
      if (_guildMemberProfile2 != null) {
        profileFrame1 = _guildMemberProfile2.profileFrame;
      }
    }
    obj.guildValue = profileFrame1;
    obj.guildId = guildId;
    profilePreviewValue = guildId(tmp2[14]).getProfilePreviewValue(obj);
    const tmpResult1 = guildId(tmp2[14]);
  }
  let skuId;
  let tmp4Result = tmp4(tmp2[15]);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const tmp4ResultResult = tmp4Result(skuId, "UserProfilePreview");
  importDefault = tmp4ResultResult;
  const tmp6 = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors });
  obj1 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = guildId(set[16]).getPendingAvatarSrc(obj1);
  const arr2 = require("useBadges")(tmp5, pendingLegacyUsernameDisabled);
  let str2 = globalThis;
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp23 = first(noop.useState({ width: 0, height: 0 }), 2);
  first = tmp23[0];
  noop = tmp23[1];
  const items2 = [tmp4ResultResult, first.width];
  const callback = noop.useCallback((nativeEvent) => {
    const size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
    closure_4(size);
  }, []);
  const memo = noop.useMemo(() => {
    if (null != closure_1) {
      const layers = closure_1.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(closure_1, first.width));
      let num = 0;
      if (layers.some((type) => {
        let tmp = "staple" === type.type;
        if (tmp) {
          tmp = "top" === type.anchor;
        }
        return tmp;
      })) {
        num = overflowTop;
      }
      const obj = { marginTop: num, marginBottom: null, marginHorizontal: null };
      const layers2 = closure_1.layers;
      let num2 = 0;
      if (layers2.some((type) => {
        let tmp = "staple" === type.type;
        if (tmp) {
          tmp = "bottom" === type.anchor;
        }
        return tmp;
      })) {
        num2 = overflowBottom;
      }
      obj.marginBottom = num2;
      obj.marginHorizontal = overflowHorizontal;
      return obj;
    }
  }, items2);
  const obj2 = { theme, primaryColor, secondaryColor, children: null };
  const obj3 = { style: null, pointerEvents: "none", accessibilityLabel, accessibilityRole: "image", accessible: true, children: null };
  const items3 = [tmp8.profileContainer, memo, style];
  obj3.style = items3;
  const obj4 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 }, children: null };
  tmp27Result = null != tmp4ResultResult;
  if (tmp27Result) {
    const obj5 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: null, containerWidth: null, containerHeight: null };
    tmp4Result = tmp4(tmp2[20]);
    obj5.frameOrder = guildId(tmp2[21]).ProfileFrameLayerOrder.BACK;
    ({ width: obj13.containerWidth, height: obj13.containerHeight } = first);
    tmp27Result = closure_9(tmp4Result, obj5);
  }
  const items4 = [tmp27Result, , ];
  const obj6 = { onLayout: callback, style: tmp8.profileContentContainer, children: null };
  const obj7 = { user, displayProfile: tmp5, bannerHeight: null, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: true };
  const tmpResult2 = guildId(set[16]);
  obj7.bannerHeight = guildId(set[23]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
  obj7.pendingBanner = pendingBanner;
  obj7.pendingAvatarSrc = pendingAvatarSrc;
  let tmp35;
  if (null != pendingAccentColor) {
    tmp35 = pendingAccentColor;
  }
  obj7.pendingAccentColor = tmp35;
  let tmp36;
  if (null != pendingThemeColors) {
    tmp36 = pendingThemeColors;
  }
  obj7.pendingThemeColors = tmp36;
  const items5 = [closure_9(require("UserProfileBanner"), obj7), , ];
  const obj8 = { style: tmp8.profileInnerContent, children: null };
  const items6 = [closure_9(require("UserProfileAvatar"), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp38 = !tmp27Result;
  const tmp4Result1 = require("UserProfileBanner");
  if (!tmp27Result) {
    const obj10 = { paddingTop };
    tmp38 = obj10;
  }
  items7[2] = tmp38;
  obj9.containerStyle = items7;
  if (tmp27Result) {
    const obj11 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: tmp7, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj19.style, emojiOnlyCustomStatusBubble: obj19.emojiOnlyStyle } = tmp9);
    tmp27Result = closure_9(tmp4(tmp2[26]), obj11);
  }
  const items8 = [tmp27Result, , ];
  const obj12 = { user, themeType: constants.PREVIEW, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, showBadgeToastOnPress: false, pendingDisplayNameStyles: null, guildId: null };
  const tmp4Result2 = require("UserProfileGradientContainer");
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  obj12.displayName = displayName;
  if (pendingPronouns == null) {
    let pronouns;
    if (tmp5 != null) {
      pronouns = tmp5.pronouns;
    }
    pendingPronouns = pronouns;
  }
  obj12.pronouns = pendingPronouns;
  obj12.badges = items1;
  obj12.badgeContainerBackground = containerBackground;
  obj12.pendingDisplayNameStyles = pendingDisplayNameStyles;
  obj12.guildId = guildId;
  items8[1] = closure_9(require("UserProfilePrimaryInfo"), obj12);
  let tmp27Result1 = !compact;
  if (!compact) {
    const obj13 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: null, bioLineClamp: 1 };
    const items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj14 = { backgroundColor: containerBackground };
    items9[2] = obj14;
    obj13.style = items9;
    tmp27Result1 = closure_9(tmp4(tmp2[28]), obj13);
  }
  items8[2] = tmp27Result1;
  obj9.children = items8;
  items6[1] = closure_10(tmp4Result2, obj9);
  obj8.children = items6;
  items5[1] = closure_10(View, obj8);
  if (null == str) {
    items5[2] = tmp45;
    obj6.children = items5;
    items4[1] = closure_10(View, obj6);
    let tmp27Result2 = null != tmp4ResultResult;
    if (tmp27Result2) {
      const obj15 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(tmp2[21]).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
      ({ width: obj24.containerWidth, height: obj24.containerHeight } = first);
      tmp27Result2 = closure_9(tmp4(tmp2[20]), obj15);
      const tmp4Result4 = tmp4(tmp2[20]);
    }
    items4[2] = tmp27Result2;
    obj4.children = items4;
    obj3.children = closure_10(View, obj4);
    obj2.children = closure_9(View, obj3);
    return closure_9(guildId(tmp2[19]).ThemeContextProvider, obj2);
  } else {
    const obj16 = { skuId: str.skuId, style: tmp8.profileEffect };
    if (null != profileEffectRestartKey) {
      str = "-";
      str2 = "";
      skuId = "" + str.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = `-`.skuId;
    }
    closure_9(tmp4(tmp2[29]), obj16, skuId);
    const tmp4Result5 = tmp4(tmp2[29]);
  }
  const tmp4Result3 = require("UserProfilePrimaryInfo");
};