// === Module 7787: AvatarDecorationRecord ===

// Module 7787 (AvatarDecorationRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1973 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1972 */;

require = fn;
const prototype = function AvatarDecorationRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  tmp2.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
  ({ asset: tmp2.asset, label: tmp2.label } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  const merged = Object.assign(super.fromServer(arg0));
  const merged1 = Object.assign(arg0);
  if (typeof prototype === "function") {
    const tmp2 = new prototype(obj, arg0, this, merged);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
    ({ asset: tmp7.asset, label: tmp7.label } = obj);
    return tmp2;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/AvatarDecorationRecord.tsx");

export default prototype;
export const isAvatarDecorationRecord = function isAvatarDecorationRecord(first1) {
  return first1 instanceof prototype;
};