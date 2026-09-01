// === Module 14152: addRegularStoreListing ===

// Module 14152 (addRegularStoreListing)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1471 */;
import closure_3 from "_getSystemLocale" /* 1996 */;
import closure_4 from "createFromServer" /* 14153 */;
import set from "set" /* 2 */;

require = arg1;
function addRegularStoreListing(id) {
  let deleteResult = id;
  id = id.id;
  let id2 = id.sku.id;
  const fromServer = closure_4.createFromServer(id);
  if (!tmp2) {
    if (false === deleteResult.published) {
      if (null == dependencyMap3[id2]) {
        const _Set = Set;
        set = new Set();
        dependencyMap3[id2] = set;
      }
      id2 = dependencyMap3[id2];
      id2.add(id);
    } else {
      closure_8[id2] = id;
    }
    dependencyMap[id] = fromServer;
    deleteResult = set.delete(deleteResult.sku.id);
  }
}
function handleUserSettingsStoreUpdate() {
  if (locale === closure_3.locale) {
    return false;
  } else {
    closure_5 = {};
    closure_8 = {};
    closure_7 = {};
    closure_6 = {};
    const _Set = Set;
    set = new Set();
    locale = tmp.locale;
  }
}
let closure_5 = {};
let closure_6 = {};
let closure_7 = {};
let closure_8 = {};
let set = new Set();
const Store = initializeDefault.Store;
class StoreListingStore extends Store {
}
const prototype = StoreListingStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
  const items = [closure_3];
  this.syncWith(items, handleUserSettingsStoreUpdate);
  const locale = closure_3.locale;
};
prototype["get"] = function get(arg0) {
  return dependencyMap[arg0];
};
prototype["getForSKU"] = function getForSKU(arg0, arg1) {
  if (null != arg1) {
    const _HermesInternal = HermesInternal;
    let tmp2 = dependencyMap2["" + arg1 + ":" + arg0];
  } else {
    tmp2 = null;
    if (null != tmp) {
      tmp2 = dependencyMap[tmp];
    }
  }
  return tmp2;
};
prototype["getUnpublishedForSKU"] = function getUnpublishedForSKU(skuId) {
  if (null == dependencyMap3[skuId]) {
    let items = [];
  } else {
    const _Array = Array;
    const mapped = Array.from(tmp).map((arg0) => table[arg0]);
    items = mapped.filter(isDiscordFrontendDevelopment.isNotNullish);
    const arr = Array.from(tmp);
  }
  return items;
};
prototype["getForChannel"] = function getForChannel(channelId, skuId) {
  return dependencyMap2["" + channelId + ":" + skuId];
};
prototype["isFetchingForSKU"] = function isFetchingForSKU(arg0) {
  return set.has(arg0);
};
prototype["getStoreListing"] = function getStoreListing(isTestMode) {
  const self = this;
  ({ storeListingId, skuId, channelId } = isTestMode);
  if (isTestMode.isTestMode) {
    if (null != skuId) {
      const unpublishedForSKU = self.getUnpublishedForSKU(skuId);
      if (null != unpublishedForSKU) {
        if (unpublishedForSKU.length > 0) {
          return unpublishedForSKU[0];
        }
      }
    }
  }
  if (null != storeListingId) {
    return self.get(storeListingId);
  } else if (null != channelId) {
    if (null == skuId) {
      const _Error = Error;
      error = new Error("getStoreListing with channel expects a skuId");
      throw error;
    } else {
      return self.getForChannel(channelId, skuId);
    }
  } else {
    let forSKU = null;
    if (null != skuId) {
      forSKU = self.getForSKU(skuId);
    }
    return forSKU;
  }
};
StoreListingStore.displayName = "StoreListingStore";
const storeListingStore = new StoreListingStore(dispatcherDefault, {
  STORE_LISTINGS_FETCH_START: function handleStoreListingsFetchStart(skuId) {
    set.add(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_FAIL: function handleStoreListingsFetchFail(skuId) {
    set.delete(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_SUCCESS: function handleStoreListingsFetch(arg0) {
    while (tmp !== undefined) {
      let tmp3 = addRegularStoreListing;
      let tmp4 = addRegularStoreListing(tmp2);
      continue;
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetch(arg0) {
    ({ storeListing, channelId } = arg0);
    if (null != channelId) {
      const fromServer = closure_4.createFromServer(storeListing);
      const _HermesInternal = HermesInternal;
      closure_6["" + channelId + ":" + fromServer.skuId] = fromServer;
      closure_8[fromServer.skuId] = fromServer.id;
    } else {
      const id = storeListing.id;
      const id2 = storeListing.sku.id;
      const fromServer1 = closure_4.createFromServer(storeListing);
      if (!tmp) {
        if (false === storeListing.published) {
          if (null == dependencyMap3[id2]) {
            const _Set = Set;
            set = new Set();
            dependencyMap3[id2] = set;
          }
          dependencyMap3[id2].add(id);
          const obj = dependencyMap3[id2];
        } else {
          closure_8[id2] = id;
        }
        dependencyMap[id] = fromServer1;
        set.delete(storeListing.sku.id);
      }
      tmp = null != dependencyMap[id] && !dependencyMap[id].isSlimDirectoryVersion() && fromServer1.isSlimDirectoryVersion();
    }
  },
  USER_SETTINGS_PROTO_UPDATE: handleUserSettingsStoreUpdate,
  APPLICATION_STORE_CLEAR_DATA: function handleClearData() {
    closure_5 = {};
    closure_8 = {};
    closure_7 = {};
    closure_6 = {};
    set = new Set();
  },
  GIFT_CODE_RESOLVE_SUCCESS: function handleGiftCodeResolveSuccess(giftCode) {
    giftCode = giftCode.giftCode;
    if (null == giftCode.store_listing) {
      return false;
    } else {
      let store_listing = giftCode.store_listing;
      const id2 = store_listing.id;
      let id = store_listing.sku.id;
      const fromServer = closure_4.createFromServer(store_listing);
      if (!tmp) {
        if (false === store_listing.published) {
          if (null == dependencyMap3[id]) {
            const _Set = Set;
            set = new Set();
            dependencyMap3[id] = set;
          }
          id = dependencyMap3[id];
          id.add(id2);
        } else {
          closure_8[id] = id2;
        }
        dependencyMap[id2] = fromServer;
        store_listing = set.delete(store_listing.sku.id);
      }
      tmp = null != dependencyMap[id2] && !dependencyMap[id2].isSlimDirectoryVersion() && fromServer.isSlimDirectoryVersion();
    }
  }
});
const result = set.fileFinishedImporting("stores/game_store/StoreListingStore.tsx");

export default storeListingStore;