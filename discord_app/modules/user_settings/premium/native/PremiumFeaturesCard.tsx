// discord_app/modules/user_settings/premium/native/PremiumFeaturesCard.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3063 from "../../../premium/premium_group/PremiumGroup.messages.js";
import PremiumUtilsDefault from "../../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import usePremiumPlanPriceDefault from "../../../premium/native/hooks/usePremiumPlanPrice.tsx";
import usePremiumFeaturesDefault from "utils/usePremiumFeatures.tsx";
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus.tsx";
import PremiumFeatureListDefault from "../../../../components_native/premium/PremiumFeatureList.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
const PremiumConstants = fn(1373);
({
  ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_8,
  DISCOUNT_DURATION_FALLBACK: closure_9,
  DISCOUNT_PERCENTAGE_FALLBACK: c10,
  PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_11,
  PRICE_PLACEHOLDER: closure_12,
  PremiumSubscriptionSKUToPremiumType: map1,
  PremiumTypes,
} = PremiumConstants);
({
  PremiumTypeToActivePremiumSubscriptionSKU: closure_15,
  SubscriptionIntervalTypes: closure_16,
  SubscriptionPlanInfo: closure_17,
  SubscriptionPlans: closure_18,
} = PremiumConstants);
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_19, jsxs: closure_20 } = jsxProd);
let items = [,];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
const set = new Set(items);
fn(4560);
let createStyles = {
  containerWrapper: { position: "relative" },
  card: null,
  logoContainer: null,
  logo: null,
  priceContainer: null,
  discountPriceText: null,
  featureList: null,
  featureLabel: null,
  featureRow: null,
  featureIcon: null,
  button: null,
  currentPlanLabel: null,
  trialSubTextContainer: null,
  trialSubText: null,
  pill: null,
  buttonIcon: null,
};
createStyles = {
  display: "flex",
  justifyContent: "flex-start",
  width: "100%",
  padding: 24,
  backgroundColor: "transparent",
  overflow: "hidden",
  borderRadius: nativeDefault.radii.lg,
};
createStyles.card = createStyles;
createStyles.logoContainer = { marginBottom: 8 };
createStyles.logo = { marginRight: 4 };
createStyles.priceContainer = { display: "flex", flexWrap: "wrap", flexDirection: "row", maxWidth: "50%" };
createStyles.discountPriceText = { maxWidth: "62%", includeFontPadding: true };
createStyles.featureList = { marginTop: 8 };
let obj1 = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 14));
obj1.marginLeft = -8;
createStyles.featureLabel = obj1;
createStyles.featureRow = { paddingVertical: 7 };
createStyles.featureIcon = { height: 16, width: 16 };
createStyles.button = { marginTop: 16 };
createStyles.currentPlanLabel = { marginTop: 16, paddingVertical: 12, alignItems: "center", justifyContent: "center" };
createStyles.trialSubTextContainer = {
  paddingHorizontal: 24,
  marginTop: -12,
  paddingBottom: 16,
  alignItems: "center",
  bottom: 0,
};
let obj2 = {};
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 12));
obj2.textAlign = "center";
createStyles.trialSubText = obj2;
createStyles.pill = { position: "absolute", top: -10, maxWidth: 240, alignSelf: "center", zIndex: 2 };
createStyles.buttonIcon = { marginRight: 4, alignSelf: "center", marginTop: 1 };
let closure_22 = createStyles.createStyles(createStyles);
let closure_23 = {
  page: AnalyticsPages.USER_SETTINGS,
  section: AnalyticsSections.SETTINGS_PREMIUM,
  objectType: AnalyticsObjectTypes.BUY,
};
function PriceText(fractionalPremiumInfo) {
  ({
    premiumItem,
    discountedPriceString,
    discountOffer,
    activeDiscountInfo,
    subscriptionTrial,
    premiumType,
    premiumSubscription,
  } = fractionalPremiumInfo);
  const tmp = closure_22();
  const tmp4 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  let obj = PremiumUtilsDefault;
  const intervalStringAsNoun = obj.getIntervalStringAsNoun(premiumItem.interval);
  let obj1 = PriceUtils;
  let priceString;
  if (tmp4 != null) {
    priceString = tmp4.priceString;
  }
  if (priceString == null) {
    priceString = closure_1_12;
  }
  const formatRateResult = obj1.formatRate(
    priceString,
    dependencyMap[premiumItem.basePlanId].interval,
    dependencyMap[premiumItem.basePlanId].intervalCount,
  );
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      obj = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: null };
      const intl7 = tmp7(1114).intl;
      obj = { discountedPrice: discountedPriceString, numMonths: null, regularPrice: null };
      const discount = discountOffer.discount;
      let num4;
      if (discount != null) {
        num4 = discount.intervalCount;
      }
      if (num4 == null) {
        num4 = 1;
      }
      obj.numMonths = num4;
      obj.regularPrice = formatRateResult;
      obj.children = intl7.format(tmp7(1114).t.sJTwHQ, obj);
      return closure_1_19(tmp7(4556).Text, obj);
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
            let tmp7Result = tmp7(4218);
            tmp21 = tmp7Result.getPremiumType(planIdFromItems) === premiumType;
          }
          flag = tmp21;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl2 = tmp7(1114).intl;
            let percentage = activeDiscountInfo.percentage;
            if (percentage == null) {
              percentage = React6;
            }
            obj1 = { percent: percentage, regularPrice: formatRateResult, renewalDate: null };
            tmp7Result = tmp7(4218);
            obj1.renewalDate = tmp7Result.getExpectedRenewalDate(
              premiumSubscription,
              fractionalPremiumInfo.fractionalPremiumInfo,
            );
            let formatResult = intl2.format(tmp7(1114).t.z2oQtA, obj1);
          }
          const obj2 = {
            variant: "text-md/normal",
            color: "text-overlay-light",
            style: tmp.discountPriceText,
            children: formatResult,
          };
          return closure_1_19(tmp7(4556).Text, obj2);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          let priceString1 = tmp7(8049).getPriceString(premiumSubscription);
          const intl6 = tmp7(1114).intl;
          let num3 = activeDiscountInfo.percentage;
          if (num3 == null) {
            num3 = 0;
          }
          const obj3 = { percent: num3, discountEndDate: null, regularPrice: null };
          const _Date = Date;
          const date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          obj3.discountEndDate = date;
          if (priceString1 == null) {
            priceString1 = closure_1_12;
          }
          obj3.regularPrice = priceString1;
          formatResult = intl6.format(_modDef3063.FwjZzr, obj3);
          const tmp7Result1 = tmp7(8049);
        }
      }
      if (activeDiscountInfo.discountId === closure_1_11) {
        let source;
        if (tmp4 != null) {
          source = tmp4.source;
        }
        if (source === tmp7(9364).PremiumPlanPriceSource.API) {
          let percentage3 = activeDiscountInfo.percentage;
          if (percentage3 == null) {
            percentage3 = closure_1_10;
          }
          const _Math = Math;
          const rounded = Math.round(tmp4.price * (1 - percentage3 / 100));
          const intl4 = tmp7(1114).intl;
          let duration2 = activeDiscountInfo.duration;
          if (duration2 == null) {
            duration2 = React7;
          }
          const obj4 = {
            numMonths: duration2,
            discountedPrice: tmp7(7234).formatPrice(rounded, tmp4.currency),
            billingPeriod: null,
            fullPrice: null,
          };
          const intl5 = tmp7(1114).intl;
          obj4.billingPeriod = intl5.string(tmp7(1114).t.FPybU7);
          obj4.fullPrice = tmp4.priceString;
          formatResult = intl4.format(tmp7(1114).t.N43FMx, obj4);
          const tmp7Result2 = tmp7(7234);
        }
      }
      const intl3 = tmp7(1114).intl;
      let percentage2 = activeDiscountInfo.percentage;
      if (percentage2 == null) {
        percentage2 = closure_1_10;
      }
      const obj5 = { percent: percentage2, numMonths: null, regularPrice: null };
      let duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = React7;
      }
      obj5.numMonths = duration;
      obj5.regularPrice = formatRateResult;
      formatResult = intl3.format(tmp7(1114).t["3ZiutU"], obj5);
    }
  }
  if (null != subscriptionTrial) {
    if (premiumType === map1[subscriptionTrial.skuId]) {
      const obj6 = {
        variant: "text-md/normal",
        color: "text-overlay-light",
        style: tmp.discountPriceText,
        children: null,
      };
      const intl = tmp7(1114).intl;
      let interval;
      if (subscriptionTrial != null) {
        interval = subscriptionTrial.interval;
      }
      const obj7 = { intervalType: interval, intervalCount: null };
      let intervalCount;
      if (subscriptionTrial != null) {
        intervalCount = subscriptionTrial.intervalCount;
      }
      const obj8 = { trialPeriod: null, price: null };
      obj7.intervalCount = intervalCount;
      obj8.trialPeriod = tmp7(4218).formatIntervalDuration(obj7);
      let priceString2;
      if (tmp4 != null) {
        priceString2 = tmp4.priceString;
      }
      if (priceString2 == null) {
        priceString2 = closure_1_12;
      }
      obj8.price = priceString2;
      obj6.children = intl.format(tmp7(1114).t["xOX9/9"], obj8);
      let tmp11Result = closure_1_19(tmp7(4556).Text, obj6);
      const tmp7Result3 = tmp7(4218);
    }
    return tmp11Result;
  }
  const obj9 = { accessible: true, style: tmp.priceContainer, children: null };
  let priceString3;
  if (tmp4 != null) {
    priceString3 = tmp4.priceString;
  }
  if (priceString3 == null) {
    priceString3 = closure_1_12;
  }
  const items = [
    closure_1_19(Text_Text.Text, { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 }),
    closure_1_19(Text_Text.Text, {
      variant: "text-md/normal",
      color: "text-overlay-light",
      children: " / " + intervalStringAsNoun,
    }),
  ];
  obj9.children = items;
  tmp11Result = closure_1_20(View, obj9);
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default function PremiumFeaturesCard(premiumType) {
  premiumType = premiumType.premiumType;
  ({
    applicationId: importDefault,
    onPaymentSuccess: dependencyMap,
    onPaymentDismiss: _slicedToArray,
    hideButton,
  } = premiumType);
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
    UNSPECIFIED = premiumType(1379).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let useReducedMotion;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = closure_22();
  _modDef38(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  let obj = premiumType(7447);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let obj1 = premiumType(8060);
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj2 = premiumType(8058);
  const activeDiscountInfo = obj2.useActiveDiscountInfo();
  let obj3 = premiumType(7446);
  let subscriptionTrial;
  const premiumTrialOfferPremiumType = obj3.usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  let tmp8Result = tmp8(4218);
  let interval;
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  obj = { intervalType: interval, intervalCount: null };
  let intervalCount;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  obj.intervalCount = intervalCount;
  const result = tmp8Result.formatIntervalDuration(obj);
  const intl = tmp8(1114).intl;
  const stringResult = intl.string(premiumType(1114).t.J61px0);
  analyticsLocations = tmp4(7162)().analyticsLocations;
  tmp8Result = tmp8(504);
  let items = [premiumBundleWithPredicate];
  const tmp19 = _slicedToArray(
    tmp8Result.useStateFromStoresArray(items, () => {
      const items = [
        premiumBundleWithPredicate.getPremiumTypeSubscription(),
        premiumBundleWithPredicate.hasFetchedSubscriptions(),
      ];
      return items;
    }),
    2,
  );
  const first = tmp19[0];
  useReducedMotion = closure_15[premiumType];
  const tmp12 = useFractionalPremiumInfoDefault();
  const items1 = [interval1];
  const stateFromStores = premiumType(504).useStateFromStores(items1, () => {
    const items = [closure_5];
    return SubscriptionPlanStore.isLoadedForSKUs(items);
  });
  const tmp8Result1 = premiumType(504);
  const items2 = [useReducedMotion];
  const stateFromStores1 = premiumType(504).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const tmp8Result2 = premiumType(504);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    isBoostOnly = tmp8(1608).isMetaQuest();
    const tmp8Result3 = tmp8(1608);
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
  premiumBundleWithPredicate = premiumType(7409).getPremiumBundleWithPredicate((additionalPlans) => {
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
  const tmp8Result4 = premiumType(7409);
  const items3 = [premiumBundleWithPredicate];
  const discountedPriceString = premiumType(9379).useDiscountedPremiumProductInfo(
    premiumDiscountOffer,
    items3,
  ).discountedPriceString;
  let tmp32 = tmp24;
  if (null != first && stateFromStores && tmp19[1] && !isBoostOnly) {
    let flag4 = false;
    if (null != first) {
      const planIdFromItems = first.planIdFromItems;
      let tmp33 = null != planIdFromItems;
      if (tmp33) {
        tmp33 = tmp8(4218).getPremiumType(planIdFromItems) === premiumType;
        const tmp8Result6 = tmp8(4218);
      }
      flag4 = tmp33;
    }
    tmp32 = flag4;
  }
  const tmp34 = usePremiumPlanPriceDefault(premiumBundleWithPredicate.basePlanId);
  obj = { style: tmp3.containerWrapper, onLayout, children: null };
  obj1 = {
    style: tmp3.pill,
    discountOffer: premiumDiscountOffer,
    isActiveDiscount: null != activeDiscountInfo,
    shouldShowDiscountUpsell: tmp31,
    premiumType,
    trialOffer: premiumTrialOffer,
  };
  const items4 = [closure_19(premiumType(7438).PremiumPill, obj1)];
  obj2 = { premiumType, style, children: null };
  obj3 = { style: tmp3.card, children: null };
  const obj4 = { style: tmp3.logoContainer, children: null };
  const tmp8Result5 = premiumType(9379);
  if (flag3) {
    let tmp37Result = tmp37(tmp4(9381), { width: 185, height: 20, alwaysWhite: true });
  } else {
    const obj5 = { premiumType, style: tmp3.logo };
    tmp37Result = tmp37(tmp4(9382), obj5);
  }
  obj4.children = tmp37Result;
  const items5 = [closure_19(analyticsLocations, obj4), closure_19(PremiumFeaturesWumpusDefault, { premiumType }), , ,];
  if (flag3) {
    flag3 = null == activeDiscountInfo;
  }
  tmp37Result = !flag3;
  if (!flag3) {
    tmp37Result = !flag;
  }
  if (tmp37Result) {
    tmp37Result = !flag2;
  }
  if (tmp37Result) {
    const obj6 = {
      premiumItem: premiumBundleWithPredicate,
      discountedPriceString,
      discountOffer: premiumDiscountOffer,
      activeDiscountInfo,
      subscriptionTrial,
      premiumType,
      premiumSubscription: first,
      fractionalPremiumInfo: tmp12,
    };
    tmp37Result = tmp37(PriceText, obj6);
  }
  let tmp37Result1 = premiumType === premiumTrialOfferPremiumType;
  items5[2] = tmp37Result;
  items5[3] = closure_19(PremiumFeatureListDefault, {
    style: tmp3.featureList,
    features: tmp23,
    iconStyle: tmp3.featureIcon,
    labelStyle: tmp3.featureLabel,
    rowStyle: tmp3.featureRow,
  });
  if (hideButton) {
    items5[4] = !hideButton;
    obj3.children = items5;
    const items6 = [tmp35(tmp36, obj3)];
    if (tmp37Result1) {
      const obj8 = { accessible: true, style: tmp3.trialSubTextContainer, children: null };
      const obj9 = { variant: "text-md/normal", style: tmp3.trialSubText, children: null };
      const intl6 = tmp8(1114).intl;
      const obj10 = { trialPeriod: result, price: null };
      let priceString;
      if (tmp34 != null) {
        priceString = tmp34.priceString;
      }
      if (priceString == null) {
        priceString = closure_12;
      }
      obj10.price = priceString;
      obj9.children = intl6.format(tmp8(1114).t.pC4tcv, obj10);
      obj8.children = tmp37(tmp8(4556).Text, obj9);
      tmp37Result1 = tmp37(tmp36, obj8);
    }
    items6[1] = tmp37Result1;
    obj2.children = items6;
    items4[1] = tmp35(tmp4Result, obj2);
    obj.children = items4;
    return tmp35(tmp36, obj);
  } else {
    if (tmp32) {
      const obj11 = { style: tmp3.currentPlanLabel, accessible: true, accessibilityRole: "text", children: null };
      const obj12 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl5 = tmp8(1114).intl;
      obj12.children = intl5.string(tmp8(1114).t["j+wlhy"]);
      obj11.children = tmp37(tmp8(4556).Text, obj12);
      let obj13 = obj11;
    } else {
      obj13 = { style: tmp3.button, children: null };
      if (tmp37Result1) {
        const obj14 = {
          text: stringResult,
          icon: null,
          iconPosition: null,
          variant: null,
          size: "md",
          grow: true,
          shiny: null,
          disabled: null,
          onPress: null,
        };
        if (null != premiumDiscountOffer) {
          const obj15 = {
            style: tmp3.buttonIcon,
            color: tmp4(576).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT,
            size: "sm",
          };
          const tmp37Result2 = tmp37(tmp8(8662).NitroWheelIcon, obj15);
        }
        obj14.icon = tmp37Result2;
        let str;
        if (tmp31) {
          str = "start";
        }
        obj14.iconPosition = str;
        if (null != premiumDiscountOffer) {
          let str2 = "primary-overlay";
        } else {
          str2 = "experimental_premium-secondary";
        }
        obj14.variant = str2;
        obj14.shiny = !stateFromStores1;
        obj14.disabled = tmp24;
        obj14.onPress = function onPress() {
          return openPremiumPlanSelectionActionSheetDefault({
            analyticsLocation,
            analyticsLocations,
            premiumType: premiumBundleWithPredicate.premiumTier,
            applicationId,
            onPaymentSuccess,
            onPaymentDismiss,
          });
        };
        obj13.children = tmp37(tmp43, obj14);
      } else if (tmp31) {
        const intl4 = tmp8(1114).intl;
        const obj16 = { percent: premiumDiscountOffer.discount.amount };
        let formatToPlainStringResult = intl4.formatToPlainString(tmp8(1114).t.bkQ4bH, obj16);
      } else if (premiumType === PremiumTypes.TIER_0) {
        const intl3 = tmp8(1114).intl;
        formatToPlainStringResult = intl3.string(tmp8(1114).t.cM8bbx);
      } else {
        const intl2 = tmp8(1114).intl;
        formatToPlainStringResult = intl2.string(tmp8(1114).t["8x0jKT"]);
      }
    }
    tmp37(tmp36, obj13);
  }
}
