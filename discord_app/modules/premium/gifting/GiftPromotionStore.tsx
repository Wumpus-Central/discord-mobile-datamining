// === Module 7165: initialize ===

// Module 7165 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

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
      const obj = { giftOptionsReceiptMap: null };
      obj[0] = prop;
      tmp = obj;
    }
    return tmp;
  }
];
GiftPromotionStore.migrations = items;
const giftPromotionStore = new GiftPromotionStore(dispatcherDefault, {
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
const result = require("set").fileFinishedImporting("modules/premium/gifting/GiftPromotionStore.tsx");

export default giftPromotionStore;