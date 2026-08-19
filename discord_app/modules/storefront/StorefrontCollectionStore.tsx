// discord_app/modules/storefront/StorefrontCollectionStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

let closure_0 = {};
let closure_1 = {};
const Store = initializeDefault.Store;
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
const storefrontCollectionStore = new StorefrontCollectionStore(dispatcherDefault, {
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function handleCollectionsWithProductsFetch(collectionIds) {
    collectionIds = collectionIds.collectionIds;
    const item = collectionIds.forEach((item, index) => {
      let collection;
      if (table[item] != null) {
        collection = tmp2.collection;
      }
      table[item] = { state: "loading", collection };
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(arg0) {
    ({ collectionIds, collections } = arg0);
    closure_0 = Date.now();
    const set = new Set();
    const item = collections.forEach((item, index) => {
      set.add(item.id);
      closure_0[item.id] = { state: "success", collection: item, fetchedAt: closure_0 };
    });
    const item1 = collectionIds.forEach((item, index) => {
      if (!set.has(item)) {
        delete tmp[tmp2];
      }
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function handleCollectionsWithProductsFetchFailure(arg0) {
    ({ collectionIds, apiError: closure_0 } = arg0);
    closure_1 = Date.now();
    const item = collectionIds.forEach((item, index) => {
      closure_1_0[item] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
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
    collections = collections.collections;
    ({ applicationId, includePricing, skuTypes } = collections);
    const timestamp = Date.now();
    closure_1[applicationId] = { state: "success", collections, fetchedAt: timestamp, includePricing, skuTypes };
    const item = collections.forEach((item, index) => {
      timestamp[item.id] = { state: "success", collection: item, fetchedAt: timestamp };
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function handleCollectionsForApplicationFetchFailure(arg0) {
    ({ applicationId, apiError } = arg0);
    closure_1[applicationId] = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
    closure_1 = {};
  }
});
const result = require("obj132").fileFinishedImporting("modules/storefront/StorefrontCollectionStore.tsx");

export default storefrontCollectionStore;