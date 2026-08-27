// === Module 10392: set ===

// Module 10392 (set)
import closure_0 from "noop" /* 19 */;
import set from "set" /* 2 */;

let items = [, , ];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = require("ME").SKUProductLines);
let set = new Set(items);
const result = set.fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export const useWishlistGiftableItems = function useWishlistGiftableItems(wishlist) {
  const React = wishlist;
  let items = [wishlist];
  return React.useMemo(() => {
    let found;
    if (wishlist != null) {
      const items = wishlist.items;
      found = items.filter((skuProductLine) => set.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items);
};