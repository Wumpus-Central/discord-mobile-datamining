// === Module 5308: fromServer ===

// Module 5308 (fromServer)
import fromServerDefault from "fromServer" /* 1948 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;

require = fn;
fromServerDefault;
const prototype = function ProfileFrameRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  ({ label: tmp2.label, layers: tmp2.layers, innerWidth: tmp2.innerWidth, overflowTop: tmp2.overflowTop, overflowBottom: tmp2.overflowBottom, overflowHorizontal: tmp2.overflowHorizontal } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  ({ inner_width, overflow_top, overflow_bottom, overflow_horizontal } = arg0);
  let obj = Object.create(null);
  const merged = Object.assign(arg0, obj);
  obj = {};
  let tmp3 = prototype;
  const merged1 = Object.assign(super.fromServer(merged));
  const merged2 = Object.assign(merged);
  obj.innerWidth = inner_width;
  obj.overflowTop = overflow_top;
  obj.overflowBottom = overflow_bottom;
  obj.overflowHorizontal = overflow_horizontal;
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  tmp3 = new tmp3(obj, merged, obj, this);
  // ThrowIfThisInitialized (0x7c)
  tmp3.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  ({ label: tmp6.label, layers: tmp6.layers, innerWidth: tmp6.innerWidth, overflowTop: tmp6.overflowTop, overflowBottom: tmp6.overflowBottom, overflowHorizontal: tmp6.overflowHorizontal } = obj);
  return tmp3;
};
const result = require("obj132").fileFinishedImporting("modules/collectibles/records/ProfileFrameRecord.tsx");

export default prototype;
export const isProfileFrameRecord = function isProfileFrameRecord(item) {
  return item instanceof prototype;
};