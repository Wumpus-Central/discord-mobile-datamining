// === Module 12327: getFetchState ===

// Module 12327 (getFetchState)
import { Store } from "initialize";

let closure_0 = {};
let closure_1 = {};
class StorefrontCollectionStore extends Store {
}
const prototype = StorefrontCollectionStore.prototype;
prototype["getFetchState"] = function getFetchState(arg0) {
  let tmp;
  if (null != arg0) {
    let state;
    if (dependencyMap[arg0] != null) {
      state = tmp3.state;
    }
    tmp = state;
  }
  return tmp;
};
prototype["getFetchStateForApplication"] = function getFetchStateForApplication(arg0) {
  let tmp;
  if (null != arg0) {
    let state;
    if (dependencyMap2[arg0] != null) {
      state = tmp3.state;
    }
    tmp = state;
  }
  return tmp;
};
prototype["getFetchedAt"] = function getFetchedAt(arg0) {
  let tmp;
  if (null != arg0) {
    let fetchedAt;
    if (dependencyMap[arg0] != null) {
      fetchedAt = tmp3.fetchedAt;
    }
    tmp = fetchedAt;
  }
  return tmp;
};
prototype["getFetchedAtForApplication"] = function getFetchedAtForApplication(c0) {
  let tmp;
  if (null != c0) {
    let fetchedAt;
    if (dependencyMap2[c0] != null) {
      fetchedAt = tmp3.fetchedAt;
    }
    tmp = fetchedAt;
  }
  return tmp;
};
prototype["getFetchError"] = function getFetchError(arg0) {
  let tmp;
  if (null != arg0) {
    let fetchError;
    if (dependencyMap[arg0] != null) {
      fetchError = tmp3.fetchError;
    }
    tmp = fetchError;
  }
  return tmp;
};
prototype["getFetchErrorForApplication"] = function getFetchErrorForApplication(arg0) {
  let tmp;
  if (null != arg0) {
    let fetchError;
    if (dependencyMap2[arg0] != null) {
      fetchError = tmp3.fetchError;
    }
    tmp = fetchError;
  }
  return tmp;
};
prototype["getCollection"] = function getCollection(item10006) {
  let tmp = null;
  if (null != item10006) {
    tmp = dependencyMap[item10006];
  }
  let collection = null;
  if (null != tmp) {
    let state;
    if (tmp != null) {
      state = tmp.state;
    }
    collection = null;
    if ("error" !== state) {
      collection = null;
      if (null != tmp.collection) {
        collection = tmp.collection;
      }
    }
  }
  return collection;
};
prototype["getFetchParamsForApplication"] = function getFetchParamsForApplication(c0) {
  let tmp = null;
  if (null != c0) {
    tmp = dependencyMap2[c0];
  }
  let state;
  if (tmp != null) {
    state = tmp.state;
  }
  let tmp4;
  if ("success" === state) {
    const obj = { includePricing: null, skuTypes: null };
    ({ includePricing: obj[0], skuTypes: obj[1] } = tmp);
    tmp4 = obj;
  }
  return tmp4;
};
prototype["getCollectionsForApplication"] = function getCollectionsForApplication(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = dependencyMap2[arg0];
  }
  let collections = null;
  if (null != tmp) {
    collections = null;
    if ("error" !== tmp.state) {
      collections = null;
      if (null != tmp.collections) {
        collections = tmp.collections;
      }
    }
  }
  return collections;
};
StorefrontCollectionStore.displayName = "StorefrontCollectionStore";
const storefrontCollectionStore = new StorefrontCollectionStore(require("dispatcher"), {
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function handleCollectionsWithProductsFetch(collectionIds) {
    collectionIds = collectionIds.collectionIds;
    const item = collectionIds.forEach((arg0) => {
      let collection;
      if (table[arg0] != null) {
        collection = tmp2.collection;
      }
      table[arg0] = { state: "loading", collection };
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(arg0) {
    let collectionIds;
    let collections;
    ({ collectionIds, collections } = arg0);
    let closure_0;
    let set;
    closure_0 = Date.now();
    set = new Set();
    const item = collections.forEach((collection) => {
      set.add(collection.id);
      closure_0[collection.id] = { state: "success", collection, fetchedAt: closure_0 };
    });
    const item1 = collectionIds.forEach((arg0) => {
      if (!set.has(arg0)) {
        delete tmp[tmp2];
      }
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function handleCollectionsWithProductsFetchFailure(arg0) {
    let closure_0;
    let collectionIds;
    ({ collectionIds, apiError: closure_0 } = arg0);
    let closure_1;
    closure_1 = Date.now();
    const item = collectionIds.forEach((arg0) => {
      outer1_0[arg0] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function handleCollectionsForApplicationFetch(applicationId) {
    applicationId = applicationId.applicationId;
    let collections;
    if (dependencyMap2[applicationId] != null) {
      collections = tmp2.collections;
    }
    dependencyMap2[applicationId] = { state: "loading", collections };
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(collections) {
    let applicationId;
    let includePricing;
    let skuTypes;
    collections = collections.collections;
    let timestamp;
    ({ applicationId, includePricing, skuTypes } = collections);
    timestamp = Date.now();
    closure_1[applicationId] = { state: "success", collections, fetchedAt: timestamp, includePricing, skuTypes };
    const item = collections.forEach((collection) => {
      timestamp[collection.id] = { state: "success", collection, fetchedAt: timestamp };
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function handleCollectionsForApplicationFetchFailure(arg0) {
    let apiError;
    let applicationId;
    ({ applicationId, apiError } = arg0);
    closure_1[applicationId] = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
  },
  LOGOUT: function handleLogout() {
    let closure_0 = {};
    let closure_1 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontCollectionStore.tsx");

export default storefrontCollectionStore;