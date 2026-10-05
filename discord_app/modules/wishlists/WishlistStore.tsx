// === Module 8431: WishlistStore ===

// Module 8431 (WishlistStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import WishlistRecord_mod from "WishlistRecord" /* 8432 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let WishlistRecord = WishlistRecord_mod;
({ getWishlistSkuIds: c3, wishlistHasSkuId: closure_4 } = WishlistRecord);
WishlistRecord = WishlistRecord_mod;
const metroRequire = {};
const Store = get_initializedDefault.Store;
class WishlistStore extends Store {
  get(arg0) {
    let obj = closure_6[arg0];
    if (obj == null) {
      obj = { data: null, status: "not_loaded" };
    }
    return obj;
  }
  getWishlist(wishlistId) {
    return this.get(wishlistId).data;
  }
  getWishlistItems(arg0) {
    let items;
    const data = this.get(arg0).data;
    if (null != data) {
      items = _false(data);
    } else {
      items = [];
    }
    return items;
  }
  hasSkuId(arg0, arg1) {
    const data = this.get(arg0).data;
    const tmp = null != data && React3(data, arg1);
    return tmp;
  }
  getStatus(arg0) {
    return this.get(arg0).status;
  }
  isFetching(arg0) {
    return "fetching" === this.getStatus(arg0);
  }
  hasError(arg0) {
    return "error" === this.getStatus(arg0);
  }
  getError(arg0) {
    return this.get(arg0).error;
  }
  getUpdatedAt(wishlistId) {
    return this.get(wishlistId).updatedAt;
  }
  getLastFetchedAt(arg0) {
    return this.get(arg0).lastFetchedAt;
  }
}
const prototype = WishlistStore.prototype;
let obj = {
  WISHLIST_FETCH_START: function handleFetchStart(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.status = "fetching";
    tmp2.error = undefined;
  },
  WISHLIST_FETCH_SUCCESS: function handleFetchSuccess(wishlistId) {
    let updatedAt;
    let wishlistData;
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    ({ wishlistData, updatedAt } = wishlistId);
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistData;
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.updatedAt = updatedAt;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_FETCH_FAILURE: function handleFetchFailure(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    const error = wishlistId.error;
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.status = "error";
    tmp2.error = error;
  },
  WISHLIST_ADD_SKU_SUCCESS: function handleAddSkuSuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    const wishlistData = wishlistId.wishlistData;
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistData;
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_ADD_SKU_FAILURE: function handleAddSkuFailure(error) {
    error = error.error;
    const obj = SentryUtilsDefault;
    obj.captureException(error);
  },
  WISHLIST_REMOVE_SKU_START: function handleRemoveSkuStart(arg0) {
    let closure_129_0;
    let items;
    let wishlistId;
    ({ wishlistId, skuId: closure_129_0 } = arg0);
    let tmp2 = closure_6[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    if (null != tmp2.data) {
      const obj2 = { id: tmp2.data.id, userId: tmp2.data.userId, items: items.filter((skuId) => skuId.skuId !== closure_1_0), applications: tmp2.data.applications };
      items = tmp2.data.items;
      const self = this;
      const self2 = this;
      tmp2.data = new WishlistRecord(obj2);
      const tmp5 = new WishlistRecord(obj2);
    }
  },
  WISHLIST_REMOVE_SKU_SUCCESS: function handleRemoveSkuSuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    const wishlistData = wishlistId.wishlistData;
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistData;
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_REMOVE_SKU_FAILURE: function handleRemoveSkuFailure(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    const error = wishlistId.error;
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.updatedAt = undefined;
    const obj2 = SentryUtilsDefault;
    obj2.captureException(error);
  },
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_UPDATE_VISIBILITY_FAILURE: function handleUpdateVisibilityFailure(error) {
    error = error.error;
    const obj = SentryUtilsDefault;
    obj.captureException(error);
  },
  WISHLIST_REORDER_START: function handleReorderStart(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    const newWishlistData = wishlistId.newWishlistData;
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = newWishlistData;
  },
  WISHLIST_REORDER_SUCCESS: function handleReorderSuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    const wishlistData = wishlistId.wishlistData;
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistData;
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_REORDER_FAILURE: function handleReorderFailure(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = closure_6[wishlistId];
    const error = wishlistId.error;
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.updatedAt = undefined;
    const obj2 = SentryUtilsDefault;
    obj2.captureException(error);
  },
  WISHLIST_ITEM_PURCHASED: function handleWishlistItemPurchased(arg0) {
    let recipientId;
    let skuId;
    ({ recipientId, skuId } = arg0);
    const _default = UserProfileStore.default;
    const firstWishlistId = _default.getFirstWishlistId(recipientId);
    const tmp2 = null != firstWishlistId && null != closure_6[firstWishlistId] && null != closure_6[firstWishlistId].data && React3(closure_6[firstWishlistId].data, skuId);
    if (tmp2) {
      closure_6[firstWishlistId].updatedAt = undefined;
    }
  }
};
const wishlistStore = new WishlistStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/wishlists/WishlistStore.tsx");

export default wishlistStore;