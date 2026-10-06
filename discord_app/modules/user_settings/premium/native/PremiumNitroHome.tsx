// === Module 13219: PremiumNitroHome ===

// Module 13219 (PremiumNitroHome)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2037 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4704 */;
import spring from "spring" /* 5604 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 7737 */;
import PremiumNitroNavigationStore2 from "PremiumNitroNavigationStore" /* 13220 */;
import PremiumPerkCardDefault from "PremiumPerkCard" /* 13223 */;
import useScrollToSectionDefault from "useScrollToSection" /* 13248 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 13249 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 13250 */;
import PremiumPerkCarouselDefault from "PremiumPerkCarousel" /* 13279 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import SubscriptionStore from "SubscriptionStore" /* 4540 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import module_683 from "module_683" /* 683 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const PremiumNitroNavigationStore = PremiumNitroNavigationStore2;
let _require, dependencyMap, importDefault, navigation, set;

let closure_12;
let closure_14;
let closure_17;
let closure_18;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj5;
let rect;
let size;
let size1;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const NitroHomeSectionId = PremiumNitroNavigationStore2.NitroHomeSectionId;
({ AnalyticEvents: unpackModuleId, HorizontalGradient: closure_12, ThemeTypes: map1, UserSettingsSections: closure_14 } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
const NewTab = "NewTab";
const PerksTab = "PerksTab";
const importDefaultResultResult = module_683(nativeDefault.unsafe_rawColors.PLUM_24);
const alphaResult = importDefaultResultResult.alpha(0.6);
let closure_21 = alphaResult.hex();
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let createStyles = createStyles_mod;
let obj = { container: size, background: { position: "absolute", width: "100%" }, tabContent: { flex: 1 }, featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center" }, segmentedControlActual: { zIndex: 3, paddingHorizontal: 16 }, segmentedControlVirtual: rect, androidSegmentedControlBackground: obj2, backSwipeSensor: { position: "absolute", top: 0, left: 0, height: "100%", width: "10%" } };
size = { display: "flex", width: "100%", height: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 16, right: 16, borderRadius: nativeDefault.radii.lg };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_24 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: size1, headerText: { textAlign: "center", width: "80%", lineHeight: 28 }, pillParent: { display: "flex", flexDirection: "column", alignItems: "center" } };
size1 = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
let closure_25 = createStyles.createStyles(obj3);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let contentContainer;
  let first;
  let headerContainer;
  let items;
  let items1;
  let onClose;
  let subscription;
  let obj = onClose(576);
  const cResult = obj.c(27);
  ({ subscription, onClose } = arg0);
  const tmp4 = closure_25();
  let obj2 = onClose(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "NitroHomeHeader" };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmpResult = onClose(13221);
  const mobileNitroManageSubscriptionsSettingsExperiment = tmpResult.useMobileNitroManageSubscriptionsSettingsExperiment(first);
  if (cResult[1] === navigation) {
    let tmp8;
    let tmp12;
    if (cResult[2] === onClose) {
      tmp8 = cResult[3];
    }
    let hasActiveTrial;
    if (subscription != null) {
      hasActiveTrial = subscription.hasActiveTrial;
    }
    const _Symbol = Symbol;
    ({ contentContainer, headerContainer } = tmp4);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = closure_17(onClose(6021).ArrowLargeLeftIcon, { size: "md", color: "white" });
      cResult[4] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[4];
    }
    if (cResult[5] === tmp8) {
      let tmp18;
      let tmp20;
      let tmp24Result;
      const _Symbol2 = Symbol;
      const headerText = tmp4.headerText;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onClose(1126).intl;
        const stringResult = intl.string(onClose(1126).t["BnquQ/"]);
        cResult[8] = stringResult;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] !== tmp4.headerText) {
        const obj4 = { variant: "display-sm", color: "text-overlay-light", style: headerText, accessibilityRole: "header", children: tmp18 };
        const tmp22 = closure_17(onClose(4892).Text, obj4);
        cResult[9] = tmp4.headerText;
        cResult[10] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] === navigation) {
        if (cResult[12] === mobileNitroManageSubscriptionsSettingsExperiment) {
          let tmp23;
          if (cResult[13] === tmp4.backButtonWrapper) {
            tmp23 = cResult[14];
          }
          if (cResult[15] === tmp4.headerContainer) {
            if (cResult[16] === tmp23) {
              if (cResult[17] === tmp15) {
                let tmp27;
                if (cResult[18] === tmp20) {
                  tmp27 = cResult[19];
                }
                if (cResult[20] === !(!hasActiveTrial)) {
                  let tmp32;
                  if (cResult[21] === tmp4.pillParent) {
                    tmp32 = cResult[22];
                  }
                  if (cResult[23] === tmp4.contentContainer) {
                    if (cResult[24] === tmp27) {
                      let tmp36;
                      if (cResult[25] === tmp32) {
                        tmp36 = cResult[26];
                      }
                      return tmp36;
                    }
                  }
                  const obj5 = { style: contentContainer, children: items };
                  items = [tmp27, tmp32];
                  const tmp39 = closure_18(closure_5, obj5);
                  cResult[23] = tmp4.contentContainer;
                  cResult[24] = tmp27;
                  cResult[25] = tmp32;
                  cResult[26] = tmp39;
                  tmp36 = tmp39;
                }
                let tmp33 = tmp31;
                if (tmp33) {
                  const obj6 = { style: tmp4.pillParent, children: closure_17(onClose(13222).PremiumReferralTrialPill, { hasExtraMargin: true }) };
                  tmp33 = closure_17(closure_5, obj6);
                }
                cResult[20] = !(!hasActiveTrial);
                cResult[21] = tmp4.pillParent;
                cResult[22] = tmp33;
                tmp32 = tmp33;
              }
            }
          }
          const obj7 = { style: headerContainer, children: items1 };
          items1 = [tmp15, tmp20, tmp23];
          const tmp30 = closure_18(closure_5, obj7);
          cResult[15] = tmp4.headerContainer;
          cResult[16] = tmp23;
          cResult[17] = tmp15;
          cResult[18] = tmp20;
          cResult[19] = tmp30;
          tmp27 = tmp30;
        }
      }
      if (mobileNitroManageSubscriptionsSettingsExperiment) {
        const obj8 = { style: tmp4.backButtonWrapper };
        tmp24Result = closure_17(closure_5, obj8);
      } else {
        const obj9 = {
          style: tmp4.backButtonWrapper,
          onPress() {
                  const obj = AnalyticsUtilsDefault;
                  const obj2 = { current_component: unpackModuleId.YOUR_NITRO_HOME, next_component: unpackModuleId.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" };
                  obj.track(unpackModuleId.NITRO_HOME_NAVIGATION, obj2);
                  navigation.push(constants.PREMIUM_MANAGE_PLAN);
                },
          children: closure_17(onClose(6893).SettingsIcon, { size: "md", color: "white" })
        };
        const PressableOpacity = onClose(5916).PressableOpacity;
        tmp24Result = closure_17(PressableOpacity, obj9);
      }
      cResult[11] = navigation;
      cResult[12] = mobileNitroManageSubscriptionsSettingsExperiment;
      cResult[13] = tmp4.backButtonWrapper;
      cResult[14] = tmp24Result;
      tmp23 = tmp24Result;
    }
    const obj10 = { style: tmp4.backButtonWrapper, onPress: tmp8, children: tmp12 };
    cResult[5] = tmp8;
    cResult[6] = tmp4.backButtonWrapper;
    cResult[7] = closure_17(onClose(5916).PressableOpacity, obj10);
    closure_17(onClose(5916).PressableOpacity, obj10);
    class S {
      constructor() {
        if (undefined !== onClose) {
          onClose();
        } else {
          navigation.pop();
        }
      }
    }
  }
  class S {
    constructor() {
      if (undefined !== onClose) {
        onClose();
      } else {
        navigation.pop();
      }
    }
  }
  cResult[1] = navigation;
  cResult[2] = onClose;
  cResult[3] = S;
  tmp8 = S;
}) : ((arg0) => {
  let intl;
  let items1;
  let items2;
  let onClose;
  let subscription;
  let tmp11Result;
  ({ subscription, onClose } = arg0);
  const tmp = closure_25();
  let obj = onClose(1490);
  navigation = obj.useNavigation();
  let obj2 = onClose(13221);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = obj2.useMobileNitroManageSubscriptionsSettingsExperiment({ location: "NitroHomeHeader" });
  let hasActiveTrial;
  const callback = react.useCallback(() => {
    if (undefined !== onClose) {
      onClose();
    } else {
      navigation.pop();
    }
  }, items);
  if (subscription != null) {
    hasActiveTrial = subscription.hasActiveTrial;
  }
  const obj3 = { style: tmp.contentContainer, children: items2 };
  const obj4 = { style: tmp.headerContainer, children: items1 };
  const obj5 = { style: tmp.backButtonWrapper, onPress: callback, children: closure_17(onClose(6021).ArrowLargeLeftIcon, { size: "md", color: "white" }) };
  const tmp8 = !hasActiveTrial;
  const PressableOpacity = onClose(5916).PressableOpacity;
  items1 = [closure_17(PressableOpacity, obj5), , ];
  const obj6 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: intl.string(onClose(1126).t["BnquQ/"]) };
  const Text = onClose(4892).Text;
  intl = onClose(1126).intl;
  items1[1] = closure_17(Text, obj6);
  if (mobileNitroManageSubscriptionsSettingsExperiment) {
    const obj7 = { style: tmp.backButtonWrapper };
    tmp11Result = closure_17(closure_5, obj7);
  } else {
    const obj8 = {
      style: tmp.backButtonWrapper,
      onPress() {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { current_component: unpackModuleId.YOUR_NITRO_HOME, next_component: unpackModuleId.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" };
          obj.track(unpackModuleId.NITRO_HOME_NAVIGATION, obj2);
          navigation.push(constants.PREMIUM_MANAGE_PLAN);
        },
      children: closure_17(onClose(6893).SettingsIcon, { size: "md", color: "white" })
    };
    const PressableOpacity2 = onClose(5916).PressableOpacity;
    tmp11Result = closure_17(PressableOpacity2, obj8);
  }
  let tmp11Result2 = !tmp8;
  items1[2] = tmp11Result;
  items2 = [closure_18(closure_5, obj4), ];
  if (tmp11Result2) {
    const obj9 = { style: tmp.pillParent, children: closure_17(onClose(13222).PremiumReferralTrialPill, { hasExtraMargin: true }) };
    tmp11Result2 = closure_17(closure_5, obj9);
  }
  items2[1] = tmp11Result2;
  return closure_18(closure_5, obj3);
});
createStyles = createStyles_mod;
let obj4 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: obj5 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let closure_27 = createStyles.createStyles(obj4);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? ((extraBottomHeight) => {
  let first;
  let hasTrackedScrolledToBottom;
  let items;
  let obj22;
  let tmp11;
  let obj = require("react");
  const cResult = obj.c(29);
  extraBottomHeight = extraBottomHeight.extraBottomHeight;
  const scrollToSectionId = extraBottomHeight.scrollToSectionId;
  const tmp4 = closure_27();
  let obj2 = require("useIsEligibleSenderForReferralProgram");
  const isEligibleSenderForReferralProgram = obj2.useIsEligibleSenderForReferralProgram();
  const obj3 = require("PremiumPerkCard");
  const premiumPerkCard = obj3.usePremiumPerkCard();
  const obj4 = require("usePromotionMarketingComponent");
  const promotionMarketingComponent = obj4.usePromotionMarketingComponent(require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = react.useRef(false);
  const ref = react.useRef(null);
  const createSectionLayoutHandler = useScrollToSectionDefault(ref, scrollToSectionId).createSectionLayoutHandler;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      const obj = PremiumNitroHomeUtils;
      const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: NewTab, hasTrackedScrolledToBottom };
      return obj.trackIfScrolledToBottom(obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== extraBottomHeight) {
    const obj5 = { paddingBottom: extraBottomHeight };
    cResult[1] = extraBottomHeight;
    cResult[2] = obj5;
    tmp11 = obj5;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp4.featureCardsContainer) {
    let tmp12;
    if (cResult[4] === tmp11) {
      tmp12 = cResult[5];
    }
    if (cResult[6] === promotionMarketingComponent) {
      let tmp13;
      let tmp17;
      if (cResult[7] === tmp4.marketingBannerCard) {
        tmp13 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = closure_17(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {});
        cResult[9] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === createSectionLayoutHandler) {
        let tmp20;
        let tmp25;
        let tmp31;
        let tmp37;
        let tmp43;
        if (cResult[11] === isEligibleSenderForReferralProgram) {
          tmp20 = cResult[12];
        }
        if (cResult[13] !== premiumPerkCard.xboxGamePass) {
          const obj7 = {};
          const tmp9Result = PremiumPerkCardDefault;
          const merged = Object.assign(premiumPerkCard.xboxGamePass);
          const tmp30 = closure_17(tmp9Result, obj7);
          cResult[13] = premiumPerkCard.xboxGamePass;
          cResult[14] = tmp30;
          tmp25 = tmp30;
        } else {
          tmp25 = cResult[14];
        }
        if (cResult[15] !== premiumPerkCard.memberPricing) {
          const obj8 = {};
          const tmp9Result5 = PremiumPerkCardDefault;
          const merged1 = Object.assign(premiumPerkCard.memberPricing);
          const tmp36 = closure_17(tmp9Result5, obj8);
          cResult[15] = premiumPerkCard.memberPricing;
          cResult[16] = tmp36;
          tmp31 = tmp36;
        } else {
          tmp31 = cResult[16];
        }
        if (cResult[17] !== premiumPerkCard.earlyAccess) {
          const obj9 = {};
          const tmp9Result6 = PremiumPerkCardDefault;
          const merged2 = Object.assign(premiumPerkCard.earlyAccess);
          const tmp42 = closure_17(tmp9Result6, obj9);
          cResult[17] = premiumPerkCard.earlyAccess;
          cResult[18] = tmp42;
          tmp37 = tmp42;
        } else {
          tmp37 = cResult[18];
        }
        if (cResult[19] !== premiumPerkCard.superReactions) {
          const obj10 = {};
          const tmp9Result7 = PremiumPerkCardDefault;
          const merged3 = Object.assign(premiumPerkCard.superReactions);
          const tmp48 = closure_17(tmp9Result7, obj10);
          cResult[19] = premiumPerkCard.superReactions;
          cResult[20] = tmp48;
          tmp43 = tmp48;
        } else {
          tmp43 = cResult[20];
        }
        if (cResult[21] === tmp43) {
          if (cResult[22] === tmp12) {
            if (cResult[23] === tmp13) {
              if (cResult[24] === tmp20) {
                if (cResult[25] === tmp25) {
                  if (cResult[26] === tmp31) {
                    let tmp49;
                    if (cResult[27] === tmp37) {
                      tmp49 = cResult[28];
                    }
                    return tmp49;
                  }
                }
              }
            }
          }
        }
        const obj11 = { ref, contentContainerStyle: tmp12, showsVerticalScrollIndicator: false, onScrollEndDrag: first, onMomentumScrollEnd: first, scrollEventThrottle: 0, children: items };
        items = [tmp13, tmp17, tmp20, tmp25, tmp31, tmp37, tmp43];
        const tmp52 = closure_18(closure_6, obj11);
        cResult[21] = tmp43;
        cResult[22] = tmp12;
        cResult[23] = tmp13;
        cResult[24] = tmp20;
        cResult[25] = tmp25;
        cResult[26] = tmp31;
        cResult[27] = tmp37;
        cResult[28] = tmp52;
        tmp49 = tmp52;
      }
      let tmp21 = null;
      if (isEligibleSenderForReferralProgram) {
        const obj12 = { onLayout: createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_17(require("ReferralProgramPerkCard").ReferralProgramPerkCard, {}) };
        tmp21 = closure_17(closure_5, obj12);
      }
      cResult[10] = createSectionLayoutHandler;
      cResult[11] = isEligibleSenderForReferralProgram;
      cResult[12] = tmp21;
      tmp20 = tmp21;
    }
    let tmp14 = null != promotionMarketingComponent && "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
    if (tmp14) {
      const obj13 = { style: obj22, cardStyle: tmp4.marketingBannerCard, bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner, analyticsPage: "Nitro Home Banner Tile", componentId: null, promotionId: null };
      obj22 = { width: require("PremiumPerkCard").PERK_CARD_SIZES[require("PremiumPerkCard").PerkCardVariant.WIDE].width };
      ({ id: obj6.componentId, promotionId: obj6.promotionId } = promotionMarketingComponent);
      const tmp9Result8 = MarketingPageBannerTileDefault;
      tmp14 = closure_17(tmp9Result8, obj13);
    }
    cResult[6] = promotionMarketingComponent;
    cResult[7] = tmp4.marketingBannerCard;
    cResult[8] = tmp14;
    tmp13 = tmp14;
  }
  const items1 = [tmp4.featureCardsContainer, tmp11];
  cResult[3] = tmp4.featureCardsContainer;
  cResult[4] = tmp11;
  cResult[5] = items1;
  tmp12 = items1;
}) : ((arg0) => {
  let extraBottomHeight;
  let hasTrackedScrolledToBottom;
  let items;
  let items1;
  let obj7;
  let scrollToSectionId;
  _require = undefined;
  ({ extraBottomHeight, scrollToSectionId } = arg0);
  const tmp = closure_27();
  let obj = require("useIsEligibleSenderForReferralProgram");
  const isEligibleSenderForReferralProgram = obj.useIsEligibleSenderForReferralProgram();
  let obj2 = require("PremiumPerkCard");
  const premiumPerkCard = obj2.usePremiumPerkCard();
  const obj3 = require("usePromotionMarketingComponent");
  const promotionMarketingComponent = obj3.usePromotionMarketingComponent(require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = react.useRef(false);
  const ref = react.useRef(null);
  const createSectionLayoutHandler = useScrollToSectionDefault(ref, scrollToSectionId).createSectionLayoutHandler;
  const callback = react.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: NewTab, hasTrackedScrolledToBottom };
    return obj.trackIfScrolledToBottom(obj2);
  }, []);
  const obj4 = { ref, contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items1 };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  let tmp12 = null != promotionMarketingComponent && "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
  if (tmp12) {
    const obj6 = { style: obj7, cardStyle: tmp.marketingBannerCard, bannerFields: promotionMarketingComponent.properties.properties.marketingPageBanner, analyticsPage: "Nitro Home Banner Tile", componentId: null, promotionId: null };
    obj7 = { width: require("PremiumPerkCard").PERK_CARD_SIZES[require("PremiumPerkCard").PerkCardVariant.WIDE].width };
    ({ id: obj5.componentId, promotionId: obj5.promotionId } = promotionMarketingComponent);
    const tmp8Result = MarketingPageBannerTileDefault;
    tmp12 = closure_17(tmp8Result, obj6);
  }
  items1 = [tmp12, closure_17(require("TieredTenureBadgePerkCard").TieredTenureBadgePerkCard, {}), , , , , ];
  let tmp15Result = null;
  if (isEligibleSenderForReferralProgram) {
    const obj8 = { onLayout: createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_17(require("ReferralProgramPerkCard").ReferralProgramPerkCard, {}) };
    tmp15Result = closure_17(closure_5, obj8);
  }
  items1[2] = tmp15Result;
  const obj9 = {};
  const tmp8Result5 = PremiumPerkCardDefault;
  const merged = Object.assign(premiumPerkCard.xboxGamePass);
  items1[3] = closure_17(tmp8Result5, obj9);
  const obj10 = {};
  const tmp8Result6 = PremiumPerkCardDefault;
  const merged1 = Object.assign(premiumPerkCard.memberPricing);
  items1[4] = closure_17(tmp8Result6, obj10);
  const obj11 = {};
  const tmp8Result7 = PremiumPerkCardDefault;
  const merged2 = Object.assign(premiumPerkCard.earlyAccess);
  items1[5] = closure_17(tmp8Result7, obj11);
  const obj19 = {};
  const tmp8Result8 = PremiumPerkCardDefault;
  const merged3 = Object.assign(premiumPerkCard.superReactions);
  items1[6] = closure_17(tmp8Result8, obj19);
  return closure_18(closure_6, obj4);
});
createStyles = createStyles_mod;
let closure_29 = createStyles.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
ReactCompilerGating = ReactCompilerGating_mod;
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let extraBottomHeight;
  let first;
  let fractionalState;
  let hasTrackedScrolledToBottom;
  let isInReverseTrial;
  let obj = first(576);
  const cResult = obj.c(55);
  ({ extraBottomHeight, fractionalState, isInReverseTrial } = arg0);
  const tmp4 = closure_29();
  let obj2 = first(13223);
  const premiumPerkCard = obj2.usePremiumPerkCard();
  const tmp = first;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(section_name) {
      const obj = hasTrackedScrolledToBottom(dependencyMap[21]);
      const obj2 = { section_name };
      obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj2);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  importDefault = react.useRef(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
        const result = obj.trackIfScrolledToBottom(obj2);
      }
    }
    cResult[1] = C;
  } else {
    class C {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
        const result = obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (cResult[2] !== extraBottomHeight) {
    class C {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
        const result = obj.trackIfScrolledToBottom(obj2);
      }
    }
    tmp9[0] = extraBottomHeight;
    cResult[2] = extraBottomHeight;
    cResult[3] = tmp9;
  } else {
    class C {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
        const result = obj.trackIfScrolledToBottom(obj2);
      }
    }
  }
  if (cResult[4] === tmp4.featureCardsContainer) {
    class C {
      constructor(nativeEvent) {
        const obj = PremiumNitroHomeUtils;
        const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
        const result = obj.trackIfScrolledToBottom(obj2);
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(nativeEvent) {
          const obj = PremiumNitroHomeUtils;
          const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
          const result = obj.trackIfScrolledToBottom(obj2);
        }
      }
      cResult[7] = obj3.string(tmp(1126).t.DOb6x0);
      const stringResult = obj3.string(tmp(1126).t.DOb6x0);
    } else {
      class C {
        constructor(nativeEvent) {
          const obj = PremiumNitroHomeUtils;
          const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
          const result = obj.trackIfScrolledToBottom(obj2);
        }
      }
    }
    if (cResult[8] === fractionalState) {
      class C {
        constructor(nativeEvent) {
          const obj = PremiumNitroHomeUtils;
          const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
          const result = obj.trackIfScrolledToBottom(obj2);
        }
      }
    }
    if (fractionalState === FractionalPremiumStates.FP_ONLY) {
      class C {
        constructor(nativeEvent) {
          const obj = PremiumNitroHomeUtils;
          const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
          const result = obj.trackIfScrolledToBottom(obj2);
        }
      }
      if (isInReverseTrial) {
        class C {
          constructor(nativeEvent) {
            const obj = PremiumNitroHomeUtils;
            const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
            const result = obj.trackIfScrolledToBottom(obj2);
          }
        }
        tmp17[0] = tmp15;
        tmp17[1] = premiumPerkCard.clientThemes;
      } else {
        class C {
          constructor(nativeEvent) {
            const obj = PremiumNitroHomeUtils;
            const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
            const result = obj.trackIfScrolledToBottom(obj2);
          }
        }
        tmp17[0] = tmp15;
        ({ clientThemes: tmp16[1], greyServerBoosts: tmp16[2] } = premiumPerkCard);
      }
    } else {
      class C {
        constructor(nativeEvent) {
          const obj = PremiumNitroHomeUtils;
          const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
          const result = obj.trackIfScrolledToBottom(obj2);
        }
      }
      ({ customProfile: tmp14[0], clientThemes: tmp14[1], serverBoosts: tmp14[2] } = premiumPerkCard);
    }
    cResult[8] = fractionalState;
    cResult[9] = isInReverseTrial;
    cResult[10] = premiumPerkCard.clientThemes;
    cResult[11] = premiumPerkCard.customProfile;
    cResult[12] = premiumPerkCard.greyServerBoosts;
    cResult[13] = premiumPerkCard.serverBoosts;
    cResult[14] = tmp17;
  }
  const items = [tmp4.featureCardsContainer, tmp9];
  cResult[4] = tmp4.featureCardsContainer;
  cResult[5] = tmp9;
  cResult[6] = items;
}) : ((extraBottomHeight) => {
  let closure_0;
  let fractionalState;
  let hasTrackedScrolledToBottom;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isInReverseTrial;
  let items;
  let items11;
  let items3;
  let items4;
  let items6;
  let items7;
  let items8;
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  _require = undefined;
  extraBottomHeight = extraBottomHeight.extraBottomHeight;
  const tmp = closure_29();
  let obj = require("PremiumPerkCard");
  const premiumPerkCard = obj.usePremiumPerkCard();
  _require = react.useCallback((section_name) => {
    const obj = hasTrackedScrolledToBottom(dependencyMap[21]);
    const obj2 = { section_name };
    obj.track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, obj2);
  }, []);
  importDefault = react.useRef(false);
  const callback = react.useCallback((nativeEvent) => {
    const obj = PremiumNitroHomeUtils;
    const obj2 = { nativeEvent: nativeEvent.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom };
    const result = obj.trackIfScrolledToBottom(obj2);
  }, []);
  let obj2 = { contentContainerStyle: items, showsVerticalScrollIndicator: false, onScrollEndDrag: callback, onMomentumScrollEnd: callback, scrollEventThrottle: 0, children: items4 };
  items = [tmp.featureCardsContainer, { paddingBottom: extraBottomHeight }];
  const obj3 = {
    title: intl.string(require("intl").t.DOb6x0),
    perks: items3,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_1, arg0);
    }
  };
  const tmp10 = PremiumPerkCarouselDefault;
  intl = require("intl").intl;
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let items2;
    const customProfile = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      const items1 = [customProfile, premiumPerkCard.clientThemes];
      items2 = items1;
    } else {
      items2 = [customProfile, , ];
      ({ clientThemes: arr3[1], greyServerBoosts: arr3[2] } = premiumPerkCard);
    }
    items3 = items2;
  } else {
    items3 = [, , ];
    ({ customProfile: arr2[0], clientThemes: arr2[1], serverBoosts: arr2[2] } = premiumPerkCard);
  }
  items4 = [closure_17(tmp10, obj3), , , ];
  const obj4 = {
    title: intl2.string(require("intl").t["+vt7w9"]),
    perks: items7,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_2, arg0);
    }
  };
  const tmp9Result = PremiumPerkCarouselDefault;
  intl2 = tmp2(1126).intl;
  const tmp2Result = require("AppIconUtils");
  if (tmp2Result.isAppIconsSupported()) {
    const items5 = [premiumPerkCard.customAppIcons];
    items6 = items5;
  } else {
    items6 = [];
  }
  items7 = [...items6, premiumPerkCard.emoji, premiumPerkCard.customSounds, premiumPerkCard.sticker];
  items4[1] = closure_17(tmp9Result, obj4);
  const obj5 = {
    title: intl3.string(require("intl").t.LgHbnL),
    perks: items8,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_3, arg0);
    }
  };
  const tmp9Result3 = PremiumPerkCarouselDefault;
  intl3 = tmp2(1126).intl;
  items8 = [, , , , ];
  ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
  items4[2] = closure_17(tmp9Result3, obj5);
  const obj6 = {
    title: intl4.string(require("intl").t.LTaxu9),
    perks: items11,
    onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_4, arg0);
    }
  };
  const tmp9Result4 = PremiumPerkCarouselDefault;
  intl4 = tmp2(1126).intl;
  if (fractionalState === FractionalPremiumStates.FP_ONLY) {
    let items10;
    const entranceSounds = premiumPerkCard.entranceSounds;
    if (isInReverseTrial) {
      const items9 = [entranceSounds];
      items10 = items9;
    } else {
      items10 = [entranceSounds, premiumPerkCard.greyBadge];
    }
    items11 = items10;
  } else {
    items11 = [, ];
    ({ entranceSounds: arr10[0], badge: arr10[1] } = premiumPerkCard);
  }
  items4[3] = closure_17(tmp9Result4, obj6);
  return closure_18(closure_6, obj2);
});
let closure_31 = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
const __initData = { code: "function PremiumNitroHomeTsx2(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let bottom;
  let closure_5;
  let obj8;
  let premiumTypeSubscription;
  let stateFromStores;
  let tmp11;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp25;
  let tmp33;
  let tmp37;
  let useReducedMotion;
  let obj = bottom(576);
  const cResult = obj.c(95);
  let obj2 = bottom(13282);
  const commonTriggerPoint = obj2.useCommonTriggerPoint(bottom(13283).OpenNitroTriggerPoint);
  let obj3 = bottom(6898);
  const giftCardMobileConsumptionHalfsheet = obj3.useGiftCardMobileConsumptionHalfsheet();
  closure_24();
  bottom = navigation(1618)().bottom;
  let obj4 = bottom(13284);
  const youBarSettingsCustomHeaderPaddingTop = obj4.useYouBarSettingsCustomHeaderPaddingTop();
  const obj5 = bottom(1490);
  const tmp7 = navigation;
  navigation = obj5.useNavigation();
  if (cResult[0] !== navigation) {
    class E {
      constructor() {
        navigation.setOptions({ headerShown: false });
      }
    }
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = E;
    cResult[2] = items;
    tmp11 = items;
  } else {
    class E {
      constructor() {
        navigation.setOptions({ headerShown: false });
      }
    }
    tmp11 = cResult[2];
  }
  const layoutEffect = stateFromStores.useLayoutEffect(E, tmp11);
  [r10053, dependencyMap] = _slicedToArray(stateFromStores.useState(0), 2);
  const tmp14 = _slicedToArray(stateFromStores.useState(0), 2);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        navigation.setOptions({ headerShown: false });
      }
    }
    cResult[3] = tmp16;
  } else {
    class E {
      constructor() {
        navigation.setOptions({ headerShown: false });
      }
    }
  }
  const tmp13Result = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp18, _slicedToArray] = tmp13Result;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    cResult[4] = W;
  } else {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    const items1 = [AccessibilityStore];
    const fn = function q() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[5] = items1;
    cResult[6] = fn;
    tmp21 = fn;
    tmp20 = items1;
  } else {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    tmp21 = cResult[6];
  }
  let tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp20, tmp21);
  [r10095, closure_5] = stateFromStores.useState(true);
  _slicedToArray(stateFromStores.useState(true), 2);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    const items2 = [SubscriptionStore];
    class J {
      constructor() {
        return premiumTypeSubscription.getPremiumTypeSubscription();
      }
    }
    cResult[7] = items2;
    cResult[8] = J;
    tmp25 = J;
    tmp24 = items2;
  } else {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    tmp25 = cResult[8];
  }
  let tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp24, tmp25);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    cResult[9] = tmp27;
    class J {
      constructor() {
        return premiumTypeSubscription.getPremiumTypeSubscription();
      }
    }
  } else {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
  }
  const tmp28 = tmp7(6908)();
  let tmpResult5 = tmp(7747);
  const isInReverseTrial = tmpResult5.useIsInReverseTrial();
  let tmpResult6 = tmp(13285);
  const maybeFetchTieredTenureBadgeData = tmpResult6.useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    const items3 = [];
    class J {
      constructor() {
        return premiumTypeSubscription.getPremiumTypeSubscription();
      }
    }
    cResult[11] = items3;
    tmp33 = items3;
  } else {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    tmp33 = cResult[11];
  }
  const effect = obj6.useEffect(tmp34, tmp33);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    const stringResult = obj11.string(bottom(1126).t.tahjbP);
    class J {
      constructor() {
        return premiumTypeSubscription.getPremiumTypeSubscription();
      }
    }
    const stringResult1 = obj12.string(bottom(1126).t.tahjbP);
    cResult[12] = stringResult;
    cResult[13] = stringResult1;
    tmp37 = stringResult1;
  } else {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    tmp37 = cResult[13];
  }
  const sum = tmp18 + 16;
  if (cResult[14] === field) {
    class W {
      constructor(nativeEvent) {
        _slicedToArray(nativeEvent.nativeEvent.layout.height);
      }
    }
    const _Symbol = Symbol;
    class J {
      constructor() {
        return premiumTypeSubscription.getPremiumTypeSubscription();
      }
    }
    const sum1 = tmp18 + 16;
    if (cResult[19] === tmp28.fractionalState) {
      class W {
        constructor(nativeEvent) {
          _slicedToArray(nativeEvent.nativeEvent.layout.height);
        }
      }
    }
    const obj7 = { label: tmp42, id: tmp43, page: closure_17(closure_30, obj8) };
    obj8 = { extraBottomHeight: sum1, fractionalState: tmp28.fractionalState, isInReverseTrial };
    cResult[19] = tmp28.fractionalState;
    cResult[20] = isInReverseTrial;
    cResult[21] = sum1;
    cResult[22] = obj7;
  }
  cResult[14] = field;
  cResult[15] = sum;
  cResult[16] = { label: tmp36, id: tmp37, page: closure_17(closure_28, { extraBottomHeight: sum, scrollToSectionId: field }) };
  ({ label: tmp36, id: tmp37, page: closure_17(closure_28, { extraBottomHeight: sum, scrollToSectionId: field }) });
}) : ((onClose) => {
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c2;
  let c3;
  let c5;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items10;
  let items11;
  let items12;
  let items13;
  let items14;
  let items3;
  let items7;
  let items8;
  let items9;
  let obj12;
  let obj14;
  let tmp11;
  let tmp14;
  let tmp18;
  let tmp27Result4;
  let tmp27Result6;
  let tmp48;
  let bottom;
  navigation = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  c5 = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  onClose = onClose.onClose;
  let obj = bottom(13282);
  const commonTriggerPoint = obj.useCommonTriggerPoint(bottom(13283).OpenNitroTriggerPoint);
  let obj2 = bottom(6898);
  const giftCardMobileConsumptionHalfsheet = obj2.useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_24();
  bottom = navigation(1618)().bottom;
  let obj3 = bottom(13284);
  const youBarSettingsCustomHeaderPaddingTop = obj3.useYouBarSettingsCustomHeaderPaddingTop();
  let obj4 = bottom(1490);
  navigation = obj4.useNavigation();
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  [tmp11, c2] = stateFromStores.useState(0);
  _slicedToArray(stateFromStores.useState(0), 2);
  const callback = stateFromStores.useCallback((nativeEvent) => {
    c2(nativeEvent.nativeEvent.layout.width);
  }, []);
  [tmp14, c3] = stateFromStores.useState(0);
  _slicedToArray(stateFromStores.useState(0), 2);
  const callback1 = stateFromStores.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  const items1 = [isEligibleSenderForReferralProgram];
  const obj6 = bottom(504);
  stateFromStores = obj6.useStateFromStores(items1, () => isEligibleSenderForReferralProgram.useReducedMotion);
  [tmp18, c5] = stateFromStores.useState(true);
  _slicedToArray(stateFromStores.useState(true), 2);
  const items2 = [promotionMarketingComponent];
  const obj7 = bottom(504);
  const stateFromStores1 = obj7.useStateFromStores(items2, () => promotionMarketingComponent.getPremiumTypeSubscription());
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (0 === arg0) {
      const obj2 = { target: NewTab };
      const obj = AnalyticsUtilsDefault;
      obj.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj2);
      _undefined3(true);
    } else if (1 === arg0) {
      const obj4 = { target: PerksTab };
      const obj3 = AnalyticsUtilsDefault;
      obj3.track(unpackModuleId.MOBILE_NITRO_HOME_TAB_SWITCHED, obj4);
      _undefined3(false);
    }
  }, []);
  const tmp21 = navigation(6908)();
  const obj8 = bottom(7747);
  const isInReverseTrial = obj8.useIsInReverseTrial();
  const obj9 = bottom(13285);
  const maybeFetchTieredTenureBadgeData = obj9.useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    closure_1_9.resetState();
  }, []);
  const obj10 = { items: items3, pageWidth: tmp11, onPageChange: callback2 };
  const obj11 = { label: intl.string(bottom(1126).t.tahjbP), id: intl2.string(bottom(1126).t.tahjbP), page: closure_17(closure_28, obj12) };
  const useSegmentedControlState = bottom(9317).useSegmentedControlState;
  bottom(9317);
  intl = bottom(1126).intl;
  intl2 = bottom(1126).intl;
  items3 = [obj11, ];
  obj12 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  const obj13 = { label: intl3.string(bottom(1126).t.w3RBdW), id: intl4.string(bottom(1126).t.w3RBdW), page: closure_17(closure_30, obj14) };
  intl3 = bottom(1126).intl;
  intl4 = bottom(1126).intl;
  obj14 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  items3[1] = obj13;
  const segmentedControlState = useSegmentedControlState(obj10);
  let num = -32;
  const useSharedValue = bottom(4618).useSharedValue;
  bottom(4618);
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = useSharedValue(num);
  let tmpResult = tmp(4618);
  const fn = function $() {
    const obj = { bottom: sharedValue.get() };
    return obj;
  };
  fn.__closure = { floatTabBottomOffset: sharedValue };
  fn.__workletHash = 16798997576498;
  fn.__initData = __initData;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect1 = obj5.useEffect(() => {
    if (!stateFromStores) {
      set = sharedValue.set;
      const withDelay = ReanimatedRexport.withDelay;
      ReanimatedRexport;
      const obj = spring;
      const result = set(withDelay(500, obj.withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })));
    }
  }, items4);
  let tmpResult6 = tmp(4735);
  const theme = tmpResult6.useThemeContext().theme;
  const tmpResult7 = bottom(4735);
  const isThemeDarkResult = tmpResult7.isThemeDark(theme);
  const ONYX = constants2.ONYX;
  const tmp6Result = navigation(13286);
  const tmp6ResultResult = tmp6Result(tmp21.endsAt, bottom(13286).CountDownMessageTypes.ENDS_IN);
  const tmpResult8 = bottom(7738);
  isEligibleSenderForReferralProgram = tmpResult8.useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj5.useEffect(() => {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult = DismissibleContentUnsafeUtils;
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE, obj2);
    }
    const tmpResult4 = DismissibleContentUnsafeUtils;
    if (!tmpResult4.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const obj3 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const tmpResult5 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult5.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE, obj3);
    }
    if (isEligibleSenderForReferralProgram) {
      const tmpResult6 = ReferralProgramUtils;
      const result2 = tmpResult6.markReferralProgramEntrypointBadgeAcknowledged();
    }
  }, items5);
  const effect3 = obj5.useEffect(() => {
    const obj = bottom(c2[49]);
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(c2[50]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const tmpResult = bottom(c2[49]);
      const result = tmpResult.UNSAFE_markDismissibleContentAsDismissed(bottom(c2[50]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
    }
  }, []);
  const tmpResult9 = bottom(13244);
  promotionMarketingComponent = tmpResult9.usePromotionMarketingComponent(tmp(10483).MarketingComponentType.PREMIUM_TAB);
  const items6 = [promotionMarketingComponent];
  const effect4 = obj5.useEffect(() => {
    let isDismissed = null == promotionMarketingComponent || "premiumTab" !== promotionMarketingComponent.properties.properties.oneofKind;
    if (!isDismissed) {
      const obj = DismissibleContentUnsafeUtils;
      isDismissed = obj.UNSAFE_isSnowflakeBoundDismissibleContentDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId).isDismissed;
    }
    if (!isDismissed) {
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS };
      const obj2 = DismissibleContentUtils;
      const result = obj2.markSnowflakeBoundDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE, promotionMarketingComponent.promotionId, obj3);
    }
  }, items6);
  const obj15 = { style: items7, children: items8 };
  items7 = [tmp5.container, { paddingTop: youBarSettingsCustomHeaderPaddingTop }];
  const obj16 = { style: tmp5.background, source: navigation(13287) };
  const tmp6Result3 = navigation(5981);
  items8 = [closure_17(tmp6Result3, obj16), closure_17(closure_26, { onClose, subscription: stateFromStores1 }), , , ];
  let tmp27Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp27Result) {
    const obj17 = { countdownText: tmp6ResultResult };
    tmp27Result = closure_17(tmp6(13288), obj17);
  }
  items8[2] = tmp27Result;
  const obj18 = { style: tmp5.tabContent, children: items9 };
  items9 = [closure_17(tmp(10987).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp27Result4) {
    const obj19 = { style: items10 };
    items10 = [tmp5.backSwipeSensor];
    tmp27Result4 = closure_17(c5, obj19);
  }
  items9[1] = tmp27Result4;
  items8[3] = closure_18(c5, obj18);
  const obj20 = { style: animatedStyle, onLayout: callback1, children: items11 };
  const obj21 = { style: tmp5.segmentedControlActual, onLayout: callback, children: closure_17(bottom(9318).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  const View = tmp6(4618).View;
  items11 = [closure_17(c5, obj21), , ];
  let tmp27Result5 = !isThemeDarkResult;
  if (tmp27Result5) {
    const obj22 = { start: null, end: null, colors: ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"], style: items12 };
    ({ START: obj27.start, END: obj27.end } = closure_12);
    items12 = [tmp5.segmentedControlVirtual, ];
    const obj23 = { height: tmp14, zIndex: 2 };
    items12[1] = obj23;
    tmp27Result5 = closure_17(tmp6(5612), obj22);
  }
  items11[1] = tmp27Result5;
  const tmpResult10 = bottom(1369);
  if (tmpResult10.isAndroid()) {
    const obj24 = { style: items13 };
    items13 = [, , ];
    ({ segmentedControlVirtual: arr15[0], androidSegmentedControlBackground: arr15[1] } = tmp5);
    const obj25 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items13[2] = obj25;
    tmp27Result6 = closure_17(tmp42, obj24);
  } else {
    let num3 = 0.5;
    const tmp6Result4 = navigation(5779);
    if (isThemeDarkResult) {
      num3 = 0.2;
    }
    const obj26 = { blurAmount: num3, style: items14, blurTheme: theme, tintColor: tmp48 };
    items14 = [tmp5.segmentedControlVirtual, ];
    const obj28 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items14[1] = obj28;
    tmp48 = undefined;
    if (theme === ONYX) {
      tmp48 = closure_21;
    }
    tmp27Result6 = closure_17(tmp6Result4, obj26);
  }
  items11[2] = tmp27Result6;
  items8[4] = closure_18(View, obj20);
  return closure_18(c5, obj15);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default tmp7;
export const BACK_BUTTON_SIZE = 24;