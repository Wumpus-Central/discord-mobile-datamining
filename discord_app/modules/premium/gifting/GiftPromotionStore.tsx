// === Module 7420: GiftPromotionStore ===

// Module 7420 (GiftPromotionStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

let closure_0 = { giftOptionsReceiptMap: {} };
const PersistedStore = initializeDefault.PersistedStore;
class GiftPromotionStore extends PersistedStore {
}
const prototype = GiftPromotionStore.prototype;
prototype["initialize"] = function initialize(giftOptionsReceiptMap) {
  if (null != giftOptionsReceiptMap) {
    const obj = {};
    const merged = Object.assign(giftOptionsReceiptMap.giftOptionsReceiptMap);
    closure_0.giftOptionsReceiptMap = obj;
  }
};
prototype["getState"] = function getState() {
  return closure_0;
};
prototype["getGiftOptionsForKey"] = function getGiftOptionsForKey(v3Result) {
  return closure_0.giftOptionsReceiptMap[v3Result];
};
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
      const obj = { giftOptionsReceiptMap: prop };
      tmp = obj;
    }
    return tmp;
  }
];
GiftPromotionStore.migrations = items;
const giftPromotionStore = new GiftPromotionStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    closure_0 = { giftOptionsReceiptMap: {} };
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION: function handleCacheGiftOptions(key) {
    closure_0.giftOptionsReceiptMap[key.key] = key.giftOptions;
  },
  GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION: function handleClearCachedGiftOptions(arg0) {
    delete tmp[tmp2];
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/GiftPromotionStore.tsx");

export default giftPromotionStore;