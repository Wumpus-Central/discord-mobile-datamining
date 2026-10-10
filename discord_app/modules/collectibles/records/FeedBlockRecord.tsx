// === Module 7298: FeedBlockRecord ===

// Module 7298 (FeedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7294 */;
import size from "module_2" /* 2 */;

const prototype = function FeedBlockRecord(length) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp.rankedSkuIds, sorted_sku_ids: tmp.sortedSkuIds } = length);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = ShopBlockType.ShopBlockType.FEED;
    ({ ranked_sku_ids: tmp3.rankedSkuIds, sorted_sku_ids: tmp3.sortedSkuIds } = arg0);
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = prototype;