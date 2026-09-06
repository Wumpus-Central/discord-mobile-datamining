// === Module 8779: BaseWishlistItemRecord ===

// Module 8779 (BaseWishlistItemRecord)
import Record from "Record" /* 1386 */;
import SKURecord from "SKURecord" /* 5511 */;

const prototype = function BaseWishlistItemRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  ({ sku_id: tmp.skuId, sku_product_line: tmp.skuProductLine, sku_name: tmp.skuName, is_owned: tmp.isOwned, gifter_user_id: tmp.gifterUserId, sku: tmp.sku, added_at: tmp.addedAt } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(sku) {
  sku = sku.sku;
  ({ sku_id, sku_product_line, sku_name, is_owned, gifter_user_id } = sku);
  const merged = Object.assign({ sku_id: 0, sku_product_line: 0, sku_name: 0, is_owned: 0, gifter_user_id: 0, sku: 0 });
  const merged1 = Object.assign(sku, merged);
  const obj = {};
  const merged2 = Object.assign(merged1);
  obj.sku_id = sku_id;
  obj.sku_product_line = sku_product_line;
  obj.sku_name = sku_name;
  obj.is_owned = is_owned;
  obj.gifter_user_id = gifter_user_id;
  let fromServer;
  if (null != sku) {
    fromServer = SKURecord.createFromServer(sku);
  }
  obj.sku = fromServer;
  if (typeof tmp3 === "function") {
    const tmp10 = new prototype(obj, merged1, merged);
    ({ sku_id: tmp10.skuId, sku_product_line: tmp10.skuProductLine, sku_name: tmp10.skuName, is_owned: tmp10.isOwned, gifter_user_id: tmp10.gifterUserId, sku: tmp10.sku, added_at: tmp10.addedAt } = obj);
    return tmp10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp3 = prototype;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/records/BaseWishlistItemRecord.tsx");

export default prototype;