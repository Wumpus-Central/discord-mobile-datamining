// discord_app/modules/storefront/StorefrontProductStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_0, closure_1, id, set;

const React = {};
const Store = get_initializedDefault.Store;
class StorefrontProductStore extends Store {
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
  getFetchStateForSku(item10006) {
    let tmp;
    if (null != item10006) {
      let state;
      if (closure_1[item10006] != null) {
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
  getFetchedAtForSku(item10006) {
    let tmp;
    if (null != item10006) {
      let fetchedAt;
      if (closure_1[item10006] != null) {
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
  getFetchErrorForSku(arg0) {
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
  getProduct(arg0) {
    let tmp = null;
    if (null != arg0) {
      tmp = closure_0[arg0];
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
  }
  getProductsForSku(skuId) {
    let tmp;
    if (null != skuId) {
      let products;
      if (closure_1[skuId] != null) {
        products = tmp3.products;
      }
      tmp = products;
    }
    return tmp;
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
}
const prototype = StorefrontProductStore.prototype;
StorefrontProductStore.displayName = "StorefrontProductStore";
let obj = {
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH: function handleProductsWithSkusFetch(productIds) {
    productIds = productIds.productIds;
    const item = productIds.forEach((item) => {
      let product;
      if (closure_1_0[item] != null) {
        product = tmp2.product;
      }
      closure_1_0[item] = { state: "loading", product, includePricing: true };
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_SUCCESS: function handleProductsWithSkusFetchSuccess(arg0) {
    let productIds;
    let products;
    ({ productIds, products } = arg0);
    const fetchedAt = Date.now();
    set = new Set();
    const item = products.forEach((id) => {
      set.add(id.id);
      const obj = { state: "success", product: id, fetchedAt, includePricing: true };
      fetchedAt[id.id] = obj;
    });
    const item1 = productIds.forEach((item) => {
      const tmp = item;
      if (!set.has(item)) {
        delete closure_0[tmp];
      }
    });
  },
  STOREFRONT_PRODUCTS_WITH_SKUS_FETCH_FAILURE: function handleProductsWithSkusFetchFailure(arg0) {
    let fetchError;
    let productIds;
    ({ productIds, apiError: closure_0 } = arg0);
    const fetchedAt = Date.now();
    const item = productIds.forEach((item) => {
      const obj = { state: "error", fetchedAt, fetchError };
      fetchError[item] = obj;
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: function handleProductsBySkuIdsFetch(skuIds) {
    skuIds = skuIds.skuIds;
    const item = skuIds.forEach((item) => {
      let products;
      if (closure_1_1[item] != null) {
        products = tmp2.products;
      }
      closure_1_1[item] = { state: "loading", products };
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: function handleProductsBySkuIdsFetchSuccess(arg0) {
    let products;
    let skuIds;
    ({ skuIds, products } = arg0);
    const fetchedAt = Date.now();
    closure_1 = products.reduce((acc, skuIds) => {
      closure_1 = skuIds;
      skuIds = skuIds.skuIds;
      const item = skuIds.forEach((item) => {
        if (null == acc[item]) {
          const items = [skuIds];
          acc[item] = items;
        } else {
          const arr = acc[item];
          arr.push(skuIds);
        }
      });
      return acc;
    }, {});
    let item = skuIds.forEach((item) => {
      if (null != closure_1[item]) {
        const obj = { state: "success", products: tmp2[item], fetchedAt };
        closure_1[item] = obj;
      } else {
        delete closure_1[tmp];
      }
    });
    const item1 = products.forEach((product) => {
      const obj = { state: "success", product, fetchedAt, includePricing: true };
      fetchedAt[product.id] = obj;
    });
  },
  STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: function handleProductsBySkuIdsFetchFailure(arg0) {
    let fetchError;
    let skuIds;
    ({ skuIds, apiError: closure_0 } = arg0);
    const fetchedAt = Date.now();
    const item = skuIds.forEach((item) => {
      const obj = { state: "error", fetchedAt, fetchError };
      fetchedAt[item] = obj;
    });
  },
  STOREFRONT_COLLECTIONS_WITH_PRODUCTS_FETCH_SUCCESS: function handleCollectionsWithProductsFetchSuccess(arg0) {
    let collections;
    ({ collections, includePricing: closure_0 } = arg0);
    closure_1 = Date.now();
    let item = collections.forEach((products) => {
      let fetchedAt;
      products = products.products;
      let item = products.forEach((id) => {
        includePricing = id;
        if (!includePricing) {
          let state;
          if (includePricing[id.id] != null) {
            state = tmp3.state;
          }
          if ("success" === state) {
            if (includePricing[id.id].includePricing) {
              let obj = { fetchedAt };
              id = id.id;
              const merged = Object.assign(tmp3);
              includePricing[id] = obj;
            }
            if (includePricing) {
              const skuIds = id.skuIds;
              const item = skuIds.forEach((item) => {
                let items;
                const obj = { state: "success", products: items, fetchedAt };
                items = [id];
                closure_1[item] = obj;
              });
            }
          }
        }
        includePricing[id.id] = { state: "success", product: id, fetchedAt, includePricing };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_FETCH_SUCCESS: function handleCollectionsForApplicationFetchSuccess(arg0) {
    let collections;
    ({ collections, includePricing: closure_0 } = arg0);
    closure_1 = Date.now();
    let item = collections.forEach((products) => {
      let fetchedAt;
      let includePricing;
      products = products.products;
      const item = products.forEach((id) => {
        if (!includePricing) {
          let state;
          if (includePricing[id.id] != null) {
            state = tmp3.state;
          }
          if ("success" === state) {
            if (includePricing[id.id].includePricing) {
              id = id.id;
              const obj = { fetchedAt };
              const merged = Object.assign(tmp3);
              includePricing[id] = obj;
            }
          }
        }
        includePricing[id.id] = { state: "success", product: id, fetchedAt, includePricing };
      });
    });
  },
  STOREFRONT_COLLECTIONS_FOR_APPLICATION_PAGE_FETCH_SUCCESS: function handleCollectionsForApplicationPageFetchSuccess(
    collections,
  ) {
    collections = collections.collections;
    closure_0 = Date.now();
    let item = collections.forEach((products) => {
      products = products.products;
      let item = products.forEach((product) => {
        fetchedAt = product;
        let obj = { state: "success", product, fetchedAt, includePricing: true };
        closure_1_0[product.id] = obj;
        const skuIds = product.skuIds;
        const item = skuIds.forEach((item) => {
          let items;
          const obj = { state: "success", products: items, fetchedAt };
          items = [closure_0];
          closure_3_1[item] = obj;
        });
      });
    });
  },
  LOGOUT: function handleLogout() {
    closure_0 = {};
    closure_1 = {};
  },
};
const storefrontProductStore = new StorefrontProductStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/storefront/StorefrontProductStore.tsx");

export default storefrontProductStore;
