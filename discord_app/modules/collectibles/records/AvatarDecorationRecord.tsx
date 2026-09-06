// discord_app/modules/collectibles/records/AvatarDecorationRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord.tsx";

require = fn;
const prototype = function AvatarDecorationRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  tmp2.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
  ({ asset: tmp2.asset, label: tmp2.label } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  let tmp = prototype;
  const merged = Object.assign(super.fromServer(arg0));
  const merged1 = Object.assign(arg0);
  if (typeof prototype === "function") {
    tmp = new tmp(obj, arg0, this, merged);
    tmp.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
    ({ asset: tmp7.asset, label: tmp7.label } = obj);
    return tmp;
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
