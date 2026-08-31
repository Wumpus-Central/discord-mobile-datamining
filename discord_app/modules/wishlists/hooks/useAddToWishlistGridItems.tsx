// === Module 12551: useAddToWishlistGridItems ===

// Module 12551 (useAddToWishlistGridItems)
import closure_2 from "noop" /* 19 */;
import { PremiumSubscriptionSKUs } from "GuildFeatures" /* 1924 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

export const useAddToWishlistGridItems = function useAddToWishlistGridItems(userId) {
  const wishlist = userId.wishlist;
  ({ numWishlistItemsToRecommend, maxWishlistItemsToShow } = userId);
  if (maxWishlistItemsToShow === undefined) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  let recommendations;
  let memo;
  closure_4 = undefined;
  let obj = wishlist(maxWishlistItemsToShow[2]);
  const recommendationsForSingleUser = obj.useRecommendationsForSingleUser({ userId: userId.userId, numItems: numWishlistItemsToRecommend, source: userId.source });
  recommendations = recommendationsForSingleUser.recommendations;
  const status = recommendationsForSingleUser.status;
  let items = [wishlist];
  memo = recommendations.useMemo(() => {
    let mapped;
    if (wishlist != null) {
      const items = wishlist.items;
      mapped = items.map((skuId) => skuId.skuId);
    }
    if (mapped == null) {
      mapped = [];
    }
    return new Set(mapped);
  }, items);
  let tmp2 = "success" === status;
  if (tmp2) {
    tmp2 = !memo.has(memo.TIER_2);
  }
  closure_4 = tmp2;
  obj = {
    items: recommendations.useMemo(() => {
      const found = recommendations.filter((id) => !set.has(id.id));
      const mapped = found.map((sku) => ({ sku, itemSource: "recommendation" }));
      if (closure_4) {
        const obj = { sku: null, itemSource: "takeover" };
        obj[0] = wishlist(maxWishlistItemsToShow[3]).createNitroSuggestedSku();
        mapped.unshift(obj);
        const obj2 = wishlist(maxWishlistItemsToShow[3]);
      }
      return mapped.slice(0, maxWishlistItemsToShow);
    }, items1),
    status
  };
  items1 = [recommendations, memo, tmp2, maxWishlistItemsToShow];
  return obj;
};