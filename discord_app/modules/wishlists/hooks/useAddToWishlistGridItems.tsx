// === Module 13092: useAddToWishlistGridItems ===

// Module 13092 (useAddToWishlistGridItems)
import WishlistUtils from "WishlistUtils" /* 13068 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumSubscriptionSKUs = fn(1373).PremiumSubscriptionSKUs;
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

export const useAddToWishlistGridItems = function useAddToWishlistGridItems(userId) {
  const wishlist = userId.wishlist;
  ({ numWishlistItemsToRecommend, maxWishlistItemsToShow } = userId);
  if (maxWishlistItemsToShow === undefined) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  closure_4 = undefined;
  let obj = wishlist(maxWishlistItemsToShow[2]);
  const recommendationsForSingleUser = obj.useRecommendationsForSingleUser({ userId: userId.userId, numItems: numWishlistItemsToRecommend, source: userId.source });
  const recommendations = recommendationsForSingleUser.recommendations;
  const status = recommendationsForSingleUser.status;
  let items = [wishlist];
  const memo = recommendations.useMemo(() => {
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
  obj = { items: null, status };
  const items1 = [recommendations, memo, tmp2, maxWishlistItemsToShow];
  obj.items = recommendations.useMemo(() => {
    const found = recommendations.filter((id) => !set.has(id.id));
    const mapped = found.map((sku) => ({ sku, itemSource: "recommendation" }));
    if (closure_4) {
      const obj = { sku: WishlistUtils.createNitroSuggestedSku(), itemSource: "takeover" };
      mapped.unshift(obj);
    }
    return mapped.slice(0, maxWishlistItemsToShow);
  }, items1);
  return obj;
};