// discord_app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
import importAllResult from "n";
import get_ActivityIndicator from "useUserProfileColors";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ContentDismissActionType } from "ContentDismissActionType";
import { PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID as closure_9 } from "GuildFeatures";
import jsxProd from "useHasNewAdContent";
import createCacheKey from "createCacheKey";
import { DismissibleContent } from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { PlatformTypes } from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import { useEligibleActiveOutboundPromotions } from "../../../../premium/promotions/PromotionsHooks.tsx";
import { hasUserTrialOfferExpired } from "../../../../premium/useTrialOffer.tsx";

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
  const obj4 = PlatformTypes /* PlatformTypes */;
  const tmp3 = require;
  const space = Themes.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
    let tmp8 = tmp6;
  } else {
    PX_24 = space.PX_4 + arg0;
    tmp8 = tmp6;
  }
  const obj1 = { marginBottom: PX_24, paddingVertical: tmp8(712).space.PX_8, paddingHorizontal: tmp8(712).space.PX_24, borderRadius: null, backgroundColor: null, flexDirection: "row", borderColor: null, borderWidth: 1 };
  isIOSResult = PlatformTypes /* PlatformTypes */.isIOS();
  const result = tmp3(1348).isMobileVisualRefreshEnabled("YouBannerDecorations");
  const radii = tmp8(712).radii;
  let BACKGROUND_SURFACE_HIGH = arg1;
  obj1[3] = result ? radii.lg : radii.round;
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp8(712).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj1[4] = BACKGROUND_SURFACE_HIGH;
  obj1[6] = arg3;
  const merged2 = Object.assign(tmp8(712).shadows.SHADOW_HIGH);
  obj[2] = obj1;
  const tmp3Result = tmp3(1348);
  obj[3] = { flexDirection: "row", alignItems: "center", gap: tmp8(712).space.PX_16 };
  obj[4] = { height: "100%", alignItems: "center", justifyContent: "center" };
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
  let num = navigateToPremium.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToPremium);
  if (num === undefined) {
    num = 0;
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
    const tmp15 = callback2(num, containerBackground.useMemo(() => {
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
    let tmp17 = tmp(tmp2[10]).useUnseenOutboundPromotions().length > 0;
    const tmpResult3 = tmp(tmp2[10]);
    const tmp18 = closure_9;
    const tmpResult4 = tmp(tmp2[11]);
    const tmp19 = null != tmp(tmp2[11]).useTrialOffer(closure_9);
    let result = tmp(tmp2[12]).useIsDismissibleContentDismissed_UNSAFE(tmp(tmp2[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
    let tmp21 = !result;
    if (!result) {
      tmp21 = tmp19;
    }
    if (!tmp17) {
      tmp17 = tmp21;
    }
    c4 = tmp17;
    const tmp22 = tmp4(tmp2[21])();
    showBadge = tmp22.showBadge;
    dismissBadge = tmp22.dismissBadge;
    const tmpResult5 = tmp(tmp2[12]);
    const isEligibleForQuests = tmp(tmp2[22]).getIsEligibleForQuests();
    const tmpResult6 = tmp(tmp2[22]);
    const mobileReferralSubscriberProfileEntrypointButtonConfig = tmp(tmp2[23]).useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
    ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
    const tmpResult7 = tmp(tmp2[23]);
    const tmp25 = null != tmp(tmp2[11]).useTrialOffer(tmp18);
    c7 = tmp25;
    const items2 = [tmp17, navigateToSettings, tmp25];
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
    let tmp29 = null;
    if (isEligibleForQuests) {
      obj = { IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
      let tmp4Result = tmp4(tmp2[27]);
      obj[0] = tmp(tmp2[28]).QuestsIcon;
      const intl = tmp(tmp2[29]).intl;
      obj[1] = intl.string(tmp(tmp2[29]).t.JALI2K);
      obj[2] = tmp28;
      obj[3] = showBadge;
      tmp29 = callback(tmp4Result, obj, "quests");
    }
    const items5 = [tmp29, , , ];
    obj = { shopButtonRef: null, navigateToShop: null };
    obj[0] = shopButtonRef;
    obj[1] = navigateToShop;
    items5[1] = callback(tmp4(tmp2[30]), obj, "shop");
    if (hasPremiumSubscriptionToDisplay) {
      let tmp32Result = null;
      if (enabled) {
        const obj1 = { onPress: null, showReferralNotificationDot: null };
        obj1[0] = callback1;
        obj1[1] = showReferralNotificationDot;
        tmp32Result = tmp32(tmp4(tmp2[31]), obj1, "nitro-subscriber");
      }
    } else {
      let obj2 = { IconComponent: null, accessibilityLabel: null, label: null, onPress: null };
      tmp4Result = tmp4(tmp2[27]);
      obj2[0] = tmp(tmp2[32]).NitroWheelIcon;
      const intl2 = tmp(tmp2[29]).intl;
      obj2[1] = intl2.string(tmp(tmp2[29]).t.Ipxkog);
      const intl3 = tmp(tmp2[29]).intl;
      obj2[2] = intl3.string(tmp(tmp2[29]).t.Ipxkog);
      obj2[3] = callback1;
      tmp32Result = tmp32(tmp4Result, obj2, "nitro");
    }
    items5[2] = tmp32Result;
    let obj3 = { ref: null, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
    obj3[0] = settingsButtonRef;
    const tmpResult8 = tmp(tmp2[11]);
    obj3[1] = tmp(tmp2[33]).SettingsIcon;
    const intl4 = tmp(tmp2[29]).intl;
    obj3[2] = intl4.string(tmp(tmp2[29]).t["3D5yo/"]);
    obj3[3] = callback;
    obj3[4] = tmp17;
    items5[3] = callback(tmp4(tmp2[27]), obj3, "settings");
    const found = items5.filter((arg0) => null != arg0);
    if (isLoading) {
      obj4 = { style: null, children: null };
      obj4[0] = tmp15.loading;
      obj4[1] = tmp32(showBadge, { size: "small" });
      isLoading = tmp32(c4, obj4);
    }
    const obj5 = { children: null };
    const items6 = [isLoading, ];
    const obj6 = { style: null, pointerEvents: "box-none", children: null };
    obj6[0] = tmp15.buttonsFloating;
    obj6[2] = found;
    items6[1] = callback(c4, obj6);
    obj5[0] = items6;
    color = tmp15.containerFloatingGradient.color;
    const items7 = [color];
    const tmp39 = closure_11;
    const tmp4Result1 = tmp4(tmp2[27]);
    const obj7 = { style: null, pointerEvents: "box-none", children: null };
    obj7[0] = tmp15.containerFloatingWrap;
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
    const obj8 = { style: null };
    obj8[0] = tmp15.containerFloatingGradient;
    const tmp38Result = closure_12(closure_11, obj5);
    const merged = Object.assign(memo);
    obj8.pointerEvents = "none";
    const items8 = [callback(tmp4(tmp2[34]), obj8), ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp15.containerFloating;
    obj9[1] = tmp38Result;
    items8[1] = callback(c4, obj9);
    obj7[2] = items8;
    return closure_12(c4, obj7);
  }
  containerBackground = userProfileColors.containerBackground;
});
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export const useHasSettingsBadge = function useHasSettingsBadge() {
  let tmp = useEligibleActiveOutboundPromotions /* useEligibleActiveOutboundPromotions */.useUnseenOutboundPromotions().length > 0;
  const obj = useEligibleActiveOutboundPromotions /* useEligibleActiveOutboundPromotions */;
  const obj2 = hasUserTrialOfferExpired /* hasUserTrialOfferExpired */;
  const tmp2 = null != hasUserTrialOfferExpired /* hasUserTrialOfferExpired */.useTrialOffer(closure_9);
  const result = UNSAFE_isDismissibleContentDismissed /* UNSAFE_isDismissibleContentDismissed */.useIsDismissibleContentDismissed_UNSAFE(DismissibleContent /* DismissibleContent */.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE);
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
};