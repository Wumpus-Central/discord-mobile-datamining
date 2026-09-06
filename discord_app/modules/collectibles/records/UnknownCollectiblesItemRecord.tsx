// discord_app/modules/collectibles/records/UnknownCollectiblesItemRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord.tsx";

require = fn;
const prototype = function UnknownCollectiblesItemRecord(arg0) {
  tmp = new tmp(arg0, new.target, tmp, new.target);
  tmp.type = CollectiblesItemType.CollectiblesItemType.NONE;
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  let tmp2 = prototype;
  const fromServerResult = super.fromServer(arg0);
  const merged = Object.assign(fromServerResult);
  obj.type = CollectiblesItemType.CollectiblesItemType.NONE;
  if (typeof prototype === "function") {
    tmp2 = new tmp2(obj, fromServerResult, this, prototype, obj);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.NONE;
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/UnknownCollectiblesItemRecord.tsx");

export default prototype;
export const isUnknownCollectiblesItemRecord = function isUnknownCollectiblesItemRecord(arg0) {
  return arg0 instanceof prototype;
};
