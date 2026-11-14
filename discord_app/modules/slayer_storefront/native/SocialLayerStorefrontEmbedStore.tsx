// === Module 12432: SocialLayerStorefrontEmbedStore ===

// Module 12432 (SocialLayerStorefrontEmbedStore)
import initializeDefault from "initialize" /* 504 */;
import discord_common_shallowEqual from "discord_common/shallowEqual" /* 558 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import socialLayerStorefrontEmbedPrice2 from "socialLayerStorefrontEmbedPrice" /* 12433 */;
import _slicedToArray from "module_32" /* 32 */;
import UserProfileStore from "UserProfileStore" /* 7352 */;
import WishlistStore from "WishlistStore" /* 9465 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SKUStore from "SKUStore" /* 7070 */;

require = fn;
function computePrice(arg0) {
  value = SKUStore.get(arg0);
  let socialLayerStorefrontEmbedPrice;
  if (null != value) {
    socialLayerStorefrontEmbedPrice = socialLayerStorefrontEmbedPrice2.getSocialLayerStorefrontEmbedPrice(value);
  }
  return socialLayerStorefrontEmbedPrice;
}
function computeWishlistSkuIds() {
  const id = AuthenticationStore.getId();
  let firstWishlistId = null;
  if (null != id) {
    firstWishlistId = UserProfileStore.getFirstWishlistId(id);
  }
  if (null != firstWishlistId) {
    wishlistItems = WishlistStore.getWishlistItems(firstWishlistId);
  } else {
    wishlistItems = closure_7;
  }
  return wishlistItems;
}
function handlePriceStoresChange() {
  let flag = false;
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let tmp6 = tmp5[1];
    let tmp7 = tmp6;
    let tmp9 = computePrice(tmp5[0]);
    if (tmp9 !== tmp6.price) {
      tmp7.price = tmp10;
      flag = true;
    }
    continue;
  }
  return flag;
}
function handleWishlistStoresChange() {
  if (null == wishlistItems) {
    return false;
  } else {
    const id = AuthenticationStore.getId();
    let firstWishlistId = null;
    if (null != id) {
      firstWishlistId = UserProfileStore.getFirstWishlistId(id);
    }
    if (null != firstWishlistId) {
      wishlistItems = WishlistStore.getWishlistItems(firstWishlistId);
    } else {
      wishlistItems = closure_7;
    }
    const result = discord_common_shallowEqual.areArraysShallowEqual(wishlistItems, wishlistItems);
    let flag = !result;
    if (!result) {
      flag = true;
    }
    return flag;
  }
}
let closure_7 = [];
const map = new Map();
let wishlistItems = null;
let c10 = 0;
const Store = initializeDefault.Store;
class SocialLayerStorefrontEmbedStore extends Store {
}
const prototype = SocialLayerStorefrontEmbedStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, SKUStore, UserProfileStore, WishlistStore);
  this.syncWith(socialLayerStorefrontEmbedPrice2.SOCIAL_LAYER_STOREFRONT_PRICE_STORES, handlePriceStoresChange);
  items = [AuthenticationStore, UserProfileStore, WishlistStore];
  this.syncWith(items, handleWishlistStoresChange);
};
prototype["watch"] = function watch(arg0) {
  closure_0 = arg0;
  if (0 === arg0.length) {
    return () => {

    };
  } else {
    let iter = arg0[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      value = map.get(nextResult);
      let tmp6 = value;
      if (null != value) {
        tmp6.readers = tmp6.readers + 1;
      } else {
        let obj2 = { price: computePrice(tmp4), readers: 1 };
        let result = map.set(tmp4, obj2);
      }
      continue;
    }
    closure_10 = closure_10 + 1;
    if (closure_9 == null) {
      closure_9 = computeWishlistSkuIds();
    }
    return () => {
      (function unwatch(arg0) {
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          value = map.get(nextResult);
          let tmp4 = value;
          let tmp5 = null != value;
          if (tmp5) {
            let diff = tmp4.readers - 1;
            tmp4.readers = diff;
            tmp5 = diff <= 0;
          }
          if (tmp5) {
            let deleteResult = map.delete(tmp2);
          }
          continue;
        }
        diff1 = diff1 - 1;
        if (0 === diff1) {
          c9 = null;
        }
      })(closure_0);
    };
  }
};
prototype["getPrice"] = function getPrice(arg0) {
  value = SKUStore.get(arg0);
  let socialLayerStorefrontEmbedPrice;
  if (null != value) {
    socialLayerStorefrontEmbedPrice = socialLayerStorefrontEmbedPrice2.getSocialLayerStorefrontEmbedPrice(value);
  }
  return socialLayerStorefrontEmbedPrice;
};
prototype["getWishlistSkuIds"] = function getWishlistSkuIds() {
  const id = AuthenticationStore.getId();
  let firstWishlistId = null;
  if (null != id) {
    firstWishlistId = UserProfileStore.getFirstWishlistId(id);
  }
  if (null != firstWishlistId) {
    wishlistItems = WishlistStore.getWishlistItems(firstWishlistId);
  } else {
    wishlistItems = closure_7;
  }
  let tmp6 = wishlistItems;
  if (null != wishlistItems) {
    tmp6 = wishlistItems;
    if (obj.areArraysShallowEqual(wishlistItems, wishlistItems)) {
      tmp6 = wishlistItems;
    }
    obj = discord_common_shallowEqual;
  }
  return tmp6;
};
SocialLayerStorefrontEmbedStore.displayName = "SocialLayerStorefrontEmbedStore";
const socialLayerStorefrontEmbedStore = new SocialLayerStorefrontEmbedStore(DispatcherDefault, {});
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontEmbedStore.tsx");

export default socialLayerStorefrontEmbedStore;