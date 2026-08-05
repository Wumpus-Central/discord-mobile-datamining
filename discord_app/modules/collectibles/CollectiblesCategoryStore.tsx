// discord_app/modules/collectibles/CollectiblesCategoryStore.tsx
import _getSystemLocale from "_getSystemLocale";
import fromServer from "fromServer";
import { Store } from "initialize";
import { fails } from "../../../discord_common/js/packages/backoff/Backoff.tsx";

const require = arg1;
function updateCategoriesAndProducts(map) {
  let items = [...closure_14.values()];
  map = new Map(items.map((storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  }));
  const productsFromCategories = map1(6922).getProductsFromCategories(map, true);
  map1 = new Map(productsFromCategories.map((skuId) => {
    const items = [skuId.skuId, skuId];
    return items;
  }));
  const item = map1.forEach((skuId) => {
    if (!map1.has(skuId.skuId)) {
      const result = map1.set(skuId.skuId, skuId);
    }
  });
  const obj = map1(6922);
  const productsFromCategories1 = map1(6922).getProductsFromCategories(map, false);
  const map2 = new Map(productsFromCategories1.map((storeListingId) => {
    const items = [storeListingId.storeListingId, storeListingId];
    return items;
  }));
  let closure_11 = [...map2.values()];
}
function reset() {
  let closure_14 = map;
  let closure_9 = map1;
  let c18;
  let c16 = false;
  let closure_13 = {};
  const values = Object.values(closure_12);
  const item = values.forEach((cancel) => cancel.cancel());
  closure_12 = {};
  let c17;
  let c19;
  let closure_20 = {};
  let c21 = 0;
}
let closure_5 = 10 * require("set").Millis.SECOND;
let closure_6 = 10 * require("set").Millis.MINUTE;
let map = new Map();
let map1 = new Map();
let map2 = new Map();
const map3 = new Map();
let closure_11 = [];
let closure_12 = {};
let closure_13 = {};
let c16 = false;
let c17;
let c18;
let c19;
let closure_20 = {};
let c21 = 0;
class CollectiblesCategoryStore extends Store {
}
const prototype = CollectiblesCategoryStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [_getSystemLocale];
  this.syncWith(items, reset);
};
Object.defineProperty(prototype, "isFetchingCategories", {
  get: function isFetchingCategories() {
    return c16;
  },
  set: undefined
});
prototype["isFetchingProduct"] = function isFetchingProduct(closure_0) {
  let tmp = null != closure_0;
  if (tmp) {
    let state;
    if (dependencyMap2[closure_0] != null) {
      state = tmp3.state;
    }
    tmp = "fetching" === state;
  }
  return tmp;
};
prototype["isProductFetchBackedOff"] = function isProductFetchBackedOff(closure_0) {
  let tmp = null != closure_0;
  if (tmp) {
    let pending;
    if (dependencyMap[closure_0] != null) {
      pending = tmp3.pending;
    }
    tmp = true === pending;
  }
  return tmp;
};
Object.defineProperty(prototype, "error", {
  get: function error() {
    return c17;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastErrorTimestamp", {
  get: function lastErrorTimestamp() {
    return c19;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastSuccessfulFetch", {
  get: function lastSuccessfulFetch() {
    return c18;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetchOptions", {
  get: function lastFetchOptions() {
    return closure_20;
  },
  set: undefined
});
Object.defineProperty(prototype, "categories", {
  get: function categories() {
    return map;
  },
  set: undefined
});
Object.defineProperty(prototype, "products", {
  get: function products(arg0) {
    return map1;
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
    return c21;
  },
  set: undefined
});
prototype["getCategory"] = function getCategory(arg0) {
  let value;
  if (null != arg0) {
    value = map.get(arg0);
  }
  return value;
};
prototype["getProduct"] = function getProduct(arg0) {
  let value;
  if (null != arg0) {
    value = map1.get(arg0);
  }
  return value;
};
prototype["getProductsBySkus"] = function getProductsBySkus(arr) {
  const mapped = arr.map((arg0) => closure_9.get(arg0));
  return mapped.filter((arg0) => null != arg0);
};
prototype["getProductFetch"] = function getProductFetch(closure_0) {
  let tmp;
  if (null != closure_0) {
    tmp = dependencyMap2[closure_0];
  }
  return tmp;
};
prototype["getProductByStoreListingId"] = function getProductByStoreListingId(variantGroupStoreListingId) {
  let value;
  if (null != variantGroupStoreListingId) {
    value = map2.get(variantGroupStoreListingId);
  }
  return value;
};
prototype["getCategoryByStoreListingId"] = function getCategoryByStoreListingId(categoryStoreListingId) {
  let value;
  if (null != categoryStoreListingId) {
    value = map3.get(categoryStoreListingId);
  }
  return value;
};
prototype["getCategoryForProduct"] = function getCategoryForProduct(closure_0) {
  const product = this.getProduct(closure_0);
  let categorySkuId;
  if (product != null) {
    categorySkuId = product.categorySkuId;
  }
  return this.getCategory(categorySkuId);
};
CollectiblesCategoryStore.displayName = "CollectiblesCategoryStore";
const collectiblesCategoryStore = new CollectiblesCategoryStore(require("dispatcher"), {
  COLLECTIBLES_CATEGORIES_FETCH: function handleFetchCategories(options) {
    let c16 = true;
    let c17;
    let c19;
    options = options.options;
  },
  COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: function handleFetchCategoriesSuccess(categories) {
    if (categories.categories.collections.length > 0) {
      const collections = categories.categories.collections;
      let mapped = collections.map(obj.fromStorefrontCollectionRecord);
    } else {
      mapped = categories.categories.categories;
    }
    if (0 === mapped.length) {
      let closure_9 = map1;
    } else {
      obj = map(12);
      let items = [];
      HermesBuiltin.arraySpread(map.values(), 0);
      if (!obj.isEqual(items, mapped)) {
        if (!categories.noOp) {
          const _Map = Map;
          map = new Map(mapped.map((skuId) => {
            const items = [skuId.skuId, skuId];
            return items;
          }));
          const _Date = Date;
          const date = new Date();
          const item = map.forEach((unpublishedAt) => {
            const hasItem = map.has(arg1);
            let tmp2 = !hasItem;
            if (!hasItem) {
              let tmp4 = null == unpublishedAt.unpublishedAt;
              if (!tmp4) {
                tmp4 = unpublishedAt.unpublishedAt > date;
              }
              tmp2 = tmp4;
            }
            if (tmp2) {
              const result = map.set(arg1, unpublishedAt);
            }
          });
          updateCategoriesAndProducts(map);
        }
      }
    }
    let closure_18 = Date.now();
    let c16 = false;
    let c17;
    let c19;
  },
  COLLECTIBLES_CATEGORIES_FETCH_FAILURE: function handleFetchCategoriesFailure(error) {
    let closure_14 = map;
    let closure_9 = map1;
    let c16 = false;
    let closure_13 = {};
    error = error.error;
    let closure_19 = Date.now();
  },
  COLLECTIBLES_PRODUCT_FETCH: function handleFetchProduct(skuId) {
    closure_13[skuId.skuId] = { state: "fetching", startedAt: skuId.startedAt };
  },
  COLLECTIBLES_PRODUCT_FETCH_SUCCESS: function handleFetchProductSuccess(endedAt) {
    let product;
    let skuId;
    ({ skuId, product } = endedAt);
    let value = map1.get(skuId);
    if (null != value) {
      const _Object2 = Object;
      if (0 === Object.keys(product.prices).length) {
        product.prices = value.prices;
        if (null != value.bundledProducts) {
          if (null != product.bundledProducts) {
            const _Map = Map;
            let bundledProducts = value.bundledProducts;
            const map = new Map(bundledProducts.map((arg0) => {
              const items = [, ];
              ({ skuId: arr[0], prices: arr[1] } = arg0);
              return items;
            }));
            bundledProducts = product.bundledProducts;
            for (const item10012 of bundledProducts) {
              let tmp3 = item10012;
              value = map.get(item10012.skuId);
              let tmp6 = null != value;
              let tmp5 = value;
              if (tmp6) {
                let _Object = Object;
                let tmp7 = item10012;
                tmp6 = 0 === Object.keys(tmp3.prices).length;
              }
              if (tmp6) {
                let tmp8 = item10012;
                let tmp9 = value;
                tmp3.prices = tmp5;
              }
              continue;
            }
          }
        }
      }
    }
    const result = map1.set(skuId, product);
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
    let endedAt;
    let error;
    skuId = skuId.skuId;
    let startedAt;
    ({ error, endedAt } = skuId);
    if (dependencyMap2[skuId] != null) {
      startedAt = tmp2.startedAt;
    }
    dependencyMap2[skuId] = { state: "error", startedAt, endedAt, error };
    let obj = dependencyMap[skuId];
    if (null == obj) {
      const tmp10 = new fails(closure_5, closure_6);
      dependencyMap[skuId] = tmp10;
      obj = tmp10;
    }
    if (!obj.pending) {
      obj.fail(() => {
        let obj = outer1_1(outer1_2[4]);
        obj = { type: "COLLECTIBLES_PRODUCT_FETCH_BACKOFF_EXPIRED", skuId };
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
      const map = new Map(categories.map((skuId) => {
        const items = [skuId.skuId, skuId];
        return items;
      }));
      const _Map2 = Map;
      let items = [];
      HermesBuiltin.arraySpread(map, HermesBuiltin.arraySpread(map, 0));
      const map1 = new Map(items);
      updateCategoriesAndProducts(map1);
    }
  },
  COLLECTIBLES_SKIP_NUM_CATEGORIES: function handleSetSkipNumCategories(skipNumCategories) {
    skipNumCategories = skipNumCategories.skipNumCategories;
  },
  LOGOUT: reset
});
let result = require("set").fileFinishedImporting("modules/collectibles/CollectiblesCategoryStore.tsx");

export default collectiblesCategoryStore;