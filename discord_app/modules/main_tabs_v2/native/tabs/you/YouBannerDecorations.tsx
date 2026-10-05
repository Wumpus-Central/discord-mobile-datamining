// discord_app/modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../../_runtime/metro/00683__.js";
import utils_PlatformUtils from "../../../../../../discord_common/js/shared/utils/PlatformUtils.tsx";
import PremiumConstants from "../../../../premium/PremiumConstants.tsx";
import dismissible_content from "../../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../../../dismissible_content/DismissibleContentConstants.tsx";
import IntlLoaderStore from "../../../../../intl/IntlLoaderStore.tsx";
import DismissibleContentUnsafeUtils from "../../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import QuestTypes from "../../../../quests/QuestTypes.tsx";
import useTrialOffer from "../../../../premium/useTrialOffer.tsx";
import QuestUtils from "../../../../quests/native/QuestUtils.native.tsx";
import PromotionsHooks from "../../../../premium/promotions/PromotionsHooks.tsx";
import you_tracking_Tracking from "tracking/Tracking.tsx";
import react_mod from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../../stores/UserStore.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let navigateToSettings;

let c10;
let closure_4;
let hasOwnProperty;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, StyleSheet: hasOwnProperty } = react_native);
const useIntlLoaderStore = IntlLoaderStore.useIntlLoaderStore;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let closure_9 = PremiumConstants.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((arg0, arg1, color, borderColor) => {
  let PX_24;
  let obj2;
  let obj3;
  let obj5;
  const obj = {
    containerFloatingWrap: obj2,
    containerFloatingGradient: obj3,
    containerFloating: obj5,
    containerFloatingContent: { maxWidth: "100%", flexDirection: "row" },
    endcap: { width: nativeDefault.space.PX_16, flexShrink: 1 },
    buttonsFloating: { flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 },
  };
  obj2 = { top: undefined, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  const merged = Object.assign(hasOwnProperty.absoluteFillObject);
  obj3 = { color };
  const merged1 = Object.assign(hasOwnProperty.absoluteFillObject);
  const obj4 = utils_PlatformUtils;
  const isIOSResult = obj4.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + arg0;
  }
  let BACKGROUND_SURFACE_HIGH = arg1;
  obj5 = {
    marginBottom: PX_24,
    maxWidth: "100%",
    paddingVertical: nativeDefault.space.PX_8,
    paddingHorizontal: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: BACKGROUND_SURFACE_HIGH,
    flexDirection: "row",
    borderColor,
    borderWidth: 1,
  };
  if (arg1 == null) {
    BACKGROUND_SURFACE_HIGH = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
  }
  const merged2 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  ({ width: nativeDefault.space.PX_16, flexShrink: 1 });
  ({ flexDirection: "row", flexShrink: 1, alignItems: "flex-start", gap: nativeDefault.space.PX_8 });
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = PromotionsHooks;
      let tmp = obj.useUnseenOutboundPromotions().length > 0;
      const obj2 = useTrialOffer;
      const tmp2 = null != obj2.useTrialOffer(closure_9);
      const obj3 = DismissibleContentUnsafeUtils;
      const result = obj3.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
      const tmp4 = !result && tmp2;
      if (!tmp) {
        tmp = tmp4;
      }
      return tmp;
    }
  : () => {
      const obj = PromotionsHooks;
      let tmp = obj.useUnseenOutboundPromotions().length > 0;
      const obj2 = useTrialOffer;
      const tmp2 = null != obj2.useTrialOffer(closure_9);
      const obj3 = DismissibleContentUnsafeUtils;
      const result = obj3.useIsDismissibleContentDismissed_UNSAFE(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
      const tmp4 = !result && tmp2;
      if (!tmp) {
        tmp = tmp4;
      }
      return tmp;
    };
let closure_13 = tmp4;
function getFloatingNavBottomMargin(bottom) {
  let PX_24;
  const obj = utils_PlatformUtils;
  const isIOSResult = obj.isIOS();
  const space = nativeDefault.space;
  if (isIOSResult) {
    PX_24 = space.PX_24;
  } else {
    PX_24 = space.PX_4 + bottom;
  }
  return PX_24;
}
const memoResult = react.memo((navigateToSettings) => {
  let c3;
  let containerBorderColor;
  let found;
  let gradientSecondaryBackground;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items7;
  let items8;
  let navigateToShop;
  let primaryColor;
  let secondaryColor;
  let settingsButtonRef;
  let shopButtonRef;
  let theme;
  let tmp11;
  navigateToSettings = navigateToSettings.navigateToSettings;
  const navigateToPremium = navigateToSettings.navigateToPremium;
  let num = navigateToSettings.paddingBottom;
  ({ navigateToShop, shopButtonRef, settingsButtonRef } = navigateToSettings);
  if (num === undefined) {
    num = 0;
  }
  gradientSecondaryBackground = undefined;
  react = undefined;
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
  let obj = navigateToSettings(gradientSecondaryBackground[16]);
  let items = [currentUser];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp5 = navigateToPremium;
  let id;
  const tmp6 = navigateToPremium(gradientSecondaryBackground[17]);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp6Result = tmp6(id);
  ({ theme, primaryColor, secondaryColor } = tmp5(gradientSecondaryBackground[18])({
    user: stateFromStores,
    displayProfile: tmp6Result,
  }));
  tmp5(gradientSecondaryBackground[18])({ user: stateFromStores, displayProfile: tmp6Result });
  const tmp2Result = navigateToSettings(gradientSecondaryBackground[19]);
  const userProfileColors = tmp2Result.useUserProfileColors({ theme, primaryColor, secondaryColor });
  ({ containerBorderColor, gradientSecondaryBackground } = userProfileColors);
  const containerBackground = userProfileColors.containerBackground;
  const tmp2Result6 = navigateToSettings(gradientSecondaryBackground[20]);
  if (!tmp2Result6.isThemeLight(theme)) {
    tmp11 = containerBackground;
  } else {
    tmp11 = null;
    if (null != primaryColor) {
      tmp11 = null;
    }
  }
  react = tmp11;
  let obj4 = react;
  const items1 = [gradientSecondaryBackground, tmp11];
  const tmp12 = closure_12(
    num,
    react.useMemo(() => {
      let hexResult1 = null;
      if (null != c3) {
        const mix = _modDef683.mix;
        const obj = _modDef683(c3);
        const hexResult = obj.hex("rgb");
        const obj2 = _modDef683(c3);
        const mixResult = mix(gradientSecondaryBackground, hexResult, obj2.alpha(), "rgb");
        hexResult1 = mixResult.hex("rgb");
      }
      return hexResult1;
    }, items1),
    gradientSecondaryBackground,
    containerBorderColor,
  );
  const tmp2Result7 = navigateToSettings(gradientSecondaryBackground[22]);
  const hasPremiumSubscriptionToDisplay = tmp2Result7.useHasPremiumSubscriptionToDisplay();
  const tmp14 = closure_13();
  isBadged = tmp14;
  const tmp15 = tmp5(gradientSecondaryBackground[23])();
  showBadge = tmp15.showBadge;
  dismissBadge = tmp15.dismissBadge;
  const tmp2Result8 = navigateToSettings(gradientSecondaryBackground[24]);
  const isEligibleForQuests = tmp2Result8.getIsEligibleForQuests();
  const tmp2Result9 = navigateToSettings(gradientSecondaryBackground[25]);
  const hasConjureGuild = tmp2Result9.useHasConjureGuild("YouBannerDecorations");
  const tmp2Result10 = navigateToSettings(gradientSecondaryBackground[12]);
  const tmp18 = null != tmp2Result10.useTrialOffer(closure_9);
  currentUser = tmp18;
  const items2 = [tmp14, navigateToSettings, tmp18];
  const items3 = [navigateToPremium];
  const callback = react.useCallback(() => {
    const obj = you_tracking_Tracking;
    const obj2 = { isBadged };
    const result = obj.trackYouTabSettingsIconPress(obj2);
    navigateToSettings();
    let tmp5 = currentUser;
    if (tmp5) {
      const tmpResult = DismissibleContentUnsafeUtils;
      tmp5 = !tmpResult.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
    }
    if (tmp5) {
      const tmpResult2 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult2.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.TRIAL_FOR_ALL_2026_SETTINGS_BADGE,
      );
    }
  }, items2);
  const items4 = [showBadge, dismissBadge];
  const callback1 = react.useCallback(() => {
    const obj = you_tracking_Tracking;
    const result = obj.trackYouTabNitroIconPress();
    navigateToPremium();
  }, items3);
  const callback2 = react.useCallback(() => {
    if (showBadge) {
      dismissBadge(ContentDismissActionType.TAKE_ACTION);
    }
    const obj = QuestUtils;
    const obj2 = { fromContent: QuestTypes.QuestContent.USER_PROFILE_HEADER };
    obj.openQuestHome(obj2);
  }, items4);
  let tmp23 = null;
  if (hasConjureGuild) {
    let obj2 = {
      IconComponent: tmp2(gradientSecondaryBackground[33]).MagicWandIcon,
      accessibilityLabel: intl.string(tmp5(gradientSecondaryBackground[34]).bHcJoe),
      onPress: tmp22,
    };
    const tmp5Result = tmp5(gradientSecondaryBackground[32]);
    intl = tmp2(tmp3[15]).intl;
    tmp23 = closure_10(tmp5Result, obj2, "conjure");
  }
  const items5 = [tmp23, , , ,];
  let tmp26 = null;
  if (isEligibleForQuests) {
    const obj3 = {
      IconComponent: navigateToSettings(gradientSecondaryBackground[35]).QuestsIcon,
      accessibilityLabel: intl2.string(navigateToSettings(gradientSecondaryBackground[15]).t.JALI2K),
      onPress: callback2,
      showRedDot: showBadge,
    };
    const tmp5Result5 = tmp5(gradientSecondaryBackground[32]);
    intl2 = tmp2(tmp3[15]).intl;
    tmp26 = closure_10(tmp5Result5, obj3, "quests");
  }
  items5[1] = tmp26;
  items5[2] = closure_10(tmp5(gradientSecondaryBackground[36]), { shopButtonRef, navigateToShop }, "shop");
  let tmp29Result = null;
  if (!hasPremiumSubscriptionToDisplay) {
    const obj5 = {
      IconComponent: navigateToSettings(gradientSecondaryBackground[37]).NitroWheelIcon,
      accessibilityLabel: intl3.string(navigateToSettings(gradientSecondaryBackground[15]).t.Ipxkog),
      label: intl4.string(navigateToSettings(gradientSecondaryBackground[15]).t.Ipxkog),
      onPress: callback1,
    };
    const tmp5Result6 = tmp5(gradientSecondaryBackground[32]);
    intl3 = tmp2(tmp3[15]).intl;
    intl4 = tmp2(tmp3[15]).intl;
    tmp29Result = closure_10(tmp5Result6, obj5, "nitro");
  }
  items5[3] = tmp29Result;
  const obj6 = {
    ref: settingsButtonRef,
    IconComponent: navigateToSettings(gradientSecondaryBackground[38]).SettingsIcon,
    accessibilityLabel: intl5.string(navigateToSettings(gradientSecondaryBackground[15]).t["3D5yo/"]),
    onPress: callback,
    showRedDot: tmp14,
  };
  const tmp5Result7 = tmp5(gradientSecondaryBackground[32]);
  intl5 = tmp2(tmp3[15]).intl;
  items5[4] = closure_10(tmp5Result7, obj6, "settings");
  const obj7 = {
    style: tmp12.buttonsFloating,
    pointerEvents: "box-none",
    children: closure_10(
      navigateToSettings(gradientSecondaryBackground[39]).YouScreenNavIconMeasurer,
      { children: found },
      tmp,
    ),
  };
  found = items5.filter((item) => null != item);
  color = tmp12.containerFloatingGradient.color;
  const items6 = [color];
  const obj8 = { style: tmp12.containerFloatingWrap, pointerEvents: "box-none", children: items7 };
  const tmp29Result2 = closure_10(isBadged, obj7);
  const memo = obj4.useMemo(() => {
    let items;
    const obj = { start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, colors: items };
    items = [,];
    const obj2 = _modDef683(color);
    const alphaResult = obj2.alpha(0);
    items[0] = alphaResult.hex();
    const obj4 = _modDef683(color);
    const alphaResult1 = obj4.alpha(1);
    items[1] = alphaResult1.hex();
    return obj;
  }, items6);
  const obj9 = { style: tmp12.containerFloatingGradient, pointerEvents: "none" };
  const tmp5Result8 = tmp5(gradientSecondaryBackground[40]);
  const merged = Object.assign(memo);
  items7 = [closure_10(tmp5Result8, obj9)];
  const obj10 = { style: tmp12.containerFloating, children: items8 };
  items8 = [, ,];
  const obj11 = { style: tmp12.endcap, pointerEvents: "none" };
  items8[0] = closure_10(isBadged, obj11);
  const obj12 = { style: tmp12.containerFloatingContent, children: tmp29Result2 };
  items8[1] = closure_10(isBadged, obj12);
  const obj13 = { style: tmp12.endcap, pointerEvents: "none" };
  items8[2] = closure_10(isBadged, obj13);
  items7[1] = closure_11(isBadged, obj10);
  return closure_11(isBadged, obj8);
});
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouBannerDecorations.tsx");

export default memoResult;
export { getFloatingNavBottomMargin };
export const useHasSettingsBadge = tmp4;
