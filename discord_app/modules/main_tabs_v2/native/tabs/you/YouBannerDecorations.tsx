// discord_app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../../_runtime/metro/00672__.js";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import QuestTypes from "../../../../quests/QuestTypes.tsx";
import useTrialOffer from "../../../../premium/useTrialOffer.tsx";
import QuestUtils from "../../../../quests/native/QuestUtils.native.tsx";
import PromotionsHooks from "../../../../premium/promotions/PromotionsHooks.tsx";
import you_tracking_Tracking from "tracking/Tracking.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ActivityIndicator: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
let closure_9 = fn(1374).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: c10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4638);
let closure_13 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  const obj = {
    containerFloatingWrap: null,
    containerFloatingGradient: null,
    containerFloating: null,
    buttonsFloating: null,
    loading: null,
  };
  const obj2 = {};
  const merged = Object.assign(timestampProducer.absoluteFillObject);
  obj2.top = undefined;
  obj2.alignItems = "center";
  obj.containerFloatingWrap = obj2;
  const obj3 = {};
  const merged1 = Object.assign(timestampProducer.absoluteFillObject);
  obj3.color = color;
  obj.containerFloatingGradient = obj3;
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
    let tmp7 = importDefault;
  } else {
    PX_24 = space.PX_4 + arg0;
    tmp7 = importDefault;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  const obj5 = {
    marginBottom: PX_24,
    paddingVertical: tmp7(576).space.PX_8,
    paddingHorizontal: tmp7(576).space.PX_24,
    borderRadius: tmp7(576).radii.lg,
    backgroundColor: null,
    flexDirection: "row",
    borderColor: null,
    borderWidth: 1,
  };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = tmp7(576).colors.BACKGROUND_SURFACE_HIGH;
  }
  obj5.backgroundColor = BACKGROUND_SURFACE_HIGH;
  obj5.borderColor = borderColor;
  const merged2 = Object.assign(tmp7(576).shadows.SHADOW_HIGH);
  obj.containerFloating = obj5;
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
  let items = [currentUser];
  const stateFromStores = navigateToSettings(gradientSecondaryBackground[13]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  let id;
  let obj = navigateToSettings(gradientSecondaryBackground[13]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  let tmp5 = navigateToPremium(gradientSecondaryBackground[14]);
  const tmp5Result = navigateToPremium(gradientSecondaryBackground[14])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[15])({
    user: stateFromStores,
    displayProfile: navigateToPremium(gradientSecondaryBackground[14])(id),
  }));
  const tmp8 = navigateToPremium(gradientSecondaryBackground[15])({
    user: stateFromStores,
    displayProfile: navigateToPremium(gradientSecondaryBackground[14])(id),
  });
  const userProfileColors = navigateToSettings(gradientSecondaryBackground[16]).useUserProfileColors({
    theme,
    primaryColor,
    secondaryColor,
  });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  let tmpResult = navigateToSettings(gradientSecondaryBackground[16]);
  if (!tmpResult9.isThemeLight(theme)) {
    containerBackground = userProfileColors.containerBackground;
  } else {
    containerBackground = null;
    if (null != primaryColor) {
      containerBackground = null;
    }
  }
  const items1 = [gradientSecondaryBackground, containerBackground];
  const tmp11 = closure_13(
    num,
    containerBackground.useMemo(() => {
      let hexResult1 = null;
      if (null != containerBackground) {
        const obj = _modDef672;
        const obj2 = _modDef672(containerBackground);
        const hexResult = _modDef672(containerBackground).hex("rgb");
        const obj3 = _modDef672(containerBackground);
        hexResult1 = obj
          .mix(gradientSecondaryBackground, hexResult, _modDef672(containerBackground).alpha(), "rgb")
          .hex("rgb");
        const mixResult = obj.mix(
          gradientSecondaryBackground,
          hexResult,
          _modDef672(containerBackground).alpha(),
          "rgb",
        );
      }
      return hexResult1;
    }, items1),
    gradientSecondaryBackground,
    containerBorderColor,
  );
  tmpResult9 = navigateToSettings(gradientSecondaryBackground[17]);
  const hasPremiumSubscriptionToDisplay = navigateToSettings(
    gradientSecondaryBackground[19],
  ).useHasPremiumSubscriptionToDisplay();
  const tmpResult10 = navigateToSettings(gradientSecondaryBackground[19]);
  let tmp13 = navigateToSettings(gradientSecondaryBackground[9]).useUnseenOutboundPromotions().length > 0;
  const tmpResult11 = navigateToSettings(gradientSecondaryBackground[9]);
  const tmpResult12 = navigateToSettings(gradientSecondaryBackground[10]);
  const tmp15 = null != navigateToSettings(gradientSecondaryBackground[10]).useTrialOffer(closure_9);
  let result = navigateToSettings(gradientSecondaryBackground[11]).useIsDismissibleContentDismissed_UNSAFE(
    navigateToSettings(tmp2[12]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
  );
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
  const tmpResult13 = navigateToSettings(gradientSecondaryBackground[11]);
  const isEligibleForQuests = navigateToSettings(gradientSecondaryBackground[21]).getIsEligibleForQuests();
  const tmpResult14 = navigateToSettings(gradientSecondaryBackground[21]);
  const mobileReferralSubscriberProfileEntrypointButtonConfig = navigateToSettings(
    gradientSecondaryBackground[22],
  ).useMobileReferralSubscriberProfileEntrypointButtonConfig("YouBannerDecorations");
  ({ enabled, showReferralNotificationDot } = mobileReferralSubscriberProfileEntrypointButtonConfig);
  const tmpResult15 = navigateToSettings(gradientSecondaryBackground[22]);
  const tmp21 = null != navigateToSettings(gradientSecondaryBackground[10]).useTrialOffer(closure_9);
  currentUser = tmp21;
  const items2 = [tmp13, navigateToSettings, tmp21];
  const items3 = [navigateToPremium];
  const callback = obj4.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabSettingsIconPress({ isBadged });
    navigateToSettings();
    let tmp5 = closure_7;
    if (closure_7) {
      tmp5 = !DismissibleContentUnsafeUtils.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    if (tmp5) {
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
      const tmpResult2 = DismissibleContentUnsafeUtils;
    }
    const obj2 = { isBadged };
  }, items2);
  const callback1 = obj4.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const items4 = [showBadge, dismissBadge];
  let tmp25 = null;
  if (isEligibleForQuests) {
    let obj2 = {
      IconComponent: navigateToSettings(tmp2[27]).QuestsIcon,
      accessibilityLabel: null,
      onPress: null,
      showRedDot: null,
    };
    const intl = navigateToSettings(tmp2[28]).intl;
    obj2.accessibilityLabel = intl.string(navigateToSettings(tmp2[28]).t.JALI2K);
    obj2.onPress = tmp24;
    obj2.showRedDot = showBadge;
    tmp25 = closure_10(tmp4(tmp2[26]), obj2, "quests");
    const tmp4Result = tmp4(tmp2[26]);
  }
  const items5 = [
    tmp25,
    closure_10(navigateToPremium(gradientSecondaryBackground[29]), { shopButtonRef, navigateToShop }, "shop"),
    ,
  ];
  if (hasPremiumSubscriptionToDisplay) {
    let tmp28Result = null;
    if (enabled) {
      let obj3 = { onPress: callback1, showReferralNotificationDot };
      tmp28Result = closure_10(tmp4(tmp2[30]), obj3, "nitro-subscriber");
    }
    let tmp28Result2 = tmp28Result;
  } else {
    const obj5 = {
      IconComponent: navigateToSettings(tmp2[31]).NitroWheelIcon,
      accessibilityLabel: null,
      label: null,
      onPress: null,
    };
    const intl2 = navigateToSettings(tmp2[28]).intl;
    obj5.accessibilityLabel = intl2.string(navigateToSettings(tmp2[28]).t.Ipxkog);
    const intl3 = navigateToSettings(tmp2[28]).intl;
    obj5.label = intl3.string(navigateToSettings(tmp2[28]).t.Ipxkog);
    obj5.onPress = callback1;
    tmp28Result2 = closure_10(tmp4(tmp2[26]), obj5, "nitro");
    const tmp4Result4 = tmp4(tmp2[26]);
  }
  items5[2] = tmp28Result2;
  const obj6 = {
    ref: settingsButtonRef,
    IconComponent: null,
    accessibilityLabel: null,
    onPress: null,
    showRedDot: null,
  };
  const tmpResult16 = navigateToSettings(gradientSecondaryBackground[10]);
  obj6.IconComponent = navigateToSettings(gradientSecondaryBackground[32]).SettingsIcon;
  const intl4 = navigateToSettings(tmp2[28]).intl;
  obj6.accessibilityLabel = intl4.string(navigateToSettings(gradientSecondaryBackground[28]).t["3D5yo/"]);
  obj6.onPress = callback;
  obj6.showRedDot = tmp13;
  items5[3] = closure_10(navigateToPremium(gradientSecondaryBackground[26]), obj6, "settings");
  const found = items5.filter((item) => null != item);
  if (isLoading) {
    const obj7 = { style: tmp11.loading, children: closure_10(showBadge, { size: "small" }) };
    isLoading = closure_10(isBadged, obj7);
  }
  const obj8 = { children: null };
  const items6 = [
    isLoading,
    closure_10(isBadged, { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found }),
  ];
  obj8.children = items6;
  color = tmp11.containerFloatingGradient.color;
  const items7 = [color];
  const obj9 = { style: tmp11.buttonsFloating, pointerEvents: "box-none", children: found };
  const tmp4Result5 = navigateToPremium(gradientSecondaryBackground[26]);
  const obj10 = { style: tmp11.containerFloatingWrap, pointerEvents: "box-none", children: null };
  const memo = obj4.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef672(color);
    const items = [_modDef672(color).alpha(0).hex()];
    const alphaResult = _modDef672(color).alpha(0);
    const obj4 = _modDef672(color);
    items[1] = _modDef672(color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items7);
  const obj11 = { style: tmp11.containerFloatingGradient };
  const tmp34Result = closure_12(closure_11, obj8);
  const merged = Object.assign(memo);
  obj11.pointerEvents = "none";
  const items8 = [
    closure_10(navigateToPremium(gradientSecondaryBackground[33]), obj11),
    closure_10(isBadged, { style: tmp11.containerFloating, children: tmp34Result }),
  ];
  obj10.children = items8;
  return closure_12(isBadged, obj10);
});
export const useHasSettingsBadge = function useHasSettingsBadge() {
  let tmp = PromotionsHooks.useUnseenOutboundPromotions().length > 0;
  const tmp2 = null != useTrialOffer.useTrialOffer(closure_9);
  const result = DismissibleContentUnsafeUtils.useIsDismissibleContentDismissed_UNSAFE(
    dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
  );
  let tmp4 = !result;
  if (!result) {
    tmp4 = tmp2;
  }
  if (!tmp) {
    tmp = tmp4;
  }
  return tmp;
};
