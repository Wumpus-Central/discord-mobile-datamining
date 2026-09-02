// discord_app/modules/user_settings/premium/native/PremiumNitroHome.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import frozenDefault from "../../../premium/native/PremiumPerkCard.tsx";
import useScrollToSectionDefault from "useScrollToSection.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../a11y/AccessibilityStore.tsx";
import closure_8 from "../../../../stores/billing/SubscriptionStore.tsx";
import closure_9 from "PremiumNitroNavigationStore.tsx";
import { NitroHomeSectionId } from "PremiumNitroNavigationStore.tsx";
import ME from "../../../../Constants.tsx";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import { FractionalPremiumStates } from "../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../../../../_runtime/00686_n.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { usePromotionMarketingComponent } from "../../../premium/hooks/usePromotionMarketingComponent.tsx";
import { frozen } from "../../../premium/native/PremiumPerkCard.tsx";
import { useIsEligibleSenderForReferralProgram } from "../../../premium/referral_program/hooks/useIsEligibleSenderForReferralProgram.tsx";

const require = arg1;
function NitroHomeHeader(arg0) {
  ({ subscription, onClose } = arg0);
  let navigation;
  const tmp = callback4();
  let obj = onClose(1498);
  navigation = obj.useNavigation();
  obj1 = onClose(13297);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = obj1.useMobileNitroManageSubscriptionsSettingsExperiment({
    location: "NitroHomeHeader",
  });
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
  obj1 = {
    style: tmp.backButtonWrapper,
    onPress: callback,
    children: callback2(tmp2(5507).ArrowLargeLeftIcon, { size: "md", color: "white" }),
  };
  const items1 = [callback2(onClose(5076).PressableOpacity, obj1), ,];
  const obj2 = {
    variant: "display-sm",
    color: "text-overlay-light",
    style: tmp.headerText,
    accessibilityRole: "header",
    children: null,
  };
  const intl = tmp2(1233).intl;
  obj2[4] = intl.string(onClose(1233).t["BnquQ/"]);
  items1[1] = callback2(onClose(4474).Text, obj2);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj3 = { style: null };
    obj3[0] = tmp.backButtonWrapper;
    let tmp11Result = tmp11(tmp10, obj3);
  } else {
    const obj4 = { style: null, onPress: null, children: null };
    obj4[0] = tmp.backButtonWrapper;
    obj4[1] = function onPress() {
      let obj = navigation(closure_1_2[19]);
      obj = {
        current_component: closure_1_23.YOUR_NITRO_HOME,
        next_component: closure_1_23.YOUR_NITRO_PLAN,
        interaction_component: "header_settings_icon",
      };
      obj.track(closure_1_11.NITRO_HOME_NAVIGATION, obj);
      navigation.push(closure_1_14.PREMIUM_MANAGE_PLAN);
    };
    obj4[2] = tmp11(tmp2(6249).SettingsIcon, { size: "md", color: "white" });
    tmp11Result = tmp11(tmp2(5076).PressableOpacity, obj4);
  }
  tmp11Result = !!hasActiveTrial;
  items1[2] = tmp11Result;
  obj[1] = items1;
  const items2 = [closure_18(closure_5, obj)];
  if (tmp11Result) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.pillParent;
    obj5[1] = tmp11(tmp2(13298).PremiumReferralTrialPill, { hasExtraMargin: true });
    tmp11Result = tmp11(tmp10, obj5);
  }
  items2[1] = tmp11Result;
  obj[1] = items2;
  return closure_18(closure_5, obj);
}
function NewTab(arg0) {
  let _require;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = callback5();
  let obj = useIsEligibleSenderForReferralProgram;
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  obj1 = frozen;
  const premiumPerkCard = obj1.usePremiumPerkCard();
  let obj2 = usePromotionMarketingComponent;
  const promotionMarketingComponent = obj2.usePromotionMarketingComponent(
    require("../../../../../discord_common/js/shared/shared-constants/MarketingComponentType.tsx")
      .MarketingComponentType.MARKETING_PAGE_BANNER,
  );
  _require = React.useRef(false);
  const ref = React.useRef(null);
  const callback = React.useCallback((nativeEvent) => {
    let obj = callback(closure_1_2[27]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: closure_1_19, hasTrackedScrolledToBottom: callback };
    return obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = {
    ref,
    contentContainerStyle: items,
    showsVerticalScrollIndicator: false,
    onScrollEndDrag: callback,
    onMomentumScrollEnd: callback,
    scrollEventThrottle: 0,
    children: null,
  };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
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
    let tmp8Result = tmp8(13281);
    obj1[0] = tmp2(13299).PERK_CARD_SIZES[tmp2(undefined, 13299).PerkCardVariant.WIDE].width;
    obj[0] = obj1;
    obj[1] = tmp.marketingBannerCard;
    obj[2] = promotionMarketingComponent.properties.properties.marketingPageBanner;
    ({ id: obj5[4], promotionId: obj5[5] } = promotionMarketingComponent);
    tmp12 = callback2(tmp8Result, obj);
  }
  const items1 = [
    tmp12,
    callback2(
      require("../../../premium/tiered_tenure_badging/native/TieredTenureBadgePerkCard.tsx").TieredTenureBadgePerkCard,
      {},
    ),
    ,
    ,
    ,
    ,
  ];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    obj2 = { onLayout: null, children: null };
    obj2[0] = useScrollToSectionDefault(ref, scrollToSectionId).createSectionLayoutHandler(
      NitroHomeSectionId.REFERRAL_PROGRAM,
    );
    obj2[1] = tmp15(tmp2(13326).ReferralProgramPerkCard, {});
    tmp15Result = tmp15(closure_5, obj2);
  }
  items1[2] = tmp15Result;
  tmp8Result = tmp8(13299);
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = callback2(tmp8Result, {});
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = callback2(frozenDefault, {});
  const obj5 = {};
  const obj3 = {};
  const obj4 = {};
  const tmp10 = closure_18;
  const tmp11 = closure_6;
  const tmp8Result1 = frozenDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = callback2(frozenDefault, obj5);
  const obj6 = {};
  const tmp8Result2 = frozenDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = callback2(frozenDefault, obj6);
  obj[6] = items1;
  return tmp10(tmp11, obj);
}
function PerksTab(extraBottomHeight) {
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  let _require;
  importDefault = undefined;
  let obj = frozen;
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = React.useCallback((section_name) => {
    let obj = callback2(table[19]);
    obj = { section_name };
    obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj);
  }, []);
  importDefault = React.useRef(false);
  const callback = React.useCallback((nativeEvent) => {
    let obj = callback(closure_1_2[27]);
    obj = { nativeEvent: nativeEvent.nativeEvent, trackedType: closure_1_20, hasTrackedScrolledToBottom: closure_1 };
    const result = obj.trackIfScrolledToBottom(obj);
  }, []);
  obj = {
    contentContainerStyle: items,
    showsVerticalScrollIndicator: false,
    onScrollEndDrag: callback,
    onMomentumScrollEnd: callback,
    scrollEventThrottle: 0,
    children: null,
  };
  items = [callback6().featureCardsContainer, { paddingBottom: extraBottomHeight.extraBottomHeight }];
  obj = { title: null, perks: null, onItemChange: null };
  const tmp = callback6();
  const tmp6 = closure_18;
  const tmp7 = closure_6;
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx").t.DOb6x0);
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
    obj[1] = items3;
    obj[2] = function onItemChange(arg0) {
      return callback(closure_1_22.CAROUSEL_SECTION_NAME_1, arg0);
    };
    const items4 = [tmp8(tmp10, obj), , ,];
    obj1 = { title: null, perks: null, onItemChange: null };
    let tmp9Result = tmp9(13338);
    const intl2 = tmp2(1233).intl;
    obj1[0] = intl2.string(tmp2(1233).t["+vt7w9"]);
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
    obj1[1] = items7;
    obj1[2] = function onItemChange(arg0) {
      return callback(closure_1_22.CAROUSEL_SECTION_NAME_2, arg0);
    };
    items4[1] = tmp8(tmp9Result, obj1);
    const obj2 = { title: null, perks: null, onItemChange: null };
    tmp9Result = tmp9(13338);
    const intl3 = tmp2(1233).intl;
    obj2[0] = intl3.string(tmp2(1233).t.LgHbnL);
    const items8 = [, , , ,];
    ({
      memberPricing: arr9[0],
      earlyAccess: arr9[1],
      largeUploads: arr9[2],
      hdVideo: arr9[3],
      superReactions: arr9[4],
    } = premiumPerkCard);
    obj2[1] = items8;
    obj2[2] = function onItemChange(arg0) {
      return callback(closure_1_22.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = tmp8(tmp9Result, obj2);
    const obj3 = { title: null, perks: null, onItemChange: null };
    tmp2Result = tmp2(13246);
    const intl4 = tmp2(1233).intl;
    obj3[0] = intl4.string(tmp2(1233).t.LTaxu9);
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
      obj3[1] = items11;
      obj3[2] = function onItemChange(arg0) {
        return callback(closure_1_22.CAROUSEL_SECTION_NAME_4, arg0);
      };
      items4[3] = tmp8(tmp9Result1, obj3);
      obj[5] = items4;
      return tmp6(tmp7, obj);
    }
    tmp9Result1 = tmp9(13338);
  }
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({
  AnalyticEvents: unpackModuleId,
  HorizontalGradient: closure_12,
  ThemeTypes: map1,
  UserSettingsSections: closure_14,
} = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
NewTab = "NewTab";
PerksTab = "PerksTab";
const importDefaultResultResult = importDefaultResult(ThemesDefault.unsafe_rawColors.PLUM_24);
let closure_21 = importDefaultResult(ThemesDefault.unsafe_rawColors.PLUM_24).alpha(0.6).hex();
let closure_22 = {
  CAROUSEL_SECTION_NAME_1: "NitroFavorites",
  CAROUSEL_SECTION_NAME_2: "MakeDiscordYours",
  CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord",
  CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant",
};
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
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
obj = { display: "flex", width: "100%", height: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
obj[0] = obj;
obj[1] = { position: "absolute", width: "100%" };
obj[2] = { flex: 1 };
obj[3] = { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" };
obj[4] = { zIndex: 3, paddingHorizontal: 16 };
const alphaResult = importDefaultResult(ThemesDefault.unsafe_rawColors.PLUM_24).alpha(0.6);
obj[5] = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: ThemesDefault.radii.lg };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
obj[6] = createCacheKey;
obj[7] = { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" };
let closure_24 = createCacheKey.createStyles(obj);
let obj3 = {
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
let obj1 = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: ThemesDefault.radii.lg };
obj3[2] = {
  width: 24,
  height: 24,
  borderRadius: ThemesDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
};
obj3[3] = { textAlign: "center", width: "80%", lineHeight: 28 };
obj3[4] = { display: "flex", flexDirection: "column", alignItems: "center" };
let closure_25 = createCacheKey.createStyles(obj3);
let obj5 = {
  featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 },
  marketingBannerCard: null,
};
let obj4 = {
  width: 24,
  height: 24,
  borderRadius: ThemesDefault.radii.lg,
  alignItems: "center",
  justifyContent: "center",
};
obj5[1] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
let closure_27 = createCacheKey.createStyles(obj5);
let closure_29 = createCacheKey.createStyles({
  featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 },
});
let closure_31 = {
  code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}",
};
let obj6 = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm };
let result = require("set").fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

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
  let obj = bottom(13293);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(13294).OpenNitroTriggerPoint);
  obj1 = bottom(6257);
  const giftCardMobileConsumptionHalfsheet = obj1.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = callback3();
  bottom = navigation(1627)().bottom;
  let obj2 = bottom(13233);
  const youBarSettingsCustomHeaderPaddingTop = obj2.useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = bottom(1498);
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
  let obj5 = bottom(586);
  const items1 = [isEligibleSenderForReferralProgram];
  stateFromStores = obj5.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  const tmp13 = callback(stateFromStores.useState(0), 2);
  [tmp18, c5] = callback(stateFromStores.useState(true), 2);
  let obj6 = bottom(586);
  const items2 = [promotionMarketingComponent];
  const stateFromStores1 = obj6.useStateFromStores(items2, () =>
    promotionMarketingComponent.getPremiumTypeSubscription(),
  );
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      let obj = navigation(_undefined[19]);
      obj = { target: null };
      obj[0] = closure_1_19;
      obj.track(closure_1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(true);
    } else if (1 === arg0) {
      obj = { target: null };
      obj[0] = closure_1_20;
      navigation(_undefined[19]).track(closure_1_11.MOBILE_NITRO_HOME_TAB_SWITCHED, obj);
      _undefined3(false);
      const obj3 = navigation(_undefined[19]);
    }
  }, []);
  const tmp21 = navigation(7150)();
  let obj7 = bottom(7983);
  const isInReverseTrial = obj7.useIsInReverseTrial();
  let obj8 = bottom(13339);
  const maybeFetchTieredTenureBadgeData = obj8.useMaybeFetchTieredTenureBadgeData();
  const field = closure_9.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(
    () => () => {
      closure_9.resetState();
    },
    [],
  );
  let obj9 = bottom(9273);
  obj = { items: null, pageWidth: null, onPageChange: null };
  obj = { label: null, id: null, page: null };
  const intl = bottom(1233).intl;
  obj[0] = intl.string(bottom(1233).t.tahjbP);
  const intl2 = bottom(1233).intl;
  obj[1] = intl2.string(bottom(1233).t.tahjbP);
  obj1 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  obj[2] = callback2(NewTab, obj1);
  const items3 = [obj];
  obj2 = { label: null, id: null, page: null };
  const intl3 = bottom(1233).intl;
  obj2[0] = intl3.string(bottom(1233).t.w3RBdW);
  const intl4 = bottom(1233).intl;
  obj2[1] = intl4.string(bottom(1233).t.w3RBdW);
  obj3 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  obj2[2] = callback2(PerksTab, obj3);
  items3[1] = obj2;
  obj[0] = items3;
  obj[1] = tmp11;
  obj[2] = callback2;
  const segmentedControlState = obj9.useSegmentedControlState(obj);
  let obj15 = bottom(4217);
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = obj15.useSharedValue(num);
  let tmpResult = tmp(4217);
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
      const result = sharedValue.set(
        obj.withDelay(
          500,
          bottom(_undefined[44]).withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 }),
        ),
      );
      const obj2 = bottom(_undefined[44]);
    }
  }, items4);
  tmpResult = tmp(1362);
  const theme = tmpResult.useThemeContext().theme;
  const tmp17 = callback(stateFromStores.useState(true), 2);
  const isThemeDarkResult = bottom(1362).isThemeDark(theme);
  let tmp6Result = tmp6(13340);
  let tmpResult1 = bottom(1362);
  const tmp6ResultResult = tmp6Result(tmp21.endsAt, bottom(13340).CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram = bottom(7974).useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj4.useEffect(() => {
    if (
      !obj.UNSAFE_isDismissibleContentDismissed(
        bottom(_undefined[48]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
      )
    ) {
      let tmpResult = tmp(tmp2[47]);
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(
        tmp(tmp2[48]).DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE,
      );
    }
    tmpResult = tmp(tmp2[47]);
    if (
      !tmpResult.UNSAFE_isDismissibleContentDismissed(
        bottom(_undefined[48]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE,
      )
    ) {
      const result1 = tmp(tmp2[47]).UNSAFE_markDismissibleContentAsDismissed(
        tmp(tmp2[48]).DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE,
      );
      const tmpResult1 = tmp(tmp2[47]);
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = tmp(tmp2[49]).markReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult2 = tmp(tmp2[49]);
    }
  }, items5);
  const effect3 = obj4.useEffect(() => {
    if (
      !obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)
    ) {
      const result = tmp(tmp2[47]).UNSAFE_markDismissibleContentAsDismissed(
        tmp(tmp2[48]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD,
      );
      const tmpResult = tmp(tmp2[47]);
    }
  }, []);
  let tmpResult2 = bottom(7974);
  promotionMarketingComponent = bottom(13235).usePromotionMarketingComponent(
    tmp(10736).MarketingComponentType.PREMIUM_TAB,
  );
  const items6 = [promotionMarketingComponent];
  const effect4 = obj4.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent;
    if (!isDismissed) {
      isDismissed = "premiumTab" !== tmp.properties.properties.oneofKind;
    }
    if (!isDismissed) {
      let obj = bottom(_undefined[47]);
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(
        bottom(_undefined[48]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        tmp.promotionId,
      ).isDismissed;
    }
    if (!isDismissed) {
      obj = { dismissAction: null };
      obj[0] = closure_1_15.AUTO_DISMISS;
      const result = bottom(_undefined[50]).markSnowflakeBoundDismissibleContentAsDismissed(
        bottom(_undefined[48]).DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE,
        tmp.promotionId,
        obj,
      );
      const obj2 = bottom(_undefined[50]);
    }
  }, items6);
  obj4 = { style: items7, children: null };
  items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  obj5 = { style: tmp5.background, source: null };
  tmp6Result = tmp6(5501);
  obj5[1] = navigation(13341);
  const items8 = [
    callback2(tmp6Result, obj5),
    callback2(NitroHomeHeader, { onClose: onClose.onClose, subscription: stateFromStores1 }),
    ,
    ,
  ];
  let tmp26Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp26Result) {
    obj6 = { countdownText: null };
    obj6[0] = tmp6ResultResult;
    tmp26Result = tmp26(tmp6(13342), obj6);
  }
  items8[2] = tmp26Result;
  obj7 = { style: tmp5.tabContent, children: null };
  const items9 = [callback2(bottom(9281).SegmentedControlPages, { state: segmentedControlState })];
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
  const tmpResult3 = bottom(13235);
  const items11 = [
    callback2(c5, {
      style: tmp5.segmentedControlActual,
      onLayout: callback,
      children: callback2(bottom(9784).SegmentedControl, {
        state: segmentedControlState,
        variant: "experimental_Small",
      }),
    }),
    ,
  ];
  let tmp26Result1 = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    const obj11 = { start: null, end: null, colors: null, style: null };
    ({ START: obj29[0], END: obj29[1] } = closure_12);
    obj11[2] = ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"];
    const items12 = [tmp5.segmentedControlVirtual];
    const obj12 = { height: null, zIndex: 2 };
    obj12[0] = tmp14;
    items12[1] = obj12;
    obj11[3] = items12;
    tmp26Result1 = tmp26(tmp6(4940), obj11);
  }
  items11[1] = tmp26Result1;
  const obj10 = {
    style: tmp5.segmentedControlActual,
    onLayout: callback,
    children: callback2(bottom(9784).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }),
  };
  if (tmpResult4.isAndroid()) {
    const obj13 = { style: null };
    const items13 = [, ,];
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
    const items14 = [tmp5.segmentedControlVirtual];
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
    tmp26Result2 = tmp26(tmp6(4917), obj15);
    const tmp6Result1 = tmp6(4917);
  }
  items11[2] = tmp26Result2;
  obj9[2] = items11;
  items8[4] = closure_18(navigation(4217).View, obj9);
  obj4[1] = items8;
  return closure_18(c5, obj4);
}
export const BACK_BUTTON_SIZE = 24;
