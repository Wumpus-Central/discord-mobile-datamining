// === Module 7208: getOrbPriceFromPrices ===

// Module 7208 (getOrbPriceFromPrices)
import obj132 from "obj132" /* 2 */;
import items2 from "items" /* 678 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import set from "set" /* 4061 */;
import ConstraintReasonCode2 from "ConstraintReasonCode" /* 7209 */;
import _signOrder from "_signOrder" /* 7210 */;
import ME from "ME" /* 676 */;

({ CurrencyCodes: obj1, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: c4 } = ME);
const EXTERNAL_PRODUCT_SKU_IDS = items2.EXTERNAL_PRODUCT_SKU_IDS;
const ConstraintReasonCode = ConstraintReasonCode2.ConstraintReasonCode;
const result = obj132.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export const getOrbPriceFromPrices = function getOrbPriceFromPrices(prices, memo1) {
  if (memo1) {
    if (null != prices[closure_4.PREMIUM_TIER_2]) {
      let tmp2 = prices[closure_4.PREMIUM_TIER_2];
    }
    let substr;
    if (tmp2 != null) {
      const countryPrices = tmp2.countryPrices;
      if (countryPrices != null) {
        prices = countryPrices.prices;
        if (prices != null) {
          substr = prices.slice(0, 2);
        }
      }
    }
    if (substr == null) {
      substr = [];
    }
    let found = substr.find((item, index) => item.currency === constants.DISCORD_ORB);
    if (found == null) {
      found = null;
    }
    return found;
  }
  tmp2 = prices[closure_4.DEFAULT];
};
export const getOrbCheckoutDisclaimerMessage = function getOrbCheckoutDisclaimerMessage(skuId) {
  const intl = getSystemLocale.intl;
  const obj = { buyButtonLabel: null, paidServiceTermURL: null, virtualGoodsURL: null };
  const intl2 = getSystemLocale.intl;
  obj[0] = intl2.string(getSystemLocale.t["zLch/S"]);
  ({ PAID_TERMS: obj[1], PAID_TERMS_VIRTUAL_GOODS: obj[2] } = closure_3);
  const intl3 = getSystemLocale.intl;
  let stringResult = intl3.string(getSystemLocale.t["Sxed/G"]);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = getSystemLocale.intl;
    stringResult = intl5.string(getSystemLocale.t.APcKRo);
  } else if (skuId === tmp5.FRACTIONAL_PREMIUM) {
    const intl4 = getSystemLocale.intl;
    stringResult = intl4.string(getSystemLocale.t.FhJ74j);
  }
  const items = [intl.format(getSystemLocale.t["5qdUrO"], obj), " ", stringResult];
  return items;
};
export const resolveOrbCheckoutErrorMessage = function resolveOrbCheckoutErrorMessage(code) {
  if (null == code) {
    return null;
  } else {
    let keFvXM = dependencyMap;
    let OrderSigningFailedWithConstraintsError = _signOrder.OrderSigningFailedWithConstraintsError;
    if (!(code instanceof OrderSigningFailedWithConstraintsError)) {
      if (code instanceof _signOrder.OrderProcessingPendingError) {
        const intl5 = getSystemLocale.intl;
        let stringResult = intl5.string(getSystemLocale.t["2BmwgV"]);
      } else if (code.code === set.ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
        const intl4 = getSystemLocale.intl;
        stringResult = intl4.string(getSystemLocale.t.keFvXM);
      } else if (code.code === set.ErrorCodes.ALREADY_PURCHASED) {
        const intl3 = getSystemLocale.intl;
        stringResult = intl3.string(getSystemLocale.t.m371Mx);
      } else if (code.code === set.ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
        const intl2 = getSystemLocale.intl;
        stringResult = intl2.string(getSystemLocale.t.ZHgEG7);
      } else {
        const intl = getSystemLocale.intl;
        stringResult = intl.string(getSystemLocale.t.fqJZ11);
      }
    } else {
      OrderSigningFailedWithConstraintsError = arg1;
    }
    if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === OrderSigningFailedWithConstraintsError) {
      const intl9 = getSystemLocale.intl;
      keFvXM = getSystemLocale.t.keFvXM;
      let stringResult1 = intl9.string(keFvXM);
    } else {
      if (ConstraintReasonCode.SKU_ALREADY_OWNED === OrderSigningFailedWithConstraintsError) {
        const intl8 = getSystemLocale.intl;
        stringResult1 = intl8.string(getSystemLocale.t.m371Mx);
      } else if (ConstraintReasonCode.BUNDLE_PARTIALLY_OWNED !== OrderSigningFailedWithConstraintsError) {
        const intl6 = getSystemLocale.intl;
        stringResult1 = intl6.string(getSystemLocale.t.fqJZ11);
      }
      const intl7 = getSystemLocale.intl;
      stringResult1 = intl7.string(getSystemLocale.t.v9oC0p);
    }
  }
};