// === Module 6740: OrbCheckoutUtils ===

// Module 6740 (OrbCheckoutUtils)
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import util from "util" /* 1113 */;
import BillingError from "BillingError" /* 6230 */;
import OrderConstraintUtils from "OrderConstraintUtils" /* 6741 */;
import OrderActionCreators from "OrderActionCreators" /* 6743 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

({ CurrencyCodes: c2, MarketingURLs: c3, PriceSetAssignmentPurchaseTypes: closure_4 } = Constants);
const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutUtils.tsx");

export function getOrbPriceFromPrices(prices, isPremiumResult) {
  if (isPremiumResult) {
    if (null != prices[React4.PREMIUM_TIER_2]) {
      let tmp2 = prices[React4.PREMIUM_TIER_2];
    }
    prices = undefined;
    if (tmp2 != null) {
      const countryPrices = tmp2.countryPrices;
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
  tmp2 = prices[React4.DEFAULT];
}
export function getOrbCheckoutDisclaimerMessage(skuId) {
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
  items = [intl.format(util.t["5qdUrO"], obj), " ", stringResult];
  return items;
}
export function getOrbConstraintMessage(result) {
  const intl = util.intl;
  return OrderConstraintUtils.getOrderConstraintMessage(result, intl.string(util.t.fqJZ11));
}
export function resolveOrbCheckoutErrorMessage(orbRedemptionError, result) {
  if (null == orbRedemptionError) {
    return null;
  } else if (orbRedemptionError.code === BillingError.ErrorCodes.BILLING_PURCHASE_BLOCKED_BY_RESTRICTION) {
    let message = orbRedemptionError.message;
  } else {
    if (orbRedemptionError instanceof OrderActionCreators.OrderSigningFailedWithConstraintsError) {
      if (null != result) {
        const intl6 = util.intl;
        message = OrderConstraintUtils.getOrderConstraintMessage(result, intl6.string(util.t.fqJZ11));
        const tmpResult = OrderConstraintUtils;
      }
    }
    if (orbRedemptionError instanceof OrderActionCreators.OrderProcessingPendingError) {
      const intl5 = util.intl;
      message = intl5.string(util.t["2BmwgV"]);
    } else if (orbRedemptionError.code === BillingError.ErrorCodes.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE) {
      const intl4 = util.intl;
      message = intl4.string(util.t.keFvXM);
    } else if (orbRedemptionError.code === BillingError.ErrorCodes.ALREADY_PURCHASED) {
      const intl3 = util.intl;
      message = intl3.string(util.t.m371Mx);
    } else if (orbRedemptionError.code === BillingError.ErrorCodes.BILLING_ORDER_NOT_SIGNABLE) {
      const intl2 = util.intl;
      message = intl2.string(util.t.ZHgEG7);
    } else {
      const intl = util.intl;
      message = intl.string(util.t.fqJZ11);
    }
  }
}