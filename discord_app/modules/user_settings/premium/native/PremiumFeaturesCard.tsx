// === Module 9506: PremiumFeaturesCard ===

// Module 9506 (PremiumFeaturesCard)
import _modDef38 from "module_38" /* 38 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3075 from "module_3075" /* 3075 */;
import PremiumUtils from "PremiumUtils" /* 4295 */;
import Text_Text from "Text/Text" /* 4634 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7272 */;
import PriceUtils from "PriceUtils" /* 7344 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 7503 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 7532 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8166 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8972 */;
import usePremiumPlanPrice from "usePremiumPlanPrice" /* 9507 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 9513 */;
import PremiumGroupWordmarkDefault from "PremiumGroupWordmark" /* 9524 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 9525 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 9527 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 9534 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4630 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4300 */;
import SubscriptionStore from "SubscriptionStore" /* 4301 */;
import TextStyles_mod from "TextStyles" /* 5610 */;

const PremiumUtilsDefault = PremiumUtils;
const usePremiumPlanPriceDefault = usePremiumPlanPrice;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
const PremiumConstants = fn(1374);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_8, DISCOUNT_DURATION_FALLBACK: closure_9, DISCOUNT_PERCENTAGE_FALLBACK: c10, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_11, PRICE_PLACEHOLDER: closure_12, PremiumSubscriptionSKUToPremiumType: map1, PremiumTypes } = PremiumConstants);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_15, SubscriptionIntervalTypes: closure_16, SubscriptionPlanInfo: closure_17, SubscriptionPlans: closure_18 } = PremiumConstants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
const set = new Set(items);
const createStyles = fn(4638);
let obj2 = { containerWrapper: { position: "relative" }, card: { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: nativeDefault.radii.lg }, logoContainer: { marginBottom: 8 }, logo: { marginRight: 4 }, priceContainer: { display: "flex", flexWrap: "wrap", flexDirection: "row", maxWidth: "50%" }, discountPriceText: { maxWidth: "62%", includeFontPadding: true }, featureList: { marginTop: 8 }, featureLabel: null, featureRow: null, featureIcon: null, button: null, currentPlanLabel: null, trialSubTextContainer: null, trialSubText: null, pill: null, buttonIcon: null };
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 14));
obj4.marginLeft = -8;
obj2.featureLabel = obj4;
obj2.featureRow = { paddingVertical: 7 };
obj2.featureIcon = { height: 16, width: 16 };
obj2.button = { marginTop: 16 };
obj2.currentPlanLabel = { marginTop: 16, paddingVertical: 12, alignItems: "center", justifyContent: "center" };
obj2.trialSubTextContainer = { paddingHorizontal: 24, marginTop: -12, paddingBottom: 16, alignItems: "center", bottom: 0 };
let obj5 = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 12));
obj5.textAlign = "center";
obj2.trialSubText = obj5;
obj2.pill = { position: "absolute", top: -10, maxWidth: 240, alignSelf: "center", zIndex: 2 };
obj2.buttonIcon = { marginRight: 4, alignSelf: "center", marginTop: 1 };
let closure_22 = createStyles.createStyles(obj2);
let closure_23 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
function PriceText(fractionalPremiumInfo) {
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription } = fractionalPremiumInfo);
  const tmp = closure_22();
  const tmp4 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  const intervalStringAsNoun = PremiumUtilsDefault.getIntervalStringAsNoun(premiumItem.interval);
  let priceString;
  if (tmp4 != null) {
    priceString = tmp4.priceString;
  }
  if (priceString == null) {
    priceString = closure_1_12;
  }
  const formatRateResult = PriceUtils.formatRate(priceString, dependencyMap[premiumItem.basePlanId].interval, dependencyMap[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      const obj3 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: null };
      const intl7 = util.intl;
      const obj4 = { discountedPrice: discountedPriceString, numMonths: null, regularPrice: null };
      const discount = discountOffer.discount;
      let num4;
      if (discount != null) {
        num4 = discount.intervalCount;
      }
      if (num4 == null) {
        num4 = 1;
      }
      obj4.numMonths = num4;
      obj4.regularPrice = formatRateResult;
      obj3.children = intl7.format(util.t.sJTwHQ, obj4);
      return closure_1_19(Text_Text.Text, obj3);
    }
  }
  if (null != activeDiscountInfo) {
    if (null != premiumSubscription) {
      if (premiumSubscription.planIdFromItems === PREMIUM_YEAR_TIER_2.PREMIUM_YEAR_TIER_2) {
        let flag = false;
        if (null != premiumSubscription) {
          const planIdFromItems = premiumSubscription.planIdFromItems;
          let tmp21 = null != planIdFromItems;
          if (tmp21) {
            tmp21 = PremiumUtils.getPremiumType(planIdFromItems) === premiumType;
            const tmp7Result = PremiumUtils;
          }
          flag = tmp21;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl2 = util.intl;
            let percentage = activeDiscountInfo.percentage;
            if (percentage == null) {
              percentage = React6;
            }
            const obj5 = { percent: percentage, regularPrice: formatRateResult, renewalDate: PremiumUtils.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo.fractionalPremiumInfo) };
            let formatResult = intl2.format(util.t.z2oQtA, obj5);
            const tmp7Result5 = PremiumUtils;
          }
          const obj6 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: formatResult };
          return closure_1_19(Text_Text.Text, obj6);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          let priceString1 = PremiumGroupUtils.getPriceString(premiumSubscription);
          const intl6 = util.intl;
          let num3 = activeDiscountInfo.percentage;
          if (num3 == null) {
            num3 = 0;
          }
          const obj7 = { percent: num3, discountEndDate: null, regularPrice: null };
          const _Date = Date;
          const date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          obj7.discountEndDate = date;
          if (priceString1 == null) {
            priceString1 = closure_1_12;
          }
          obj7.regularPrice = priceString1;
          formatResult = intl6.format(_modDef3075.FwjZzr, obj7);
          const tmp7Result6 = PremiumGroupUtils;
        }
      }
      if (activeDiscountInfo.discountId === closure_1_11) {
        let source;
        if (tmp4 != null) {
          source = tmp4.source;
        }
        if (source === usePremiumPlanPrice.PremiumPlanPriceSource.API) {
          let percentage3 = activeDiscountInfo.percentage;
          if (percentage3 == null) {
            percentage3 = closure_1_10;
          }
          const _Math = Math;
          const rounded = Math.round(tmp4.price * (1 - percentage3 / 100));
          const intl4 = util.intl;
          let duration2 = activeDiscountInfo.duration;
          if (duration2 == null) {
            duration2 = React7;
          }
          const obj8 = { numMonths: duration2, discountedPrice: PriceUtils.formatPrice(rounded, tmp4.currency), billingPeriod: null, fullPrice: null };
          const intl5 = util.intl;
          obj8.billingPeriod = intl5.string(util.t.FPybU7);
          obj8.fullPrice = tmp4.priceString;
          formatResult = intl4.format(util.t.N43FMx, obj8);
          const tmp7Result7 = PriceUtils;
        }
      }
      const intl3 = util.intl;
      let percentage2 = activeDiscountInfo.percentage;
      if (percentage2 == null) {
        percentage2 = closure_1_10;
      }
      const obj9 = { percent: percentage2, numMonths: null, regularPrice: null };
      let duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = React7;
      }
      obj9.numMonths = duration;
      obj9.regularPrice = formatRateResult;
      formatResult = intl3.format(util.t["3ZiutU"], obj9);
    }
  }
  if (null != subscriptionTrial) {
    if (premiumType === map1[subscriptionTrial.skuId]) {
      const obj10 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: null };
      const intl = util.intl;
      let interval;
      if (subscriptionTrial != null) {
        interval = subscriptionTrial.interval;
      }
      const obj11 = { intervalType: interval, intervalCount: null };
      let intervalCount;
      if (subscriptionTrial != null) {
        intervalCount = subscriptionTrial.intervalCount;
      }
      const obj12 = { trialPeriod: null, price: null };
      obj11.intervalCount = intervalCount;
      obj12.trialPeriod = PremiumUtils.formatIntervalDuration(obj11);
      let priceString2;
      if (tmp4 != null) {
        priceString2 = tmp4.priceString;
      }
      if (priceString2 == null) {
        priceString2 = closure_1_12;
      }
      obj12.price = priceString2;
      obj10.children = intl.format(util.t["xOX9/9"], obj12);
      let tmp11Result = closure_1_19(Text_Text.Text, obj10);
      const tmp7Result8 = PremiumUtils;
    }
    return tmp11Result;
  }
  const obj13 = { accessible: true, style: tmp.priceContainer, children: null };
  let priceString3;
  if (tmp4 != null) {
    priceString3 = tmp4.priceString;
  }
  if (priceString3 == null) {
    priceString3 = closure_1_12;
  }
  const items = [closure_1_19(Text_Text.Text, { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 }), ];
  items[1] = closure_1_19(Text_Text.Text, { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun });
  obj13.children = items;
  tmp11Result = closure_1_20(View, obj13);
  const obj14 = { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun };
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default function PremiumFeaturesCard(premiumType) {
  premiumType = premiumType.premiumType;
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: _slicedToArray, hideButton } = premiumType);
  ({ style, onLayout } = premiumType);
  if (hideButton === undefined) {
    hideButton = false;
  }
  let flag = premiumType.forFractionalPremium;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = premiumType.hidePrice;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = premiumType.isPremiumGroup;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let UNSPECIFIED = premiumType.premiumGroupRole;
  if (UNSPECIFIED === undefined) {
    UNSPECIFIED = premiumType(1380).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let useReducedMotion;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = closure_22();
  _modDef38(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  const premiumTrialOffer = premiumType(7557).usePremiumTrialOffer();
  const obj = premiumType(7557);
  const premiumDiscountOffer = premiumType(8177).usePremiumDiscountOffer();
  const obj2 = premiumType(8177);
  const activeDiscountInfo = premiumType(8175).useActiveDiscountInfo();
  const obj3 = premiumType(8175);
  const tmp12 = useFractionalPremiumInfoDefault();
  let subscriptionTrial;
  const premiumTrialOfferPremiumType = premiumType(7556).usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  const obj4 = premiumType(7556);
  let interval;
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  const obj5 = { intervalType: interval, intervalCount: null };
  let intervalCount;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  obj5.intervalCount = intervalCount;
  const result = premiumType(4295).formatIntervalDuration(obj5);
  const intl = tmp8(1115).intl;
  const stringResult = intl.string(premiumType(1115).t.J61px0);
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const tmp8Result = premiumType(4295);
  let items = [premiumBundleWithPredicate];
  const tmp19 = _slicedToArray(premiumType(504).useStateFromStoresArray(items, () => {
    const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const first = tmp19[0];
  useReducedMotion = closure_15[premiumType];
  const tmp8Result8 = premiumType(504);
  const items1 = [interval1];
  const stateFromStores = premiumType(504).useStateFromStores(items1, () => {
    const items = [closure_5];
    return SubscriptionPlanStore.isLoadedForSKUs(items);
  });
  const tmp8Result9 = premiumType(504);
  const items2 = [useReducedMotion];
  const stateFromStores1 = premiumType(504).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const tmp8Result10 = premiumType(504);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    isBoostOnly = tmp8(1609).isMetaQuest();
    const tmp8Result11 = tmp8(1609);
  }
  let tmp25 = null;
  if (null != first) {
    tmp25 = null;
    if (undefined !== first.planIdFromItems) {
      tmp25 = dependencyMap[first.planIdFromItems];
    }
  }
  interval1 = undefined;
  if (tmp25 != null) {
    interval1 = tmp25.interval;
  }
  if (interval1 == null) {
    interval1 = constants.MONTH;
  }
  const tmp23 = usePremiumFeaturesDefault(premiumType, flag, UNSPECIFIED);
  premiumBundleWithPredicate = premiumType(7519).getPremiumBundleWithPredicate((additionalPlans) => {
    let tmp = 0 === additionalPlans.additionalPlans.length;
    ({ numPremiumGuild, premiumTier, interval } = additionalPlans);
    if (tmp) {
      tmp = !additionalPlans.isDeprecated;
    }
    if (tmp) {
      tmp = 0 === numPremiumGuild;
    }
    if (tmp) {
      tmp = premiumTier === premiumType;
    }
    if (tmp) {
      tmp = interval === interval1;
    }
    return tmp;
  });
  _modDef38(null != premiumBundleWithPredicate, "could not find a premium item");
  const tmp8Result12 = premiumType(7519);
  const items3 = [premiumBundleWithPredicate];
  const discountedPriceString = premiumType(9522).useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
  let tmp32 = tmp24;
  if (null != first && stateFromStores && tmp19[1] && !isBoostOnly) {
    let flag4 = false;
    if (null != first) {
      const planIdFromItems = first.planIdFromItems;
      let tmp33 = null != planIdFromItems;
      if (tmp33) {
        tmp33 = tmp8(4295).getPremiumType(planIdFromItems) === premiumType;
        const tmp8Result14 = tmp8(4295);
      }
      flag4 = tmp33;
    }
    tmp32 = flag4;
  }
  const tmp34 = usePremiumPlanPriceDefault(premiumBundleWithPredicate.basePlanId);
  const obj6 = { style: tmp3.containerWrapper, onLayout, children: null };
  const items4 = [closure_19(premiumType(7548).PremiumPill, { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer }), ];
  const obj8 = { premiumType, style, children: null };
  const obj9 = { style: tmp3.card, children: null };
  const obj10 = { style: tmp3.logoContainer, children: null };
  const obj7 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer };
  const tmp8Result13 = premiumType(9522);
  if (flag3) {
    let tmp37Result = closure_19(PremiumGroupWordmarkDefault, { width: 185, height: 20, alwaysWhite: true });
  } else {
    const obj11 = { premiumType, style: tmp3.logo };
    tmp37Result = closure_19(PremiumFeaturesLogoDefault, obj11);
  }
  obj10.children = tmp37Result;
  const items5 = [closure_19(analyticsLocations, obj10), closure_19(PremiumFeaturesWumpusDefault, { premiumType }), , , ];
  if (flag3) {
    flag3 = null == activeDiscountInfo;
  }
  let tmp37Result5 = !flag3;
  if (!flag3) {
    tmp37Result5 = !flag;
  }
  if (tmp37Result5) {
    tmp37Result5 = !flag2;
  }
  if (tmp37Result5) {
    const obj12 = { premiumItem: premiumBundleWithPredicate, discountedPriceString, discountOffer: premiumDiscountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription: first, fractionalPremiumInfo: tmp12 };
    tmp37Result5 = closure_19(PriceText, obj12);
  }
  let tmp37Result6 = premiumType === premiumTrialOfferPremiumType;
  items5[2] = tmp37Result5;
  items5[3] = closure_19(PremiumFeatureListDefault, { style: tmp3.featureList, features: tmp23, iconStyle: tmp3.featureIcon, labelStyle: tmp3.featureLabel, rowStyle: tmp3.featureRow });
  if (hideButton) {
    items5[4] = !hideButton;
    obj9.children = items5;
    const items6 = [closure_20(tmp36, obj9), ];
    if (tmp37Result6) {
      const obj14 = { accessible: true, style: tmp3.trialSubTextContainer, children: null };
      const obj15 = { variant: "text-md/normal", style: tmp3.trialSubText, children: null };
      const intl6 = tmp8(1115).intl;
      const obj16 = { trialPeriod: result, price: null };
      let priceString;
      if (tmp34 != null) {
        priceString = tmp34.priceString;
      }
      if (priceString == null) {
        priceString = closure_12;
      }
      obj16.price = priceString;
      obj15.children = intl6.format(tmp8(1115).t.pC4tcv, obj16);
      obj14.children = closure_19(tmp8(4634).Text, obj15);
      tmp37Result6 = closure_19(tmp36, obj14);
    }
    items6[1] = tmp37Result6;
    obj8.children = items6;
    items4[1] = closure_20(tmp4Result, obj8);
    obj6.children = items4;
    return closure_20(tmp36, obj6);
  } else {
    if (tmp32) {
      const obj17 = { style: tmp3.currentPlanLabel, accessible: true, accessibilityRole: "text", children: null };
      const obj18 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl5 = tmp8(1115).intl;
      obj18.children = intl5.string(tmp8(1115).t["j+wlhy"]);
      obj17.children = closure_19(tmp8(4634).Text, obj18);
      let obj19 = obj17;
    } else {
      obj19 = { style: tmp3.button, children: null };
      if (tmp37Result6) {
        const obj20 = { text: stringResult, icon: null, iconPosition: null, variant: null, size: "md", grow: true, shiny: null, disabled: null, onPress: null };
        if (null != premiumDiscountOffer) {
          const obj21 = { style: tmp3.buttonIcon, color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, size: "sm" };
          const tmp37Result7 = closure_19(tmp8(8797).NitroWheelIcon, obj21);
        }
        obj20.icon = tmp37Result7;
        let str;
        if (tmp31) {
          str = "start";
        }
        obj20.iconPosition = str;
        if (null != premiumDiscountOffer) {
          let str2 = "primary-overlay";
        } else {
          str2 = "experimental_premium-secondary";
        }
        obj20.variant = str2;
        obj20.shiny = !stateFromStores1;
        obj20.disabled = tmp24;
        obj20.onPress = function onPress() {
          return openPremiumPlanSelectionActionSheetDefault({ analyticsLocation, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId, onPaymentSuccess, onPaymentDismiss });
        };
        obj19.children = closure_19(tmp43, obj20);
      } else if (tmp31) {
        const intl4 = tmp8(1115).intl;
        const obj22 = { percent: premiumDiscountOffer.discount.amount };
        let formatToPlainStringResult = intl4.formatToPlainString(tmp8(1115).t.bkQ4bH, obj22);
      } else if (premiumType === PremiumTypes.TIER_0) {
        const intl3 = tmp8(1115).intl;
        formatToPlainStringResult = intl3.string(tmp8(1115).t.cM8bbx);
      } else {
        const intl2 = tmp8(1115).intl;
        formatToPlainStringResult = intl2.string(tmp8(1115).t["8x0jKT"]);
      }
    }
    closure_19(tmp36, obj19);
  }
  const obj13 = { style: tmp3.featureList, features: tmp23, iconStyle: tmp3.featureIcon, labelStyle: tmp3.featureLabel, rowStyle: tmp3.featureRow };
  tmp4Result = PremiumFeaturesBackgroundDefault;
};