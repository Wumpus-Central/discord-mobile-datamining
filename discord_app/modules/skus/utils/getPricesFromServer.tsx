// === Module 5513: getPricesFromServer ===

// Module 5513 (getPricesFromServer)
import SubscriptionPlanRecord from "SubscriptionPlanRecord" /* 4219 */;
import size from "module_2" /* 2 */;

const getPriceFromServer = SubscriptionPlanRecord.getPriceFromServer;
const result = size.fileFinishedImporting("modules/skus/utils/getPricesFromServer.tsx");

export default function getPricesFromServer(arg0) {
  if (null == arg0) {
    let reduced = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((acc, item) => {
      [tmp, tmp2] = item;
      let obj = { countryPrices: null, paymentSourcePrices: null };
      obj = { countryCode: tmp2.country_prices.country_code, prices: null };
      const prices = tmp2.country_prices.prices;
      obj.prices = prices.map((item) => closure_1_0(item, true));
      obj.countryPrices = obj;
      obj.paymentSourcePrices = {};
      acc[tmp] = obj;
      return acc;
    }, {});
  }
  return reduced;
};