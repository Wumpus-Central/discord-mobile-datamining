// discord_app/modules/storefront/StorefrontCollectionStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0, closure_1, closure_2, closure_3, closure_4, closure_5, set;

const React = {};
const React2 = {};
const _false = {};
const React3 = {};
const hasOwnProperty = {};
const Store = get_initializedDefault.Store;
class StorefrontCollectionStore extends Store {
  getFetchState(arg0) {
    let tmp;
    if (null != arg0) {
      let state;
      if (closure_0[arg0] != null) {
        state = tmp3.state;
      }
      tmp = state;
    }
    return tmp;
  }
  getFetchStateForApplication(arg0) {
    let tmp;
    if (null != arg0) {
      let state;
      if (closure_1[arg0] != null) {
        state = tmp3.state;
      }
      tmp = state;
    }
    return tmp;
  }
  getFetchedAt(arg0) {
    let tmp;
    if (null != arg0) {
      let fetchedAt;
      if (closure_0[arg0] != null) {
        fetchedAt = tmp3.fetchedAt;
      }
      tmp = fetchedAt;
    }
    return tmp;
  }
  getFetchedAtForApplication(c0) {
    let tmp;
    if (null != c0) {
      let fetchedAt;
      if (closure_1[c0] != null) {
        fetchedAt = tmp3.fetchedAt;
      }
      tmp = fetchedAt;
    }
    return tmp;
  }
  getFetchError(arg0) {
    let tmp;
    if (null != arg0) {
      let fetchError;
      if (closure_0[arg0] != null) {
        fetchError = tmp3.fetchError;
      }
      tmp = fetchError;
    }
    return tmp;
  }
  getFetchErrorForApplication(arg0) {
    let tmp;
    if (null != arg0) {
      let fetchError;
      if (closure_1[arg0] != null) {
        fetchError = tmp3.fetchError;
      }
      tmp = fetchError;
    }
    return tmp;
  }
  getCollection(item10006) {
    let tmp = null;
    if (null != item10006) {
      tmp = closure_0[item10006];
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
  }
  hasPricingCoverage(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let includePricing;
      if (closure_0[arg0] != null) {
        includePricing = tmp3.includePricing;
      }
      tmp = includePricing;
    }
    return true === tmp;
  }
  getFetchParamsForApplication(c0) {
    let tmp = null;
    if (null != c0) {
      tmp = closure_1[c0];
    }
    let state;
    if (tmp != null) {
      state = tmp.state;
    }
    let tmp4;
    if ("success" === state) {
      const obj = { includePricing: null, skuTypes: null };
      ({ includePricing: obj.includePricing, skuTypes: obj.skuTypes } = tmp);
      tmp4 = obj;
    }
    return tmp4;
  }
  getCollectionsForApplication(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_1[arg0];
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
  }
  getCollectionPageFetchState(arg0) {
    let state;
    if (closure_2[arg0] != null) {
      state = tmp.state;
    }
    return state;
  }
  getCollectionPageFetchedAt(arg0) {
    let fetchedAt;
    if (closure_2[arg0] != null) {
      fetchedAt = tmp.fetchedAt;
    }
    return fetchedAt;
  }
  getCollectionPageIds(arg0) {
    let collectionIds = null;
    if (null != closure_2[arg0]) {
      collectionIds = null;
      if ("error" !== closure_2[arg0].state) {
        collectionIds = null;
        if (null != closure_2[arg0].collectionIds) {
          collectionIds = tmp.collectionIds;
        }
      }
    }
    return collectionIds;
  }
  getCollectionListTotal(arg0) {
    return closure_3[arg0];
  }
  getCollectionsAfterFetchState(arg0) {
    let state;
    if (closure_4[arg0] != null) {
      state = tmp.state;
    }
    return state;
  }
  getCollectionsAfterFetchedAt(arg0) {
    let fetchedAt;
    if (closure_4[arg0] != null) {
      fetchedAt = tmp.fetchedAt;
    }
    return fetchedAt;
  }
  getCollectionsAfterIds(arg0) {
    let collectionIds = null;
    if (null != closure_4[arg0]) {
      collectionIds = null;
      if ("error" !== closure_4[arg0].state) {
        collectionIds = null;
        if (null != closure_4[arg0].collectionIds) {
          collectionIds = tmp.collectionIds;
        }
      }
    }
    return collectionIds;
  }
  getCollectionOrSummary(item10006) {
    let tmp = null;
    if (null != item10006) {
      const self = this;
      let collection = this.getCollection(item10006);
      if (collection == null) {
        collection = closure_5[item10006];
      }
      if (collection == null) {
        collection = null;
      }
      tmp = collection;
    }
    return tmp;
  }
}
const prototype = StorefrontCollectionStore.prototype;
StorefrontCollectionStore.displayName = "StorefrontCollectionStore";
let obj = {
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH: function handleCollectionsWithProductsFetch(arg0) {
    let collectionIds;
    ({ collectionIds, includePricing: closure_0 } = arg0);
    const item = collectionIds.forEach((item) => {
      let tmp4;
      let collection;
      if (closure_0[item] != null) {
        collection = tmp.collection;
      }
      const obj = { state: "loading", collection, includePricing: tmp4 };
      tmp4 = closure_0;
      if (!tmp4) {
        let collection1;
        if (closure_0[item] != null) {
          collection1 = tmp.collection;
        }
        tmp4 = null != collection1 && true === tmp.includePricing;
        const tmp6 = null != collection1 && true === tmp.includePricing;
      }
      closure_0[item] = obj;
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(arg0) {
    let collectionIds;
    let collections;
    let includePricing;
    ({ collectionIds, collections, includePricing: closure_0 } = arg0);
    const fetchedAt = Date.now();
    set = new Set();
    const item = collections.forEach((collection) => {
      set.add(collection.id);
      if (!includePricing) {
        let state;
        if (includePricing[collection.id] != null) {
          state = tmp2.state;
        }
        if ("success" === state) {
          if (includePricing[collection.id].includePricing) {
            const id = collection.id;
            const obj = { fetchedAt };
            const merged = Object.assign(tmp2);
            includePricing[id] = obj;
          }
        }
      }
      const obj2 = { state: "success", collection, fetchedAt, includePricing };
      includePricing[collection.id] = obj2;
    });
    const item1 = collectionIds.forEach((item) => {
      const tmp = item;
      if (!set.has(item)) {
        delete closure_0[tmp];
      }
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_FAILURE: function handleCollectionsWithProductsFetchFailure(arg0) {
    let collectionIds;
    let fetchError;
    ({ collectionIds, apiError: closure_0 } = arg0);
    const fetchedAt = Date.now();
    const item = collectionIds.forEach((item) => {
      const obj = { state: "error", fetchedAt, fetchError };
      fetchError[item] = obj;
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH: function handleCollectionsForApplicationFetch(applicationId) {
    applicationId = applicationId.applicationId;
    let collections;
    if (closure_1[applicationId] != null) {
      collections = tmp2.collections;
    }
    closure_1[applicationId] = { state: "loading", collections };
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(arg0) {
    let applicationId;
    let collections;
    let includePricing;
    let skuTypes;
    ({ collections, includePricing } = arg0);
    ({ applicationId, skuTypes } = arg0);
    const timestamp = Date.now();
    timestamp[applicationId] = { state: "success", collections, fetchedAt: timestamp, includePricing, skuTypes };
    const item = collections.forEach((collection) => {
      const obj = { state: "success", collection, fetchedAt: timestamp, includePricing };
      closure_0[collection.id] = obj;
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_FAILURE: function handleCollectionsForApplicationFetchFailure(arg0) {
    let apiError;
    let applicationId;
    const obj = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
    ({ applicationId, apiError } = arg0);
    closure_1[applicationId] = obj;
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH: function handleCollectionsForApplicationPageFetch(pageKey) {
    pageKey = pageKey.pageKey;
    let collectionIds;
    if (closure_2[pageKey] != null) {
      collectionIds = tmp2.collectionIds;
    }
    closure_2[pageKey] = { state: "loading", collectionIds };
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function handleCollectionsForApplicationPageFetchSuccess(
    collections,
  ) {
    let listKey;
    let pageKey;
    let total;
    collections = collections.collections;
    ({ pageKey, listKey, total } = collections);
    const timestamp = Date.now();
    let obj = { state: "success", collectionIds: collections.map((id) => id.id), fetchedAt: timestamp };
    closure_2[pageKey] = obj;
    closure_3[listKey] = total;
    const item = collections.forEach((collection) => {
      const obj = { state: "success", collection, fetchedAt: timestamp, includePricing: true };
      closure_0[collection.id] = obj;
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_FAILURE: function handleCollectionsForApplicationPageFetchFailure(
    arg0,
  ) {
    let apiError;
    let pageKey;
    const obj = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
    ({ pageKey, apiError } = arg0);
    closure_2[pageKey] = obj;
  },
  STOREFRONT_COLLECTIONS_AFTER_FETCH: function handleCollectionsAfterFetch(requestKey) {
    requestKey = requestKey.requestKey;
    let collectionIds;
    if (closure_4[requestKey] != null) {
      collectionIds = tmp2.collectionIds;
    }
    closure_4[requestKey] = { state: "loading", collectionIds };
  },
  STOREFRONT_COLLECTIONS_AFTER_FETCH_SUCCESS: function handleCollectionsAfterFetchSuccess(collections) {
    const f97741 = (id) => id.id;
    collections = collections.collections;
    closure_4[collections.requestKey] = {
      state: "success",
      collectionIds: collections.map(f97741),
      fetchedAt: Date.now(),
    };
    ({ state: "success", collectionIds: collections.map(f97741), fetchedAt: Date.now() });
    const item = collections.forEach((id) => {
      closure_1_5[id.id] = id;
    });
  },
  STOREFRONT_COLLECTIONS_AFTER_FETCH_FAILURE: function handleCollectionsAfterFetchFailure(arg0) {
    let apiError;
    let requestKey;
    const obj = { state: "error", fetchedAt: Date.now(), fetchError: apiError };
    ({ requestKey, apiError } = arg0);
    closure_4[requestKey] = obj;
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
    closure_1 = {};
    closure_2 = {};
    closure_3 = {};
    closure_4 = {};
    closure_5 = {};
  },
};
const storefrontCollectionStore = new StorefrontCollectionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/storefront/StorefrontCollectionStore.tsx");

export default storefrontCollectionStore;
