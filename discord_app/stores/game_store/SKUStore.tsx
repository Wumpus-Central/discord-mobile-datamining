// discord_app/stores/game_store/SKUStore.tsx
import initializeAll from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SKURecord from "../../modules/skus/SKURecord.tsx";
import LocaleStore from "../../modules/user_settings/LocaleStore.tsx";

function addSku(sku) {
  value = map1.get(sku.id);
  const fromServer = SKURecord.createFromServer(sku);
  if (null != value) {
    if (tmp3) {
      fromServer.price = value.price;
    }
    const _Object = Object;
    let tmp5 = 0 === Object.keys(fromServer.prices).length;
    if (tmp5) {
      const _Object2 = Object;
      tmp5 = Object.keys(value.prices).length > 0;
    }
    if (tmp5) {
      fromServer.prices = value.prices;
    }
    if (tmp6) {
      fromServer.orbsReward = value.orbsReward;
    }
    if (tmp7) {
      fromServer.eligibleOffers = value.eligibleOffers;
    }
    tmp3 = null == fromServer.price && null != value.price;
    tmp6 = null == fromServer.orbsReward && null != value.orbsReward;
    tmp7 = 0 === fromServer.eligibleOffers.length && value.eligibleOffers.length > 0;
  }
  let result = map1.set(sku.id, fromServer);
  set.delete(sku.id);
  set1.delete(sku.id);
  const bundled_sku_ids = sku.bundled_sku_ids;
  if (bundled_sku_ids != null) {
    const item = bundled_sku_ids.forEach((item) => {
      const result = map.set(item, sku.id);
    });
  }
  if (!map2.has(sku.application_id)) {
    const _Set = Set;
    set = new Set();
    const result1 = map2.set(sku.application_id, set);
  }
  value = map2.get(sku.application_id);
  value.add(sku.id);
}
function skuFetchSuccess(sku) {
  addSku(sku);
}
function handleStoreListing(sku) {
  addSku(sku.sku);
  if (null != sku.child_skus) {
    const child_skus = sku.child_skus;
    const item = child_skus.forEach((item) => {
      addSku(item);
    });
  }
  if (null != sku.alternative_skus) {
    const alternative_skus = sku.alternative_skus;
    const item1 = alternative_skus.forEach((item) => {
      addSku(item);
    });
  }
}
function handleEntitlementsFetch(arg0) {
  const iter = arg0.entitlements[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (null != nextResult.sku) {
      let tmp5 = addSku(tmp2.sku);
    }
    continue;
  }
}
function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    locale = tmp.locale;
    const _Map = Map;
    map = new Map();
    const _Set = Set;
    set = new Set();
    const _Set2 = Set;
    set1 = new Set();
    const _Map2 = Map;
    map1 = new Map();
    const _Map3 = Map;
    map2 = new Map();
    const _Map4 = Map;
    map3 = new Map();
  }
}
let map = new Map();
let set = new Set();
let set1 = new Set();
let map1 = new Map();
let map2 = new Map();
let map3 = new Map();
const Store = initializeAll.Store;
class SKUStore extends Store {}
const prototype = SKUStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(LocaleStore);
  const items = [LocaleStore];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  locale = LocaleStore.locale;
};
prototype["get"] = function get(arg0) {
  return map1.get(arg0);
};
prototype["getForApplication"] = function getForApplication(arg0) {
  value = map2.get(arg0);
  if (null == value) {
    let items = [];
  } else {
    const _Array = Array;
    items = Array.from(value).map((item) => map1.get(item));
    const arr = Array.from(value);
  }
  return items;
};
prototype["isFetching"] = function isFetching(arg0) {
  return set.has(arg0);
};
prototype["getFetchingSkuIds"] = function getFetchingSkuIds() {
  const items = [...set.keys()];
  return items;
};
prototype["getSKUs"] = function getSKUs() {
  return Object.fromEntries(map1);
};
prototype["getParentSKU"] = function getParentSKU(arg0) {
  value = map.get(arg0);
  if (null != value) {
    const self = this;
    return this.get(value);
  }
};
prototype["didFetchingSkuFail"] = function didFetchingSkuFail(skuId) {
  return set1.has(skuId);
};
SKUStore.displayName = "SKUStore";
const sKUStore = new SKUStore(DispatcherDefault, {
  STORE_LISTINGS_FETCH_START: function handleStoreListingsFetchStart(skuId) {
    set.add(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_FAIL: function handleStoreListingsFetchFail(skuId) {
    skuId = skuId.skuId;
    set.delete(skuId);
    set1.add(skuId);
  },
  STORE_LISTINGS_FETCH_SUCCESS: function handleStoreListingsFetchSuccess(arg0) {
    while (tmp !== undefined) {
      let tmp4 = handleStoreListing(tmp2);
      continue;
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetchSuccess(storeListing) {
    storeListing = storeListing.storeListing;
    addSku(storeListing.sku);
    if (null != storeListing.child_skus) {
      const child_skus = storeListing.child_skus;
      const item = child_skus.forEach((item) => {
        addSku(item);
      });
    }
    if (null != storeListing.alternative_skus) {
      const alternative_skus = storeListing.alternative_skus;
      const item1 = alternative_skus.forEach((item) => {
        addSku(item);
      });
    }
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    if (null == giftCode.store_listing) {
      return false;
    } else {
      addSku(giftCode.store_listing.sku);
    }
  },
  SKU_FETCH_START: function handleSkuFetchStart(skuId) {
    set.add(skuId.skuId);
  },
  SKU_FETCH_SUCCESS: function handleSkuFetchSuccess(sku) {
    addSku(sku.sku);
  },
  SKU_FETCH_FAIL: function handleSkuFetchFail(skuId) {
    skuId = skuId.skuId;
    set.delete(skuId);
    set1.add(skuId);
  },
  SKUS_FETCH_SUCCESS: function handleSkusFetchSuccess(arg0) {
    ({ guildId, skus } = arg0);
    while (tmp !== undefined) {
      let tmp4 = skuFetchSuccess(tmp2);
      continue;
    }
    if (null != guildId) {
      const _Set = Set;
      set = new Set(skus.map((id) => id.id));
      const result = map3.set(guildId, set);
    }
  },
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: handleEntitlementsFetch,
  APPLICATION_STORE_CLEAR_DATA: function handleClearData() {
    map = new Map();
    set = new Set();
    set1 = new Set();
    map1 = new Map();
    map2 = new Map();
    map3 = new Map();
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: handleEntitlementsFetch,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: handleEntitlementsFetch,
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/game_store/SKUStore.tsx");

export default sKUStore;
