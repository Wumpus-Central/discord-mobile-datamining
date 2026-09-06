// discord_app/modules/collectibles/records/ProfileFrameRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord.tsx";

require = fn;
const prototype = function ProfileFrameRecord(arg0) {
  const tmp2 = new prototype(arg0, new.target, new.target, tmp);
  tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  ({
    label: tmp2.label,
    layers: tmp2.layers,
    innerWidth: tmp2.innerWidth,
    overflowTop: tmp2.overflowTop,
    overflowBottom: tmp2.overflowBottom,
    overflowHorizontal: tmp2.overflowHorizontal,
  } = arg0);
  return tmp2;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(arg0) {
  ({ inner_width, overflow_top, overflow_bottom, overflow_horizontal } = arg0);
  const merged = Object.assign({ inner_width: 0, overflow_top: 0, overflow_bottom: 0, overflow_horizontal: 0 });
  const merged1 = Object.assign(arg0, merged);
  const obj = {};
  let tmp3 = prototype;
  const merged2 = Object.assign(super.fromServer(merged1));
  const merged3 = Object.assign(merged1);
  obj.innerWidth = inner_width;
  obj.overflowTop = overflow_top;
  obj.overflowBottom = overflow_bottom;
  obj.overflowHorizontal = overflow_horizontal;
  if (typeof prototype === "function") {
    tmp3 = new tmp3(obj, merged1, merged, this);
    tmp3.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
    ({
      label: tmp9.label,
      layers: tmp9.layers,
      innerWidth: tmp9.innerWidth,
      overflowTop: tmp9.overflowTop,
      overflowBottom: tmp9.overflowBottom,
      overflowHorizontal: tmp9.overflowHorizontal,
    } = obj);
    return tmp3;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/ProfileFrameRecord.tsx");

export default prototype;
export const isProfileFrameRecord = function isProfileFrameRecord(first1) {
  return first1 instanceof prototype;
};
