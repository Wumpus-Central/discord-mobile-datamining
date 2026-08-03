// === Module 5806: fromServer ===

// Module 5806 (fromServer)
let prototype;
prototype = function CollectiblesBundledProductRecord(arg0) {
  ({ prices: tmp.prices, type: tmp.type, premiumType: tmp.premiumType, name: tmp.name, skuId: tmp.skuId, summary: tmp.summary } = arg0);
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  let name;
  let premium_type;
  let prices;
  let sku_id;
  let summary;
  let type;
  ({ prices, type, premium_type, name, sku_id, summary } = arg0);
  if (typeof prototype !== "fileFinishedImporting") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.prices = importDefault(4234)(prices);
  obj.type = type;
  obj.premiumType = premium_type;
  obj.name = name;
  obj.skuId = sku_id;
  obj.summary = summary;
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/CollectiblesBundledProductRecord.tsx");

export default prototype;