// discord_app/modules/premium/gifting/GiftPromotionStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_0;

const React = { giftOptionsReceiptMap: {} };
const PersistedStore = get_initializedDefault.PersistedStore;
class GiftPromotionStore extends PersistedStore {
  initialize(giftOptionsReceiptMap) {
    if (null != giftOptionsReceiptMap) {
      const obj = {};
      const merged = Object.assign(giftOptionsReceiptMap.giftOptionsReceiptMap);
      closure_0.giftOptionsReceiptMap = obj;
    }
  }
  getState() {
    return closure_0;
  }
  getGiftOptionsForKey(v3Result) {
    return closure_0.giftOptionsReceiptMap[v3Result];
  }
}
const prototype = GiftPromotionStore.prototype;
GiftPromotionStore.displayName = "GiftPromotionStore";
GiftPromotionStore.persistKey = "GiftPromotionStore";
const items = [
  (giftOptionsReceiptMap) => {
    let tmp = giftOptionsReceiptMap;
    if (null != giftOptionsReceiptMap) {
      let prop = giftOptionsReceiptMap.giftOptionsReceiptMap;
      if (prop == null) {
        prop = null;
      }
      tmp = { giftOptionsReceiptMap: prop };
      const obj = { giftOptionsReceiptMap: prop };
    }
    return tmp;
  },
];
GiftPromotionStore.migrations = items;
let obj = {
  LOGOUT: function handleLogout() {
    closure_0 = { giftOptionsReceiptMap: {} };
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION: function handleCacheGiftOptions(key) {
    closure_0.giftOptionsReceiptMap[key.key] = key.giftOptions;
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION: function handleClearCachedGiftOptions(arg0) {
    delete closure_0.giftOptionsReceiptMap[arg0.key];
  },
};
const giftPromotionStore = new GiftPromotionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/premium/gifting/GiftPromotionStore.tsx");

export default giftPromotionStore;
