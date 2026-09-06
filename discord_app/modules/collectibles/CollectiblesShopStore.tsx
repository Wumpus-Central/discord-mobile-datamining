// discord_app/modules/collectibles/CollectiblesShopStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

const items = [];
let analyticsLocations = items;
let c3 = null;
let closure_4 = {};
let set = new Set();
let closure_6 = {};
const Store = initializeDefault.Store;
class CollectiblesShopStore extends Store {}
const prototype = CollectiblesShopStore.prototype;
Object.defineProperty(prototype, "analyticsLocations", {
  get: function analyticsLocations() {
    return closure_2;
  },
  set: undefined,
});
Object.defineProperty(prototype, "analyticsSource", {
  get: function analyticsSource() {
    return c3;
  },
  set: undefined,
});
Object.defineProperty(prototype, "initialProductSkuId", {
  get: function initialProductSkuId() {
    return c0;
  },
  set: undefined,
});
prototype["getAnalytics"] = function getAnalytics() {
  return { analyticsLocations, analyticsSource };
};
prototype["getLayout"] = function getLayout(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = closure_4[arg0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
prototype["isFetchingLayout"] = function isFetchingLayout(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
prototype["getLayoutFetchError"] = function getLayoutFetchError(arg0) {
  let tmp = null;
  if (null != arg0) {
    let tmp3 = closure_6[arg0];
    if (tmp3 == null) {
      tmp3 = null;
    }
    tmp = tmp3;
  }
  return tmp;
};
CollectiblesShopStore.displayName = "CollectiblesShopStore";
const collectiblesShopStore = new CollectiblesShopStore(DispatcherDefault, {
  COLLECTIBLES_SHOP_OPEN: function handleOpen(analyticsLocations) {
    analyticsLocations = analyticsLocations.analyticsLocations;
    if (analyticsLocations == null) {
      analyticsLocations = items;
    }
    closure_2 = analyticsLocations;
    analyticsSource = analyticsLocations.analyticsSource;
    if (analyticsSource == null) {
      analyticsSource = null;
    }
    c3 = analyticsSource;
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
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopStore.tsx");

export default collectiblesShopStore;
