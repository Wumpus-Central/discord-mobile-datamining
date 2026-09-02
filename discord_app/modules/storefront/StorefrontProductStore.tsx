// === Module 8922: getFetchState ===

// Module 8922 (getFetchState)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let closure_0 = {};
let closure_1 = {};
const Store = initializeDefault.Store;
class StorefrontProductStore extends Store {
}
const prototype = StorefrontProductStore.prototype;
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
prototype["getFetchStateForSku"] = function getFetchStateForSku(closure_0) {
  let tmp;
  if (null != closure_0) {
    let state;
    if (dependencyMap2[closure_0] != null) {
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
prototype["getFetchedAtForSku"] = function getFetchedAtForSku(closure_0) {
  let tmp;
  if (null != closure_0) {
    let fetchedAt;
    if (dependencyMap2[closure_0] != null) {
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
prototype["getFetchErrorForSku"] = function getFetchErrorForSku(arg0) {
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
prototype["getProduct"] = function getProduct(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = dependencyMap[arg0];
  }
  let product = null;
  if (null != tmp) {
    let state;
    if (tmp != null) {
      state = tmp.state;
    }
    product = null;
    if ("error" !== state) {
      product = null;
      if (null != tmp.product) {
        product = tmp.product;
      }
    }
  }
  return product;
};
prototype["getProductsForSku"] = function getProductsForSku(closure_0) {
  let tmp;
  if (null != closure_0) {
    let products;
    if (dependencyMap2[closure_0] != null) {
      products = tmp3.products;
    }
    tmp = products;
  }
  return tmp;
};
StorefrontProductStore.displayName = "StorefrontProductStore";
const storefrontProductStore = new StorefrontProductStore(dispatcherDefault, {
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function handleProductsWithSkusFetch(productIds) {
    productIds = productIds.productIds;
    const item = productIds.forEach((arg0) => {
      let product;
      if (table[arg0] != null) {
        product = tmp2.product;
      }
      table[arg0] = { state: "loading", product };
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function handleProductsWithSkusFetchSuccess(arg0) {
    ({ productIds, products } = arg0);
    closure_0 = undefined;
    let set;
    closure_0 = Date.now();
    set = new Set();
    const item = products.forEach((id) => {
      set.add(id.id);
      closure_0[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
    });
    const item1 = productIds.forEach((arg0) => {
      if (!set.has(arg0)) {
        delete tmp[tmp2];
      }
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function handleProductsWithSkusFetchFailure(arg0) {
    ({ productIds, apiError: closure_0 } = arg0);
    closure_1 = undefined;
    closure_1 = Date.now();
    const item = productIds.forEach((arg0) => {
      closure_1_0[arg0] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function handleProductsBySkuIdsFetch(skuIds) {
    skuIds = skuIds.skuIds;
    const item = skuIds.forEach((arg0) => {
      let products;
      if (table[arg0] != null) {
        products = tmp2.products;
      }
      table[arg0] = { state: "loading", products };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function handleProductsBySkuIdsFetchSuccess(arg0) {
    ({ skuIds, products } = arg0);
    closure_0 = undefined;
    closure_1 = undefined;
    closure_0 = Date.now();
    closure_1 = products.reduce((arg0, skuIds) => {
      closure_0 = arg0;
      closure_1 = skuIds;
      skuIds = skuIds.skuIds;
      const item = skuIds.forEach((arg0) => {
        if (null == table[arg0]) {
          const items = [closure_1];
          tmp[arg0] = items;
        } else {
          let arr = tmp[arg0];
          arr = arr.push(closure_1);
        }
      });
      return arg0;
    }, {});
    let item = skuIds.forEach((arg0) => {
      if (null != table[arg0]) {
        const obj = { state: "success", products: null, fetchedAt: null };
        obj[1] = tmp3[arg0];
        obj[2] = closure_0;
        table[arg0] = obj;
      } else {
        delete tmp[tmp2];
      }
    });
    const item1 = products.forEach((id) => {
      closure_0[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function handleProductsBySkuIdsFetchFailure(arg0) {
    ({ skuIds, apiError: closure_0 } = arg0);
    closure_1 = undefined;
    closure_1 = Date.now();
    const item = skuIds.forEach((arg0) => {
      closure_1[arg0] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = undefined;
    closure_0 = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((id) => {
        closure_1_0[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = undefined;
    closure_0 = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((id) => {
        closure_1_0[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function handleCollectionsForApplicationPageFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = undefined;
    closure_0 = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      let item = products.forEach((id) => {
        closure_0 = id;
        closure_1_0[id.id] = { state: "success", product: id, fetchedAt: closure_0 };
        const skuIds = id.skuIds;
        const item = skuIds.forEach((arg0) => {
          const items = [closure_0];
          closure_2_1[arg0] = { state: "success", products: items, fetchedAt: closure_0 };
        });
      });
    });
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
    closure_1 = {};
  }
});
const result = require("set").fileFinishedImporting("modules/storefront/StorefrontProductStore.tsx");

export default storefrontProductStore;