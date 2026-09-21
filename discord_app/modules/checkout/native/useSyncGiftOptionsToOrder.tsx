// === Module 11273: useSyncGiftOptionsToOrder ===

// Module 11273 (useSyncGiftOptionsToOrder)
import LoggerDefault from "Logger" /* 3 */;
import BillingUtils from "BillingUtils" /* 4429 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(7666).useNativeCheckoutStoreOrNull;
let closure_5 = new LoggerDefault("useSyncGiftOptionsToOrder");
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default function useSyncGiftOptionsToOrder(arg0, current) {
  closure_0 = arg0;
  _slicedToArray = noop.useRef(null);
  noop = noop.useRef(null);
  noop.useRef(undefined);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef(null);
  noop.useRef(null);
  closure_10 = noop.useRef([]);
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_11 = tmp[1];
  const tmp2 = noop.useRef(false)((setOrderRevision) => setOrderRevision.setOrderRevision);
  closure_12 = tmp2;
  const callback = noop.useCallback((arg0) => {
    closure_10.current = [];
    for (const item10008 of tmp) {
      let item10008Result = item10008(arg0);
      continue;
    }
  }, []);
  const items = [callback];
  const effect = noop.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    callback(false);
  }, items);
  const items1 = [arg0, current, tmp[0], callback, tmp2];
  const effect1 = noop.useEffect(() => {
    if (null != id) {
      id = tmp.id;
      ref2.current = current;
      if (ref5.current !== id) {
        ref5.current = id;
        ref4.current = tmp.revision;
        ref.current = null;
        ref4.current = 0;
        let tmp8 = ref4;
      } else {
        tmp8 = ref4;
        if (tmp7) {
          ref4.current = tmp.revision;
          tmp8 = ref4;
        }
        tmp7 = null == ref4.current || tmp.revision > ref4.current;
      }
      if (ref7.current !== current) {
        ref4.current = 0;
      }
      if (!ref3.current) {
        if (ref.current !== current) {
          if (null != ref8.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref8.current);
            ref8.current = null;
          }
          tmp14.current = true;
          ref7.current = current;
          const obj2 = { orderId: id, giftInfo: null, expectedRevision: null };
          ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = current);
          obj2.giftInfo = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
          obj2.expectedRevision = tmp8.current;
          const obj = closure_0(current[4]);
          const obj5 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
          const updateOrderResult = closure_0(current[4]).updateOrder(obj2);
          const nextPromise = closure_0(current[4]).updateOrder(obj2).then((current) => {
            if (ref3.current === id) {
              if (tmp5) {
                logger.current = current;
              }
              closure_2.current = current;
              closure_7.current = 0;
              if (closure_12 != null) {
                tmp9(tmp, current);
              }
              tmp5 = null == logger.current || current > logger.current;
            }
          });
          closure_0(current[4]).updateOrder(obj2).then((current) => {
            if (ref3.current === id) {
              if (tmp5) {
                logger.current = current;
              }
              closure_2.current = current;
              closure_7.current = 0;
              if (closure_12 != null) {
                tmp9(tmp, current);
              }
              tmp5 = null == logger.current || current > logger.current;
            }
          }).catch((error) => {
            ref4.current = ref4.current + 1;
            logger.error("Failed to sync gift customization to order", { error, orderId: id });
            const result = BillingUtils.captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } });
          }).finally(() => {
            ref3.current = false;
            if (ref.current !== ref2.current) {
              if (0 === ref4.current) {
                closure_1_11((arg0) => arg0 + 1);
              } else if (ref4.current < 3) {
                const _setTimeout = setTimeout;
                ref8.current = setTimeout(() => closure_1_11((arg0) => arg0 + 1), 500 * 2 ** (ref4.current - 1));
              } else {
                callback(false);
              }
            } else {
              callback(true);
            }
          });
          const catchPromise = closure_0(current[4]).updateOrder(obj2).then((current) => {
            if (ref3.current === id) {
              if (tmp5) {
                logger.current = current;
              }
              closure_2.current = current;
              closure_7.current = 0;
              if (closure_12 != null) {
                tmp9(tmp, current);
              }
              tmp5 = null == logger.current || current > logger.current;
            }
          }).catch((error) => {
            ref4.current = ref4.current + 1;
            logger.error("Failed to sync gift customization to order", { error, orderId: id });
            const result = BillingUtils.captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } });
          });
        } else {
          callback(true);
        }
      }
    } else {
      callback(true);
    }
  }, items1);
  const items2 = [arg0];
  const callback1 = noop.useCallback(() => {
    if (null != closure_0) {
      if (ref.current !== ref2.current) {
        if (ref6.current >= 3) {
          tmp3.current = 0;
        }
        let resolved = new Promise((arg0) => {
          const current1 = ref3.current;
          current1.push(arg0);
          current = ref.current;
          if (!current) {
            current = null != ref2.current;
          }
          if (!current) {
            closure_1_11((arg0) => arg0 + 1);
          }
        });
      }
      return resolved;
    }
    resolved = Promise.resolve(true);
  }, items2);
  const items3 = [callback1];
  return noop.useMemo(() => ({ awaitSync: callback1 }), items3);
};