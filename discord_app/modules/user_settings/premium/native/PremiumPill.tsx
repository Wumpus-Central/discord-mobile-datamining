// === Module 7160: PremiumPill ===

// Module 7160 (PremiumPill)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import useTheme from "useTheme" /* 5031 */;
import Text_Text from "Text/Text" /* 5088 */;
import useCountdownDefault from "useCountdown" /* 7161 */;
import MobileTrialUtils from "MobileTrialUtils" /* 7168 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles((arg0) => {
  const tmp3 = nativeDefault;
  if (arg0) {
    let WHITE = tmp3.unsafe_rawColors.BLACK;
    let tmp5 = importDefault;
  } else {
    WHITE = tmp3.colors.WHITE;
    tmp5 = importDefault;
  }
  const obj = { pillContainer: { backgroundColor: WHITE, borderRadius: tmp5(587).radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 }, discountPillText: { textAlign: "center" } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPill.tsx");

export const PremiumPill = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  const cResult = c.c(20);
  ({ discountOffer, shouldShowDiscountUpsell, isActiveDiscount, trialOffer, style, useWhiteBackground, hideTrialCountdown } = premiumType);
  let tmp4 = undefined !== shouldShowDiscountUpsell;
  if (tmp4) {
    tmp4 = shouldShowDiscountUpsell;
  }
  useTheme;
  let tmp10 = !tmp6;
  if (!(undefined !== useWhiteBackground && useWhiteBackground)) {
    tmp10 = "light" === tmp9;
  }
  let str2 = "text-overlay-dark";
  if (tmp10) {
    str2 = "text-overlay-light";
  }
  const tmp11 = closure_6(tmp10);
  if (cResult[0] !== trialOffer) {
    let expiresAt1;
    if (trialOffer != null) {
      expiresAt1 = trialOffer.expiresAt;
    }
    let num = NaN;
    if (null != expiresAt1) {
      const expiresAt = trialOffer.expiresAt;
      num = expiresAt.getTime();
    }
    cResult[0] = trialOffer;
    cResult[1] = num;
    let tmp12 = num;
  } else {
    tmp12 = cResult[1];
  }
  const tmp5 = undefined !== isActiveDiscount && isActiveDiscount;
  const tmp7 = undefined !== hideTrialCountdown && hideTrialCountdown;
  const tmp15Result = useCountdownDefault(tmp12, 60000, undefined, isNaN(tmp12));
  MobileTrialUtils;
  if (tmp5) {
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = util.intl;
      const stringResult = intl4.string(util.t.EyjDRE);
      cResult[2] = stringResult;
    }
  } else {
    if (null != discountOffer) {
      if (tmp4) {
        if (cResult[3] !== discountOffer.discount.amount) {
          const intl3 = util.intl;
          const obj2 = { percent: discountOffer.discount.amount };
          const formatToPlainStringResult = intl3.formatToPlainString(util.t.iiLbvu, obj2);
          cResult[3] = discountOffer.discount.amount;
          cResult[4] = formatToPlainStringResult;
          let tmp25 = formatToPlainStringResult;
        } else {
          tmp25 = cResult[4];
        }
        let tmp20 = tmp25;
      }
      if (null == tmp20) {
        return null;
      } else {
        if (cResult[8] === style) {
          if (cResult[9] === tmp11.pillContainer) {
            let tmp31 = cResult[10];
          }
          if (cResult[11] !== tmp20) {
            const formatted = tmp20.toUpperCase();
            cResult[11] = tmp20;
            cResult[12] = formatted;
            let tmp32 = formatted;
          } else {
            tmp32 = cResult[12];
          }
          if (cResult[13] === tmp11.discountPillText) {
            if (cResult[14] === tmp32) {
              if (cResult[15] === str2) {
                let tmp34 = cResult[16];
              }
              if (cResult[17] === tmp34) {
                if (cResult[18] === tmp31) {
                  let tmp37 = cResult[19];
                }
                return tmp37;
              }
              const obj3 = { style: tmp31, children: tmp34 };
              const tmp40 = <View style={tmp31}>{tmp34}</View>;
              cResult[17] = tmp34;
              cResult[18] = tmp31;
              cResult[19] = tmp40;
              tmp37 = tmp40;
            }
          }
          const obj4 = { variant: "text-xs/bold", color: str2, style: tmp11.discountPillText, children: tmp32 };
          const tmp36 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: str2, style: tmp11.discountPillText, children: tmp32 });
          cResult[13] = tmp11.discountPillText;
          cResult[14] = tmp32;
          cResult[15] = str2;
          cResult[16] = tmp36;
          tmp34 = tmp36;
        }
        const items = [tmp11.pillContainer, style];
        cResult[8] = style;
        cResult[9] = tmp11.pillContainer;
        cResult[10] = items;
        tmp31 = items;
      }
    }
    tmp20 = null;
    if (null != trialOffer) {
      tmp20 = null;
      if (premiumType.premiumType === tmp18) {
        if (!tmp7) {
          const _Number = Number;
          if (!Number.isNaN(tmp15Result.days)) {
            if (cResult[6] !== tmp15Result.days) {
              const intl = util.intl;
              const obj5 = { days: null };
              const _Math = Math;
              obj5.days = Math.max(tmp15Result.days, 1);
              const formatToPlainStringResult1 = intl.formatToPlainString(util.t["+FgdjP"], obj5);
              cResult[6] = tmp15Result.days;
              cResult[7] = formatToPlainStringResult1;
              let tmp21 = formatToPlainStringResult1;
            } else {
              tmp21 = cResult[7];
            }
            tmp20 = tmp21;
          }
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t.qVcfa0);
          cResult[5] = stringResult1;
          let tmp23 = stringResult1;
        } else {
          tmp23 = cResult[5];
        }
        tmp20 = tmp23;
      }
    }
  }
}) : ((discountOffer) => {
  discountOffer = discountOffer.discountOffer;
  let flag = discountOffer.shouldShowDiscountUpsell;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = discountOffer.isActiveDiscount;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const premiumType = discountOffer.premiumType;
  const trialOffer = discountOffer.trialOffer;
  ({ useWhiteBackground, style } = discountOffer);
  if (useWhiteBackground === undefined) {
    useWhiteBackground = false;
  }
  let flag3 = discountOffer.hideTrialCountdown;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let days;
  let premiumTrialOfferPremiumType;
  discountOffer(flag2[7]);
  let tmp5 = !useWhiteBackground;
  if (!useWhiteBackground) {
    tmp5 = "light" === tmp4;
  }
  let str2 = "text-overlay-dark";
  if (tmp5) {
    str2 = "text-overlay-light";
  }
  const tmp6 = days(tmp5);
  const items = [trialOffer];
  const memo = premiumType.useMemo(() => {
    let expiresAt1;
    if (trialOffer != null) {
      expiresAt1 = trialOffer.expiresAt;
    }
    let num = NaN;
    if (null != expiresAt1) {
      const expiresAt = trialOffer.expiresAt;
      num = expiresAt.getTime();
    }
    return num;
  }, items);
  const tmp8Result = flag(flag2[8])(memo, 60000, undefined, isNaN(memo));
  days = tmp8Result;
  const tmp8 = flag(flag2[8]);
  premiumTrialOfferPremiumType = discountOffer(flag2[9]).usePremiumTrialOfferPremiumType();
  const items1 = [flag2, discountOffer, flag, trialOffer, premiumType, premiumTrialOfferPremiumType, tmp8Result.days, flag3];
  const str3 = premiumType.useMemo(() => {
    if (flag2) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.EyjDRE);
    } else {
      if (null != discountOffer) {
        if (flag) {
          const intl3 = util.intl;
          const obj2 = { percent: tmp.discount.amount };
          stringResult = intl3.formatToPlainString(util.t.iiLbvu, obj2);
        }
      }
      stringResult = null;
      if (null != trialOffer) {
        stringResult = null;
        if (premiumType === premiumTrialOfferPremiumType) {
          if (!flag3) {
            const _Number = Number;
            if (!Number.isNaN(days.days)) {
              const intl = util.intl;
              const obj = { days: null };
              const _Math = Math;
              obj.days = Math.max(days.days, 1);
              let formatToPlainStringResult = intl.formatToPlainString(util.t["+FgdjP"], obj);
            }
          }
          const intl2 = util.intl;
          formatToPlainStringResult = intl2.string(util.t.qVcfa0);
        }
      }
    }
    return stringResult;
  }, items1);
  let tmp11 = null;
  if (null != str3) {
    let obj = { style: null, children: null };
    const items2 = [tmp6.pillContainer, style];
    obj.style = items2;
    let obj2 = { variant: "text-xs/bold", color: str2, style: tmp6.discountPillText, children: str3.toUpperCase() };
    obj.children = flag3(tmp(tmp2[11]).Text, obj2);
    tmp11 = flag3(trialOffer, obj);
  }
  return tmp11;
});