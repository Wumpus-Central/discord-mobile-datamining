// === Module 8433: BaseWishlistItemRecord ===

// Module 8433 (BaseWishlistItemRecord)
import Record from "Record" /* 1392 */;
import SKURecord from "SKURecord" /* 5696 */;
import size from "module_2" /* 2 */;

let sku;

class BaseWishlistItemRecord extends Record {
  constructor(arg0) {
    const tmp = new BaseWishlistItemRecord(new.target, this);
    ({ sku_id: tmp.skuId, sku_product_line: tmp.skuProductLine, sku_name: tmp.skuName, is_owned: tmp.isOwned, gifter_user_id: tmp.gifterUserId, sku: tmp.sku, added_at: tmp.addedAt } = arg0);
    return tmp;
  }
  static fromServer(sku) {
    let fromServer;
    let gifter_user_id;
    let is_owned;
    let sku_id;
    let sku_name;
    let sku_product_line;
    sku = sku.sku;
    ({ sku_id, sku_product_line, sku_name, is_owned, gifter_user_id } = sku);
    const merged = Object.assign({ sku_id: 0, sku_product_line: 0, sku_name: 0, is_owned: 0, gifter_user_id: 0, sku: 0 });
    const merged1 = Object.assign(sku, merged);
    const obj = { sku_id, sku_product_line, sku_name, is_owned, gifter_user_id, sku: fromServer };
    const merged2 = Object.assign(merged1);
    fromServer = undefined;
    if (null != sku) {
      fromServer = SKURecord.createFromServer(sku);
    }
    if (typeof BaseWishlistItemRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp8 = new BaseWishlistItemRecord(obj, merged1, merged);
      ({ sku_id: tmp8.skuId, sku_product_line: tmp8.skuProductLine, sku_name: tmp8.skuName, is_owned: tmp8.isOwned, gifter_user_id: tmp8.gifterUserId, sku: tmp8.sku, added_at: tmp8.addedAt } = obj);
      return tmp8;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/BaseWishlistItemRecord.tsx");

export default BaseWishlistItemRecord;