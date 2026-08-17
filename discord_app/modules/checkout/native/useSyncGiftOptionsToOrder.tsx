// discord_app/modules/checkout/native/useSyncGiftOptionsToOrder.tsx
import timestampDefault from "timestamp" /* 3 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
let closure_4 = new timestampDefault("useSyncGiftOptionsToOrder");
const tmp2 = new timestampDefault("useSyncGiftOptionsToOrder");
let result = require("set").fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default function useSyncGiftOptionsToOrder(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let callback = React.useRef(null);
  React = React.useRef(null);
  closure_4 = React.useRef(false);
  closure_5 = React.useRef(undefined);
  closure_6 = React.useRef(null);
  closure_7 = React.useRef(0);
  closure_8 = React.useRef(null);
  closure_9 = React.useRef(null);
  closure_10 = React.useRef([]);
  [tmp2, closure_11] = callback(React.useState(0), 2);
  callback = React.useCallback((arg0) => {
    closure_10.current = [];
    for (const item10008 of tmp) {
      let item10008Result = item10008(arg0);
      continue;
    }
  }, []);
  const items = [callback];
  const effect = React.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
    callback(false);
  }, items);
  const items1 = [arg0, arg1, tmp2, callback];
  const effect1 = React.useEffect(() => {
    if (null != id) {
      id = tmp.id;
      closure_3.current = table;
      if (ref5.current !== id) {
        ref5.current = id;
        ref4.current = tmp.revision;
        ref.current = null;
        closure_7.current = 0;
      }
      if (ref7.current !== table) {
        closure_7.current = 0;
      }
      if (!ref3.current) {
        if (ref.current !== tmp5) {
          if (null != ref8.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(tmp15.current);
            tmp15.current = null;
          }
          tmp11.current = true;
          tmp9.current = tmp5;
          let obj = callback(table[3]);
          obj = { orderId: null, giftInfo: null, expectedRevision: null };
          obj[0] = id;
          obj = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
          ({ recipient_id: obj3[0], gift_style: obj3[1], emoji_id: obj3[2], emoji_name: obj3[3], sound_id: obj3[4], reward_sku_ids: obj3[5], custom_message: obj3[6] } = tmp5);
          obj[1] = obj;
          obj[2] = ref4.current;
          const updateOrderResult = obj.updateOrder(obj);
          const nextPromise = obj.updateOrder(obj).then((current) => {
            closure_5.current = current;
            closure_2.current = closure_1;
            closure_7.current = 0;
          });
          obj.updateOrder(obj).then((current) => {
            closure_5.current = current;
            closure_2.current = closure_1;
            closure_7.current = 0;
          }).catch((error) => {
            closure_1_7.current = closure_1_7.current + 1;
            let obj = { error, orderId: id };
            logger.error("Failed to sync gift customization to order", obj);
            obj = { orderId: id };
            const result = id(table[4]).captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: obj });
          }).finally(() => {
            closure_4.current = false;
            if (ref.current !== ref2.current) {
              if (0 === ref3.current) {
                callback((arg0) => arg0 + 1);
              } else if (tmp3.current < 3) {
                const _setTimeout = setTimeout;
                closure_9.current = setTimeout(() => callback((arg0) => arg0 + 1), 500 * 2 ** (tmp3.current - 1));
              } else {
                callback2(false);
              }
            } else {
              callback2(true);
            }
          });
          const catchPromise = obj.updateOrder(obj).then((current) => {
            closure_5.current = current;
            closure_2.current = closure_1;
            closure_7.current = 0;
          }).catch((error) => {
            closure_1_7.current = closure_1_7.current + 1;
            let obj = { error, orderId: id };
            logger.error("Failed to sync gift customization to order", obj);
            obj = { orderId: id };
            const result = id(table[4]).captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: obj });
          });
        } else {
          callback(true);
        }
      }
      tmp9 = ref7;
    } else {
      callback(true);
    }
  }, items1);
  const items2 = [arg0];
  const callback1 = React.useCallback(() => {
    if (null != closure_0) {
      if (ref.current !== ref2.current) {
        if (ref6.current >= 3) {
          tmp3.current = 0;
        }
        let resolved = new Promise((arg0) => {
          let current = ref3.current;
          current.push(arg0);
          current = ref.current;
          if (!current) {
            current = null != ref2.current;
          }
          if (!current) {
            callback((arg0) => arg0 + 1);
          }
        });
      }
      return resolved;
    }
    resolved = Promise.resolve(true);
  }, items2);
  const items3 = [callback1];
  return React.useMemo(() => ({ awaitSync: callback1 }), items3);
};