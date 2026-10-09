// discord_app/modules/user_settings/premium/native/PremiumFeaturesCard.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PremiumUtils from "../../../../utils/PremiumUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useAnalyticsLocationsDefault from "../../../app_analytics/useAnalyticsLocations.tsx";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import openPremiumPlanSelectionActionSheetDefault from "../../../premium/native/openPremiumPlanSelectionActionSheet.tsx";
import PremiumGroupUtils from "../../../premium/premium_group/PremiumGroupUtils.native.tsx";
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground.tsx";
import usePremiumPlanPrice from "../../../premium/native/hooks/usePremiumPlanPrice.tsx";
import usePremiumFeaturesDefault from "utils/usePremiumFeatures.tsx";
import PremiumGroupWordmarkDefault from "../../../premium/premium_group/native/PremiumGroupWordmark.tsx";
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo.tsx";
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus.tsx";
import PremiumFeatureListDefault from "../../../../components_native/premium/PremiumFeatureList.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import SubscriptionPlanStore from "../../../../stores/billing/SubscriptionPlanStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

const usePremiumPlanPriceDefault = usePremiumPlanPrice;

const _modDef3277 = percentage(3277);
const PremiumUtilsDefault = percentage(4728);
require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
const PremiumConstants = fn(1392);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: closure_8, DISCOUNT_DURATION_FALLBACK: closure_9, DISCOUNT_PERCENTAGE_FALLBACK: c10, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: closure_11, PRICE_PLACEHOLDER: closure_12, PremiumSubscriptionSKUs: map1, PremiumSubscriptionSKUToPremiumType: closure_14, PremiumTypes } = PremiumConstants);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_16, SubscriptionIntervalTypes: closure_17, SubscriptionPlanInfo: closure_18, SubscriptionPlans: closure_19 } = PremiumConstants);
const Fonts = fn(1096).Fonts;
const jsxProd = fn(21);
({ jsx: closure_20, jsxs: closure_21 } = jsxProd);
let items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
const set = new Set(items);
const createStyles = fn(5091);
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
let closure_23 = createStyles.createStyles(obj2);
let closure_24 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
let ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(40);
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription, fractionalPremiumInfo } = arg0);
  const tmp4 = closure_23();
  let percentage = importDefault;
  const tmp5 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  if (cResult[0] !== premiumItem.interval) {
    const intervalStringAsNoun = PremiumUtilsDefault.getIntervalStringAsNoun(premiumItem.interval);
    cResult[0] = premiumItem.interval;
    cResult[1] = intervalStringAsNoun;
    let tmp6 = intervalStringAsNoun;
    const percentageResult = PremiumUtilsDefault;
  } else {
    tmp6 = cResult[1];
  }
  let intervalCount = dependencyMap3[premiumItem.basePlanId];
  if (cResult[2] === activeDiscountInfo) {
    if (cResult[3] === discountOffer) {
      if (cResult[4] === discountedPriceString) {
        if (cResult[5] === fractionalPremiumInfo) {
          if (cResult[6] === intervalCount.interval) {
            if (cResult[7] === intervalCount.intervalCount) {
              if (cResult[8] === tmp5) {
                if (cResult[9] === premiumSubscription) {
                  if (cResult[10] === premiumType) {
                    if (cResult[11] === tmp4.discountPriceText) {
                      const _Symbol = Symbol;
                      if (cResult[12] !== Symbol.for("react.early_return_sentinel")) {
                        return tmp8;
                      } else {
                        if (null != subscriptionTrial) {
                          if (premiumType === dependencyMap[subscriptionTrial.skuId]) {
                            let priceString;
                            if (tmp5 != null) {
                              priceString = tmp5.priceString;
                            }
                            if (cResult[25] === priceString) {
                              let interval;
                              if (subscriptionTrial != null) {
                                interval = subscriptionTrial.interval;
                              }
                              if (cResult[26] === interval) {
                                let intervalCount1;
                                if (subscriptionTrial != null) {
                                  intervalCount1 = subscriptionTrial.intervalCount;
                                }
                                if (cResult[27] === intervalCount1) {
                                  let tmp51 = cResult[28];
                                }
                                if (cResult[29] === tmp4.discountPriceText) {
                                  if (cResult[30] === tmp51) {
                                    let tmp59 = cResult[31];
                                  }
                                  return tmp59;
                                }
                                const obj2 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: tmp51 };
                                const tmp61 = constants2(Text_Text.Text, obj2);
                                cResult[29] = tmp4.discountPriceText;
                                cResult[30] = tmp51;
                                cResult[31] = tmp61;
                                tmp59 = tmp61;
                              }
                            }
                            const intl6 = util.intl;
                            let interval1;
                            if (subscriptionTrial != null) {
                              interval1 = subscriptionTrial.interval;
                            }
                            const obj3 = { intervalType: interval1, intervalCount: null };
                            let intervalCount2;
                            if (subscriptionTrial != null) {
                              intervalCount2 = subscriptionTrial.intervalCount;
                            }
                            const obj4 = { trialPeriod: null, price: null };
                            obj3.intervalCount = intervalCount2;
                            obj4.trialPeriod = PremiumUtils.formatIntervalDuration(obj3);
                            let priceString1;
                            if (tmp5 != null) {
                              priceString1 = tmp5.priceString;
                            }
                            if (priceString1 == null) {
                              priceString1 = __initData;
                            }
                            obj4.price = priceString1;
                            const formatResult = intl6.format(util.t["xOX9/9"], obj4);
                            let priceString2;
                            if (tmp5 != null) {
                              priceString2 = tmp5.priceString;
                            }
                            cResult[25] = priceString2;
                            let interval2;
                            if (subscriptionTrial != null) {
                              interval2 = subscriptionTrial.interval;
                            }
                            cResult[26] = interval2;
                            let intervalCount3;
                            if (subscriptionTrial != null) {
                              intervalCount3 = subscriptionTrial.intervalCount;
                            }
                            cResult[27] = intervalCount3;
                            cResult[28] = formatResult;
                            tmp51 = formatResult;
                            const tmpResult = PremiumUtils;
                          }
                        }
                        let priceString3;
                        if (tmp5 != null) {
                          priceString3 = tmp5.priceString;
                        }
                        if (priceString3 == null) {
                          priceString3 = __initData;
                        }
                        if (cResult[32] !== priceString3) {
                          const obj5 = { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 };
                          const tmp39 = constants2(Text_Text.Text, obj5);
                          cResult[32] = priceString3;
                          cResult[33] = tmp39;
                          let tmp37 = tmp39;
                        } else {
                          tmp37 = cResult[33];
                        }
                        const _HermesInternal = HermesInternal;
                        const combined = " / " + tmp6;
                        if (cResult[34] !== combined) {
                          const obj6 = { variant: "text-md/normal", color: "text-overlay-light", children: combined };
                          const tmp43 = constants2(Text_Text.Text, obj6);
                          cResult[34] = combined;
                          cResult[35] = tmp43;
                          let tmp41 = tmp43;
                        } else {
                          tmp41 = cResult[35];
                        }
                        if (cResult[36] === tmp4.priceContainer) {
                          if (cResult[37] === tmp37) {
                            if (cResult[38] === tmp41) {
                              let tmp44 = cResult[39];
                            }
                            return tmp44;
                          }
                        }
                        const obj7 = { accessible: true, style: tmp4.priceContainer, children: null };
                        const items = [tmp37, tmp41];
                        obj7.children = items;
                        const tmp47 = guild(View, obj7);
                        cResult[36] = tmp4.priceContainer;
                        cResult[37] = tmp37;
                        cResult[38] = tmp41;
                        cResult[39] = tmp47;
                        tmp44 = tmp47;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  let tmp9 = globalThis;
  const forResult = Symbol.for("react.early_return_sentinel");
  let priceString4;
  if (tmp5 != null) {
    priceString4 = tmp5.priceString;
  }
  if (priceString4 == null) {
    priceString4 = __initData;
  }
  const formatRateResult = PriceUtils.formatRate(priceString4, intervalCount.interval, intervalCount.intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      const obj8 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: null };
      const intl7 = util.intl;
      const obj9 = { discountedPrice: discountedPriceString, numMonths: null, regularPrice: null };
      const discount = discountOffer.discount;
      let num3;
      if (discount != null) {
        num3 = discount.intervalCount;
      }
      if (num3 == null) {
        num3 = 1;
      }
      obj9.numMonths = num3;
      obj9.regularPrice = formatRateResult;
      obj8.children = intl7.format(util.t.sJTwHQ, obj9);
      let tmp62Result = constants2(Text_Text.Text, obj8);
    }
    cResult[2] = activeDiscountInfo;
    cResult[3] = discountOffer;
    cResult[4] = discountedPriceString;
    cResult[5] = fractionalPremiumInfo;
    fractionalPremiumInfo = intervalCount.interval;
    cResult[6] = fractionalPremiumInfo;
    intervalCount = intervalCount.intervalCount;
    cResult[7] = intervalCount;
    cResult[8] = tmp5;
    cResult[9] = premiumSubscription;
    cResult[10] = premiumType;
    premiumSubscription = tmp4.discountPriceText;
    cResult[11] = premiumSubscription;
    cResult[12] = tmp62Result;
  }
  tmp62Result = forResult;
  if (null != activeDiscountInfo) {
    tmp62Result = forResult;
    if (null != premiumSubscription) {
      if (premiumSubscription.planIdFromItems === closure_1_19.PREMIUM_YEAR_TIER_2) {
        let flag = false;
        if (null != premiumSubscription) {
          const planIdFromItems = premiumSubscription.planIdFromItems;
          let tmp14 = null != planIdFromItems;
          if (tmp14) {
            tmp14 = PremiumUtils.getPremiumType(planIdFromItems) === premiumType;
            const tmpResult7 = PremiumUtils;
          }
          flag = tmp14;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl = util.intl;
            let percentage2 = activeDiscountInfo.percentage;
            if (percentage2 == null) {
              percentage2 = closure_1_8;
            }
            const obj10 = { percent: percentage2, regularPrice: formatRateResult, renewalDate: PremiumUtils.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) };
            let discountPriceText = intl.format(util.t.z2oQtA, obj10);
            const tmpResult8 = PremiumUtils;
          }
          if (cResult[22] === discountPriceText) {
          }
          const obj11 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: discountPriceText };
          const tmp31 = constants2(Text_Text.Text, obj11);
          cResult[22] = discountPriceText;
          discountPriceText = tmp4.discountPriceText;
          cResult[23] = discountPriceText;
          cResult[24] = tmp31;
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          if (cResult[13] === activeDiscountInfo.percentage) {
          }
          let priceString5 = PremiumGroupUtils.getPriceString(premiumSubscription);
          const intl5 = util.intl;
          let num12 = activeDiscountInfo.percentage;
          if (num12 == null) {
            num12 = 0;
          }
          const obj12 = { percent: num12, discountEndDate: null, regularPrice: null };
          const date = new tmp9.Date(premiumSubscription.metadata.active_discount_expires_at);
          tmp9 = date;
          obj12.discountEndDate = date;
          if (priceString5 == null) {
            priceString5 = __initData;
          }
          obj12.regularPrice = priceString5;
          const formatResult1 = intl5.format(_modDef3277.FwjZzr, obj12);
          percentage = activeDiscountInfo.percentage;
          cResult[13] = percentage;
          cResult[14] = premiumSubscription;
          cResult[15] = formatResult1;
          const tmpResult9 = PremiumGroupUtils;
        }
      }
      if (activeDiscountInfo.discountId === closure_1_11) {
        let source;
        if (tmp5 != null) {
          source = tmp5.source;
        }
        if (source === usePremiumPlanPrice.PremiumPlanPriceSource.API) {
          let percentage4 = activeDiscountInfo.percentage;
          if (percentage4 == null) {
            percentage4 = collapsed;
          }
          if (cResult[16] === activeDiscountInfo.duration) {
            if (cResult[17] === percentage4) {
              if (cResult[18] === tmp5.currency) {
                if (cResult[19] === tmp5.price) {
                  if (cResult[20] === tmp5.priceString) {
                    let tmp19 = cResult[21];
                  }
                  discountPriceText = tmp19;
                }
              }
            }
          }
          const _Math = Math;
          const rounded = Math.round(tmp5.price * (1 - percentage4 / 100));
          const intl3 = util.intl;
          let duration2 = activeDiscountInfo.duration;
          if (duration2 == null) {
            duration2 = options;
          }
          const obj13 = { numMonths: duration2, discountedPrice: PriceUtils.formatPrice(rounded, tmp5.currency), billingPeriod: null, fullPrice: null };
          const intl4 = util.intl;
          obj13.billingPeriod = intl4.string(util.t.FPybU7);
          obj13.fullPrice = tmp5.priceString;
          const formatResult2 = intl3.format(util.t.N43FMx, obj13);
          cResult[16] = activeDiscountInfo.duration;
          cResult[17] = percentage4;
          cResult[18] = tmp5.currency;
          cResult[19] = tmp5.price;
          cResult[20] = tmp5.priceString;
          cResult[21] = formatResult2;
          tmp19 = formatResult2;
          const tmpResult10 = PriceUtils;
        }
      }
      const intl2 = util.intl;
      let percentage3 = activeDiscountInfo.percentage;
      if (percentage3 == null) {
        percentage3 = collapsed;
      }
      const obj14 = { percent: percentage3, numMonths: null, regularPrice: null };
      let duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = options;
      }
      obj14.numMonths = duration;
      obj14.regularPrice = formatRateResult;
      discountPriceText = intl2.format(util.t["3ZiutU"], obj14);
    }
  }
  const tmpResult6 = PriceUtils;
}) : ((fractionalPremiumInfo) => {
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription } = fractionalPremiumInfo);
  const tmp = closure_23();
  const tmp4 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  const intervalStringAsNoun = PremiumUtilsDefault.getIntervalStringAsNoun(premiumItem.interval);
  let priceString;
  if (tmp4 != null) {
    priceString = tmp4.priceString;
  }
  if (priceString == null) {
    priceString = __initData;
  }
  const formatRateResult = PriceUtils.formatRate(priceString, dependencyMap3[premiumItem.basePlanId].interval, dependencyMap3[premiumItem.basePlanId].intervalCount);
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
      return constants2(Text_Text.Text, obj3);
    }
  }
  if (null != activeDiscountInfo) {
    if (null != premiumSubscription) {
      if (premiumSubscription.planIdFromItems === closure_1_19.PREMIUM_YEAR_TIER_2) {
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
              percentage = closure_1_8;
            }
            const obj5 = { percent: percentage, regularPrice: formatRateResult, renewalDate: PremiumUtils.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo.fractionalPremiumInfo) };
            let formatResult = intl2.format(util.t.z2oQtA, obj5);
            const tmp7Result5 = PremiumUtils;
          }
          const obj6 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: formatResult };
          return constants2(Text_Text.Text, obj6);
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
            priceString1 = __initData;
          }
          obj7.regularPrice = priceString1;
          formatResult = intl6.format(_modDef3277.FwjZzr, obj7);
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
            percentage3 = collapsed;
          }
          const _Math = Math;
          const rounded = Math.round(tmp4.price * (1 - percentage3 / 100));
          const intl4 = util.intl;
          let duration2 = activeDiscountInfo.duration;
          if (duration2 == null) {
            duration2 = options;
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
        percentage2 = collapsed;
      }
      const obj9 = { percent: percentage2, numMonths: null, regularPrice: null };
      let duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = options;
      }
      obj9.numMonths = duration;
      obj9.regularPrice = formatRateResult;
      formatResult = intl3.format(util.t["3ZiutU"], obj9);
    }
  }
  if (null != subscriptionTrial) {
    if (premiumType === dependencyMap[subscriptionTrial.skuId]) {
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
        priceString2 = __initData;
      }
      obj12.price = priceString2;
      obj10.children = intl.format(util.t["xOX9/9"], obj12);
      let tmp11Result = constants2(Text_Text.Text, obj10);
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
    priceString3 = __initData;
  }
  const items = [constants2(Text_Text.Text, { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 }), ];
  items[1] = constants2(Text_Text.Text, { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun });
  obj13.children = items;
  tmp11Result = guild(View, obj13);
  const obj14 = { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun };
});
ReactCompilerGating = fn(558);
let obj3 = { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: nativeDefault.radii.lg };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumFeaturesCard(premiumType) {
  const cResult = premiumType(576).c(68);
  premiumType = premiumType.premiumType;
  ({ style, onLayout, applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: _slicedToArray, hideButton, forFractionalPremium, hidePrice, isPremiumGroup, premiumGroupRole } = premiumType);
  let logo = undefined !== isPremiumGroup && isPremiumGroup;
  if (undefined === premiumGroupRole) {
    premiumGroupRole = tmp(1398).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const tmp7 = closure_23();
  const obj = premiumType(576);
  const tmp6 = undefined !== hidePrice && hidePrice;
  _modDef38(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  const premiumTrialOffer = premiumType(7163).usePremiumTrialOffer();
  const tmpResult = premiumType(7163);
  const premiumDiscountOffer = premiumType(8071).usePremiumDiscountOffer();
  const tmpResult13 = premiumType(8071);
  const activeDiscountInfo = premiumType(8069).useActiveDiscountInfo();
  const tmp14 = useFractionalPremiumInfoDefault();
  const tmpResult14 = premiumType(8069);
  let subscriptionTrial;
  const premiumTrialOfferPremiumType = premiumType(7162).usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  premiumType(4728);
  let interval;
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  let intervalCount;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  { intervalType: interval, intervalCount: null }.intervalCount = intervalCount;
  let tmp98Result = premiumType === premiumTrialOfferPremiumType;
  let stringResult = null;
  if (!tmp98Result) {
    if (stringResult == null) {
      let intl = tmp(1126).intl;
      stringResult = intl.string(tmp(1126).t.J61px0);
    }
    const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [SubscriptionStore];
      class K {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      cResult[0] = items;
      cResult[1] = K;
      tmp27 = items;
    } else {
      [tmp27, tmp28] = cResult;
    }
    [first] = tmp(504).useStateFromStoresArray(tmp27, K);
    const useReducedMotion = tmp34;
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [interval1];
      class K {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      let tmp35 = items1;
    } else {
      tmp35 = cResult[2];
    }
    if (cResult[3] !== dependencyMap2[premiumType]) {
      function re() {
        const items = [closure_5];
        return SubscriptionPlanStore.isLoadedForSKUs(items);
      }
      cResult[3] = tmp34;
      class K {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      cResult[4] = re;
      let tmp37 = re;
    } else {
      tmp37 = cResult[4];
    }
    const tmpResult17 = tmp(504);
    const _Symbol3 = Symbol;
    const stateFromStores = tmp(504).useStateFromStores(tmp35, tmp37);
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [useReducedMotion];
      class K {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      cResult[5] = items2;
      cResult[6] = tmp42;
      let tmp40 = tmp42;
      let tmp39 = items2;
    } else {
      tmp39 = cResult[5];
      tmp40 = cResult[6];
    }
    const tmpResult18 = tmp(504);
    const stateFromStores1 = tmp(504).useStateFromStores(tmp39, tmp40);
    const tmp44 = usePremiumFeaturesDefault(premiumType, tmp5, premiumGroupRole);
    let tmp45 = logo;
    if (logo) {
      tmp45 = null == activeDiscountInfo;
    }
    if (!tmp45) {
      tmp45 = tmp5;
    }
    if (!tmp45) {
      tmp45 = tmp6;
    }
    if (cResult[7] !== first) {
      let isMetaQuestResult = null != first && first.isBoostOnly;
      if (isMetaQuestResult) {
        isMetaQuestResult = tmp(1628).isMetaQuest();
        const tmpResult20 = tmp(1628);
      }
      class K {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      cResult[8] = isMetaQuestResult;
    }
    let tmp50 = null;
    if (null != first) {
      tmp50 = null;
      if (undefined !== first.planIdFromItems) {
        tmp50 = dependencyMap3[first.planIdFromItems];
      }
    }
    interval1 = undefined;
    if (tmp50 != null) {
      interval1 = tmp50.interval;
    }
    if (interval1 == null) {
      interval1 = constants.MONTH;
    }
    if (cResult[9] === interval1) {
      if (cResult[10] === premiumType) {
        let tmp54 = cResult[11];
      }
      SubscriptionStore = tmp54;
      class K {
        constructor() {
          items = [, ];
          items[0] = closure_7.getPremiumTypeSubscription();
          items[1] = closure_7.hasFetchedSubscriptions();
          return items;
        }
      }
      if (cResult[12] !== tmp54) {
        const items3 = [tmp54];
        class K {
          constructor() {
            items = [, ];
            items[0] = closure_7.getPremiumTypeSubscription();
            items[1] = closure_7.hasFetchedSubscriptions();
            return items;
          }
        }
        cResult[13] = items3;
        let tmp56 = items3;
      } else {
        tmp56 = cResult[13];
      }
      const discountedPriceString = tmp(9384).useDiscountedPremiumProductInfo(premiumDiscountOffer, tmp56).discountedPriceString;
      if (cResult[14] !== premiumType) {
        function getCTA() {
          if (premiumType === PremiumTypes.TIER_0) {
            const intl2 = util.intl;
            let stringResult = intl2.string(util.t.cM8bbx);
          } else {
            const intl = util.intl;
            stringResult = intl.string(util.t["8x0jKT"]);
          }
          return stringResult;
        }
        cResult[14] = premiumType;
        class K {
          constructor() {
            items = [, ];
            items[0] = closure_7.getPremiumTypeSubscription();
            items[1] = closure_7.hasFetchedSubscriptions();
            return items;
          }
        }
        cResult[15] = getCTA;
        let tmp58 = getCTA;
      } else {
        tmp58 = cResult[15];
      }
      let tmp59 = tmp49;
      if (tmp49) {
        if (null != first) {
          const planIdFromItems = first.planIdFromItems;
          let tmp60 = null != planIdFromItems;
          if (tmp60) {
            tmp60 = tmp(4728).getPremiumType(planIdFromItems) === premiumType;
            const tmpResult22 = tmp(4728);
          }
          class K {
            constructor() {
              items = [, ];
              items[0] = closure_7.getPremiumTypeSubscription();
              items[1] = closure_7.hasFetchedSubscriptions();
              return items;
            }
          }
        }
        tmp59 = flag;
      }
      const tmp61 = usePremiumPlanPriceDefault(tmp54.basePlanId);
      if (cResult[16] === premiumDiscountOffer) {
        if (cResult[17] === premiumType) {
          if (cResult[18] === tmp57) {
            if (cResult[19] === tmp7.pill) {
              if (cResult[20] === tmp63) {
                if (cResult[21] === premiumTrialOffer) {
                  let tmp64 = cResult[22];
                }
                const tmp8Result = PremiumFeaturesBackgroundDefault;
                if (cResult[23] === logo) {
                  if (cResult[24] === premiumType) {
                    if (cResult[25] === tmp7.logo) {
                      if (cResult[27] === tmp7.logoContainer) {
                        if (cResult[28] === tmp68) {
                          let tmp72 = cResult[29];
                        }
                        if (cResult[30] !== premiumType) {
                          { premiumType: null }.premiumType = premiumType;
                          class K {
                            constructor() {
                              items = [, ];
                              items[0] = closure_7.getPremiumTypeSubscription();
                              items[1] = closure_7.hasFetchedSubscriptions();
                              return items;
                            }
                          }
                          cResult[30] = premiumType;
                          cResult[31] = tmp78;
                          let tmp76 = tmp78;
                          const obj2 = { premiumType: null };
                        } else {
                          tmp76 = cResult[31];
                        }
                        if (cResult[32] === activeDiscountInfo) {
                          if (cResult[33] === premiumDiscountOffer) {
                            if (cResult[34] === discountedPriceString) {
                              if (cResult[35] === tmp14) {
                                if (cResult[36] === tmp54) {
                                  if (cResult[37] === first) {
                                    if (cResult[38] === premiumType) {
                                      if (cResult[39] === tmp46) {
                                        if (cResult[40] === subscriptionTrial) {
                                          let tmp79 = cResult[41];
                                        }
                                        if (cResult[42] === tmp44) {
                                          if (cResult[43] === tmp7.featureIcon) {
                                            if (cResult[44] === tmp7.featureLabel) {
                                              if (cResult[45] === tmp7.featureList) {
                                                if (cResult[46] === tmp7.featureRow) {
                                                  let tmp83 = cResult[47];
                                                }
                                                if (tmp4) {
                                                  if (cResult[48] === tmp62) {
                                                    if (cResult[49] === tmp7.card) {
                                                      if (cResult[50] === tmp72) {
                                                        if (cResult[51] === tmp76) {
                                                          if (cResult[52] === tmp79) {
                                                            if (cResult[53] === tmp83) {
                                                              if (cResult[54] === tmp87) {
                                                                let tmp95 = cResult[55];
                                                              }
                                                              if (tmp98Result) {
                                                                const obj3 = { accessible: true, style: tmp7.trialSubTextContainer, children: null };
                                                                class K {
                                                                  constructor() {
                                                                    items = [, ];
                                                                    items[0] = closure_7.getPremiumTypeSubscription();
                                                                    items[1] = closure_7.hasFetchedSubscriptions();
                                                                    return items;
                                                                  }
                                                                }
                                                                tmp99[1] = tmp7.trialSubText;
                                                                const intl4 = tmp(1126).intl;
                                                                const obj4 = { trialPeriod: tmp20, price: null };
                                                                let priceString;
                                                                if (tmp61 != null) {
                                                                  priceString = tmp61.priceString;
                                                                }
                                                                if (priceString == null) {
                                                                  priceString = closure_12;
                                                                }
                                                                obj4.price = priceString;
                                                                tmp99[2] = intl4.format(tmp(1126).t.pC4tcv, obj4);
                                                                obj3.children = closure_20(tmp(5087).Text, tmp99);
                                                                tmp98Result = closure_20(tmp62, obj3);
                                                              }
                                                              if (cResult[56] === tmp8Result) {
                                                                if (cResult[57] === premiumType) {
                                                                  if (cResult[58] === style) {
                                                                    if (cResult[59] === tmp95) {
                                                                      if (cResult[60] === tmp98Result) {
                                                                        let tmp101 = cResult[61];
                                                                      }
                                                                      if (cResult[62] === tmp62) {
                                                                        if (cResult[63] === onLayout) {
                                                                          if (cResult[64] === tmp7.containerWrapper) {
                                                                            if (cResult[65] === tmp64) {
                                                                              if (cResult[66] === tmp101) {
                                                                                let tmp103 = cResult[67];
                                                                              }
                                                                              return tmp103;
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                      class K {
                                                                        constructor() {
                                                                          items = [, ];
                                                                          items[0] = closure_7.getPremiumTypeSubscription();
                                                                          items[1] = closure_7.hasFetchedSubscriptions();
                                                                          return items;
                                                                        }
                                                                      }
                                                                      tmp105[0] = tmp7.containerWrapper;
                                                                      tmp105[1] = onLayout;
                                                                      const items4 = [tmp64, tmp101];
                                                                      tmp105[2] = items4;
                                                                      const tmp106 = closure_21(tmp62, tmp105);
                                                                      cResult[62] = tmp62;
                                                                      cResult[63] = onLayout;
                                                                      cResult[64] = tmp7.containerWrapper;
                                                                      cResult[65] = tmp64;
                                                                      cResult[66] = tmp101;
                                                                      cResult[67] = tmp106;
                                                                      tmp103 = tmp106;
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                              class K {
                                                                constructor() {
                                                                  items = [, ];
                                                                  items[0] = closure_7.getPremiumTypeSubscription();
                                                                  items[1] = closure_7.hasFetchedSubscriptions();
                                                                  return items;
                                                                }
                                                              }
                                                              const obj5 = { premiumType, style, children: null };
                                                              const items5 = [tmp95, tmp98Result];
                                                              obj5.children = items5;
                                                              const tmp102 = closure_21(tmp8Result, obj5);
                                                              cResult[56] = tmp8Result;
                                                              cResult[57] = premiumType;
                                                              cResult[58] = style;
                                                              cResult[59] = tmp95;
                                                              cResult[60] = tmp98Result;
                                                              cResult[61] = tmp102;
                                                              tmp101 = tmp102;
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                  const obj6 = { style: null, children: null };
                                                  class K {
                                                    constructor() {
                                                      items = [, ];
                                                      items[0] = closure_7.getPremiumTypeSubscription();
                                                      items[1] = closure_7.hasFetchedSubscriptions();
                                                      return items;
                                                    }
                                                  }
                                                  const items6 = [tmp72, tmp76, tmp79, tmp83, tmp87];
                                                  obj6.children = items6;
                                                  const tmp97 = closure_21(tmp62, obj6);
                                                  cResult[48] = tmp62;
                                                  cResult[49] = tmp7.card;
                                                  cResult[50] = tmp72;
                                                  cResult[51] = tmp76;
                                                  cResult[52] = tmp79;
                                                  cResult[53] = tmp83;
                                                  cResult[54] = tmp87;
                                                  cResult[55] = tmp97;
                                                  tmp95 = tmp97;
                                                } else {
                                                  if (tmp59) {
                                                    const obj7 = { style: tmp7.currentPlanLabel, accessible: true, accessibilityRole: "text", children: null };
                                                    const obj8 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
                                                    class K {
                                                      constructor() {
                                                        items = [, ];
                                                        items[0] = closure_7.getPremiumTypeSubscription();
                                                        items[1] = closure_7.hasFetchedSubscriptions();
                                                        return items;
                                                      }
                                                    }
                                                    const intl3 = tmp(1126).intl;
                                                    obj8.children = intl3.string(tmp(1126).t["j+wlhy"]);
                                                    obj7.children = closure_20(tmp93, obj8);
                                                    let obj9 = obj7;
                                                  } else {
                                                    obj9 = { style: tmp7.button, children: null };
                                                    if (tmp98Result) {
                                                      const obj10 = { text: stringResult, icon: null, iconPosition: null, variant: null, size: "md", grow: true, shiny: null, disabled: null, onPress: null };
                                                      if (null != premiumDiscountOffer) {
                                                        const obj11 = { style: tmp7.buttonIcon, color: null, size: "sm" };
                                                        class K {
                                                          constructor() {
                                                            items = [, ];
                                                            items[0] = closure_7.getPremiumTypeSubscription();
                                                            items[1] = closure_7.hasFetchedSubscriptions();
                                                            return items;
                                                          }
                                                        }
                                                        closure_20(tmp(9016).NitroWheelIcon, obj11);
                                                      }
                                                      class K {
                                                        constructor() {
                                                          items = [, ];
                                                          items[0] = closure_7.getPremiumTypeSubscription();
                                                          items[1] = closure_7.hasFetchedSubscriptions();
                                                          return items;
                                                        }
                                                      }
                                                      let str3;
                                                      if (tmp57) {
                                                        str3 = "start";
                                                      }
                                                      obj10.iconPosition = str3;
                                                      if (null != premiumDiscountOffer) {
                                                        let str4 = "primary-overlay";
                                                      } else {
                                                        str4 = "experimental_premium-secondary";
                                                      }
                                                      obj10.variant = str4;
                                                      obj10.shiny = !stateFromStores1;
                                                      obj10.disabled = tmp49;
                                                      obj10.onPress = function onPress() {
                                                        return openPremiumPlanSelectionActionSheetDefault({ analyticsLocation, analyticsLocations, premiumType: closure_7.premiumTier, applicationId, onPaymentSuccess, onPaymentDismiss });
                                                      };
                                                      obj9.children = closure_20(tmp89, obj10);
                                                    } else if (tmp57) {
                                                      let intl2 = tmp(1126).intl;
                                                      class K {
                                                        constructor() {
                                                          items = [, ];
                                                          items[0] = closure_7.getPremiumTypeSubscription();
                                                          items[1] = closure_7.hasFetchedSubscriptions();
                                                          return items;
                                                        }
                                                      }
                                                      let formatToPlainStringResult = intl2.formatToPlainString(tmp(1126).t.bkQ4bH, { percent: null });
                                                      const obj12 = { percent: null };
                                                    } else {
                                                      formatToPlainStringResult = tmp58();
                                                    }
                                                  }
                                                  closure_20(tmp62, obj9);
                                                }
                                              }
                                            }
                                          }
                                        }
                                        class K {
                                          constructor() {
                                            items = [, ];
                                            items[0] = closure_7.getPremiumTypeSubscription();
                                            items[1] = closure_7.hasFetchedSubscriptions();
                                            return items;
                                          }
                                        }
                                        tmp85[0] = tmp7.featureList;
                                        tmp85[1] = tmp44;
                                        ({ featureIcon: tmp85[2], featureLabel: tmp85[3], featureRow: tmp85[4] } = tmp7);
                                        const tmp86 = closure_20(PremiumFeatureListDefault, tmp85);
                                        cResult[42] = tmp44;
                                        cResult[43] = tmp7.featureIcon;
                                        cResult[44] = tmp7.featureLabel;
                                        cResult[45] = tmp7.featureList;
                                        cResult[46] = tmp7.featureRow;
                                        cResult[47] = tmp86;
                                        tmp83 = tmp86;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        class K {
                          constructor() {
                            items = [, ];
                            items[0] = closure_7.getPremiumTypeSubscription();
                            items[1] = closure_7.hasFetchedSubscriptions();
                            return items;
                          }
                        }
                        if (!tmp45) {
                          const obj13 = { premiumItem: null, discountedPriceString: null, discountOffer: null, activeDiscountInfo: null, subscriptionTrial: null, premiumType: null, premiumSubscription: null, fractionalPremiumInfo: null };
                          class K {
                            constructor() {
                              items = [, ];
                              items[0] = closure_7.getPremiumTypeSubscription();
                              items[1] = closure_7.hasFetchedSubscriptions();
                              return items;
                            }
                          }
                          obj13.discountedPriceString = discountedPriceString;
                          obj13.discountOffer = premiumDiscountOffer;
                          obj13.activeDiscountInfo = activeDiscountInfo;
                          obj13.subscriptionTrial = subscriptionTrial;
                          obj13.premiumType = premiumType;
                          obj13.premiumSubscription = first;
                          obj13.fractionalPremiumInfo = tmp14;
                          const tmp80 = closure_20(closure_25, obj13);
                        }
                        cResult[32] = activeDiscountInfo;
                        cResult[33] = premiumDiscountOffer;
                        cResult[34] = discountedPriceString;
                        cResult[35] = tmp14;
                        cResult[36] = tmp54;
                        cResult[37] = first;
                        cResult[38] = premiumType;
                        cResult[39] = tmp46;
                        cResult[40] = subscriptionTrial;
                        cResult[41] = tmp80;
                        tmp79 = tmp80;
                      }
                      class K {
                        constructor() {
                          items = [, ];
                          items[0] = closure_7.getPremiumTypeSubscription();
                          items[1] = closure_7.hasFetchedSubscriptions();
                          return items;
                        }
                      }
                      tmp74[0] = tmp7.logoContainer;
                      tmp74[1] = cResult[26];
                      const tmp75 = closure_20(tmp62, tmp74);
                      cResult[27] = tmp7.logoContainer;
                      cResult[28] = cResult[26];
                      cResult[29] = tmp75;
                      tmp72 = tmp75;
                    }
                  }
                }
                class K {
                  constructor() {
                    items = [, ];
                    items[0] = closure_7.getPremiumTypeSubscription();
                    items[1] = closure_7.hasFetchedSubscriptions();
                    return items;
                  }
                }
                if (logo) {
                  const tmp69Result = tmp69(PremiumGroupWordmarkDefault, { width: 185, height: 20, alwaysWhite: true });
                } else {
                  const obj14 = { premiumType, style: tmp7.logo };
                  class K {
                    constructor() {
                      items = [, ];
                      items[0] = closure_7.getPremiumTypeSubscription();
                      items[1] = closure_7.hasFetchedSubscriptions();
                      return items;
                    }
                  }
                }
                cResult[23] = logo;
                cResult[24] = premiumType;
                logo = tmp7.logo;
                cResult[25] = logo;
                cResult[26] = tmp69Result;
              }
            }
          }
        }
      }
      const obj15 = { style: tmp7.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer };
      const tmp66 = closure_20(tmp(7154).PremiumPill, obj15);
      cResult[16] = premiumDiscountOffer;
      cResult[17] = premiumType;
      cResult[18] = null != premiumDiscountOffer && null != discountedPriceString;
      cResult[19] = tmp7.pill;
      cResult[20] = null != activeDiscountInfo;
      cResult[21] = premiumTrialOffer;
      cResult[22] = tmp66;
      tmp64 = tmp66;
      const tmpResult21 = tmp(9384);
    }
    const tmpResult19 = tmp(504);
    const premiumBundleWithPredicate = tmp(7119).getPremiumBundleWithPredicate((additionalPlans) => {
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
    cResult[9] = interval1;
    cResult[10] = premiumType;
    cResult[11] = premiumBundleWithPredicate;
    tmp54 = premiumBundleWithPredicate;
    const tmpResult23 = tmp(7119);
  } else {
    class K {
      constructor() {
        items = [, ];
        items[0] = closure_7.getPremiumTypeSubscription();
        items[1] = closure_7.hasFetchedSubscriptions();
        return items;
      }
    }
    const trialCtaOverride = tmp(9375).getTrialCtaOverride(premiumTrialOffer, tmp24);
    const tmpResult24 = tmp(9375);
  }
  const tmpResult15 = premiumType(7162);
}) : (function PremiumFeaturesCard(premiumType) {
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
    UNSPECIFIED = premiumType(1398).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let useReducedMotion;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = closure_23();
  _modDef38(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  const premiumTrialOffer = premiumType(7163).usePremiumTrialOffer();
  const obj = premiumType(7163);
  const premiumDiscountOffer = premiumType(8071).usePremiumDiscountOffer();
  const obj2 = premiumType(8071);
  const activeDiscountInfo = premiumType(8069).useActiveDiscountInfo();
  const obj3 = premiumType(8069);
  const tmp12 = useFractionalPremiumInfoDefault();
  let subscriptionTrial;
  const premiumTrialOfferPremiumType = premiumType(7162).usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  premiumType(4728);
  let interval;
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  let intervalCount;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  { intervalType: interval, intervalCount: null }.intervalCount = intervalCount;
  let tmp48Result6 = premiumType === premiumTrialOfferPremiumType;
  let stringResult = null;
  if (!tmp48Result6) {
    if (stringResult == null) {
      const intl = tmp8(1126).intl;
      stringResult = intl.string(tmp8(1126).t.J61px0);
    }
    analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
    let items = [premiumBundleWithPredicate];
    const tmp27 = _slicedToArray(tmp8(504).useStateFromStoresArray(items, () => {
      const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
      return items;
    }), 2);
    const first = tmp27[0];
    useReducedMotion = dependencyMap2[premiumType];
    const tmp8Result9 = tmp8(504);
    const items1 = [interval1];
    const stateFromStores = tmp8(504).useStateFromStores(items1, () => {
      const items = [closure_5];
      return SubscriptionPlanStore.isLoadedForSKUs(items);
    });
    const tmp8Result10 = tmp8(504);
    const items2 = [useReducedMotion];
    const stateFromStores1 = tmp8(504).useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
    let isBoostOnly = null != first;
    const tmp8Result11 = tmp8(504);
    if (isBoostOnly) {
      isBoostOnly = first.isBoostOnly;
    }
    if (isBoostOnly) {
      isBoostOnly = tmp8(1628).isMetaQuest();
      const tmp8Result12 = tmp8(1628);
    }
    let tmp36 = null;
    if (null != first) {
      tmp36 = null;
      if (undefined !== first.planIdFromItems) {
        tmp36 = dependencyMap3[first.planIdFromItems];
      }
    }
    interval1 = undefined;
    if (tmp36 != null) {
      interval1 = tmp36.interval;
    }
    if (interval1 == null) {
      interval1 = constants.MONTH;
    }
    const tmp34 = usePremiumFeaturesDefault(premiumType, flag, UNSPECIFIED);
    premiumBundleWithPredicate = tmp8(7119).getPremiumBundleWithPredicate((additionalPlans) => {
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
    const tmp8Result13 = tmp8(7119);
    const items3 = [premiumBundleWithPredicate];
    const discountedPriceString = tmp8(9384).useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
    let tmp43 = tmp35;
    if (null != first && stateFromStores && tmp27[1] && !isBoostOnly) {
      let flag4 = false;
      if (null != first) {
        const planIdFromItems = first.planIdFromItems;
        let tmp44 = null != planIdFromItems;
        if (tmp44) {
          tmp44 = tmp8(4728).getPremiumType(planIdFromItems) === premiumType;
          const tmp8Result15 = tmp8(4728);
        }
        flag4 = tmp44;
      }
      tmp43 = flag4;
    }
    const tmp45 = usePremiumPlanPriceDefault(premiumBundleWithPredicate.basePlanId);
    const obj5 = { style: tmp3.containerWrapper, onLayout, children: null };
    const obj6 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer };
    const items4 = [closure_20(tmp8(7154).PremiumPill, obj6), ];
    const obj7 = { premiumType, style, children: null };
    const obj8 = { style: tmp3.card, children: null };
    const obj9 = { style: tmp3.logoContainer, children: null };
    const tmp8Result14 = tmp8(9384);
    if (flag3) {
      let tmp48Result = closure_20(PremiumGroupWordmarkDefault, { width: 185, height: 20, alwaysWhite: true });
    } else {
      const obj10 = { premiumType, style: tmp3.logo };
      tmp48Result = closure_20(PremiumFeaturesLogoDefault, obj10);
    }
    obj9.children = tmp48Result;
    const items5 = [closure_20(analyticsLocations, obj9), , , , ];
    const obj11 = { premiumType };
    items5[1] = closure_20(PremiumFeaturesWumpusDefault, obj11);
    if (flag3) {
      flag3 = null == activeDiscountInfo;
    }
    let tmp48Result5 = !flag3;
    if (!flag3) {
      tmp48Result5 = !flag;
    }
    if (tmp48Result5) {
      tmp48Result5 = !flag2;
    }
    if (tmp48Result5) {
      const obj12 = { premiumItem: premiumBundleWithPredicate, discountedPriceString, discountOffer: premiumDiscountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription: first, fractionalPremiumInfo: tmp12 };
      tmp48Result5 = closure_20(closure_25, obj12);
    }
    items5[2] = tmp48Result5;
    const obj13 = { style: tmp3.featureList, features: tmp34, iconStyle: null, labelStyle: null, rowStyle: null };
    ({ featureIcon: obj21.iconStyle, featureLabel: obj21.labelStyle, featureRow: obj21.rowStyle } = tmp3);
    items5[3] = closure_20(PremiumFeatureListDefault, obj13);
    if (hideButton) {
      items5[4] = !hideButton;
      obj8.children = items5;
      const items6 = [closure_21(tmp47, obj8), ];
      if (tmp48Result6) {
        const obj14 = { accessible: true, style: tmp3.trialSubTextContainer, children: null };
        const obj15 = { variant: "text-md/normal", style: tmp3.trialSubText, children: null };
        const intl6 = tmp8(1126).intl;
        const obj16 = { trialPeriod: tmp18, price: null };
        let priceString;
        if (tmp45 != null) {
          priceString = tmp45.priceString;
        }
        if (priceString == null) {
          priceString = closure_12;
        }
        obj16.price = priceString;
        obj15.children = intl6.format(tmp8(1126).t.pC4tcv, obj16);
        obj14.children = closure_20(tmp8(5087).Text, obj15);
        tmp48Result6 = closure_20(tmp47, obj14);
      }
      items6[1] = tmp48Result6;
      obj7.children = items6;
      items4[1] = closure_21(tmp4Result, obj7);
      obj5.children = items4;
      return closure_21(tmp47, obj5);
    } else {
      if (tmp43) {
        const obj17 = { style: tmp3.currentPlanLabel, accessible: true, accessibilityRole: "text", children: null };
        const obj18 = { variant: "text-md/semibold", color: "text-overlay-light", children: null };
        const intl5 = tmp8(1126).intl;
        obj18.children = intl5.string(tmp8(1126).t["j+wlhy"]);
        obj17.children = closure_20(tmp8(5087).Text, obj18);
        let obj19 = obj17;
      } else {
        obj19 = { style: tmp3.button, children: null };
        if (tmp48Result6) {
          const obj20 = { text: stringResult, icon: null, iconPosition: null, variant: null, size: "md", grow: true, shiny: null, disabled: null, onPress: null };
          if (null != premiumDiscountOffer) {
            const obj22 = { style: tmp3.buttonIcon, color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, size: "sm" };
            const tmp48Result7 = closure_20(tmp8(9016).NitroWheelIcon, obj22);
          }
          obj20.icon = tmp48Result7;
          let str2;
          if (tmp42) {
            str2 = "start";
          }
          obj20.iconPosition = str2;
          if (null != premiumDiscountOffer) {
            let str3 = "primary-overlay";
          } else {
            str3 = "experimental_premium-secondary";
          }
          obj20.variant = str3;
          obj20.shiny = !stateFromStores1;
          obj20.disabled = tmp35;
          obj20.onPress = function onPress() {
            return openPremiumPlanSelectionActionSheetDefault({ analyticsLocation, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId, onPaymentSuccess, onPaymentDismiss });
          };
          obj19.children = closure_20(tmp53, obj20);
        } else if (tmp42) {
          const intl4 = tmp8(1126).intl;
          const obj23 = { percent: premiumDiscountOffer.discount.amount };
          let formatToPlainStringResult = intl4.formatToPlainString(tmp8(1126).t.bkQ4bH, obj23);
        } else if (premiumType === PremiumTypes.TIER_0) {
          const intl3 = tmp8(1126).intl;
          formatToPlainStringResult = intl3.string(tmp8(1126).t.cM8bbx);
        } else {
          const intl2 = tmp8(1126).intl;
          formatToPlainStringResult = intl2.string(tmp8(1126).t["8x0jKT"]);
        }
      }
      closure_20(tmp47, obj19);
    }
    tmp4Result = PremiumFeaturesBackgroundDefault;
  } else {
    if (premiumType === PremiumTypes.TIER_0) {
      let TIER_2 = closure_13.TIER_0;
    } else {
      TIER_2 = closure_13.TIER_2;
    }
    const trialCtaOverride = tmp8(9375).getTrialCtaOverride(premiumTrialOffer, TIER_2);
    const tmp8Result16 = tmp8(9375);
  }
  const obj4 = premiumType(7162);
});