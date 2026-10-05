// discord_app/stores/game_store/StoreListingStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import LocaleStore from "../../modules/user_settings/LocaleStore.tsx";
import StoreListingRecord from "../../records/StoreListingRecord.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_5, closure_6, closure_7, closure_8, locale;

function addRegularStoreListing(id) {
  id = id.id;
  const id2 = id.sku.id;
  const fromServer = StoreListingRecord.createFromServer(id);
  const tmp = null != closure_5[id] && !closure_5[id].isSlimDirectoryVersion() && fromServer.isSlimDirectoryVersion();
  if (!tmp) {
    if (false === id.published) {
      if (null == closure_7[id2]) {
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        closure_7[id2] = set;
      }
      const obj3 = closure_7[id2];
      obj3.add(id);
    } else {
      closure_8[id2] = id;
    }
    closure_5[id] = fromServer;
    set.delete(id.sku.id);
  }
}
function handleUserSettingsStoreUpdate() {
  if (locale === LocaleStore.locale) {
    return false;
  } else {
    closure_5 = {};
    closure_8 = {};
    closure_7 = {};
    closure_6 = {};
    const _Set = Set;
    const self = this;
    const self2 = this;
    new Set();
    locale = tmp.locale;
  }
}
const hasOwnProperty = {};
const metroRequire = {};
const metroImportDefault = {};
const metroImportAll = {};
let set = new Set();
const Store = get_initializedDefault.Store;
class StoreListingStore extends Store {
  initialize() {
    this.waitFor(LocaleStore);
    const items = [LocaleStore];
    this.syncWith(items, handleUserSettingsStoreUpdate);
    locale = LocaleStore.locale;
  }
  get(arg0) {
    return closure_5[arg0];
  }
  getForSKU(arg0, arg1) {
    let tmp2;
    if (null != arg1) {
      const _HermesInternal = HermesInternal;
      tmp2 = closure_6["" + arg1 + ":" + arg0];
    } else {
      tmp2 = null;
      if (null != closure_8[arg0]) {
        tmp2 = closure_5[tmp];
      }
    }
    return tmp2;
  }
  getUnpublishedForSKU(skuId) {
    let items;
    if (null == closure_7[skuId]) {
      items = [];
    } else {
      const _Array = Array;
      const arr = Array.from(closure_7[skuId]);
      const mapped = arr.map((item) => closure_1_5[item]);
      items = mapped.filter(GlobalUtils.isNotNullish);
    }
    return items;
  }
  getForChannel(channelId, skuId) {
    return closure_6["" + channelId + ":" + skuId];
  }
  isFetchingForSKU(arg0) {
    return set.has(arg0);
  }
  getStoreListing(isTestMode) {
    let channelId;
    let skuId;
    let storeListingId;
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
        const self2 = this;
        const self3 = this;
        const error = new Error("getStoreListing with channel expects a skuId");
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
  }
}
const prototype = StoreListingStore.prototype;
StoreListingStore.displayName = "StoreListingStore";
let obj = {
  STORE_LISTINGS_FETCH_START: function handleStoreListingsFetchStart(skuId) {
    set.add(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_FAIL: function handleStoreListingsFetchFail(skuId) {
    set.delete(skuId.skuId);
  },
  STORE_LISTINGS_FETCH_SUCCESS: function handleStoreListingsFetch(arg0) {
    const tmp = arg0.storeListings[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = addRegularStoreListing(tmp2);
      continue;
    }
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetch(arg0) {
    let channelId;
    let storeListing;
    ({ storeListing, channelId } = arg0);
    if (null != channelId) {
      const fromServer = StoreListingRecord.createFromServer(storeListing);
      const _HermesInternal = HermesInternal;
      closure_6["" + channelId + ":" + fromServer.skuId] = fromServer;
      closure_8[fromServer.skuId] = fromServer.id;
    } else {
      const id = storeListing.id;
      const id2 = storeListing.sku.id;
      const fromServer1 = StoreListingRecord.createFromServer(storeListing);
      const tmp =
        null != closure_5[id] && !closure_5[id].isSlimDirectoryVersion() && fromServer1.isSlimDirectoryVersion();
      if (!tmp) {
        if (false === storeListing.published) {
          if (null == closure_7[id2]) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            closure_7[id2] = set;
          }
          const obj = closure_7[id2];
          obj.add(id);
        } else {
          closure_8[id2] = id;
        }
        closure_5[id] = fromServer1;
        set.delete(storeListing.sku.id);
      }
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
      const store_listing = giftCode.store_listing;
      const id = store_listing.id;
      const id2 = store_listing.sku.id;
      const fromServer = StoreListingRecord.createFromServer(store_listing);
      const tmp =
        null != closure_5[id] && !closure_5[id].isSlimDirectoryVersion() && fromServer.isSlimDirectoryVersion();
      if (!tmp) {
        if (false === store_listing.published) {
          if (null == closure_7[id2]) {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            closure_7[id2] = set;
          }
          const obj = closure_7[id2];
          obj.add(id);
        } else {
          closure_8[id2] = id;
        }
        closure_5[id] = fromServer;
        set.delete(store_listing.sku.id);
      }
    }
  },
};
const storeListingStore = new StoreListingStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/game_store/StoreListingStore.tsx");

export default storeListingStore;
