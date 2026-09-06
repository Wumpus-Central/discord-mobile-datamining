// === Module 11035: SentGiftsStore ===

// Module 11035 (SentGiftsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import _slicedToArray from "module_32" /* 32 */;

let global = { sentGifts: {} };
const PersistedStore = initializeDefault.PersistedStore;
class SentGiftsStore extends PersistedStore {
}
const prototype = SentGiftsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    const self = this;
    global = arg0;
    this.cleanupExpiredGifts();
  }
};
prototype["getState"] = function getState() {
  return global;
};
prototype["hasSentGift"] = function hasSentGift(id, id2) {
  const tmp = global.sentGifts["" + id + ":" + id2];
  let tmp2 = null != tmp;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(tmp.expiresAt);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = date >= date1;
  }
  return tmp2;
};
prototype["getSentGift"] = function getSentGift(arg0, arg1) {
  const tmp = global.sentGifts["" + arg0 + ":" + arg1];
  let tmp2 = null;
  if (null != tmp) {
    const _Date = Date;
    const date = new Date(tmp.expiresAt);
    const _Date2 = Date;
    const date1 = new Date();
    tmp2 = null;
    if (date >= date1) {
      tmp2 = tmp;
    }
  }
  return tmp2;
};
prototype["cleanupExpiredGifts"] = function cleanupExpiredGifts() {
  const entries = Object.entries(global.sentGifts);
  const date = new Date();
  while (tmp5 !== undefined) {
    let tmp8 = _slicedToArray(tmp6, 2);
    let _Date = Date;
    let tmp9 = new.target;
    let tmp10 = new.target;
    let date1 = new Date(tmp8[1].expiresAt);
    if (date1 < date) {
      let sentGifts = global.sentGifts;
      let first = tmp8[0];
      delete tmp2[tmp];
    }
    continue;
  }
  tmp5 = entries[Symbol.iterator]();
};
SentGiftsStore.displayName = "SentGiftsStore";
SentGiftsStore.persistKey = "SentGiftsStore";
const sentGiftsStore = new SentGiftsStore(DispatcherDefault, {
  WISHLIST_GIFT_SENT: function handleGiftSent(skuId) {
    const combined = "" + skuId.skuId + ":" + skuId.recipientId;
    const date = new Date();
    const date1 = new Date(date.getTime() + 172800000);
    global.sentGifts[combined] = { skuId: skuId.skuId, recipientId: skuId.recipientId, sentAt: date.toISOString(), expiresAt: new Date(date.getTime() + 172800000).toISOString() };
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/SentGiftsStore.tsx");

export default sentGiftsStore;