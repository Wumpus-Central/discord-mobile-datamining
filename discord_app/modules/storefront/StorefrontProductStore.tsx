// === Module 8220: StorefrontProductStore ===

// Module 8220 (StorefrontProductStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const dependencyMap = {};
const dependencyMap2 = {};
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
prototype["getFetchStateForSku"] = function getFetchStateForSku(item10006) {
  let tmp;
  if (null != item10006) {
    let state;
    if (dependencyMap2[item10006] != null) {
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
prototype["getFetchedAtForSku"] = function getFetchedAtForSku(item10006) {
  let tmp;
  if (null != item10006) {
    let fetchedAt;
    if (dependencyMap2[item10006] != null) {
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
prototype["getProductsForSku"] = function getProductsForSku(nextResult) {
  let tmp;
  if (null != nextResult) {
    let products;
    if (dependencyMap2[nextResult] != null) {
      products = tmp3.products;
    }
    tmp = products;
  }
  return tmp;
};
StorefrontProductStore.displayName = "StorefrontProductStore";
const storefrontProductStore = new StorefrontProductStore(DispatcherDefault, {
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function handleProductsWithSkusFetch(productIds) {
    productIds = productIds.productIds;
    const item = productIds.forEach((item) => {
      let product;
      if (dependencyMap[item] != null) {
        product = tmp2.product;
      }
      dependencyMap[item] = { state: "loading", product };
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function handleProductsWithSkusFetchSuccess(arg0) {
    ({ productIds, products } = arg0);
    const fetchedAt = Date.now();
    const set = new Set();
    const item = products.forEach((id) => {
      set.add(id.id);
      fetchedAt[id.id] = { state: "success", product: id, fetchedAt };
    });
    const item1 = productIds.forEach((item) => {
      if (!set.has(item)) {
        delete tmp[tmp2];
      }
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function handleProductsWithSkusFetchFailure(arg0) {
    ({ productIds, apiError: closure_0 } = arg0);
    const fetchedAt = Date.now();
    const item = productIds.forEach((item) => {
      closure_0[item] = { state: "error", fetchedAt, fetchError };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function handleProductsBySkuIdsFetch(skuIds) {
    skuIds = skuIds.skuIds;
    const item = skuIds.forEach((item) => {
      let products;
      if (dependencyMap2[item] != null) {
        products = tmp2.products;
      }
      dependencyMap2[item] = { state: "loading", products };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function handleProductsBySkuIdsFetchSuccess(arg0) {
    ({ skuIds, products } = arg0);
    const fetchedAt = Date.now();
    closure_1 = products.reduce((acc, skuIds) => {
      closure_1 = skuIds;
      skuIds = skuIds.skuIds;
      const item = skuIds.forEach((item) => {
        if (null == acc[item]) {
          const items = [closure_1];
          tmp[item] = items;
        } else {
          let arr = tmp[item];
          arr = arr.push(closure_1);
        }
      });
      return acc;
    }, {});
    let item = skuIds.forEach((item) => {
      if (null != closure_1[item]) {
        const obj = { state: "success", products: tmp3[item], fetchedAt };
        closure_1[item] = obj;
      } else {
        delete tmp[tmp2];
      }
    });
    const item1 = products.forEach((product) => {
      fetchedAt[product.id] = { state: "success", product, fetchedAt };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function handleProductsBySkuIdsFetchFailure(arg0) {
    ({ skuIds, apiError: closure_0 } = arg0);
    const fetchedAt = Date.now();
    const item = skuIds.forEach((item) => {
      fetchedAt[item] = { state: "error", fetchedAt, fetchError };
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((product) => {
        closure_0[product.id] = { state: "success", product, fetchedAt };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      const item = products.forEach((product) => {
        closure_0[product.id] = { state: "success", product, fetchedAt };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function handleCollectionsForApplicationPageFetchSuccess(collections) {
    collections = collections.collections;
    closure_0 = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      let item = products.forEach((product) => {
        fetchedAt = product;
        closure_1_0[product.id] = { state: "success", product, fetchedAt };
        const skuIds = product.skuIds;
        const item = skuIds.forEach((item) => {
          const obj = { state: "success", products: null, fetchedAt };
          const items = [closure_0];
          obj.products = items;
          dependencyMap2[item] = obj;
        });
      });
    });
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
    closure_1 = {};
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/storefront/StorefrontProductStore.tsx");

export default storefrontProductStore;