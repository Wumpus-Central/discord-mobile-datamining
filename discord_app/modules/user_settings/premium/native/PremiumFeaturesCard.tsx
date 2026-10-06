// === Module 8897: PremiumFeaturesCard ===

// Module 8897 (PremiumFeaturesCard)
import react_native from "react-native" /* 17 */;
import _modDef38 from "module_38" /* 38 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1096 */;
import intl8 from "intl" /* 1126 */;
import _modDef3233 from "module_3233" /* 3233 */;
import PremiumUtils from "PremiumUtils" /* 4534 */;
import Text_Text from "Text/Text" /* 4892 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6664 */;
import PriceUtils from "PriceUtils" /* 6750 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 6908 */;
import openPremiumPlanSelectionActionSheetDefault from "openPremiumPlanSelectionActionSheet" /* 6941 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 7731 */;
import PremiumFeaturesBackgroundDefault from "PremiumFeaturesBackground" /* 8520 */;
import usePremiumPlanPrice from "usePremiumPlanPrice" /* 8898 */;
import usePremiumFeaturesDefault from "usePremiumFeatures" /* 8906 */;
import PremiumGroupWordmarkDefault from "PremiumGroupWordmark" /* 8915 */;
import PremiumFeaturesLogoDefault from "PremiumFeaturesLogo" /* 8916 */;
import PremiumFeaturesWumpusDefault from "PremiumFeaturesWumpus" /* 8918 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8923 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4539 */;
import SubscriptionStore_mod from "SubscriptionStore" /* 4540 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import TextStyles_mod from "TextStyles" /* 5922 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;
const usePremiumPlanPriceDefault = usePremiumPlanPrice;

let AnalyticsObjectTypes;
let AnalyticsPages;
let AnalyticsSections;
let PremiumTypes;
let c10;
let c9;
let closure_12;
let closure_14;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
const View = react_native.View;
let SubscriptionStore = SubscriptionStore_mod;
({ AnalyticsPages, AnalyticsSections, AnalyticsObjectTypes } = Constants);
({ ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK: metroImportAll, DISCOUNT_DURATION_FALLBACK: c9, DISCOUNT_PERCENTAGE_FALLBACK: c10, PREMIUM_TIER_2_REFERRAL_INCENTIVE_DISCOUNT_ID: unpackModuleId, PRICE_PLACEHOLDER: closure_12, PremiumSubscriptionSKUs: map1, PremiumSubscriptionSKUToPremiumType: closure_14, PremiumTypes } = PremiumConstants);
({ PremiumTypeToActivePremiumSubscriptionSKU: closure_16, SubscriptionIntervalTypes: closure_17, SubscriptionPlanInfo: closure_18, SubscriptionPlans: closure_19 } = PremiumConstants);
const Fonts = Constants2.Fonts;
({ jsx: closure_20, jsxs: closure_21 } = Fragment);
let items = [, ];
({ TIER_0: arr[0], TIER_2: arr[1] } = PremiumTypes);
const set = new Set(items);
let createStyles = createStyles_mod;
let obj = { containerWrapper: { position: "relative" }, card: obj2, logoContainer: { marginBottom: 8 }, logo: { marginRight: 4 }, priceContainer: { display: "flex", flexWrap: "wrap", flexDirection: "row", maxWidth: "50%" }, discountPriceText: { maxWidth: "62%", includeFontPadding: true }, featureList: { marginTop: 8 }, featureLabel: obj3, featureRow: { paddingVertical: 7 }, featureIcon: { height: 16, width: 16 }, button: { marginTop: 16 }, currentPlanLabel: { marginTop: 16, paddingVertical: 12, alignItems: "center", justifyContent: "center" }, trialSubTextContainer: { paddingHorizontal: 24, marginTop: -12, paddingBottom: 16, alignItems: "center", bottom: 0 }, trialSubText: obj4, pill: { position: "absolute", top: -10, maxWidth: 240, alignSelf: "center", zIndex: 2 }, buttonIcon: { marginRight: 4, alignSelf: "center", marginTop: 1 } };
obj2 = { display: "flex", justifyContent: "flex-start", width: "100%", padding: 24, backgroundColor: "transparent", overflow: "hidden", borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: -8 };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 14));
obj4 = { textAlign: "center" };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.DISPLAY_MEDIUM, nativeDefault.unsafe_rawColors.WHITE, 12));
let closure_23 = createStyles(obj);
let closure_24 = { page: AnalyticsPages.USER_SETTINGS, section: AnalyticsSections.SETTINGS_PREMIUM, objectType: AnalyticsObjectTypes.BUY };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let activeDiscountInfo;
  let date;
  let discountOffer;
  let discountedPriceString;
  let duration;
  let format6;
  let fractionalPremiumInfo;
  let intervalCount1;
  let intl4;
  let items;
  let num3;
  let obj9;
  let premiumItem;
  let premiumSubscription;
  let premiumType;
  let priceString1;
  let sJTwHQ;
  let subscriptionTrial;
  let tmp10;
  let tmp67Result;
  let tmp7;
  let tmpResult10;
  let tmpResult8;
  const obj = react2;
  const cResult = obj.c(40);
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription, fractionalPremiumInfo } = arg0);
  const tmp4 = closure_23();
  const tmp6 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  if (cResult[0] !== premiumItem.interval) {
    const tmp5Result = PremiumUtilsDefault;
    const intervalStringAsNoun = tmp5Result.getIntervalStringAsNoun(premiumItem.interval);
    cResult[0] = premiumItem.interval;
    cResult[1] = intervalStringAsNoun;
    tmp7 = intervalStringAsNoun;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === activeDiscountInfo) {
    if (cResult[3] === discountOffer) {
      if (cResult[4] === discountedPriceString) {
        if (cResult[5] === fractionalPremiumInfo) {
          if (cResult[6] === authStore4[premiumItem.basePlanId].interval) {
            if (cResult[7] === authStore4[premiumItem.basePlanId].intervalCount) {
              if (cResult[8] === tmp6) {
                if (cResult[9] === premiumSubscription) {
                  if (cResult[10] === premiumType) {
                    if (cResult[11] === tmp4.discountPriceText) {
                      tmp10 = cResult[12];
                    }
                    const _Symbol = Symbol;
                    if (tmp10 !== Symbol.for("react.early_return_sentinel")) {
                      return tmp10;
                    } else {
                      let tmp37;
                      let tmp41;
                      if (null != subscriptionTrial) {
                        if (premiumType === authStore2[subscriptionTrial.skuId]) {
                          let priceString;
                          const discountPriceText = tmp4.discountPriceText;
                          const tmp48 = cResult[25];
                          if (tmp6 != null) {
                            priceString = tmp6.priceString;
                          }
                          if (tmp48 === priceString) {
                            let interval;
                            const tmp50 = cResult[26];
                            if (subscriptionTrial != null) {
                              interval = subscriptionTrial.interval;
                            }
                            if (tmp50 === interval) {
                              let tmp54;
                              let intervalCount;
                              const tmp52 = cResult[27];
                              if (subscriptionTrial != null) {
                                intervalCount = subscriptionTrial.intervalCount;
                              }
                              if (tmp52 === intervalCount) {
                                tmp54 = cResult[28];
                              }
                              if (cResult[29] === tmp4.discountPriceText) {
                                let tmp64;
                                if (cResult[30] === tmp54) {
                                  tmp64 = cResult[31];
                                }
                                return tmp64;
                              }
                              const obj2 = { variant: "text-md/normal", color: "text-overlay-light", style: discountPriceText, children: tmp54 };
                              const tmp66 = closure_20(Text_Text.Text, obj2);
                              cResult[29] = tmp4.discountPriceText;
                              cResult[30] = tmp54;
                              cResult[31] = tmp66;
                              tmp64 = tmp66;
                            }
                          }
                          const intl6 = intl8.intl;
                          const format5 = intl6.format;
                          const prop = intl8.t["xOX9/9"];
                          let interval1;
                          const formatIntervalDuration = PremiumUtils.formatIntervalDuration;
                          PremiumUtils;
                          if (subscriptionTrial != null) {
                            interval1 = subscriptionTrial.interval;
                          }
                          const obj3 = { intervalType: interval1, intervalCount: intervalCount1 };
                          intervalCount1 = undefined;
                          if (subscriptionTrial != null) {
                            intervalCount1 = subscriptionTrial.intervalCount;
                          }
                          const obj4 = { trialPeriod: formatIntervalDuration(obj3), price: priceString1 };
                          priceString1 = undefined;
                          if (tmp6 != null) {
                            priceString1 = tmp6.priceString;
                          }
                          if (priceString1 == null) {
                            priceString1 = closure_12;
                          }
                          const format5Result = format5(prop, obj4);
                          let priceString2;
                          if (tmp6 != null) {
                            priceString2 = tmp6.priceString;
                          }
                          cResult[25] = priceString2;
                          let interval2;
                          if (subscriptionTrial != null) {
                            interval2 = subscriptionTrial.interval;
                          }
                          cResult[26] = interval2;
                          let intervalCount2;
                          if (subscriptionTrial != null) {
                            intervalCount2 = subscriptionTrial.intervalCount;
                          }
                          cResult[27] = intervalCount2;
                          cResult[28] = format5Result;
                          tmp54 = format5Result;
                        }
                      }
                      let priceString3;
                      if (tmp6 != null) {
                        priceString3 = tmp6.priceString;
                      }
                      if (priceString3 == null) {
                        priceString3 = closure_12;
                      }
                      if (cResult[32] !== priceString3) {
                        const obj5 = { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 };
                        const tmp39 = closure_20(Text_Text.Text, obj5);
                        cResult[32] = priceString3;
                        cResult[33] = tmp39;
                        tmp37 = tmp39;
                      } else {
                        tmp37 = cResult[33];
                      }
                      const _HermesInternal = HermesInternal;
                      const combined = " / " + tmp7;
                      if (cResult[34] !== combined) {
                        const obj6 = { variant: "text-md/normal", color: "text-overlay-light", children: combined };
                        const tmp43 = closure_20(Text_Text.Text, obj6);
                        cResult[34] = combined;
                        cResult[35] = tmp43;
                        tmp41 = tmp43;
                      } else {
                        tmp41 = cResult[35];
                      }
                      if (cResult[36] === tmp4.priceContainer) {
                        if (cResult[37] === tmp37) {
                          let tmp44;
                          if (cResult[38] === tmp41) {
                            tmp44 = cResult[39];
                          }
                          return tmp44;
                        }
                      }
                      const obj7 = { accessible: true, style: tmp4.priceContainer, children: items };
                      items = [tmp37, tmp41];
                      const tmp47 = closure_21(View, obj7);
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
  const forResult = Symbol.for("react.early_return_sentinel");
  let priceString4;
  const formatRate = PriceUtils.formatRate;
  PriceUtils;
  if (tmp6 != null) {
    priceString4 = tmp6.priceString;
  }
  if (priceString4 == null) {
    priceString4 = closure_12;
  }
  const formatRateResult = formatRate(priceString4, authStore4[premiumItem.basePlanId].interval, authStore4[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      const obj8 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: format6(sJTwHQ, obj9) };
      const Text = Text_Text.Text;
      const intl7 = intl8.intl;
      format6 = intl7.format;
      const discount = discountOffer.discount;
      obj9 = { discountedPrice: discountedPriceString, numMonths: num3, regularPrice: formatRateResult };
      num3 = undefined;
      sJTwHQ = intl8.t.sJTwHQ;
      if (discount != null) {
        num3 = discount.intervalCount;
      }
      if (num3 == null) {
        num3 = 1;
      }
      tmp67Result = closure_20(Text, obj8);
    }
    cResult[2] = activeDiscountInfo;
    cResult[3] = discountOffer;
    cResult[4] = discountedPriceString;
    cResult[5] = fractionalPremiumInfo;
    cResult[6] = authStore4[premiumItem.basePlanId].interval;
    cResult[7] = authStore4[premiumItem.basePlanId].intervalCount;
    cResult[8] = tmp6;
    cResult[9] = premiumSubscription;
    cResult[10] = premiumType;
    cResult[11] = tmp4.discountPriceText;
    cResult[12] = tmp67Result;
    tmp10 = tmp67Result;
  }
  tmp67Result = forResult;
  if (null != activeDiscountInfo) {
    tmp67Result = forResult;
    if (null != premiumSubscription) {
      let formatResult;
      if (premiumSubscription.planIdFromItems === closure_19.PREMIUM_YEAR_TIER_2) {
        let flag = false;
        if (null != premiumSubscription) {
          const planIdFromItems = premiumSubscription.planIdFromItems;
          let tmp16 = null != planIdFromItems;
          if (tmp16) {
            const tmpResult7 = PremiumUtils;
            tmp16 = tmpResult7.getPremiumType(planIdFromItems) === premiumType;
          }
          flag = tmp16;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl = intl8.intl;
            const format = intl.format;
            let percentage = activeDiscountInfo.percentage;
            const z2oQtA = intl8.t.z2oQtA;
            if (percentage == null) {
              percentage = metroImportAll;
            }
            const obj10 = { percent: percentage, regularPrice: formatRateResult, renewalDate: tmpResult8.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) };
            tmpResult8 = PremiumUtils;
            formatResult = format(z2oQtA, obj10);
          }
          if (cResult[22] === formatResult) {
            let tmp31;
            if (cResult[23] === tmp4.discountPriceText) {
              tmp31 = cResult[24];
            }
            tmp67Result = tmp31;
          }
          const obj11 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp4.discountPriceText, children: formatResult };
          const tmp33 = closure_20(Text_Text.Text, obj11);
          cResult[22] = formatResult;
          cResult[23] = tmp4.discountPriceText;
          cResult[24] = tmp33;
          tmp31 = tmp33;
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop1;
        if (metadata != null) {
          prop1 = metadata.active_discount_expires_at;
        }
        if (null != prop1) {
          if (cResult[13] === activeDiscountInfo.percentage) {
            let tmp26;
            if (cResult[14] === premiumSubscription) {
              tmp26 = cResult[15];
            }
            formatResult = tmp26;
          }
          const tmpResult9 = PremiumGroupUtils;
          let priceString5 = tmpResult9.getPriceString(premiumSubscription);
          const intl5 = intl8.intl;
          const format4 = intl5.format;
          let num12 = activeDiscountInfo.percentage;
          const FwjZzr = _modDef3233.FwjZzr;
          if (num12 == null) {
            num12 = 0;
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const obj12 = { percent: num12, discountEndDate: date, regularPrice: priceString5 };
          date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          if (priceString5 == null) {
            priceString5 = closure_12;
          }
          const format4Result = format4(FwjZzr, obj12);
          cResult[13] = activeDiscountInfo.percentage;
          cResult[14] = premiumSubscription;
          cResult[15] = format4Result;
          tmp26 = format4Result;
        }
      }
      if (activeDiscountInfo.discountId === unpackModuleId) {
        let source;
        if (tmp6 != null) {
          source = tmp6.source;
        }
        if (source === usePremiumPlanPrice.PremiumPlanPriceSource.API) {
          let percentage3 = activeDiscountInfo.percentage;
          if (percentage3 == null) {
            percentage3 = authStore;
          }
          if (cResult[16] === activeDiscountInfo.duration) {
            if (cResult[17] === percentage3) {
              if (cResult[18] === tmp6.currency) {
                if (cResult[19] === tmp6.price) {
                  let tmp23;
                  if (cResult[20] === tmp6.priceString) {
                    tmp23 = cResult[21];
                  }
                  formatResult = tmp23;
                }
              }
            }
          }
          const _Math = Math;
          const rounded = Math.round(tmp6.price * (1 - percentage3 / 100));
          const intl3 = intl8.intl;
          const format3 = intl3.format;
          let duration2 = activeDiscountInfo.duration;
          const N43FMx = intl8.t.N43FMx;
          if (duration2 == null) {
            duration2 = React4;
          }
          const obj13 = { numMonths: duration2, discountedPrice: tmpResult10.formatPrice(rounded, tmp6.currency), billingPeriod: intl4.string(intl8.t.FPybU7), fullPrice: tmp6.priceString };
          tmpResult10 = PriceUtils;
          intl4 = intl8.intl;
          const format3Result = format3(N43FMx, obj13);
          cResult[16] = activeDiscountInfo.duration;
          cResult[17] = percentage3;
          cResult[18] = tmp6.currency;
          cResult[19] = tmp6.price;
          cResult[20] = tmp6.priceString;
          cResult[21] = format3Result;
          tmp23 = format3Result;
        }
      }
      const intl2 = intl8.intl;
      const format2 = intl2.format;
      let percentage2 = activeDiscountInfo.percentage;
      const v3ZiutU = intl8.t["3ZiutU"];
      if (percentage2 == null) {
        percentage2 = authStore;
      }
      const obj14 = { percent: percentage2, numMonths: duration, regularPrice: formatRateResult };
      duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = React4;
      }
      formatResult = format2(v3ZiutU, obj14);
    }
  }
}) : (function(fractionalPremiumInfo) {
  let activeDiscountInfo;
  let date;
  let discountOffer;
  let discountedPriceString;
  let duration;
  let format;
  let format6;
  let intervalCount;
  let intl5;
  let items;
  let num4;
  let obj11;
  let obj3;
  let premiumItem;
  let premiumSubscription;
  let premiumType;
  let priceString2;
  let prop1;
  let sJTwHQ;
  let subscriptionTrial;
  let tmp7Result5;
  let tmp7Result7;
  ({ premiumItem, discountedPriceString, discountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription } = fractionalPremiumInfo);
  fractionalPremiumInfo = fractionalPremiumInfo.fractionalPremiumInfo;
  const tmp = closure_23();
  const tmp4 = usePremiumPlanPriceDefault(premiumItem.basePlanId);
  const obj = PremiumUtilsDefault;
  const intervalStringAsNoun = obj.getIntervalStringAsNoun(premiumItem.interval);
  let priceString;
  const formatRate = PriceUtils.formatRate;
  PriceUtils;
  if (tmp4 != null) {
    priceString = tmp4.priceString;
  }
  if (priceString == null) {
    priceString = closure_12;
  }
  const formatRateResult = formatRate(priceString, authStore4[premiumItem.basePlanId].interval, authStore4[premiumItem.basePlanId].intervalCount);
  if (null != discountedPriceString) {
    if (null != discountOffer) {
      const obj2 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: format6(sJTwHQ, obj3) };
      const Text4 = Text_Text.Text;
      const intl7 = intl8.intl;
      format6 = intl7.format;
      const discount = discountOffer.discount;
      obj3 = { discountedPrice: discountedPriceString, numMonths: num4, regularPrice: formatRateResult };
      num4 = undefined;
      sJTwHQ = intl8.t.sJTwHQ;
      if (discount != null) {
        num4 = discount.intervalCount;
      }
      if (num4 == null) {
        num4 = 1;
      }
      return closure_20(Text4, obj2);
    }
  }
  if (null != activeDiscountInfo) {
    if (null != premiumSubscription) {
      let format2Result;
      if (premiumSubscription.planIdFromItems === closure_19.PREMIUM_YEAR_TIER_2) {
        let flag = false;
        if (null != premiumSubscription) {
          const planIdFromItems = premiumSubscription.planIdFromItems;
          let tmp24 = null != planIdFromItems;
          if (tmp24) {
            const tmp7Result = PremiumUtils;
            tmp24 = tmp7Result.getPremiumType(planIdFromItems) === premiumType;
          }
          flag = tmp24;
        }
        if (flag) {
          let hasActiveTrial;
          if (premiumSubscription != null) {
            hasActiveTrial = premiumSubscription.hasActiveTrial;
          }
          if (!hasActiveTrial) {
            const intl2 = intl8.intl;
            const format2 = intl2.format;
            let percentage = activeDiscountInfo.percentage;
            const z2oQtA = intl8.t.z2oQtA;
            if (percentage == null) {
              percentage = metroImportAll;
            }
            const obj4 = { percent: percentage, regularPrice: formatRateResult, renewalDate: tmp7Result5.getExpectedRenewalDate(premiumSubscription, fractionalPremiumInfo) };
            tmp7Result5 = PremiumUtils;
            format2Result = format2(z2oQtA, obj4);
          }
          const obj5 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: format2Result };
          return closure_20(Text_Text.Text, obj5);
        }
      }
      if (premiumSubscription.hasAnyPremiumGroup) {
        const metadata = premiumSubscription.metadata;
        let prop;
        if (metadata != null) {
          prop = metadata.active_discount_expires_at;
        }
        if (null != prop) {
          const tmp7Result6 = PremiumGroupUtils;
          let priceString1 = tmp7Result6.getPriceString(premiumSubscription);
          const intl6 = intl8.intl;
          const format5 = intl6.format;
          let num3 = activeDiscountInfo.percentage;
          const FwjZzr = _modDef3233.FwjZzr;
          if (num3 == null) {
            num3 = 0;
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const obj6 = { percent: num3, discountEndDate: date, regularPrice: priceString1 };
          date = new Date(premiumSubscription.metadata.active_discount_expires_at);
          if (priceString1 == null) {
            priceString1 = closure_12;
          }
          format2Result = format5(FwjZzr, obj6);
        }
      }
      if (activeDiscountInfo.discountId === unpackModuleId) {
        let source;
        if (tmp4 != null) {
          source = tmp4.source;
        }
        if (source === usePremiumPlanPrice.PremiumPlanPriceSource.API) {
          let percentage3 = activeDiscountInfo.percentage;
          if (percentage3 == null) {
            percentage3 = authStore;
          }
          const _Math = Math;
          const rounded = Math.round(tmp4.price * (1 - percentage3 / 100));
          const intl4 = intl8.intl;
          const format4 = intl4.format;
          let duration2 = activeDiscountInfo.duration;
          const N43FMx = intl8.t.N43FMx;
          if (duration2 == null) {
            duration2 = React4;
          }
          const obj7 = { numMonths: duration2, discountedPrice: tmp7Result7.formatPrice(rounded, tmp4.currency), billingPeriod: intl5.string(intl8.t.FPybU7), fullPrice: tmp4.priceString };
          tmp7Result7 = PriceUtils;
          intl5 = intl8.intl;
          format2Result = format4(N43FMx, obj7);
        }
      }
      const intl3 = intl8.intl;
      const format3 = intl3.format;
      let percentage2 = activeDiscountInfo.percentage;
      const v3ZiutU = intl8.t["3ZiutU"];
      if (percentage2 == null) {
        percentage2 = authStore;
      }
      const obj8 = { percent: percentage2, numMonths: duration, regularPrice: formatRateResult };
      duration = activeDiscountInfo.duration;
      if (duration == null) {
        duration = React4;
      }
      format2Result = format3(v3ZiutU, obj8);
    }
  }
  if (null != subscriptionTrial) {
    let tmp12Result;
    if (premiumType === authStore2[subscriptionTrial.skuId]) {
      const obj9 = { variant: "text-md/normal", color: "text-overlay-light", style: tmp.discountPriceText, children: format(prop1, obj11) };
      const Text3 = Text_Text.Text;
      const intl = intl8.intl;
      format = intl.format;
      prop1 = intl8.t["xOX9/9"];
      let interval;
      const formatIntervalDuration = PremiumUtils.formatIntervalDuration;
      PremiumUtils;
      if (subscriptionTrial != null) {
        interval = subscriptionTrial.interval;
      }
      const obj10 = { intervalType: interval, intervalCount };
      intervalCount = undefined;
      if (subscriptionTrial != null) {
        intervalCount = subscriptionTrial.intervalCount;
      }
      obj11 = { trialPeriod: formatIntervalDuration(obj10), price: priceString2 };
      priceString2 = undefined;
      if (tmp4 != null) {
        priceString2 = tmp4.priceString;
      }
      if (priceString2 == null) {
        priceString2 = closure_12;
      }
      tmp12Result = closure_20(Text3, obj9);
    }
    return tmp12Result;
  }
  let priceString3;
  const obj12 = { accessible: true, style: tmp.priceContainer, children: items };
  const Text = Text_Text.Text;
  if (tmp4 != null) {
    priceString3 = tmp4.priceString;
  }
  if (priceString3 == null) {
    priceString3 = closure_12;
  }
  items = [closure_20(Text, { variant: "text-md/bold", color: "text-overlay-light", children: priceString3 }), ];
  const obj13 = { variant: "text-md/normal", color: "text-overlay-light", children: " / " + intervalStringAsNoun };
  const Text2 = Text_Text.Text;
  items[1] = closure_20(Text2, obj13);
  tmp12Result = closure_21(View, obj12);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp12 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  let analyticsLocation;
  let applicationId;
  let closure_7;
  let first;
  let forFractionalPremium;
  let hideButton;
  let hidePrice;
  let interval1;
  let intervalCount;
  let isPremiumGroup;
  let onLayout;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let premiumGroupRole;
  let style;
  let tmp27;
  let tmp28;
  let tmp32;
  let tmp34;
  let tmp36;
  let tmp38;
  let tmp39;
  let tmp45;
  let tmp = premiumType;
  let obj = premiumType(576);
  const cResult = obj.c(68);
  premiumType = premiumType.premiumType;
  ({ style, onLayout, applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: _slicedToArray, hideButton, forFractionalPremium, hidePrice, isPremiumGroup, premiumGroupRole } = premiumType);
  if (undefined === premiumGroupRole) {
    premiumGroupRole = tmp(1385).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  const tmp7 = closure_23();
  const tmp9 = _modDef38;
  tmp9(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  const tmpResult = tmp(6969);
  const premiumTrialOffer = tmpResult.usePremiumTrialOffer();
  const tmpResult12 = tmp(7742);
  const premiumDiscountOffer = tmpResult12.usePremiumDiscountOffer();
  const tmpResult13 = tmp(7740);
  const activeDiscountInfo = tmpResult13.useActiveDiscountInfo();
  useFractionalPremiumInfoDefault();
  let subscriptionTrial;
  const tmpResult14 = tmp(6968);
  const premiumTrialOfferPremiumType = tmpResult14.usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  let interval;
  const formatIntervalDuration = tmp(4534).formatIntervalDuration;
  tmp(4534);
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  const obj2 = { intervalType: interval, intervalCount };
  intervalCount = undefined;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  let trialCtaOverride = null;
  const tmp21 = premiumType === premiumTrialOfferPremiumType;
  const result = formatIntervalDuration(obj2);
  if (tmp21) {
    let TIER_2;
    const getTrialCtaOverride = tmp(8904).getTrialCtaOverride;
    tmp(8904);
    if (premiumType === PremiumTypes.TIER_0) {
      TIER_2 = closure_13.TIER_0;
    } else {
      TIER_2 = closure_13.TIER_2;
    }
    trialCtaOverride = getTrialCtaOverride(premiumTrialOffer, TIER_2);
  }
  if (trialCtaOverride == null) {
    let intl = tmp(1126).intl;
    trialCtaOverride = intl.string(tmp(1126).t.J61px0);
  }
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SubscriptionStore];
    class K {
      constructor() {
        const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
        return items;
      }
    }
    cResult[0] = items;
    cResult[1] = K;
    tmp27 = items;
  } else {
    [tmp27, tmp28] = cResult;
  }
  const tmpResult17 = tmp(504);
  [first, tmp32] = tmpResult17.useStateFromStoresArray(tmp27, K);
  const useReducedMotion = tmp33;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [interval1];
    class K {
      constructor() {
        const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
        return items;
      }
    }
    tmp34 = items1;
  } else {
    tmp34 = cResult[2];
  }
  if (cResult[3] !== closure_16[premiumType]) {
    function re() {
      const items = [useReducedMotion];
      return SubscriptionPlanStore.isLoadedForSKUs(items);
    }
    cResult[3] = closure_16[premiumType];
    class K {
      constructor() {
        const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
        return items;
      }
    }
    cResult[4] = re;
    tmp36 = re;
  } else {
    tmp36 = cResult[4];
  }
  const tmpResult18 = tmp(504);
  const stateFromStores = tmpResult18.useStateFromStores(tmp34, tmp36);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [useReducedMotion];
    class K {
      constructor() {
        const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
        return items;
      }
    }
    cResult[5] = items2;
    cResult[6] = tmp41;
    tmp39 = tmp41;
    tmp38 = items2;
  } else {
    tmp38 = cResult[5];
    tmp39 = cResult[6];
  }
  const tmpResult19 = tmp(504);
  const stateFromStores1 = tmpResult19.useStateFromStores(tmp38, tmp39);
  usePremiumFeaturesDefault(premiumType, undefined !== forFractionalPremium && forFractionalPremium, premiumGroupRole);
  if (cResult[7] !== first) {
    let isMetaQuestResult = null != first && first.isBoostOnly;
    if (isMetaQuestResult) {
      const tmpResult20 = tmp(1615);
      isMetaQuestResult = tmpResult20.isMetaQuest();
    }
    class K {
      constructor() {
        const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
        return items;
      }
    }
    cResult[8] = isMetaQuestResult;
    tmp45 = isMetaQuestResult;
  } else {
    tmp45 = cResult[8];
  }
  let tmp48 = null;
  const tmp47 = null != first && stateFromStores && tmp32 && !tmp45;
  if (null != first) {
    tmp48 = null;
    if (undefined !== first.planIdFromItems) {
      tmp48 = closure_18[first.planIdFromItems];
    }
  }
  interval1 = undefined;
  if (tmp48 != null) {
    interval1 = tmp48.interval;
  }
  if (interval1 == null) {
    interval1 = constants.MONTH;
  }
  if (cResult[9] === interval1) {
    let tmp52;
    let tmp54;
    if (cResult[10] === premiumType) {
      tmp52 = cResult[11];
    }
    SubscriptionStore = tmp52;
    class K {
      constructor() {
        const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
        return items;
      }
    }
    if (cResult[12] !== tmp52) {
      const items3 = [tmp52];
      class K {
        constructor() {
          const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
          return items;
        }
      }
      cResult[13] = items3;
      tmp54 = items3;
    } else {
      tmp54 = cResult[13];
    }
    const tmpResult21 = tmp(8913);
    const tmp55 = null != premiumDiscountOffer && null != tmpResult21.useDiscountedPremiumProductInfo(premiumDiscountOffer, tmp54).discountedPriceString;
    if (cResult[14] !== premiumType) {
      class Se {
        constructor() {
          let stringResult;
          if (premiumType === PremiumTypes.TIER_0) {
            const intl2 = intl8.intl;
            stringResult = intl2.string(intl8.t.cM8bbx);
          } else {
            const intl = intl8.intl;
            stringResult = intl.string(intl8.t["8x0jKT"]);
          }
          return stringResult;
        }
      }
      cResult[14] = premiumType;
      class K {
        constructor() {
          const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
          return items;
        }
      }
      cResult[15] = Se;
    } else {
      class Se {
        constructor() {
          let stringResult;
          if (premiumType === PremiumTypes.TIER_0) {
            const intl2 = intl8.intl;
            stringResult = intl2.string(intl8.t.cM8bbx);
          } else {
            const intl = intl8.intl;
            stringResult = intl.string(intl8.t["8x0jKT"]);
          }
          return stringResult;
        }
      }
    }
    let tmp57 = tmp47;
    if (tmp57) {
      class Se {
        constructor() {
          let stringResult;
          if (premiumType === PremiumTypes.TIER_0) {
            const intl2 = intl8.intl;
            stringResult = intl2.string(intl8.t.cM8bbx);
          } else {
            const intl = intl8.intl;
            stringResult = intl.string(intl8.t["8x0jKT"]);
          }
          return stringResult;
        }
      }
      if (null != first) {
        class Se {
          constructor() {
            let stringResult;
            if (premiumType === PremiumTypes.TIER_0) {
              const intl2 = intl8.intl;
              stringResult = intl2.string(intl8.t.cM8bbx);
            } else {
              const intl = intl8.intl;
              stringResult = intl.string(intl8.t["8x0jKT"]);
            }
            return stringResult;
          }
        }
        let tmp60 = null != tmp59;
        if (tmp60) {
          class Se {
            constructor() {
              let stringResult;
              if (premiumType === PremiumTypes.TIER_0) {
                const intl2 = intl8.intl;
                stringResult = intl2.string(intl8.t.cM8bbx);
              } else {
                const intl = intl8.intl;
                stringResult = intl.string(intl8.t["8x0jKT"]);
              }
              return stringResult;
            }
          }
          tmp60 = obj13.getPremiumType(tmp59) === premiumType;
        }
        class K {
          constructor() {
            const items = [closure_7.getPremiumTypeSubscription(), closure_7.hasFetchedSubscriptions()];
            return items;
          }
        }
      }
      tmp57 = tmp58;
    }
    usePremiumPlanPriceDefault(tmp52.basePlanId);
    if (cResult[16] === premiumDiscountOffer) {
      class Se {
        constructor() {
          let stringResult;
          if (premiumType === PremiumTypes.TIER_0) {
            const intl2 = intl8.intl;
            stringResult = intl2.string(intl8.t.cM8bbx);
          } else {
            const intl = intl8.intl;
            stringResult = intl.string(intl8.t["8x0jKT"]);
          }
          return stringResult;
        }
      }
    }
    const obj3 = { style: tmp7.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: tmp55, premiumType, trialOffer: premiumTrialOffer };
    cResult[16] = premiumDiscountOffer;
    cResult[17] = premiumType;
    cResult[18] = tmp55;
    cResult[19] = tmp7.pill;
    cResult[20] = null != activeDiscountInfo;
    cResult[21] = premiumTrialOffer;
    cResult[22] = closure_20(tmp(6960).PremiumPill, obj3);
    const tmp66 = closure_20(tmp(6960).PremiumPill, obj3);
  }
  const tmpResult22 = tmp(6925);
  const premiumBundleWithPredicate = tmpResult22.getPremiumBundleWithPredicate((additionalPlans) => {
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
  cResult[9] = interval1;
  cResult[10] = premiumType;
  cResult[11] = premiumBundleWithPredicate;
  tmp52 = premiumBundleWithPredicate;
}) : ((premiumType) => {
  let Button;
  let Text;
  let Text2;
  let analyticsLocation;
  let applicationId;
  let first;
  let format;
  let hideButton;
  let intervalCount;
  let intl5;
  let items4;
  let items5;
  let items6;
  let obj15;
  let obj18;
  let obj21;
  let obj22;
  let onLayout;
  let onPaymentDismiss;
  let onPaymentSuccess;
  let pC4tcv;
  let priceString;
  let str;
  let str2;
  let style;
  let tmp27;
  let tmp44Result;
  let tmp44Result6;
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
    let tmp = premiumType;
    UNSPECIFIED = premiumType(1385).PremiumSubscriptionGroupRole.UNSPECIFIED;
  }
  let analyticsLocations;
  let useReducedMotion;
  let interval1;
  let premiumBundleWithPredicate;
  const tmp3 = closure_23();
  const tmp6 = _modDef38;
  tmp6(set.has(premiumType), "only Tier 0 and Tier 2 are supported");
  let obj = premiumType(6969);
  const premiumTrialOffer = obj.usePremiumTrialOffer();
  const obj2 = premiumType(7742);
  const premiumDiscountOffer = obj2.usePremiumDiscountOffer();
  const obj3 = premiumType(7740);
  const activeDiscountInfo = obj3.useActiveDiscountInfo();
  let subscriptionTrial;
  const tmp12 = useFractionalPremiumInfoDefault();
  const obj4 = premiumType(6968);
  const premiumTrialOfferPremiumType = obj4.usePremiumTrialOfferPremiumType();
  if (premiumTrialOffer != null) {
    subscriptionTrial = premiumTrialOffer.subscriptionTrial;
  }
  let interval;
  const formatIntervalDuration = premiumType(4534).formatIntervalDuration;
  premiumType(4534);
  if (subscriptionTrial != null) {
    interval = subscriptionTrial.interval;
  }
  const obj5 = { intervalType: interval, intervalCount };
  intervalCount = undefined;
  if (subscriptionTrial != null) {
    intervalCount = subscriptionTrial.intervalCount;
  }
  let tmp44Result8 = premiumType === premiumTrialOfferPremiumType;
  let trialCtaOverride = null;
  const result = formatIntervalDuration(obj5);
  if (tmp44Result8) {
    let TIER_2;
    const getTrialCtaOverride = premiumType(8904).getTrialCtaOverride;
    premiumType(8904);
    if (premiumType === PremiumTypes.TIER_0) {
      TIER_2 = closure_13.TIER_0;
    } else {
      TIER_2 = closure_13.TIER_2;
    }
    trialCtaOverride = getTrialCtaOverride(premiumTrialOffer, TIER_2);
  }
  if (trialCtaOverride == null) {
    const intl = tmp8(1126).intl;
    trialCtaOverride = intl.string(tmp8(1126).t.J61px0);
  }
  analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let items = [premiumBundleWithPredicate];
  const tmp8Result10 = premiumType(504);
  [first, tmp27] = tmp8Result10.useStateFromStoresArray(items, () => {
    const items = [premiumBundleWithPredicate.getPremiumTypeSubscription(), premiumBundleWithPredicate.hasFetchedSubscriptions()];
    return items;
  });
  useReducedMotion = closure_16[premiumType];
  const items1 = [interval1];
  const tmp8Result11 = premiumType(504);
  const stateFromStores = tmp8Result11.useStateFromStores(items1, () => {
    const items = [useReducedMotion];
    return SubscriptionPlanStore.isLoadedForSKUs(items);
  });
  const items2 = [useReducedMotion];
  const tmp8Result12 = premiumType(504);
  const stateFromStores1 = tmp8Result12.useStateFromStores(items2, () => useReducedMotion.useReducedMotion);
  let isBoostOnly = null != first;
  const tmp30 = usePremiumFeaturesDefault(premiumType, flag, UNSPECIFIED);
  if (isBoostOnly) {
    isBoostOnly = first.isBoostOnly;
  }
  if (isBoostOnly) {
    const tmp8Result13 = premiumType(1615);
    isBoostOnly = tmp8Result13.isMetaQuest();
  }
  let tmp32 = null;
  if (null != first) {
    tmp32 = null;
    if (undefined !== first.planIdFromItems) {
      tmp32 = closure_18[first.planIdFromItems];
    }
  }
  interval1 = undefined;
  if (tmp32 != null) {
    interval1 = tmp32.interval;
  }
  if (interval1 == null) {
    interval1 = constants.MONTH;
  }
  const tmp8Result14 = premiumType(6925);
  premiumBundleWithPredicate = tmp8Result14.getPremiumBundleWithPredicate((additionalPlans) => {
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
  _modDef38(null != premiumBundleWithPredicate, "could not find a premium item");
  const items3 = [premiumBundleWithPredicate];
  const tmp8Result15 = premiumType(8913);
  const discountedPriceString = tmp8Result15.useDiscountedPremiumProductInfo(premiumDiscountOffer, items3).discountedPriceString;
  let tmp39 = tmp31;
  if (tmp39) {
    let flag4 = false;
    if (null != first) {
      const planIdFromItems = first.planIdFromItems;
      let tmp40 = null != planIdFromItems;
      if (tmp40) {
        const tmp8Result16 = premiumType(4534);
        tmp40 = tmp8Result16.getPremiumType(planIdFromItems) === premiumType;
      }
      flag4 = tmp40;
    }
    tmp39 = flag4;
  }
  const tmp41 = usePremiumPlanPriceDefault(premiumBundleWithPredicate.basePlanId);
  const obj6 = { style: tmp3.containerWrapper, onLayout, children: items4 };
  items4 = [, ];
  const obj7 = { style: tmp3.pill, discountOffer: premiumDiscountOffer, isActiveDiscount: null != activeDiscountInfo, shouldShowDiscountUpsell: null != premiumDiscountOffer && null != discountedPriceString, premiumType, trialOffer: premiumTrialOffer };
  items4[0] = closure_20(premiumType(6960).PremiumPill, obj7);
  const obj10 = { style: tmp3.logoContainer, children: tmp44Result };
  const obj8 = { premiumType, style, children: items6 };
  const obj9 = { style: tmp3.card, children: items5 };
  const tmp4Result = PremiumFeaturesBackgroundDefault;
  if (flag3) {
    tmp44Result = closure_20(PremiumGroupWordmarkDefault, { width: 185, height: 20, alwaysWhite: true });
  } else {
    const obj11 = { premiumType, style: tmp3.logo };
    tmp44Result = closure_20(PremiumFeaturesLogoDefault, obj11);
  }
  items5 = [closure_20(analyticsLocations, obj10), closure_20(PremiumFeaturesWumpusDefault, { premiumType }), , , ];
  if (flag3) {
    flag3 = null == activeDiscountInfo;
  }
  let tmp44Result5 = !flag3 && !flag && !flag2;
  if (tmp44Result5) {
    const obj12 = { premiumItem: premiumBundleWithPredicate, discountedPriceString, discountOffer: premiumDiscountOffer, activeDiscountInfo, subscriptionTrial, premiumType, premiumSubscription: first, fractionalPremiumInfo: tmp12 };
    tmp44Result5 = closure_20(closure_25, obj12);
  }
  items5[2] = tmp44Result5;
  const obj13 = { style: tmp3.featureList, features: tmp30, iconStyle: tmp3.featureIcon, labelStyle: tmp3.featureLabel, rowStyle: tmp3.featureRow };
  items5[3] = closure_20(PremiumFeatureListDefault, obj13);
  let tmp44Result7 = !hideButton;
  if (tmp44Result7) {
    let obj16;
    if (tmp39) {
      const obj14 = { style: tmp3.currentPlanLabel, accessible: true, accessibilityRole: "text", children: closure_20(Text, obj15) };
      obj15 = { variant: "text-md/semibold", color: "text-overlay-light", children: intl5.string(premiumType(1126).t["j+wlhy"]) };
      Text = tmp8(4892).Text;
      intl5 = tmp8(1126).intl;
      obj16 = obj14;
    } else {
      obj16 = { style: tmp3.button, children: closure_20(Button, obj18) };
      Button = tmp8(5601).Button;
      if (!tmp44Result8) {
        let formatToPlainStringResult;
        if (null != premiumDiscountOffer && null != discountedPriceString) {
          const intl4 = tmp8(1126).intl;
          const obj17 = { percent: premiumDiscountOffer.discount.amount };
          formatToPlainStringResult = intl4.formatToPlainString(tmp8(1126).t.bkQ4bH, obj17);
        } else if (premiumType === PremiumTypes.TIER_0) {
          const intl3 = tmp8(1126).intl;
          formatToPlainStringResult = intl3.string(tmp8(1126).t.cM8bbx);
        } else {
          const intl2 = tmp8(1126).intl;
          formatToPlainStringResult = intl2.string(tmp8(1126).t["8x0jKT"]);
        }
        trialCtaOverride = formatToPlainStringResult;
      }
      obj18 = {
        text: trialCtaOverride,
        icon: tmp44Result6,
        iconPosition: str,
        variant: str2,
        size: "md",
        grow: true,
        shiny: !stateFromStores1,
        disabled: null != first && stateFromStores && tmp27 && !isBoostOnly,
        onPress() {
              const obj = { analyticsLocation, analyticsLocations, premiumType: premiumBundleWithPredicate.premiumTier, applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: _slicedToArray };
              return openPremiumPlanSelectionActionSheetDefault(obj);
            }
      };
      if (null != premiumDiscountOffer) {
        const obj19 = { style: tmp3.buttonIcon, color: nativeDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT, size: "sm" };
        const NitroWheelIcon = tmp8(8346).NitroWheelIcon;
        tmp44Result6 = closure_20(NitroWheelIcon, obj19);
      }
      str = undefined;
      if (null != premiumDiscountOffer && null != discountedPriceString) {
        str = "start";
      }
      if (null != premiumDiscountOffer) {
        str2 = "primary-overlay";
      } else {
        str2 = "experimental_premium-secondary";
      }
    }
    tmp44Result7 = closure_20(tmp43, obj16);
  }
  items5[4] = tmp44Result7;
  items6 = [closure_21(analyticsLocations, obj9), ];
  if (tmp44Result8) {
    const obj20 = { accessible: true, style: tmp3.trialSubTextContainer, children: closure_20(Text2, obj21) };
    obj21 = { variant: "text-md/normal", style: tmp3.trialSubText, children: format(pC4tcv, obj22) };
    Text2 = tmp8(4892).Text;
    const intl6 = tmp8(1126).intl;
    format = intl6.format;
    obj22 = { trialPeriod: result, price: priceString };
    priceString = undefined;
    pC4tcv = tmp8(1126).t.pC4tcv;
    if (tmp41 != null) {
      priceString = tmp41.priceString;
    }
    if (priceString == null) {
      priceString = closure_12;
    }
    tmp44Result8 = closure_20(tmp43, obj20);
  }
  items6[1] = tmp44Result8;
  items4[1] = closure_21(tmp4Result, obj8);
  return closure_21(analyticsLocations, obj6);
});
let result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCard.tsx");

export default tmp12;