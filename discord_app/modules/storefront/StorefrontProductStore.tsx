// === Module 8963: getFetchState ===

// Module 8963 (getFetchState)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

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
    const item = productIds.forEach((item, index) => {
      let product;
      if (table[item] != null) {
        product = tmp2.product;
      }
      table[item] = { state: "loading", product };
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function handleProductsWithSkusFetchSuccess(arg0) {
    ({ productIds, products } = arg0);
    closure_0 = Date.now();
    const set = new Set();
    const item = products.forEach((item, index) => {
      set.add(item.id);
      closure_0[item.id] = { state: "success", product: item, fetchedAt: closure_0 };
    });
    const item1 = productIds.forEach((item, index) => {
      if (!set.has(item)) {
        delete tmp[tmp2];
      }
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function handleProductsWithSkusFetchFailure(arg0) {
    ({ productIds, apiError: closure_0 } = arg0);
    closure_1 = Date.now();
    const item = productIds.forEach((item, index) => {
      closure_1_0[item] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function handleProductsBySkuIdsFetch(skuIds) {
    skuIds = skuIds.skuIds;
    const item = skuIds.forEach((item, index) => {
      let products;
      if (table[item] != null) {
        products = tmp2.products;
      }
      table[item] = { state: "loading", products };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function handleProductsBySkuIdsFetchSuccess(arg0) {
    ({ skuIds, products } = arg0);
    closure_0 = Date.now();
    closure_1 = products.reduce((acc, item, index) => {
      closure_0 = acc;
      closure_1 = item;
      const skuIds = item.skuIds;
      item = skuIds.forEach((item, index) => {
        if (null == acc[item]) {
          const items = [closure_1];
          acc[item] = items;
        } else {
          let arr = acc[item];
          arr = arr.push(closure_1);
        }
      });
      return acc;
    }, {});
    let item = skuIds.forEach((item, index) => {
      if (null != table[item]) {
        const obj = { state: "success", products: null, fetchedAt: null };
        obj[1] = tmp3[item];
        obj[2] = closure_0;
        table[item] = obj;
      } else {
        delete tmp[tmp2];
      }
    });
    const item1 = products.forEach((item, index) => {
      closure_0[item.id] = { state: "success", product: item, fetchedAt: closure_0 };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function handleProductsBySkuIdsFetchFailure(arg0) {
    ({ skuIds, apiError: closure_0 } = arg0);
    closure_1 = Date.now();
    const item = skuIds.forEach((item, index) => {
      closure_1[item] = { state: "error", fetchedAt: closure_1, fetchError: closure_0 };
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = Date.now();
    let item = collections.forEach((item, index) => {
      const products = item.products;
      item = products.forEach((item, index) => {
        closure_1_0[item.id] = { state: "success", product: item, fetchedAt: closure_0 };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = Date.now();
    let item = collections.forEach((item, index) => {
      const products = item.products;
      item = products.forEach((item, index) => {
        closure_1_0[item.id] = { state: "success", product: item, fetchedAt: closure_0 };
      });
    });
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
    closure_1 = {};
  }
});
const result = require("obj132").fileFinishedImporting("modules/storefront/StorefrontProductStore.tsx");

export default storefrontProductStore;