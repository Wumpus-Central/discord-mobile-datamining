// === Module 10529: useWishlistSkuFilter ===

// Module 10529 (useWishlistSkuFilter)
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = fn(6728).WishlistRecommendationReason;
const SKUProductLines = fn(1085).SKUProductLines;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = skusToUserAndReason(userId[4]).c(16);
  ({ wishlistAndRecommendations, skusToUserAndReason } = userId);
  userId = userId.userId;
  const numItems = userId.numItems;
  if (cResult[0] !== wishlistAndRecommendations) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(productLine) {
        const GIFTABLE_PRODUCT_LINES = skusToUserAndReason(userId[5]).GIFTABLE_PRODUCT_LINES;
        let hasItem = GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
        if (hasItem) {
          let result = productLine.productLine !== constants2.SOCIAL_LAYER_GAME_ITEM;
          if (!result) {
            result = skusToUserAndReason(userId[6]).isSlayerSkuAvailableOnThisPlatform(productLine);
            const tmpResult = skusToUserAndReason(userId[6]);
          }
          hasItem = result;
        }
        return hasItem;
      };
      cResult[2] = fn;
      let tmp3 = fn;
    } else {
      tmp3 = cResult[2];
    }
    const found = wishlistAndRecommendations.filter(tmp3);
    cResult[0] = wishlistAndRecommendations;
    cResult[1] = found;
  } else {
    if (cResult[3] === skusToUserAndReason) {
      if (cResult[4] === arr) {
        if (cResult[5] === userId) {
          if (cResult[10] === numItems) {
            if (cResult[11] === arr) {
              let tmp9 = cResult[12];
            }
            if (cResult[13] === tmp9) {
              if (cResult[14] === length) {
                let tmp11 = cResult[15];
              }
              return tmp11;
            }
            const obj2 = { totalUnownedWishlistItemCount: length, slicedWishlistAndRecommendations: tmp9 };
            cResult[13] = tmp9;
            cResult[14] = length;
            cResult[15] = obj2;
            tmp11 = obj2;
          }
          const substr = arr.slice(0, numItems);
          cResult[10] = numItems;
          cResult[11] = arr;
          cResult[12] = substr;
          tmp9 = substr;
        }
      }
    }
    if (cResult[7] === skusToUserAndReason) {
      if (cResult[8] === userId) {
        let tmp6 = cResult[9];
      }
      const found1 = arr.filter(tmp6);
      cResult[3] = skusToUserAndReason;
      cResult[4] = arr;
      cResult[5] = userId;
      cResult[6] = found1;
    }
    const fn2 = function _(arg0) {
      let tmp2 = null != skusToUserAndReason[arg0.id];
      if (tmp2) {
        tmp2 = tmp[arg0.id][userId] === constants.WISHLIST;
      }
      return tmp2;
    };
    cResult[7] = skusToUserAndReason;
    cResult[8] = userId;
    cResult[9] = fn2;
    tmp6 = fn2;
  }
}) : ((wishlistAndRecommendations) => {
  wishlistAndRecommendations = wishlistAndRecommendations.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistAndRecommendations.skusToUserAndReason;
  const userId = wishlistAndRecommendations.userId;
  const numItems = wishlistAndRecommendations.numItems;
  const items = [wishlistAndRecommendations];
  const memo = userId.useMemo(() => wishlistAndRecommendations.filter((productLine) => {
    const GIFTABLE_PRODUCT_LINES = wishlistAndRecommendations(skusToUserAndReason[5]).GIFTABLE_PRODUCT_LINES;
    let hasItem = GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
    if (hasItem) {
      let result = productLine.productLine !== constants.SOCIAL_LAYER_GAME_ITEM;
      if (!result) {
        result = wishlistAndRecommendations(skusToUserAndReason[6]).isSlayerSkuAvailableOnThisPlatform(productLine);
        const tmpResult = wishlistAndRecommendations(skusToUserAndReason[6]);
      }
      hasItem = result;
    }
    return hasItem;
  }), items);
  const obj = { totalUnownedWishlistItemCount: null, slicedWishlistAndRecommendations: null };
  const items1 = [memo, userId, skusToUserAndReason];
  obj.totalUnownedWishlistItemCount = userId.useMemo(() => memo.filter((item) => {
    let tmp2 = null != skusToUserAndReason[item.id];
    if (tmp2) {
      tmp2 = tmp[item.id][userId] === numItems.WISHLIST;
    }
    return tmp2;
  }).length, items1);
  const items2 = [memo, numItems];
  obj.slicedWishlistAndRecommendations = userId.useMemo(() => memo.slice(0, numItems), items2);
  return obj;
});