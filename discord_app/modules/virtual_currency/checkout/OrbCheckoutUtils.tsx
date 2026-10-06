// === Module 6753: OrbCheckoutUtils ===

// Module 6753 (OrbCheckoutUtils)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import intl10 from "intl" /* 1126 */;
import BillingError from "BillingError" /* 4556 */;
import OrderConstants from "OrderConstants" /* 6754 */;
import OrderActionCreators from "OrderActionCreators" /* 6755 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ CurrencyCodes: c2, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: closure_4 } = Constants);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export const getOrbPriceFromPrices = function getOrbPriceFromPrices(prices, cResult) {
  const tmp = cResult;
  if (tmp) {
    let tmp3;
    if (null != prices[React3.PREMIUM_TIER_2]) {
      tmp3 = prices[React3.PREMIUM_TIER_2];
    }
    prices = undefined;
    if (tmp3 != null) {
      const countryPrices = tmp3.countryPrices;
      if (countryPrices != null) {
        prices = countryPrices.prices;
      }
    }
    if (prices == null) {
      prices = [];
    }
    let found = prices.find((currency) => currency.currency === constants.DISCORD_ORB);
    if (found == null) {
      found = null;
    }
    return found;
  }
  tmp3 = prices[React3.DEFAULT];
};
export const getOrbCheckoutDisclaimerMessage = function getOrbCheckoutDisclaimerMessage(skuId) {
  let intl2;
  const intl = intl10.intl;
  const format = intl.format;
  const obj = { buyButtonLabel: intl2.string(intl10.t["zLch/S"]), paidServiceTermURL: null, virtualGoodsURL: null };
  const v5qdUrO = intl10.t["5qdUrO"];
  intl2 = intl10.intl;
  ({ PAID_TERMS: obj.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj.virtualGoodsURL } = _false);
  const formatResult = format(v5qdUrO, obj);
  const intl3 = intl10.intl;
  let stringResult = intl3.string(intl10.t["Sxed/G"]);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = intl10.intl;
    stringResult = intl5.string(intl10.t.APcKRo);
  } else if (skuId === tmp6.FRACTIONAL_PREMIUM) {
    const intl4 = intl10.intl;
    stringResult = intl4.string(intl10.t.FhJ74j);
  }
  const items = [formatResult, " ", stringResult];
  return items;
};
export const resolveOrbCheckoutErrorMessage = function resolveOrbCheckoutErrorMessage(code, arg1) {
  let tmp = null;
  if (null != code) {
    let stringResult1;
    if (code instanceof OrderActionCreators.OrderSigningFailedWithConstraintsError) {
      if (null != arg1) {
        let stringResult;
        if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === arg1) {
          const intl9 = intl10.intl;
          stringResult = intl9.string(intl10.t.keFvXM);
        } else if (ConstraintReasonCode.SKU_ALREADY_OWNED === arg1) {
          const intl8 = intl10.intl;
          stringResult = intl8.string(intl10.t.m371Mx);
        } else if (ConstraintReasonCode.BUNDLE_PARTIALLY_OWNED === arg1) {
          const intl7 = intl10.intl;
          stringResult = intl7.string(intl10.t.v9oC0p);
        } else {
          const intl6 = intl10.intl;
          stringResult = intl6.string(intl10.t.fqJZ11);
        }
        stringResult1 = stringResult;
      }
      tmp = stringResult1;
    }
    if (code instanceof OrderActionCreators.OrderProcessingPendingError) {
      const intl5 = intl10.intl;
      stringResult1 = intl5.string(intl10.t["2BmwgV"]);
    } else if (code.code === BillingError.ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
      const intl4 = intl10.intl;
      stringResult1 = intl4.string(intl10.t.keFvXM);
    } else if (code.code === BillingError.ErrorCodes.ALREADY_PURCHASED) {
      const intl3 = intl10.intl;
      stringResult1 = intl3.string(intl10.t.m371Mx);
    } else if (code.code === BillingError.ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
      const intl2 = intl10.intl;
      stringResult1 = intl2.string(intl10.t.ZHgEG7);
    } else {
      const intl = intl10.intl;
      stringResult1 = intl.string(intl10.t.fqJZ11);
    }
  }
  return tmp;
};