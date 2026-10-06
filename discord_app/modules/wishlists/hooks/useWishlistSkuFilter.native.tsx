// === Module 10542: useWishlistSkuFilter ===

// Module 10542 (useWishlistSkuFilter)
import Constants from "Constants" /* 1085 */;
import WishlistRecommendationRecord from "WishlistRecommendationRecord" /* 6742 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = WishlistRecommendationRecord.WishlistRecommendationReason;
const SKUProductLines = Constants.SKUProductLines;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let arr;
  let arr2;
  let constants2;
  let skusToUserAndReason;
  let wishlistAndRecommendations;
  const obj = skusToUserAndReason(userId[4]);
  const cResult = obj.c(16);
  ({ wishlistAndRecommendations, skusToUserAndReason } = userId);
  userId = userId.userId;
  const numItems = userId.numItems;
  if (cResult[0] !== wishlistAndRecommendations) {
    let tmp3;
    const tmp2 = globalThis;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function o(productLine) {
        const GIFTABLE_PRODUCT_LINES = skusToUserAndReason(userId[5]).GIFTABLE_PRODUCT_LINES;
        let hasItem = GIFTABLE_PRODUCT_LINES.has(productLine.productLine);
        if (hasItem) {
          let result = productLine.productLine !== constants2.SOCIAL_LAYER_GAME_ITEM;
          if (!result) {
            const tmpResult = skusToUserAndReason(userId[6]);
            result = tmpResult.isSlayerSkuAvailableOnThisPlatform(productLine);
          }
          hasItem = result;
        }
        return hasItem;
      };
      cResult[2] = fn;
      tmp3 = fn;
    } else {
      tmp3 = cResult[2];
    }
    const found = wishlistAndRecommendations.filter(tmp3);
    cResult[0] = wishlistAndRecommendations;
    cResult[1] = found;
    arr = found;
  } else {
    arr = cResult[1];
  }
  if (cResult[3] === skusToUserAndReason) {
    if (cResult[4] === arr) {
      if (cResult[5] === userId) {
        arr2 = cResult[6];
      }
      if (cResult[10] === numItems) {
        let tmp7;
        if (cResult[11] === arr) {
          tmp7 = cResult[12];
        }
        if (cResult[13] === tmp7) {
          let tmp9;
          if (cResult[14] === arr2.length) {
            tmp9 = cResult[15];
          }
          return tmp9;
        }
        const obj2 = { totalUnownedWishlistItemCount: arr2.length, slicedWishlistAndRecommendations: tmp7 };
        cResult[13] = tmp7;
        cResult[14] = arr2.length;
        cResult[15] = obj2;
        tmp9 = obj2;
      }
      const substr = arr.slice(0, numItems);
      cResult[10] = numItems;
      cResult[11] = arr;
      cResult[12] = substr;
      tmp7 = substr;
    }
  }
  if (cResult[7] === skusToUserAndReason) {
    let tmp5;
    if (cResult[8] === userId) {
      tmp5 = cResult[9];
    }
    const found1 = arr.filter(tmp5);
    cResult[3] = skusToUserAndReason;
    cResult[4] = arr;
    cResult[5] = userId;
    cResult[6] = found1;
    arr2 = found1;
  }
  const fn2 = function _(arg0) {
    return null != skusToUserAndReason[arg0.id] && tmp[arg0.id][userId] === constants.WISHLIST;
  };
  cResult[7] = skusToUserAndReason;
  cResult[8] = userId;
  cResult[9] = fn2;
  tmp5 = fn2;
}) : ((wishlistAndRecommendations) => {
  let items1;
  let items2;
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
        const tmpResult = wishlistAndRecommendations(skusToUserAndReason[6]);
        result = tmpResult.isSlayerSkuAvailableOnThisPlatform(productLine);
      }
      hasItem = result;
    }
    return hasItem;
  }), items);
  const obj = { totalUnownedWishlistItemCount: userId.useMemo(() => memo.filter((item) => null != skusToUserAndReason[item.id] && tmp[item.id][userId] === numItems.WISHLIST).length, items1), slicedWishlistAndRecommendations: userId.useMemo(() => memo.slice(0, numItems), items2) };
  items1 = [memo, userId, skusToUserAndReason];
  items2 = [memo, numItems];
  return obj;
});
let result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistSkuFilter.native.tsx");

export const useWishlistSkuFilter = tmp2;