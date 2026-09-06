// discord_app/modules/premium/gifting/utils/WishlistBannerUtils.tsx
import _mod19 from "../../../../../_runtime/metro/00019__.js";
import util from "../../../../intl/index.native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useMemo = _mod19.useMemo;
let BANNER_CONFIG_MOBILE = {
  FULL_WISHLIST: "FULL_WISHLIST",
  MIXED: "MIXED",
  SHOP_ONLY: "SHOP_ONLY",
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: "SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY",
};
BANNER_CONFIG_MOBILE = {
  FULL_WISHLIST: null,
  MIXED: null,
  SHOP_ONLY: null,
  SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY: null,
};
BANNER_CONFIG_MOBILE = { title: null, getSubtitle: null, showIcons: false };
let intl = util.intl;
BANNER_CONFIG_MOBILE.title = intl.string(util.t["7lZ31J"]);
BANNER_CONFIG_MOBILE.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.BjEX38, { username });
};
BANNER_CONFIG_MOBILE.FULL_WISHLIST = BANNER_CONFIG_MOBILE;
let obj1 = { title: null, getSubtitle: null, showIcons: true };
let intl2 = util.intl;
obj1.title = intl2.string(util.t.pWG4ze);
obj1.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.dIDKgi, { username });
};
BANNER_CONFIG_MOBILE.MIXED = obj1;
let obj2 = { title: null, getSubtitle: null, showIcons: false };
let intl3 = util.intl;
obj2.title = intl3.string(util.t.SK5rmi);
obj2.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.wyMp1j, { username });
};
BANNER_CONFIG_MOBILE.SHOP_ONLY = obj2;
const obj3 = { title: null, getSubtitle: null, showIcons: false };
const intl4 = util.intl;
obj3.title = intl4.string(util.t.BCi1gT);
obj3.getSubtitle = function getSubtitle(username) {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.BjEX38, { username });
};
BANNER_CONFIG_MOBILE.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY = obj3;
const result = size.fileFinishedImporting("modules/premium/gifting/utils/WishlistBannerUtils.tsx");

export const BannerMode = BANNER_CONFIG_MOBILE;
export { BANNER_CONFIG_MOBILE };
export const getBannerMode = function getBannerMode(wishlistInDmLength) {
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
};
export const useWishlistBannerConfig = function useWishlistBannerConfig(totalUnownedWishlistItemCount) {
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
      if (arr.length > 0) {
        if (
          arr.every((item) => {
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
      obj = { title: null, showIcons: false };
      const intl3 = util.intl;
      obj = { username: recipientName };
      obj.title = intl3.formatToPlainString(util.t["YcL/Vr"], obj);
      return obj;
    } else if (tmp2.MIXED === tmp) {
      const obj1 = { title: null, showIcons: true };
      const intl2 = util.intl;
      const obj2 = { username: recipientName };
      obj1.title = intl2.formatToPlainString(util.t.dIDKgi, obj2);
      return obj1;
    } else {
      obj = { title: null, showIcons: false };
      const intl = util.intl;
      obj.title = intl.string(util.t.BCi1gT);
      return obj;
    }
  }, items1);
};
