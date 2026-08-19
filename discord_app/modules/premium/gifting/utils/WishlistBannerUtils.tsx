// discord_app/modules/premium/gifting/utils/WishlistBannerUtils.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import noop from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";

const useMemo = noop.useMemo;
let obj = { title: null, getSubtitle: null, showIcons: false };
let intl = getSystemLocale.intl;
obj[0] = intl.string(getSystemLocale.t["7lZ31J"]);
obj[1] = function getSubtitle(username) {
  const intl = getSystemLocale.intl;
  return intl.formatToPlainString(getSystemLocale.t.BjEX38, { username });
};
obj[0] = obj;
let obj1 = { title: null, getSubtitle: null, showIcons: true };
let intl2 = getSystemLocale.intl;
obj1[0] = intl2.string(getSystemLocale.t.pWG4ze);
obj1[1] = function getSubtitle(username) {
  const intl = getSystemLocale.intl;
  return intl.formatToPlainString(getSystemLocale.t.dIDKgi, { username });
};
obj[1] = obj1;
let obj2 = { title: null, getSubtitle: null, showIcons: false };
let intl3 = getSystemLocale.intl;
obj2[0] = intl3.string(getSystemLocale.t.SK5rmi);
obj2[1] = function getSubtitle(username) {
  const intl = getSystemLocale.intl;
  return intl.formatToPlainString(getSystemLocale.t.wyMp1j, { username });
};
obj[2] = obj2;
const obj3 = { title: null, getSubtitle: null, showIcons: false };
const intl4 = getSystemLocale.intl;
obj3[0] = intl4.string(getSystemLocale.t.BCi1gT);
obj3[1] = function getSubtitle(username) {
  const intl = getSystemLocale.intl;
  return intl.formatToPlainString(getSystemLocale.t.BjEX38, { username });
};
obj[3] = obj3;
const result = obj132.fileFinishedImporting("modules/premium/gifting/utils/WishlistBannerUtils.tsx");

export const BannerMode = obj;
export const BANNER_CONFIG_MOBILE = obj;
export const getBannerMode = function getBannerMode(wishlistInDmLength) {
  ({ totalUnownedWishlistItemCount, displayItems } = wishlistInDmLength);
  if (totalUnownedWishlistItemCount >= wishlistInDmLength.wishlistInDmLength) {
    let SHOP_ONLY = obj.FULL_WISHLIST;
  } else if (totalUnownedWishlistItemCount > 0) {
    SHOP_ONLY = obj.MIXED;
  } else {
    if (displayItems.length > 0) {
      if (displayItems.every((item, index) => {
        ({ sku, source } = item);
        let isGameItemSKUResult = source === callback(table[2]).WishlistItemSource.POPULAR;
        if (isGameItemSKUResult) {
          isGameItemSKUResult = callback(table[3]).isGameItemSKU(sku);
          const tmpResult = callback(table[3]);
        }
        return isGameItemSKUResult;
      })) {
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
      let SHOP_ONLY = recipientName.FULL_WISHLIST;
    } else if (tmp > 0) {
      SHOP_ONLY = recipientName.MIXED;
    } else {
      if (displayItems.length > 0) {
        if (displayItems.every((item, index) => {
          ({ sku, source } = item);
          let isGameItemSKUResult = source === callback(table[2]).WishlistItemSource.POPULAR;
          if (isGameItemSKUResult) {
            isGameItemSKUResult = callback(table[3]).isGameItemSKU(sku);
            const tmpResult = callback(table[3]);
          }
          return isGameItemSKUResult;
        })) {
          SHOP_ONLY = recipientName.SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_ONLY;
        }
      }
      SHOP_ONLY = recipientName.SHOP_ONLY;
    }
    return SHOP_ONLY;
  }, items);
  closure_4 = tmp;
  const items1 = [tmp, recipientName];
  return displayItems(() => {
    if (recipientName.FULL_WISHLIST === closure_4) {
      const intl3 = totalUnownedWishlistItemCount(wishlistInDmLength[1]).intl;
      obj = { username: null };
      obj[0] = recipientName;
      obj[0] = intl3.formatToPlainString(totalUnownedWishlistItemCount(wishlistInDmLength[1]).t["YcL/Vr"], obj);
      return obj;
    } else if (tmp2.MIXED === tmp) {
      obj1 = { title: null, showIcons: true };
      const intl2 = totalUnownedWishlistItemCount(wishlistInDmLength[1]).intl;
      const obj2 = { username: null };
      obj2[0] = recipientName;
      obj1[0] = intl2.formatToPlainString(totalUnownedWishlistItemCount(wishlistInDmLength[1]).t.dIDKgi, obj2);
      return obj1;
    } else {
      obj = { title: null, showIcons: false };
      const intl = totalUnownedWishlistItemCount(wishlistInDmLength[1]).intl;
      obj[0] = intl.string(totalUnownedWishlistItemCount(wishlistInDmLength[1]).t.BCi1gT);
      return obj;
    }
  }, items1);
};