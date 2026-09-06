// === Module 8782: SKUWishlistItemRecord ===

// Module 8782 (SKUWishlistItemRecord)
import SKURecord from "SKURecord" /* 5511 */;
import BaseWishlistItemRecord from "BaseWishlistItemRecord" /* 8779 */;

const prototype = function SKUWishlistItemRecord(sku) {
  const tmp = new prototype(sku, new.target);
  tmp.skuProductLine = sku.sku.productLine;
  tmp.sku = sku.sku;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(sku) {
  const fromServer = SKURecord.createFromServer(sku.sku);
  if (null == fromServer) {
    const _Error = Error;
    const error = new Error("SKU not found");
    throw error;
  } else {
    const obj = { sku: fromServer };
    if (typeof prototype === "function") {
      const tmp11 = new prototype(obj, sku, tmp5);
      tmp11.skuProductLine = obj.sku.productLine;
      tmp11.sku = obj.sku;
      return tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
prototype["fromSKU"] = function fromSKU(sku) {
  let tmp = null;
  if (null != sku) {
    const obj = { sku_id: null, sku_product_line: null, sku_name: null, sku: null };
    ({ id: obj.sku_id, productLine: obj.sku_product_line, name } = sku);
    obj.sku_name = name;
    obj.sku = sku;
    if (typeof prototype === "function") {
      const tmp8 = new prototype(obj, name, tmp2, new.target);
      tmp8.skuProductLine = obj.sku.productLine;
      tmp8.sku = obj.sku;
      tmp = tmp8;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/records/SKUWishlistItemRecord.tsx");

export default prototype;
export const isSKUWishlistItemRecord = function isSKUWishlistItemRecord(sku) {
  return sku instanceof prototype;
};