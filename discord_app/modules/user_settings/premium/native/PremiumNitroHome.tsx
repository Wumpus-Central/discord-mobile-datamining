// discord_app/modules/user_settings/premium/native/PremiumNitroHome.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import dismissible_content from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentUnsafeUtils from "../../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import spring_spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ArrowLargeLeftIcon from "../../../../design/components/Icon/native/redesign/generated/ArrowLargeLeftIcon.tsx";
import ReferralProgramUtils from "../../../premium/referral_program/ReferralProgramUtils.tsx";
import PremiumReferralTrialPill from "PremiumReferralTrialPill.tsx";
import PremiumPerkCardDefault from "../../../premium/native/PremiumPerkCard.tsx";
import useScrollToSectionDefault from "useScrollToSection.tsx";
import PremiumNitroHomeUtils from "utils/PremiumNitroHomeUtils.tsx";
import MarketingPageBannerTileDefault from "../../../premium/promotions/native/MarketingPageBannerTile.tsx";
import PremiumPerkCarouselDefault from "../../../premium/native/PremiumPerkCarousel.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore.tsx";
import n from "../../../../../_runtime/metro/00671__.js";

const require = globalThis.__r;

require = fn;
function NitroHomeHeader(arg0) {
  ({ subscription, onClose } = arg0);
  const tmp = closure_23();
  const navigation = useNavigation.useNavigation();
  items = [navigation, onClose];
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
  let tmp10Result = hasActiveTrial;
  const obj2 = { style: tmp.contentContainer, children: null };
  const obj3 = { style: tmp.headerContainer, children: null };
  const items1 = [
    closure_1_16(Pressables.PressableOpacity, {
      style: tmp.backButtonWrapper,
      onPress: callback,
      children: closure_1_16(ArrowLargeLeftIcon.ArrowLargeLeftIcon, { size: "md", color: "white" }),
    }),
    ,
  ];
  const obj5 = {
    variant: "display-sm",
    color: "text-overlay-light",
    style: tmp.headerText,
    accessibilityRole: "header",
    children: null,
  };
  const intl = util.intl;
  obj5.children = intl.string(util.t["BnquQ/"]);
  items1[1] = closure_1_16(Text_Text.Text, obj5);
  items1[2] = closure_1_16(hasOwnProperty, { style: tmp.backButtonWrapper });
  obj3.children = items1;
  const items2 = [closure_1_17(hasOwnProperty, obj3)];
  if (tmp10Result) {
    const obj7 = {
      style: tmp.pillParent,
      children: closure_1_16(PremiumReferralTrialPill.PremiumReferralTrialPill, { hasExtraMargin: true }),
    };
    tmp10Result = closure_1_16(hasOwnProperty, obj7);
  }
  items2[1] = tmp10Result;
  obj2.children = items2;
  return closure_1_17(hasOwnProperty, obj2);
}
function NewTab(arg0) {
  _require = undefined;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = closure_25();
  const isEligibleSenderForReferralProgram =
    require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram();
  const obj = require("useIsEligibleSenderForReferralProgram");
  const premiumPerkCard = require("PremiumPerkCard").usePremiumPerkCard();
  const obj2 = require("PremiumPerkCard");
  const promotionMarketingSurface = require("usePromotionMarketingSurface").usePromotionMarketingSurface(
    require("MarketingSurfaceType").MarketingSurfaceType.MARKETING_PAGE_BANNER,
  );
  _require = noop.useRef(false);
  const ref = noop.useRef(null);
  const callback = noop.useCallback(
    (nativeEvent) =>
      PremiumNitroHomeUtils.trackIfScrolledToBottom({
        nativeEvent: nativeEvent.nativeEvent,
        trackedType: NewTab,
        hasTrackedScrolledToBottom,
      }),
    [],
  );
  const obj4 = {
    ref,
    contentContainerStyle: null,
    showsVerticalScrollIndicator: false,
    onScrollEndDrag: callback,
    onMomentumScrollEnd: callback,
    scrollEventThrottle: 0,
    children: null,
  };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  obj4.contentContainerStyle = items;
  let tmp12 = null != promotionMarketingSurface;
  if (tmp12) {
    const obj6 = {
      style: null,
      cardStyle: null,
      bannerFields: null,
      analyticsPage: "Nitro Home Banner Tile",
      componentId: null,
      componentType: null,
      promotionId: null,
    };
    const obj7 = { width: tmp2(9920).PERK_CARD_SIZES[tmp2(undefined, 9920).PerkCardVariant.WIDE].width };
    obj6.style = obj7;
    obj6.cardStyle = tmp.marketingBannerCard;
    ({
      surface: obj5.bannerFields,
      id: obj5.componentId,
      componentType: obj5.componentType,
      promotionId: obj5.promotionId,
    } = promotionMarketingSurface);
    tmp12 = closure_16(MarketingPageBannerTileDefault, obj6);
    const tmp8Result = MarketingPageBannerTileDefault;
  }
  const items1 = [tmp12, closure_16(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {}), , , , ,];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    const obj8 = {
      onLayout: useScrollToSectionDefault(ref, scrollToSectionId).createSectionLayoutHandler(
        NitroHomeSectionId.REFERRAL_PROGRAM,
      ),
      children: closure_16(tmp2(15179).ReferralProgramPerkCard, {}),
    };
    tmp15Result = closure_16(closure_5, obj8);
  }
  items1[2] = tmp15Result;
  const obj3 = require("usePromotionMarketingSurface");
  const obj9 = {};
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = closure_16(PremiumPerkCardDefault, obj9);
  const obj10 = {};
  const tmp8Result5 = PremiumPerkCardDefault;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = closure_16(PremiumPerkCardDefault, obj10);
  const obj11 = {};
  const tmp8Result6 = PremiumPerkCardDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = closure_16(PremiumPerkCardDefault, obj11);
  const obj19 = {};
  const tmp8Result7 = PremiumPerkCardDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = closure_16(PremiumPerkCardDefault, obj19);
  obj4.children = items1;
  return closure_17(closure_6, obj4);
}
function PerksTab(extraBottomHeight) {
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  _require = undefined;
  const tmp = closure_27();
  const premiumPerkCard = require("PremiumPerkCard").usePremiumPerkCard();
  _require = noop.useCallback((section_name) => {
    hasTrackedScrolledToBottom(dependencyMap[28]).track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, {
      section_name,
    });
  }, []);
  importDefault = noop.useRef(false);
  const callback = noop.useCallback((nativeEvent) => {
    const result = PremiumNitroHomeUtils.trackIfScrolledToBottom({
      nativeEvent: nativeEvent.nativeEvent,
      trackedType: PerksTab,
      hasTrackedScrolledToBottom,
    });
  }, []);
  const obj2 = {
    contentContainerStyle: null,
    showsVerticalScrollIndicator: false,
    onScrollEndDrag: callback,
    onMomentumScrollEnd: callback,
    scrollEventThrottle: 0,
    children: null,
  };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight.extraBottomHeight }];
  obj2.contentContainerStyle = items;
  const obj3 = { title: null, perks: null, onItemChange: null };
  const obj = require("PremiumPerkCard");
  const intl = require("util").intl;
  obj3.title = intl.string(require("util").t.DOb6x0);
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
    obj3.perks = items3;
    obj3.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_1, arg0);
    };
    const items4 = [closure_16(tmp10, obj3), , ,];
    const obj4 = { title: null, perks: null, onItemChange: null };
    const intl2 = tmp2(1113).intl;
    obj4.title = intl2.string(tmp2(1113).t["+vt7w9"]);
    const tmp9Result = tmp9(15202);
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
    obj4.perks = items7;
    obj4.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_2, arg0);
    };
    items4[1] = closure_16(tmp9Result, obj4);
    const obj5 = { title: null, perks: null, onItemChange: null };
    tmp2Result = tmp2(15203);
    const intl3 = tmp2(1113).intl;
    obj5.title = intl3.string(tmp2(1113).t.LgHbnL);
    const items8 = [, , , ,];
    ({
      memberPricing: arr9[0],
      earlyAccess: arr9[1],
      largeUploads: arr9[2],
      hdVideo: arr9[3],
      superReactions: arr9[4],
    } = premiumPerkCard);
    obj5.perks = items8;
    obj5.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_21.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = closure_16(tmp9(15202), obj5);
    const obj6 = { title: null, perks: null, onItemChange: null };
    const tmp9Result3 = tmp9(15202);
    const intl4 = tmp2(1113).intl;
    obj6.title = intl4.string(tmp2(1113).t.LTaxu9);
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
      obj6.perks = items11;
      obj6.onItemChange = function onItemChange(arg0) {
        return closure_0(closure_21.CAROUSEL_SECTION_NAME_4, arg0);
      };
      items4[3] = closure_16(tmp9Result4, obj6);
      obj2.children = items4;
      return closure_17(closure_6, obj2);
    }
    tmp9Result4 = tmp9(15202);
  }
  tmp10 = PremiumPerkCarouselDefault;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const NitroHomeSectionId = fn(9918).NitroHomeSectionId;
const Constants = fn(1072);
({ AnalyticEvents: closure_11, HorizontalGradient: closure_12, ThemeTypes: map1 } = Constants);
const ContentDismissActionType = fn(5089).ContentDismissActionType;
const FractionalPremiumStates = fn(1387).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17 } = jsxProd);
NewTab = "NewTab";
PerksTab = "PerksTab";
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.PLUM_24);
let closure_20 = n(nativeDefault.unsafe_rawColors.PLUM_24).alpha(0.6).hex();
let closure_21 = {
  CAROUSEL_SECTION_NAME_1: "NitroFavorites",
  CAROUSEL_SECTION_NAME_2: "MakeDiscordYours",
  CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord",
  CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant",
};
let createStyles = fn(5243);
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
const alphaResult = n(nativeDefault.unsafe_rawColors.PLUM_24).alpha(0.6);
obj.androidSegmentedControlBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj.backSwipeSensor = { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" };
let closure_22 = createStyles.createStyles(obj);
createStyles = fn(5243);
let obj4 = {
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
obj4.backButtonWrapper = size1;
obj4.headerText = { textAlign: "center", width: "80%", lineHeight: 28 };
obj4.pillParent = { display: "flex", flexDirection: "column", alignItems: "center" };
let closure_23 = createStyles.createStyles(obj4);
createStyles = fn(5243);
let obj5 = {
  featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 },
  marketingBannerCard: null,
};
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5.marketingBannerCard = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
};
let closure_25 = createStyles.createStyles(obj5);
createStyles = fn(5243);
let closure_27 = createStyles.createStyles({
  featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 },
});
let closure_29 = {
  code: "(function PremiumNitroHomeTsx1(){let[floatTabBottomOffset]=this.__closure;return{bottom:floatTabBottomOffset.get()};})",
};
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default function PremiumNitroHome(onClose) {
  _require = undefined;
  let navigation;
  dependencyMap = undefined;
  let stateFromStores;
  noop = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingSurface;
  const commonTriggerPoint = require("useCommonTriggerPoint").useCommonTriggerPoint(
    require("OpenNitroTriggerPoint").OpenNitroTriggerPoint,
  );
  let obj = require("useCommonTriggerPoint");
  const giftCardMobileConsumptionHalfsheet =
    require("useGiftCardMobileConsumptionHalfsheet").useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_22();
  const bottom = navigation(1627)().bottom;
  _require = bottom;
  let obj2 = require("useGiftCardMobileConsumptionHalfsheet");
  const youBarSettingsCustomHeaderPaddingTop =
    require("useYouBarSettingsSafeArea").useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = require("useYouBarSettingsSafeArea");
  navigation = require("useNavigation").useNavigation();
  items = [navigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  const tmp10 = navigation(7929)();
  const width = tmp10.width;
  let num = 0;
  ({ ref, onLayout } = tmp10);
  if (undefined !== width) {
    num = width;
  }
  let obj4 = require("useNavigation");
  [tmp12, c2] = stateFromStores(noop.useState(0), 2);
  const callback = obj5.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  const tmp11 = stateFromStores(noop.useState(0), 2);
  const items1 = [promotionMarketingSurface];
  stateFromStores = require("initialize").useStateFromStores(items1, () => promotionMarketingSurface.useReducedMotion);
  let tmpResult = require("initialize");
  [tmp16, c4] = stateFromStores(noop.useState(true), 2);
  const tmp15 = stateFromStores(noop.useState(true), 2);
  const items2 = [SubscriptionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
  const callback1 = obj5.useCallback((arg0) => {
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
  const tmp19 = navigation(8463)();
  const tmpResult12 = require("initialize");
  const isInReverseTrial = require("ReverseTrialUtils").useIsInReverseTrial();
  const tmpResult13 = require("ReverseTrialUtils");
  const maybeFetchTieredTenureBadgeData =
    require("useMaybeFetchTieredTenureBadgeData").useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = obj5.useEffect(
    () => () => {
      closure_1_9.resetState();
    },
    [],
  );
  const tmpResult14 = require("useMaybeFetchTieredTenureBadgeData");
  const obj6 = { items: null, pageWidth: null, onPageChange: null };
  const obj7 = { label: null, id: null, page: null };
  const intl = tmp(1113).intl;
  obj7.label = intl.string(require("util").t.tahjbP);
  const intl2 = tmp(1113).intl;
  obj7.id = intl2.string(require("util").t.tahjbP);
  obj7.page = closure_16(NewTab, { extraBottomHeight: tmp12 + 16, scrollToSectionId: field });
  const items3 = [obj7];
  const obj9 = { label: null, id: null, page: null };
  const intl3 = tmp(1113).intl;
  obj9.label = intl3.string(require("util").t.w3RBdW);
  const intl4 = tmp(1113).intl;
  obj9.id = intl4.string(require("util").t.w3RBdW);
  obj9.page = closure_16(PerksTab, {
    extraBottomHeight: tmp12 + 16,
    fractionalState: tmp19.fractionalState,
    isInReverseTrial,
  });
  items3[1] = obj9;
  obj6.items = items3;
  obj6.pageWidth = num;
  obj6.onPageChange = callback1;
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState(obj6);
  const memo = obj5.useMemo(() => {
    const Gesture = _undefined(_undefined2[42]).Gesture;
    return Gesture.Native().disallowInterruption(true);
  }, []);
  const obj10 = { extraBottomHeight: tmp12 + 16, fractionalState: tmp19.fractionalState, isInReverseTrial };
  const obj8 = { extraBottomHeight: tmp12 + 16, scrollToSectionId: field };
  const tmpResult15 = require("SegmentedControlState");
  let num2 = -32;
  if (stateFromStores) {
    num2 = bottom + 8;
  }
  sharedValue = require("../../../../../_runtime/metro/01652__.js").useSharedValue(num2);
  const tmpResult16 = require("../../../../../_runtime/metro/01652__.js");
  const items4 = [closure_29, sharedValue];
  _require = undefined;
  [tmp28, tmp29] = items4;
  class PremiumNitroHomeTsx1 {
    constructor() {
      obj = { bottom: closure_0.get() };
      return obj;
    }
  }
  const items5 = [tmp29];
  PremiumNitroHomeTsx1.__closure = items5;
  PremiumNitroHomeTsx1.__workletHash = 8299776735080;
  PremiumNitroHomeTsx1.__initData = tmp28;
  const items6 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = require("../../../../../_runtime/metro/01652__.js").useAnimatedStyle(PremiumNitroHomeTsx1);
  const effect1 = obj5.useEffect(() => {
    if (!stateFromStores) {
      const obj = _mod1652;
      const result = sharedValue.set(
        obj.withDelay(500, spring_spring.withSpring(c0 + 8, { duration: 1333, dampingRatio: 0.4 })),
      );
    }
  }, items6);
  const tmpResult17 = require("../../../../../_runtime/metro/01652__.js");
  const theme = require("shared").useThemeContext().theme;
  const tmpResult18 = require("shared");
  const isThemeDarkResult = require("shared").isThemeDark(theme);
  const tmpResult19 = require("shared");
  const tmp6Result = navigation(15217);
  const tmp6ResultResult = navigation(15217)(tmp19.endsAt, require("useFPDurationLeft").CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram =
    require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram();
  const items7 = [isEligibleSenderForReferralProgram];
  const effect2 = obj5.useEffect(() => {
    if (
      !obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)
    ) {
      const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
        obj2,
      );
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    obj = DismissibleContentUnsafeUtils;
    if (
      !tmpResult4.UNSAFE_isDismissibleContentDismissed(
        dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE,
      )
    ) {
      const obj3 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE,
        obj3,
      );
      const tmpResult5 = DismissibleContentUnsafeUtils;
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = ReferralProgramUtils.markReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult6 = ReferralProgramUtils;
    }
    tmpResult4 = DismissibleContentUnsafeUtils;
  }, items7);
  const effect3 = obj5.useEffect(() => {
    if (
      !obj.UNSAFE_isDismissibleContentDismissed(
        _undefined(_undefined2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD,
      )
    ) {
      const result = _undefined(_undefined2[47]).UNSAFE_markDismissibleContentAsDismissed(
        _undefined(_undefined2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD,
      );
      const tmpResult = _undefined(_undefined2[47]);
    }
    obj = _undefined(_undefined2[47]);
  }, []);
  const tmpResult20 = require("useIsEligibleSenderForReferralProgram");
  promotionMarketingSurface = require("usePromotionMarketingSurface").usePromotionMarketingSurface(
    tmp(9561).MarketingSurfaceType.PREMIUM_TAB,
  );
  const items8 = [promotionMarketingSurface];
  const effect4 = obj5.useEffect(() => {
    let isDismissed = null == promotionMarketingSurface;
    if (!isDismissed) {
      isDismissed = DismissibleContentUnsafeUtils.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        promotionMarketingSurface.promotionId,
      ).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const result = DismissibleContentUtils.markSnowflakeBoundDismissibleContentAsDismissed(
        dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        promotionMarketingSurface.promotionId,
        obj3,
      );
    }
  }, items8);
  const obj11 = { style: null, children: null };
  const items9 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj11.style = items9;
  const obj12 = { style: tmp5.background, source: null };
  const tmpResult21 = require("usePromotionMarketingSurface");
  obj12.source = navigation(15218);
  const items10 = [
    closure_16(navigation(5957), obj12),
    closure_16(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }),
    ,
    ,
  ];
  let tmp24Result = tmp19.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp24Result) {
    const obj13 = { countdownText: tmp6ResultResult };
    tmp24Result = closure_16(tmp6(15219), obj13);
  }
  items10[2] = tmp24Result;
  const obj14 = { style: tmp5.tabContent, children: null };
  const items11 = [
    closure_16(require("SegmentedControlPages").SegmentedControlPages, {
      state: segmentedControlState,
      nativeGesture: memo,
    }),
  ];
  if (tmp24Result4) {
    const obj15 = { style: tmp5.backSwipeSensor };
    tmp24Result4 = closure_16(tmp41, obj15);
  }
  items11[1] = tmp24Result4;
  obj14.children = items11;
  items10[3] = closure_17(sharedValue, obj14);
  const obj16 = { style: animatedStyle, onLayout: callback, children: null };
  const tmp6Result3 = navigation(5957);
  const items12 = [
    closure_16(sharedValue, {
      style: tmp5.segmentedControlActual,
      ref,
      onLayout,
      children: closure_16(require("SegmentedControl").SegmentedControl, {
        state: segmentedControlState,
        variant: "experimental_Small",
      }),
    }),
    ,
  ];
  let tmp24Result5 = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    const obj18 = { start: null, end: null, colors: null, style: null };
    ({ START: obj29.start, END: obj29.end } = closure_12);
    obj18.colors = ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"];
    const items13 = [tmp5.segmentedControlVirtual];
    const obj19 = { height: tmp12, zIndex: 2 };
    items13[1] = obj19;
    obj18.style = items13;
    tmp24Result5 = closure_16(tmp6(5830), obj18);
  }
  items12[1] = tmp24Result5;
  const obj17 = {
    style: tmp5.segmentedControlActual,
    ref,
    onLayout,
    children: closure_16(require("SegmentedControl").SegmentedControl, {
      state: segmentedControlState,
      variant: "experimental_Small",
    }),
  };
  if (tmpResult22.isAndroid()) {
    const obj20 = { style: null };
    const items14 = [, ,];
    ({ segmentedControlVirtual: arr16[0], androidSegmentedControlBackground: arr16[1] } = tmp5);
    const obj21 = { height: tmp12, zIndex: 1, overflow: "hidden" };
    items14[2] = obj21;
    obj20.style = items14;
    let tmp24Result6 = closure_16(tmp41, obj20);
  } else {
    let num4 = 0.5;
    if (isThemeDarkResult) {
      num4 = 0.2;
    }
    const obj22 = { blurAmount: num4, style: null, blurTheme: null, tintColor: null };
    const items15 = [tmp5.segmentedControlVirtual];
    const obj23 = { height: tmp12, zIndex: 1, overflow: "hidden" };
    items15[1] = obj23;
    obj22.style = items15;
    obj22.blurTheme = theme;
    let tmp47;
    if (theme === constants2.ONYX) {
      tmp47 = closure_20;
    }
    obj22.tintColor = tmp47;
    tmp24Result6 = closure_16(tmp6(5842), obj22);
    const tmp6Result4 = tmp6(5842);
  }
  items12[2] = tmp24Result6;
  obj16.children = items12;
  items10[4] = closure_17(navigation(1652).View, obj16);
  obj11.children = items10;
  return closure_17(sharedValue, obj11);
}
export const BACK_BUTTON_SIZE = 24;
