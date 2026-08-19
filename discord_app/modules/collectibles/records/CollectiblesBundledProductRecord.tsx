// discord_app/modules/collectibles/records/CollectiblesBundledProductRecord.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getPricesFromServerDefault from "../../skus/utils/getPricesFromServer.tsx";

const prototype = function CollectiblesBundledProductRecord(arg0) {
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
const result = obj132.fileFinishedImporting("modules/collectibles/records/CollectiblesBundledProductRecord.tsx");

export default prototype;