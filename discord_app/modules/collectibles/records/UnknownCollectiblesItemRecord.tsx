// discord_app/modules/collectibles/records/UnknownCollectiblesItemRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class UnknownCollectiblesItemRecord extends BaseCollectiblesItemRecord {
  constructor(arg0) {
    const tmp2 = new tmp(arg0, new.target, tmp, this);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.NONE;
    return tmp2;
  }
  static fromServer(arg0) {
    const obj = { type: CollectiblesItemType.CollectiblesItemType.NONE };
    const fromServerResult = super.fromServer(arg0);
    const merged = Object.assign(fromServerResult);
    if (typeof UnknownCollectiblesItemRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp22 = new UnknownCollectiblesItemRecord(obj, fromServerResult, this, UnknownCollectiblesItemRecord, obj);
      tmp22.type = CollectiblesItemType.CollectiblesItemType.NONE;
      return tmp22;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/UnknownCollectiblesItemRecord.tsx");

export default UnknownCollectiblesItemRecord;
export const isUnknownCollectiblesItemRecord = function isUnknownCollectiblesItemRecord(arg0) {
  return arg0 instanceof UnknownCollectiblesItemRecord;
};
