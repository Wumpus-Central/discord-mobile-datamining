// === Module 7586: CollectiblesShopHomeStore ===

// Module 7586 (CollectiblesShopHomeStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let closure_0 = [];
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const map4 = new Map();
const map5 = new Map();
const map6 = new Map();
let c8;
let c9;
const Store = initializeDefault.Store;
class CollectiblesShopHomesStore extends Store {
}
const prototype = CollectiblesShopHomesStore.prototype;
prototype["getLastSuccessfulFetch"] = function getLastSuccessfulFetch(arg0) {
  return map.get(arg0);
};
prototype["getLastErrorTimestamp"] = function getLastErrorTimestamp(arg0) {
  return map1.get(arg0);
};
prototype["getLastFetchOptions"] = function getLastFetchOptions(arg0) {
  return map2.get(arg0);
};
prototype["getFetchShopHomeError"] = function getFetchShopHomeError(arg0) {
  return map3.get(arg0);
};
prototype["getIsFetchingShopHome"] = function getIsFetchingShopHome(arg0) {
  return map4.get(arg0);
};
prototype["getShopBlocks"] = function getShopBlocks(arg0) {
  value = map6.get(arg0);
  if (value == null) {
    value = closure_0;
  }
  return value;
};
prototype["getHasKnownStaleData"] = function getHasKnownStaleData(arg0) {
  return map5.get(arg0);
};
prototype["getShopHomeConfigOverride"] = function getShopHomeConfigOverride() {
  return c8;
};
prototype["getShopLayoutUrlOverride"] = function getShopLayoutUrlOverride() {
  return c9;
};
CollectiblesShopHomesStore.displayName = "CollectiblesShopHomesStore";
const collectiblesShopHomesStore = new CollectiblesShopHomesStore(DispatcherDefault, {
  COLLECTIBLES_SHOP_HOME_FETCH: function handleFetchShopHome(tab) {
    const result = map4.set(tab.tab, true);
    const result1 = map3.set(tab.tab, undefined);
    const result2 = map2.set(tab.tab, tab.options);
    const result3 = map2.set(tab.tab, tab.options);
    const result4 = map1.set(tab.tab, undefined);
    const result5 = map5.set(tab.tab, false);
  },
  COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: function handleFetchShopHomeSuccess(tab) {
    const result = map6.set(tab.tab, tab.shopHome.shopBlocks);
    const result1 = map.set(tab.tab, Date.now());
    const result2 = map4.set(tab.tab, false);
    const result3 = map3.set(tab.tab, undefined);
    const result4 = map1.set(tab.tab, undefined);
    const result5 = map5.set(tab.tab, false);
  },
  COLLECTIBLES_SHOP_HOME_FETCH_FAILURE: function handleFetchShopHomeFailure(tab) {
    const result = map6.set(tab.tab, closure_0);
    const result1 = map4.set(tab.tab, false);
    const result2 = map3.set(tab.tab, tab.error);
    const result3 = map1.set(tab.tab, Date.now());
    const result4 = map5.set(tab.tab, true);
  },
  COLLECTIBLES_SET_SHOP_HOME_CONFIG_OVERRIDE: function handleSetShopHomeConfigOverride(shopHomeConfigOverride) {
    c8 = shopHomeConfigOverride.shopHomeConfigOverride;
  },
  COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: function handleSetShopLayoutUrlOverride(shopLayoutUrlOverride) {
    c9 = shopLayoutUrlOverride.shopLayoutUrlOverride;
  },
  LOGOUT: function reset() {
    map6.clear();
    map2.clear();
    map3.clear();
    map4.clear();
    map.clear();
    map1.clear();
    map5.clear();
    c8 = undefined;
    c9 = undefined;
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopHomeStore.tsx");

export default collectiblesShopHomesStore;