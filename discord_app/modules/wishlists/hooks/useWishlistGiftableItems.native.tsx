// discord_app/modules/wishlists/hooks/useWishlistGiftableItems.native.tsx
import noop from "../../../../_runtime/metro/00019__.js";

let items = [, ,];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = fn(1074).SKUProductLines);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export const useWishlistGiftableItems = function useWishlistGiftableItems(wishlist) {
  noop = wishlist;
  let items = [wishlist];
  return noop.useMemo(() => {
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
