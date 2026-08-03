// === Module 6781: initialize ===

// Module 6781 (initialize)
import { PersistedStore } from "initialize";

let closure_0 = { giftOptionsReceiptMap: {} };
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
prototype["getGiftOptionsForKey"] = function getGiftOptionsForKey(closure_3) {
  return closure_0.giftOptionsReceiptMap[closure_3];
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
const giftPromotionStore = new GiftPromotionStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    let closure_0 = { giftOptionsReceiptMap: {} };
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