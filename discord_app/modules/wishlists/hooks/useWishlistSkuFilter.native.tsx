// discord_app/modules/wishlists/hooks/useWishlistSkuFilter.native.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { WishlistRecommendationReason as closure_3 } from "../records/WishlistRecommendationRecord.tsx";
import { SKUProductLines } from "../../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = function useWishlistSkuFilter(wishlistAndRecommendations) {
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const numItems = wishlistAndRecommendations.numItems;
  let obj = wishlistAndRecommendations(skusToUserAndReason[3]);
  const isEligibleForSocialLayerStorefrontMobilePurchasing = obj.useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "use_wishlist_sku_filter" });
  const items = [wishlistAndRecommendations, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = userId.useMemo(() => wishlistAndRecommendations.filter((item, index) => {
    const GIFTABLE_PRODUCT_LINES = wishlistAndRecommendations(skusToUserAndReason[4]).GIFTABLE_PRODUCT_LINES;
    let hasItem = GIFTABLE_PRODUCT_LINES.has(item.productLine);
    if (hasItem) {
      let tmp5 = item.productLine !== isEligibleForSocialLayerStorefrontMobilePurchasing.SOCIAL_LAYER_GAME_ITEM;
      if (!tmp5) {
        let result = closure_4;
        if (closure_4) {
          result = wishlistAndRecommendations(skusToUserAndReason[5]).isSlayerSkuAvailableOnThisPlatform(item);
          const tmpResult = wishlistAndRecommendations(skusToUserAndReason[5]);
        }
        tmp5 = result;
      }
      hasItem = tmp5;
    }
    return hasItem;
  }), items);
  obj = {
    totalUnownedWishlistItemCount: userId.useMemo(() => memo.filter((item, index) => {
      let tmp2 = null != table[item.id];
      if (tmp2) {
        tmp2 = tmp[item.id][closure_2] === numItems.WISHLIST;
      }
      return tmp2;
    }).length, items1),
    slicedWishlistAndRecommendations: userId.useMemo(() => memo.slice(0, numItems), items2)
  };
  items1 = [memo, userId, skusToUserAndReason];
  items2 = [memo, numItems];
  return obj;
};