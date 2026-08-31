// === Module 7258: fromServer ===

// Module 7258 (fromServer)
import set from "set" /* 2 */;
import getPricesFromServerDefault from "getPricesFromServer" /* 4493 */;

let prototype;
prototype = function CollectiblesBundledProductRecord(arg0) {
  ({ prices: tmp.prices, type: tmp.type, premiumType: tmp.premiumType, name: tmp.name, skuId: tmp.skuId, summary: tmp.summary } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  ({ prices, type, premium_type, name, sku_id, summary } = arg0);
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.prices = getPricesFromServerDefault(prices);
  obj.type = type;
  obj.premiumType = premium_type;
  obj.name = name;
  obj.skuId = sku_id;
  obj.summary = summary;
  return obj;
};
const result = set.fileFinishedImporting("modules/collectibles/records/CollectiblesBundledProductRecord.tsx");

export default prototype;