// === Module 10530: WishlistBannerUtils ===

// Module 10530 (WishlistBannerUtils)
import react from "react" /* 19 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let intl;
let intl2;
let intl3;
let intl4;
let obj3;
let obj4;
let obj5;
let obj6;
const useMemo = react.useMemo;
const BannerMode = { FULL_WISHLIST: "FULL_WISHLIST", MIXED: "MIXED", SHOP_ONLY: "SHOP_ONLY", SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY" };
let obj2 = { FULL_WISHLIST: obj3, MIXED: obj4, SHOP_ONLY: obj5, SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: obj6 };
obj3 = {
  title: intl.string(intl5.t["7lZ31J"]),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.BjEX38, obj);
  },
  showIcons: false
};
intl = intl5.intl;
obj4 = {
  title: intl2.string(intl5.t.pWG4ze),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.dIDKgi, obj);
  },
  showIcons: true
};
intl2 = intl5.intl;
obj5 = {
  title: intl3.string(intl5.t.SK5rmi),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.wyMp1j, obj);
  },
  showIcons: false
};
intl3 = intl5.intl;
obj6 = {
  title: intl4.string(intl5.t.BCi1gT),
  getSubtitle(username) {
    const intl = intl5.intl;
    const obj = { username };
    return intl.formatToPlainString(intl5.t.BjEX38, obj);
  },
  showIcons: false
};
intl4 = intl5.intl;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((wishlistInDmLength) => {
  let SHOP_ONLY;
  let displayItems;
  let intl;
  let recipientName;
  let tmp4;
  let tmp9;
  let totalUnownedWishlistItemCount;
  const obj = react2;
  const cResult = obj.c(9);
  ({ totalUnownedWishlistItemCount, displayItems, recipientName } = wishlistInDmLength);
  if (totalUnownedWishlistItemCount >= wishlistInDmLength.wishlistInDmLength) {
    SHOP_ONLY = obj.FULL_WISHLIST;
    tmp4 = obj;
  } else if (totalUnownedWishlistItemCount > 0) {
    SHOP_ONLY = obj.MIXED;
    tmp4 = obj;
  } else {
    if (displayItems.length > 0) {
      if (displayItems.every((item) => {
        let sku;
        let source;
        ({ sku, source } = item);
        let isGameItemSKUResult = source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
        if (isGameItemSKUResult) {
          const tmpResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]);
          isGameItemSKUResult = tmpResult.isGameItemSKU(sku);
        }
        return isGameItemSKUResult;
      })) {
        SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
        tmp4 = obj;
      }
    }
    tmp4 = obj;
    SHOP_ONLY = obj.SHOP_ONLY;
  }
  if (tmp4.FULL_WISHLIST === SHOP_ONLY) {
    let tmp13;
    let tmp15;
    if (cResult[0] !== recipientName) {
      const intl3 = intl5.intl;
      const obj2 = { username: recipientName };
      const formatToPlainStringResult = intl3.formatToPlainString(intl5.t["YcL/Vr"], obj2);
      cResult[0] = recipientName;
      cResult[1] = formatToPlainStringResult;
      tmp13 = formatToPlainStringResult;
    } else {
      tmp13 = cResult[1];
    }
    if (cResult[2] !== tmp13) {
      const obj3 = { title: tmp13, showIcons: false };
      cResult[2] = tmp13;
      cResult[3] = obj3;
      tmp15 = obj3;
    } else {
      tmp15 = cResult[3];
    }
    tmp9 = tmp15;
  } else if (tmp4.MIXED === SHOP_ONLY) {
    let tmp10;
    let tmp12;
    if (cResult[4] !== recipientName) {
      const intl2 = intl5.intl;
      const obj4 = { username: recipientName };
      const formatToPlainStringResult1 = intl2.formatToPlainString(intl5.t.dIDKgi, obj4);
      cResult[4] = recipientName;
      cResult[5] = formatToPlainStringResult1;
      tmp10 = formatToPlainStringResult1;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] !== tmp10) {
      const obj5 = { title: tmp10, showIcons: true };
      cResult[6] = tmp10;
      cResult[7] = obj5;
      tmp12 = obj5;
    } else {
      tmp12 = cResult[7];
    }
    tmp9 = tmp12;
  } else {
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj6 = { title: intl.string(intl5.t.BCi1gT), showIcons: false };
      intl = intl5.intl;
      cResult[8] = obj6;
      tmp9 = obj6;
    } else {
      tmp9 = cResult[8];
    }
  }
  return tmp9;
}) : ((totalUnownedWishlistItemCount) => {
  totalUnownedWishlistItemCount = totalUnownedWishlistItemCount.totalUnownedWishlistItemCount;
  const wishlistInDmLength = totalUnownedWishlistItemCount.wishlistInDmLength;
  const displayItems = totalUnownedWishlistItemCount.displayItems;
  const recipientName = totalUnownedWishlistItemCount.recipientName;
  const items = [totalUnownedWishlistItemCount, wishlistInDmLength, displayItems];
  const tmp = displayItems(() => {
    let SHOP_ONLY;
    if (totalUnownedWishlistItemCount >= wishlistInDmLength) {
      SHOP_ONLY = obj.FULL_WISHLIST;
    } else if (tmp > 0) {
      SHOP_ONLY = obj.MIXED;
    } else {
      if (displayItems.length > 0) {
        if (displayItems.every((item) => {
          let sku;
          let source;
          ({ sku, source } = item);
          let isGameItemSKUResult = source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
          if (isGameItemSKUResult) {
            const tmpResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]);
            isGameItemSKUResult = tmpResult.isGameItemSKU(sku);
          }
          return isGameItemSKUResult;
        })) {
          SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
        }
      }
      SHOP_ONLY = obj.SHOP_ONLY;
    }
    return SHOP_ONLY;
  }, items);
  let closure_4 = tmp;
  const items1 = [tmp, recipientName];
  return displayItems(() => {
    let intl;
    let intl2;
    let intl3;
    let obj;
    if (obj.FULL_WISHLIST === closure_4) {
      const obj2 = { title: intl3.formatToPlainString(intl5.t["YcL/Vr"], obj3), showIcons: false };
      intl3 = intl5.intl;
      return obj2;
    } else if (tmp2.MIXED === tmp) {
      const obj4 = { title: intl2.formatToPlainString(intl5.t.dIDKgi, obj5), showIcons: true };
      intl2 = intl5.intl;
      return obj4;
    } else {
      obj = { title: intl.string(intl5.t.BCi1gT), showIcons: false };
      intl = intl5.intl;
      return obj;
    }
  }, items1);
});
function getBannerMode(wishlistInDmLength) {
  let SHOP_ONLY;
  let displayItems;
  let totalUnownedWishlistItemCount;
  ({ totalUnownedWishlistItemCount, displayItems } = wishlistInDmLength);
  if (totalUnownedWishlistItemCount >= wishlistInDmLength.wishlistInDmLength) {
    SHOP_ONLY = obj.FULL_WISHLIST;
  } else if (totalUnownedWishlistItemCount > 0) {
    SHOP_ONLY = obj.MIXED;
  } else {
    if (displayItems.length > 0) {
      if (displayItems.every((item) => {
        let sku;
        let source;
        ({ sku, source } = item);
        let isGameItemSKUResult = source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
        if (isGameItemSKUResult) {
          const tmpResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]);
          isGameItemSKUResult = tmpResult.isGameItemSKU(sku);
        }
        return isGameItemSKUResult;
      })) {
        SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
      }
    }
    SHOP_ONLY = obj.SHOP_ONLY;
  }
  return SHOP_ONLY;
}
const result = size.fileFinishedImporting("modules/premium/gifting/utils/WishlistBannerUtils.tsx");

export { BannerMode };
export const BANNER_CONFIG_MOBILE = obj2;
export { getBannerMode };
export const useWishlistBannerConfig = tmp2;