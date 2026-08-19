// === Module 5340: fromServer ===

// Module 5340 (fromServer)
import obj132 from "obj132" /* 2 */;
import ShopBlockType from "ShopBlockType" /* 5339 */;
import fromServer from "fromServer" /* 5341 */;

let closure_2 = fromServer.FeaturedCategorySubblockRecord;
const prototype = function FeaturedBlockRecord(subblocks) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEATURED;
  subblocks = subblocks.subblocks;
  obj.subblocks = subblocks.map((item, index) => {
    if (item.type === callback(table[2]).FeaturedSubblockType.CATEGORY) {
      let fromServerResult = closure_2.fromServer(item);
    } else {
      const type = item.type;
      fromServerResult = item;
    }
    return fromServerResult;
  });
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(subblocks) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const obj = Object.create(prototype.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEATURED;
  subblocks = subblocks.subblocks;
  obj.subblocks = subblocks.map((item, index) => {
    if (item.type === callback(table[2]).FeaturedSubblockType.CATEGORY) {
      let fromServerResult = closure_2.fromServer(item);
    } else {
      const type = item.type;
      fromServerResult = item;
    }
    return fromServerResult;
  });
  return obj;
};
const result = obj132.fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export const FeaturedBlockRecord = prototype;