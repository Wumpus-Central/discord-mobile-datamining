// === Module 7438: PremiumPill ===

// Module 7438 (PremiumPill)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles((arg0) => {
  const tmp3 = nativeDefault;
  if (arg0) {
    let WHITE = tmp3.unsafe_rawColors.BLACK;
    let tmp5 = importDefault;
  } else {
    WHITE = tmp3.colors.WHITE;
    tmp5 = importDefault;
  }
  let obj = { pillContainer: null, discountPillText: null };
  obj = { backgroundColor: WHITE, borderRadius: tmp5(576).radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 };
  obj.pillContainer = obj;
  obj.discountPillText = { textAlign: "center" };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/PremiumPill.tsx");

export const PremiumPill = (discountOffer) => {
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
  discountOffer(flag2[5]);
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
    let expiresAt;
    if (trialOffer != null) {
      expiresAt = trialOffer.expiresAt;
    }
    let num = NaN;
    if (null != expiresAt) {
      expiresAt = trialOffer.expiresAt;
      num = expiresAt.getTime();
    }
    return num;
  }, items);
  const tmp8Result = flag(flag2[6])(memo, 60000, undefined, isNaN(memo));
  days = tmp8Result;
  const tmp8 = flag(flag2[6]);
  premiumTrialOfferPremiumType = discountOffer(flag2[7]).usePremiumTrialOfferPremiumType();
  const items1 = [flag2, discountOffer, flag, trialOffer, premiumType, premiumTrialOfferPremiumType, tmp8Result.days, flag3];
  const str3 = premiumType.useMemo(() => {
    if (flag2) {
      const intl4 = util.intl;
      let stringResult = intl4.string(util.t.EyjDRE);
    } else {
      if (null != discountOffer) {
        if (flag) {
          const intl3 = util.intl;
          let obj = { percent: tmp.discount.amount };
          stringResult = intl3.formatToPlainString(util.t.iiLbvu, obj);
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
              obj = { days: null };
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
    obj = { variant: "text-xs/bold", color: str2, style: tmp6.discountPillText, children: str3.toUpperCase() };
    obj.children = flag3(tmp(tmp2[9]).Text, obj);
    tmp11 = flag3(trialOffer, obj);
  }
  return tmp11;
};