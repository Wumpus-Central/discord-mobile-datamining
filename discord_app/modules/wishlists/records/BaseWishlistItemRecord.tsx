// === Module 10460: fromServer ===

// Module 10460 (fromServer)
import toJSDefault from "toJS" /* 1936 */;
import closure_0 from "createFromServer" /* 4521 */;

toJSDefault;
let prototype;
prototype = function BaseWishlistItemRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ sku_id: tmp.skuId, sku_product_line: tmp.skuProductLine, sku_name: tmp.skuName, is_owned: tmp.isOwned, gifter_user_id: tmp.gifterUserId, sku: tmp.sku } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(sku) {
  sku = sku.sku;
  ({ sku_id, sku_product_line, sku_name, is_owned, gifter_user_id } = sku);
  let obj = Object.create(null);
  const merged = Object.assign(sku, obj);
  obj = {};
  let str = obj;
  const merged1 = Object.assign(merged);
  obj.sku_id = sku_id;
  obj.sku_product_line = sku_product_line;
  obj.sku_name = sku_name;
  obj.is_owned = is_owned;
  obj.gifter_user_id = gifter_user_id;
  let fromServer;
  if (null != sku) {
    fromServer = closure_0.createFromServer(sku);
  }
  obj.sku = fromServer;
  if (typeof prototype !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp7 = new prototype(str, merged, obj);
  // ThrowIfThisInitialized (0x7c)
  ({ sku_id: tmp7.skuId, sku_product_line: tmp7.skuProductLine, sku_name: tmp7.skuName, is_owned: tmp7.isOwned, gifter_user_id: tmp7.gifterUserId, sku: tmp7.sku } = obj);
  return tmp7;
};
const result = require("set").fileFinishedImporting("modules/wishlists/records/BaseWishlistItemRecord.tsx");

export default prototype;