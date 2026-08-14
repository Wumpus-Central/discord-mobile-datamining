// discord_app/modules/virtual_currency/checkout/OrbCheckoutUtils.tsx
import ME from "ME";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import { ConstraintReasonCode } from "ConstraintReasonCode";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { _signOrder } from "../../payments/OrderActionCreators.tsx";

let c3;
let c4;
let obj1;
({ CurrencyCodes: obj1, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: c4 } = ME);
const result = require("ConstraintReasonCode").fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

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
    let found = substr.find((currency) => currency.currency === constants.DISCORD_ORB);
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
    const intl5 = tmp(1236).intl;
    stringResult = intl5.string(tmp(1236).t.APcKRo);
  } else if (skuId === tmp5.FRACTIONAL_PREMIUM) {
    const intl4 = tmp(1236).intl;
    stringResult = intl4.string(tmp(1236).t.FhJ74j);
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
      if (code instanceof tmp(5926).OrderProcessingPendingError) {
        const intl5 = tmp(1236).intl;
        let stringResult = intl5.string(tmp(1236).t["2BmwgV"]);
      } else if (code.code === tmp(4029).ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
        const intl4 = tmp(1236).intl;
        stringResult = intl4.string(tmp(1236).t.keFvXM);
      } else if (code.code === tmp(4029).ErrorCodes.ALREADY_PURCHASED) {
        const intl3 = tmp(1236).intl;
        stringResult = intl3.string(tmp(1236).t.m371Mx);
      } else if (code.code === tmp(4029).ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
        const intl2 = tmp(1236).intl;
        stringResult = intl2.string(tmp(1236).t.ZHgEG7);
      } else {
        const intl = tmp(1236).intl;
        stringResult = intl.string(tmp(1236).t.fqJZ11);
      }
    } else {
      OrderSigningFailedWithConstraintsError = arg1;
    }
    if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === OrderSigningFailedWithConstraintsError) {
      const intl9 = tmp(1236).intl;
      keFvXM = tmp(1236).t.keFvXM;
      let stringResult1 = intl9.string(keFvXM);
    } else {
      if (tmp3.SKU_ALREADY_OWNED === OrderSigningFailedWithConstraintsError) {
        const intl8 = tmp(1236).intl;
        stringResult1 = intl8.string(tmp(1236).t.m371Mx);
      } else if (tmp3.BUNDLE_PARTIALLY_OWNED !== OrderSigningFailedWithConstraintsError) {
        const intl6 = tmp(1236).intl;
        stringResult1 = intl6.string(tmp(1236).t.fqJZ11);
      }
      const intl7 = tmp(1236).intl;
      stringResult1 = intl7.string(tmp(1236).t.v9oC0p);
    }
  }
};