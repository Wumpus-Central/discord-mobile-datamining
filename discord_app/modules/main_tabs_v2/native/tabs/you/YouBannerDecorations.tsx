// === Module 16955: YouBannerDecorations ===

// Module 16955 (YouBannerDecorations)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4698 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import useTrialOffer from "useTrialOffer" /* 6958 */;
import QuestUtils from "QuestUtils" /* 10908 */;
import PromotionsHooks from "PromotionsHooks" /* 13362 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16957 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const useIntlLoaderStore = fn(2117).useIntlLoaderStore;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
let closure_9 = fn(1379).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let closure_12 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  const obj = { containerFloatingWrap: null, containerFloatingGradient: null, containerFloating: null, containerFloatingContent: null, endcap: null, buttonsFloating: null };
  const obj2 = {};
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj2.top = undefined;
  obj2.alignItems = "center";
  obj2.paddingHorizontal = nativeDefault.space.PX_16;
  obj.containerFloatingWrap = obj2;
  const obj3 = {};
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  obj3.color = color;
  obj.containerFloatingGradient = obj3;
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + arg0;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  const obj5 = { marginBottom: PX_24, maxWidth: "100%", paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.lg, backgroundColor: null, flexDirection: "row", borderColor: null, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  obj5.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj5.borderColor = borderColor;
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.containerFloating = obj5;
  obj.containerFloatingContent = { maxWidth: "100%", flexDirection: "row" };
  isIOSResult = utils_PlatformUtils.isIOS();
  obj.endcap = { width: nativeDefault.space.PX_16, flexShrink: 1 };
  const obj6 = { width: nativeDefault.space.PX_16, flexShrink: 1 };
  obj.buttonsFloating = { flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
  return obj;
});
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
  const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
}) : (() => {
  let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
  const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
});
let closure_13 = tmp4;
function getFloatingNavBottomMargin(bottom) {
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + bottom;
  }
  return PX_24;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default noop.memo((navigateToSettings) => {
  navigateToSettings = navigateToSettings.navigateToSettings;
  const navigateToPremium = navigateToSettings.navigateToPremium;
  let num = navigateToSettings.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToSettings);
  if (num === undefined) {
    num = 0;
  }
  gradientSecondaryBackground = undefined;
  let containerBackground;
  let isBadged;
  let showBadge;
  let dismissBadge;
  let currentUser;
  let color;
  const tmp = dismissBadge((isLoading) => {
    let currentLocale;
    if (!isLoading.isLoading) {
      currentLocale = navigateToSettings(gradientSecondaryBackground[15]).intl.currentLocale;
    }
    return currentLocale;
  });
  let items = [currentUser];
  const stateFromStores = navigateToSettings(gradientSecondaryBackground[16]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  let obj = navigateToSettings(gradientSecondaryBackground[16]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6 = navigateToPremium(gradientSecondaryBackground[17]);
  const tmp6Result = navigateToPremium(gradientSecondaryBackground[17])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[18])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[17])(id) }));
  const tmp9 = navigateToPremium(gradientSecondaryBackground[18])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[17])(id) });
  const userProfileColors = navigateToSettings(gradientSecondaryBackground[19]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const tmp2Result = navigateToSettings(gradientSecondaryBackground[19]);
  if (!tmp2Result6.isThemeLight(theme)) {
    containerBackground = userProfileColors.containerBackground;
  } else {
    containerBackground = null;
    if (null != primaryColor) {
      containerBackground = null;
    }
  }
  const items1 = [gradientSecondaryBackground, containerBackground];
  const tmp12 = closure_12(num, containerBackground.useMemo(() => {
    let hexResult1 = null;
    if (null != containerBackground) {
      const obj = _modDef683;
      const obj2 = _modDef683(containerBackground);
      const hexResult = _modDef683(containerBackground).hex("rgb");
      const obj3 = _modDef683(containerBackground);
      hexResult1 = obj.mix(gradientSecondaryBackground, hexResult, _modDef683(containerBackground).alpha(), "rgb").hex("rgb");
      const mixResult = obj.mix(gradientSecondaryBackground, hexResult, _modDef683(containerBackground).alpha(), "rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  let obj4 = containerBackground;
  tmp2Result6 = navigateToSettings(gradientSecondaryBackground[20]);
  const hasPremiumSubscriptionToDisplay = navigateToSettings(gradientSecondaryBackground[22]).useHasPremiumSubscriptionToDisplay();
  const tmp14 = closure_13();
  isBadged = tmp14;
  const tmp15 = navigateToPremium(gradientSecondaryBackground[23])();
  showBadge = tmp15.showBadge;
  dismissBadge = tmp15.dismissBadge;
  const tmp2Result7 = navigateToSettings(gradientSecondaryBackground[22]);
  const isEligibleForQuests = navigateToSettings(gradientSecondaryBackground[24]).getIsEligibleForQuests();
  const tmp2Result8 = navigateToSettings(gradientSecondaryBackground[24]);
  const hasConjureGuild = navigateToSettings(gradientSecondaryBackground[25]).useHasConjureGuild("YouBannerDecorations");
  const tmp2Result9 = navigateToSettings(gradientSecondaryBackground[25]);
  const tmp18 = null != navigateToSettings(gradientSecondaryBackground[12]).useTrialOffer(closure_9);
  currentUser = tmp18;
  const items2 = [tmp14, navigateToSettings, tmp18];
  const items3 = [navigateToPremium];
  const callback = containerBackground.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabSettingsIconPress({ isBadged });
    navigateToSettings();
    let tmp5 = closure_7;
    if (closure_7) {
      tmp5 = !DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    if (tmp5) {
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      const tmpResult2 = DismissibleContentUnsafeUtils;
    }
    const obj2 = { isBadged };
  }, items2);
  const items4 = [showBadge, dismissBadge];
  const callback1 = containerBackground.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const callback2 = containerBackground.useCallback(() => {
    if (showBadge) {
      dismissBadge(ContentDismissActionType.TAKE_ACTION);
    }
    const obj = QuestUtils;
    obj.openQuestHome({ fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER });
    const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
  }, items4);
  let tmp23 = null;
  if (hasConjureGuild) {
    let obj2 = { IconComponent: tmp2(tmp3[33]).MagicWandIcon, accessibilityLabel: null, onPress: null };
    const intl = tmp2(tmp3[15]).intl;
    obj2.accessibilityLabel = intl.string(tmp5(tmp3[34]).bHcJoe);
    obj2.onPress = tmp22;
    tmp23 = closure_10(tmp5(tmp3[32]), obj2, "conjure");
    const tmp5Result = tmp5(tmp3[32]);
  }
  const items5 = [tmp23, , , , ];
  let tmp26 = null;
  if (isEligibleForQuests) {
    let obj3 = { IconComponent: tmp2(tmp3[35]).QuestsIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
    const intl2 = tmp2(tmp3[15]).intl;
    obj3.accessibilityLabel = intl2.string(tmp2(tmp3[15]).t.JALI2K);
    obj3.onPress = callback2;
    obj3.showRedDot = showBadge;
    tmp26 = closure_10(tmp5(tmp3[32]), obj3, "quests");
    const tmp5Result5 = tmp5(tmp3[32]);
  }
  items5[1] = tmp26;
  items5[2] = closure_10(navigateToPremium(gradientSecondaryBackground[36]), { shopButtonRef, navigateToShop }, "shop");
  let tmp29Result = null;
  if (!hasPremiumSubscriptionToDisplay) {
    const obj5 = { IconComponent: tmp2(tmp3[37]).NitroWheelIcon, accessibilityLabel: null, label: null, onPress: null };
    const intl3 = tmp2(tmp3[15]).intl;
    obj5.accessibilityLabel = intl3.string(tmp2(tmp3[15]).t.Ipxkog);
    const intl4 = tmp2(tmp3[15]).intl;
    obj5.label = intl4.string(tmp2(tmp3[15]).t.Ipxkog);
    obj5.onPress = callback1;
    tmp29Result = closure_10(tmp5(tmp3[32]), obj5, "nitro");
    const tmp5Result6 = tmp5(tmp3[32]);
  }
  items5[3] = tmp29Result;
  const obj6 = { ref: settingsButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const tmp2Result10 = navigateToSettings(gradientSecondaryBackground[12]);
  obj6.IconComponent = navigateToSettings(gradientSecondaryBackground[38]).SettingsIcon;
  const intl5 = tmp2(tmp3[15]).intl;
  obj6.accessibilityLabel = intl5.string(navigateToSettings(gradientSecondaryBackground[15]).t["3D5yo/"]);
  obj6.onPress = callback;
  obj6.showRedDot = tmp14;
  items5[4] = closure_10(navigateToPremium(gradientSecondaryBackground[32]), obj6, "settings");
  const obj7 = { style: tmp12.buttonsFloating, pointerEvents: "box-none", children: null };
  const found = items5.filter((item) => null != item);
  obj7.children = closure_10(navigateToSettings(gradientSecondaryBackground[39]).YouScreenNavIconMeasurer, { children: found }, tmp);
  color = tmp12.containerFloatingGradient.color;
  const items6 = [color];
  const tmp5Result7 = navigateToPremium(gradientSecondaryBackground[32]);
  const obj8 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: null };
  const memo = obj4.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef683(color);
    const items = [_modDef683(color).alpha(0).hex(), ];
    const alphaResult = _modDef683(color).alpha(0);
    const obj4 = _modDef683(color);
    items[1] = _modDef683(color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items6);
  const obj9 = { style: tmp12.containerFloatingGradient };
  const tmp29Result2 = closure_10(isBadged, obj7);
  const merged = Object.assign(memo);
  obj9.pointerEvents = "none";
  const items7 = [closure_10(navigateToPremium(gradientSecondaryBackground[40]), obj9), ];
  const obj10 = { style: tmp12.containerFloating, children: null };
  const items8 = [closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" }), closure_10(isBadged, { style: tmp12.containerFloatingContent, children: tmp29Result2 }), closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" })];
  obj10.children = items8;
  items7[1] = closure_11(isBadged, obj10);
  obj8.children = items7;
  return closure_11(isBadged, obj8);
});
export { getFloatingNavBottomMargin };
export const useHasSettingsBadge = tmp4;