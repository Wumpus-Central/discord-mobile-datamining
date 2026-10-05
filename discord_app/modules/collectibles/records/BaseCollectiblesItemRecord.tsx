// === Module 1979: BaseCollectiblesItemRecord ===

// Module 1979 (BaseCollectiblesItemRecord)
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

let sku_id;

class BaseCollectiblesItemRecord extends Record {
  constructor(skuId) {
    const tmp = new BaseCollectiblesItemRecord(new.target);
    tmp.skuId = skuId.skuId;
    return tmp;
  }
  static fromServer(sku_id) {
    sku_id = sku_id.sku_id;
    const merged = Object.assign({ sku_id: 0 });
    const merged1 = Object.assign(sku_id, merged);
    const obj = { skuId: sku_id };
    const merged2 = Object.assign(merged1);
    if (typeof BaseCollectiblesItemRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new BaseCollectiblesItemRecord(obj, merged1, merged);
      tmp5.skuId = obj.skuId;
      return tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/collectibles/records/BaseCollectiblesItemRecord.tsx");

export default BaseCollectiblesItemRecord;