// discord_app/modules/slayer_storefront/SlayerStorefrontPriceUtils.tsx
import Constants from "../../Constants.tsx";
import Constants2 from "../../../discord_common/js/shared/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getPrice(price, arg1) {
  let countryPrices;
  if (null != price.prices[arg1]) {
    let first;
    if (price.prices[arg1].countryPrices.prices.length > 0) {
      countryPrices = price.prices[arg1].countryPrices;
    }
    if (null != countryPrices) {
      first = countryPrices.prices[0];
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
  let countryPrices;
  if (null != arg0.prices[arg1]) {
    if (arg0.prices[arg1].countryPrices.prices.length > 0) {
      countryPrices = arg0.prices[arg1].countryPrices;
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
  return null != price.price || null != price.prices[constants.DEFAULT];
};
export const isGiftPriceDifferent = function isGiftPriceDifferent(arg0) {
  let tmp3 = getPrice(arg0, constants.DEFAULT);
  if (tmp3 == null) {
    tmp3 = { amount: 0, currency: CurrencyCodes.USD };
    const obj = { amount: 0, currency: CurrencyCodes.USD };
  }
  let tmpResult = getPrice(arg0, constants.GIFT);
  if (tmpResult == null) {
    tmpResult = { amount: 0, currency: CurrencyCodes.USD };
    const obj2 = { amount: 0, currency: CurrencyCodes.USD };
  }
  return tmp3.currency !== tmpResult.currency || tmp3.amount !== tmpResult.amount;
};
