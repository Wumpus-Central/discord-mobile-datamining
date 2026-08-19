// === Module 5343: fromServer ===

// Module 5343 (fromServer)
import obj132 from "obj132" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 5339 */;

const prototype = function FeedBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp.rankedSkuIds, sorted_sku_ids: tmp.sortedSkuIds } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp2.rankedSkuIds, sorted_sku_ids: tmp2.sortedSkuIds } = arg0);
  return obj;
};
const result = obj132.fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = prototype;