// discord_app/modules/premium/gifting/utils/WishlistBannerUtils.tsx
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
const BannerMode = {
  FULL_WISHLIST: "FULL_WISHLIST",
  MIXED: "MIXED",
  SHOP_ONLY: "SHOP_ONLY",
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY",
};
let obj2 = { FULL_WISHLIST: null, MIXED: null, SHOP_ONLY: null, SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: null };
let obj3 = { title: null, getSubtitle: null, showIcons: false };
let intl = util.intl;
obj3.title = intl.string(util.t["7lZ31J"]);
obj3.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.BjEX38, { username });
};
obj2.FULL_WISHLIST = obj3;
let obj4 = { title: null, getSubtitle: null, showIcons: true };
let intl2 = util.intl;
obj4.title = intl2.string(util.t.pWG4ze);
obj4.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.dIDKgi, { username });
};
obj2.MIXED = obj4;
let obj5 = { title: null, getSubtitle: null, showIcons: false };
let intl3 = util.intl;
obj5.title = intl3.string(util.t.SK5rmi);
obj5.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.wyMp1j, { username });
};
obj2.SHOP_ONLY = obj5;
let obj6 = { title: null, getSubtitle: null, showIcons: false };
const intl4 = util.intl;
obj6.title = intl4.string(util.t.BCi1gT);
obj6.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.BjEX38, { username });
};
obj2.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY = obj6;
function getBannerMode(wishlistInDmLength) {
  ({ totalUnownedWishlistItemCount, displayItems } = wishlistInDmLength);
  if (totalUnownedWishlistItemCount >= wishlistInDmLength.wishlistInDmLength) {
    let SHOP_ONLY = obj.FULL_WISHLIST;
  } else if (totalUnownedWishlistItemCount > 0) {
    SHOP_ONLY = obj.MIXED;
  } else {
    if (displayItems.length > 0) {
      if (
        displayItems.every((item) => {
          ({ sku, source } = item);
          let isGameItemSKUResult =
            source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
          if (isGameItemSKUResult) {
            isGameItemSKUResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]).isGameItemSKU(sku);
            const tmpResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]);
          }
          return isGameItemSKUResult;
        })
      ) {
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
export const useWishlistBannerConfig = ReactCompilerGating.isReactCompilerEnabled()
  ? function useWishlistBannerConfig(wishlistInDmLength) {
      const obj = c;
      const cResult = obj.c(9);
      ({ totalUnownedWishlistItemCount, displayItems, recipientName } = wishlistInDmLength);
      if (totalUnownedWishlistItemCount >= wishlistInDmLength.wishlistInDmLength) {
        let SHOP_ONLY = obj.FULL_WISHLIST;
        let tmp4 = obj;
      } else if (totalUnownedWishlistItemCount > 0) {
        SHOP_ONLY = obj.MIXED;
        tmp4 = obj;
      } else {
        if (displayItems.length > 0) {
          if (
            displayItems.every((item) => {
              ({ sku, source } = item);
              let isGameItemSKUResult =
                source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
              if (isGameItemSKUResult) {
                isGameItemSKUResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]).isGameItemSKU(sku);
                const tmpResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]);
              }
              return isGameItemSKUResult;
            })
          ) {
            SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
            tmp4 = obj;
          }
        }
        tmp4 = obj;
        SHOP_ONLY = obj.SHOP_ONLY;
      }
      if (tmp4.FULL_WISHLIST === SHOP_ONLY) {
        if (cResult[0] !== recipientName) {
          const intl3 = util.intl;
          const obj2 = { username: recipientName };
          const formatToPlainStringResult = intl3.formatToPlainString(util.t["YcL/Vr"], obj2);
          cResult[0] = recipientName;
          cResult[1] = formatToPlainStringResult;
          let tmp13 = formatToPlainStringResult;
        } else {
          tmp13 = cResult[1];
        }
        if (cResult[2] !== tmp13) {
          const obj3 = { title: tmp13, showIcons: false };
          cResult[2] = tmp13;
          cResult[3] = obj3;
        }
      } else {
        if (tmp4.MIXED === SHOP_ONLY) {
          if (cResult[4] !== recipientName) {
            const intl2 = util.intl;
            const obj4 = { username: recipientName };
            const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.dIDKgi, obj4);
            cResult[4] = recipientName;
            cResult[5] = formatToPlainStringResult1;
            let tmp10 = formatToPlainStringResult1;
          } else {
            tmp10 = cResult[5];
          }
          if (cResult[6] !== tmp10) {
            const obj5 = { title: tmp10, showIcons: true };
            cResult[6] = tmp10;
            cResult[7] = obj5;
            let tmp12 = obj5;
          } else {
            tmp12 = cResult[7];
          }
          let tmp9 = tmp12;
        } else {
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const obj6 = { title: null, showIcons: false };
            const intl = util.intl;
            obj6.title = intl.string(util.t.BCi1gT);
            cResult[8] = obj6;
            tmp9 = obj6;
          } else {
            tmp9 = cResult[8];
          }
        }
        return tmp9;
      }
    }
  : function useWishlistBannerConfig(totalUnownedWishlistItemCount) {
      totalUnownedWishlistItemCount = totalUnownedWishlistItemCount.totalUnownedWishlistItemCount;
      const wishlistInDmLength = totalUnownedWishlistItemCount.wishlistInDmLength;
      const displayItems = totalUnownedWishlistItemCount.displayItems;
      const recipientName = totalUnownedWishlistItemCount.recipientName;
      const items = [totalUnownedWishlistItemCount, wishlistInDmLength, displayItems];
      const tmp = displayItems(() => {
        if (totalUnownedWishlistItemCount >= wishlistInDmLength) {
          let SHOP_ONLY = obj.FULL_WISHLIST;
        } else if (tmp > 0) {
          SHOP_ONLY = obj.MIXED;
        } else {
          if (displayItems.length > 0) {
            if (
              displayItems.every((item) => {
                ({ sku, source } = item);
                let isGameItemSKUResult =
                  source === totalUnownedWishlistItemCount(wishlistInDmLength[2]).WishlistItemSource.POPULAR;
                if (isGameItemSKUResult) {
                  isGameItemSKUResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]).isGameItemSKU(sku);
                  const tmpResult = totalUnownedWishlistItemCount(wishlistInDmLength[3]);
                }
                return isGameItemSKUResult;
              })
            ) {
              SHOP_ONLY = obj.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
            }
          }
          SHOP_ONLY = obj.SHOP_ONLY;
        }
        return SHOP_ONLY;
      }, items);
      closure_4 = tmp;
      const items1 = [tmp, recipientName];
      return displayItems(() => {
        if (obj.FULL_WISHLIST === closure_4) {
          const obj2 = { title: null, showIcons: false };
          const intl3 = util.intl;
          const obj3 = { username: recipientName };
          obj2.title = intl3.formatToPlainString(util.t["YcL/Vr"], obj3);
          return obj2;
        } else if (tmp2.MIXED === tmp) {
          const obj4 = { title: null, showIcons: true };
          const intl2 = util.intl;
          const obj5 = { username: recipientName };
          obj4.title = intl2.formatToPlainString(util.t.dIDKgi, obj5);
          return obj4;
        } else {
          obj = { title: null, showIcons: false };
          const intl = util.intl;
          obj.title = intl.string(util.t.BCi1gT);
          return obj;
        }
      }, items1);
    };
