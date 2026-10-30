// === Module 11356: UserProfilePreview ===

// Module 11356 (UserProfilePreview)
import nativeDefault from "native" /* 575 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 8789 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8723 */;

const require = fn;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
const View = fn(17).View;
const Constants = fn(7371);
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: closure_7, UserProfileThemeTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
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
  obj2.borderRadius = tmp4(575).radii.lg;
  obj.profileContentContainer = obj2;
  obj.profileInnerContent = { flexGrow: 1 };
  obj.aboutMeCard = { marginTop: tmp4(575).space.PX_12 };
  obj.profileEffect = { zIndex: 1 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

export default function UserProfilePreview(compact) {
  ({ user, displayName, guildId } = compact);
  ({ avatarDecorationOverride, profileEffectOverride, profileEffectRestartKey, profileFrameOverride, displayNameStylesOverride, isPremiumTryItOut } = compact);
  ({ accessibilityLabel, style } = compact);
  if (isPremiumTryItOut === undefined) {
    isPremiumTryItOut = false;
  }
  let flag = compact.compact;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = compact.hideFrame;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = compact.hideBadges;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = compact.hidePronouns;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = compact.hideGuildTag;
  if (flag5 === undefined) {
    flag5 = false;
  }
  ({ additionalBadges, maxWidth } = compact);
  if (additionalBadges === undefined) {
    additionalBadges = [];
  }
  dependencyMap = undefined;
  let set;
  let first;
  closure_5 = undefined;
  const items = [UserProfileSettingsStore];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items, () => {
    const pendingChanges = UserProfileSettingsStore.getPendingChanges(guildId);
    if (isPremiumTryItOut) {
      const tryItOutChanges = UserProfileSettingsStore.getTryItOutChanges();
      const obj3 = {};
      const merged = Object.assign(pendingChanges);
      ({ tryItOutAvatar: obj2.pendingAvatar, tryItOutBanner: obj2.pendingBanner, tryItOutThemeColors: obj2.pendingThemeColors, tryItOutAvatarDecoration: obj2.pendingAvatarDecoration, tryItOutProfileEffect: obj2.pendingProfileEffect, tryItOutDisplayNameStyles: obj2.pendingDisplayNameStyles } = tryItOutChanges);
      return obj3;
    } else {
      return pendingChanges;
    }
  });
  ({ pendingAccentColor, pendingThemeColors, pendingAvatarDecoration, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingGlobalName, pendingLegacyUsernameDisabled, pendingPrimaryGuildId } = stateFromStoresObject);
  const tmp5 = isPremiumTryItOut(8749)(user.id, guildId);
  let obj = guildId(504);
  ({ theme, primaryColor, secondaryColor } = isPremiumTryItOut(8792)({ user, displayProfile: tmp5, pendingThemeColors, isPreview: isPremiumTryItOut }));
  const tmp8 = closure_12(flag, null != primaryColor, maxWidth);
  const tmp9 = isPremiumTryItOut(8806)();
  const tmp6 = isPremiumTryItOut(8792)({ user, displayProfile: tmp5, pendingThemeColors, isPreview: isPremiumTryItOut });
  const customStatusActivity = guildId(11357).useCustomStatusActivity();
  let tmp28Result5 = null != customStatusActivity && !flag;
  const obj2 = guildId(11357);
  const userProfileColors = guildId(8803).useUserProfileColors({ theme, primaryColor, secondaryColor });
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
  const tmpResult = guildId(8803);
  let obj3 = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
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
  let str = guildId(8729).getProfilePreviewValue(obj3);
  let profilePreviewValue;
  if (!flag2) {
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
    profilePreviewValue = guildId(8729).getProfilePreviewValue(obj4);
    const tmpResult6 = guildId(8729);
  }
  let skuId1;
  const tmpResult5 = guildId(8729);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  const tmp4ResultResult = isPremiumTryItOut(8766)(skuId1);
  dependencyMap = tmp4ResultResult;
  const tmp4Result = isPremiumTryItOut(8766);
  const pendingAvatarSrc = guildId(8732).getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  const obj5 = { userId: user.id, image: pendingAvatar };
  const tmpResult7 = guildId(8732);
  const userPrimaryGuild = guildId(8728).useUserPrimaryGuild(pendingPrimaryGuildId);
  const arr2 = isPremiumTryItOut(8807)(tmp5, pendingLegacyUsernameDisabled);
  let str2 = globalThis;
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp24 = set(first.useState({ width: 0, height: 0 }), 2);
  first = tmp24[0];
  closure_5 = tmp24[1];
  const items2 = [tmp4ResultResult, first.width];
  const callback = first.useCallback((nativeEvent) => {
    const size = { width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) };
    closure_5(size);
  }, []);
  const memo = first.useMemo(() => {
    if (null != closure_2) {
      const layers = closure_2.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(closure_2, first.width));
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
      const layers2 = closure_2.layers;
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
  let tmp28Result = null != tmp4ResultResult;
  if (tmp28Result) {
    const obj9 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(8772).ProfileFrameLayerOrder.BACK, containerWidth: null, containerHeight: null };
    ({ width: obj14.containerWidth, height: obj14.containerHeight } = first);
    tmp28Result = closure_9(tmp4(8785), obj9);
    const tmp4Result7 = tmp4(8785);
  }
  const items4 = [tmp28Result, , ];
  const obj10 = { onLayout: callback, style: tmp8.profileContentContainer, children: null };
  const obj11 = { user, displayProfile: tmp5, bannerHeight: null, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: true };
  const tmpResult8 = guildId(8728);
  obj11.bannerHeight = guildId(9477).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
  obj11.pendingBanner = pendingBanner;
  obj11.pendingAvatarSrc = pendingAvatarSrc;
  let tmp36;
  if (null != pendingAccentColor) {
    tmp36 = pendingAccentColor;
  }
  obj11.pendingAccentColor = tmp36;
  let tmp37;
  if (null != pendingThemeColors) {
    tmp37 = pendingThemeColors;
  }
  obj11.pendingThemeColors = tmp37;
  const items5 = [closure_9(isPremiumTryItOut(8811), obj11), , ];
  const obj12 = { style: tmp8.profileInnerContent, children: null };
  const items6 = [closure_9(isPremiumTryItOut(8820), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj13 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp39 = !tmp28Result5;
  const tmp4Result8 = isPremiumTryItOut(8811);
  if (!tmp28Result5) {
    const obj15 = { paddingTop };
    tmp39 = obj15;
  }
  items7[2] = tmp39;
  obj13.containerStyle = items7;
  if (tmp28Result5) {
    const obj16 = { customStatusActivity, themeType: constants.PREVIEW, hasCustomProfileTheme: tmp7, style: null, emojiOnlyStyle: null };
    ({ customStatusBubble: obj20.style, emojiOnlyCustomStatusBubble: obj20.emojiOnlyStyle } = tmp9);
    tmp28Result5 = closure_9(tmp4(11359), obj16);
  }
  const items8 = [tmp28Result5, , ];
  const obj17 = { user, themeType: constants.PREVIEW, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, showBadgeToastOnPress: false, pendingDisplayNameStyles: null, primaryGuildOverride: null, guildId: null, hideBadges: null };
  const tmp4Result9 = isPremiumTryItOut(11358);
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  obj17.displayName = displayName;
  let tmp44 = null;
  if (!flag4) {
    if (pendingPronouns == null) {
      let pronouns;
      if (tmp5 != null) {
        pronouns = tmp5.pronouns;
      }
      pendingPronouns = pronouns;
    }
    tmp44 = pendingPronouns;
  }
  obj17.pronouns = tmp44;
  obj17.badges = items1;
  obj17.badgeContainerBackground = containerBackground;
  obj17.pendingDisplayNameStyles = pendingDisplayNameStyles;
  let tmp46 = null;
  if (!flag5) {
    tmp46 = userPrimaryGuild;
  }
  obj17.primaryGuildOverride = tmp46;
  obj17.guildId = guildId;
  obj17.hideBadges = flag3;
  items8[1] = closure_9(isPremiumTryItOut(11376), obj17);
  let tmp28Result6 = !flag;
  if (!flag) {
    const obj18 = { userId: user.id, displayProfile: tmp5, themeType: constants.PREVIEW, style: null, bioLineClamp: 1 };
    const items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj19 = { backgroundColor: containerBackground };
    items9[2] = obj19;
    obj18.style = items9;
    tmp28Result6 = closure_9(tmp4(11457), obj18);
  }
  items8[2] = tmp28Result6;
  obj13.children = items8;
  items6[1] = closure_10(tmp4Result9, obj13);
  obj12.children = items6;
  items5[1] = closure_10(closure_5, obj12);
  if (null == str) {
    items5[2] = tmp48;
    obj10.children = items5;
    items4[1] = closure_10(tmp29, obj10);
    let tmp28Result7 = null != tmp4ResultResult;
    if (tmp28Result7) {
      const obj21 = { frame: tmp4ResultResult, filterLayer, profileThemeType: constants.PREVIEW, frameOrder: guildId(8772).ProfileFrameLayerOrder.FRONT, containerWidth: null, containerHeight: null };
      ({ width: obj25.containerWidth, height: obj25.containerHeight } = first);
      tmp28Result7 = closure_9(tmp4(8785), obj21);
      const tmp4Result11 = tmp4(8785);
    }
    items4[2] = tmp28Result7;
    obj8.children = items4;
    obj7.children = closure_10(tmp29, obj8);
    obj6.children = closure_9(tmp29, obj7);
    return closure_9(guildId(5075).ThemeContextProvider, obj6);
  } else {
    const obj22 = { skuId: str.skuId, style: tmp8.profileEffect };
    if (null != profileEffectRestartKey) {
      str = "-";
      str2 = "";
      let skuId = "" + str.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = `-`.skuId;
    }
    closure_9(tmp4(9475), obj22, skuId);
    const tmp4Result12 = tmp4(9475);
  }
  const tmp4Result10 = isPremiumTryItOut(11376);
};