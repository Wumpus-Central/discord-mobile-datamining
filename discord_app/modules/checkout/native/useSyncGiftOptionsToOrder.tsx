// discord_app/modules/checkout/native/useSyncGiftOptionsToOrder.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = new LoggerDefault("useSyncGiftOptionsToOrder");
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default function useSyncGiftOptionsToOrder(arg0, current) {
  closure_0 = arg0;
  _slicedToArray = noop.useRef(null);
  noop = noop.useRef(null);
  noop.useRef(false);
  noop.useRef(undefined);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef(null);
  noop.useRef(null);
  closure_10 = noop.useRef([]);
  [tmp2, closure_11] = _slicedToArray(noop.useState(0), 2);
  const callback = noop.useCallback((arg0) => {
    closure_10.current = [];
    for (const item10008 of tmp) {
      let item10008Result = item10008(arg0);
      continue;
    }
  }, []);
  const items = [callback];
  const effect = noop.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
      callback(false);
    },
    items,
  );
  const items1 = [arg0, current, tmp2, callback];
  const effect1 = noop.useEffect(() => {
    if (null != id) {
      id = tmp.id;
      ref2.current = current;
      if (ref5.current !== id) {
        ref5.current = id;
        ref4.current = tmp.revision;
        ref.current = null;
        ref3.current = 0;
      }
      if (ref7.current !== current) {
        ref3.current = 0;
      }
      if (!ref3.current) {
        if (ref.current !== current) {
          if (null != ref8.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref8.current);
            ref8.current = null;
          }
          tmp11.current = true;
          ref7.current = current;
          closure_0(current[3]);
          let obj = { orderId: id, giftInfo: null, expectedRevision: null };
          obj = {
            recipient_id: null,
            gift_style: null,
            emoji_id: null,
            emoji_name: null,
            sound_id: null,
            reward_sku_ids: null,
            custom_message_contents: null,
          };
          ({
            recipient_id: obj3.recipient_id,
            gift_style: obj3.gift_style,
            emoji_id: obj3.emoji_id,
            emoji_name: obj3.emoji_name,
            sound_id: obj3.sound_id,
            reward_sku_ids: obj3.reward_sku_ids,
            custom_message: obj3.custom_message_contents,
          } = current);
          obj.giftInfo = obj;
          obj.expectedRevision = ref4.current;
          const updateOrderResult = obj.updateOrder(obj);
          const nextPromise = obj.updateOrder(obj).then((current) => {
            ref4.current = current;
            ref.current = current;
            ref3.current = 0;
          });
          obj
            .updateOrder(obj)
            .then((current) => {
              ref4.current = current;
              ref.current = current;
              ref3.current = 0;
            })
            .catch((error) => {
              ref3.current = ref3.current + 1;
              let obj = { error, orderId: id };
              logger.error("Failed to sync gift customization to order", obj);
              obj = { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } };
              const result = BillingUtils.captureBillingException(error, obj);
            })
            .finally(() => {
              logger.current = false;
              if (ref.current !== ref2.current) {
                if (0 === ref3.current) {
                  closure_1_11((arg0) => arg0 + 1);
                } else if (ref3.current < 3) {
                  const _setTimeout = setTimeout;
                  ref8.current = setTimeout(() => closure_1_11((arg0) => arg0 + 1), 500 * 2 ** (ref3.current - 1));
                } else {
                  callback(false);
                }
              } else {
                callback(true);
              }
            });
          const catchPromise = obj
            .updateOrder(obj)
            .then((current) => {
              ref4.current = current;
              ref.current = current;
              ref3.current = 0;
            })
            .catch((error) => {
              ref3.current = ref3.current + 1;
              let obj = { error, orderId: id };
              logger.error("Failed to sync gift customization to order", obj);
              obj = { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } };
              const result = BillingUtils.captureBillingException(error, obj);
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
          current = ref3.current;
          current.push(arg0);
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
}
