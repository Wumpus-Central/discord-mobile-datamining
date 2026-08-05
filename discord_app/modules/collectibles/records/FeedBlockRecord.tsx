// discord_app/modules/collectibles/records/FeedBlockRecord.tsx
let prototype;
prototype = function FeedBlockRecord(arg0) {
  const obj = Object.create(new.target.prototype);
  obj.type = require("../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx") /* ShopBlockType */.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp.rankedSkuIds, sorted_sku_ids: tmp.sortedSkuIds } = arg0);
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(arg0) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = require("../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx") /* ShopBlockType */.ShopBlockType.FEED;
  ({ ranked_sku_ids: tmp2.rankedSkuIds, sorted_sku_ids: tmp2.sortedSkuIds } = arg0);
  return obj;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/FeedBlockRecord.tsx");

export const FeedBlockRecord = prototype;