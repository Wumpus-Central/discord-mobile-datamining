// === Module 7241: OrbCheckoutUtils ===

// Module 7241 (OrbCheckoutUtils)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1076 */;
import util from "util" /* 1114 */;
import BillingError from "BillingError" /* 4240 */;
import OrderConstants from "OrderConstants" /* 7242 */;
import OrderActionCreators from "OrderActionCreators" /* 7243 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ CurrencyCodes: c2, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: closure_4 } = Constants);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const ConstraintReasonCode = OrderConstants.ConstraintReasonCode;
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export const getOrbPriceFromPrices = function getOrbPriceFromPrices(prices, memo1) {
  if (memo1) {
    if (null != prices[React4.PREMIUM_TIER_2]) {
      let tmp2 = prices[React4.PREMIUM_TIER_2];
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
  tmp2 = prices[React4.DEFAULT];
};
export const getOrbCheckoutDisclaimerMessage = function getOrbCheckoutDisclaimerMessage(skuId) {
  const intl = util.intl;
  const obj = { buyButtonLabel: null, paidServiceTermURL: null, virtualGoodsURL: null };
  const intl2 = util.intl;
  obj.buyButtonLabel = intl2.string(util.t["zLch/S"]);
  ({ PAID_TERMS: obj.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj.virtualGoodsURL } = React3);
  const intl3 = util.intl;
  let stringResult = intl3.string(util.t["Sxed/G"]);
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.ORB_PROFILE_BADGE) {
    const intl5 = util.intl;
    stringResult = intl5.string(util.t.APcKRo);
  } else if (skuId === tmp5.FRACTIONAL_PREMIUM) {
    const intl4 = util.intl;
    stringResult = intl4.string(util.t.FhJ74j);
  }
  const items = [intl.format(util.t["5qdUrO"], obj), " ", stringResult];
  return items;
};
export const resolveOrbCheckoutErrorMessage = function resolveOrbCheckoutErrorMessage(code, arg1) {
  if (null == code) {
    return null;
  } else {
    let keFvXM = dependencyMap;
    let OrderSigningFailedWithConstraintsError = OrderActionCreators.OrderSigningFailedWithConstraintsError;
    if (!(code instanceof OrderSigningFailedWithConstraintsError)) {
      if (code instanceof OrderActionCreators.OrderProcessingPendingError) {
        const intl5 = util.intl;
        let stringResult = intl5.string(util.t["2BmwgV"]);
      } else if (code.code === BillingError.ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
        const intl4 = util.intl;
        stringResult = intl4.string(util.t.keFvXM);
      } else if (code.code === BillingError.ErrorCodes.ALREADY_PURCHASED) {
        const intl3 = util.intl;
        stringResult = intl3.string(util.t.m371Mx);
      } else if (code.code === BillingError.ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
        const intl2 = util.intl;
        stringResult = intl2.string(util.t.ZHgEG7);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.fqJZ11);
      }
    } else {
      OrderSigningFailedWithConstraintsError = arg1;
    }
    if (ConstraintReasonCode.INSUFFICIENT_ORB_BALANCE === OrderSigningFailedWithConstraintsError) {
      const intl9 = util.intl;
      keFvXM = util.t.keFvXM;
      let stringResult1 = intl9.string(keFvXM);
    } else {
      if (ConstraintReasonCode.SKU_ALREADY_OWNED === OrderSigningFailedWithConstraintsError) {
        const intl8 = util.intl;
        stringResult1 = intl8.string(util.t.m371Mx);
      } else if (ConstraintReasonCode.BUNDLE_PARTIALLY_OWNED !== OrderSigningFailedWithConstraintsError) {
        const intl6 = util.intl;
        stringResult1 = intl6.string(util.t.fqJZ11);
      }
      const intl7 = util.intl;
      stringResult1 = intl7.string(util.t.v9oC0p);
    }
  }
};