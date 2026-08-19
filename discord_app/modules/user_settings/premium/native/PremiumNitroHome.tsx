// === Module 12848: NitroHomeHeader ===

// Module 12848 (NitroHomeHeader)
import ThemesDefault from "Themes" /* 712 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 8038 */;
import frozenDefault from "frozen" /* 12852 */;
import useScrollToSectionDefault from "useScrollToSection" /* 12873 */;
import PremiumPerkCarouselDefault from "PremiumPerkCarousel" /* 12891 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import reset from "reset" /* 4045 */;
import zustandStore from "zustandStore" /* 12849 */;
import { NitroHomeSectionId } from "zustandStore" /* 12849 */;
import ME from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import importDefaultResult from "n" /* 689 */;
import "createCacheKey";
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
function NitroHomeHeader(arg0) {
  ({ subscription, onClose } = arg0);
  const tmp = callback4();
  let obj = onClose(1500);
  const navigation = obj.useNavigation();
  obj1 = onClose(12850);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = obj1.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "NitroHomeHeader" });
  let hasActiveTrial;
  const callback = React.useCallback(() => {
    if (undefined !== onClose) {
      onClose();
    } else {
      navigation.pop();
    }
  }, items);
  if (subscription != null) {
    hasActiveTrial = subscription.hasActiveTrial;
  }
  obj = { style: tmp.headerContainer, children: null };
  obj1 = { style: tmp.backButtonWrapper, onPress: callback, children: callback2(onClose(6316).ArrowLargeLeftIcon, { size: "md", color: "white" }) };
  const items1 = [callback2(onClose(5433).PressableOpacity, obj1), , ];
  const obj2 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: null };
  const intl = onClose(1236).intl;
  obj2[4] = intl.string(onClose(1236).t["BnquQ/"]);
  items1[1] = callback2(onClose(4734).Text, obj2);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj3 = { style: null };
    obj3[0] = tmp.backButtonWrapper;
    let tmp11Result = callback2(closure_5, obj3);
  } else {
    const obj4 = { style: null, onPress: null, children: null };
    obj4[0] = tmp.backButtonWrapper;
    obj4[1] = function onPress() {
      navigation(dependencyMap[19]);
      const obj = { current_component: closure_1_23.YOUR_NITRO_HOME, next_component: closure_1_23.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" };
      obj.track(closure_1_11.NITRO_HOME_NAVIGATION, obj);
      navigation.push(closure_1_14.PREMIUM_MANAGE_PLAN);
    };
    obj4[2] = callback2(onClose(7355).SettingsIcon, { size: "md", color: "white" });
    tmp11Result = callback2(onClose(5433).PressableOpacity, obj4);
  }
  tmp11Result = !!hasActiveTrial;
  items1[2] = tmp11Result;
  obj[1] = items1;
  const items2 = [callback2(closure_5, obj), ];
  if (tmp11Result) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.pillParent;
    obj5[1] = callback2(onClose(12851).PremiumReferralTrialPill, { hasExtraMargin: true });
    tmp11Result = callback2(closure_5, obj5);
  }
  items2[1] = tmp11Result;
  obj[1] = items2;
  return callback2(closure_5, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: unpackModuleId, HorizontalGradient: closure_12, ThemeTypes: map1, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const NewTab = "NewTab";
const PerksTab = "PerksTab";
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.PLUM_24);
let closure_21 = importDefaultResult(ThemesDefault.unsafe_rawColors.PLUM_24).alpha(0.6).hex();
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let obj = { display: "flex", width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
obj[1] = { position: "absolute", width: "100%" };
obj[2] = { flex: 1 };
obj[3] = { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" };
obj[4] = { zIndex: 3, paddingHorizontal: 16 };
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.PLUM_24).alpha(0.6);
obj[5] = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: ThemesDefault.radii.lg };
let createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[6] = createCacheKey;
obj[7] = { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" };
let closure_24 = createCacheKey.createStyles(obj);
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: null, headerText: null, pillParent: null };
obj3[2] = { width: 24, height: 24, borderRadius: ThemesDefault.radii.lg, alignItems: "center", justifyContent: "center" };
obj3[3] = { textAlign: "center", width: "80%", lineHeight: 28 };
obj3[4] = { display: "flex", flexDirection: "column", alignItems: "center" };
let closure_25 = createCacheKey.createStyles(obj3);
let obj5 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: null };
obj5[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
let closure_27 = createCacheKey.createStyles(obj5);
let closure_29 = createCacheKey.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
let closure_31 = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
let result = require("obj132").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let bottom;
  let navigation;
  dependencyMap = undefined;
  let callback;
  let stateFromStores;
  c5 = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  let obj = bottom(12846);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(12847).OpenNitroTriggerPoint);
  obj1 = bottom(7363);
  const giftCardMobileConsumptionHalfsheet = obj1.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = callback3();
  bottom = navigation(1629)().bottom;
  let obj2 = bottom(7924);
  const youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = bottom(1500);
  navigation = obj3.useNavigation();
  let obj4 = stateFromStores;
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  [tmp11, c2] = callback(stateFromStores.useState(0), 2);
  callback = stateFromStores.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp10 = callback(stateFromStores.useState(0), 2);
  [tmp14, c3] = callback(stateFromStores.useState(0), 2);
  const callback1 = stateFromStores.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj5 = bottom(589);
  const items1 = [isEligibleSenderForReferralProgram];
  stateFromStores = obj5.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  const tmp13 = callback(stateFromStores.useState(0), 2);
  [tmp18, c5] = callback(stateFromStores.useState(true), 2);
  let obj6 = bottom(589);
  const items2 = [promotionMarketingComponent];
  const stateFromStores1 = obj6.useStateFromStores(items2, () => promotionMarketingComponent.getPremiumTypeSubscription());
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      navigation(_undefined[19]);
      let obj = { target: null };
      obj[0] = NewTab;
      obj.track(closure_1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(true);
    } else if (1 === arg0) {
      obj = { target: null };
      obj[0] = PerksTab;
      navigation(_undefined[19]).track(closure_1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(false);
      const obj3 = navigation(_undefined[19]);
    }
  }, []);
  const tmp21 = navigation(5356)();
  let obj7 = bottom(8278);
  const isInReverseTrial = obj7.useIsInReverseTrial();
  let obj8 = bottom(12892);
  const maybeFetchTieredTenureBadgeData = obj8.useMaybeFetchTieredTenureBadgeData();
  const field = closure_9.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    closure_9.resetState();
  }, []);
  let obj9 = bottom(8799);
  obj = { label: null, id: null, page: null };
  const intl = bottom(1236).intl;
  obj[0] = intl.string(bottom(1236).t.tahjbP);
  const intl2 = bottom(1236).intl;
  obj[1] = intl2.string(bottom(1236).t.tahjbP);
  obj1 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  obj[2] = callback2(NewTab, obj1);
  const items3 = [obj, ];
  obj2 = { label: null, id: null, page: null };
  const intl3 = bottom(1236).intl;
  obj2[0] = intl3.string(bottom(1236).t.w3RBdW);
  const intl4 = bottom(1236).intl;
  obj2[1] = intl4.string(bottom(1236).t.w3RBdW);
  obj3 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  obj2[2] = callback2(PerksTab, obj3);
  items3[1] = obj2;
  obj[0] = items3;
  obj[1] = tmp11;
  obj[2] = callback2;
  const segmentedControlState = obj9.useSegmentedControlState(obj);
  let obj15 = bottom(4115);
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = obj15.useSharedValue(num);
  let tmpResult = tmp(4115);
  class Q {
    constructor() {
      obj = { bottom: closure_6.get() };
      return obj;
    }
  }
  Q.__closure = { floatTabBottomOffset: sharedValue };
  Q.__workletHash = 15088278002673;
  Q.__initData = closure_31;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = tmpResult.useAnimatedStyle(Q);
  const effect1 = obj4.useEffect(() => {
    if (!stateFromStores) {
      const obj = bottom(_undefined[43]);
      const result = sharedValue.set(obj.withDelay(500, bottom(_undefined[44]).withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })));
      const obj2 = bottom(_undefined[44]);
    }
  }, items4);
  tmpResult = tmp(1363);
  const theme = tmpResult.useThemeContext().theme;
  const tmp17 = callback(stateFromStores.useState(true), 2);
  const isThemeDarkResult = bottom(1363).isThemeDark(theme);
  let tmp6Result = tmp6(12893);
  let tmpResult1 = bottom(1363);
  const tmp6ResultResult = tmp6Result(tmp21.endsAt, bottom(12893).CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram = bottom(8274).useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj4.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      let tmpResult = bottom(_undefined[47]);
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(bottom(_undefined[48]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
    }
    tmpResult = bottom(_undefined[47]);
    if (!tmpResult.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const result1 = bottom(_undefined[47]).UNSAFE_markDismissibleContentAsDismissed(bottom(_undefined[48]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE);
      const tmpResult1 = bottom(_undefined[47]);
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = bottom(_undefined[49]).markReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult2 = bottom(_undefined[49]);
    }
    obj = bottom(_undefined[47]);
  }, items5);
  const effect3 = obj4.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const result = bottom(_undefined[47]).UNSAFE_markDismissibleContentAsDismissed(bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
      const tmpResult = bottom(_undefined[47]);
    }
    obj = bottom(_undefined[47]);
  }, []);
  let tmpResult2 = bottom(8274);
  promotionMarketingComponent = bottom(7927).usePromotionMarketingComponent(tmp(7931).MarketingComponentType.PREMIUM_TAB);
  const items6 = [promotionMarketingComponent];
  const effect4 = obj4.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = bottom(_undefined[47]);
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: null };
      obj[0] = ContentDismissActionType.AUTO_DISMISS;
      const result = bottom(_undefined[50]).markSnowflakeBoundDismissibleContentAsDismissed(bottom(_undefined[48]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj);
      const obj2 = bottom(_undefined[50]);
    }
  }, items6);
  obj4 = { style: items7, children: null };
  items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj5 = { style: tmp5.background, source: null };
  tmp6Result = tmp6(5449);
  obj5[1] = navigation(12894);
  const items8 = [callback2(tmp6Result, obj5), callback2(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }), , , ];
  let tmp26Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp26Result) {
    obj6 = { countdownText: null };
    obj6[0] = tmp6ResultResult;
    tmp26Result = tmp26(tmp6(12895), obj6);
  }
  items8[2] = tmp26Result;
  obj7 = { style: tmp5.tabContent, children: null };
  const items9 = [callback2(bottom(11785).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp26Result) {
    obj8 = { style: null };
    const items10 = [tmp5.backSwipeSensor];
    obj8[0] = items10;
    tmp26Result = tmp26(tmp40, obj8);
  }
  items9[1] = tmp26Result;
  obj7[1] = items9;
  items8[3] = callback2(c5, obj7);
  obj9 = { style: animatedStyle, onLayout: callback1, children: null };
  const tmpResult3 = bottom(7927);
  const items11 = [callback2(c5, { style: tmp5.segmentedControlActual, onLayout: callback, children: callback2(bottom(10096).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) }), , ];
  let tmp26Result1 = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    const obj11 = { start: null, end: null, colors: null, style: null };
    ({ START: obj29[0], END: obj29[1] } = closure_12);
    obj11[2] = ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"];
    const items12 = [tmp5.segmentedControlVirtual, ];
    const obj12 = { height: null, zIndex: 2 };
    obj12[0] = tmp14;
    items12[1] = obj12;
    obj11[3] = items12;
    tmp26Result1 = tmp26(tmp6(4756), obj11);
  }
  items11[1] = tmp26Result1;
  const obj10 = { style: tmp5.segmentedControlActual, onLayout: callback, children: callback2(bottom(10096).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  if (tmpResult4.isAndroid()) {
    const obj13 = { style: null };
    const items13 = [, , ];
    ({ segmentedControlVirtual: arr15[0], androidSegmentedControlBackground: arr15[1] } = tmp5);
    const obj14 = { height: null, zIndex: 1, overflow: "hidden" };
    obj14[0] = tmp14;
    items13[2] = obj14;
    obj13[0] = items13;
    let tmp26Result2 = tmp26(tmp40, obj13);
  } else {
    let num3 = 0.5;
    if (isThemeDarkResult) {
      num3 = 0.2;
    }
    obj15 = { blurAmount: null, style: null, blurTheme: null, tintColor: null };
    obj15[0] = num3;
    const items14 = [tmp5.segmentedControlVirtual, ];
    const obj16 = { height: null, zIndex: 1, overflow: "hidden" };
    obj16[0] = tmp14;
    items14[1] = obj16;
    obj15[1] = items14;
    obj15[2] = theme;
    let tmp46;
    if (theme === constants.MIDNIGHT) {
      tmp46 = closure_21;
    }
    obj15[3] = tmp46;
    tmp26Result2 = tmp26(tmp6(4724), obj15);
    const tmp6Result1 = tmp6(4724);
  }
  items11[2] = tmp26Result2;
  obj9[2] = items11;
  items8[4] = callback2(navigation(4115).View, obj9);
  obj4[1] = items8;
  return callback2(c5, obj4);
};
export const BACK_BUTTON_SIZE = 24;