// === Module 7082: CollectiblesShopStore ===

// Module 7082 (CollectiblesShopStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let closure_4, closure_6;

const items = [];
const React2 = items;
const _false = null;
const React3 = {};
let set = new Set();
const metroRequire = {};
const Store = get_initializedDefault.Store;
class CollectiblesShopStore extends Store {
  getAnalytics() {
    return { analyticsLocations, analyticsSource };
  }
  getLayout(arg0) {
    let tmp = null;
    if (null != arg0) {
      let tmp3 = closure_4[arg0];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
  isFetchingLayout(c0) {
    const hasItem = null != c0 && set.has(c0);
    return hasItem;
  }
  getLayoutFetchError(c0) {
    let tmp = null;
    if (null != c0) {
      let tmp3 = closure_6[c0];
      if (tmp3 == null) {
        tmp3 = null;
      }
      tmp = tmp3;
    }
    return tmp;
  }
}
const prototype = CollectiblesShopStore.prototype;
Object.defineProperty(prototype, "analyticsLocations", {
  get: function analyticsLocations() {
    return analyticsLocations;
  },
  set: undefined
});
Object.defineProperty(prototype, "analyticsSource", {
  get: function analyticsSource() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "initialProductSkuId", {
  get: function initialProductSkuId() {
    return c0;
  },
  set: undefined
});
CollectiblesShopStore.displayName = "CollectiblesShopStore";
const obj = {
  COLLECTIBLES_SHOP_OPEN: function handleOpen(analyticsLocations) {
    analyticsLocations = analyticsLocations.analyticsLocations;
    if (analyticsLocations == null) {
      analyticsLocations = items;
    }
    let closure_2 = analyticsLocations;
    analyticsSource = analyticsLocations.analyticsSource;
    if (analyticsSource == null) {
      analyticsSource = null;
    }
    let c3 = analyticsSource;
    const initialProductSkuId = analyticsLocations.initialProductSkuId;
  },
  COLLECTIBLES_SHOP_CLOSE: function handleClose() {
    let closure_2 = items;
    let c3 = null;
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
    delete closure_6[tab];
    set.delete(tab);
  },
  COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: function handleShopTabLayoutFetchFailure(tab) {
    tab = tab.tab;
    closure_6[tab] = tab.apiError;
    set.delete(tab);
  },
  LOGOUT: function handleLogout() {
    let closure_2 = items;
    let c3 = null;
    c0 = undefined;
    closure_4 = {};
    set = new Set();
    closure_6 = {};
  }
};
const collectiblesShopStore = new CollectiblesShopStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopStore.tsx");

export default collectiblesShopStore;