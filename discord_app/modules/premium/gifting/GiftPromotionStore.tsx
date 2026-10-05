// === Module 6926: GiftPromotionStore ===

// Module 6926 (GiftPromotionStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

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
  }
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
  }
};
const giftPromotionStore = new GiftPromotionStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/premium/gifting/GiftPromotionStore.tsx");

export default giftPromotionStore;