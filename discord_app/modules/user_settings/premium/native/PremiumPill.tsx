// discord_app/modules/user_settings/premium/native/PremiumPill.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";

const require = arg1;
let closure_6 = createCacheKey.createStyles((arg0) => {
  const tmp3 = Themes;
  if (arg0) {
    let WHITE = tmp3.unsafe_rawColors.BLACK;
    let tmp5 = tmp;
  } else {
    WHITE = tmp3.colors.WHITE;
    tmp5 = tmp;
  }
  let obj = { pillContainer: null, discountPillText: null };
  obj = { backgroundColor: WHITE, borderRadius: tmp5(712).radii.round, alignItems: "center", justifyContent: "center", paddingHorizontal: 8, paddingVertical: 1 };
  obj[0] = obj;
  obj[1] = { textAlign: "center" };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/premium/native/PremiumPill.tsx");

export const PremiumPill = (discountOffer) => {
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
  let callback;
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
  const tmp6 = callback(tmp5);
  const items = [trialOffer];
  const memo = premiumType.useMemo(() => {
    let str;
    if (trialOffer != null) {
      str = trialOffer.expires_at;
    }
    if (str == null) {
      str = "";
    }
    return Date.parse(str);
  }, items);
  const tmp8 = flag(flag2[6])(memo, 60000);
  callback = tmp8;
  premiumTrialOfferPremiumType = discountOffer(flag2[7]).usePremiumTrialOfferPremiumType();
  const items1 = [flag2, discountOffer, flag, trialOffer, premiumType, premiumTrialOfferPremiumType, tmp8.days, flag3];
  const str3 = premiumType.useMemo(() => {
    if (flag2) {
      const intl4 = discountOffer(flag2[8]).intl;
      let stringResult = intl4.string(discountOffer(flag2[8]).t.EyjDRE);
    } else {
      if (null != discountOffer) {
        if (flag) {
          const intl3 = discountOffer(flag2[8]).intl;
          let obj = { percent: null };
          obj[0] = tmp.discount.amount;
          stringResult = intl3.formatToPlainString(discountOffer(flag2[8]).t.iiLbvu, obj);
        }
      }
      stringResult = null;
      if (null != trialOffer) {
        stringResult = null;
        if (premiumType === premiumTrialOfferPremiumType) {
          if (!flag3) {
            const _Number = Number;
            if (!Number.isNaN(_undefined.days)) {
              const intl = discountOffer(flag2[8]).intl;
              obj = { days: null };
              const _Math = Math;
              obj[0] = Math.max(tmp9.days, 1);
              let formatToPlainStringResult = intl.formatToPlainString(discountOffer(flag2[8]).t["+FgdjP"], obj);
            }
            tmp9 = _undefined;
          }
          const intl2 = discountOffer(flag2[8]).intl;
          formatToPlainStringResult = intl2.string(discountOffer(flag2[8]).t.qVcfa0);
        }
      }
    }
    return stringResult;
  }, items1);
  let tmp10 = null;
  if (null != str3) {
    let obj = { style: null, children: null };
    const items2 = [tmp6.pillContainer, style];
    obj[0] = items2;
    obj = { variant: "text-xs/bold", color: null, style: null, children: null };
    obj[1] = str2;
    obj[2] = tmp6.discountPillText;
    obj[3] = str3.toUpperCase();
    obj[1] = flag3(tmp(tmp2[9]).Text, obj);
    tmp10 = flag3(trialOffer, obj);
  }
  return tmp10;
};