// === Module 1887: NameplateRecord ===

// Module 1887 (NameplateRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1888 */;

require = fn;
const prototype = function NameplateRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  tmp2.type = CollectiblesItemType.CollectiblesItemType.NAMEPLATE;
  ({ asset: tmp2.asset, label: tmp2.label, palette: tmp2.palette } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  let tmp = prototype;
  const merged = Object.assign(super.fromServer(arg0));
  const merged1 = Object.assign(arg0);
  if (typeof prototype === "function") {
    tmp = new tmp(obj, arg0, this, merged);
    tmp.type = CollectiblesItemType.CollectiblesItemType.NAMEPLATE;
    ({ asset: tmp7.asset, label: tmp7.label, palette: tmp7.palette } = obj);
    return tmp;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/NameplateRecord.tsx");

export default prototype;
export const isNameplateRecord = function isNameplateRecord(first1) {
  return first1 instanceof prototype;
};