// discord_app/modules/wishlists/hooks/useAddToWishlistGridItems.tsx
import noop from "../../../../_runtime/00019_noop.js";
import { PremiumSubscriptionSKUs } from "../../premium/PremiumConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

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
  const isNitroWishlistingEnabled = wishlist(maxWishlistItemsToShow[3]).useIsNitroWishlistingEnabled("add_to_wishlist_grid_suggested_nitro");
  let items = [wishlist];
  const memo = recommendations.useMemo(() => {
    let mapped;
    if (wishlist != null) {
      const items = wishlist.items;
      mapped = items.map((item, index) => item.skuId);
    }
    if (mapped == null) {
      mapped = [];
    }
    return new Set(mapped);
  }, items);
  let tmp3 = isNitroWishlistingEnabled;
  if (isNitroWishlistingEnabled) {
    tmp3 = "success" === status;
  }
  if (tmp3) {
    tmp3 = !memo.has(memo.TIER_2);
  }
  closure_4 = tmp3;
  obj = {
    items: recommendations.useMemo(() => {
      const found = recommendations.filter((item, index) => !set.has(item.id));
      const mapped = found.map((item, index) => ({ sku: item, itemSource: "recommendation" }));
      if (closure_4) {
        const obj = { sku: null, itemSource: "takeover" };
        obj[0] = wishlist(maxWishlistItemsToShow[4]).createNitroSuggestedSku();
        mapped.unshift(obj);
        const obj2 = wishlist(maxWishlistItemsToShow[4]);
      }
      return mapped.slice(0, maxWishlistItemsToShow);
    }, items1),
    status
  };
  items1 = [recommendations, memo, tmp3, maxWishlistItemsToShow];
  return obj;
};