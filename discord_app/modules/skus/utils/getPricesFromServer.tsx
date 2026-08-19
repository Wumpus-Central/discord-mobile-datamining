// === Module 4517: getPricesFromServer ===

// Module 4517 (getPricesFromServer)
import obj132 from "obj132" /* 2 */;
import createFromServer from "createFromServer" /* 4040 */;

const getPriceFromServer = createFromServer.getPriceFromServer;
const result = obj132.fileFinishedImporting("modules/skus/utils/getPricesFromServer.tsx");

export default function getPricesFromServer(arg0) {
  if (null == arg0) {
    let reduced = {};
  } else {
    const _Object = Object;
    const entries = Object.entries(arg0);
    reduced = entries.reduce((acc, item, index) => {
      [tmp, tmp2] = item;
      const obj = { countryCode: tmp2.country_prices.country_code, prices: prices.map((item, index) => callback(item, true)) };
      prices = tmp2.country_prices.prices;
      obj[0] = obj;
      obj[1] = {};
      acc[tmp] = obj;
      return acc;
    }, {});
  }
  return reduced;
};