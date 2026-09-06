// === Module 8777: WishlistStore ===

// Module 8777 (WishlistStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;
import WishlistRecord from "WishlistRecord" /* 8778 */;
import size from "module_2" /* 2 */;

({ getWishlistSkuIds: c3, wishlistHasSkuId: closure_4 } = WishlistRecord);
const dependencyMap = {};
const Store = initializeDefault.Store;
class WishlistStore extends Store {
}
const prototype = WishlistStore.prototype;
prototype["get"] = function get(arg0) {
  let obj = dependencyMap[arg0];
  if (obj == null) {
    obj = { data: null, status: "not_loaded" };
  }
  return obj;
};
prototype["getWishlist"] = function getWishlist(wishlistId) {
  return this.get(wishlistId).data;
};
prototype["getWishlistItems"] = function getWishlistItems(arg0) {
  const data = this.get(arg0).data;
  if (null != data) {
    let items = React3(data);
  } else {
    items = [];
  }
  return items;
};
prototype["hasSkuId"] = function hasSkuId(arg0, arg1) {
  const data = this.get(arg0).data;
  let tmp = null != data;
  if (tmp) {
    tmp = React4(data, arg1);
  }
  return tmp;
};
prototype["getStatus"] = function getStatus(arg0) {
  return this.get(arg0).status;
};
prototype["isFetching"] = function isFetching(arg0) {
  return "fetching" === this.getStatus(arg0);
};
prototype["hasError"] = function hasError(arg0) {
  return "error" === this.getStatus(arg0);
};
prototype["getError"] = function getError(arg0) {
  return this.get(arg0).error;
};
prototype["getUpdatedAt"] = function getUpdatedAt(wishlistId) {
  return this.get(wishlistId).updatedAt;
};
prototype["getLastFetchedAt"] = function getLastFetchedAt(arg0) {
  return this.get(arg0).lastFetchedAt;
};
const wishlistStore = new WishlistStore(DispatcherDefault, {
  WISHLIST_FETCH_START: function handleFetchStart(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.status = "fetching";
    tmp2.error = undefined;
  },
  WISHLIST_FETCH_SUCCESS: function handleFetchSuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
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
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.status = "error";
    tmp2.error = wishlistId.error;
  },
  WISHLIST_ADD_SKU_SUCCESS: function handleAddSkuSuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistId.wishlistData;
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_ADD_SKU_FAILURE: function handleAddSkuFailure(error) {
    SentryUtilsDefault.captureException(error.error);
  },
  WISHLIST_REMOVE_SKU_START: function handleRemoveSkuStart(arg0) {
    ({ wishlistId, skuId: require } = arg0);
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      let obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    if (null != tmp2.data) {
      obj = { id: tmp2.data.id, userId: tmp2.data.userId, items: null, applications: null };
      const items = tmp2.data.items;
      obj.items = items.filter((skuId) => skuId.skuId !== require);
      obj.applications = tmp2.data.applications;
      const tmp7 = new WishlistRecord(obj);
      tmp2.data = tmp7;
    }
  },
  WISHLIST_REMOVE_SKU_SUCCESS: function handleRemoveSkuSuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistId.wishlistData;
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_REMOVE_SKU_FAILURE: function handleRemoveSkuFailure(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.updatedAt = undefined;
    SentryUtilsDefault.captureException(wishlistId.error);
  },
  WISHLIST_UPDATE_VISIBILITY_SUCCESS: function handleUpdateVisibilitySuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
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
    SentryUtilsDefault.captureException(error.error);
  },
  WISHLIST_REORDER_START: function handleReorderStart(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistId.newWishlistData;
  },
  WISHLIST_REORDER_SUCCESS: function handleReorderSuccess(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.data = wishlistId.wishlistData;
    tmp2.status = "success";
    tmp2.error = undefined;
    tmp2.lastFetchedAt = Date.now();
  },
  WISHLIST_REORDER_FAILURE: function handleReorderFailure(wishlistId) {
    wishlistId = wishlistId.wishlistId;
    let tmp2 = dependencyMap[wishlistId];
    if (tmp2 == null) {
      const obj = { data: null, status: "not_loaded" };
      tmp[wishlistId] = obj;
      tmp2 = obj;
    }
    tmp2.updatedAt = undefined;
    SentryUtilsDefault.captureException(wishlistId.error);
  },
  WISHLIST_ITEM_PURCHASED: function handleWishlistItemPurchased(arg0) {
    ({ recipientId, skuId } = arg0);
    const firstWishlistId = UserProfileStore.default.getFirstWishlistId(recipientId);
    let tmp2 = null != firstWishlistId;
    if (tmp2) {
      tmp2 = null != dependencyMap[firstWishlistId];
    }
    if (tmp2) {
      tmp2 = null != dependencyMap[firstWishlistId].data;
    }
    if (tmp2) {
      tmp2 = React4(dependencyMap[firstWishlistId].data, skuId);
    }
    if (tmp2) {
      dependencyMap[firstWishlistId].updatedAt = undefined;
    }
    const _default = UserProfileStore.default;
  }
});
const result = size.fileFinishedImporting("modules/wishlists/WishlistStore.tsx");

export default wishlistStore;