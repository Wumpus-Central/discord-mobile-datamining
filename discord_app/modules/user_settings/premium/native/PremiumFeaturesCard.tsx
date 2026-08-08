// discord_app/modules/user_settings/premium/native/PremiumFeaturesCard.tsx
import useDiscountedPremiumProductInfo from "useDiscountedPremiumProductInfo";
import "messagesProxy";
import { View } from "getSystemLocale";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import addSubscriptionPlan from "addSubscriptionPlan";
import reset from "reset";
import ME from "ME";
import GuildFeatures from "GuildFeatures";
import { Fonts } from "sum";
import jsxProd from "module_38";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import set from "get ActivityIndicator";
import { 00038__ } from "../../../../../_runtime/metro/00038__.js";
import { PremiumFeatureList } from "../../../../components_native/premium/PremiumFeatureList.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getPremiumPlanItem } from "../../../../utils/PremiumUtils.tsx";
import { formatSingleCurrencyPrice } from "../../../../utils/PriceUtils.tsx";
import { calculateFractionalPremiumInfo } from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import { usePremiumPlanPrice } from "../../../premium/native/hooks/usePremiumPlanPrice.tsx";
import { messagesProxy } from "../../../premium/premium_group/PremiumGroup.messages.js";
import { PremiumFeaturesWumpus } from "PremiumFeaturesWumpus.tsx";
import { usePremiumFeatures } from "utils/usePremiumFeatures.tsx";

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let PremiumTypes;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = ME);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: metroImportAll, DISCOUNT_DURATION_FALLBACK: c9, DISCOUNT_PERCENTAGE_FALLBACK: c10, PRICE_PLACEHOLDER: unpackModuleId, PremiumSubscriptionSKUToPremiumType: closure_12, PremiumTypes } = GuildFeatures);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_14, SubscriptionIntervalTypes: closure_15, SubscriptionPlanInfo: closure_16, SubscriptionPlans: closure_17 } = GuildFeatures);
({ jsx: closure_18, jsxs: closure_19 } = jsxProd);
let items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
let set = new Set(items);
createCacheKey = { containerWrapper: { position: "relative" }, card: null, logoContainer: null, logo: null, priceContainer: null, discountPriceText: null, featureList: null, featureLabel: null, featureRow: null, featureIcon: null, button: null, currentPlanLabel: null, trialSubTextContainer: null, trialSubText: null, pill: null, buttonIcon: null };
createCacheKey = { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: require("Themes").radii.lg };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: 8 };
createCacheKey[3] = { marginRight: 4 };
createCacheKey[4] = { display: "flex", flexWrap: "wrap", flexDirection: "row", maxWidth: "50%" };
createCacheKey[5] = { maxWidth: "62%", includeFontPadding: true };
createCacheKey[6] = { marginTop: 8 };
let obj1 = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").unsafe_rawColors.WHITE, 14));
obj1.marginLeft = -8;
createCacheKey[7] = obj1;
createCacheKey[8] = { paddingVertical: 7 };
createCacheKey[9] = { height: 16, width: 16 };
createCacheKey[10] = { marginTop: 16 };
createCacheKey[11] = { marginTop: 16, paddingVertical: 12, alignItems: "center", justifyContent: "center" };
createCacheKey[12] = { paddingHorizontal: 24, marginTop: -12, paddingBottom: 16, alignItems: "center", bottom: 0 };
let obj2 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.DISPLAY_MEDIUM, require("Themes").unsafe_rawColors.WHITE, 12));
obj2.textAlign = "center";
createCacheKey[13] = obj2;
createCacheKey[14] = { position: "absolute", top: -10, maxWidth: 240, alignSelf: "center", zIndex: 2 };
createCacheKey[15] = { marginRight: 4, alignSelf: "center", marginTop: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_22 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
function PriceText(fractionalPremiumInfo) {
  let activeDiscountInfo;
  let discountOffer;
  let discountedPriceString;
  let premiumItem;
  let premiumSubscription;
  let premiumType;
  let subscriptionTrial;
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription } = fractionalPremiumInfo);
  const tmp = createCacheKey();
  const tmp4 = usePremiumPlanPrice(premiumItem.basePlanId);
  let obj = getPremiumPlanItem;
  const intervalStringAsNoun = obj.getIntervalStringAsNoun(premiumItem.interval);
  let obj1 = formatSingleCurrencyPrice;
  let priceString;
  if (tmp4 != null) {
    priceString = tmp4.priceString;
  }
  if (priceString == null) {
    priceString = closure_11;
  }
  const formatRateResult = obj1.formatRate(priceString, dependencyMap[premiumItem.basePlanId].interval, dependencyMap[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      obj = { variant: "text-md/normal", color: "text-overlay-light", style: null, children: null };
      obj[2] = tmp.discountPriceText;
      const intl5 = tmp7(1236).intl;
      obj = { discountedPrice: null, numMonths: null, regularPrice: null };
      obj[0] = discountedPriceString;
      const discount = discountOffer.discount;
      let num2;
      if (discount != null) {
        num2 = discount.userUsageLimit;
      }
      if (num2 == null) {
        num2 = 1;
      }
      obj[1] = num2;
      obj[2] = formatRateResult;
      obj[3] = intl5.format(tmp7(1236).t.sJTwHQ, obj);
      return callback2(tmp7(4299).Text, obj);
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
            let tmp7Result = tmp7(3947);
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
            const intl2 = tmp7(1236).intl;
            let percentage = activeDiscountInfo.percentage;
            if (percentage == null) {
              percentage = closure_8;
            }
            obj1 = { percent: null, regularPrice: null, renewalDate: null };
            obj1[0] = percentage;
            obj1[1] = formatRateResult;
            tmp7Result = tmp7(3947);
            obj1[2] = tmp7Result.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo.fractionalPremiumInfo);
            let formatResult = intl2.format(tmp7(1236).t.z2oQtA, obj1);
          }
          const obj2 = { variant: "text-md/normal", color: "text-overlay-light", style: null, children: null };
          obj2[2] = tmp.discountPriceText;
          obj2[3] = formatResult;
          return callback2(tmp7(4299).Text, obj2);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          let priceString1 = tmp7(8156).getPriceString(premiumSubscription);
          const intl4 = tmp7(1236).intl;
          let num = activeDiscountInfo.percentage;
          if (num == null) {
            num = 0;
          }
          const obj3 = { percent: null, discountEndDate: null, regularPrice: null };
          obj3[0] = num;
          const _Date = Date;
          const date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          obj3[1] = date;
          if (priceString1 == null) {
            priceString1 = closure_11;
          }
          obj3[2] = priceString1;
          formatResult = intl4.format(messagesProxy.FwjZzr, obj3);
          const tmp7Result1 = tmp7(8156);
        }
      }
      const intl3 = tmp7(1236).intl;
      let percentage2 = activeDiscountInfo.percentage;
      if (percentage2 == null) {
        percentage2 = closure_10;
      }
      const obj4 = { percent: null, numMonths: null, regularPrice: null };
      obj4[0] = percentage2;
      let duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = closure_9;
      }
      obj4[1] = duration;
      obj4[2] = formatRateResult;
      formatResult = intl3.format(tmp7(1236).t["3ZiutU"], obj4);
    }
  }
  if (null != subscriptionTrial) {
    if (premiumType === table[subscriptionTrial.sku_id]) {
      const obj5 = { variant: "text-md/normal", color: "text-overlay-light", style: null, children: null };
      obj5[2] = tmp.discountPriceText;
      const intl = tmp7(1236).intl;
      let interval;
      if (subscriptionTrial != null) {
        interval = subscriptionTrial.interval;
      }
      const obj6 = { intervalType: null, intervalCount: null };
      obj6[0] = interval;
      let interval_count;
      if (subscriptionTrial != null) {
        interval_count = subscriptionTrial.interval_count;
      }
      const obj7 = { trialPeriod: null, price: null };
      obj6[1] = interval_count;
      obj7[0] = tmp7(3947).formatIntervalDuration(obj6);
      let priceString2;
      if (tmp4 != null) {
        priceString2 = tmp4.priceString;
      }
      if (priceString2 == null) {
        priceString2 = closure_11;
      }
      obj7[1] = priceString2;
      obj5[3] = intl.format(tmp7(1236).t["xOX9/9"], obj7);
      let tmp11Result = callback2(tmp7(4299).Text, obj5);
      const tmp16 = callback2;
      const tmp7Result2 = tmp7(3947);
    }
    return tmp11Result;
  }
  const obj8 = { accessible: true, style: tmp.priceContainer, children: null };
  let priceString3;
  if (tmp4 != null) {
    priceString3 = tmp4.priceString;
  }
  if (priceString3 == null) {
    priceString3 = closure_11;
  }
  const items = [callback2(Text.Text, { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 }), ];
  const obj9 = { variant: "text-md/normal", color: "text-overlay-light", children: null };
  obj9[2] = " / " + intervalStringAsNoun;
  items[1] = callback2(Text.Text, obj9);
  obj8[2] = items;
  tmp11Result = closure_19(View, obj8);
}
let result = set.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default function PremiumFeaturesCard(premiumType) {
  let useDiscountedPremiumProductInfo;
  let dependencyMap;
  let hideButton;
  let importDefault;
  let onLayout;
  let style;
  premiumType = premiumType.premiumType;
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: useDiscountedPremiumProductInfo, hideButton } = premiumType);
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
    UNSPECIFIED = premiumType(1921).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let maybeApplyNoTextColorForLightCustomTheme;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = createCacheKey();
  00038__(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  let obj = premiumType(6911);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  let obj1 = premiumType(7341);
  const premiumDiscountOffer = obj1.usePremiumDiscountOffer();
  let obj2 = premiumType(8164);
  const activeDiscountInfo = obj2.useActiveDiscountInfo();
  const tmp6 = 00038__;
  let obj3 = premiumType(6910);
  let subscription_trial;
  const premiumTrialOfferPremiumType = obj3.usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscription_trial = premiumTrialOffer.subscription_trial;
  }
  let tmp8Result = tmp8(3947);
  let interval;
  if (subscription_trial != null) {
    interval = subscription_trial.interval;
  }
  obj = { intervalType: interval, intervalCount: null };
  let interval_count;
  if (subscription_trial != null) {
    interval_count = subscription_trial.interval_count;
  }
  obj[1] = interval_count;
  const result = tmp8Result.formatIntervalDuration(obj);
  const intl = tmp8(1236).intl;
  const stringResult = intl.string(premiumType(1236).t.J61px0);
  analyticsLocations = tmp4(5728)().analyticsLocations;
  tmp8Result = tmp8(589);
  let items = [premiumBundleWithPredicate];
  const tmp19 = callback(tmp8Result.useStateFromStoresArray(items, () => {
    const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
    return items;
  }), 2);
  const first = tmp19[0];
  maybeApplyNoTextColorForLightCustomTheme = table2[premiumType];
  const tmp12 = calculateFractionalPremiumInfo();
  const items1 = [interval1];
  const stateFromStores = premiumType(589).useStateFromStores(items1, () => {
    const items = [maybeApplyNoTextColorForLightCustomTheme];
    return interval1.isLoadedForSKUs(items);
  });
  const tmp8Result1 = premiumType(589);
  const items2 = [maybeApplyNoTextColorForLightCustomTheme];
  const stateFromStores1 = premiumType(589).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const tmp8Result2 = premiumType(589);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    isBoostOnly = tmp8(1605).isMetaQuest();
    const tmp8Result3 = tmp8(1605);
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
  const tmp23 = usePremiumFeatures(premiumType, flag, UNSPECIFIED);
  premiumBundleWithPredicate = premiumType(6871).getPremiumBundleWithPredicate((additionalPlans) => {
    let interval;
    let numPremiumGuild;
    let premiumTier;
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
  00038__(null != premiumBundleWithPredicate, "could not find a premium item");
  const tmp8Result4 = premiumType(6871);
  const items3 = [premiumBundleWithPredicate];
  const discountedPriceString = premiumType(7403).useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
  let tmp32 = tmp24;
  if (null != first && stateFromStores && tmp19[1] && !isBoostOnly) {
    let flag4 = false;
    if (null != first) {
      const planIdFromItems = first.planIdFromItems;
      let tmp33 = null != planIdFromItems;
      if (tmp33) {
        tmp33 = tmp8(3947).getPremiumType(planIdFromItems) === premiumType;
        const tmp8Result6 = tmp8(3947);
      }
      flag4 = tmp33;
    }
    tmp32 = flag4;
  }
  const tmp34 = usePremiumPlanPrice(premiumBundleWithPredicate.basePlanId);
  obj = { style: tmp3.containerWrapper, onLayout, children: null };
  obj1 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: tmp31, premiumType, trialOffer: premiumTrialOffer };
  const items4 = [callback2(premiumType(6902).PremiumPill, obj1), ];
  obj2 = { premiumType, style, children: null };
  obj3 = { style: tmp3.card, children: null };
  const obj4 = { style: tmp3.logoContainer, children: null };
  const tmp8Result5 = premiumType(7403);
  if (flag3) {
    let tmp37Result = tmp37(tmp4(8626), { width: 185, height: 20, alwaysWhite: true });
  } else {
    const obj5 = { premiumType: null, style: null };
    obj5[0] = premiumType;
    obj5[1] = tmp3.logo;
    tmp37Result = tmp37(tmp4(8627), obj5);
  }
  obj4[1] = tmp37Result;
  const items5 = [callback2(analyticsLocations, obj4), callback2(PremiumFeaturesWumpus, { premiumType }), , , ];
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
    const obj6 = { premiumItem: null, discountedPriceString: null, discountOffer: null, activeDiscountInfo: null, subscriptionTrial: null, premiumType: null, premiumSubscription: null, fractionalPremiumInfo: null };
    obj6[0] = premiumBundleWithPredicate;
    obj6[1] = discountedPriceString;
    obj6[2] = premiumDiscountOffer;
    obj6[3] = activeDiscountInfo;
    obj6[4] = subscription_trial;
    obj6[5] = premiumType;
    obj6[6] = first;
    obj6[7] = tmp12;
    tmp37Result = tmp37(PriceText, obj6);
  }
  let tmp37Result1 = premiumType === premiumTrialOfferPremiumType;
  items5[2] = tmp37Result;
  items5[3] = callback2(PremiumFeatureList, { style: tmp3.featureList, features: tmp23, iconStyle: tmp3.featureIcon, labelStyle: tmp3.featureLabel, rowStyle: tmp3.featureRow });
  if (hideButton) {
    items5[4] = !hideButton;
    obj3[1] = items5;
    const items6 = [tmp35(tmp36, obj3), ];
    if (tmp37Result1) {
      const obj8 = { accessible: true, style: null, children: null };
      obj8[1] = tmp3.trialSubTextContainer;
      const obj9 = { variant: "text-md/normal", style: null, children: null };
      obj9[1] = tmp3.trialSubText;
      const intl6 = tmp8(1236).intl;
      const obj10 = { trialPeriod: null, price: null };
      obj10[0] = result;
      let priceString;
      if (tmp34 != null) {
        priceString = tmp34.priceString;
      }
      if (priceString == null) {
        priceString = closure_11;
      }
      obj10[1] = priceString;
      obj9[2] = intl6.format(tmp8(1236).t.pC4tcv, obj10);
      obj8[2] = tmp37(tmp8(4299).Text, obj9);
      tmp37Result1 = tmp37(tmp36, obj8);
    }
    items6[1] = tmp37Result1;
    obj2[2] = items6;
    items4[1] = tmp35(tmp4Result, obj2);
    obj[2] = items4;
    return tmp35(tmp36, obj);
  } else {
    if (tmp32) {
      const obj11 = { style: null, accessible: true, accessibilityRole: "text", children: null };
      obj11[0] = tmp3.currentPlanLabel;
      const obj12 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
      const intl5 = tmp8(1236).intl;
      obj12[2] = intl5.string(tmp8(1236).t["j+wlhy"]);
      obj11[3] = tmp37(tmp8(4299).Text, obj12);
      let obj13 = obj11;
    } else {
      obj13 = { style: null, children: null };
      obj13[0] = tmp3.button;
      if (tmp37Result1) {
        const obj14 = { text: null, icon: null, iconPosition: null, variant: null, size: "md", grow: true, shiny: null, disabled: null, onPress: null };
        obj14[0] = stringResult;
        if (null != premiumDiscountOffer) {
          const obj15 = { style: null, color: null, size: "sm" };
          obj15[0] = tmp3.buttonIcon;
          obj15[1] = tmp4(712).colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT;
          const tmp37Result2 = tmp37(tmp8(7704).NitroWheelIcon, obj15);
        }
        obj14[1] = tmp37Result2;
        let str;
        if (tmp31) {
          str = "start";
        }
        obj14[2] = str;
        if (null != premiumDiscountOffer) {
          let str2 = "primary-overlay";
        } else {
          str2 = "experimental_premium-secondary";
        }
        obj14[3] = str2;
        obj14[6] = !stateFromStores1;
        obj14[7] = tmp24;
        obj14[8] = function onPress() {
          return outer1_1(outer1_2[41])({ analyticsLocation: outer1_22, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId: closure_1, onPaymentSuccess: closure_2, onPaymentDismiss: useDiscountedPremiumProductInfo });
        };
        obj13[1] = tmp37(tmp43, obj14);
      } else if (tmp31) {
        const intl4 = tmp8(1236).intl;
        const obj16 = { percent: null };
        obj16[0] = premiumDiscountOffer.discount.amount;
        let formatToPlainStringResult = intl4.formatToPlainString(tmp8(1236).t.bkQ4bH, obj16);
      } else if (premiumType === PremiumTypes.TIER_0) {
        const intl3 = tmp8(1236).intl;
        formatToPlainStringResult = intl3.string(tmp8(1236).t.cM8bbx);
      } else {
        const intl2 = tmp8(1236).intl;
        formatToPlainStringResult = intl2.string(tmp8(1236).t["8x0jKT"]);
      }
    }
    tmp37(tmp36, obj13);
  }
};