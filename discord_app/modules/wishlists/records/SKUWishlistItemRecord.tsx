// discord_app/modules/wishlists/records/SKUWishlistItemRecord.tsx
import fromServerDefault from "BaseWishlistItemRecord.tsx";
import createFromServer from "../../skus/SKURecord.tsx";

fromServerDefault;
const prototype = function SKUWishlistItemRecord(sku) {
  const tmp = new prototype(sku, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp.skuProductLine = sku.sku.productLine;
  tmp.sku = sku.sku;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(sku) {
  const fromServer = closure_0.createFromServer(sku.sku);
  if (null == fromServer) {
    const _Error = Error;
    error = new Error("SKU not found");
    throw error;
  } else {
    const obj = { sku: fromServer };
    const merged = Object.assign(sku);
    if (typeof prototype !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp11 = new prototype(obj, sku, merged);
    // ThrowIfThisInitialized (0x7c)
    tmp11.skuProductLine = obj.sku.productLine;
    tmp11.sku = obj.sku;
    return tmp11;
  }
};
prototype["fromSKU"] = function fromSKU(arg0) {
  let tmp = null;
  if (null != arg0) {
    const obj = { sku_id: null, sku_product_line: null, sku_name: null, sku: null };
    ({ id: obj[0], productLine: obj[1], name } = arg0);
    obj[2] = name;
    obj[3] = arg0;
    if (typeof prototype !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp8 = new prototype(obj, name, prototype, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp8.skuProductLine = obj.sku.productLine;
    tmp8.sku = obj.sku;
    tmp = tmp8;
  }
  return tmp;
};
const result = require("obj132").fileFinishedImporting("modules/wishlists/records/SKUWishlistItemRecord.tsx");

export default prototype;
export const isSKUWishlistItemRecord = function isSKUWishlistItemRecord(sku) {
  return sku instanceof prototype;
};