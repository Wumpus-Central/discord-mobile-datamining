// discord_app/modules/wishlists/SentGiftsStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";

let closure_1 = { sentGifts: {} };
const PersistedStore = initializeDefault.PersistedStore;
class SentGiftsStore extends PersistedStore {
}
const prototype = SentGiftsStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    const self = this;
    closure_1 = arg0;
    this.cleanupExpiredGifts();
  }
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["hasSentGift"] = function hasSentGift(id, id2) {
  const tmp = closure_1.sentGifts["" + id + ":" + id2];
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
  const tmp = closure_1.sentGifts["" + arg0 + ":" + arg1];
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
  const entries = Object.entries(closure_1.sentGifts);
  const date = new Date();
  while (tmp5 !== undefined) {
    let tmp8 = callback(tmp6, 2);
    let _Date = Date;
    let date1 = new Date(tmp8[1].expiresAt);
    if (date1 < date) {
      let sentGifts = closure_1.sentGifts;
      let first = tmp8[0];
      delete tmp2[tmp];
    }
    continue;
  }
  tmp5 = entries[Symbol.iterator]();
};
SentGiftsStore.displayName = "SentGiftsStore";
SentGiftsStore.persistKey = "SentGiftsStore";
const sentGiftsStore = new SentGiftsStore(dispatcherDefault, {
  WISHLIST_GIFT_SENT: function handleGiftSent(skuId) {
    const combined = "" + skuId.skuId + ":" + skuId.recipientId;
    const date = new Date();
    const date1 = new Date(date.getTime() + 172800000);
    closure_1.sentGifts[combined] = { skuId: skuId.skuId, recipientId: skuId.recipientId, sentAt: date.toISOString(), expiresAt: new Date(date.getTime() + 172800000).toISOString() };
  }
});
const result = require("obj132").fileFinishedImporting("modules/wishlists/SentGiftsStore.tsx");

export default sentGiftsStore;