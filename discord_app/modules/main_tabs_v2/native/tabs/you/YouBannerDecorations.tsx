// === Module 16625: useHasSettingsBadge ===

// Module 16625 (useHasSettingsBadge)
import ThemesDefault from "Themes" /* 709 */;
import PlatformTypes from "PlatformTypes" /* 1235 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4298 */;
import hasUserTrialOfferExpired from "hasUserTrialOfferExpired" /* 7204 */;
import useEligibleActiveOutboundPromotions from "useEligibleActiveOutboundPromotions" /* 13362 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "mergeGuildAvatar" /* 1921 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import { PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID as closure_9 } from "GuildFeatures" /* 1923 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let c3 = importAllResult;
({ View: c4, ActivityIndicator: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles((arg0, arg1, color) => {
  let obj = { containerFloatingWrap: null, containerFloatingGradient: null, containerFloating: null, buttonsFloating: null, loading: null };
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj.top = undefined;
  obj.alignItems = "center";
  obj[0] = obj;
  obj = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj.color = color;
  obj[1] = obj;
  const obj4 = PlatformTypes;
  const space = ThemesDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
    let tmp7 = tmp5;
  } else {
    PX_24 = space.PX_4 + arg0;
    tmp7 = tmp5;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  obj1 = { marginBottom: PX_24, paddingVertical: tmp7(709).space.PX_8, paddingHorizontal: tmp7(709).space.PX_24, borderRadius: tmp7(709).radii.lg, backgroundColor: null, flexDirection: "row", borderColor: null, borderWidth: 1 };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp7(709).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj1[4] = BACKGROUND_SURFACE_HIGH;
  obj1[6] = arg3;
  const merged2 = Object.assign(tmp7(709).shadows.SHADOW_HIGH);
  obj[2] = obj1;
  isIOSResult = PlatformTypes.isIOS();
  obj[3] = { flexDirection: "row", alignItems: "center", gap: tmp7(709).space.PX_16 };
  obj[4] = { height: "100%", alignItems: "center", justifyContent: "center" };
  return obj;
});
const memoResult = importAllResult.memo((navigateToPremium) => {
  ({ isLoading, navigateToSettings } = navigateToPremium);
  navigateToPremium = navigateToPremium.navigateToPremium;
  let num = navigateToPremium.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
  if (num === undefined) {
    num = 0;
  }
  gradientSecondaryBackground = undefined;
  let containerBackground;
  closure_4 = undefined;
  let showBadge;
  let dismissBadge;
  closure_7 = undefined;
  let color;
  let obj = navigateToSettings(gradientSecondaryBackground[13]);
  let items = [closure_7];
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
  const tmp11 = callback2(num, containerBackground.useMemo(() => {
    let hexResult1 = null;
    if (null != containerBackground) {
      const obj = navigateToPremium(gradientSecondaryBackground[18]);
      const obj2 = navigateToPremium(gradientSecondaryBackground[18])(tmp);
      const hexResult = navigateToPremium(gradientSecondaryBackground[18])(tmp).hex("rgb");
      const obj3 = navigateToPremium(gradientSecondaryBackground[18])(tmp);
      hexResult1 = obj.mix(gradientSecondaryBackground, hexResult, navigateToPremium(gradientSecondaryBackground[18])(tmp).alpha(), "rgb").hex("rgb");
      const mixResult = obj.mix(gradientSecondaryBackground, hexResult, navigateToPremium(gradientSecondaryBackground[18])(tmp).alpha(), "rgb");
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
  closure_4 = tmp13;
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
  closure_7 = tmp21;
  const items2 = [tmp13, navigateToSettings, tmp21];
  const items3 = [navigateToPremium];
  const callback = obj3.useCallback(() => {
    let obj = navigateToSettings(gradientSecondaryBackground[23]);
    obj = { isBadged: closure_4 };
    const result = obj.trackYouTabSettingsIconPress(obj);
    navigateToSettings();
    let tmp5 = closure_7;
    if (closure_7) {
      let tmpResult = tmp(tmp2[11]);
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[12]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
    if (tmp5) {
      tmpResult = tmp(tmp2[11]);
      const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[12]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    }
  }, items2);
  const callback1 = obj3.useCallback(() => {
    const result = navigateToSettings(gradientSecondaryBackground[23]).trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const items4 = [showBadge, dismissBadge];
  let tmp25 = null;
  if (isEligibleForQuests) {
    obj = { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
    let tmp4Result = tmp4(tmp2[26]);
    obj[0] = tmp(tmp2[27]).QuestsIcon;
    const intl = tmp(tmp2[28]).intl;
    obj[1] = intl.string(tmp(tmp2[28]).t.JALI2K);
    obj[2] = tmp24;
    obj[3] = showBadge;
    tmp25 = callback(tmp4Result, obj, "quests");
  }
  const items5 = [tmp25, callback(navigateToPremium(gradientSecondaryBackground[29]), { shopButtonRef, navigateToShop }, "shop"), , ];
  if (hasPremiumSubscriptionToDisplay) {
    let tmp28Result = null;
    if (enabled) {
      obj = { onPress: null, showReferralNotificationDot: null };
      obj[0] = callback1;
      obj[1] = showReferralNotificationDot;
      tmp28Result = tmp28(tmp4(tmp2[30]), obj, "nitro-subscriber");
    }
  } else {
    obj1 = { IconComponent: null, accessibilityLabel: null, label: null, onPress: null };
    tmp4Result = tmp4(tmp2[26]);
    obj1[0] = tmp(tmp2[31]).NitroWheelIcon;
    const intl2 = tmp(tmp2[28]).intl;
    obj1[1] = intl2.string(tmp(tmp2[28]).t.Ipxkog);
    const intl3 = tmp(tmp2[28]).intl;
    obj1[2] = intl3.string(tmp(tmp2[28]).t.Ipxkog);
    obj1[3] = callback1;
    tmp28Result = tmp28(tmp4Result, obj1, "nitro");
  }
  items5[2] = tmp28Result;
  let obj2 = { ref: settingsButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const tmpResult7 = navigateToSettings(gradientSecondaryBackground[10]);
  obj2[1] = navigateToSettings(gradientSecondaryBackground[32]).SettingsIcon;
  const intl4 = tmp(tmp2[28]).intl;
  obj2[2] = intl4.string(navigateToSettings(gradientSecondaryBackground[28]).t["3D5yo/"]);
  obj2[3] = callback;
  obj2[4] = tmp13;
  items5[3] = callback(navigateToPremium(gradientSecondaryBackground[26]), obj2, "settings");
  const found = items5.filter((arg0) => null != arg0);
  if (isLoading) {
    obj3 = { style: null, children: null };
    obj3[0] = tmp11.loading;
    obj3[1] = tmp28(showBadge, { size: "small" });
    isLoading = tmp28(closure_4, obj3);
  }
  let obj4 = { children: null };
  const items6 = [isLoading, callback(closure_4, { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found })];
  obj4[0] = items6;
  color = tmp11.containerFloatingGradient.color;
  const items7 = [color];
  const obj5 = { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found };
  const tmp35 = closure_11;
  const tmp4Result1 = navigateToPremium(gradientSecondaryBackground[26]);
  const obj6 = { style: tmp11.containerFloatingWrap, pointerEvents: "box-none", children: null };
  const memo = obj3.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = navigateToPremium(gradientSecondaryBackground[18])(color);
    const items = [navigateToPremium(gradientSecondaryBackground[18])(color).alpha(0).hex(), ];
    const alphaResult = navigateToPremium(gradientSecondaryBackground[18])(color).alpha(0);
    const obj4 = navigateToPremium(gradientSecondaryBackground[18])(color);
    items[1] = navigateToPremium(gradientSecondaryBackground[18])(color).alpha(1).hex();
    obj[2] = items;
    return obj;
  }, items7);
  const obj7 = { style: tmp11.containerFloatingGradient };
  const tmp34Result = closure_12(closure_11, obj4);
  const merged = Object.assign(memo);
  obj7.pointerEvents = "none";
  const items8 = [callback(navigateToPremium(gradientSecondaryBackground[33]), obj7), callback(closure_4, { style: tmp11.containerFloating, children: tmp34Result })];
  obj6[2] = items8;
  return closure_12(closure_4, obj6);
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export const useHasSettingsBadge = function useHasSettingsBadge() {
  let tmp = useEligibleActiveOutboundPromotions.useUnseenOutboundPromotions().length > 0;
  const obj = useEligibleActiveOutboundPromotions;
  const obj2 = hasUserTrialOfferExpired;
  const tmp2 = null != hasUserTrialOfferExpired.useTrialOffer(closure_9);
  const result = UNSAFE_isDismissibleContentDismissed.useIsDismissibleContentDismissed_UNSAFE(DismissibleContent.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
};