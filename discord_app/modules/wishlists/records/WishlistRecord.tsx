// discord_app/modules/wishlists/records/WishlistRecord.tsx
import Constants from "../../../Constants.tsx";
import Record from "../../../lib/Record.tsx";
import ApplicationRecord from "../../../records/ApplicationRecord.tsx";
import BaseWishlistItemRecord from "BaseWishlistItemRecord.tsx";
import CollectiblesWishlistItemRecord from "CollectiblesWishlistItemRecord.tsx";
import PremiumWishlistItemRecord from "PremiumWishlistItemRecord.tsx";
import SKUWishlistItemRecord from "SKUWishlistItemRecord.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set, sku_product_line;

const SKUProductLines = Constants.SKUProductLines;
class WishlistRecord extends Record {
  constructor(merged) {
    let applications;
    const tmp = new WishlistRecord(new.target, this, merged);
    ({ id: tmp.id, userId: tmp.userId, items: tmp.items, applications } = merged);
    tmp.applications = applications;
    return tmp;
  }
  static fromServer(arg0) {
    let applications;
    let mapped;
    let mapped1;
    let user_id;
    let wishlist_items;
    ({ user_id, wishlist_items } = arg0);
    const merged = Object.assign({ user_id: 0, wishlist_items: 0 });
    const merged1 = Object.assign(arg0, merged);
    const obj = { userId: user_id, items: mapped, applications: mapped1 };
    mapped = wishlist_items.map((sku_product_line) => {
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
    const applications1 = merged1.applications;
    mapped1 = undefined;
    if (applications1 != null) {
      mapped1 = applications1.map((item) => ApplicationRecord.createFromServer(item));
    }
    if (typeof WishlistRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp8 = new WishlistRecord(obj, merged1, merged, applications1, user_id);
      ({ id: tmp8.id, userId: tmp8.userId, items: tmp8.items, applications } = obj);
      tmp8.applications = applications;
      return tmp8;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("modules/wishlists/records/WishlistRecord.tsx");

export default WishlistRecord;
export const getWishlistSkuIds = function getWishlistSkuIds(first1) {
  const items = first1.items;
  return items.map((skuId) => skuId.skuId);
};
export const wishlistHasSkuId = function wishlistHasSkuId(items, arg1) {
  let closure_0 = arg1;
  items = items.items;
  return items.some((skuId) => skuId.skuId === closure_0);
};
export const getWishlistProductLines = function getWishlistProductLines(items) {
  items = items.items;
  set = new Set(items.map((skuProductLine) => skuProductLine.skuProductLine));
  return set;
};
