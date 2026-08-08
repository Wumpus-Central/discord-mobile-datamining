// discord_app/modules/user_settings/premium/native/PremiumNitroHome.tsx
import fetchCurrentAppIcon from "fetchCurrentAppIcon";
import expandEventProperties from "expandEventProperties";
import get_ActivityIndicator from "Text";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import reset from "reset";
import zustandStore from "zustandStore";
import { NitroHomeSectionId } from "zustandStore";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { FractionalPremiumStates } from "GuildFeatures";
import jsxProd from "PremiumReferralTrialPill";
import importDefaultResult from "n";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { MarketingComponentType } from "../../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { usePromotionMarketingComponent } from "../../../premium/hooks/usePromotionMarketingComponent.tsx";
import { frozen } from "../../../premium/native/PremiumPerkCard.tsx";
import { useIsEligibleSenderForReferralProgram } from "../../../premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";
import { TieredTenureBadgePerkCard } from "../../../premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx";
import { useScrollToSection } from "useScrollToSection.tsx";

let c5;
let closure_12;
let closure_14;
let closure_17;
let closure_18;
let closure_6;
let map1;
let unpackModuleId;
const require = arg1;
function NitroHomeHeader(arg0) {
  let onClose;
  let subscription;
  ({ subscription, onClose } = arg0);
  let navigation;
  const tmp = callback4();
  let obj = onClose(1480);
  navigation = obj.useNavigation();
  let obj1 = onClose(12688);
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
  obj = { style: tmp.contentContainer, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj1 = { style: tmp.backButtonWrapper, onPress: callback, children: null };
  obj1[2] = callback2(onClose(5274).ArrowLargeLeftIcon, { size: "md", color: "white" });
  const items1 = [callback2(onClose(4846).PressableOpacity, obj1), , ];
  const obj2 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: null };
  const intl = tmp2(1236).intl;
  obj2[4] = intl.string(onClose(1236).t["BnquQ/"]);
  items1[1] = callback2(onClose(4299).Text, obj2);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj3 = { style: null };
    obj3[0] = tmp.backButtonWrapper;
    let tmp11Result = tmp11(tmp10, obj3);
  } else {
    const obj4 = { style: null, onPress: null, children: null };
    obj4[0] = tmp.backButtonWrapper;
    obj4[1] = function onPress() {
      let obj = navigation(outer1_2[19]);
      obj = { current_component: outer1_23.YOUR_NITRO_HOME, next_component: outer1_23.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" };
      obj.track(outer1_11.NITRO_HOME_NAVIGATION, obj);
      navigation.push(outer1_14.PREMIUM_MANAGE_PLAN);
    };
    obj4[2] = tmp11(tmp2(6011).SettingsIcon, { size: "md", color: "white" });
    tmp11Result = tmp11(tmp2(4846).PressableOpacity, obj4);
  }
  tmp11Result = !!hasActiveTrial;
  items1[2] = tmp11Result;
  obj[1] = items1;
  const items2 = [closure_18(closure_5, obj), ];
  if (tmp11Result) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.pillParent;
    obj5[1] = tmp11(tmp2(12689).PremiumReferralTrialPill, { hasExtraMargin: true });
    tmp11Result = tmp11(tmp10, obj5);
  }
  items2[1] = tmp11Result;
  obj[1] = items2;
  return closure_18(closure_5, obj);
}
function NewTab(arg0) {
  let extraBottomHeight;
  let scrollToSectionId;
  let _require;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = callback5();
  let obj = _useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  let obj1 = _frozen;
  const premiumPerkCard = obj1.usePremiumPerkCard();
  let obj2 = _usePromotionMarketingComponent;
  const promotionMarketingComponent = obj2.usePromotionMarketingComponent(_MarketingComponentType.MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = React.useRef(false);
  const ref = React.useRef(null);
  const callback = React.useCallback((nativeEvent) => {
    let obj = callback(outer1_2[27]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: outer1_19, hasTrackedScrolledToBottom: callback };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = { ref, contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: null };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  let tmp12 = null != promotionMarketingComponent;
  if (tmp12) {
    tmp12 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp12) {
    obj = { style: null, cardStyle: null, bannerFields: null, analyticsPage: "Nitro Home Banner Tile", componentId: null };
    obj1 = { width: null };
    let tmp8Result = tmp8(7754);
    obj1[0] = tmp2(12690).PERK_CARD_SIZES[tmp2(undefined, 12690).PerkCardVariant.WIDE].width;
    obj[0] = obj1;
    obj[1] = tmp.marketingBannerCard;
    obj[2] = promotionMarketingComponent.properties.properties.marketingPageBanner;
    obj[4] = promotionMarketingComponent.id;
    tmp12 = callback2(tmp8Result, obj);
  }
  const items1 = [tmp12, callback2(_TieredTenureBadgePerkCard.TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    obj2 = { onLayout: null, children: null };
    obj2[0] = useScrollToSection(ref, scrollToSectionId).createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM);
    obj2[1] = tmp15(tmp2(12717).ReferralProgramPerkCard, {});
    tmp15Result = tmp15(closure_5, obj2);
  }
  items1[2] = tmp15Result;
  tmp8Result = tmp8(12690);
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = callback2(tmp8Result, {});
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = callback2(frozen, {});
  const obj3 = {};
  const obj4 = {};
  const obj5 = {};
  const tmp10 = closure_18;
  const tmp11 = closure_6;
  const tmp8Result1 = frozen;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = callback2(frozen, obj5);
  const obj6 = {};
  const tmp8Result2 = frozen;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = callback2(frozen, obj6);
  obj[6] = items1;
  return tmp10(tmp11, obj);
}
function PerksTab(extraBottomHeight) {
  let fractionalState;
  let isInReverseTrial;
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  let _require;
  let importDefault;
  let obj = _frozen;
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = React.useCallback((section_name) => {
    let obj = callback2(table[19]);
    obj = { section_name };
    obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj);
  }, []);
  importDefault = React.useRef(false);
  const callback = React.useCallback((nativeEvent) => {
    let obj = callback(outer1_2[27]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: outer1_20, hasTrackedScrolledToBottom: closure_1 };
    const result = obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = { contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: null };
  items = [callback6().featureCardsContainer, { paddingBottom: extraBottomHeight.extraBottomHeight }];
  obj = { title: null, perks: null, onItemChange: null };
  const tmp = callback6();
  const tmp6 = closure_18;
  const tmp7 = closure_6;
  const intl = _getSystemLocale.intl;
  obj[0] = intl.string(_getSystemLocale.t.DOb6x0);
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let clientThemes = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      const items1 = [clientThemes, ];
      clientThemes = premiumPerkCard.clientThemes;
      items1[1] = clientThemes;
      let items2 = items1;
    } else {
      items2 = [clientThemes, , ];
      ({ clientThemes: arr3[1], greyServerBoosts: arr3[2] } = premiumPerkCard);
    }
  } else {
    const items3 = [, , ];
    ({ customProfile: arr2[0], clientThemes: arr2[1], serverBoosts: arr2[2] } = premiumPerkCard);
    obj[1] = items3;
    obj[2] = function onItemChange(arg0) {
      return callback(outer1_22.CAROUSEL_SECTION_NAME_1, arg0);
    };
    const items4 = [tmp8(tmp10, obj), , , ];
    const obj1 = { title: null, perks: null, onItemChange: null };
    let tmp9Result = tmp9(12729);
    const intl2 = tmp2(1236).intl;
    obj1[0] = intl2.string(tmp2(1236).t["+vt7w9"]);
    if (tmp2Result.isAppIconsSupported()) {
      const items5 = [premiumPerkCard.customAppIcons];
      let items6 = items5;
    } else {
      items6 = [];
    }
    const items7 = [, , ];
    const arraySpreadResult = HermesBuiltin.arraySpread(items6, 0);
    items7[arraySpreadResult] = premiumPerkCard.emoji;
    const sum = arraySpreadResult + 1;
    ({ customSounds: arr8[tmp17], sticker: arr8[tmp17 + 1] } = premiumPerkCard);
    obj1[1] = items7;
    obj1[2] = function onItemChange(arg0) {
      return callback(outer1_22.CAROUSEL_SECTION_NAME_2, arg0);
    };
    items4[1] = tmp8(tmp9Result, obj1);
    const obj2 = { title: null, perks: null, onItemChange: null };
    tmp9Result = tmp9(12729);
    const intl3 = tmp2(1236).intl;
    obj2[0] = intl3.string(tmp2(1236).t.LgHbnL);
    const items8 = [, , , , ];
    ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
    obj2[1] = items8;
    obj2[2] = function onItemChange(arg0) {
      return callback(outer1_22.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = tmp8(tmp9Result, obj2);
    const obj3 = { title: null, perks: null, onItemChange: null };
    tmp2Result = tmp2(7661);
    const intl4 = tmp2(1236).intl;
    obj3[0] = intl4.string(tmp2(1236).t.LTaxu9);
    if (fractionalState === tmp11.FP_ONLY) {
      const entranceSounds = premiumPerkCard.entranceSounds;
      if (isInReverseTrial) {
        const items9 = [entranceSounds];
        let items10 = items9;
      } else {
        items10 = [entranceSounds, premiumPerkCard.greyBadge];
      }
    } else {
      const items11 = [, ];
      ({ entranceSounds: arr10[0], badge: arr10[1] } = premiumPerkCard);
      obj3[1] = items11;
      obj3[2] = function onItemChange(arg0) {
        return callback(outer1_22.CAROUSEL_SECTION_NAME_4, arg0);
      };
      items4[3] = tmp8(tmp9Result1, obj3);
      obj[5] = items4;
      return tmp6(tmp7, obj);
    }
    tmp9Result1 = tmp9(12729);
  }
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: unpackModuleId, HorizontalGradient: closure_12, ThemeTypes: map1, UserSettingsSections: closure_14 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
NewTab = "NewTab";
PerksTab = "PerksTab";
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.PLUM_24);
let closure_21 = require("n")(require("Themes").unsafe_rawColors.PLUM_24).alpha(0.6).hex();
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let obj = { container: null, background: null, tabContent: null, featureCardsContainer: null, segmentedControlActual: null, segmentedControlVirtual: null, androidSegmentedControlBackground: null, backSwipeSensor: null };
obj = { display: "flex", width: "100%", height: "100%", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
obj[1] = { position: "absolute", width: "100%" };
obj[2] = { flex: 1 };
obj[3] = { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" };
obj[4] = { zIndex: 3, paddingHorizontal: 16 };
const alphaResult = require("n")(require("Themes").unsafe_rawColors.PLUM_24).alpha(0.6);
obj[5] = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: require("Themes").radii.lg };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
obj[6] = createCacheKey;
obj[7] = { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" };
let closure_24 = createCacheKey.createStyles(obj);
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: null, headerText: null, pillParent: null };
let obj1 = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: require("Themes").radii.lg };
obj3[2] = { width: 24, height: 24, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center" };
obj3[3] = { textAlign: "center", width: "80%", lineHeight: 28 };
obj3[4] = { display: "flex", flexDirection: "column", alignItems: "center" };
let closure_25 = createCacheKey.createStyles(obj3);
let obj5 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: null };
let obj4 = { width: 24, height: 24, borderRadius: require("Themes").radii.lg, alignItems: "center", justifyContent: "center" };
obj5[1] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm };
let closure_27 = createCacheKey.createStyles(obj5);
let closure_29 = createCacheKey.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
let closure_31 = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
let obj6 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.sm };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let c2;
  let c3;
  let c5;
  let tmp11;
  let tmp14;
  let tmp18;
  let bottom;
  let navigation;
  let dependencyMap;
  let callback;
  let stateFromStores;
  c5 = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  let obj = bottom(12684);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(12685).OpenNitroTriggerPoint);
  let obj1 = bottom(6019);
  const giftCardMobileConsumptionHalfsheet = obj1.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = callback3();
  bottom = navigation(1609)().bottom;
  let obj2 = bottom(7640);
  const youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = bottom(1480);
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
      let obj = navigation(_undefined[19]);
      obj = { target: null };
      obj[0] = outer1_19;
      obj.track(outer1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(true);
    } else if (1 === arg0) {
      obj = { target: null };
      obj[0] = outer1_20;
      navigation(_undefined[19]).track(outer1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(false);
      const obj3 = navigation(_undefined[19]);
    }
  }, []);
  const tmp21 = navigation(6860)();
  let obj7 = bottom(8166);
  const isInReverseTrial = obj7.useIsInReverseTrial();
  let obj8 = bottom(12730);
  const maybeFetchTieredTenureBadgeData = obj8.useMaybeFetchTieredTenureBadgeData();
  const field = zustandStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    zustandStore.resetState();
  }, []);
  let obj9 = bottom(8956);
  obj = { items: null, pageWidth: null, onPageChange: null };
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
  let obj15 = bottom(4036);
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = obj15.useSharedValue(num);
  let tmpResult = tmp(4036);
  class Q {
    constructor() {
      obj = { bottom: c6.get() };
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
  tmpResult = tmp(4153);
  const theme = tmpResult.useThemeContext().theme;
  const tmp17 = callback(stateFromStores.useState(true), 2);
  const isThemeDarkResult = bottom(4153).isThemeDark(theme);
  let tmp6Result = tmp6(12731);
  let tmpResult1 = bottom(4153);
  const tmp6ResultResult = tmp6Result(tmp21.endsAt, bottom(12731).CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram = bottom(8162).useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj4.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      let tmpResult = tmp(tmp2[47]);
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[48]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
    }
    tmpResult = tmp(tmp2[47]);
    if (!tmpResult.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const result1 = tmp(tmp2[47]).UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[48]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE);
      const tmpResult1 = tmp(tmp2[47]);
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = tmp(tmp2[49]).markReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult2 = tmp(tmp2[49]);
    }
  }, items5);
  const effect3 = obj4.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const result = tmp(tmp2[47]).UNSAFE_markDismissibleContentAsDismissed(tmp(tmp2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
      const tmpResult = tmp(tmp2[47]);
    }
  }, []);
  let tmpResult2 = bottom(8162);
  promotionMarketingComponent = bottom(7643).usePromotionMarketingComponent(tmp(7647).MarketingComponentType.PREMIUM_TAB);
  const items6 = [promotionMarketingComponent];
  const effect4 = obj4.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== tmp.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = bottom(_undefined[47]);
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: null };
      obj[0] = outer1_15.AUTO_DISMISS;
      const result = bottom(_undefined[50]).markSnowflakeBoundDismissibleContentAsDismissed(bottom(_undefined[48]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, tmp.promotionId, obj);
      const obj2 = bottom(_undefined[50]);
    }
  }, items6);
  obj4 = { style: items7, children: null };
  items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj5 = { style: tmp5.background, source: null };
  tmp6Result = tmp6(5268);
  obj5[1] = navigation(12732);
  const items8 = [callback2(tmp6Result, obj5), callback2(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }), , , ];
  let tmp26Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp26Result) {
    obj6 = { countdownText: null };
    obj6[0] = tmp6ResultResult;
    tmp26Result = tmp26(tmp6(12733), obj6);
  }
  items8[2] = tmp26Result;
  obj7 = { style: tmp5.tabContent, children: null };
  const items9 = [callback2(bottom(9562).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp26Result) {
    obj8 = { style: null };
    const items10 = [tmp5.backSwipeSensor];
    obj8[0] = items10;
    tmp26Result = tmp26(tmp40, obj8);
  }
  items9[1] = tmp26Result;
  obj7[1] = items9;
  items8[3] = closure_18(c5, obj7);
  obj9 = { style: animatedStyle, onLayout: callback1, children: null };
  const obj10 = { style: tmp5.segmentedControlActual, onLayout: callback, children: null };
  obj10[2] = callback2(bottom(9141).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" });
  const items11 = [callback2(c5, obj10), , ];
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
    tmp26Result1 = tmp26(tmp6(4725), obj11);
  }
  items11[1] = tmp26Result1;
  const tmpResult3 = bottom(7643);
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
    tmp26Result2 = tmp26(tmp6(4703), obj15);
    const tmp6Result1 = tmp6(4703);
  }
  items11[2] = tmp26Result2;
  obj9[2] = items11;
  items8[4] = closure_18(navigation(4036).View, obj9);
  obj4[1] = items8;
  return closure_18(c5, obj4);
};
export const BACK_BUTTON_SIZE = 24;