import noop from "noop";
import { WishlistRecommendationReason as closure_3 } from "fromServer";
import { SKUProductLines } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = function useWishlistSkuFilter(wishlistAndRecommendations) {
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const numItems = wishlistAndRecommendations.numItems;
  let isEligibleForSocialLayerStorefrontMobilePurchasing;
  let memo;
  let obj = wishlistAndRecommendations(skusToUserAndReason[3]);
  isEligibleForSocialLayerStorefrontMobilePurchasing = obj.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "use_wishlist_sku_filter" });
  const items = [wishlistAndRecommendations, isEligibleForSocialLayerStorefrontMobilePurchasing];
  memo = userId.useMemo(() => wishlistAndRecommendations.filter((productLine) => {
    const GIFTABLE_PRODUCT_LINES = outer1_0(outer1_1[4]).GIFTABLE_PRODUCT_LINES;
    let hasItem = GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
    if (hasItem) {
      let tmp5 = productLine.productLine !== outer1_4.SOCIAL_LAYER_GAME_ITEM;
      if (!tmp5) {
        let result = closure_4;
        if (closure_4) {
          result = outer1_0(outer1_1[5]).isSlayerSkuAvailableOnThisPlatform(productLine);
          const tmpResult = outer1_0(outer1_1[5]);
        }
        tmp5 = result;
      }
      hasItem = tmp5;
    }
    return hasItem;
  }), items);
  obj = {
    totalUnownedWishlistItemCount: userId.useMemo(() => memo.filter((arg0) => {
      let tmp2 = null != table[arg0.id];
      if (tmp2) {
        tmp2 = tmp[arg0.id][noop] === outer1_3.WISHLIST;
      }
      return tmp2;
    }).length, items1),
    slicedWishlistAndRecommendations: userId.useMemo(() => memo.slice(0, numItems), items2)
  };
  items1 = [memo, userId, skusToUserAndReason];
  items2 = [memo, numItems];
  return obj;
};