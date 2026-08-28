// === Module 8473: filterLayer ===

// Module 8473 (filterLayer)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleFormOpen" /* 8016 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 5966 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
({ PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING: error, UserProfileThemeTypes: closure_8 } = ARBITRARY_LARGE_OFFSET);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_12 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  let num = arg2;
  if (arg2 == null) {
    num = 263;
  }
  let obj = { profileContainer: { position: "relative", width: "100%", maxWidth: num }, profileContentContainer: null, profileInnerContent: null, aboutMeCard: null, profileEffect: null };
  obj = { overflow: "hidden", minHeight: num2, borderWidth: 1, borderColor: null, borderRadius: null };
  const colors = ThemesDefault.colors;
  if (arg1) {
    let BACKGROUND_SURFACE_HIGH = colors.BORDER_MUTED;
    let tmp4 = tmp;
  } else {
    BACKGROUND_SURFACE_HIGH = colors.BACKGROUND_SURFACE_HIGH;
    tmp4 = tmp;
  }
  obj[3] = BACKGROUND_SURFACE_HIGH;
  obj[4] = tmp4(712).radii.lg;
  obj[1] = obj;
  obj[2] = { flexGrow: 1 };
  obj = { marginTop: tmp4(712).space.PX_12 };
  obj[3] = obj;
  obj[4] = { zIndex: 1 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfilePreview.tsx");

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
  let React;
  let obj = guildId(set[8]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => closure_1_6.getPendingChanges(guildId));
  ({ pendingAccentColor, pendingThemeColors, pendingProfileEffect, pendingProfileFrame, pendingDisplayNameStyles, pendingPronouns } = stateFromStoresObject);
  ({ pendingAvatar, pendingBanner, pendingAvatarDecoration, pendingGlobalName, pendingLegacyUsernameDisabled } = stateFromStoresObject);
  const tmp5 = importDefault(set[9])(user.id, guildId);
  ({ theme, primaryColor, secondaryColor } = importDefault(set[10])({ user, displayProfile: tmp5, pendingThemeColors }));
  const tmp8 = callback(compact, null != primaryColor, maxWidth);
  const tmp9 = importDefault(set[11])();
  obj1 = guildId(set[12]);
  const customStatusActivity = obj1.useCustomStatusActivity();
  let tmp27Result = null != customStatusActivity && !compact;
  let tmpResult = tmp(tmp2[13]);
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
  tmpResult = tmp(tmp2[14]);
  obj = { pendingValue: pendingProfileEffect, userValue: null, guildValue: null, guildId: null };
  let profileEffect;
  if (tmp5 != null) {
    profileEffect = tmp5.profileEffect;
  }
  obj[1] = profileEffect;
  let profileEffect1;
  if (tmp5 != null) {
    const _guildMemberProfile = tmp5._guildMemberProfile;
    if (_guildMemberProfile != null) {
      profileEffect1 = _guildMemberProfile.profileEffect;
    }
  }
  obj[2] = profileEffect1;
  obj[3] = guildId;
  let str = tmpResult.getProfilePreviewValue(obj);
  let profilePreviewValue;
  if (!flag) {
    obj = { pendingValue: null, userValue: null, guildValue: null, guildId: null };
    obj[0] = pendingProfileFrame;
    let profileFrame;
    if (tmp5 != null) {
      profileFrame = tmp5.profileFrame;
    }
    obj[1] = profileFrame;
    let profileFrame1;
    if (tmp5 != null) {
      const _guildMemberProfile2 = tmp5._guildMemberProfile;
      if (_guildMemberProfile2 != null) {
        profileFrame1 = _guildMemberProfile2.profileFrame;
      }
    }
    obj[2] = profileFrame1;
    obj[3] = guildId;
    profilePreviewValue = tmp(tmp2[14]).getProfilePreviewValue(obj);
    const tmpResult1 = tmp(tmp2[14]);
  }
  let skuId;
  let tmp4Result = tmp4(tmp2[15]);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const tmp4ResultResult = tmp4Result(skuId, "UserProfilePreview");
  importDefault = tmp4ResultResult;
  const tmp6 = importDefault(set[10])({ user, displayProfile: tmp5, pendingThemeColors });
  obj1 = { userId: user.id, image: pendingAvatar };
  const pendingAvatarSrc = guildId(set[16]).getPendingAvatarSrc(obj1);
  const arr2 = importDefault(set[17])(tmp5, pendingLegacyUsernameDisabled);
  let str2 = globalThis;
  set = new Set(arr2.map((id) => id.id));
  const items1 = [...arr2, ...additionalBadges.filter((id) => !set.has(id.id))];
  const tmp23 = first(React.useState({ width: 0, height: 0 }), 2);
  first = tmp23[0];
  React = tmp23[1];
  const items2 = [tmp4ResultResult, first.width];
  callback = React.useCallback((nativeEvent) => {
    callback2({ width: Math.floor(nativeEvent.nativeEvent.layout.width), height: Math.floor(nativeEvent.nativeEvent.layout.height) });
  }, []);
  const memo = React.useMemo(() => {
    if (null != callback) {
      const layers = tmp.layers;
      ({ overflowTop, overflowBottom, overflowHorizontal } = callback(set[18])(tmp, first.width));
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
      const obj = { marginTop: null, marginBottom: null, marginHorizontal: null };
      obj[0] = num;
      const layers2 = tmp.layers;
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
      obj[1] = num2;
      obj[2] = overflowHorizontal;
      return obj;
    }
  }, items2);
  const obj2 = { theme, primaryColor, secondaryColor, children: null };
  const obj3 = { style: items3, pointerEvents: "none", accessibilityLabel, accessibilityRole: "image", accessible: true, children: null };
  items3 = [tmp8.profileContainer, memo, style];
  const obj4 = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, style: { flexShrink: 1 }, children: null };
  tmp27Result = null != tmp4ResultResult;
  if (tmp27Result) {
    const obj5 = { frame: null, filterLayer: null, profileThemeType: null, frameOrder: null, containerWidth: null, containerHeight: null };
    obj5[0] = tmp4ResultResult;
    obj5[1] = filterLayer;
    obj5[2] = constants.PREVIEW;
    tmp4Result = tmp4(tmp2[20]);
    obj5[3] = tmp(tmp2[21]).ProfileFrameLayerOrder.BACK;
    ({ width: obj13[4], height: obj13[5] } = first);
    tmp27Result = tmp27(tmp4Result, obj5);
  }
  const items4 = [tmp27Result, , ];
  const obj6 = { onLayout: callback, style: tmp8.profileContentContainer, children: null };
  const obj7 = { user, displayProfile: tmp5, bannerHeight: null, pendingBanner: null, pendingAvatarSrc: null, pendingAccentColor: null, pendingThemeColors: null, disableInteraction: true };
  const tmpResult2 = guildId(set[16]);
  obj7[2] = guildId(set[23]).PFX_MOBILE_ACTION_SHEET_BANNER_HEIGHT;
  obj7[3] = pendingBanner;
  obj7[4] = pendingAvatarSrc;
  let tmp35;
  if (null != pendingAccentColor) {
    tmp35 = pendingAccentColor;
  }
  obj7[5] = tmp35;
  let tmp36;
  if (null != pendingThemeColors) {
    tmp36 = pendingThemeColors;
  }
  obj7[6] = tmp36;
  const items5 = [closure_9(importDefault(set[22]), obj7), , ];
  const obj8 = { style: tmp8.profileInnerContent, children: null };
  const items6 = [closure_9(importDefault(set[24]), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration, backgroundColor: avatarBackground, disableStatus: true }), ];
  const obj9 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
  const items7 = [, , ];
  ({ profileContentWrapper: arr9[0], profileContent: arr9[1] } = tmp9);
  let tmp38 = !tmp27Result;
  const tmp4Result1 = importDefault(set[22]);
  if (!tmp27Result) {
    const obj10 = { paddingTop: null };
    obj10[0] = closure_7;
    tmp38 = obj10;
  }
  items7[2] = tmp38;
  obj9[3] = items7;
  if (tmp27Result) {
    const obj11 = { customStatusActivity: null, themeType: null, hasCustomProfileTheme: null, style: null, emojiOnlyStyle: null };
    obj11[0] = customStatusActivity;
    obj11[1] = constants.PREVIEW;
    obj11[2] = tmp7;
    ({ customStatusBubble: obj19[3], emojiOnlyCustomStatusBubble: obj19[4] } = tmp9);
    tmp27Result = tmp27(tmp4(tmp2[26]), obj11);
  }
  const items8 = [tmp27Result, , ];
  const obj12 = { user, themeType: constants.PREVIEW, displayName: null, pronouns: null, badges: null, badgeContainerBackground: null, showBadgeToastOnPress: false, pendingDisplayNameStyles: null, guildId: null };
  const tmp4Result2 = importDefault(set[25]);
  if (displayName == null) {
    displayName = pendingGlobalName;
  }
  obj12[2] = displayName;
  if (pendingPronouns == null) {
    let pronouns;
    if (tmp5 != null) {
      pronouns = tmp5.pronouns;
    }
    pendingPronouns = pronouns;
  }
  obj12[3] = pendingPronouns;
  obj12[4] = items1;
  obj12[5] = containerBackground;
  obj12[7] = pendingDisplayNameStyles;
  obj12[8] = guildId;
  items8[1] = closure_9(importDefault(set[27]), obj12);
  let tmp27Result1 = !compact;
  if (!compact) {
    const obj13 = { userId: null, displayProfile: null, themeType: null, style: null, bioLineClamp: 1 };
    obj13[0] = user.id;
    obj13[1] = tmp5;
    obj13[2] = tmp42.PREVIEW;
    const items9 = [tmp9.card, tmp8.aboutMeCard, ];
    const obj14 = { backgroundColor: null };
    obj14[0] = containerBackground;
    items9[2] = obj14;
    obj13[3] = items9;
    tmp27Result1 = tmp27(tmp4(tmp2[28]), obj13);
  }
  items8[2] = tmp27Result1;
  obj9[4] = items8;
  items6[1] = closure_10(tmp4Result2, obj9);
  obj8[1] = items6;
  items5[1] = closure_10(View, obj8);
  if (null == str) {
    items5[2] = tmp45;
    obj6[2] = items5;
    items4[1] = tmp29(tmp28, obj6);
    let tmp27Result2 = null != tmp4ResultResult;
    if (tmp27Result2) {
      const obj15 = { frame: null, filterLayer: null, profileThemeType: null, frameOrder: null, containerWidth: null, containerHeight: null };
      obj15[0] = tmp4ResultResult;
      obj15[1] = filterLayer;
      obj15[2] = tmp42.PREVIEW;
      obj15[3] = tmp(tmp2[21]).ProfileFrameLayerOrder.FRONT;
      ({ width: obj24[4], height: obj24[5] } = first);
      tmp27Result2 = tmp27(tmp4(tmp2[20]), obj15);
      const tmp4Result4 = tmp4(tmp2[20]);
    }
    items4[2] = tmp27Result2;
    obj4[3] = items4;
    obj3[5] = tmp29(tmp28, obj4);
    obj2[3] = tmp27(tmp28, obj3);
    return tmp27(tmp(tmp2[19]).ThemeContextProvider, obj2);
  } else {
    const obj16 = { skuId: null, style: null };
    obj16[0] = str.skuId;
    obj16[1] = tmp8.profileEffect;
    if (null != profileEffectRestartKey) {
      str = "-";
      str2 = "";
      skuId = "" + str.skuId + "-" + profileEffectRestartKey;
    } else {
      skuId = `-`.skuId;
    }
    tmp27(tmp4(tmp2[29]), obj16, skuId);
    const tmp4Result5 = tmp4(tmp2[29]);
  }
};