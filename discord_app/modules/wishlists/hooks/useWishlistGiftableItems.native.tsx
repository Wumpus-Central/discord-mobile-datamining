// discord_app/modules/wishlists/hooks/useWishlistGiftableItems.native.tsx
import noop from "../../../../_runtime/00019_noop.js";

let items = [, , ];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = require("ME").SKUProductLines);
const set = new Set(items);
const result = require("obj132").fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export const useWishlistGiftableItems = function useWishlistGiftableItems(wishlist) {
  const React = wishlist;
  let items = [wishlist];
  return React.useMemo(() => {
    let found;
    if (wishlist != null) {
      const items = wishlist.items;
      found = items.filter((item, index) => set.has(item.skuProductLine) && !item.isOwned);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items);
};