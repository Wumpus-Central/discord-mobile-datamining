// === Module 12801: getFetchState ===

// Module 12801 (getFetchState)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let closure_0 = {};
let closure_1 = {};
let closure_2 = {};
let closure_3 = {};
let closure_4 = {};
let closure_5 = {};
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
prototype["getCollectionPageFetchState"] = function getCollectionPageFetchState(arg0) {
  let state;
  if (dependencyMap3[arg0] != null) {
    state = tmp.state;
  }
  return state;
};
prototype["getCollectionPageFetchedAt"] = function getCollectionPageFetchedAt(arg0) {
  let fetchedAt;
  if (dependencyMap3[arg0] != null) {
    fetchedAt = tmp.fetchedAt;
  }
  return fetchedAt;
};
prototype["getCollectionPageIds"] = function getCollectionPageIds(arg0) {
  let collectionIds = null;
  if (null != dependencyMap3[arg0]) {
    collectionIds = null;
    if ("error" !== tmp.state) {
      collectionIds = null;
      if (null != tmp.collectionIds) {
        collectionIds = tmp.collectionIds;
      }
    }
  }
  return collectionIds;
};
prototype["getCollectionListTotal"] = function getCollectionListTotal(arg0) {
  return table[arg0];
};
prototype["getCollectionsAfterFetchState"] = function getCollectionsAfterFetchState(arg0) {
  let state;
  if (dependencyMap4[arg0] != null) {
    state = tmp.state;
  }
  return state;
};
prototype["getCollectionsAfterFetchedAt"] = function getCollectionsAfterFetchedAt(arg0) {
  let fetchedAt;
  if (dependencyMap4[arg0] != null) {
    fetchedAt = tmp.fetchedAt;
  }
  return fetchedAt;
};
prototype["getCollectionsAfterIds"] = function getCollectionsAfterIds(arg0) {
  let collectionIds = null;
  if (null != dependencyMap4[arg0]) {
    collectionIds = null;
    if ("error" !== tmp.state) {
      collectionIds = null;
      if (null != tmp.collectionIds) {
        collectionIds = tmp.collectionIds;
      }
    }
  }
  return collectionIds;
};
prototype["getCollectionOrSummary"] = function getCollectionOrSummary(item10006) {
  let tmp = null;
  if (null != item10006) {
    const self = this;
    let collection = this.getCollection(item10006);
    if (collection == null) {
      collection = table2[item10006];
    }
    if (collection == null) {
      collection = null;
    }
    tmp = collection;
  }
  return tmp;
};
StorefrontCollectionStore.displayName = "StorefrontCollectionStore";
const storefrontCollectionStore = new StorefrontCollectionStore(dispatcherDefault, {
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
    ({ collectionIds, collections } = arg0);
    closure_0 = undefined;
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
    ({ collectionIds, apiError: closure_0 } = arg0);
    closure_1 = undefined;
    closure_1 = Date.now();
    const item = collectionIds.forEach((arg0) => {
      closure_1_0[arg0] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
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
    let timestamp;
    ({ applicationId, includePricing, skuTypes } = collections);
    timestamp = Date.now();
    closure_1[applicationId] = { state: "success", collections, fetchedAt: timestamp, includePricing, skuTypes };
    const item = collections.forEach((collection) => {
      timestamp[collection.id] = { state: "success", collection, fetchedAt: timestamp };
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function handleCollectionsForApplicationFetchFailure(arg0) {
    ({ applicationId, apiError } = arg0);
    closure_1[applicationId] = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH: function handleCollectionsForApplicationPageFetch(pageKey) {
    pageKey = pageKey.pageKey;
    let collectionIds;
    if (dependencyMap3[pageKey] != null) {
      collectionIds = tmp2.collectionIds;
    }
    dependencyMap3[pageKey] = { state: "loading", collectionIds };
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function handleCollectionsForApplicationPageFetchSuccess(collections) {
    collections = collections.collections;
    let timestamp;
    ({ pageKey, listKey, total } = collections);
    timestamp = Date.now();
    closure_2[pageKey] = { state: "success", collectionIds: collections.map((id) => id.id), fetchedAt: timestamp };
    closure_3[listKey] = total;
    const item = collections.forEach((collection) => {
      timestamp[collection.id] = { state: "success", collection, fetchedAt: timestamp };
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE: function handleCollectionsForApplicationPageFetchFailure(arg0) {
    ({ pageKey, apiError } = arg0);
    closure_2[pageKey] = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
  },
  STOREFRONT_COLLECTIONS_AFTER_FETCH: function handleCollectionsAfterFetch(requestKey) {
    requestKey = requestKey.requestKey;
    let collectionIds;
    if (dependencyMap4[requestKey] != null) {
      collectionIds = tmp2.collectionIds;
    }
    dependencyMap4[requestKey] = { state: "loading", collectionIds };
  },
  STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS: function handleCollectionsAfterFetchSuccess(collections) {
    collections = collections.collections;
    closure_4[collections.requestKey] = { state: "success", collectionIds: collections.map((id) => id.id), fetchedAt: Date.now() };
    const item = collections.forEach((id) => {
      closure_5[id.id] = id;
    });
  },
  STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE: function handleCollectionsAfterFetchFailure(arg0) {
    ({ requestKey, apiError } = arg0);
    closure_4[requestKey] = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
    closure_1 = {};
    closure_2 = {};
    closure_3 = {};
    closure_4 = {};
    closure_5 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontCollectionStore.tsx");

export default storefrontCollectionStore;