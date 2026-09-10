// === Module 7625: FeaturedBlockRecord ===

// Module 7625 (FeaturedBlockRecord)
import ShopBlockType from "ShopBlockType" /* 7624 */;
import FeaturedCategorySubblockRecord from "FeaturedCategorySubblockRecord" /* 7626 */;
import FeaturedSubblockType from "FeaturedSubblockType" /* 7627 */;
import size from "module_2" /* 2 */;

let closure_2 = FeaturedCategorySubblockRecord.FeaturedCategorySubblockRecord;
const prototype = function FeaturedBlockRecord(subblocks) {
  const obj = Object.create(new.target.prototype);
  obj.type = ShopBlockType.ShopBlockType.FEATURED;
  subblocks = subblocks.subblocks;
  obj.subblocks = subblocks.map((type) => {
    if (type.type === FeaturedSubblockType.FeaturedSubblockType.CATEGORY) {
      let fromServerResult = closure_1_2.fromServer(type);
    } else {
      type = type.type;
      fromServerResult = type;
    }
    return fromServerResult;
  });
  return obj;
}.prototype;
prototype["fromServer"] = function fromServer(subblocks) {
  if (typeof prototype === "function") {
    const obj = Object.create(tmp.prototype);
    obj.type = ShopBlockType.ShopBlockType.FEATURED;
    subblocks = subblocks.subblocks;
    obj.subblocks = subblocks.map((type) => {
      if (type.type === FeaturedSubblockType.FeaturedSubblockType.CATEGORY) {
        let fromServerResult = closure_1_2.fromServer(type);
      } else {
        type = type.type;
        fromServerResult = type;
      }
      return fromServerResult;
    });
    return obj;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const result = size.fileFinishedImporting("modules/collectibles/records/FeaturedBlockRecord.tsx");

export const FeaturedBlockRecord = prototype;