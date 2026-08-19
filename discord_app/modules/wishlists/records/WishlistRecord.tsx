// === Module 9187: fromServer ===

// Module 9187 (fromServer)
import toJSDefault from "toJS" /* 1931 */;
import createExecutable from "createExecutable" /* 4479 */;
import fromServer from "fromServer" /* 9188 */;
import createCollectiblesItemFromServerResponse from "createCollectiblesItemFromServerResponse" /* 9189 */;
import fromServer2 from "fromServer" /* 9190 */;
import fromServer3 from "fromServer" /* 9191 */;
import { SKUProductLines } from "ME" /* 676 */;

toJSDefault;
const prototype = function WishlistRecord(arg0) {
  const tmp = new prototype(new.target, new.target, arg0);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, userId: tmp.userId, items: tmp.items, applications } = arg0);
  tmp.applications = applications;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromServer"] = function fromServer(arg0) {
  ({ user_id, wishlist_items } = arg0);
  let obj = Object.create(null);
  const merged = Object.assign(arg0, obj);
  obj = {};
  let str = obj;
  const mapped = wishlist_items.map((item, index) => {
    const sku_product_line = item.sku_product_line;
    if (constants.COLLECTIBLES === sku_product_line) {
      return closure_2.fromServer(item);
    } else if (constants.SOCIAL_LAYER_GAME_ITEM === sku_product_line) {
      return closure_4.fromServer(item);
    } else if (constants.PREMIUM === sku_product_line) {
      return closure_3.fromServer(item);
    } else {
      return closure_1.fromServer(item);
    }
  });
  const merged1 = Object.assign(merged);
  obj.userId = user_id;
  obj.items = mapped;
  applications = merged.applications;
  let mapped1;
  if (applications != null) {
    mapped1 = applications.map((item, index) => closure_0.createFromServer(item));
  }
  obj.applications = mapped1;
  if (typeof prototype !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp7 = new prototype(str, merged, obj, applications, user_id);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp7.id, userId: tmp7.userId, items: tmp7.items, applications } = obj);
  tmp7.applications = applications;
  return tmp7;
};
const result = require("obj132").fileFinishedImporting("modules/wishlists/records/WishlistRecord.tsx");

export default prototype;
export const getWishlistSkuIds = function getWishlistSkuIds(items) {
  items = items.items;
  return items.map((item, index) => item.skuId);
};
export const wishlistHasSkuId = function wishlistHasSkuId(items) {
  closure_0 = arg1;
  items = items.items;
  return items.some((item, index) => item.skuId === closure_0);
};
export const getWishlistProductLines = function getWishlistProductLines(items) {
  items = items.items;
  return new Set(items.map((item, index) => item.skuProductLine));
};