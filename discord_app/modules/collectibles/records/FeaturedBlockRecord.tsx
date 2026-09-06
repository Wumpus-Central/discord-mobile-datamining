// discord_app/modules/collectibles/records/FeaturedBlockRecord.tsx
import ShopBlockType from "../../../../discord_common/js/shared/shared-constants/ShopBlockType.tsx";
import FeaturedCategorySubblockRecord from "FeaturedCategorySubblockRecord.tsx";
import FeaturedSubblockType from "../../../../discord_common/js/shared/shared-constants/FeaturedSubblockType.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
