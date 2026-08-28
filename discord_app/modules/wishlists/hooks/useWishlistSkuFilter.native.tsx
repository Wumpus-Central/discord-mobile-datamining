// === Module 10508: useWishlistSkuFilter ===

// Module 10508 (useWishlistSkuFilter)
import closure_2 from "noop" /* 19 */;
import { WishlistRecommendationReason as closure_3 } from "fromServer" /* 6039 */;
import { SKUProductLines } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = function useWishlistSkuFilter(wishlistAndRecommendations) {
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const numItems = wishlistAndRecommendations.numItems;
  let memo;
  const items = [wishlistAndRecommendations];
  memo = userId.useMemo(() => wishlistAndRecommendations.filter((productLine) => {
    const GIFTABLE_PRODUCT_LINES = callback(table[3]).GIFTABLE_PRODUCT_LINES;
    let hasItem = GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
    if (hasItem) {
      let result = productLine.productLine !== constants.SOCIAL_LAYER_GAME_ITEM;
      if (!result) {
        result = callback(table[4]).isSlayerSkuAvailableOnThisPlatform(productLine);
        const tmpResult = callback(table[4]);
      }
      hasItem = result;
    }
    return hasItem;
  }), items);
  const items1 = [memo, userId, skusToUserAndReason];
  const items2 = [memo, numItems];
  return {
    totalUnownedWishlistItemCount: userId.useMemo(() => memo.filter((arg0) => {
      let tmp2 = null != table[arg0.id];
      if (tmp2) {
        tmp2 = tmp[arg0.id][closure_2] === closure_1_3.WISHLIST;
      }
      return tmp2;
    }).length, items1),
    slicedWishlistAndRecommendations: userId.useMemo(() => memo.slice(0, numItems), items2)
  };
};