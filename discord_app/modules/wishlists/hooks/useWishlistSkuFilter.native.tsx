// discord_app/modules/wishlists/hooks/useWishlistSkuFilter.native.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = fn(7227).WishlistRecommendationReason;
const SKUProductLines = fn(1074).SKUProductLines;
const size = fn(2);
let result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = function useWishlistSkuFilter(wishlistAndRecommendations) {
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const numItems = wishlistAndRecommendations.numItems;
  const items = [wishlistAndRecommendations];
  const memo = userId.useMemo(
    () =>
      wishlistAndRecommendations.filter((productLine) => {
        const GIFTABLE_PRODUCT_LINES = wishlistAndRecommendations(skusToUserAndReason[3]).GIFTABLE_PRODUCT_LINES;
        let hasItem = GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
        if (hasItem) {
          let result = productLine.productLine !== constants.SOCIAL_LAYER_GAME_ITEM;
          if (!result) {
            result = wishlistAndRecommendations(skusToUserAndReason[4]).isSlayerSkuAvailableOnThisPlatform(productLine);
            const tmpResult = wishlistAndRecommendations(skusToUserAndReason[4]);
          }
          hasItem = result;
        }
        return hasItem;
      }),
    items,
  );
  const obj = { totalUnownedWishlistItemCount: null, slicedWishlistAndRecommendations: null };
  const items1 = [memo, userId, skusToUserAndReason];
  obj.totalUnownedWishlistItemCount = userId.useMemo(
    () =>
      memo.filter((item) => {
        let tmp2 = null != skusToUserAndReason[item.id];
        if (tmp2) {
          tmp2 = tmp[item.id][userId] === numItems.WISHLIST;
        }
        return tmp2;
      }).length,
    items1,
  );
  const items2 = [memo, numItems];
  obj.slicedWishlistAndRecommendations = userId.useMemo(() => memo.slice(0, numItems), items2);
  return obj;
};
