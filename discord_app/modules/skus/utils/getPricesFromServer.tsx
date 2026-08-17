// discord_app/modules/skus/utils/getPricesFromServer.tsx
import set from "set" /* 2 */;
import createFromServer from "createFromServer" /* 4040 */;

const getPriceFromServer = createFromServer.getPriceFromServer;
const result = set.fileFinishedImporting("modules/skus/utils/getPricesFromServer.tsx");

export default function getPricesFromServer(arg0) {
  if (null == arg0) {
    let reduced = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((arg0, arg1) => {
      [tmp, tmp2] = arg1;
      let obj = { countryPrices: null, paymentSourcePrices: null };
      obj = { countryCode: tmp2.country_prices.country_code, prices: prices.map((arg0) => callback(arg0, true)) };
      prices = tmp2.country_prices.prices;
      obj[0] = obj;
      obj[1] = {};
      arg0[tmp] = obj;
      return arg0;
    }, {});
  }
  return reduced;
};