// === Module 7292: fromServer ===

// Module 7292 (fromServer)
import fromServerDefault from "fromServer" /* 1949 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;

require = arg1;
fromServerDefault;
let prototype;
prototype = function AvatarDecorationRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp2.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
  ({ asset: tmp2.asset, label: tmp2.label } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  let tmp = prototype;
  const merged = Object.assign(super.fromServer(arg0));
  const merged1 = Object.assign(arg0);
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  tmp = new tmp(obj, arg0, this, merged);
  // ThrowIfThisInitialized (0x7c)
  tmp.type = CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION;
  ({ asset: tmp4.asset, label: tmp4.label } = obj);
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/AvatarDecorationRecord.tsx");

export default prototype;
export const isAvatarDecorationRecord = function isAvatarDecorationRecord(first) {
  return first instanceof prototype;
};