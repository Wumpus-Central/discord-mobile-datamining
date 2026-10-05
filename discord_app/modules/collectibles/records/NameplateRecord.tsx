// === Module 1978: NameplateRecord ===

// Module 1978 (NameplateRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import BaseCollectiblesItemRecord from "BaseCollectiblesItemRecord" /* 1979 */;
import size from "module_2" /* 2 */;

class NameplateRecord extends BaseCollectiblesItemRecord {
  constructor(arg0) {
    const tmp2 = new NameplateRecord(arg0, new.target, this, tmp);
    tmp2.type = CollectiblesItemType.CollectiblesItemType.NAMEPLATE;
    ({ asset: tmp2.asset, label: tmp2.label, palette: tmp2.palette } = arg0);
    return tmp2;
  }
  static fromServer(arg0) {
    const obj = {};
    const merged = Object.assign(super.fromServer(arg0));
    const merged1 = Object.assign(arg0);
    if (typeof NameplateRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp2 = new NameplateRecord(obj, arg0, this, merged);
      tmp2.type = CollectiblesItemType.CollectiblesItemType.NAMEPLATE;
      ({ asset: tmp5.asset, label: tmp5.label, palette: tmp5.palette } = obj);
      return tmp2;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/NameplateRecord.tsx");

export default NameplateRecord;
export const isNameplateRecord = function isNameplateRecord(first1) {
  return first1 instanceof NameplateRecord;
};