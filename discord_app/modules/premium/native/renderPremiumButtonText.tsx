// discord_app/modules/premium/native/renderPremiumButtonText.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1379);
({
  PREMIUM_YEARLY_DISCOUNT_PERCENT: closure_4,
  PRICE_PLACEHOLDER: hasOwnProperty,
  SubscriptionIntervalTypes: metroRequire,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { discount: null, premiumText: null };
let obj3 = { borderWidth: 1, borderColor: null, borderRadius: 2, marginLeft: 4, paddingHorizontal: 2 };
const ColorUtils = fn(4727);
obj3.borderColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.3);
obj2.discount = obj3;
obj2.premiumText = { flexDirection: "row" };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (isGift) => {
      const cResult = isCurrentPlan(576).c(34);
      ({ style, isCurrentPlan } = isGift);
      isGift = isGift.isGift;
      ({ basePlanId, product } = isGift);
      dependencyMap = product;
      const text = isGift.text;
      const tmp4 = closure_9();
      if (cResult[0] !== basePlanId) {
        const interval = isGift(4528).getInterval(basePlanId);
        cResult[0] = basePlanId;
        cResult[1] = interval;
        let tmp5 = interval;
        let obj2 = isGift(4528);
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
            let priceString;
            if (product != null) {
              priceString = product.priceString;
            }
            if (cResult[5] === priceString) {
              let tmp12 = cResult[6];
            }
            if (cResult[7] === tmp12) {
              let title;
              if (product != null) {
                title = product.title;
              }
              if (cResult[8] === title) {
                if (cResult[9] === tmp4.premiumText) {
                  if (cResult[10] === text) {
                    if (cResult[11] === style) {
                      let tmp15 = cResult[12];
                      let tmp16 = cResult[13];
                      let tmp17 = cResult[14];
                      let tmp18 = cResult[15];
                      let num3 = cResult[16];
                      let tmp19 = cResult[17];
                      let tmp20 = cResult[18];
                    }
                    if (cResult[19] === tmp15) {
                      if (cResult[20] === tmp17) {
                        if (cResult[21] === tmp18) {
                          if (cResult[22] === num3) {
                            if (cResult[23] === tmp19) {
                              let tmp26 = cResult[24];
                            }
                            if (cResult[25] === combined) {
                              if (cResult[26] === tmp4.discount) {
                                if (cResult[27] === style) {
                                  let tmp29 = cResult[28];
                                }
                                if (cResult[29] === tmp16) {
                                  if (cResult[30] === tmp20) {
                                    if (cResult[31] === tmp26) {
                                      if (cResult[32] === tmp29) {
                                        let tmp33 = cResult[33];
                                      }
                                      return tmp33;
                                    }
                                  }
                                }
                                let obj3 = { style: tmp20, children: null };
                                const items = [tmp26, tmp29];
                                obj3.children = items;
                                const tmp35 = closure_8(tmp16, obj3);
                                cResult[29] = tmp16;
                                cResult[30] = tmp20;
                                cResult[31] = tmp26;
                                cResult[32] = tmp29;
                                cResult[33] = tmp35;
                                tmp33 = tmp35;
                              }
                            }
                            let tmp30 = null;
                            if (null != combined) {
                              let obj4 = { style: tmp4.discount, children: null };
                              const obj5 = { style, numberOfLines: 1, children: combined };
                              obj4.children = closure_7(isCurrentPlan(1188).LegacyText, obj5);
                              tmp30 = closure_7(intervalType, obj4);
                            }
                            cResult[25] = combined;
                            cResult[26] = tmp4.discount;
                            cResult[27] = style;
                            cResult[28] = tmp30;
                            tmp29 = tmp30;
                          }
                        }
                      }
                    }
                    const obj6 = { style: tmp18, numberOfLines: num3, accessibilityLabel: tmp19, children: tmp17 };
                    const tmp28 = closure_7(tmp15, obj6);
                    cResult[19] = tmp15;
                    cResult[20] = tmp17;
                    cResult[21] = tmp18;
                    cResult[22] = num3;
                    cResult[23] = tmp19;
                    cResult[24] = tmp28;
                    tmp26 = tmp28;
                  }
                }
              }
            }
            let tmp12Result = text;
            if (text == null) {
              tmp12Result = tmp12();
            }
            const premiumText = tmp4.premiumText;
            const LegacyText = isCurrentPlan(1188).LegacyText;
            let intl = isCurrentPlan(1126).intl;
            let title1;
            if (product != null) {
              title1 = product.title;
            }
            const obj7 = { product: title1, description: tmp12Result };
            let formatToPlainStringResult = intl.formatToPlainString(isCurrentPlan(1126).t.E0lS2r, obj7);
            cResult[7] = tmp12;
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
                  FIjgMp = closure_0;
                  obj1 = closure_2;
                  intl = closure_0(closure_2[10]).intl;
                  formatToPlainString = intl.formatToPlainString;
                  if (isGift) {
                    FIjgMp = FIjgMp(obj1[10]).t.FIjgMp;
                    obj1 = { price: null };
                    obj1.price = priceString;
                    formatToPlainStringResult = formatToPlainString(FIjgMp, obj1);
                  } else {
                    tmp5 = isCurrentPlan;
                    t2 = FIjgMp(obj1[10]).t;
                    obj5 = { price: null };
                    obj5.price = priceString;
                    formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj5);
                  }
                  tmp7 = formatToPlainStringResult;
                } else {
                  tmp8 = isGift;
                  tmp9 = closure_0;
                  tmp10 = closure_2;
                  intl2 = closure_0(closure_2[10]).intl;
                  formatToPlainString2 = intl2.formatToPlainString;
                  if (isGift) {
                    obj6 = { price: null };
                    obj6.price = priceString;
                    formatToPlainString2Result = formatToPlainString2(tmp9(tmp10[10]).t.rm53bV, obj6);
                  } else {
                    tmp2 = isCurrentPlan;
                    t = tmp9(tmp10[10]).t;
                    obj = { price: null };
                    obj.price = priceString;
                    formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj);
                  }
                  return formatToPlainString2Result;
                }
                return;
              }
            }
            cResult[14] = tmp12Result;
            cResult[15] = style;
            cResult[16] = 1;
            cResult[17] = formatToPlainStringResult;
            cResult[18] = premiumText;
            tmp20 = premiumText;
            tmp19 = formatToPlainStringResult;
            num3 = 1;
            tmp18 = style;
            tmp17 = tmp12Result;
            tmp16 = intervalType;
            tmp15 = LegacyText;
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
            FIjgMp = closure_0;
            obj1 = closure_2;
            intl = closure_0(closure_2[10]).intl;
            formatToPlainString = intl.formatToPlainString;
            if (isGift) {
              FIjgMp = FIjgMp(obj1[10]).t.FIjgMp;
              obj1 = { price: null };
              obj1.price = priceString;
              formatToPlainStringResult = formatToPlainString(FIjgMp, obj1);
            } else {
              tmp5 = isCurrentPlan;
              t2 = FIjgMp(obj1[10]).t;
              obj5 = { price: null };
              obj5.price = priceString;
              formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t2.V6iX43 : t2.AbOLNu, obj5);
            }
            tmp7 = formatToPlainStringResult;
          } else {
            tmp8 = isGift;
            tmp9 = closure_0;
            tmp10 = closure_2;
            intl2 = closure_0(closure_2[10]).intl;
            formatToPlainString2 = intl2.formatToPlainString;
            if (isGift) {
              obj6 = { price: null };
              obj6.price = priceString;
              formatToPlainString2Result = formatToPlainString2(tmp9(tmp10[10]).t.rm53bV, obj6);
            } else {
              tmp2 = isCurrentPlan;
              t = tmp9(tmp10[10]).t;
              obj = { price: null };
              obj.price = priceString;
              formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj);
            }
            return formatToPlainString2Result;
          }
          return;
        }
      }
      cResult[5] = priceString1;
      cResult[6] = E;
      tmp12 = E;
      let obj = isCurrentPlan(576);
    }
  : (basePlanId) => {
      ({ style, isCurrentPlan, isGift, product, text } = basePlanId);
      const tmp = closure_9();
      const intervalType = PremiumUtilsDefault.getInterval(basePlanId.basePlanId).intervalType;
      let combined = null;
      if (intervalType === constants.YEAR) {
        combined = null;
        if (!isCurrentPlan) {
          const _HermesInternal = HermesInternal;
          combined = "-" + React4 + "%";
        }
      }
      if (text != null) {
        const obj2 = { style: tmp.premiumText, children: null };
        const obj3 = { style, numberOfLines: 1, accessibilityLabel: null, children: null };
        const intl3 = util.intl;
        let title;
        if (product != null) {
          title = product.title;
        }
        const obj4 = { product: title, description: text };
        obj3.accessibilityLabel = intl3.formatToPlainString(util.t.E0lS2r, obj4);
        obj3.children = text;
        const items = [React5(native.LegacyText, obj3)];
        let tmp16Result = null;
        if (null != combined) {
          const obj5 = { style: tmp.discount, children: null };
          const obj6 = { style, numberOfLines: 1, children: combined };
          obj5.children = React5(native.LegacyText, obj6);
          tmp16Result = React5(View, obj5);
        }
        items[1] = tmp16Result;
        obj2.children = items;
        return closure_1_8(View, obj2);
      } else {
        let priceString;
        if (product != null) {
          priceString = product.priceString;
        }
        if (priceString == null) {
          priceString = hasOwnProperty;
        }
        if (intervalType !== constants.MONTH) {
          const intl = util.intl;
          const formatToPlainString = intl.formatToPlainString;
          const t = util.t;
          if (isGift) {
            const obj7 = { price: priceString };
            let formatToPlainStringResult = formatToPlainString(t.rm53bV, obj7);
          } else {
            const obj8 = { price: priceString };
            formatToPlainStringResult = formatToPlainString(isCurrentPlan ? t.dFbQCa : t["rS8FA+"], obj8);
          }
        }
        const intl2 = util.intl;
        const formatToPlainString2 = intl2.formatToPlainString;
        let t1 = util.t;
        if (isGift) {
          t1 = { price: priceString };
          let formatToPlainString2Result = formatToPlainString2(t1.FIjgMp, t1);
        } else {
          const obj9 = { price: priceString };
          formatToPlainString2Result = formatToPlainString2(isCurrentPlan ? t1.V6iX43 : t1.AbOLNu, obj9);
        }
      }
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/renderPremiumButtonText.tsx");

export default function renderPremiumText(arg0) {
  const merged = Object.assign(arg0);
  return React5(closure_10, {});
}
