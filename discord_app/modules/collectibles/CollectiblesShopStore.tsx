// === Module 7724: CollectiblesShopStore ===

// Module 7724 (CollectiblesShopStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;

const items = [];
let analyticsLocations = items;
let c3 = null;
const Store = initializeDefault.Store;
class CollectiblesShopStore extends Store {
}
const prototype = CollectiblesShopStore.prototype;
Object.defineProperty(prototype, "analyticsLocations", {
  get: function analyticsLocations() {
    return closure_2;
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
prototype["getAnalytics"] = function getAnalytics() {
  return { analyticsLocations, analyticsSource };
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
  LOGOUT: function handleLogout() {
    closure_2 = items;
    c3 = null;
    c0 = undefined;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopStore.tsx");

export default collectiblesShopStore;