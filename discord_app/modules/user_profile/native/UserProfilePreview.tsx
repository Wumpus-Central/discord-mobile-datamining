// === Module 10561: UserProfilePreview ===

// Module 10561 (UserProfilePreview)
import nativeDefault from "native" /* 576 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 7662 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 7598 */;

const require = globalThis.__r;

const require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
const View = fn(17).View;
const Constants = fn(6624);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7, UserProfileThemeTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4829);
let closure_12 = createStyles.createStyles((arg0, arg1, arg2) => {
  let num = arg2;
  if (arg2 == null) {
    num = 263;
  }
  const obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: null, profileInnerContent: null, aboutMeCard: null, profileEffect: null };
  const obj2 = { overflow: "hidden", minHeight: 350, borderWidth: 1, borderColor: null, borderRadius: null };
  const colors = nativeDefault.colors;
  if (arg1) {
    let BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    let tmp4 = importDefault;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = importDefault;
  }
  obj2.borderColor = BACKGROUND_SURFACE_HIGH;
  obj2.borderRadius = tmp4(576).radii.lg;
  obj.profileContentContainer = obj2;
  obj.profileInnerContent = { flexGrow: 1 };
  obj.aboutMeCard = { marginTop: tmp4(576).space.PX_12 };
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default function UserProfilePreview(hideFrame) {
  ({ user, displayName, guildId } = hideFrame);
  ({ avatarDecorationOverride, profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, compact } = hideFrame);
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
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = guildId(set[8]).useStateFromStoresObject(items, () => UserProfileSettingsStore.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp5 = require("useDisplayProfile")(user.id, guildId);
  let obj = guildId(set[8]);
  ({ theme, primaryColor, secondaryColor } = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors }));
  const tmp8 = closure_12(compact, null != primaryColor, maxWidth);
  const tmp9 = require("UserProfileSharedStyles")();
  const tmp6 = require("useProfileTheme")({ user, displayProfile: tmp5, pendingThemeColors });
  const customStatusActivity = guildId(set[12]).useCustomStatusActivity();
  let tmp27Result5 = null != customStatusActivity && !compact;
  const obj2 = guildId(set[12]);
  const userProfileColors = guildId(set[13]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBackground, gradientFallbackBackground, avatarBackground } = userProfileColors);
  if (undefined !== avatarDecorationOverride) {
    pendingAvatarDecoration = avatarDecorationOverride;
  }
  if (undefined !== profileEffectOverride) {
    pendingProfileEffect = profileEffectOverride;
  }
  if (undefined !== profileFrameOverride) {
    pendingProfileFrame = profileFrameOverride;
  }
  if (undefined !== displayNameStylesOverride) {
    pendingDisplayNameStyles = displayNameStylesOverride;
  }
  const tmpResult = guildId(set[13]);
  const obj3 = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp5 != null) {
    profileEffect = tmp5.profileEffect;
  }
  obj3.userValue = profileEffect;
  let profileEffect1;
  if (tmp5 != null) {
    const _guildMemberProfile = tmp5._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj3.guildValue = profileEffect1;
  obj3.guildId = guildId;
  let str = guildId(set[14]).getProfilePreviewValue(obj3);
  let profilePreviewValue;
  if (!flag) {
    const obj4 = { pendingValue: pendingProfileFrame, userValue: null, guildValue: null, guildId: null };
    let profileFrame;
    if (tmp5 != null) {
      profileFrame = tmp5.profileFrame;
    }
    obj4.userValue = profileFrame;
    let profileFrame1;
    if (tmp5 != null) {
      const _guildMemberProfile2 = tmp5._guildMemberProfile;
      if (_guildMemberProfile2 != null) {
        profileFrame1 = _guildMemberProfile2.profileFrame;
      }
    }
    obj4.guildValue = profileFrame1;
    obj4.guildId = guildId;
    profilePreviewValue = guildId(tmp2[14]).getProfilePreviewValue(obj4);
    const tmpResult5 = guildId(tmp2[14]);
  }
  let skuId1;
  const tmpResult4 = guildId(set[14]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const tmp4ResultResult = require("useMaybeFetchProfileFrame")(skuId1);
  importDefault = tmp4ResultResult;
  const tmp4Result = require("useMaybeFetchProfileFrame");
  const pendingAvatarSrc = guildId(set[16]).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
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
  const obj6 = { theme, primaryColor, secondaryColor, children: null };
  const obj7 = { style: null, pointerEvents: "none", accessibilityLabel, accessibilityRole: "image", accessible: true, children: null };
  const items3 = [tmp8.profileContainer, memo, style];
  obj7.style = items3;
  const obj8 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 }, children: null };
  let tmp27Result = null != tmp4ResultResult;
  if (tmp27Result) {
    const obj9 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(tmp2[21]).ProfileFrameLayerOrder.BACK, containerWidth: null, containerHeight: null };
    ({ width: obj13.containerWidth, height: obj13.containerHeight } = first);
    tmp27Result = closure_9(tmp4(tmp2[20]), obj9);
    const tmp4Result7 = tmp4(tmp2[20]);
  }
  const items4 = [tmp27Result, , ];
  const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: null };
  const obj11 = { user, displayProfile: tmp5, bannerHeight: null, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: true };
  const obj5 = { userId: user.id, image: pendingAvatar };
  const tmpResult6 = guildId(set[16]);
  obj11.bannerHeight = guildId(set[23]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
  obj11.pendingBanner = pendingBanner;
  obj11.pendingAvatarSrc = pendingAvatarSrc;
  let tmp35;
  if (null != pendingAccentColor) {
    tmp35 = pendingAccentColor;
  }
  obj11.pendingAccentColor = tmp35;
  let tmp36;
  if (null != pendingThemeColors) {
    tmp36 = pendingThemeColors;
  }
  obj11.pendingThemeColors = tmp36;
  const items5 = [closure_9(require("UserProfileBanner"), obj11), , ];
  const obj12 = { style: tmp8.profileInnerContent, children: null };
  const items6 = [closure_9(require("UserProfileAvatar"), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj14 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp38 = !tmp27Result5;
  const tmp4Result8 = require("UserProfileBanner");
  if (!tmp27Result5) {
    const obj15 = { paddingTop };
    tmp38 = obj15;
  }
  items7[2] = tmp38;
  obj14.containerStyle = items7;
  if (tmp27Result5) {
    const obj16 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: tmp7, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj19.style, emojiOnlyCustomStatusBubble: obj19.emojiOnlyStyle } = tmp9);
    tmp27Result5 = closure_9(tmp4(tmp2[26]), obj16);
  }
  const items8 = [tmp27Result5, , ];
  const obj17 = { user, themeType: constants.PREVIEW, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, showBadgeToastOnPress: false, pendingDisplayNameStyles: null, guildId: null };
  const tmp4Result9 = require("UserProfileGradientContainer");
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  obj17.displayName = displayName;
  if (pendingPronouns == null) {
    let pronouns;
    if (tmp5 != null) {
      pronouns = tmp5.pronouns;
    }
    pendingPronouns = pronouns;
  }
  obj17.pronouns = pendingPronouns;
  obj17.badges = items1;
  obj17.badgeContainerBackground = containerBackground;
  obj17.pendingDisplayNameStyles = pendingDisplayNameStyles;
  obj17.guildId = guildId;
  items8[1] = closure_9(require("UserProfilePrimaryInfo"), obj17);
  let tmp27Result6 = !compact;
  if (!compact) {
    const obj18 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: null, bioLineClamp: 1 };
    const items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj20 = { backgroundColor: containerBackground };
    items9[2] = obj20;
    obj18.style = items9;
    tmp27Result6 = closure_9(tmp4(tmp2[28]), obj18);
  }
  items8[2] = tmp27Result6;
  obj14.children = items8;
  items6[1] = closure_10(tmp4Result9, obj14);
  obj12.children = items6;
  items5[1] = closure_10(View, obj12);
  if (null == str) {
    items5[2] = tmp45;
    obj10.children = items5;
    items4[1] = closure_10(View, obj10);
    let tmp27Result7 = null != tmp4ResultResult;
    if (tmp27Result7) {
      const obj21 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(tmp2[21]).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
      ({ width: obj24.containerWidth, height: obj24.containerHeight } = first);
      tmp27Result7 = closure_9(tmp4(tmp2[20]), obj21);
      const tmp4Result11 = tmp4(tmp2[20]);
    }
    items4[2] = tmp27Result7;
    obj8.children = items4;
    obj7.children = closure_10(View, obj8);
    obj6.children = closure_9(View, obj7);
    return closure_9(guildId(tmp2[19]).ThemeContextProvider, obj6);
  } else {
    const obj22 = { skuId: str.skuId, style: tmp8.profileEffect };
    if (null != profileEffectRestartKey) {
      str = "-";
      str2 = "";
      let skuId = "" + str.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = `-`.skuId;
    }
    closure_9(tmp4(tmp2[29]), obj22, skuId);
    const tmp4Result12 = tmp4(tmp2[29]);
  }
  const tmp4Result10 = require("UserProfilePrimaryInfo");
};