// discord_app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
import importAllResult from "n";
import get_ActivityIndicator from "useUserProfileColors";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import { PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID as closure_9 } from "GuildFeatures";
import jsxProd from "useHasNewAdContent";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let closure_12;
let closure_6;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ View: c4, ActivityIndicator: c5, StyleSheet: closure_6 } = get_ActivityIndicator);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = jsxProd);
let closure_13 = createCacheKey.createStyles((paddingTop, arg1, arg2, color) => {
  let obj = { container: null, containerFloatingWrap: null, containerFloatingGradient: null, containerFloating: null, buttons: null, buttonsFloating: null, loading: null };
  obj = {};
  const merged = Object.assign(closure_6.absoluteFillObject);
  obj.zIndex = 10;
  obj.paddingTop = paddingTop;
  obj[0] = obj;
  obj = {};
  const merged1 = Object.assign(closure_6.absoluteFillObject);
  obj.top = undefined;
  obj.alignItems = "center";
  obj[1] = obj;
  const obj1 = {};
  const merged2 = Object.assign(closure_6.absoluteFillObject);
  obj1.color = color;
  obj[2] = obj1;
  let obj4 = require(501) /* PlatformTypes */;
  const space = importDefault(712).space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
    let tmp9 = tmp7;
  } else {
    PX_24 = space.PX_4 + arg1;
    tmp9 = tmp7;
  }
  const obj2 = { marginBottom: PX_24, paddingVertical: tmp9(712).space.PX_8, paddingHorizontal: tmp9(712).space.PX_24, borderRadius: null, backgroundColor: null, flexDirection: "row", borderColor: null, borderWidth: 1 };
  isIOSResult = obj4.isIOS();
  const tmp4 = require;
  const result = require(1348) /* useIsMobileVisualRefreshExperimentEnabled */.isMobileVisualRefreshEnabled("YouBannerDecorations");
  const radii = tmp9(712).radii;
  let BACKGROUND_SURFACE_HIGH = arg2;
  obj2[3] = result ? radii.lg : radii.round;
  if (arg2 == null) {
    BACKGROUND_SURFACE_HIGH = tmp9(712).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj2[4] = BACKGROUND_SURFACE_HIGH;
  obj2[6] = arg4;
  const merged3 = Object.assign(tmp9(712).shadows.SHADOW_HIGH);
  obj[3] = obj2;
  const tmp4Result = require(1348) /* useIsMobileVisualRefreshExperimentEnabled */;
  obj[4] = { position: "absolute", flexDirection: "row", alignItems: "center", top: tmp9(712).space.PX_4, right: tmp9(712).space.PX_12, paddingTop };
  obj4 = { flexDirection: "row", alignItems: "center", gap: tmp9(712).space.PX_16 };
  obj[5] = obj4;
  obj[6] = { height: "100%", alignItems: "center", justifyContent: "center" };
  return obj;
});
const memoResult = importAllResult.memo((navigateToPremium) => {
  let containerBorderColor;
  let enabled;
  let gradientSecondaryBackground;
  let isLoading;
  let navigateToSettings;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let showReferralNotificationDot;
  let theme;
  ({ isLoading, navigateToSettings } = navigateToPremium);
  navigateToPremium = navigateToPremium.navigateToPremium;
  let num = navigateToPremium.paddingTop;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
  if (num === undefined) {
    num = 0;
  }
  let num2 = navigateToPremium.paddingBottom;
  if (num2 === undefined) {
    num2 = 0;
  }
  gradientSecondaryBackground = undefined;
  let containerBackground;
  let c4;
  let showBadge;
  let dismissBadge;
  let c7;
  let color;
  let obj = navigateToSettings(gradientSecondaryBackground[14]);
  let items = [c7];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp5 = navigateToPremium(gradientSecondaryBackground[15]);
  const tmp5Result = navigateToPremium(gradientSecondaryBackground[15])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[16])({ user: stateFromStores, displayProfile: navigateToPremium(gradientSecondaryBackground[15])(id) }));
  let tmpResult = tmp(tmp2[17]);
  const userProfileColors = tmpResult.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  tmpResult = tmp(tmp2[9]);
  if (tmpResult.isMobileVisualRefreshEnabled("YouBannerDecorations")) {
    if (tmpResult1.isThemeLight(theme)) {
      containerBackground = null;
      if (null != primaryColor) {
        containerBackground = null;
      }
    }
    let obj4 = containerBackground;
    const items1 = [gradientSecondaryBackground, containerBackground];
    const tmp16 = callback2(num, num2, containerBackground.useMemo(() => {
      let hexResult1 = null;
      if (null != containerBackground) {
        const obj = navigateToPremium(gradientSecondaryBackground[19]);
        const obj2 = navigateToPremium(gradientSecondaryBackground[19])(tmp);
        const hexResult = navigateToPremium(gradientSecondaryBackground[19])(tmp).hex("rgb");
        const obj3 = navigateToPremium(gradientSecondaryBackground[19])(tmp);
        hexResult1 = obj.mix(gradientSecondaryBackground, hexResult, navigateToPremium(gradientSecondaryBackground[19])(tmp).alpha(), "rgb").hex("rgb");
        const mixResult = obj.mix(gradientSecondaryBackground, hexResult, navigateToPremium(gradientSecondaryBackground[19])(tmp).alpha(), "rgb");
      }
      return hexResult1;
    }, items1), gradientSecondaryBackground, containerBorderColor);
    tmpResult1 = tmp(tmp2[18]);
    const hasPremiumSubscriptionToDisplay = tmp(tmp2[20]).useHasPremiumSubscriptionToDisplay();
    const tmpResult2 = tmp(tmp2[20]);
    let tmp18 = tmp(tmp2[10]).useUnseenOutboundPromotions().length > 0;
    const tmpResult3 = tmp(tmp2[10]);
    const tmp19 = closure_9;
    const tmpResult4 = tmp(tmp2[11]);
    const tmp20 = null != tmp(tmp2[11]).useTrialOffer(closure_9);
    let result = tmp(tmp2[12]).useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    let tmp22 = !result;
    if (!result) {
      tmp22 = tmp20;
    }
    if (!tmp18) {
      tmp18 = tmp22;
    }
    c4 = tmp18;
    const tmp23 = tmp4(tmp2[21])();
    showBadge = tmp23.showBadge;
    dismissBadge = tmp23.dismissBadge;
    const tmpResult5 = tmp(tmp2[12]);
    const isEligibleForQuests = tmp(tmp2[22]).getIsEligibleForQuests();
    const tmpResult6 = tmp(tmp2[22]);
    const mobileReferralSubscriberProfileEntrypointButtonConfig = tmp(tmp2[23]).useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
    ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
    const tmpResult7 = tmp(tmp2[23]);
    const tmp26 = null != tmp(tmp2[11]).useTrialOffer(tmp19);
    c7 = tmp26;
    const items2 = [tmp18, navigateToSettings, tmp26];
    const items3 = [navigateToPremium];
    const callback = obj4.useCallback(() => {
      let obj = navigateToSettings(gradientSecondaryBackground[24]);
      obj = { isBadged: c4 };
      const result = obj.trackYouTabSettingsIconPress(obj);
      navigateToSettings();
      let tmp5 = c7;
      if (c7) {
        let tmpResult = tmp(tmp2[12]);
        tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(tmp2[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      }
      if (tmp5) {
        tmpResult = tmp(tmp2[12]);
        const result1 = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
      }
    }, items2);
    const callback1 = obj4.useCallback(() => {
      const result = navigateToSettings(gradientSecondaryBackground[24]).trackYouTabNitroIconPress();
      navigateToPremium();
    }, items3);
    const items4 = [showBadge, dismissBadge];
    let tmp30 = null;
    if (isEligibleForQuests) {
      obj = { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
      let tmp4Result = tmp4(tmp2[27]);
      obj[0] = tmp(tmp2[28]).QuestsIcon;
      const intl = tmp(tmp2[29]).intl;
      obj[1] = intl.string(tmp(tmp2[29]).t.JALI2K);
      obj[2] = tmp29;
      obj[3] = showBadge;
      tmp30 = callback(tmp4Result, obj, "quests");
    }
    const items5 = [tmp30, , , ];
    obj = { shopButtonRef: null, navigateToShop: null };
    obj[0] = shopButtonRef;
    obj[1] = navigateToShop;
    items5[1] = callback(tmp4(tmp2[30]), obj, "shop");
    if (hasPremiumSubscriptionToDisplay) {
      let tmp33Result = null;
      if (enabled) {
        const obj1 = { onPress: null, showReferralNotificationDot: null };
        obj1[0] = callback1;
        obj1[1] = showReferralNotificationDot;
        tmp33Result = tmp33(tmp4(tmp2[31]), obj1, "nitro-subscriber");
      }
    } else {
      let obj2 = { IconComponent: null, accessibilityLabel: null, label: null, onPress: null, showNitroSlant: true };
      tmp4Result = tmp4(tmp2[27]);
      obj2[0] = tmp(tmp2[32]).NitroWheelIcon;
      const intl2 = tmp(tmp2[29]).intl;
      obj2[1] = intl2.string(tmp(tmp2[29]).t.Ipxkog);
      const intl3 = tmp(tmp2[29]).intl;
      obj2[2] = intl3.string(tmp(tmp2[29]).t.Ipxkog);
      obj2[3] = callback1;
      tmp33Result = tmp33(tmp4Result, obj2, "nitro");
    }
    items5[2] = tmp33Result;
    let obj3 = { ref: null, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
    obj3[0] = settingsButtonRef;
    const tmpResult8 = tmp(tmp2[11]);
    obj3[1] = tmp(tmp2[33]).SettingsIcon;
    const intl4 = tmp(tmp2[29]).intl;
    obj3[2] = intl4.string(tmp(tmp2[29]).t["3D5yo/"]);
    obj3[3] = callback;
    obj3[4] = tmp18;
    items5[3] = callback(tmp4(tmp2[27]), obj3, "settings");
    const found = items5.filter((arg0) => null != arg0);
    if (isLoading) {
      obj4 = { style: null, children: null };
      obj4[0] = tmp16.loading;
      let str6 = "large";
      if (tmpResult9.isYouNavFloating()) {
        str6 = "small";
      }
      const obj5 = { size: null };
      obj5[0] = str6;
      obj4[1] = tmp33(showBadge, obj5);
      isLoading = tmp33(c4, obj4);
      const tmp41 = c4;
      const tmp42 = showBadge;
      tmpResult9 = tmp(tmp2[34]);
    }
    const items6 = [isLoading, ];
    const tmp40 = closure_11;
    const tmp4Result1 = tmp4(tmp2[27]);
    const obj6 = { children: null };
    const obj7 = { style: null, pointerEvents: "box-none", children: null };
    obj7[0] = tmp(tmp2[34]).isYouNavFloating() ? tmp16.buttonsFloating : tmp16.buttons;
    obj7[2] = found;
    items6[1] = callback(c4, obj7);
    obj6[0] = items6;
    let tmp39Result = tmp39(tmp40, obj6);
    color = tmp16.containerFloatingGradient.color;
    const items7 = [color];
    const memo = obj4.useMemo(() => {
      const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
      const obj2 = navigateToPremium(gradientSecondaryBackground[19])(color);
      const items = [navigateToPremium(gradientSecondaryBackground[19])(color).alpha(0).hex(), ];
      const alphaResult = navigateToPremium(gradientSecondaryBackground[19])(color).alpha(0);
      const obj4 = navigateToPremium(gradientSecondaryBackground[19])(color);
      items[1] = navigateToPremium(gradientSecondaryBackground[19])(color).alpha(1).hex();
      obj[2] = items;
      return obj;
    }, items7);
    const tmpResult10 = tmp(tmp2[34]);
    const obj8 = { style: null, pointerEvents: "box-none", children: null };
    if (tmpResult11.isYouNavFloating()) {
      obj8[0] = tmp16.containerFloatingWrap;
      const obj9 = { style: null };
      obj9[0] = tmp16.containerFloatingGradient;
      const merged = Object.assign(memo);
      obj9.pointerEvents = "none";
      const items8 = [tmp33(tmp4(tmp2[35]), obj9), ];
      const obj10 = { style: null, children: null };
      obj10[0] = tmp16.containerFloating;
      obj10[1] = tmp39Result;
      items8[1] = tmp33(tmp43, obj10);
      obj8[2] = items8;
      tmp39Result = tmp39(tmp43, obj8);
      const tmp4Result2 = tmp4(tmp2[35]);
    } else {
      obj8[0] = tmp16.container;
      const items9 = [navigateToPremium.backButton, tmp39Result];
      obj8[2] = items9;
      tmp39Result = tmp39(tmp43, obj8);
    }
    return tmp39Result;
  }
  containerBackground = userProfileColors.containerBackground;
});
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export const useHasSettingsBadge = function useHasSettingsBadge() {
  let tmp = require(12518) /* useEligibleActiveOutboundPromotions */.useUnseenOutboundPromotions().length > 0;
  const obj = require(12518) /* useEligibleActiveOutboundPromotions */;
  const obj2 = require(6247) /* hasUserTrialOfferExpired */;
  const tmp2 = null != require(6247) /* hasUserTrialOfferExpired */.useTrialOffer(closure_9);
  const result = require(4009) /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(require(1358) /* DismissibleContent */.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
};