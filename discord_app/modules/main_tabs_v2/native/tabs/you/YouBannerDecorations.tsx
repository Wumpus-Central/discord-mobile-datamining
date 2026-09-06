// === Module 16790: YouBannerDecorations ===

// Module 16790 (YouBannerDecorations)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1116 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import QuestTypes from "QuestTypes" /* 5447 */;
import useTrialOffer from "useTrialOffer" /* 7449 */;
import QuestUtils from "QuestUtils" /* 11767 */;
import PromotionsHooks from "PromotionsHooks" /* 13468 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16793 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let closure_9 = fn(1373).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  let obj = { containerFloatingWrap: null, containerFloatingGradient: null, containerFloating: null, buttonsFloating: null, loading: null };
  obj = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj.top = undefined;
  obj.alignItems = "center";
  obj.containerFloatingWrap = obj;
  obj = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj.color = color;
  obj.containerFloatingGradient = obj;
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
    let tmp7 = tmp5;
  } else {
    PX_24 = space.PX_4 + arg0;
    tmp7 = tmp5;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  const obj1 = { marginBottom: PX_24, paddingVertical: tmp7(576).space.PX_8, paddingHorizontal: tmp7(576).space.PX_24, borderRadius: tmp7(576).radii.lg, backgroundColor: null, flexDirection: "row", borderColor: null, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp7(576).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj1.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj1.borderColor = borderColor;
  const merged2 = Object.assign(tmp7(576).shadows.SHADOW_HIGH);
  obj.containerFloating = obj1;
  isIOSResult = utils_PlatformUtils.isIOS();
  obj.buttonsFloating = { flexDirection: "row", alignItems: "center", gap: tmp7(576).space.PX_16 };
  obj.loading = { height: "100%", alignItems: "center", justifyContent: "center" };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default noop.memo((navigateToPremium) => {
  ({ isLoading, navigateToSettings } = navigateToPremium);
  navigateToPremium = navigateToPremium.navigateToPremium;
  let num = navigateToPremium.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
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
  let obj = navigateToSettings(gradientSecondaryBackground[13]);
  let items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp5 = navigateToPremium(gradientSecondaryBackground[14]);
  const tmp5Result = navigateToPremium(gradientSecondaryBackground[14])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[15])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[14])(id) }));
  let tmpResult = tmp(tmp2[16]);
  const userProfileColors = tmpResult.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  tmpResult = tmp(tmp2[17]);
  if (!tmpResult.isThemeLight(theme)) {
    containerBackground = userProfileColors.containerBackground;
  } else {
    containerBackground = null;
    if (null != primaryColor) {
      containerBackground = null;
    }
  }
  let obj3 = containerBackground;
  const items1 = [gradientSecondaryBackground, containerBackground];
  const tmp11 = closure_13(num, containerBackground.useMemo(() => {
    let hexResult1 = null;
    if (null != containerBackground) {
      const obj = _modDef672;
      const obj2 = _modDef672(tmp);
      const hexResult = _modDef672(tmp).hex("rgb");
      const obj3 = _modDef672(tmp);
      hexResult1 = obj.mix(gradientSecondaryBackground, hexResult, _modDef672(tmp).alpha(), "rgb").hex("rgb");
      const mixResult = obj.mix(gradientSecondaryBackground, hexResult, _modDef672(tmp).alpha(), "rgb");
    }
    return hexResult1;
  }, items1), gradientSecondaryBackground, containerBorderColor);
  const tmp8 = navigateToPremium(gradientSecondaryBackground[15])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[14])(id) });
  const hasPremiumSubscriptionToDisplay = navigateToSettings(gradientSecondaryBackground[19]).useHasPremiumSubscriptionToDisplay();
  const tmpResult1 = navigateToSettings(gradientSecondaryBackground[19]);
  let tmp13 = navigateToSettings(gradientSecondaryBackground[9]).useUnseenOutboundPromotions().length > 0;
  const tmpResult2 = navigateToSettings(gradientSecondaryBackground[9]);
  const tmp14 = closure_9;
  const tmpResult3 = navigateToSettings(gradientSecondaryBackground[10]);
  const tmp15 = null != navigateToSettings(gradientSecondaryBackground[10]).useTrialOffer(closure_9);
  let result = navigateToSettings(gradientSecondaryBackground[11]).useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[12]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp17 = !result;
  if (!result) {
    tmp17 = tmp15;
  }
  if (!tmp13) {
    tmp13 = tmp17;
  }
  isBadged = tmp13;
  const tmp18 = navigateToPremium(gradientSecondaryBackground[20])();
  showBadge = tmp18.showBadge;
  dismissBadge = tmp18.dismissBadge;
  const tmpResult4 = navigateToSettings(gradientSecondaryBackground[11]);
  const isEligibleForQuests = navigateToSettings(gradientSecondaryBackground[21]).getIsEligibleForQuests();
  const tmpResult5 = navigateToSettings(gradientSecondaryBackground[21]);
  const mobileReferralSubscriberProfileEntrypointButtonConfig = navigateToSettings(gradientSecondaryBackground[22]).useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
  ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
  const tmpResult6 = navigateToSettings(gradientSecondaryBackground[22]);
  const tmp21 = null != navigateToSettings(gradientSecondaryBackground[10]).useTrialOffer(tmp14);
  currentUser = tmp21;
  const items2 = [tmp13, navigateToSettings, tmp21];
  const items3 = [navigateToPremium];
  const callback = obj3.useCallback(() => {
    const obj = { isBadged };
    const result = obj.trackYouTabSettingsIconPress(obj);
    navigateToSettings();
    let tmp5 = closure_7;
    if (closure_7) {
      let tmpResult = tmp(4380);
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1943).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
    if (tmp5) {
      tmpResult = tmp(4380);
      const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(1943).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
  }, items2);
  const callback1 = obj3.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const items4 = [showBadge, dismissBadge];
  let tmp25 = null;
  if (isEligibleForQuests) {
    obj = { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
    let tmp4Result = tmp4(tmp2[26]);
    obj.IconComponent = tmp(tmp2[27]).QuestsIcon;
    const intl = tmp(tmp2[28]).intl;
    obj.accessibilityLabel = intl.string(tmp(tmp2[28]).t.JALI2K);
    obj.onPress = tmp24;
    obj.showRedDot = showBadge;
    tmp25 = closure_10(tmp4Result, obj, "quests");
  }
  const items5 = [tmp25, closure_10(navigateToPremium(gradientSecondaryBackground[29]), { shopButtonRef, navigateToShop }, "shop"), , ];
  if (hasPremiumSubscriptionToDisplay) {
    let tmp28Result = null;
    if (enabled) {
      obj = { onPress: callback1, showReferralNotificationDot };
      tmp28Result = tmp28(tmp4(tmp2[30]), obj, "nitro-subscriber");
    }
  } else {
    const obj1 = { IconComponent: null, accessibilityLabel: null, label: null, onPress: null };
    tmp4Result = tmp4(tmp2[26]);
    obj1.IconComponent = tmp(tmp2[31]).NitroWheelIcon;
    const intl2 = tmp(tmp2[28]).intl;
    obj1.accessibilityLabel = intl2.string(tmp(tmp2[28]).t.Ipxkog);
    const intl3 = tmp(tmp2[28]).intl;
    obj1.label = intl3.string(tmp(tmp2[28]).t.Ipxkog);
    obj1.onPress = callback1;
    tmp28Result = tmp28(tmp4Result, obj1, "nitro");
  }
  items5[2] = tmp28Result;
  let obj2 = { ref: settingsButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const tmpResult7 = navigateToSettings(gradientSecondaryBackground[10]);
  obj2.IconComponent = navigateToSettings(gradientSecondaryBackground[32]).SettingsIcon;
  const intl4 = tmp(tmp2[28]).intl;
  obj2.accessibilityLabel = intl4.string(navigateToSettings(gradientSecondaryBackground[28]).t["3D5yo/"]);
  obj2.onPress = callback;
  obj2.showRedDot = tmp13;
  items5[3] = closure_10(navigateToPremium(gradientSecondaryBackground[26]), obj2, "settings");
  const found = items5.filter((item) => null != item);
  if (isLoading) {
    obj3 = { style: tmp11.loading, children: tmp28(showBadge, { size: "small" }) };
    isLoading = tmp28(isBadged, obj3);
  }
  let obj4 = { children: null };
  const items6 = [isLoading, closure_10(isBadged, { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found })];
  obj4.children = items6;
  color = tmp11.containerFloatingGradient.color;
  const items7 = [color];
  const obj5 = { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found };
  const tmp4Result1 = navigateToPremium(gradientSecondaryBackground[26]);
  const obj6 = { style: tmp11.containerFloatingWrap, pointerEvents: "box-none", children: null };
  const memo = obj3.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef672(color);
    const items = [_modDef672(color).alpha(0).hex(), ];
    const alphaResult = _modDef672(color).alpha(0);
    const obj4 = _modDef672(color);
    items[1] = _modDef672(color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items7);
  const obj7 = { style: tmp11.containerFloatingGradient };
  const tmp34Result = closure_12(closure_11, obj4);
  const merged = Object.assign(memo);
  obj7.pointerEvents = "none";
  const items8 = [closure_10(navigateToPremium(gradientSecondaryBackground[33]), obj7), closure_10(isBadged, { style: tmp11.containerFloating, children: tmp34Result })];
  obj6.children = items8;
  return closure_12(isBadged, obj6);
});
export const useHasSettingsBadge = function useHasSettingsBadge() {
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
};