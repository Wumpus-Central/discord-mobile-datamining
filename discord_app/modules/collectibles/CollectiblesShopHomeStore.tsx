// discord_app/modules/collectibles/CollectiblesShopHomeStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
const Store = get_initializedDefault.Store;
class CollectiblesShopHomesStore extends Store {
  getLastSuccessfulFetch(arg0) {
    return map.get(arg0);
  }
  getLastErrorTimestamp(arg0) {
    return map1.get(arg0);
  }
  getLastFetchOptions(arg0) {
    return map2.get(arg0);
  }
  getFetchShopHomeError(arg0) {
    return map3.get(arg0);
  }
  getIsFetchingShopHome(arg0) {
    return map4.get(arg0);
  }
  getShopBlocks(arg0) {
    let value = map6.get(arg0);
    if (value == null) {
      value = closure_0;
    }
    return value;
  }
  getHasKnownStaleData(arg0) {
    return map5.get(arg0);
  }
  getShopHomeConfigOverride() {
    return c8;
  }
  getShopLayoutUrlOverride() {
    return c9;
  }
}
const prototype = CollectiblesShopHomesStore.prototype;
CollectiblesShopHomesStore.displayName = "CollectiblesShopHomesStore";
const obj = {
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
  },
};
const collectiblesShopHomesStore = new CollectiblesShopHomesStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/collectibles/CollectiblesShopHomeStore.tsx");

export default collectiblesShopHomesStore;
