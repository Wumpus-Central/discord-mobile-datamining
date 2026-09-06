// === Module 7545: CollectiblesBundledProductRecord ===

// Module 7545 (CollectiblesBundledProductRecord)
import size from "module_2" /* 2 */;

const prototype = function CollectiblesBundledProductRecord(arg0) {
  ({ prices: tmp.prices, type: tmp.type, premiumType: tmp.premiumType, name: tmp.name, skuId: tmp.skuId, summary: tmp.summary } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  ({ prices, type, premium_type, name, sku_id, summary } = arg0);
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.prices = tmp2;
    obj.type = type;
    obj.premiumType = premium_type;
    obj.name = name;
    obj.skuId = sku_id;
    obj.summary = summary;
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp = prototype;
};
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesBundledProductRecord.tsx");

export default prototype;