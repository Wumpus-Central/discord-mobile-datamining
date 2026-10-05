// === Module 12945: useAddToWishlistGridItems ===

// Module 12945 (useAddToWishlistGridItems)
import c from "c" /* 576 */;
import useWishlistRecommendations from "useWishlistRecommendations" /* 10526 */;
import WishlistUtils from "WishlistUtils" /* 12924 */;
import noop from "module_19" /* 19 */;

require = fn;
const PremiumSubscriptionSKUs = fn(1379).PremiumSubscriptionSKUs;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useAddToWishlistGridItems.tsx");

export const useAddToWishlistGridItems = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(17);
  ({ userId, wishlist, numWishlistItemsToRecommend, maxWishlistItemsToShow, source } = arg0);
  if (undefined === maxWishlistItemsToShow) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  if (cResult[0] === numWishlistItemsToRecommend) {
    if (cResult[1] === source) {
      if (cResult[2] === userId) {
        let tmp4 = cResult[3];
      }
      const recommendationsForSingleUser = useWishlistRecommendations.useRecommendationsForSingleUser(tmp4);
      ({ recommendations, status } = recommendationsForSingleUser);
      let items;
      if (wishlist != null) {
        items = wishlist.items;
      }
      if (cResult[4] !== items) {
        let mapped;
        if (wishlist != null) {
          const items1 = wishlist.items;
          mapped = items1.map((skuId) => skuId.skuId);
        }
        if (mapped == null) {
          mapped = [];
        }
        set = new Set(mapped);
        let items2;
        if (wishlist != null) {
          items2 = wishlist.items;
        }
        cResult[4] = items2;
        cResult[5] = set;
        let obj4 = set;
      } else {
        obj4 = cResult[5];
      }
      let tmp15 = "success" === status;
      if (tmp15) {
        tmp15 = !obj4.has(PremiumSubscriptionSKUs.TIER_2);
      }
      if (cResult[6] === maxWishlistItemsToShow) {
        if (cResult[7] === recommendations) {
          if (cResult[8] === tmp15) {
            if (cResult[9] === obj4) {
              let tmp17 = cResult[10];
            }
            if (cResult[14] === tmp17) {
              if (cResult[15] === status) {
                let tmp24 = cResult[16];
              }
              return tmp24;
            }
            const obj2 = { items: tmp17, status };
            cResult[14] = tmp17;
            cResult[15] = status;
            cResult[16] = obj2;
            tmp24 = obj2;
          }
        }
      }
      if (cResult[11] !== obj4) {
        class R {
          constructor(arg0) {
            return !closure_0.has(arg0.id);
          }
        }
        cResult[11] = obj4;
        cResult[12] = R;
      } else {
        class R {
          constructor(arg0) {
            return !closure_0.has(arg0.id);
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
        class W {
          constructor(arg0) {
            obj = { sku: arg0, itemSource: "recommendation" };
            return obj;
          }
        }
        cResult[13] = W;
      } else {
        class W {
          constructor(arg0) {
            obj = { sku: arg0, itemSource: "recommendation" };
            return obj;
          }
        }
      }
      const found = recommendations.filter(R);
      const mapped1 = found.map(W);
      if (tmp15) {
        class W {
          constructor(arg0) {
            obj = { sku: arg0, itemSource: "recommendation" };
            return obj;
          }
        }
        tmp21[0] = WishlistUtils.createNitroSuggestedSku();
        mapped1.unshift(tmp21);
        const tmpResult2 = WishlistUtils;
      }
      const substr = mapped1.slice(0, maxWishlistItemsToShow);
      cResult[6] = maxWishlistItemsToShow;
      cResult[7] = recommendations;
      cResult[8] = tmp15;
      cResult[9] = obj4;
      cResult[10] = substr;
      tmp17 = substr;
      const tmpResult = useWishlistRecommendations;
    }
  }
  const obj3 = { userId, numItems: numWishlistItemsToRecommend, source };
  cResult[0] = numWishlistItemsToRecommend;
  cResult[1] = source;
  cResult[2] = userId;
  cResult[3] = obj3;
  tmp4 = obj3;
}) : ((userId) => {
  const wishlist = userId.wishlist;
  ({ numWishlistItemsToRecommend, maxWishlistItemsToShow } = userId);
  if (maxWishlistItemsToShow === undefined) {
    maxWishlistItemsToShow = numWishlistItemsToRecommend;
  }
  closure_4 = undefined;
  const recommendationsForSingleUser = wishlist(maxWishlistItemsToShow[4]).useRecommendationsForSingleUser({ userId: userId.userId, numItems: numWishlistItemsToRecommend, source: userId.source });
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
  const obj3 = { items: null, status };
  const items1 = [recommendations, memo, tmp2, maxWishlistItemsToShow];
  obj3.items = recommendations.useMemo(() => {
    const found = recommendations.filter((id) => !set.has(id.id));
    const mapped = found.map((sku) => ({ sku, itemSource: "recommendation" }));
    if (closure_4) {
      const obj = { sku: WishlistUtils.createNitroSuggestedSku(), itemSource: "takeover" };
      mapped.unshift(obj);
    }
    return mapped.slice(0, maxWishlistItemsToShow);
  }, items1);
  return obj3;
});