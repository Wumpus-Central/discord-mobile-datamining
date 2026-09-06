// discord_app/modules/user_settings/premium/native/PremiumNitroHome.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../../dismissible_content/DismissibleContentUtils.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import ReferralProgramUtils from "../../../premium/referral_program/ReferralProgramUtils.tsx";
import MarketingPageBannerTileDefault from "../../../premium/promotions/native/MarketingPageBannerTile.tsx";
import PremiumPerkCardDefault from "../../../premium/native/PremiumPerkCard.tsx";
import useScrollToSectionDefault from "useScrollToSection.tsx";
import PremiumNitroHomeUtils from "utils/PremiumNitroHomeUtils.tsx";
import PremiumPerkCarouselDefault from "../../../premium/native/PremiumPerkCarousel.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore.tsx";
import n from "../../../../../_runtime/metro/00672__.js";

require = fn;
function NitroHomeHeader(arg0) {
  ({ subscription, onClose } = arg0);
  const tmp = closure_25();
  let obj = onClose(1483);
  const navigation = obj.useNavigation();
  let obj1 = onClose(13414);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = obj1.useMobileNitroManageSubscriptionsSettingsExperiment({
    location: "NitroHomeHeader",
  });
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
  obj = { style: tmp.contentContainer, children: null };
  obj = { style: tmp.headerContainer, children: null };
  obj1 = {
    style: tmp.backButtonWrapper,
    onPress: callback,
    children: closure_17(onClose(5628).ArrowLargeLeftIcon, { size: "md", color: "white" }),
  };
  const items1 = [closure_17(onClose(5123).PressableOpacity, obj1), ,];
  const obj2 = {
    variant: "display-sm",
    color: "text-overlay-light",
    style: tmp.headerText,
    accessibilityRole: "header",
    children: null,
  };
  const intl = onClose(1114).intl;
  obj2.children = intl.string(onClose(1114).t["BnquQ/"]);
  items1[1] = closure_17(onClose(4556).Text, obj2);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj3 = { style: tmp.backButtonWrapper };
    let tmp11Result = closure_17(closure_5, obj3);
  } else {
    const obj4 = {
      style: tmp.backButtonWrapper,
      onPress() {
        const obj = {
          current_component: constants.YOUR_NITRO_HOME,
          next_component: constants.YOUR_NITRO_PLAN,
          interaction_component: "header_settings_icon",
        };
        obj.track(constants.NITRO_HOME_NAVIGATION, obj);
        navigation.push(constants3.PREMIUM_MANAGE_PLAN);
      },
      children: closure_17(onClose(7380).SettingsIcon, { size: "md", color: "white" }),
    };
    tmp11Result = closure_17(onClose(5123).PressableOpacity, obj4);
  }
  tmp11Result = !!hasActiveTrial;
  items1[2] = tmp11Result;
  obj.children = items1;
  const items2 = [closure_18(closure_5, obj)];
  if (tmp11Result) {
    const obj5 = {
      style: tmp.pillParent,
      children: closure_17(onClose(13415).PremiumReferralTrialPill, { hasExtraMargin: true }),
    };
    tmp11Result = closure_17(closure_5, obj5);
  }
  items2[1] = tmp11Result;
  obj.children = items2;
  return closure_18(closure_5, obj);
}
function NewTab(arg0) {
  _require = undefined;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = closure_27();
  let obj = require("useIsEligibleSenderForReferralProgram");
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  let obj1 = require("PremiumPerkCard");
  const premiumPerkCard = obj1.usePremiumPerkCard();
  let obj2 = require("usePromotionMarketingComponent");
  const promotionMarketingComponent = obj2.usePromotionMarketingComponent(
    require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER,
  );
  _require = noop.useRef(false);
  const ref = noop.useRef(null);
  const callback = noop.useCallback((nativeEvent) => {
    const obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: NewTab, hasTrackedScrolledToBottom };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = {
    ref,
    contentContainerStyle: null,
    showsVerticalScrollIndicator: false,
    onScrollEndDrag: callback,
    onMomentumScrollEnd: callback,
    scrollEventThrottle: 0,
    children: null,
  };
  const items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  obj.contentContainerStyle = items;
  let tmp12 = null != promotionMarketingComponent;
  if (tmp12) {
    tmp12 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  }
  if (tmp12) {
    obj = {
      style: null,
      cardStyle: null,
      bannerFields: null,
      analyticsPage: "Nitro Home Banner Tile",
      componentId: null,
      promotionId: null,
    };
    obj1 = { width: null };
    let tmp8Result = MarketingPageBannerTileDefault;
    obj1.width = tmp2(13416).PERK_CARD_SIZES[tmp2(undefined, 13416).PerkCardVariant.WIDE].width;
    obj.style = obj1;
    obj.cardStyle = tmp.marketingBannerCard;
    obj.bannerFields = promotionMarketingComponent.properties.properties.marketingPageBanner;
    ({ id: obj5.componentId, promotionId: obj5.promotionId } = promotionMarketingComponent);
    tmp12 = closure_17(tmp8Result, obj);
  }
  const items1 = [tmp12, closure_17(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {}), , , , ,];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    obj2 = {
      onLayout: useScrollToSectionDefault(ref, scrollToSectionId).createSectionLayoutHandler(
        NitroHomeSectionId.REFERRAL_PROGRAM,
      ),
      children: closure_17(tmp2(13443).ReferralProgramPerkCard, {}),
    };
    tmp15Result = closure_17(closure_5, obj2);
  }
  items1[2] = tmp15Result;
  tmp8Result = PremiumPerkCardDefault;
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = closure_17(tmp8Result, {});
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = closure_17(PremiumPerkCardDefault, {});
  const obj5 = {};
  const obj3 = {};
  const obj4 = {};
  const tmp8Result1 = PremiumPerkCardDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = closure_17(PremiumPerkCardDefault, obj5);
  const obj6 = {};
  const tmp8Result2 = PremiumPerkCardDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = closure_17(PremiumPerkCardDefault, obj6);
  obj.children = items1;
  return closure_18(closure_6, obj);
}
function PerksTab(extraBottomHeight) {
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  _require = undefined;
  let obj = require("PremiumPerkCard");
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = noop.useCallback((section_name) => {
    hasTrackedScrolledToBottom(dependencyMap[19]);
    const obj = { section_name };
    obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj);
  }, []);
  importDefault = noop.useRef(false);
  const callback = noop.useCallback((nativeEvent) => {
    const obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
    const result = obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = {
    contentContainerStyle: null,
    showsVerticalScrollIndicator: false,
    onScrollEndDrag: callback,
    onMomentumScrollEnd: callback,
    scrollEventThrottle: 0,
    children: null,
  };
  const items = [closure_29().featureCardsContainer, { paddingBottom: extraBottomHeight.extraBottomHeight }];
  obj.contentContainerStyle = items;
  obj = { title: null, perks: null, onItemChange: null };
  const tmp = closure_29();
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.DOb6x0);
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let clientThemes = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      const items1 = [clientThemes];
      clientThemes = premiumPerkCard.clientThemes;
      items1[1] = clientThemes;
      let items2 = items1;
    } else {
      items2 = [clientThemes, ,];
      ({ clientThemes: arr3[1], greyServerBoosts: arr3[2] } = premiumPerkCard);
    }
  } else {
    const items3 = [, ,];
    ({ customProfile: arr2[0], clientThemes: arr2[1], serverBoosts: arr2[2] } = premiumPerkCard);
    obj.perks = items3;
    obj.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_1, arg0);
    };
    const items4 = [closure_17(tmp10, obj), , ,];
    const obj1 = { title: null, perks: null, onItemChange: null };
    let tmp9Result = tmp9(13459);
    const intl2 = tmp2(1114).intl;
    obj1.title = intl2.string(tmp2(1114).t["+vt7w9"]);
    if (tmp2Result.isAppIconsSupported()) {
      const items5 = [premiumPerkCard.customAppIcons];
      let items6 = items5;
    } else {
      items6 = [];
    }
    const items7 = [, ,];
    const arraySpreadResult = HermesBuiltin.arraySpread(items6, 0);
    items7[arraySpreadResult] = premiumPerkCard.emoji;
    const sum = arraySpreadResult + 1;
    ({ customSounds: arr8[tmp17], sticker: arr8[tmp17 + 1] } = premiumPerkCard);
    obj1.perks = items7;
    obj1.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_2, arg0);
    };
    items4[1] = closure_17(tmp9Result, obj1);
    const obj2 = { title: null, perks: null, onItemChange: null };
    tmp9Result = tmp9(13459);
    const intl3 = tmp2(1114).intl;
    obj2.title = intl3.string(tmp2(1114).t.LgHbnL);
    const items8 = [, , , ,];
    ({
      memberPricing: arr9[0],
      earlyAccess: arr9[1],
      largeUploads: arr9[2],
      hdVideo: arr9[3],
      superReactions: arr9[4],
    } = premiumPerkCard);
    obj2.perks = items8;
    obj2.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = closure_17(tmp9Result, obj2);
    const obj3 = { title: null, perks: null, onItemChange: null };
    tmp2Result = tmp2(13363);
    const intl4 = tmp2(1114).intl;
    obj3.title = intl4.string(tmp2(1114).t.LTaxu9);
    if (fractionalState === tmp11.FP_ONLY) {
      const entranceSounds = premiumPerkCard.entranceSounds;
      if (isInReverseTrial) {
        const items9 = [entranceSounds];
        let items10 = items9;
      } else {
        items10 = [entranceSounds, premiumPerkCard.greyBadge];
      }
    } else {
      const items11 = [,];
      ({ entranceSounds: arr10[0], badge: arr10[1] } = premiumPerkCard);
      obj3.perks = items11;
      obj3.onItemChange = function onItemChange(arg0) {
        return closure_0(closure_22.CAROUSEL_SECTION_NAME_4, arg0);
      };
      items4[3] = closure_17(tmp9Result1, obj3);
      obj.children = items4;
      return closure_18(closure_6, obj);
    }
    tmp9Result1 = tmp9(13459);
  }
  tmp10 = PremiumPerkCarouselDefault;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const NitroHomeSectionId = fn(13413).NitroHomeSectionId;
const Constants = fn(1074);
({
  AnalyticEvents: closure_11,
  HorizontalGradient: closure_12,
  ThemeTypes: map1,
  UserSettingsSections: closure_14,
} = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const FractionalPremiumStates = fn(1373).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
NewTab = "NewTab";
PerksTab = "PerksTab";
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.PLUM_24);
let closure_21 = n(nativeDefault.unsafe_rawColors.PLUM_24).alpha(0.6).hex();
let closure_22 = {
  CAROUSEL_SECTION_NAME_1: "NitroFavorites",
  CAROUSEL_SECTION_NAME_2: "MakeDiscordYours",
  CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord",
  CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant",
};
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let createStyles = fn(4560);
let obj = {
  container: null,
  background: null,
  tabContent: null,
  featureCardsContainer: null,
  segmentedControlActual: null,
  segmentedControlVirtual: null,
  androidSegmentedControlBackground: null,
  backSwipeSensor: null,
};
let size = {
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj.container = size;
obj.background = { position: "absolute", width: "100%" };
obj.tabContent = { flex: 1 };
obj.featureCardsContainer = { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" };
obj.segmentedControlActual = { zIndex: 3, paddingHorizontal: 16 };
const rect = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: nativeDefault.radii.lg };
obj.segmentedControlVirtual = rect;
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.androidSegmentedControlBackground = obj;
obj.backSwipeSensor = { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" };
let closure_24 = createStyles.createStyles(obj);
createStyles = fn(4560);
let obj1 = {
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: "space-between",
    gap: 8,
  },
  contentContainer: { display: "flex", flexDirection: "column" },
  backButtonWrapper: null,
  headerText: null,
  pillParent: null,
};
const size1 = {
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
};
obj1.backButtonWrapper = size1;
obj1.headerText = { textAlign: "center", width: "80%", lineHeight: 28 };
obj1.pillParent = { display: "flex", flexDirection: "column", alignItems: "center" };
let closure_25 = createStyles.createStyles(obj1);
fn(4560);
createStyles = {
  featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 },
  marketingBannerCard: null,
};
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_24).alpha(0.6);
createStyles.marketingBannerCard = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
let closure_27 = createStyles.createStyles(createStyles);
createStyles = fn(4560);
let closure_29 = createStyles.createStyles({
  featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 },
});
const __initData = {
  code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}",
};
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
  let obj = bottom(13410);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(13411).OpenNitroTriggerPoint);
  let obj1 = bottom(7385);
  const giftCardMobileConsumptionHalfsheet = obj1.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_24();
  bottom = navigation(1611)().bottom;
  let obj2 = bottom(13350);
  const youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = bottom(1483);
  navigation = obj3.useNavigation();
  let obj4 = stateFromStores;
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  [tmp11, c2] = _slicedToArray(stateFromStores.useState(0), 2);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp10 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp14, c3] = _slicedToArray(stateFromStores.useState(0), 2);
  const callback1 = stateFromStores.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  let obj5 = bottom(504);
  const items1 = [isEligibleSenderForReferralProgram];
  stateFromStores = obj5.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  const tmp13 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp18, c5] = _slicedToArray(stateFromStores.useState(true), 2);
  let obj6 = bottom(504);
  const items2 = [promotionMarketingComponent];
  const stateFromStores1 = obj6.useStateFromStores(items2, () =>
    promotionMarketingComponent.getPremiumTypeSubscription(),
  );
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = { target: NewTab };
      obj.track(constants.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(true);
    } else if (1 === arg0) {
      obj = { target: PerksTab };
      AnalyticsUtilsDefault.track(constants.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(false);
    }
  }, []);
  const tmp21 = navigation(7393)();
  let obj7 = bottom(8065);
  const isInReverseTrial = obj7.useIsInReverseTrial();
  let obj8 = bottom(13460);
  const maybeFetchTieredTenureBadgeData = obj8.useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(
    () => () => {
      closure_1_9.resetState();
    },
    [],
  );
  let obj9 = bottom(9792);
  obj = { items: null, pageWidth: null, onPageChange: null };
  obj = { label: null, id: null, page: null };
  const intl = bottom(1114).intl;
  obj.label = intl.string(bottom(1114).t.tahjbP);
  const intl2 = bottom(1114).intl;
  obj.id = intl2.string(bottom(1114).t.tahjbP);
  obj1 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  obj.page = closure_17(NewTab, obj1);
  const items3 = [obj];
  obj2 = { label: null, id: null, page: null };
  const intl3 = bottom(1114).intl;
  obj2.label = intl3.string(bottom(1114).t.w3RBdW);
  const intl4 = bottom(1114).intl;
  obj2.id = intl4.string(bottom(1114).t.w3RBdW);
  obj3 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  obj2.page = closure_17(PerksTab, obj3);
  items3[1] = obj2;
  obj.items = items3;
  obj.pageWidth = tmp11;
  obj.onPageChange = callback2;
  const segmentedControlState = obj9.useSegmentedControlState(obj);
  let obj15 = bottom(4296);
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = obj15.useSharedValue(num);
  let tmpResult = tmp(4296);
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
  const animatedStyle = tmpResult.useAnimatedStyle(Q);
  const effect1 = obj4.useEffect(() => {
    if (!stateFromStores) {
      const obj = ReanimatedRexport;
      const result = sharedValue.set(
        obj.withDelay(500, spring.withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })),
      );
    }
  }, items4);
  tmpResult = tmp(4411);
  const theme = tmpResult.useThemeContext().theme;
  const tmp17 = _slicedToArray(stateFromStores.useState(true), 2);
  const isThemeDarkResult = bottom(4411).isThemeDark(theme);
  let tmp6Result = tmp6(13461);
  let tmpResult1 = bottom(4411);
  const tmp6ResultResult = tmp6Result(tmp21.endsAt, bottom(13461).CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram = bottom(8056).useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj4.useEffect(() => {
    if (
      !obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)
    ) {
      let tmpResult = DismissibleContentUnsafeUtils;
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
      );
    }
    tmpResult = DismissibleContentUnsafeUtils;
    if (
      !tmpResult.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE,
      )
    ) {
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE,
      );
      const tmpResult1 = DismissibleContentUnsafeUtils;
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = ReferralProgramUtils.markReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult2 = ReferralProgramUtils;
    }
    obj = DismissibleContentUnsafeUtils;
  }, items5);
  const effect3 = obj4.useEffect(() => {
    if (
      !obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)
    ) {
      const result = bottom(_undefined[47]).UNSAFE_markDismissibleContentAsDismissed(
        bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD,
      );
      const tmpResult = bottom(_undefined[47]);
    }
    obj = bottom(_undefined[47]);
  }, []);
  let tmpResult2 = bottom(8056);
  promotionMarketingComponent = bottom(13352).usePromotionMarketingComponent(
    tmp(10742).MarketingComponentType.PREMIUM_TAB,
  );
  const items6 = [promotionMarketingComponent];
  const effect4 = obj4.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = DismissibleContentUnsafeUtils;
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        promotionMarketingComponent.promotionId,
      ).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        promotionMarketingComponent.promotionId,
        obj,
      );
    }
  }, items6);
  obj4 = { style: null, children: null };
  const items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj4.style = items7;
  obj5 = { style: tmp5.background, source: null };
  tmp6Result = tmp6(5587);
  obj5.source = navigation(13462);
  const items8 = [
    closure_17(tmp6Result, obj5),
    closure_17(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }),
    ,
    ,
  ];
  let tmp26Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp26Result) {
    obj6 = { countdownText: tmp6ResultResult };
    tmp26Result = closure_17(tmp6(13463), obj6);
  }
  items8[2] = tmp26Result;
  obj7 = { style: tmp5.tabContent, children: null };
  const items9 = [closure_17(bottom(12616).SegmentedControlPages, { state: segmentedControlState })];
  if (tmp26Result) {
    obj8 = { style: null };
    const items10 = [tmp5.backSwipeSensor];
    obj8.style = items10;
    tmp26Result = closure_17(tmp40, obj8);
  }
  items9[1] = tmp26Result;
  obj7.children = items9;
  items8[3] = closure_18(c5, obj7);
  obj9 = { style: animatedStyle, onLayout: callback1, children: null };
  const tmpResult3 = bottom(13352);
  const items11 = [
    closure_17(c5, {
      style: tmp5.segmentedControlActual,
      onLayout: callback,
      children: closure_17(bottom(9793).SegmentedControl, {
        state: segmentedControlState,
        variant: "experimental_Small",
      }),
    }),
    ,
  ];
  let tmp26Result1 = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    const obj11 = { start: null, end: null, colors: null, style: null };
    ({ START: obj29.start, END: obj29.end } = closure_12);
    obj11.colors = ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"];
    const items12 = [tmp5.segmentedControlVirtual];
    const obj12 = { height: tmp14, zIndex: 2 };
    items12[1] = obj12;
    obj11.style = items12;
    tmp26Result1 = closure_17(tmp6(4987), obj11);
  }
  items11[1] = tmp26Result1;
  const obj10 = {
    style: tmp5.segmentedControlActual,
    onLayout: callback,
    children: closure_17(bottom(9793).SegmentedControl, {
      state: segmentedControlState,
      variant: "experimental_Small",
    }),
  };
  if (tmpResult4.isAndroid()) {
    const obj13 = { style: null };
    const items13 = [, ,];
    ({ segmentedControlVirtual: arr15[0], androidSegmentedControlBackground: arr15[1] } = tmp5);
    const obj14 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items13[2] = obj14;
    obj13.style = items13;
    let tmp26Result2 = closure_17(tmp40, obj13);
  } else {
    let num3 = 0.5;
    if (isThemeDarkResult) {
      num3 = 0.2;
    }
    obj15 = { blurAmount: num3, style: null, blurTheme: null, tintColor: null };
    const items14 = [tmp5.segmentedControlVirtual];
    const obj16 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items14[1] = obj16;
    obj15.style = items14;
    obj15.blurTheme = theme;
    let tmp46;
    if (theme === constants2.MIDNIGHT) {
      tmp46 = closure_21;
    }
    obj15.tintColor = tmp46;
    tmp26Result2 = closure_17(tmp6(4964), obj15);
    const tmp6Result1 = tmp6(4964);
  }
  items11[2] = tmp26Result2;
  obj9.children = items11;
  items8[4] = closure_18(navigation(4296).View, obj9);
  obj4.children = items8;
  return closure_18(c5, obj4);
}
export const BACK_BUTTON_SIZE = 24;
