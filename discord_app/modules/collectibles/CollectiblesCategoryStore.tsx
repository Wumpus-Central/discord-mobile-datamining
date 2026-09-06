// discord_app/modules/collectibles/CollectiblesCategoryStore.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import BackoffDefault from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import CollectiblesUtils from "CollectiblesUtils.tsx";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import CollectiblesCategoryRecord from "records/CollectiblesCategoryRecord.tsx";

require = fn;
function updateCategoriesAndProducts(map) {
  closure_14 = map;
  let items = [...closure_14.values()];
  map = new Map(
    items.map((storeListingId) => {
      const items = [storeListingId.storeListingId, storeListingId];
      return items;
    }),
  );
  const productsFromCategories = CollectiblesUtils.getProductsFromCategories(closure_14, true);
  map1 = new Map(
    productsFromCategories.map((skuId) => {
      const items = [skuId.skuId, skuId];
      return items;
    }),
  );
  const item = closure_9.forEach((skuId) => {
    if (!map1.has(skuId.skuId)) {
      const result = map1.set(skuId.skuId, skuId);
    }
  });
  closure_9 = map1;
  const productsFromCategories1 = CollectiblesUtils.getProductsFromCategories(closure_14, false);
  map2 = new Map(
    productsFromCategories1.map((storeListingId) => {
      const items = [storeListingId.storeListingId, storeListingId];
      return items;
    }),
  );
  closure_11 = [...map2.values()];
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
let closure_9 = map1;
let closure_11 = [];
const dependencyMap = {};
const dependencyMap2 = {};
let closure_14 = map;
map = new Map();
let c16 = false;
let error;
let closure_18;
let closure_19;
let options = {};
let skipNumCategories = 0;
const Store = initializeDefault.Store;
class CollectiblesCategoryStore extends Store {}
const prototype = CollectiblesCategoryStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [LocaleStore];
  this.syncWith(items, reset);
};
Object.defineProperty(prototype, "isFetchingCategories", {
  get: function isFetchingCategories() {
    return c16;
  },
  set: undefined,
});
prototype["isFetchingProduct"] = function isFetchingProduct(arg0) {
  let tmp = null != arg0;
  if (tmp) {
    let state;
    if (dependencyMap2[arg0] != null) {
      state = tmp3.state;
    }
    tmp = "fetching" === state;
  }
  return tmp;
};
prototype["isProductFetchBackedOff"] = function isProductFetchBackedOff(item) {
  let tmp = null != item;
  if (tmp) {
    let pending;
    if (dependencyMap[item] != null) {
      pending = tmp3.pending;
    }
    tmp = true === pending;
  }
  return tmp;
};
Object.defineProperty(prototype, "error", {
  get: function error() {
    return error;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastErrorTimestamp", {
  get: function lastErrorTimestamp() {
    return closure_19;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastSuccessfulFetch", {
  get: function lastSuccessfulFetch() {
    return closure_18;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastFetchOptions", {
  get: function lastFetchOptions() {
    return options;
  },
  set: undefined,
});
Object.defineProperty(prototype, "categories", {
  get: function categories() {
    return closure_14;
  },
  set: undefined,
});
Object.defineProperty(prototype, "products", {
  get: function products() {
    return closure_9;
  },
  set: undefined,
});
Object.defineProperty(prototype, "productsWithVariantsAsGroup", {
  get: function productsWithVariantsAsGroup() {
    return closure_11;
  },
  set: undefined,
});
Object.defineProperty(prototype, "skipNumCategories", {
  get: function skipNumCategories() {
    return skipNumCategories;
  },
  set: undefined,
});
prototype["getCategory"] = function getCategory(arg0) {
  value = undefined;
  if (null != arg0) {
    value = closure_14.get(arg0);
  }
  return value;
};
prototype["getProduct"] = function getProduct(arg0) {
  value = undefined;
  if (null != arg0) {
    value = closure_9.get(arg0);
  }
  return value;
};
prototype["getProductsBySkus"] = function getProductsBySkus(arr) {
  const mapped = arr.map((item) => closure_1_9.get(item));
  return mapped.filter((item) => null != item);
};
prototype["getProductFetch"] = function getProductFetch(skuId) {
  let tmp;
  if (null != skuId) {
    tmp = dependencyMap2[skuId];
  }
  return tmp;
};
prototype["getProductByStoreListingId"] = function getProductByStoreListingId(variantGroupStoreListingId) {
  value = undefined;
  if (null != variantGroupStoreListingId) {
    value = map2.get(variantGroupStoreListingId);
  }
  return value;
};
prototype["getCategoryByStoreListingId"] = function getCategoryByStoreListingId(categoryStoreListingId) {
  value = undefined;
  if (null != categoryStoreListingId) {
    value = map.get(categoryStoreListingId);
  }
  return value;
};
prototype["getCategoryForProduct"] = function getCategoryForProduct(initialProductSkuId) {
  const product = this.getProduct(initialProductSkuId);
  let categorySkuId;
  if (product != null) {
    categorySkuId = product.categorySkuId;
  }
  return this.getCategory(categorySkuId);
};
CollectiblesCategoryStore.displayName = "CollectiblesCategoryStore";
const collectiblesCategoryStore = new CollectiblesCategoryStore(DispatcherDefault, {
  COLLECTIBLES_CATEGORIES_FETCH: function handleFetchCategories(options) {
    c16 = true;
    error = undefined;
    closure_19 = undefined;
    options = options.options;
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: function handleFetchCategoriesSuccess(categories) {
    if (categories.categories.collections.length > 0) {
      const collections = categories.categories.collections;
      let mapped = collections.map(CollectiblesCategoryRecord.fromStorefrontCollectionRecord);
    } else {
      mapped = categories.categories.categories;
    }
    if (0 === mapped.length) {
      closure_14 = map;
      closure_9 = map1;
    } else {
      let items = [];
      HermesBuiltin.arraySpread(closure_14.values(), 0);
      if (!obj.isEqual(items, mapped)) {
        if (!categories.noOp) {
          const _Map = Map;
          map = new Map(
            mapped.map((skuId) => {
              const items = [skuId.skuId, skuId];
              return items;
            }),
          );
          const _Date = Date;
          const item = closure_14.forEach((unpublishedAt, index) => {
            const hasItem = map.has(index);
            let tmp2 = !hasItem;
            if (!hasItem) {
              let tmp4 = null == unpublishedAt.unpublishedAt;
              if (!tmp4) {
                tmp4 = unpublishedAt.unpublishedAt > date;
              }
              tmp2 = tmp4;
            }
            if (tmp2) {
              const result = map.set(index, unpublishedAt);
            }
          });
          updateCategoriesAndProducts(map);
          const date = new Date();
        }
      }
      obj = _mod12;
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
    ({ skuId, product } = endedAt);
    value = closure_9.get(skuId);
    if (null != value) {
      const _Object2 = Object;
      if (0 === Object.keys(product.prices).length) {
        product.prices = value.prices;
        if (null != value.bundledProducts) {
          if (null != product.bundledProducts) {
            const _Map = Map;
            let bundledProducts = value.bundledProducts;
            map = new Map(
              bundledProducts.map((item) => {
                const items = [,];
                ({ skuId: arr[0], prices: arr[1] } = item);
                return items;
              }),
            );
            bundledProducts = product.bundledProducts;
            for (const item10012 of bundledProducts) {
              value = map.get(item10012.skuId);
              let tmp6 = null != value;
              let tmp5 = value;
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
    if (dependencyMap2[skuId] != null) {
      startedAt = tmp12.startedAt;
    }
    dependencyMap2[skuId] = { state: "success", startedAt, endedAt: endedAt.endedAt };
    if (dependencyMap[skuId] != null) {
      obj.succeed();
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_FAILURE: function handleFetchProductFailure(skuId) {
    skuId = skuId.skuId;
    let startedAt;
    ({ error, endedAt } = skuId);
    if (dependencyMap2[skuId] != null) {
      startedAt = tmp2.startedAt;
    }
    dependencyMap2[skuId] = { state: "error", startedAt, endedAt, error };
    let obj = dependencyMap[skuId];
    if (null == obj) {
      const tmp10 = new BackoffDefault(closure_5, closure_6);
      dependencyMap[skuId] = tmp10;
      obj = tmp10;
    }
    if (!obj.pending) {
      obj.fail(() => {
        const obj = { type: "COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED", skuId };
        return obj.dispatch(obj);
      });
    }
  },
  COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED: function handleProductFetchBackoffExpired(arg0) {
    if (dependencyMap[arg0.skuId] != null) {
      obj.cancel();
    }
  },
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function handleFetchShopHomeSuccess(shopHome) {
    if (0 !== shopHome.shopHome.categories.length) {
      const _Map = Map;
      const categories = shopHome.shopHome.categories;
      map = new Map(
        categories.map((skuId) => {
          const items = [skuId.skuId, skuId];
          return items;
        }),
      );
      const _Map2 = Map;
      let items = [];
      HermesBuiltin.arraySpread(map, HermesBuiltin.arraySpread(closure_14, 0));
      map1 = new Map(items);
      updateCategoriesAndProducts(map1);
    }
  },
  COLLECTIBLES_SKIP_NUM_CATEGORIES: function handleSetSkipNumCategories(skipNumCategories) {
    skipNumCategories = skipNumCategories.skipNumCategories;
  },
  LOGOUT: reset,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesCategoryStore.tsx");

export default collectiblesCategoryStore;
