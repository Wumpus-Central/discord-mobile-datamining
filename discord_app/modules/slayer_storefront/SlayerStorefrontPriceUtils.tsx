// === Module 6749: SlayerStorefrontPriceUtils ===

// Module 6749 (SlayerStorefrontPriceUtils)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

function getPrice(price, arg1) {
  if (null != price.prices[arg1]) {
    if (price.prices[arg1].countryPrices.prices.length > 0) {
      let countryPrices = price.prices[arg1].countryPrices;
    }
    if (null != countryPrices) {
      let first = countryPrices.prices[0];
    } else {
      first = null;
      if (null != price.price) {
        first = price.price;
      }
    }
    return first;
  }
  countryPrices = null;
  if (null != price.prices[constants.DEFAULT]) {
    countryPrices = null;
    if (price.prices[constants.DEFAULT].countryPrices.prices.length > 0) {
      countryPrices = price.prices[constants.DEFAULT].countryPrices;
    }
  }
}
const constants = Constants.PriceSetAssignmentPurchaseTypes;
const CurrencyCodes = Constants2.CurrencyCodes;
const result = size.fileFinishedImporting("modules/slayer_storefront/SlayerStorefrontPriceUtils.tsx");

export const getCountryPrices = function getCountryPrices(arg0, arg1) {
  if (null != arg0.prices[arg1]) {
    if (arg0.prices[arg1].countryPrices.prices.length > 0) {
      let countryPrices = arg0.prices[arg1].countryPrices;
    }
    return countryPrices;
  }
  countryPrices = null;
  if (null != arg0.prices[constants.DEFAULT]) {
    countryPrices = null;
    if (arg0.prices[constants.DEFAULT].countryPrices.prices.length > 0) {
      countryPrices = arg0.prices[constants.DEFAULT].countryPrices;
    }
  }
};
export { getPrice };
export const hasPrice = function hasPrice(price) {
  let tmp = null != price.price;
  if (!tmp) {
    tmp = null != price.prices[constants.DEFAULT];
  }
  return tmp;
};
export const isGiftPriceDifferent = function isGiftPriceDifferent(arg0) {
  let tmp3 = getPrice(arg0, constants.DEFAULT);
  if (tmp3 == null) {
    const obj = { amount: 0, currency: CurrencyCodes.USD };
    tmp3 = obj;
  }
  let tmpResult = getPrice(arg0, constants.GIFT);
  if (tmpResult == null) {
    const obj2 = { amount: 0, currency: CurrencyCodes.USD };
    tmpResult = obj2;
  }
  return tmp3.currency !== tmpResult.currency || tmp3.amount !== tmpResult.amount;
};