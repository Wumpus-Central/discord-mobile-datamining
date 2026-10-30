// discord_app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../../_runtime/metro/00671__.js";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import QuestTypes from "../../../../quests/QuestTypes.tsx";
import useTrialOffer from "../../../../premium/useTrialOffer.tsx";
import PromotionsHooks from "../../../../premium/promotions/PromotionsHooks.tsx";
import tracking_Tracking from "tracking/Tracking.tsx";
import QuestUtils from "../../../../quests/native/QuestUtils.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const useIntlLoaderStore = fn(2064).useIntlLoaderStore;
const ContentDismissActionType = fn(4855).ContentDismissActionType;
let closure_9 = fn(1386).PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5009);
let closure_12 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  const obj = {
    containerFloatingWrap: null,
    containerFloatingGradient: null,
    containerFloating: null,
    containerFloatingContent: null,
    endcap: null,
    buttonsFloating: null,
  };
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
  const obj5 = {
    marginBottom: PX_24,
    maxWidth: "100%",
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: null,
    flexDirection: "row",
    borderColor: null,
    borderWidth: 1,
  };
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
  obj.buttonsFloating = {
    flexDirection: "row",
    flexShrink: 1,
    alignItems: "flex-start",
    gap: nativeDefault.space.PX_8,
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default noop.memo(function YouBannerDecorations(navigateToSettings) {
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
      currentLocale = navigateToSettings(gradientSecondaryBackground[14]).intl.currentLocale;
    }
    return currentLocale;
  });
  let items = [currentUser];
  const stateFromStores = navigateToSettings(gradientSecondaryBackground[15]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  let id;
  let obj = navigateToSettings(gradientSecondaryBackground[15]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6 = navigateToPremium(gradientSecondaryBackground[16]);
  const tmp6Result = navigateToPremium(gradientSecondaryBackground[16])(id);
  ({ theme, primaryColor, secondaryColor } = navigateToPremium(gradientSecondaryBackground[17])({
    user: stateFromStores,
    displayProfile: navigateToPremium(gradientSecondaryBackground[16])(id),
  }));
  const tmp9 = navigateToPremium(gradientSecondaryBackground[17])({
    user: stateFromStores,
    displayProfile: navigateToPremium(gradientSecondaryBackground[16])(id),
  });
  const userProfileColors = navigateToSettings(gradientSecondaryBackground[18]).useUserProfileColors({
    theme,
    primaryColor,
    secondaryColor,
  });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const tmp2Result = navigateToSettings(gradientSecondaryBackground[18]);
  if (!tmp2Result9.isThemeLight(theme)) {
    containerBackground = userProfileColors.containerBackground;
  } else {
    containerBackground = null;
    if (null != primaryColor) {
      containerBackground = null;
    }
  }
  const items1 = [gradientSecondaryBackground, containerBackground];
  const tmp12 = closure_12(
    num,
    containerBackground.useMemo(() => {
      let hexResult1 = null;
      if (null != containerBackground) {
        const obj = _modDef671;
        const obj2 = _modDef671(containerBackground);
        const hexResult = _modDef671(containerBackground).hex("rgb");
        const obj3 = _modDef671(containerBackground);
        hexResult1 = obj
          .mix(gradientSecondaryBackground, hexResult, _modDef671(containerBackground).alpha(), "rgb")
          .hex("rgb");
        const mixResult = obj.mix(
          gradientSecondaryBackground,
          hexResult,
          _modDef671(containerBackground).alpha(),
          "rgb",
        );
      }
      return hexResult1;
    }, items1),
    gradientSecondaryBackground,
    containerBorderColor,
  );
  tmp2Result9 = navigateToSettings(gradientSecondaryBackground[19]);
  const hasPremiumSubscriptionToDisplay = navigateToSettings(
    gradientSecondaryBackground[21],
  ).useHasPremiumSubscriptionToDisplay();
  const tmp2Result10 = navigateToSettings(gradientSecondaryBackground[21]);
  const mapleSyrup3Enabled = navigateToSettings(gradientSecondaryBackground[22]).useMapleSyrup3Enabled(
    "YouBannerDecorations",
  );
  const tmp2Result11 = navigateToSettings(gradientSecondaryBackground[22]);
  let tmp15 = navigateToSettings(gradientSecondaryBackground[10]).useUnseenOutboundPromotions().length > 0;
  const tmp2Result12 = navigateToSettings(gradientSecondaryBackground[10]);
  const tmp2Result13 = navigateToSettings(gradientSecondaryBackground[11]);
  const tmp17 = null != navigateToSettings(gradientSecondaryBackground[11]).useTrialOffer(closure_9);
  let result = navigateToSettings(gradientSecondaryBackground[12]).useIsDismissibleContentDismissed_UNSAFE(
    tmp2(tmp3[13]).DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
  );
  let tmp19 = !result;
  if (!result) {
    tmp19 = tmp17;
  }
  if (!tmp15) {
    tmp15 = tmp19;
  }
  isBadged = tmp15;
  const tmp20 = navigateToPremium(gradientSecondaryBackground[23])();
  showBadge = tmp20.showBadge;
  dismissBadge = tmp20.dismissBadge;
  const tmp2Result14 = navigateToSettings(gradientSecondaryBackground[12]);
  const isEligibleForQuests = navigateToSettings(gradientSecondaryBackground[24]).getIsEligibleForQuests();
  const tmp22 = navigateToPremium(gradientSecondaryBackground[25])("YouBannerDecorations");
  let placement;
  if (tmp22 != null) {
    placement = tmp22.placement;
  }
  const tmp2Result15 = navigateToSettings(gradientSecondaryBackground[24]);
  const tmp24 = null != navigateToSettings(gradientSecondaryBackground[11]).useTrialOffer(closure_9);
  currentUser = tmp24;
  const items2 = [tmp15, navigateToSettings, tmp24];
  const items3 = [navigateToPremium];
  const callback = obj4.useCallback(() => {
    const result = tracking_Tracking.trackYouTabSettingsIconPress({ isBadged });
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
  const items4 = [showBadge, dismissBadge];
  const callback1 = obj4.useCallback(() => {
    const result = tracking_Tracking.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  let tmp28 = null;
  const callback2 = obj4.useCallback(() => {
    if (showBadge) {
      dismissBadge(ContentDismissActionType.TAKE_ACTION);
    }
    const obj = QuestUtils;
    obj.openQuestHome({ fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER });
    const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
  }, items4);
  if ("you_screen" === placement) {
    tmp28 = closure_10(tmp5(tmp3[29]), {}, "conjure");
  }
  const items5 = [tmp28, , , ,];
  let tmp30 = null;
  if (isEligibleForQuests) {
    let obj2 = { IconComponent: tmp2(tmp3[31]).QuestsIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
    const intl = tmp2(tmp3[14]).intl;
    obj2.accessibilityLabel = intl.string(tmp2(tmp3[14]).t.JALI2K);
    obj2.onPress = callback2;
    obj2.showRedDot = showBadge;
    tmp30 = closure_10(tmp5(tmp3[30]), obj2, "quests");
    const tmp5Result = tmp5(tmp3[30]);
  }
  items5[1] = tmp30;
  items5[2] = closure_10(navigateToPremium(gradientSecondaryBackground[32]), { shopButtonRef, navigateToShop }, "shop");
  if (!hasPremiumSubscriptionToDisplay) {
    let obj3 = { IconComponent: tmp2(tmp3[33]).NitroWheelIcon, accessibilityLabel: null, label: null, onPress: null };
    const intl2 = tmp2(tmp3[14]).intl;
    obj3.accessibilityLabel = intl2.string(tmp2(tmp3[14]).t.Ipxkog);
    const intl3 = tmp2(tmp3[14]).intl;
    obj3.label = intl3.string(tmp2(tmp3[14]).t.Ipxkog);
    obj3.onPress = callback1;
    let tmp33Result = closure_10(tmp5(tmp3[30]), obj3, "nitro");
    const tmp5Result4 = tmp5(tmp3[30]);
  } else {
    tmp33Result = null;
  }
  items5[3] = tmp33Result;
  const obj5 = {
    ref: settingsButtonRef,
    IconComponent: null,
    accessibilityLabel: null,
    onPress: null,
    showRedDot: null,
    testID: "you_tab_settings_button",
  };
  const tmp2Result16 = navigateToSettings(gradientSecondaryBackground[11]);
  obj5.IconComponent = navigateToSettings(gradientSecondaryBackground[34]).SettingsIcon;
  const intl4 = tmp2(tmp3[14]).intl;
  obj5.accessibilityLabel = intl4.string(navigateToSettings(gradientSecondaryBackground[14]).t["3D5yo/"]);
  obj5.onPress = callback;
  obj5.showRedDot = tmp15;
  items5[4] = closure_10(navigateToPremium(gradientSecondaryBackground[30]), obj5, "settings");
  const obj6 = { style: tmp12.buttonsFloating, pointerEvents: "box-none", children: null };
  const found = items5.filter((item) => null != item);
  obj6.children = closure_10(
    navigateToSettings(gradientSecondaryBackground[35]).YouScreenNavIconMeasurer,
    { children: found },
    tmp,
  );
  color = tmp12.containerFloatingGradient.color;
  const items6 = [color];
  const tmp5Result5 = navigateToPremium(gradientSecondaryBackground[30]);
  const obj7 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: null };
  const memo = obj4.useMemo(() => {
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: null };
    const obj2 = _modDef671(color);
    const items = [_modDef671(color).alpha(0).hex()];
    const alphaResult = _modDef671(color).alpha(0);
    const obj4 = _modDef671(color);
    items[1] = _modDef671(color).alpha(1).hex();
    obj.colors = items;
    return obj;
  }, items6);
  const obj8 = { style: tmp12.containerFloatingGradient };
  const tmp33Result2 = closure_10(isBadged, obj6);
  const merged = Object.assign(memo);
  obj8.pointerEvents = "none";
  const items7 = [closure_10(navigateToPremium(gradientSecondaryBackground[36]), obj8)];
  const obj9 = { style: tmp12.containerFloating, children: null };
  const items8 = [
    closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" }),
    closure_10(isBadged, { style: tmp12.containerFloatingContent, children: tmp33Result2 }),
    closure_10(isBadged, { style: tmp12.endcap, pointerEvents: "none" }),
  ];
  obj9.children = items8;
  items7[1] = closure_11(isBadged, obj9);
  obj7.children = items7;
  return closure_11(isBadged, obj7);
});
export function getFloatingNavBottomMargin(bottom) {
  const space = nativeDefault.space;
  if (isIOSResult) {
    let PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + bottom;
  }
  return PX_24;
}
export function useHasSettingsBadge() {
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
}
