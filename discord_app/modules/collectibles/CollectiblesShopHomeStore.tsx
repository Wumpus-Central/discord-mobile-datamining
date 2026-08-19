// === Module 5352: map ===

// Module 5352 (map)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

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
prototype["getLastSuccessfulFetch"] = function getLastSuccessfulFetch(closure_0) {
  return map.get(closure_0);
};
prototype["getLastErrorTimestamp"] = function getLastErrorTimestamp(closure_0) {
  return map1.get(closure_0);
};
prototype["getLastFetchOptions"] = function getLastFetchOptions(closure_0) {
  return map2.get(closure_0);
};
prototype["getFetchShopHomeError"] = function getFetchShopHomeError(closure_0) {
  return map3.get(closure_0);
};
prototype["getIsFetchingShopHome"] = function getIsFetchingShopHome(closure_0) {
  return map4.get(closure_0);
};
prototype["getShopBlocks"] = function getShopBlocks(closure_0) {
  let value = map6.get(closure_0);
  if (value == null) {
    value = closure_0;
  }
  return value;
};
prototype["getHasKnownStaleData"] = function getHasKnownStaleData(closure_0) {
  return map5.get(closure_0);
};
prototype["getShopHomeConfigOverride"] = function getShopHomeConfigOverride() {
  return c8;
};
prototype["getShopLayoutUrlOverride"] = function getShopLayoutUrlOverride() {
  return c9;
};
CollectiblesShopHomesStore.displayName = "CollectiblesShopHomesStore";
const collectiblesShopHomesStore = new CollectiblesShopHomesStore(dispatcherDefault, {
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
    shopHomeConfigOverride = shopHomeConfigOverride.shopHomeConfigOverride;
  },
  COLLECTIBLES_SET_SHOP_LAYOUT_URL_OVERRIDE: function handleSetShopLayoutUrlOverride(shopLayoutUrlOverride) {
    shopLayoutUrlOverride = shopLayoutUrlOverride.shopLayoutUrlOverride;
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
let result = require("obj132").fileFinishedImporting("modules/collectibles/CollectiblesShopHomeStore.tsx");

export default collectiblesShopHomesStore;