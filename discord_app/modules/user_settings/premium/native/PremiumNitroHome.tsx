// === Module 13504: PremiumNitroHome ===

// Module 13504 (PremiumNitroHome)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import dismissible_content from "dismissible_content" /* 1944 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 1946 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4376 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4460 */;
import spring from "spring" /* 5061 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8192 */;
import PremiumPerkCardDefault from "PremiumPerkCard" /* 13508 */;
import useScrollToSectionDefault from "useScrollToSection" /* 13533 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 13534 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 13535 */;
import PremiumPerkCarouselDefault from "PremiumPerkCarousel" /* 13561 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4632 */;
import SubscriptionStore from "SubscriptionStore" /* 4303 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 13505 */;
import n from "module_672" /* 672 */;

require = fn;
function NitroHomeHeader(arg0) {
  ({ subscription, onClose } = arg0);
  const tmp = closure_25();
  const navigation = onClose(1484).useNavigation();
  const obj = onClose(1484);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = onClose(13506).useMobileNitroManageSubscriptionsSettingsExperiment({ location: "NitroHomeHeader" });
  let hasActiveTrial;
  const callback = noop.useCallback(() => {
    if (undefined !== onClose) {
      onClose();
    } else {
      navigation.pop();
    }
  }, items);
  if (subscription != null) {
    hasActiveTrial = subscription.hasActiveTrial;
  }
  const obj3 = { style: tmp.contentContainer, children: null };
  const obj4 = { style: tmp.headerContainer, children: null };
  const obj2 = onClose(13506);
  const tmp8 = !hasActiveTrial;
  const items1 = [closure_17(onClose(5210).PressableOpacity, { style: tmp.backButtonWrapper, onPress: callback, children: closure_17(onClose(5716).ArrowLargeLeftIcon, { size: "md", color: "white" }) }), , ];
  const obj6 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: null };
  const intl = onClose(1115).intl;
  obj6.children = intl.string(onClose(1115).t["BnquQ/"]);
  items1[1] = closure_17(onClose(4636).Text, obj6);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj7 = { style: tmp.backButtonWrapper };
    let tmp11Result = closure_17(closure_5, obj7);
  } else {
    const obj8 = {
      style: tmp.backButtonWrapper,
      onPress() {
          AnalyticsUtilsDefault.track(constants.NITRO_HOME_NAVIGATION, { current_component: constants.YOUR_NITRO_HOME, next_component: constants.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" });
          navigation.push(constants3.PREMIUM_MANAGE_PLAN);
        },
      children: closure_17(onClose(7494).SettingsIcon, { size: "md", color: "white" })
    };
    tmp11Result = closure_17(onClose(5210).PressableOpacity, obj8);
  }
  let tmp11Result2 = !tmp8;
  items1[2] = tmp11Result;
  obj4.children = items1;
  const items2 = [closure_18(closure_5, obj4), ];
  if (tmp11Result2) {
    const obj9 = { style: tmp.pillParent, children: closure_17(onClose(13507).PremiumReferralTrialPill, { hasExtraMargin: true }) };
    tmp11Result2 = closure_17(closure_5, obj9);
  }
  items2[1] = tmp11Result2;
  obj3.children = items2;
  return closure_18(closure_5, obj3);
}
function NewTab(arg0) {
  _require = undefined;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = closure_27();
  const isEligibleSenderForReferralProgram = require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram();
  const obj = require("useIsEligibleSenderForReferralProgram");
  const premiumPerkCard = require("PremiumPerkCard").usePremiumPerkCard();
  const obj2 = require("PremiumPerkCard");
  const promotionMarketingComponent = require("usePromotionMarketingComponent").usePromotionMarketingComponent(require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = noop.useRef(false);
  const ref = noop.useRef(null);
  const callback = noop.useCallback((nativeEvent) => PremiumNitroHomeUtils.trackIfScrolledToBottom({ nativeEvent: nativeEvent.nativeEvent, trackedType: NewTab, hasTrackedScrolledToBottom }), []);
  const obj4 = { ref, contentContainerStyle: null, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: null };
  const items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  obj4.contentContainerStyle = items;
  let tmp12 = null != promotionMarketingComponent;
  if (tmp12) {
    tmp12 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp12) {
    const obj6 = { style: null, cardStyle: null, bannerFields: null, analyticsPage: "Nitro Home Banner Tile", componentId: null, promotionId: null };
    const obj7 = { width: tmp2(13508).PERK_CARD_SIZES[tmp2(undefined, 13508).PerkCardVariant.WIDE].width };
    obj6.style = obj7;
    obj6.cardStyle = tmp.marketingBannerCard;
    obj6.bannerFields = promotionMarketingComponent.properties.properties.marketingPageBanner;
    ({ id: obj5.componentId, promotionId: obj5.promotionId } = promotionMarketingComponent);
    tmp12 = closure_17(MarketingPageBannerTileDefault, obj6);
    const tmp8Result = MarketingPageBannerTileDefault;
  }
  const items1 = [tmp12, closure_17(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    const obj8 = { onLayout: useScrollToSectionDefault(ref, scrollToSectionId).createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_17(tmp2(13544).ReferralProgramPerkCard, {}) };
    tmp15Result = closure_17(closure_5, obj8);
  }
  items1[2] = tmp15Result;
  const obj3 = require("usePromotionMarketingComponent");
  const obj9 = {};
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = closure_17(PremiumPerkCardDefault, obj9);
  const obj10 = {};
  const tmp8Result5 = PremiumPerkCardDefault;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = closure_17(PremiumPerkCardDefault, obj10);
  const obj11 = {};
  const tmp8Result6 = PremiumPerkCardDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = closure_17(PremiumPerkCardDefault, obj11);
  const obj19 = {};
  const tmp8Result7 = PremiumPerkCardDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = closure_17(PremiumPerkCardDefault, obj19);
  obj4.children = items1;
  return closure_18(closure_6, obj4);
}
function PerksTab(extraBottomHeight) {
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  _require = undefined;
  const tmp = closure_29();
  const premiumPerkCard = require("PremiumPerkCard").usePremiumPerkCard();
  _require = noop.useCallback((section_name) => {
    hasTrackedScrolledToBottom(dependencyMap[19]).track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, { section_name });
  }, []);
  importDefault = noop.useRef(false);
  const callback = noop.useCallback((nativeEvent) => {
    const result = PremiumNitroHomeUtils.trackIfScrolledToBottom({ nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom });
  }, []);
  const obj2 = { contentContainerStyle: null, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: null };
  const items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight.extraBottomHeight }];
  obj2.contentContainerStyle = items;
  const obj3 = { title: null, perks: null, onItemChange: null };
  const obj = require("PremiumPerkCard");
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.DOb6x0);
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
    obj3.perks = items3;
    obj3.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_1, arg0);
    };
    const items4 = [closure_17(tmp10, obj3), , , ];
    const obj4 = { title: null, perks: null, onItemChange: null };
    const intl2 = tmp2(1115).intl;
    obj4.title = intl2.string(tmp2(1115).t["+vt7w9"]);
    const tmp9Result = tmp9(13561);
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
    obj4.perks = items7;
    obj4.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_2, arg0);
    };
    items4[1] = closure_17(tmp9Result, obj4);
    const obj5 = { title: null, perks: null, onItemChange: null };
    tmp2Result = tmp2(13562);
    const intl3 = tmp2(1115).intl;
    obj5.title = intl3.string(tmp2(1115).t.LgHbnL);
    const items8 = [, , , , ];
    ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
    obj5.perks = items8;
    obj5.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = closure_17(tmp9(13561), obj5);
    const obj6 = { title: null, perks: null, onItemChange: null };
    const tmp9Result3 = tmp9(13561);
    const intl4 = tmp2(1115).intl;
    obj6.title = intl4.string(tmp2(1115).t.LTaxu9);
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
      obj6.perks = items11;
      obj6.onItemChange = function onItemChange(arg0) {
        return closure_0(closure_22.CAROUSEL_SECTION_NAME_4, arg0);
      };
      items4[3] = closure_17(tmp9Result4, obj6);
      obj2.children = items4;
      return closure_18(closure_6, obj2);
    }
    tmp9Result4 = tmp9(13561);
  }
  tmp10 = PremiumPerkCarouselDefault;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const NitroHomeSectionId = fn(13505).NitroHomeSectionId;
const Constants = fn(1074);
({ AnalyticEvents: closure_11, HorizontalGradient: closure_12, ThemeTypes: map1, UserSettingsSections: closure_14 } = Constants);
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const FractionalPremiumStates = fn(1374).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
NewTab = "NewTab";
PerksTab = "PerksTab";
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.PLUM_24);
let closure_21 = n(nativeDefault.unsafe_rawColors.PLUM_24).alpha(0.6).hex();
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let createStyles = fn(4640);
let obj = { container: null, background: null, tabContent: null, featureCardsContainer: null, segmentedControlActual: null, segmentedControlVirtual: null, androidSegmentedControlBackground: null, backSwipeSensor: null };
let size = { display: "flex", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.container = size;
obj.background = { position: "absolute", width: "100%" };
obj.tabContent = { flex: 1 };
obj.featureCardsContainer = { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" };
obj.segmentedControlActual = { zIndex: 3, paddingHorizontal: 16 };
const rect = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: nativeDefault.radii.lg };
obj.segmentedControlVirtual = rect;
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_24).alpha(0.6);
obj.androidSegmentedControlBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.backSwipeSensor = { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" };
let closure_24 = createStyles.createStyles(obj);
createStyles = fn(4640);
let obj4 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: null, headerText: null, pillParent: null };
const size1 = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
obj4.backButtonWrapper = size1;
obj4.headerText = { textAlign: "center", width: "80%", lineHeight: 28 };
obj4.pillParent = { display: "flex", flexDirection: "column", alignItems: "center" };
let closure_25 = createStyles.createStyles(obj4);
createStyles = fn(4640);
let obj5 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: null };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5.marketingBannerCard = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let closure_27 = createStyles.createStyles(obj5);
createStyles = fn(4640);
let closure_29 = createStyles.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
const __initData = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  let bottom;
  let navigation;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  c5 = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  const commonTriggerPoint = bottom(13564).useCommonTriggerPoint(bottom(13565).OpenNitroTriggerPoint);
  let obj = bottom(13564);
  const giftCardMobileConsumptionHalfsheet = bottom(7499).useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_24();
  bottom = navigation(1612)().bottom;
  let obj2 = bottom(7499);
  const youBarSettingsCustomHeaderPaddingTop = bottom(13566).useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = bottom(13566);
  navigation = bottom(1484).useNavigation();
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj4 = bottom(1484);
  [tmp11, c2] = stateFromStores.useState(0);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp10 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp14, c3] = stateFromStores.useState(0);
  const callback1 = stateFromStores.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  const tmp13 = _slicedToArray(stateFromStores.useState(0), 2);
  const items1 = [isEligibleSenderForReferralProgram];
  stateFromStores = bottom(504).useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  const obj6 = bottom(504);
  [tmp18, c5] = stateFromStores.useState(true);
  const tmp17 = _slicedToArray(stateFromStores.useState(true), 2);
  const items2 = [promotionMarketingComponent];
  const stateFromStores1 = bottom(504).useStateFromStores(items2, () => promotionMarketingComponent.getPremiumTypeSubscription());
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      const obj2 = { target: NewTab };
      AnalyticsUtilsDefault.track(constants.MOBILE_NITRO_HOME_TAB_SWITCHED, obj2);
      _undefined3(true);
    } else if (1 === arg0) {
      const obj4 = { target: PerksTab };
      AnalyticsUtilsDefault.track(constants.MOBILE_NITRO_HOME_TAB_SWITCHED, obj4);
      _undefined3(false);
    }
  }, []);
  const tmp21 = navigation(7507)();
  const obj7 = bottom(504);
  const isInReverseTrial = bottom(8202).useIsInReverseTrial();
  const obj8 = bottom(8202);
  const maybeFetchTieredTenureBadgeData = bottom(13567).useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    closure_1_9.resetState();
  }, []);
  const obj9 = bottom(13567);
  const obj11 = { items: null, pageWidth: null, onPageChange: null };
  const obj12 = { label: null, id: null, page: null };
  const intl = bottom(1115).intl;
  obj12.label = intl.string(bottom(1115).t.tahjbP);
  const intl2 = bottom(1115).intl;
  obj12.id = intl2.string(bottom(1115).t.tahjbP);
  obj12.page = closure_17(NewTab, { extraBottomHeight: tmp14 + 16, scrollToSectionId: field });
  const items3 = [obj12, ];
  const obj14 = { label: null, id: null, page: null };
  const intl3 = bottom(1115).intl;
  obj14.label = intl3.string(bottom(1115).t.w3RBdW);
  const intl4 = bottom(1115).intl;
  obj14.id = intl4.string(bottom(1115).t.w3RBdW);
  obj14.page = closure_17(PerksTab, { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial });
  items3[1] = obj14;
  obj11.items = items3;
  obj11.pageWidth = tmp11;
  obj11.onPageChange = callback2;
  const segmentedControlState = bottom(9943).useSegmentedControlState(obj11);
  const obj10 = bottom(9943);
  const obj13 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  const obj15 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = bottom(4376).useSharedValue(num);
  const obj16 = bottom(4376);
  class Q {
    constructor() {
      obj = { bottom: closure_6.get() };
      return obj;
    }
  }
  Q.__closure = { floatTabBottomOffset: sharedValue };
  Q.__workletHash = 15088278002673;
  Q.__initData = __initData;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = bottom(4376).useAnimatedStyle(Q);
  const effect1 = obj5.useEffect(() => {
    if (!stateFromStores) {
      const obj = ReanimatedRexport;
      const result = sharedValue.set(obj.withDelay(500, spring.withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })));
    }
  }, items4);
  let tmpResult = bottom(4376);
  const theme = bottom(4491).useThemeContext().theme;
  let tmpResult6 = bottom(4491);
  const isThemeDarkResult = bottom(4491).isThemeDark(theme);
  const tmpResult7 = bottom(4491);
  const tmp6Result = navigation(13568);
  const tmp6ResultResult = navigation(13568)(tmp21.endsAt, bottom(13568).CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram = bottom(8193).useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj5.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE);
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    obj = DismissibleContentUnsafeUtils;
    if (!tmpResult4.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE);
      const tmpResult5 = DismissibleContentUnsafeUtils;
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = ReferralProgramUtils.markReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult6 = ReferralProgramUtils;
    }
    tmpResult4 = DismissibleContentUnsafeUtils;
  }, items5);
  const effect3 = obj5.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const result = bottom(_undefined[47]).UNSAFE_markDismissibleContentAsDismissed(bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
      const tmpResult = bottom(_undefined[47]);
    }
    obj = bottom(_undefined[47]);
  }, []);
  const tmpResult8 = bottom(8193);
  promotionMarketingComponent = bottom(13529).usePromotionMarketingComponent(tmp(10891).MarketingComponentType.PREMIUM_TAB);
  const items6 = [promotionMarketingComponent];
  const effect4 = obj5.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj3);
    }
  }, items6);
  const obj17 = { style: null, children: null };
  const items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj17.style = items7;
  const obj18 = { style: tmp5.background, source: null };
  const tmpResult9 = bottom(13529);
  obj18.source = navigation(13569);
  const items8 = [closure_17(navigation(5675), obj18), closure_17(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }), , , ];
  let tmp26Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp26Result) {
    const obj19 = { countdownText: tmp6ResultResult };
    tmp26Result = closure_17(tmp6(13570), obj19);
  }
  items8[2] = tmp26Result;
  const obj20 = { style: tmp5.tabContent, children: null };
  const items9 = [closure_17(bottom(12767).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp26Result4) {
    const obj21 = { style: null };
    const items10 = [tmp5.backSwipeSensor];
    obj21.style = items10;
    tmp26Result4 = closure_17(tmp40, obj21);
  }
  items9[1] = tmp26Result4;
  obj20.children = items9;
  items8[3] = closure_18(c5, obj20);
  const obj22 = { style: animatedStyle, onLayout: callback1, children: null };
  const tmp6Result3 = navigation(5675);
  const items11 = [closure_17(c5, { style: tmp5.segmentedControlActual, onLayout: callback, children: closure_17(bottom(9944).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) }), , ];
  let tmp26Result5 = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    const obj24 = { start: null, end: null, colors: null, style: null };
    ({ START: obj29.start, END: obj29.end } = closure_12);
    obj24.colors = ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"];
    const items12 = [tmp5.segmentedControlVirtual, ];
    const obj25 = { height: tmp14, zIndex: 2 };
    items12[1] = obj25;
    obj24.style = items12;
    tmp26Result5 = closure_17(tmp6(5074), obj24);
  }
  items11[1] = tmp26Result5;
  const obj23 = { style: tmp5.segmentedControlActual, onLayout: callback, children: closure_17(bottom(9944).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  if (tmpResult10.isAndroid()) {
    const obj26 = { style: null };
    const items13 = [, , ];
    ({ segmentedControlVirtual: arr15[0], androidSegmentedControlBackground: arr15[1] } = tmp5);
    const obj27 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items13[2] = obj27;
    obj26.style = items13;
    let tmp26Result6 = closure_17(tmp40, obj26);
  } else {
    let num3 = 0.5;
    if (isThemeDarkResult) {
      num3 = 0.2;
    }
    const obj28 = { blurAmount: num3, style: null, blurTheme: null, tintColor: null };
    const items14 = [tmp5.segmentedControlVirtual, ];
    const obj30 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items14[1] = obj30;
    obj28.style = items14;
    obj28.blurTheme = theme;
    let tmp46;
    if (theme === constants2.ONYX) {
      tmp46 = closure_21;
    }
    obj28.tintColor = tmp46;
    tmp26Result6 = closure_17(tmp6(5049), obj28);
    const tmp6Result4 = tmp6(5049);
  }
  items11[2] = tmp26Result6;
  obj22.children = items11;
  items8[4] = closure_18(navigation(4376).View, obj22);
  obj17.children = items8;
  return closure_18(c5, obj17);
};
export const BACK_BUTTON_SIZE = 24;