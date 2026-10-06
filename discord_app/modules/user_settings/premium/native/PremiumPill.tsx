// === Module 6960: PremiumPill ===

// Module 6960 (PremiumPill)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import useTheme from "useTheme" /* 4797 */;
import Text_Text from "Text/Text" /* 4892 */;
import useCountdownDefault from "useCountdown" /* 6961 */;
import MobileTrialUtils from "MobileTrialUtils" /* 6968 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  let WHITE;
  let tmp6;
  const tmp3 = nativeDefault;
  const tmp4 = arg0;
  if (tmp4) {
    WHITE = tmp3.unsafe_rawColors.BLACK;
    tmp6 = importDefault;
  } else {
    WHITE = tmp3.colors.WHITE;
    tmp6 = importDefault;
  }
  const obj = { pillContainer: { backgroundColor: WHITE, borderRadius: tmp6(587).radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 }, discountPillText: { textAlign: "center" } };
  ({ backgroundColor: WHITE, borderRadius: tmp6(587).radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 });
  return obj;
});
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((premiumType) => {
  let discountOffer;
  let hideTrialCountdown;
  let isActiveDiscount;
  let shouldShowDiscountUpsell;
  let style;
  let tmp12;
  let tmp20;
  let trialOffer;
  let useWhiteBackground;
  const obj = react2;
  const cResult = obj.c(20);
  ({ discountOffer, shouldShowDiscountUpsell, isActiveDiscount, trialOffer, style, useWhiteBackground, hideTrialCountdown } = premiumType);
  let tmp4 = undefined !== shouldShowDiscountUpsell;
  premiumType = premiumType.premiumType;
  if (tmp4) {
    tmp4 = shouldShowDiscountUpsell;
  }
  const tmp5 = undefined !== isActiveDiscount && isActiveDiscount;
  const tmp6 = undefined !== useWhiteBackground && useWhiteBackground;
  const tmp7 = undefined !== hideTrialCountdown && hideTrialCountdown;
  useTheme;
  let str2 = "text-overlay-dark";
  if (!tmp6 && "light" === tmp9) {
    str2 = "text-overlay-light";
  }
  const tmp11 = closure_6(!tmp6 && "light" === tmp9);
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
    tmp12 = num;
  } else {
    tmp12 = cResult[1];
  }
  const tmp15 = useCountdownDefault;
  const tmp15Result = tmp15(tmp12, 60000, undefined, isNaN(tmp12));
  MobileTrialUtils;
  if (tmp5) {
    let tmp28;
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl5.intl;
      const stringResult = intl4.string(intl5.t.EyjDRE);
      cResult[2] = stringResult;
      tmp28 = stringResult;
    } else {
      tmp28 = cResult[2];
    }
    tmp20 = tmp28;
  } else {
    if (null != discountOffer) {
      if (tmp4) {
        let tmp26;
        if (cResult[3] !== discountOffer.discount.amount) {
          const intl3 = intl5.intl;
          const obj2 = { percent: discountOffer.discount.amount };
          const formatToPlainStringResult = intl3.formatToPlainString(intl5.t.iiLbvu, obj2);
          cResult[3] = discountOffer.discount.amount;
          cResult[4] = formatToPlainStringResult;
          tmp26 = formatToPlainStringResult;
        } else {
          tmp26 = cResult[4];
        }
        tmp20 = tmp26;
      }
    }
    tmp20 = null;
    if (null != trialOffer) {
      tmp20 = null;
      if (premiumType === tmp18) {
        let tmp24;
        if (!tmp7) {
          const _Number = Number;
          if (!Number.isNaN(tmp15Result.days)) {
            let tmp21;
            if (cResult[6] !== tmp15Result.days) {
              const intl = intl5.intl;
              const formatToPlainString = intl.formatToPlainString;
              const _Math = Math;
              const obj3 = { days: Math.max(tmp15Result.days, 1) };
              const prop = intl5.t["+FgdjP"];
              const formatToPlainStringResult1 = formatToPlainString(prop, obj3);
              cResult[6] = tmp15Result.days;
              cResult[7] = formatToPlainStringResult1;
              tmp21 = formatToPlainStringResult1;
            } else {
              tmp21 = cResult[7];
            }
            tmp20 = tmp21;
          }
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl2 = intl5.intl;
          const stringResult1 = intl2.string(intl5.t.qVcfa0);
          cResult[5] = stringResult1;
          tmp24 = stringResult1;
        } else {
          tmp24 = cResult[5];
        }
        tmp20 = tmp24;
      }
    }
  }
  if (null == tmp20) {
    return null;
  } else {
    if (cResult[8] === style) {
      let tmp30;
      let tmp31;
      if (cResult[9] === tmp11.pillContainer) {
        tmp30 = cResult[10];
      }
      const discountPillText = tmp11.discountPillText;
      if (cResult[11] !== tmp20) {
        const formatted = tmp20.toUpperCase();
        cResult[11] = tmp20;
        cResult[12] = formatted;
        tmp31 = formatted;
      } else {
        tmp31 = cResult[12];
      }
      if (cResult[13] === tmp11.discountPillText) {
        if (cResult[14] === tmp31) {
          let tmp33;
          if (cResult[15] === str2) {
            tmp33 = cResult[16];
          }
          if (cResult[17] === tmp33) {
            let tmp36;
            if (cResult[18] === tmp30) {
              tmp36 = cResult[19];
            }
            return tmp36;
          }
          const tmp39 = <View style={tmp30}>{tmp33}</View>;
          cResult[17] = tmp33;
          cResult[18] = tmp30;
          cResult[19] = tmp39;
          tmp36 = tmp39;
        }
      }
      const tmp35 = jsx(Text_Text.Text, { variant: "text-xs/bold", color: str2, style: discountPillText, children: tmp31 });
      cResult[13] = tmp11.discountPillText;
      cResult[14] = tmp31;
      cResult[15] = str2;
      cResult[16] = tmp35;
      tmp33 = tmp35;
    }
    const items = [tmp11.pillContainer, style];
    cResult[8] = style;
    cResult[9] = tmp11.pillContainer;
    cResult[10] = items;
    tmp30 = items;
  }
}) : ((discountOffer) => {
  let Text;
  let items2;
  let obj2;
  let style;
  let useWhiteBackground;
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
  const tmp2 = flag2;
  discountOffer(flag2[7]);
  let str2 = "text-overlay-dark";
  if (!useWhiteBackground && "light" === tmp4) {
    str2 = "text-overlay-light";
  }
  const tmp6 = days(!useWhiteBackground && "light" === tmp4);
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
  const tmp8 = flag(tmp2[8]);
  const tmp8Result = tmp8(memo, 60000, undefined, isNaN(memo));
  days = tmp8Result;
  const tmpResult = discountOffer(tmp2[9]);
  premiumTrialOfferPremiumType = tmpResult.usePremiumTrialOfferPremiumType();
  const items1 = [flag2, discountOffer, flag, trialOffer, premiumType, premiumTrialOfferPremiumType, tmp8Result.days, flag3];
  const str3 = premiumType.useMemo(() => {
    let stringResult;
    if (flag2) {
      const intl4 = intl5.intl;
      stringResult = intl4.string(intl5.t.EyjDRE);
    } else {
      if (null != discountOffer) {
        if (flag) {
          const intl3 = intl5.intl;
          const obj2 = { percent: tmp2.discount.amount };
          stringResult = intl3.formatToPlainString(intl5.t.iiLbvu, obj2);
        }
      }
      stringResult = null;
      if (null != trialOffer) {
        stringResult = null;
        if (premiumType === premiumTrialOfferPremiumType) {
          if (!flag3) {
            let formatToPlainStringResult;
            const _Number = Number;
            if (!Number.isNaN(days.days)) {
              const intl = intl5.intl;
              const formatToPlainString = intl.formatToPlainString;
              const _Math = Math;
              const obj = { days: Math.max(days.days, 1) };
              const prop = intl5.t["+FgdjP"];
              formatToPlainStringResult = formatToPlainString(prop, obj);
            }
            stringResult = formatToPlainStringResult;
          }
          const intl2 = intl5.intl;
          formatToPlainStringResult = intl2.string(intl5.t.qVcfa0);
        }
      }
    }
    return stringResult;
  }, items1);
  let tmp11 = null;
  if (null != str3) {
    let obj = { style: items2, children: flag3(Text, obj2) };
    items2 = [tmp6.pillContainer, style];
    obj2 = { variant: "text-xs/bold", color: str2, style: tmp6.discountPillText, children: str3.toUpperCase() };
    Text = tmp(tmp2[11]).Text;
    tmp11 = flag3(trialOffer, obj);
  }
  return tmp11;
});
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPill.tsx");

export const PremiumPill = tmp2;