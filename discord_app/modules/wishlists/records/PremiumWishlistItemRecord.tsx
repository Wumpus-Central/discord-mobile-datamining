// === Module 8781: PremiumWishlistItemRecord ===

// Module 8781 (PremiumWishlistItemRecord)
import SKURecord from "SKURecord" /* 5511 */;
import BaseWishlistItemRecord from "BaseWishlistItemRecord" /* 8779 */;

const SKUProductLines = fn(1074).SKUProductLines;
const prototype = function PremiumWishlistItemRecord(sku) {
  const tmp = new prototype(sku, new.target, new.target);
  tmp.skuProductLine = SKUProductLines.PREMIUM;
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
    const obj = {};
    const merged = Object.assign(sku);
    obj.sku = fromServer;
    if (typeof prototype === "function") {
      const tmp11 = new prototype(obj, sku, prototype, new.target);
      tmp11.skuProductLine = SKUProductLines.PREMIUM;
      tmp11.sku = obj.sku;
      return tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
};
prototype["fromSKU"] = function fromSKU(id) {
  let tmp = null;
  if (null != id) {
    const obj = { sku_id: id.id, sku_product_line: SKUProductLines.PREMIUM, sku_name: null, sku: null };
    const name = id.name;
    obj.sku_name = name;
    obj.sku = id;
    if (typeof prototype === "function") {
      const tmp9 = new prototype(obj, name, tmp2, new.target, SKUProductLines);
      tmp9.skuProductLine = SKUProductLines.PREMIUM;
      tmp9.sku = obj.sku;
      tmp = tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/records/PremiumWishlistItemRecord.tsx");

export default prototype;
export const isPremiumWishlistItemRecord = function isPremiumWishlistItemRecord(arg0) {
  return arg0 instanceof prototype;
};