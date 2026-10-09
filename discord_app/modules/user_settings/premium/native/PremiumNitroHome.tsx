// === Module 13611: PremiumNitroHome ===

// Module 13611 (PremiumNitroHome)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2050 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4899 */;
import spring from "spring" /* 5375 */;
import ReferralProgramUtils from "ReferralProgramUtils" /* 8066 */;
import PremiumPerkCardDefault from "PremiumPerkCard" /* 13615 */;
import useScrollToSectionDefault from "useScrollToSection" /* 13637 */;
import PremiumNitroHomeUtils from "PremiumNitroHomeUtils" /* 13638 */;
import MarketingPageBannerTileDefault from "MarketingPageBannerTile" /* 13639 */;
import PremiumPerkCarouselDefault from "PremiumPerkCarousel" /* 13671 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import SubscriptionStore from "SubscriptionStore" /* 4734 */;
import PremiumNitroNavigationStore from "PremiumNitroNavigationStore" /* 13612 */;
import n from "module_683" /* 683 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const NitroHomeSectionId = fn(13612).NitroHomeSectionId;
const Constants = fn(1085);
({ AnalyticEvents: closure_11, HorizontalGradient: closure_12, ThemeTypes: map1, UserSettingsSections: closure_14 } = Constants);
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const FractionalPremiumStates = fn(1392).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const NewTab = "NewTab";
const PerksTab = "PerksTab";
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.PLUM_24);
let closure_21 = n(nativeDefault.unsafe_rawColors.PLUM_24).alpha(0.6).hex();
let closure_22 = { CAROUSEL_SECTION_NAME_1: "NitroFavorites", CAROUSEL_SECTION_NAME_2: "MakeDiscordYours", CAROUSEL_SECTION_NAME_3: "EnjoyAnUpgradedDiscord", CAROUSEL_SECTION_NAME_4: "ShowUpTheWayYouWant" };
let closure_23 = { YOUR_NITRO_HOME: "YourNitroHome", YOUR_NITRO_PLAN: "YourNitroPlan" };
let createStyles = fn(5091);
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
createStyles = fn(5091);
let obj4 = { headerContainer: { display: "flex", flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, justifyContent: "space-between", gap: 8 }, contentContainer: { display: "flex", flexDirection: "column" }, backButtonWrapper: null, headerText: null, pillParent: null };
const size1 = { width: 24, height: 24, borderRadius: nativeDefault.radii.lg, alignItems: "center", justifyContent: "center" };
obj4.backButtonWrapper = size1;
obj4.headerText = { textAlign: "center", width: "80%", lineHeight: 28 };
obj4.pillParent = { display: "flex", flexDirection: "column", alignItems: "center" };
let closure_25 = createStyles.createStyles(obj4);
let ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? (function NitroHomeHeader(arg0) {
  const cResult = onClose(576).c(27);
  ({ subscription, onClose } = arg0);
  const tmp4 = closure_25();
  const obj = onClose(576);
  const navigation = onClose(1503).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "NitroHomeHeader" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const obj2 = onClose(1503);
  let backButtonWrapper = onClose(13613).useMobileNitroManageSubscriptionsSettingsExperiment(first);
  if (cResult[1] === navigation) {
    if (cResult[2] === onClose) {
      let tmp7 = cResult[3];
    }
    let hasActiveTrial;
    if (subscription != null) {
      hasActiveTrial = subscription.hasActiveTrial;
    }
    const _Symbol = Symbol;
    ({ contentContainer, headerContainer } = tmp4);
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = closure_17(onClose(6209).ArrowLargeLeftIcon, { size: "md", color: "white" });
      cResult[4] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp7) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onClose(1126).intl;
        const stringResult = intl.string(onClose(1126).t["BnquQ/"]);
        cResult[8] = stringResult;
        let tmp17 = stringResult;
      } else {
        tmp17 = cResult[8];
      }
      if (cResult[9] !== tmp4.headerText) {
        const obj4 = { variant: "display-sm", color: "text-overlay-light", style: tmp4.headerText, accessibilityRole: "header", children: tmp17 };
        const tmp21 = closure_17(onClose(5087).Text, obj4);
        cResult[9] = tmp4.headerText;
        cResult[10] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === navigation) {
        if (cResult[12] === backButtonWrapper) {
          if (cResult[13] === tmp4.backButtonWrapper) {
            if (cResult[15] === tmp4.headerContainer) {
              if (cResult[16] === tmp22) {
                if (cResult[17] === tmp14) {
                  if (cResult[18] === tmp19) {
                    let tmp27 = cResult[19];
                  }
                  if (cResult[20] === !tmp10) {
                    if (cResult[21] === tmp4.pillParent) {
                      let tmp32 = cResult[22];
                    }
                    if (cResult[23] === tmp4.contentContainer) {
                      if (cResult[24] === tmp27) {
                        if (cResult[25] === tmp32) {
                          let tmp36 = cResult[26];
                        }
                        return tmp36;
                      }
                    }
                    const obj5 = { style: contentContainer, children: null };
                    const items = [tmp27, tmp32];
                    obj5.children = items;
                    const tmp39 = closure_18(closure_5, obj5);
                    cResult[23] = tmp4.contentContainer;
                    cResult[24] = tmp27;
                    cResult[25] = tmp32;
                    cResult[26] = tmp39;
                    tmp36 = tmp39;
                  }
                  let tmp33 = tmp31;
                  if (!tmp10) {
                    const obj6 = { style: tmp4.pillParent, children: closure_17(onClose(13614).PremiumReferralTrialPill, { hasExtraMargin: true }) };
                    tmp33 = closure_17(closure_5, obj6);
                  }
                  cResult[20] = !tmp10;
                  cResult[21] = tmp4.pillParent;
                  cResult[22] = tmp33;
                  tmp32 = tmp33;
                }
              }
            }
            const obj7 = { style: headerContainer, children: null };
            const items1 = [tmp14, tmp19, cResult[14]];
            obj7.children = items1;
            const tmp30 = closure_18(closure_5, obj7);
            cResult[15] = tmp4.headerContainer;
            cResult[16] = cResult[14];
            cResult[17] = tmp14;
            cResult[18] = tmp19;
            cResult[19] = tmp30;
            tmp27 = tmp30;
          }
        }
      }
      if (backButtonWrapper) {
        const obj8 = { style: tmp4.backButtonWrapper };
        let tmp23Result = closure_17(closure_5, obj8);
      } else {
        const obj9 = {
          style: tmp4.backButtonWrapper,
          onPress() {
                  AnalyticsUtilsDefault.track(constants.NITRO_HOME_NAVIGATION, { current_component: constants.YOUR_NITRO_HOME, next_component: constants.YOUR_NITRO_PLAN, interaction_component: "header_settings_icon" });
                  navigation.push(constants3.PREMIUM_MANAGE_PLAN);
                },
          children: closure_17(onClose(7085).SettingsIcon, { size: "md", color: "white" })
        };
        tmp23Result = closure_17(onClose(6191).PressableOpacity, obj9);
      }
      cResult[11] = navigation;
      cResult[12] = backButtonWrapper;
      backButtonWrapper = tmp4.backButtonWrapper;
      cResult[13] = backButtonWrapper;
      cResult[14] = tmp23Result;
    }
    const obj10 = { style: tmp4.backButtonWrapper, onPress: tmp7, children: tmp11 };
    cResult[5] = tmp7;
    cResult[6] = tmp4.backButtonWrapper;
    cResult[7] = closure_17(onClose(6191).PressableOpacity, obj10);
    class S {
      constructor() {
        if (undefined !== onClose) {
          tmp3 = onClose();
        } else {
          tmp = closure_1;
          arr = closure_1.pop();
        }
        return;
      }
    }
    tmp10 = !hasActiveTrial;
    const tmp16 = closure_17(onClose(6191).PressableOpacity, obj10);
  }
  class S {
    constructor() {
      if (undefined !== onClose) {
        tmp3 = onClose();
      } else {
        tmp = closure_1;
        arr = closure_1.pop();
      }
      return;
    }
  }
  cResult[1] = navigation;
  cResult[2] = onClose;
  cResult[3] = S;
  tmp7 = S;
  const tmpResult = onClose(13613);
}) : (function NitroHomeHeader(arg0) {
  ({ subscription, onClose } = arg0);
  const tmp = closure_25();
  const navigation = onClose(1503).useNavigation();
  const obj = onClose(1503);
  const items = [navigation, onClose];
  const mobileNitroManageSubscriptionsSettingsExperiment = onClose(13613).useMobileNitroManageSubscriptionsSettingsExperiment({ location: "NitroHomeHeader" });
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
  const obj2 = onClose(13613);
  const tmp8 = !hasActiveTrial;
  const items1 = [closure_17(onClose(6191).PressableOpacity, { style: tmp.backButtonWrapper, onPress: callback, children: closure_17(onClose(6209).ArrowLargeLeftIcon, { size: "md", color: "white" }) }), , ];
  const obj6 = { variant: "display-sm", color: "text-overlay-light", style: tmp.headerText, accessibilityRole: "header", children: null };
  const intl = onClose(1126).intl;
  obj6.children = intl.string(onClose(1126).t["BnquQ/"]);
  items1[1] = closure_17(onClose(5087).Text, obj6);
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
      children: closure_17(onClose(7085).SettingsIcon, { size: "md", color: "white" })
    };
    tmp11Result = closure_17(onClose(6191).PressableOpacity, obj8);
  }
  let tmp11Result2 = !tmp8;
  items1[2] = tmp11Result;
  obj4.children = items1;
  const items2 = [closure_18(closure_5, obj4), ];
  if (tmp11Result2) {
    const obj9 = { style: tmp.pillParent, children: closure_17(onClose(13614).PremiumReferralTrialPill, { hasExtraMargin: true }) };
    tmp11Result2 = closure_17(closure_5, obj9);
  }
  items2[1] = tmp11Result2;
  obj3.children = items2;
  return closure_18(closure_5, obj3);
});
createStyles = fn(5091);
let obj5 = { featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 16, alignItems: "center", paddingTop: 24 }, marketingBannerCard: null };
let obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj5.marketingBannerCard = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
let closure_27 = createStyles.createStyles(obj5);
ReactCompilerGating = fn(558);
let closure_28 = ReactCompilerGating.isReactCompilerEnabled() ? (function NewTab(extraBottomHeight) {
  const cResult = require("c").c(29);
  extraBottomHeight = extraBottomHeight.extraBottomHeight;
  const tmp4 = closure_27();
  const obj = require("c");
  const isEligibleSenderForReferralProgram = require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram();
  const obj2 = require("useIsEligibleSenderForReferralProgram");
  const premiumPerkCard = require("PremiumPerkCard").usePremiumPerkCard();
  const obj3 = require("PremiumPerkCard");
  const promotionMarketingComponent = require("usePromotionMarketingComponent").usePromotionMarketingComponent(require("MarketingComponentType").MarketingComponentType.MARKETING_PAGE_BANNER);
  _require = noop.useRef(false);
  const ref = noop.useRef(null);
  const createSectionLayoutHandler = useScrollToSectionDefault(ref, extraBottomHeight.scrollToSectionId).createSectionLayoutHandler;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(nativeEvent) {
      return PremiumNitroHomeUtils.trackIfScrolledToBottom({ nativeEvent: nativeEvent.nativeEvent, trackedType: NewTab, hasTrackedScrolledToBottom });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== extraBottomHeight) {
    const obj5 = { paddingBottom: extraBottomHeight };
    cResult[1] = extraBottomHeight;
    cResult[2] = obj5;
    let tmp11 = obj5;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === tmp4.featureCardsContainer) {
    if (cResult[4] === tmp11) {
      let tmp12 = cResult[5];
    }
    if (cResult[6] === promotionMarketingComponent) {
      if (cResult[7] === tmp4.marketingBannerCard) {
        let tmp13 = cResult[8];
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp19 = closure_17(tmp(13644).TieredTenureBadgePerkCard, {});
        cResult[9] = tmp19;
        let tmp17 = tmp19;
      } else {
        tmp17 = cResult[9];
      }
      if (cResult[10] === createSectionLayoutHandler) {
        if (cResult[11] === isEligibleSenderForReferralProgram) {
          let tmp20 = cResult[12];
        }
        if (cResult[13] !== premiumPerkCard.xboxGamePass) {
          const obj7 = {};
          const merged = Object.assign(premiumPerkCard.xboxGamePass);
          const tmp30 = closure_17(PremiumPerkCardDefault, obj7);
          cResult[13] = premiumPerkCard.xboxGamePass;
          cResult[14] = tmp30;
          let tmp25 = tmp30;
          const tmp9Result = PremiumPerkCardDefault;
        } else {
          tmp25 = cResult[14];
        }
        if (cResult[15] !== premiumPerkCard.memberPricing) {
          const obj8 = {};
          const merged1 = Object.assign(premiumPerkCard.memberPricing);
          const tmp36 = closure_17(PremiumPerkCardDefault, obj8);
          cResult[15] = premiumPerkCard.memberPricing;
          cResult[16] = tmp36;
          let tmp31 = tmp36;
          const tmp9Result5 = PremiumPerkCardDefault;
        } else {
          tmp31 = cResult[16];
        }
        if (cResult[17] !== premiumPerkCard.earlyAccess) {
          const obj9 = {};
          const merged2 = Object.assign(premiumPerkCard.earlyAccess);
          const tmp42 = closure_17(PremiumPerkCardDefault, obj9);
          cResult[17] = premiumPerkCard.earlyAccess;
          cResult[18] = tmp42;
          let tmp37 = tmp42;
          const tmp9Result6 = PremiumPerkCardDefault;
        } else {
          tmp37 = cResult[18];
        }
        if (cResult[19] !== premiumPerkCard.superReactions) {
          const obj10 = {};
          const merged3 = Object.assign(premiumPerkCard.superReactions);
          const tmp48 = closure_17(PremiumPerkCardDefault, obj10);
          cResult[19] = premiumPerkCard.superReactions;
          cResult[20] = tmp48;
          let tmp43 = tmp48;
          const tmp9Result7 = PremiumPerkCardDefault;
        } else {
          tmp43 = cResult[20];
        }
        if (cResult[21] === tmp43) {
          if (cResult[22] === tmp12) {
            if (cResult[23] === tmp13) {
              if (cResult[24] === tmp20) {
                if (cResult[25] === tmp25) {
                  if (cResult[26] === tmp31) {
                    if (cResult[27] === tmp37) {
                      let tmp49 = cResult[28];
                    }
                    return tmp49;
                  }
                }
              }
            }
          }
        }
        const obj11 = { ref, contentContainerStyle: tmp12, showsVerticalScrollIndicator: false, onScrollEndDrag: first, onMomentumScrollEnd: first, scrollEventThrottle: 0, children: null };
        const items = [tmp13, tmp17, tmp20, tmp25, tmp31, tmp37, tmp43];
        obj11.children = items;
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
        const obj12 = { onLayout: createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_17(tmp(13648).ReferralProgramPerkCard, {}) };
        tmp21 = closure_17(closure_5, obj12);
      }
      cResult[10] = createSectionLayoutHandler;
      cResult[11] = isEligibleSenderForReferralProgram;
      cResult[12] = tmp21;
      tmp20 = tmp21;
    }
    let tmp14 = null != promotionMarketingComponent;
    if (tmp14) {
      tmp14 = "marketingPageBanner" === promotionMarketingComponent.properties.properties.oneofKind;
    }
    if (tmp14) {
      const obj13 = { style: null, cardStyle: null, bannerFields: null, analyticsPage: "Nitro Home Banner Tile", componentId: null, promotionId: null };
      const obj22 = { width: tmp(13615).PERK_CARD_SIZES[tmp(undefined, 13615).PerkCardVariant.WIDE].width };
      obj13.style = obj22;
      obj13.cardStyle = tmp4.marketingBannerCard;
      obj13.bannerFields = promotionMarketingComponent.properties.properties.marketingPageBanner;
      ({ id: obj6.componentId, promotionId: obj6.promotionId } = promotionMarketingComponent);
      tmp14 = closure_17(MarketingPageBannerTileDefault, obj13);
      const tmp9Result8 = MarketingPageBannerTileDefault;
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
  const obj4 = require("usePromotionMarketingComponent");
}) : (function NewTab(arg0) {
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
    const obj7 = { width: tmp2(13615).PERK_CARD_SIZES[tmp2(undefined, 13615).PerkCardVariant.WIDE].width };
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
    const obj8 = { onLayout: useScrollToSectionDefault(ref, scrollToSectionId).createSectionLayoutHandler(NitroHomeSectionId.REFERRAL_PROGRAM), children: closure_17(tmp2(13648).ReferralProgramPerkCard, {}) };
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
});
createStyles = fn(5091);
let closure_29 = createStyles.createStyles({ featureCardsContainer: { display: "flex", flexDirection: "column", rowGap: 24, paddingTop: 24 } });
ReactCompilerGating = fn(558);
let closure_30 = ReactCompilerGating.isReactCompilerEnabled() ? (function PerksTab(arg0) {
  const cResult = first(576).c(55);
  ({ extraBottomHeight, fractionalState, isInReverseTrial } = arg0);
  const tmp4 = closure_29();
  const obj = first(576);
  const tmp = first;
  const premiumPerkCard = first(13615).usePremiumPerkCard();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(section_name) {
      hasTrackedScrolledToBottom(dependencyMap[21]).track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, { section_name });
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  importDefault = noop.useRef(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        obj = closure_0(closure_2[29]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
        result = obj.trackIfScrolledToBottom(obj1);
        return;
      }
    }
    cResult[1] = C;
  } else {
    class C {
      constructor(arg0) {
        obj = closure_0(closure_2[29]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
        result = obj.trackIfScrolledToBottom(obj1);
        return;
      }
    }
  }
  if (cResult[2] !== extraBottomHeight) {
    class C {
      constructor(arg0) {
        obj = closure_0(closure_2[29]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
        result = obj.trackIfScrolledToBottom(obj1);
        return;
      }
    }
    tmp9[0] = extraBottomHeight;
    cResult[2] = extraBottomHeight;
    cResult[3] = tmp9;
  } else {
    class C {
      constructor(arg0) {
        obj = closure_0(closure_2[29]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
        result = obj.trackIfScrolledToBottom(obj1);
        return;
      }
    }
  }
  if (cResult[4] === tmp4.featureCardsContainer) {
    class C {
      constructor(arg0) {
        obj = closure_0(closure_2[29]);
        obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
        result = obj.trackIfScrolledToBottom(obj1);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          obj = closure_0(closure_2[29]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
          result = obj.trackIfScrolledToBottom(obj1);
          return;
        }
      }
      const stringResult = obj3.string(tmp(1126).t.DOb6x0);
      cResult[7] = stringResult;
    } else {
      class C {
        constructor(arg0) {
          obj = closure_0(closure_2[29]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
          result = obj.trackIfScrolledToBottom(obj1);
          return;
        }
      }
    }
    if (cResult[8] === fractionalState) {
      class C {
        constructor(arg0) {
          obj = closure_0(closure_2[29]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
          result = obj.trackIfScrolledToBottom(obj1);
          return;
        }
      }
    }
    if (fractionalState !== FractionalPremiumStates.FP_ONLY) {
      class C {
        constructor(arg0) {
          obj = closure_0(closure_2[29]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
          result = obj.trackIfScrolledToBottom(obj1);
          return;
        }
      }
      ({ customProfile: tmp13[0], clientThemes: tmp13[1], serverBoosts: tmp13[2] } = premiumPerkCard);
      cResult[8] = fractionalState;
      cResult[9] = isInReverseTrial;
      cResult[10] = premiumPerkCard.clientThemes;
      cResult[11] = premiumPerkCard.customProfile;
      cResult[12] = premiumPerkCard.greyServerBoosts;
      cResult[13] = premiumPerkCard.serverBoosts;
      cResult[14] = tmp13;
    }
    let clientThemes = premiumPerkCard.customProfile;
    if (isInReverseTrial) {
      class C {
        constructor(arg0) {
          obj = closure_0(closure_2[29]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
          result = obj.trackIfScrolledToBottom(obj1);
          return;
        }
      }
      tmp15[0] = clientThemes;
      clientThemes = premiumPerkCard.clientThemes;
      tmp15[1] = clientThemes;
    } else {
      class C {
        constructor(arg0) {
          obj = closure_0(closure_2[29]);
          obj1 = { nativeEvent: arg0.nativeEvent, trackedType: PerksTab, hasTrackedScrolledToBottom: closure_1 };
          result = obj.trackIfScrolledToBottom(obj1);
          return;
        }
      }
      tmp15[0] = clientThemes;
      ({ clientThemes: tmp14[1], greyServerBoosts: tmp14[2] } = premiumPerkCard);
    }
  }
  const items = [tmp4.featureCardsContainer, tmp9];
  cResult[4] = tmp4.featureCardsContainer;
  cResult[5] = tmp9;
  cResult[6] = items;
  const obj2 = first(13615);
}) : (function PerksTab(extraBottomHeight) {
  ({ fractionalState, isInReverseTrial } = extraBottomHeight);
  _require = undefined;
  const tmp = closure_29();
  const premiumPerkCard = require("PremiumPerkCard").usePremiumPerkCard();
  _require = noop.useCallback((section_name) => {
    hasTrackedScrolledToBottom(dependencyMap[21]).track(constants.MOBILE_NITRO_HOME_PERKS_CAROUSEL_SCROLLED, { section_name });
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
    const intl2 = tmp2(1126).intl;
    obj4.title = intl2.string(tmp2(1126).t["+vt7w9"]);
    const tmp9Result = tmp9(13671);
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
    tmp2Result = tmp2(13672);
    const intl3 = tmp2(1126).intl;
    obj5.title = intl3.string(tmp2(1126).t.LgHbnL);
    const items8 = [, , , , ];
    ({ memberPricing: arr9[0], earlyAccess: arr9[1], largeUploads: arr9[2], hdVideo: arr9[3], superReactions: arr9[4] } = premiumPerkCard);
    obj5.perks = items8;
    obj5.onItemChange = function onItemChange(arg0) {
      return closure_0(closure_22.CAROUSEL_SECTION_NAME_3, arg0);
    };
    items4[2] = closure_17(tmp9(13671), obj5);
    const obj6 = { title: null, perks: null, onItemChange: null };
    const tmp9Result3 = tmp9(13671);
    const intl4 = tmp2(1126).intl;
    obj6.title = intl4.string(tmp2(1126).t.LTaxu9);
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
    tmp9Result4 = tmp9(13671);
  }
  tmp10 = PremiumPerkCarouselDefault;
});
let closure_31 = { code: "function PremiumNitroHomeTsx1(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
const __initData = { code: "function PremiumNitroHomeTsx2(){const{floatTabBottomOffset}=this.__closure;return{bottom:floatTabBottomOffset.get()};}" };
ReactCompilerGating = fn(558);
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm };
size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumNitroHome.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumNitroHome(arg0) {
  const cResult = bottom(576).c(95);
  let obj = bottom(576);
  const commonTriggerPoint = bottom(13674).useCommonTriggerPoint(bottom(13675).OpenNitroTriggerPoint);
  let obj2 = bottom(13674);
  const giftCardMobileConsumptionHalfsheet = bottom(7090).useGiftCardMobileConsumptionHalfsheet();
  closure_24();
  bottom = navigation(1631)().bottom;
  let obj3 = bottom(7090);
  const tmp7 = navigation;
  const youBarSettingsCustomHeaderPaddingTop = bottom(13676).useYouBarSettingsCustomHeaderPaddingTop();
  let obj4 = bottom(13676);
  navigation = bottom(1503).useNavigation();
  if (cResult[0] !== navigation) {
    class E {
      constructor() {
        setOptionsResult = closure_1.setOptions({ headerShown: false });
        return;
      }
    }
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = E;
    cResult[2] = items;
    let tmp11 = items;
  } else {
    class E {
      constructor() {
        setOptionsResult = closure_1.setOptions({ headerShown: false });
        return;
      }
    }
    tmp11 = cResult[2];
  }
  const layoutEffect = stateFromStores.useLayoutEffect(E, tmp11);
  const obj5 = bottom(1503);
  [r10053, dependencyMap] = stateFromStores.useState(0);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        setOptionsResult = closure_1.setOptions({ headerShown: false });
        return;
      }
    }
    cResult[3] = tmp16;
  } else {
    class E {
      constructor() {
        setOptionsResult = closure_1.setOptions({ headerShown: false });
        return;
      }
    }
  }
  const tmp14 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp18, _slicedToArray] = stateFromStores.useState(0);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    cResult[4] = W;
  } else {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    const items1 = [AccessibilityStore];
    const fn = function q() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[5] = items1;
    cResult[6] = fn;
    let tmp21 = fn;
    const tmp20 = items1;
  } else {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    tmp21 = cResult[6];
  }
  const tmp13Result = _slicedToArray(stateFromStores.useState(0), 2);
  stateFromStores = bottom(504).useStateFromStores(tmp20, tmp21);
  let tmpResult = bottom(504);
  [r10095, closure_5] = stateFromStores.useState(true);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    const items2 = [SubscriptionStore];
    class J {
      constructor() {
        return closure_8.getPremiumTypeSubscription();
      }
    }
    cResult[7] = items2;
    cResult[8] = J;
    let tmp25 = J;
    const tmp24 = items2;
  } else {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    tmp25 = cResult[8];
  }
  const tmp13Result2 = _slicedToArray(stateFromStores.useState(true), 2);
  const stateFromStores1 = bottom(504).useStateFromStores(tmp24, tmp25);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    cResult[9] = tmp27;
    class J {
      constructor() {
        return closure_8.getPremiumTypeSubscription();
      }
    }
  } else {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
  }
  const tmp28 = tmp7(7102)();
  let tmpResult4 = bottom(504);
  const isInReverseTrial = bottom(8076).useIsInReverseTrial();
  let tmpResult5 = bottom(8076);
  const maybeFetchTieredTenureBadgeData = bottom(13677).useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    const items3 = [];
    class J {
      constructor() {
        return closure_8.getPremiumTypeSubscription();
      }
    }
    cResult[11] = items3;
    let tmp33 = items3;
  } else {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    tmp33 = cResult[11];
  }
  const effect = obj6.useEffect(tmp34, tmp33);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    const stringResult = obj11.string(tmp(1126).t.tahjbP);
    class J {
      constructor() {
        return closure_8.getPremiumTypeSubscription();
      }
    }
    const stringResult1 = obj12.string(tmp(1126).t.tahjbP);
    cResult[12] = stringResult;
    cResult[13] = stringResult1;
    let tmp37 = stringResult1;
    const tmp36 = stringResult;
  } else {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    tmp37 = cResult[13];
  }
  const sum = tmp18 + 16;
  if (cResult[14] === field) {
    class W {
      constructor(arg0) {
        tmp = closure_3(arg0.nativeEvent.layout.height);
        return;
      }
    }
    const _Symbol = Symbol;
    class J {
      constructor() {
        return closure_8.getPremiumTypeSubscription();
      }
    }
    const sum1 = tmp18 + 16;
    if (cResult[19] === tmp28.fractionalState) {
      class W {
        constructor(arg0) {
          tmp = closure_3(arg0.nativeEvent.layout.height);
          return;
        }
      }
    }
    const obj7 = { label: tmp42, id: tmp43, page: null };
    const obj8 = { extraBottomHeight: sum1, fractionalState: tmp28.fractionalState, isInReverseTrial };
    obj7.page = closure_17(closure_30, obj8);
    cResult[19] = tmp28.fractionalState;
    cResult[20] = isInReverseTrial;
    cResult[21] = sum1;
    cResult[22] = obj7;
  }
  let tmpResult6 = bottom(13677);
  cResult[14] = field;
  cResult[15] = sum;
  cResult[16] = { label: tmp36, id: tmp37, page: closure_17(closure_28, { extraBottomHeight: sum, scrollToSectionId: field }) };
  const obj9 = { label: tmp36, id: tmp37, page: closure_17(closure_28, { extraBottomHeight: sum, scrollToSectionId: field }) };
}) : (function PremiumNitroHome(onClose) {
  let bottom;
  let navigation;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  let stateFromStores;
  c5 = undefined;
  let sharedValue;
  let isEligibleSenderForReferralProgram;
  let promotionMarketingComponent;
  const commonTriggerPoint = bottom(13674).useCommonTriggerPoint(bottom(13675).OpenNitroTriggerPoint);
  let obj = bottom(13674);
  const giftCardMobileConsumptionHalfsheet = bottom(7090).useGiftCardMobileConsumptionHalfsheet();
  const tmp5 = closure_24();
  bottom = navigation(1631)().bottom;
  let obj2 = bottom(7090);
  const youBarSettingsCustomHeaderPaddingTop = bottom(13676).useYouBarSettingsCustomHeaderPaddingTop();
  let obj3 = bottom(13676);
  navigation = bottom(1503).useNavigation();
  const items = [navigation];
  const layoutEffect = stateFromStores.useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, items);
  let obj4 = bottom(1503);
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
  const tmp21 = navigation(7102)();
  const obj7 = bottom(504);
  const isInReverseTrial = bottom(8076).useIsInReverseTrial();
  const obj8 = bottom(8076);
  const maybeFetchTieredTenureBadgeData = bottom(13677).useMaybeFetchTieredTenureBadgeData();
  const field = PremiumNitroNavigationStore.useField("scrollToSectionId");
  const effect = stateFromStores.useEffect(() => () => {
    closure_1_9.resetState();
  }, []);
  const obj9 = bottom(13677);
  const obj11 = { items: null, pageWidth: null, onPageChange: null };
  const obj12 = { label: null, id: null, page: null };
  const intl = bottom(1126).intl;
  obj12.label = intl.string(bottom(1126).t.tahjbP);
  const intl2 = bottom(1126).intl;
  obj12.id = intl2.string(bottom(1126).t.tahjbP);
  obj12.page = closure_17(closure_28, { extraBottomHeight: tmp14 + 16, scrollToSectionId: field });
  const items3 = [obj12, ];
  const obj14 = { label: null, id: null, page: null };
  const intl3 = bottom(1126).intl;
  obj14.label = intl3.string(bottom(1126).t.w3RBdW);
  const intl4 = bottom(1126).intl;
  obj14.id = intl4.string(bottom(1126).t.w3RBdW);
  obj14.page = closure_17(closure_30, { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial });
  items3[1] = obj14;
  obj11.items = items3;
  obj11.pageWidth = tmp11;
  obj11.onPageChange = callback2;
  const segmentedControlState = bottom(8513).useSegmentedControlState(obj11);
  const obj10 = bottom(8513);
  const obj13 = { extraBottomHeight: tmp14 + 16, scrollToSectionId: field };
  const obj15 = { extraBottomHeight: tmp14 + 16, fractionalState: tmp21.fractionalState, isInReverseTrial };
  let num = -32;
  if (stateFromStores) {
    num = bottom + 8;
  }
  sharedValue = bottom(4811).useSharedValue(num);
  const obj16 = bottom(4811);
  const fn = function $() {
    return { bottom: sharedValue.get() };
  };
  fn.__closure = { floatTabBottomOffset: sharedValue };
  fn.__workletHash = 16798997576498;
  fn.__initData = __initData;
  const items4 = [sharedValue, bottom, stateFromStores];
  const animatedStyle = bottom(4811).useAnimatedStyle(fn);
  const effect1 = obj5.useEffect(() => {
    if (!stateFromStores) {
      const obj = ReanimatedRexport;
      const result = sharedValue.set(obj.withDelay(500, spring.withSpring(bottom + 8, { duration: 2000, dampingRatio: 0.4, stiffness: 300 })));
    }
  }, items4);
  let tmpResult = bottom(4811);
  const theme = bottom(4930).useThemeContext().theme;
  let tmpResult6 = bottom(4930);
  const isThemeDarkResult = bottom(4930).isThemeDark(theme);
  const tmpResult7 = bottom(4930);
  const tmp6Result = navigation(13678);
  const tmp6ResultResult = navigation(13678)(tmp21.endsAt, bottom(13678).CountDownMessageTypes.ENDS_IN);
  isEligibleSenderForReferralProgram = bottom(8067).useIsEligibleSenderForReferralProgram();
  const items5 = [isEligibleSenderForReferralProgram];
  const effect2 = obj5.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE)) {
      const obj2 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.MOBILE_NITRO_HOME_SETTINGS_BADGE, obj2);
      const tmpResult = DismissibleContentUnsafeUtils;
    }
    obj = DismissibleContentUnsafeUtils;
    if (!tmpResult4.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE)) {
      const obj3 = { dismissAction: ContentDismissActionType.TAKE_ACTION };
      const result1 = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.REFERRAL_TRIAL_MOBILE_NITRO_HOME_BADGE, obj3);
      const tmpResult5 = DismissibleContentUnsafeUtils;
    }
    if (isEligibleSenderForReferralProgram) {
      const result2 = ReferralProgramUtils.markReferralProgramEntrypointBadgeAcknowledged();
      const tmpResult6 = ReferralProgramUtils;
    }
    tmpResult4 = DismissibleContentUnsafeUtils;
  }, items5);
  const effect3 = obj5.useEffect(() => {
    if (!obj.UNSAFE_isDismissibleContentDismissed(bottom(_undefined[50]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD)) {
      const result = bottom(_undefined[49]).UNSAFE_markDismissibleContentAsDismissed(bottom(_undefined[50]).DismissibleContent.WHATS_NEW_TENURE_BADGE_REWARD);
      const tmpResult = bottom(_undefined[49]);
    }
    obj = bottom(_undefined[49]);
  }, []);
  const tmpResult8 = bottom(8067);
  promotionMarketingComponent = bottom(13636).usePromotionMarketingComponent(tmp(10065).MarketingComponentType.PREMIUM_TAB);
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
  const tmpResult9 = bottom(13636);
  obj18.source = navigation(13679);
  const items8 = [closure_17(navigation(6163), obj18), closure_17(closure_26, { onClose: onClose.onClose, subscription: stateFromStores1 }), , , ];
  let tmp26Result = tmp21.fractionalState !== FractionalPremiumStates.NONE && !isInReverseTrial;
  if (tmp26Result) {
    const obj19 = { countdownText: tmp6ResultResult };
    tmp26Result = closure_17(tmp6(13680), obj19);
  }
  items8[2] = tmp26Result;
  const obj20 = { style: tmp5.tabContent, children: null };
  const items9 = [closure_17(bottom(10566).SegmentedControlPages, { state: segmentedControlState }), ];
  if (tmp26Result4) {
    const obj21 = { style: tmp5.backSwipeSensor };
    tmp26Result4 = closure_17(tmp40, obj21);
  }
  items9[1] = tmp26Result4;
  obj20.children = items9;
  items8[3] = closure_18(c5, obj20);
  const obj22 = { style: animatedStyle, onLayout: callback1, children: null };
  const tmp6Result3 = navigation(6163);
  const items10 = [closure_17(c5, { style: tmp5.segmentedControlActual, onLayout: callback, children: closure_17(bottom(8761).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) }), , ];
  let tmp26Result5 = !isThemeDarkResult;
  if (!isThemeDarkResult) {
    const obj24 = { start: null, end: null, colors: null, style: null };
    ({ START: obj29.start, END: obj29.end } = closure_12);
    obj24.colors = ["rgba(218, 187, 249, 0.5)", "rgba(229, 177, 193, 0.5)"];
    const items11 = [tmp5.segmentedControlVirtual, ];
    const obj25 = { height: tmp14, zIndex: 2 };
    items11[1] = obj25;
    obj24.style = items11;
    tmp26Result5 = closure_17(tmp6(5388), obj24);
  }
  items10[1] = tmp26Result5;
  const obj23 = { style: tmp5.segmentedControlActual, onLayout: callback, children: closure_17(bottom(8761).SegmentedControl, { state: segmentedControlState, variant: "experimental_Small" }) };
  if (tmpResult10.isAndroid()) {
    const obj26 = { style: null };
    const items12 = [, , ];
    ({ segmentedControlVirtual: arr14[0], androidSegmentedControlBackground: arr14[1] } = tmp5);
    const obj27 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items12[2] = obj27;
    obj26.style = items12;
    let tmp26Result6 = closure_17(tmp40, obj26);
  } else {
    let num3 = 0.5;
    if (isThemeDarkResult) {
      num3 = 0.2;
    }
    const obj28 = { blurAmount: num3, style: null, blurTheme: null, tintColor: null };
    const items13 = [tmp5.segmentedControlVirtual, ];
    const obj30 = { height: tmp14, zIndex: 1, overflow: "hidden" };
    items13[1] = obj30;
    obj28.style = items13;
    obj28.blurTheme = theme;
    let tmp46;
    if (theme === constants2.ONYX) {
      tmp46 = closure_21;
    }
    obj28.tintColor = tmp46;
    tmp26Result6 = closure_17(tmp6(5363), obj28);
    const tmp6Result4 = tmp6(5363);
  }
  items10[2] = tmp26Result6;
  obj22.children = items10;
  items8[4] = closure_18(navigation(4811).View, obj22);
  obj17.children = items8;
  return closure_18(c5, obj17);
});
export const BACK_BUTTON_SIZE = 24;