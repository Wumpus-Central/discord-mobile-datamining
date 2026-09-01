// discord_app/modules/wishlists/records/WishlistRecord.tsx
import toJSDefault from "../../../lib/Record.tsx";
import closure_0 from "../../../records/ApplicationRecord.tsx";
import closure_1 from "BaseWishlistItemRecord.tsx";
import closure_2 from "CollectiblesWishlistItemRecord.tsx";
import closure_3 from "PremiumWishlistItemRecord.tsx";
import closure_4 from "SKUWishlistItemRecord.tsx";
import { SKUProductLines } from "../../../Constants.tsx";

toJSDefault;
let prototype;
prototype = function WishlistRecord(arg0) {
  const tmp = new prototype(new.target, new.target, arg0);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, userId: tmp.userId, items: tmp.items, applications } = arg0);
  tmp.applications = applications;
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(arg0) {
  ({ user_id, wishlist_items } = arg0);
  let obj = Object.create(null);
  const merged = Object.assign(arg0, obj);
  obj = {};
  let str = obj;
  const mapped = wishlist_items.map((sku_product_line) => {
    sku_product_line = sku_product_line.sku_product_line;
    if (constants.COLLECTIBLES === sku_product_line) {
      return closure_2.fromServer(sku_product_line);
    } else if (tmp.SOCIAL_LAYER_GAME_ITEM === sku_product_line) {
      return closure_4.fromServer(sku_product_line);
    } else if (tmp.PREMIUM === sku_product_line) {
      return closure_3.fromServer(sku_product_line);
    } else {
      return closure_1.fromServer(sku_product_line);
    }
  });
  const merged1 = Object.assign(merged);
  obj.userId = user_id;
  obj.items = mapped;
  applications = merged.applications;
  let mapped1;
  if (applications != null) {
    mapped1 = applications.map((arg0) => closure_0.createFromServer(arg0));
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
const result = require("set").fileFinishedImporting("modules/wishlists/records/WishlistRecord.tsx");

export default prototype;
export const getWishlistSkuIds = function getWishlistSkuIds(items) {
  items = items.items;
  return items.map((skuId) => skuId.skuId);
};
export const wishlistHasSkuId = function wishlistHasSkuId(items) {
  closure_0 = arg1;
  items = items.items;
  return items.some((skuId) => skuId.skuId === closure_0);
};
export const getWishlistProductLines = function getWishlistProductLines(items) {
  items = items.items;
  return new Set(items.map((skuProductLine) => skuProductLine.skuProductLine));
};
