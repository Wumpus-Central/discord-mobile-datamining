// === Module 5309: fromServer ===

// Module 5309 (fromServer)
import fromServerDefault from "fromServer" /* 1948 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;

require = fn;
fromServerDefault;
const prototype = function UnknownCollectiblesItemRecord(arg0) {
  tmp = new tmp(arg0, new.target, tmp, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp.type = CollectiblesItemType.CollectiblesItemType.NONE;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  const obj = {};
  let tmp2 = prototype;
  const fromServerResult = super.fromServer(arg0);
  const merged = Object.assign(fromServerResult);
  obj.type = CollectiblesItemType.CollectiblesItemType.NONE;
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  tmp2 = new tmp2(obj, fromServerResult, this, prototype, obj);
  // ThrowIfThisInitialized (0x7c)
  tmp2.type = CollectiblesItemType.CollectiblesItemType.NONE;
  return tmp2;
};
const result = require("obj132").fileFinishedImporting("modules/collectibles/records/UnknownCollectiblesItemRecord.tsx");

export default prototype;
export const isUnknownCollectiblesItemRecord = function isUnknownCollectiblesItemRecord(arg0) {
  return arg0 instanceof prototype;
};