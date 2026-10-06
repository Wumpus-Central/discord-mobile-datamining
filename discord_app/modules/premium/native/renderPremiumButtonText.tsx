// === Module 13395: renderPremiumButtonText ===

// Module 13395 (renderPremiumButtonText)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4534 */;
import react from "react" /* 19 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ColorUtils_mod from "ColorUtils" /* 4733 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, obj1, tmp10, tmp2, tmp6, tmp7, tmp9;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4, PRICE_PLACEHOLDER: hasOwnProperty, SubscriptionIntervalTypes: metroRequire } = PremiumConstants);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { discount: obj2, premiumText: { flexDirection: "row" } };
obj2 = { borderWidth: 1, borderColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.3), borderRadius: 2, marginLeft: 4, paddingHorizontal: 2 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
let closure_9 = createStyles(obj);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((isGift) => {
  let basePlanId;
  let isCurrentPlan;
  let items;
  let obj5;
  let product;
  let style;
  let tmp5;
  let obj = isCurrentPlan(576);
  const cResult = obj.c(34);
  ({ style, isCurrentPlan } = isGift);
  isGift = isGift.isGift;
  ({ basePlanId, product } = isGift);
  dependencyMap = product;
  const text = isGift.text;
  const tmp4 = closure_9();
  if (cResult[0] !== basePlanId) {
    let obj2 = isGift(4534);
    const interval = obj2.getInterval(basePlanId);
    cResult[0] = basePlanId;
    cResult[1] = interval;
    tmp5 = interval;
  } else {
    tmp5 = cResult[1];
  }
  const intervalType = tmp5.intervalType;
  let combined = null;
  if (intervalType === constants.YEAR) {
    combined = null;
    if (!isCurrentPlan) {
      const _HermesInternal = HermesInternal;
      combined = "-" + closure_4 + "%";
    }
  }
  if (cResult[2] === intervalType) {
    if (cResult[3] === isCurrentPlan) {
      if (cResult[4] === isGift) {
        let tmp13;
        let priceString;
        const tmp11 = cResult[5];
        if (product != null) {
          priceString = product.priceString;
        }
        if (tmp11 === priceString) {
          tmp13 = cResult[6];
        }
        if (cResult[7] === tmp13) {
          let title;
          const tmp15 = cResult[8];
          if (product != null) {
            title = product.title;
          }
          if (tmp15 === title) {
            if (cResult[9] === tmp4.premiumText) {
              if (cResult[10] === text) {
                let tmp17;
                let tmp18;
                let tmp19;
                let tmp20;
                let num3;
                let tmp21;
                let tmp22;
                if (cResult[11] === style) {
                  tmp17 = cResult[12];
                  tmp18 = cResult[13];
                  tmp19 = cResult[14];
                  tmp20 = cResult[15];
                  num3 = cResult[16];
                  tmp21 = cResult[17];
                  tmp22 = cResult[18];
                }
                if (cResult[19] === tmp17) {
                  if (cResult[20] === tmp19) {
                    if (cResult[21] === tmp20) {
                      if (cResult[22] === num3) {
                        let tmp28;
                        if (cResult[23] === tmp21) {
                          tmp28 = cResult[24];
                        }
                        if (cResult[25] === combined) {
                          if (cResult[26] === tmp4.discount) {
                            let tmp31;
                            if (cResult[27] === style) {
                              tmp31 = cResult[28];
                            }
                            if (cResult[29] === tmp18) {
                              if (cResult[30] === tmp22) {
                                if (cResult[31] === tmp28) {
                                  let tmp35;
                                  if (cResult[32] === tmp31) {
                                    tmp35 = cResult[33];
                                  }
                                  return tmp35;
                                }
                              }
                            }
                            let obj3 = { style: tmp22, children: items };
                            items = [tmp28, tmp31];
                            const tmp37 = closure_8(tmp18, obj3);
                            cResult[29] = tmp18;
                            cResult[30] = tmp22;
                            cResult[31] = tmp28;
                            cResult[32] = tmp31;
                            cResult[33] = tmp37;
                            tmp35 = tmp37;
                          }
                        }
                        let tmp32 = null;
                        if (null != combined) {
                          let obj4 = { style: tmp4.discount, children: closure_7(isCurrentPlan(1188).LegacyText, obj5) };
                          obj5 = { style, numberOfLines: 1, children: combined };
                          tmp32 = closure_7(intervalType, obj4);
                        }
                        cResult[25] = combined;
                        cResult[26] = tmp4.discount;
                        cResult[27] = style;
                        cResult[28] = tmp32;
                        tmp31 = tmp32;
                      }
                    }
                  }
                }
                const obj6 = { style: tmp20, numberOfLines: num3, accessibilityLabel: tmp21, children: tmp19 };
                const tmp30 = closure_7(tmp17, obj6);
                cResult[19] = tmp17;
                cResult[20] = tmp19;
                cResult[21] = tmp20;
                cResult[22] = num3;
                cResult[23] = tmp21;
                cResult[24] = tmp30;
                tmp28 = tmp30;
              }
            }
          }
        }
        let tmp13Result = text;
        if (text == null) {
          tmp13Result = tmp13();
        }
        const premiumText = tmp4.premiumText;
        const LegacyText = isCurrentPlan(1188).LegacyText;
        let intl = isCurrentPlan(1126).intl;
        let formatToPlainString = intl.formatToPlainString;
        let title1;
        const E0lS2r = isCurrentPlan(1126).t.E0lS2r;
        const tmp24 = intervalType;
        if (product != null) {
          title1 = product.title;
        }
        const obj7 = { product: title1, description: tmp13Result };
        let formatToPlainStringResult = formatToPlainString(E0lS2r, obj7);
        cResult[7] = tmp13;
        let title2;
        if (product != null) {
          title2 = product.title;
        }
        cResult[8] = title2;
        cResult[9] = tmp4.premiumText;
        cResult[10] = text;
        cResult[11] = style;
        cResult[12] = LegacyText;
        class E {
          constructor() {
            priceString = undefined;
            if (product != null) {
              priceString = product.priceString;
            }
            if (priceString == null) {
              priceString = PRICE_PLACEHOLDER;
            }
            if (intervalType === SubscriptionIntervalTypes.MONTH) {
              tmp4 = isGift;
              tmp5 = closure_0;
              tmp6 = closure_2;
              intl = closure_0(closure_2[10]).intl;
              formatToPlainString = intl.formatToPlainString;
              if (isGift) {
                obj1 = { price: null };
                obj1.price = priceString;
                formatToPlainStringResult = formatToPlainString(tmp5(tmp6[10]).t.FIjgMp, obj1);
              } else {
                tmp7 = isCurrentPlan;
                t2 = tmp5(tmp6[10]).t;
                obj5 = { price: null };
                obj5.price = priceString;
                formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj5);
              }
              formatToPlainString2Result = formatToPlainStringResult;
            } else {
              tmp9 = isGift;
              tmp10 = closure_0;
              tmp11 = closure_2;
              intl2 = closure_0(closure_2[10]).intl;
              formatToPlainString2 = intl2.formatToPlainString;
              if (isGift) {
                obj6 = { price: null };
                obj6.price = priceString;
                formatToPlainString2Result = formatToPlainString2(tmp10(tmp11[10]).t.rm53bV, obj6);
              } else {
                tmp2 = isCurrentPlan;
                t = tmp10(tmp11[10]).t;
                obj = { price: null };
                obj.price = priceString;
                formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj);
              }
            }
            return formatToPlainString2Result;
          }
        }
        cResult[14] = tmp13Result;
        cResult[15] = style;
        cResult[16] = 1;
        cResult[17] = formatToPlainStringResult;
        cResult[18] = premiumText;
        tmp22 = premiumText;
        tmp21 = formatToPlainStringResult;
        num3 = 1;
        tmp20 = style;
        tmp19 = tmp13Result;
        tmp18 = tmp24;
        tmp17 = LegacyText;
      }
    }
  }
  cResult[2] = intervalType;
  cResult[3] = isCurrentPlan;
  cResult[4] = isGift;
  let priceString1;
  if (product != null) {
    priceString1 = product.priceString;
  }
  class E {
    constructor() {
      priceString = undefined;
      if (product != null) {
        priceString = product.priceString;
      }
      if (priceString == null) {
        priceString = PRICE_PLACEHOLDER;
      }
      if (intervalType === SubscriptionIntervalTypes.MONTH) {
        tmp4 = isGift;
        tmp5 = closure_0;
        tmp6 = closure_2;
        intl = closure_0(closure_2[10]).intl;
        formatToPlainString = intl.formatToPlainString;
        if (isGift) {
          obj1 = { price: null };
          obj1.price = priceString;
          formatToPlainStringResult = formatToPlainString(tmp5(tmp6[10]).t.FIjgMp, obj1);
        } else {
          tmp7 = isCurrentPlan;
          t2 = tmp5(tmp6[10]).t;
          obj5 = { price: null };
          obj5.price = priceString;
          formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj5);
        }
        formatToPlainString2Result = formatToPlainStringResult;
      } else {
        tmp9 = isGift;
        tmp10 = closure_0;
        tmp11 = closure_2;
        intl2 = closure_0(closure_2[10]).intl;
        formatToPlainString2 = intl2.formatToPlainString;
        if (isGift) {
          obj6 = { price: null };
          obj6.price = priceString;
          formatToPlainString2Result = formatToPlainString2(tmp10(tmp11[10]).t.rm53bV, obj6);
        } else {
          tmp2 = isCurrentPlan;
          t = tmp10(tmp11[10]).t;
          obj = { price: null };
          obj.price = priceString;
          formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj);
        }
      }
      return formatToPlainString2Result;
    }
  }
  cResult[5] = priceString1;
  cResult[6] = E;
  tmp13 = E;
}) : ((basePlanId) => {
  let E0lS2r;
  let formatToPlainString3;
  let isCurrentPlan;
  let isGift;
  let items;
  let obj9;
  let product;
  let style;
  let text;
  let title;
  ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
  basePlanId = basePlanId.basePlanId;
  const tmp = closure_9();
  const obj = PremiumUtilsDefault;
  const intervalType = obj.getInterval(basePlanId).intervalType;
  let combined = null;
  if (intervalType === metroRequire.YEAR) {
    combined = null;
    if (!isCurrentPlan) {
      const _HermesInternal = HermesInternal;
      combined = "-" + React3 + "%";
    }
  }
  if (text == null) {
    let formatToPlainStringResult;
    let priceString;
    if (product != null) {
      priceString = product.priceString;
    }
    if (priceString == null) {
      priceString = hasOwnProperty;
    }
    if (intervalType === metroRequire.MONTH) {
      let formatToPlainString2Result;
      const intl2 = intl4.intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      const t2 = intl4.t;
      if (isGift) {
        const obj2 = { price: priceString };
        formatToPlainString2Result = formatToPlainString2(t2.FIjgMp, obj2);
      } else {
        const obj3 = { price: priceString };
        formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj3);
      }
      formatToPlainStringResult = formatToPlainString2Result;
    } else {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const t = intl4.t;
      if (isGift) {
        const obj4 = { price: priceString };
        formatToPlainStringResult = formatToPlainString(t.rm53bV, obj4);
      } else {
        const obj5 = { price: priceString };
        formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj5);
      }
    }
    text = formatToPlainStringResult;
  }
  const obj6 = { style: tmp.premiumText, children: items };
  const obj7 = { style, numberOfLines: 1, accessibilityLabel: formatToPlainString3(E0lS2r, { product: title, description: text }), children: text };
  const LegacyText = native.LegacyText;
  const intl3 = intl4.intl;
  formatToPlainString3 = intl3.formatToPlainString;
  title = undefined;
  E0lS2r = intl4.t.E0lS2r;
  if (product != null) {
    title = product.title;
  }
  items = [metroImportDefault(LegacyText, obj7), ];
  let tmp14Result = null;
  if (null != combined) {
    const obj8 = { style: tmp.discount, children: metroImportDefault(native.LegacyText, obj9) };
    obj9 = { style, numberOfLines: 1, children: combined };
    tmp14Result = metroImportDefault(View, obj8);
  }
  items[1] = tmp14Result;
  return metroImportAll(View, obj6);
});
const result = size.fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  return metroImportDefault(closure_10, obj);
};