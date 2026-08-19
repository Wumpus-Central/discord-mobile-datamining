// === Module 9190: fromServer ===

// Module 9190 (fromServer)
import fromServerDefault from "fromServer" /* 9188 */;
import closure_0 from "createFromServer" /* 4515 */;
import { SKUProductLines } from "ME" /* 676 */;

fromServerDefault;
let prototype;
prototype = function PremiumWishlistItemRecord(sku) {
  const tmp = new prototype(sku, new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp.skuProductLine = SKUProductLines.PREMIUM;
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
    const obj = {};
    const merged = Object.assign(sku);
    obj.sku = fromServer;
    if (typeof prototype !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp11 = new prototype(obj, sku, prototype, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp11.skuProductLine = SKUProductLines.PREMIUM;
    tmp11.sku = obj.sku;
    return tmp11;
  }
};
prototype["fromSKU"] = function fromSKU(id) {
  let tmp = null;
  if (null != id) {
    const obj = { sku_id: null, sku_product_line: null, sku_name: null, sku: null };
    obj[0] = id.id;
    obj[1] = SKUProductLines.PREMIUM;
    const name = id.name;
    obj[2] = name;
    obj[3] = id;
    if (typeof prototype !== "function") {
      HermesBuiltin.throwTypeError();
    }
    const tmp9 = new prototype(obj, name, prototype, new.target, SKUProductLines);
    // ThrowIfThisInitialized (0x7c)
    tmp9.skuProductLine = SKUProductLines.PREMIUM;
    tmp9.sku = obj.sku;
    tmp = tmp9;
    const tmp2 = prototype;
  }
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/wishlists/records/PremiumWishlistItemRecord.tsx");

export default prototype;
export const isPremiumWishlistItemRecord = function isPremiumWishlistItemRecord(arg0) {
  return arg0 instanceof prototype;
};