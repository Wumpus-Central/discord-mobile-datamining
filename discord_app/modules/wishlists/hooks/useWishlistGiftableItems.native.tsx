// === Module 8999: useWishlistGiftableItems ===

// Module 8999 (useWishlistGiftableItems)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
let items = [, , ];
({ COLLECTIBLES: arr[0], PREMIUM: arr[1], SOCIAL_LAYER_GAME_ITEM: arr[2] } = fn(1085).SKUProductLines);
const set = new Set(items);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistGiftableItems.native.tsx");

export const GIFTABLE_PRODUCT_LINES = set;
export const useWishlistGiftableItems = ReactCompilerGating.isReactCompilerEnabled() ? (function useWishlistGiftableItems(items) {
  const cResult = c.c(2);
  items = undefined;
  if (items != null) {
    items = items.items;
  }
  if (cResult[0] !== items) {
    let found;
    if (items != null) {
      const items1 = items.items;
      found = items1.filter((skuProductLine) => set.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned);
    }
    if (found == null) {
      found = [];
    }
    let items2;
    if (items != null) {
      items2 = items.items;
    }
    cResult[0] = items2;
    cResult[1] = found;
    let tmp3 = found;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function useWishlistGiftableItems(arg0) {
  let items = [arg0];
  return noop.useMemo(() => {
    let found;
    if (items != null) {
      items = items.items;
      found = items.filter((skuProductLine) => set.has(skuProductLine.skuProductLine) && !skuProductLine.isOwned);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items);
});