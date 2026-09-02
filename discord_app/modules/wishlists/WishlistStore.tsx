// === Module 10679: get ===

// Module 10679 (get)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import _modDef1205 from "module_1205" /* 1205 */;
import createUserWidgetFromServer from "createUserWidgetFromServer" /* 7375 */;
import fromServer from "fromServer" /* 10680 */;
import closure_5 from "fromServer" /* 10680 */;

({ getWishlistSkuIds: c3, wishlistHasSkuId: c4 } = fromServer);
let closure_6 = {};
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
    let items = callback(data);
  } else {
    items = [];
  }
  return items;
};
prototype["hasSkuId"] = function hasSkuId(arg0, closure_1) {
  const data = this.get(arg0).data;
  let tmp = null != data;
  if (tmp) {
    tmp = callback2(data, closure_1);
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
prototype["getUpdatedAt"] = function getUpdatedAt(arg0) {
  return this.get(arg0).updatedAt;
};
prototype["getLastFetchedAt"] = function getLastFetchedAt(arg0) {
  return this.get(arg0).lastFetchedAt;
};
const wishlistStore = new WishlistStore(dispatcherDefault, {
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
    _modDef1205.captureException(error.error);
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
      obj = { id: null, userId: null, items: null, applications: null };
      obj[0] = tmp2.data.id;
      obj[1] = tmp2.data.userId;
      const items = tmp2.data.items;
      obj[2] = items.filter((skuId) => skuId.skuId !== closure_0);
      obj[3] = tmp2.data.applications;
      const tmp7 = new closure_5(obj);
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
    _modDef1205.captureException(wishlistId.error);
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
    _modDef1205.captureException(error.error);
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
    _modDef1205.captureException(wishlistId.error);
  },
  WISHLIST_ITEM_PURCHASED: function handleWishlistItemPurchased(arg0) {
    ({ recipientId, skuId } = arg0);
    const firstWishlistId = createUserWidgetFromServer.default.getFirstWishlistId(recipientId);
    let tmp2 = null != firstWishlistId;
    if (tmp2) {
      tmp2 = null != dependencyMap[firstWishlistId];
    }
    if (tmp2) {
      tmp2 = null != dependencyMap[firstWishlistId].data;
    }
    if (tmp2) {
      tmp2 = callback2(dependencyMap[firstWishlistId].data, skuId);
    }
    if (tmp2) {
      dependencyMap[firstWishlistId].updatedAt = undefined;
    }
  }
});
const result = set.fileFinishedImporting("modules/wishlists/WishlistStore.tsx");

export default wishlistStore;