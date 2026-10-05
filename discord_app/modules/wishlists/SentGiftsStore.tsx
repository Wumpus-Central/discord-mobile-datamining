// discord_app/modules/wishlists/SentGiftsStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_1;

const PersistedStore = get_initializedDefault.PersistedStore;
class SentGiftsStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      const self = this;
      closure_1 = arg0;
      this.cleanupExpiredGifts();
    }
  }
  getState() {
    return closure_1;
  }
  hasSentGift(id, id2) {
    const tmp = closure_1.sentGifts["" + id + ":" + id2];
    let tmp2 = null != tmp;
    if (tmp2) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(tmp.expiresAt);
      tmp2 = date >= new Date();
      const date1 = new Date();
    }
    return tmp2;
  }
  getSentGift(arg0, arg1) {
    const tmp = closure_1.sentGifts["" + arg0 + ":" + arg1];
    let tmp2 = null;
    if (null != tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const self3 = this;
      const self4 = this;
      const date = new Date(tmp.expiresAt);
      tmp2 = null;
      const date1 = new Date();
      if (date >= date1) {
        tmp2 = tmp;
      }
    }
    return tmp2;
  }
  cleanupExpiredGifts() {
    const date = new Date();
    const entries = Object.entries(closure_1.sentGifts);
    const tmp3 = entries[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = _slicedToArray(tmp4, 2);
      let _Date = Date;
      let self = this;
      let self2 = this;
      let first = tmp6[0];
      let date1 = new Date(tmp6[1].expiresAt);
      if (date1 < date) {
        delete closure_1.sentGifts[tmp7];
      }
      continue;
    }
  }
}
const prototype = SentGiftsStore.prototype;
SentGiftsStore.displayName = "SentGiftsStore";
SentGiftsStore.persistKey = "SentGiftsStore";
const obj = {
  WISHLIST_GIFT_SENT: function handleGiftSent(skuId) {
    const combined = "" + skuId.skuId + ":" + skuId.recipientId;
    const date = new Date();
    const date1 = new Date(date.getTime() + 172800000);
    closure_1.sentGifts[combined] = {
      skuId: skuId.skuId,
      recipientId: skuId.recipientId,
      sentAt: date.toISOString(),
      expiresAt: date1.toISOString(),
    };
    ({
      skuId: skuId.skuId,
      recipientId: skuId.recipientId,
      sentAt: date.toISOString(),
      expiresAt: date1.toISOString(),
    });
  },
};
const sentGiftsStore = new SentGiftsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/wishlists/SentGiftsStore.tsx");

export default sentGiftsStore;
