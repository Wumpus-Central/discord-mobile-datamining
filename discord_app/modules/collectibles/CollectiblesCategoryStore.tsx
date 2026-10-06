// === Module 7066: CollectiblesCategoryStore ===

// Module 7066 (CollectiblesCategoryStore)
import _mod12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7078 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import CollectiblesCategoryRecord from "CollectiblesCategoryRecord" /* 7067 */;
import size from "module_2" /* 2 */;

let closure_13, closure_14, closure_9;

function updateCategoriesAndProducts(map) {
  const f94214 = (storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  };
  closure_14 = map;
  let items = [...closure_14.values()];
  map = new Map(items.map((storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  }));
  const obj = CollectiblesUtils;
  const productsFromCategories = obj.getProductsFromCategories(closure_14, true);
  map1 = new Map(productsFromCategories.map((skuId) => {
    const items = [skuId.skuId, skuId];
    return items;
  }));
  const item = closure_9.forEach((skuId) => {
    if (!map1.has(skuId.skuId)) {
      const result = map1.set(skuId.skuId, skuId);
    }
  });
  closure_9 = map1;
  const obj2 = CollectiblesUtils;
  const productsFromCategories1 = obj2.getProductsFromCategories(closure_14, false);
  closure_11 = [...new Map(productsFromCategories1.map(f94214)).values()];
  map2 = new Map(productsFromCategories1.map(f94214));
}
function reset() {
  closure_14 = map;
  closure_9 = map1;
  closure_18 = undefined;
  c16 = false;
  closure_13 = {};
  const values = Object.values(closure_12);
  const item = values.forEach((cancel) => cancel.cancel());
  closure_12 = {};
  error = undefined;
  closure_19 = undefined;
  options = {};
  skipNumCategories = 0;
}
let closure_5 = 10 * DurationsDefault.Millis.SECOND;
let closure_6 = 10 * DurationsDefault.Millis.MINUTE;
let map = new Map();
let map1 = new Map();
let map2 = new Map();
const React4 = map1;
let closure_11 = [];
let closure_12 = {};
map1 = {};
const authStore2 = map;
map = new Map();
let c16 = false;
let error;
let closure_18;
let closure_19;
let options = {};
let skipNumCategories = 0;
new Map();
const Store = get_initializedDefault.Store;
class CollectiblesCategoryStore extends Store {
  initialize() {
    const items = [LocaleStore];
    this.syncWith(items, reset);
  }
  isFetchingProduct(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let state;
      if (closure_13[arg0] != null) {
        state = tmp3.state;
      }
      tmp = "fetching" === state;
    }
    return tmp;
  }
  isProductFetchBackedOff(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      let pending;
      if (closure_12[arg0] != null) {
        pending = tmp3.pending;
      }
      tmp = true === pending;
    }
    return tmp;
  }
  getCategory(arg0) {
    let value;
    if (null != arg0) {
      value = closure_14.get(arg0);
    }
    return value;
  }
  getProduct(arg0) {
    let value;
    if (null != arg0) {
      value = closure_9.get(arg0);
    }
    return value;
  }
  getProductsBySkus(arr) {
    const mapped = arr.map((item) => closure_1_9.get(item));
    return mapped.filter((item) => null != item);
  }
  getProductFetch(skuId) {
    let tmp;
    if (null != skuId) {
      tmp = closure_13[skuId];
    }
    return tmp;
  }
  getProductByStoreListingId(variantGroupStoreListingId) {
    let value;
    if (null != variantGroupStoreListingId) {
      value = map2.get(variantGroupStoreListingId);
    }
    return value;
  }
  getCategoryByStoreListingId(categoryStoreListingId) {
    let value;
    if (null != categoryStoreListingId) {
      value = map.get(categoryStoreListingId);
    }
    return value;
  }
  getCategoryForProduct(initialProductSkuId) {
    const product = this.getProduct(initialProductSkuId);
    let categorySkuId;
    const getCategory = this.getCategory;
    if (product != null) {
      categorySkuId = product.categorySkuId;
    }
    return getCategory(categorySkuId);
  }
}
const prototype = CollectiblesCategoryStore.prototype;
Object.defineProperty(prototype, "isFetchingCategories", {
  get: function isFetchingCategories() {
    return c16;
  },
  set: undefined
});
Object.defineProperty(prototype, "error", {
  get: function error() {
    return error;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastErrorTimestamp", {
  get: function lastErrorTimestamp() {
    return closure_19;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastSuccessfulFetch", {
  get: function lastSuccessfulFetch() {
    return closure_18;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchOptions", {
  get: function lastFetchOptions() {
    return options;
  },
  set: undefined
});
Object.defineProperty(prototype, "categories", {
  get: function categories() {
    return closure_14;
  },
  set: undefined
});
Object.defineProperty(prototype, "products", {
  get: function products() {
    return closure_9;
  },
  set: undefined
});
Object.defineProperty(prototype, "productsWithVariantsAsGroup", {
  get: function productsWithVariantsAsGroup() {
    return closure_11;
  },
  set: undefined
});
Object.defineProperty(prototype, "skipNumCategories", {
  get: function skipNumCategories() {
    return skipNumCategories;
  },
  set: undefined
});
CollectiblesCategoryStore.displayName = "CollectiblesCategoryStore";
let obj = {
  COLLECTIBLES_CATEGORIES_FETCH: function handleFetchCategories(options) {
    c16 = true;
    error = undefined;
    closure_19 = undefined;
    options = options.options;
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: function handleFetchCategoriesSuccess(categories) {
    let mapped;
    if (categories.categories.collections.length > 0) {
      const collections = categories.categories.collections;
      mapped = collections.map(CollectiblesCategoryRecord.fromStorefrontCollectionRecord);
    } else {
      mapped = categories.categories.categories;
    }
    if (0 === mapped.length) {
      closure_14 = map;
      closure_9 = map1;
    } else {
      const isEqual = _mod12.isEqual;
      let items = [];
      _mod12;
      HermesBuiltin.arraySpread(items, closure_14.values(), 0);
      if (!isEqual(items, mapped)) {
        if (!categories.noOp) {
          const _Map = Map;
          const self = this;
          const self2 = this;
          map = new Map(mapped.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
          const _Date = Date;
          const self3 = this;
          const self4 = this;
          const date = new Date();
          const item = closure_14.forEach((unpublishedAt, index) => {
            const hasItem = map.has(index);
            let tmp2 = !hasItem;
            if (tmp2) {
              tmp2 = null == unpublishedAt.unpublishedAt || unpublishedAt.unpublishedAt > date;
              const tmp4 = null == unpublishedAt.unpublishedAt || unpublishedAt.unpublishedAt > date;
            }
            if (tmp2) {
              const result = map.set(index, unpublishedAt);
            }
          });
          updateCategoriesAndProducts(map);
        }
      }
    }
    closure_18 = Date.now();
    c16 = false;
    error = undefined;
    closure_19 = undefined;
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: function handleFetchCategoriesFailure(error) {
    closure_14 = map;
    closure_9 = map1;
    c16 = false;
    closure_13 = {};
    error = error.error;
    closure_19 = Date.now();
  },
  COLLECTIBLES_PRODUCT_FETCH: function handleFetchProduct(skuId) {
    closure_13[skuId.skuId] = { state: "fetching", startedAt: skuId.startedAt };
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: function handleFetchProductSuccess(endedAt) {
    let product;
    let skuId;
    ({ skuId, product } = endedAt);
    endedAt = endedAt.endedAt;
    const value = closure_9.get(skuId);
    if (null != value) {
      const _Object2 = Object;
      if (0 === Object.keys(product.prices).length) {
        product.prices = value.prices;
        if (null != value.bundledProducts) {
          if (null != product.bundledProducts) {
            const _Map = Map;
            const bundledProducts1 = value.bundledProducts;
            const self = this;
            const self2 = this;
            const bundledProducts = product.bundledProducts;
            map = new Map(bundledProducts1.map((item) => {
              const items = [, ];
              ({ skuId: arr[0], prices: arr[1] } = item);
              return items;
            }));
            for (const item10012 of bundledProducts) {
              let value2 = map.get(item10012.skuId);
              let tmp6 = null != value2;
              let tmp5 = value2;
              if (tmp6) {
                let _Object = Object;
                tmp6 = 0 === Object.keys(item10012.prices).length;
              }
              if (tmp6) {
                item10012.prices = tmp5;
              }
              continue;
            }
          }
        }
      }
    }
    const result = closure_9.set(skuId, product);
    let startedAt;
    if (closure_13[skuId] != null) {
      startedAt = tmp12.startedAt;
    }
    closure_13[skuId] = { state: "success", startedAt, endedAt };
    if (closure_12[skuId] != null) {
      closure_12[skuId].succeed();
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: function handleFetchProductFailure(skuId) {
    let endedAt;
    skuId = skuId.skuId;
    let startedAt;
    ({ error, endedAt } = skuId);
    if (closure_13[skuId] != null) {
      startedAt = tmp2.startedAt;
    }
    closure_13[skuId] = { state: "error", startedAt, endedAt, error };
    let obj = closure_12[skuId];
    if (null == obj) {
      const self = this;
      const self2 = this;
      const tmp8 = new BackoffDefault(closure_5, closure_6);
      closure_12[skuId] = tmp8;
      obj = tmp8;
    }
    if (!obj.pending) {
      obj.fail(() => {
        const obj = DispatcherDefault;
        const obj2 = { type: "COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED", skuId };
        return obj.dispatch(obj2);
      });
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED: function handleProductFetchBackoffExpired(arg0) {
    if (closure_12[arg0.skuId] != null) {
      closure_12[arg0.skuId].cancel();
    }
  },
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function handleFetchShopHomeSuccess(shopHome) {
    if (0 !== shopHome.shopHome.categories.length) {
      const _Map = Map;
      const categories = shopHome.shopHome.categories;
      const self = this;
      const self2 = this;
      const _Map2 = Map;
      let items = [];
      map = new Map(categories.map((skuId) => {
        const items = [skuId.skuId, skuId];
        return items;
      }));
      HermesBuiltin.arraySpread(items, map, HermesBuiltin.arraySpread(items, closure_14, 0));
      const self3 = this;
      const self4 = this;
      map1 = new Map(items);
      updateCategoriesAndProducts(map1);
    }
  },
  COLLECTIBLES_SKIP_NUM_CATEGORIES: function handleSetSkipNumCategories(skipNumCategories) {
    skipNumCategories = skipNumCategories.skipNumCategories;
  },
  LOGOUT: reset
};
const collectiblesCategoryStore = new CollectiblesCategoryStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesCategoryStore.tsx");

export default collectiblesCategoryStore;