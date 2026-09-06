// discord_app/modules/wishlists/records/WishlistRecord.tsx
import Record from "../../../lib/Record.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import BaseWishlistItemRecord from "BaseWishlistItemRecord.tsx";
import CollectiblesWishlistItemRecord from "CollectiblesWishlistItemRecord.tsx";
import PremiumWishlistItemRecord from "PremiumWishlistItemRecord.tsx";
import SKUWishlistItemRecord from "SKUWishlistItemRecord.tsx";

const SKUProductLines = fn(1074).SKUProductLines;
const prototype = function WishlistRecord(arg0) {
  const tmp = new prototype(new.target, new.target, arg0);
  ({ id: tmp.id, userId: tmp.userId, items: tmp.items, applications } = arg0);
  tmp.applications = applications;
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["fromServer"] = function fromServer(arg0) {
  ({ user_id, wishlist_items } = arg0);
  const merged = Object.assign({ user_id: 0, wishlist_items: 0 });
  const merged1 = Object.assign(arg0, merged);
  const obj = {};
  const mapped = wishlist_items.map((sku_product_line) => {
    sku_product_line = sku_product_line.sku_product_line;
    if (constants.COLLECTIBLES === sku_product_line) {
      return CollectiblesWishlistItemRecord.fromServer(sku_product_line);
    } else if (constants.SOCIAL_LAYER_GAME_ITEM === sku_product_line) {
      return SKUWishlistItemRecord.fromServer(sku_product_line);
    } else if (constants.PREMIUM === sku_product_line) {
      return PremiumWishlistItemRecord.fromServer(sku_product_line);
    } else {
      return BaseWishlistItemRecord.fromServer(sku_product_line);
    }
  });
  const merged2 = Object.assign(merged1);
  obj.userId = user_id;
  obj.items = mapped;
  applications = merged1.applications;
  let mapped1;
  if (applications != null) {
    mapped1 = applications.map((item) => ApplicationRecord.createFromServer(item));
  }
  obj.applications = mapped1;
  if (typeof prototype === "function") {
    const tmp10 = new prototype(obj, merged1, merged, applications, user_id);
    ({ id: tmp10.id, userId: tmp10.userId, items: tmp10.items, applications } = obj);
    tmp10.applications = applications;
    return tmp10;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecord.tsx");

export default prototype;
export const getWishlistSkuIds = function getWishlistSkuIds(items) {
  items = items.items;
  return items.map((skuId) => skuId.skuId);
};
export const wishlistHasSkuId = function wishlistHasSkuId(items, arg1) {
  closure_0 = arg1;
  items = items.items;
  return items.some((skuId) => skuId.skuId === closure_0);
};
export const getWishlistProductLines = function getWishlistProductLines(items) {
  items = items.items;
  return new Set(items.map((skuProductLine) => skuProductLine.skuProductLine));
};
