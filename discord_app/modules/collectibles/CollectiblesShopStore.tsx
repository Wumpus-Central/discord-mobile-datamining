// discord_app/modules/collectibles/CollectiblesShopStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import set from "../../../_runtime/00002_set.js";

const items = [];
let c3 = null;
let closure_4 = {};
let set = new Set();
let closure_6 = {};
const Store = initializeDefault.Store;
class CollectiblesShopStore extends Store {
}
const prototype = CollectiblesShopStore.prototype;
Object.defineProperty(prototype, "analyticsLocations", {
  get: function analyticsLocations(c4, arg1) {
    return items;
  },
  set: undefined
});
Object.defineProperty(prototype, "analyticsSource", {
  get: function analyticsSource(arg0) {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "initialProductSkuId", {
  get: function initialProductSkuId(arg0) {
    return closure_0;
  },
  set: undefined
});
prototype["getAnalytics"] = function getAnalytics() {
  return { analyticsLocations: items, analyticsSource: c3 };
};
prototype["getLayout"] = function getLayout(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = table[arg0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["isFetchingLayout"] = function isFetchingLayout(c0) {
  let hasItem = null != c0;
  if (hasItem) {
    hasItem = set.has(c0);
  }
  return hasItem;
};
prototype["getLayoutFetchError"] = function getLayoutFetchError(c0) {
  let tmp = null;
  if (null != c0) {
    let tmp3 = table2[c0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
CollectiblesShopStore.displayName = "CollectiblesShopStore";
const collectiblesShopStore = new CollectiblesShopStore(dispatcherDefault, {
  COLLECTIBLES_SHOP_OPEN: function handleOpen(analyticsLocations) {
    analyticsLocations = analyticsLocations.analyticsLocations;
    if (analyticsLocations == null) {
      analyticsLocations = items;
    }
    let analyticsSource = analyticsLocations.analyticsSource;
    if (analyticsSource == null) {
      analyticsSource = null;
    }
    const initialProductSkuId = analyticsLocations.initialProductSkuId;
  },
  COLLECTIBLES_SHOP_CLOSE: function handleClose() {
    closure_2 = items;
    c3 = null;
    c0 = undefined;
  },
  COLLECTIBLES_PRODUCT_DETAILS_OPEN: function handleProductDetailsOpen(skuId) {
    if (skuId.skuId === c0) {
      c0 = undefined;
    }
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: function handleShopTabLayoutFetch(tab) {
    set.add(tab.tab);
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: function handleShopTabLayoutFetchSuccess(tab) {
    tab = tab.tab;
    closure_4[tab] = tab.layoutId;
    delete tmp[tmp2];
    set.delete(tab);
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: function handleShopTabLayoutFetchFailure(tab) {
    tab = tab.tab;
    closure_6[tab] = tab.apiError;
    set.delete(tab);
  },
  LOGOUT: function handleLogout() {
    closure_2 = items;
    c3 = null;
    c0 = undefined;
    closure_4 = {};
    set = new Set();
    closure_6 = {};
  }
});
const result = set.fileFinishedImporting("modules/collectibles/CollectiblesShopStore.tsx");

export default collectiblesShopStore;