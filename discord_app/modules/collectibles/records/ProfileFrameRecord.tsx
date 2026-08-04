import "fromServer";

const require = arg1;
let prototype;
prototype = function ProfileFrameRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  // ThrowIfThisInitialized (0x7c)
  tmp2.type = require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  ({ label: tmp2.label, layers: tmp2.layers, innerWidth: tmp2.innerWidth, overflowTop: tmp2.overflowTop, overflowBottom: tmp2.overflowBottom, overflowHorizontal: tmp2.overflowHorizontal } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  let inner_width;
  let overflow_bottom;
  let overflow_horizontal;
  let overflow_top;
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
  tmp3.type = require(1901) /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  ({ label: tmp6.label, layers: tmp6.layers, innerWidth: tmp6.innerWidth, overflowTop: tmp6.overflowTop, overflowBottom: tmp6.overflowBottom, overflowHorizontal: tmp6.overflowHorizontal } = obj);
  return tmp3;
};
const result = require("set").fileFinishedImporting("modules/collectibles/records/ProfileFrameRecord.tsx");

export default prototype;
export const isProfileFrameRecord = function isProfileFrameRecord(item) {
  return item instanceof prototype;
};