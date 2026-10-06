// === Module 7073: ProfileFrameRecord ===

// Module 7073 (ProfileFrameRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1979 */;
import size from "module_2" /* 2 */;

class ProfileFrameRecord extends BaseCollectiblesItemRecord {
  constructor(arg0) {
    const tmp2 = new ProfileFrameRecord(arg0, new.target, this, tmp);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
    ({ label: tmp2.label, layers: tmp2.layers, innerWidth: tmp2.innerWidth, overflowTop: tmp2.overflowTop, overflowBottom: tmp2.overflowBottom, overflowHorizontal: tmp2.overflowHorizontal } = arg0);
    return tmp2;
  }
  static fromServer(arg0) {
    let inner_width;
    let overflow_bottom;
    let overflow_horizontal;
    let overflow_top;
    ({ inner_width, overflow_top, overflow_bottom, overflow_horizontal } = arg0);
    const merged = Object.assign({ inner_width: 0, overflow_top: 0, overflow_bottom: 0, overflow_horizontal: 0 });
    const merged1 = Object.assign(arg0, merged);
    const obj = { innerWidth: inner_width, overflowTop: overflow_top, overflowBottom: overflow_bottom, overflowHorizontal: overflow_horizontal };
    const merged2 = Object.assign(super.fromServer(merged1));
    const merged3 = Object.assign(merged1);
    if (typeof ProfileFrameRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp32 = new ProfileFrameRecord(obj, merged1, merged, this);
      tmp32.type = CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
      ({ label: tmp7.label, layers: tmp7.layers, innerWidth: tmp7.innerWidth, overflowTop: tmp7.overflowTop, overflowBottom: tmp7.overflowBottom, overflowHorizontal: tmp7.overflowHorizontal } = obj);
      return tmp32;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/ProfileFrameRecord.tsx");

export default ProfileFrameRecord;
export const isProfileFrameRecord = function isProfileFrameRecord(first1) {
  return first1 instanceof ProfileFrameRecord;
};