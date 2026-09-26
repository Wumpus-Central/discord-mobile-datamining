// discord_app/modules/checkout/native/useSyncGiftOptionsToOrder.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import useGiftOptionsSyncDebounceDefault from "../../payments/native/hooks/useGiftOptionsSyncDebounce.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_5 = fn(6844).useNativeCheckoutStoreOrNull;
let closure_6 = new LoggerDefault("useSyncGiftOptionsToOrder");
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default function useSyncGiftOptionsToOrder(arg0, current) {
  closure_0 = arg0;
  importDefault = current;
  dependencyMap = noop.useRef(null);
  _slicedToArray = noop.useRef(null);
  noop = noop.useRef(false);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef(null);
  noop.useRef(null);
  const tmp = _slicedToArray(noop.useState(0), 2);
  closure_10 = tmp2;
  const tmp3 = noop.useRef(undefined)((setOrderRevision) => setOrderRevision.setOrderRevision);
  closure_11 = tmp3;
  const tmp4 = useGiftOptionsSyncDebounceDefault(tmp[1]);
  const waitForPause = tmp4.waitForPause;
  const flush = tmp4.flush;
  const waitForSync = tmp4.waitForSync;
  const resolveSyncs = tmp4.resolveSyncs;
  const effect = noop.useEffect(
    () => () => {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
    },
    [],
  );
  const items = [arg0, current, tmp[0], resolveSyncs, tmp3, waitForPause];
  const effect1 = noop.useEffect(() => {
    if (null != id) {
      id = tmp.id;
      ref2.current = current;
      if (ref5.current !== id) {
        ref5.current = id;
        ref4.current = tmp.revision;
        ref.current = null;
        ref7.current = null;
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
          let tmp19 = null != ref7.current && ref7.current !== current;
          if (tmp19) {
            tmp19 = waitForPause(current);
          }
          if (!tmp19) {
            if (null != ref8.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref8.current);
              ref8.current = null;
            }
            tmp15.current = true;
            ref7.current = current;
            const obj2 = { orderId: id, giftInfo: null, expectedRevision: null };
            ({
              recipient_id: obj3.recipient_id,
              gift_style: obj3.gift_style,
              emoji_id: obj3.emoji_id,
              emoji_name: obj3.emoji_name,
              sound_id: obj3.sound_id,
              reward_sku_ids: obj3.reward_sku_ids,
              custom_message: obj3.custom_message_contents,
            } = current);
            obj2.giftInfo = {
              recipient_id: null,
              gift_style: null,
              emoji_id: null,
              emoji_name: null,
              sound_id: null,
              reward_sku_ids: null,
              custom_message_contents: null,
            };
            obj2.expectedRevision = tmp8.current;
            const obj = closure_0(ref[5]);
            const obj5 = {
              recipient_id: null,
              gift_style: null,
              emoji_id: null,
              emoji_name: null,
              sound_id: null,
              reward_sku_ids: null,
              custom_message_contents: null,
            };
            const updateOrderResult = closure_0(ref[5]).updateOrder(obj2);
            const nextPromise = closure_0(ref[5])
              .updateOrder(obj2)
              .then((current) => {
                if (logger.current === id) {
                  if (tmp5) {
                    ref3.current = current;
                  }
                  closure_2.current = current;
                  closure_7.current = 0;
                  if (closure_11 != null) {
                    tmp9(tmp, current);
                  }
                  tmp5 = null == ref3.current || current > ref3.current;
                }
              });
            closure_0(ref[5])
              .updateOrder(obj2)
              .then((current) => {
                if (logger.current === id) {
                  if (tmp5) {
                    ref3.current = current;
                  }
                  closure_2.current = current;
                  closure_7.current = 0;
                  if (closure_11 != null) {
                    tmp9(tmp, current);
                  }
                  tmp5 = null == ref3.current || current > ref3.current;
                }
              })
              .catch((error) => {
                ref4.current = ref4.current + 1;
                logger.error("Failed to sync gift customization to order", { error, orderId: id });
                const result = BillingUtils.captureBillingException(error, {
                  tags: { source: "useSyncGiftOptionsToOrder" },
                  extra: { orderId: id },
                });
              })
              .finally(() => {
                ref3.current = false;
                if (ref.current !== ref2.current) {
                  if (0 === ref4.current) {
                    closure_1_10((arg0) => arg0 + 1);
                  } else if (ref4.current < 3) {
                    const _setTimeout = setTimeout;
                    ref8.current = setTimeout(() => closure_1_10((arg0) => arg0 + 1), 500 * 2 ** (ref4.current - 1));
                  } else {
                    resolveSyncs(false);
                  }
                } else {
                  resolveSyncs(true);
                }
              });
            const catchPromise = closure_0(ref[5])
              .updateOrder(obj2)
              .then((current) => {
                if (logger.current === id) {
                  if (tmp5) {
                    ref3.current = current;
                  }
                  closure_2.current = current;
                  closure_7.current = 0;
                  if (closure_11 != null) {
                    tmp9(tmp, current);
                  }
                  tmp5 = null == ref3.current || current > ref3.current;
                }
              })
              .catch((error) => {
                ref4.current = ref4.current + 1;
                logger.error("Failed to sync gift customization to order", { error, orderId: id });
                const result = BillingUtils.captureBillingException(error, {
                  tags: { source: "useSyncGiftOptionsToOrder" },
                  extra: { orderId: id },
                });
              });
          }
        } else {
          resolveSyncs(true);
        }
      }
    } else {
      resolveSyncs(true);
    }
  }, items);
  const items1 = [arg0, flush, waitForSync];
  const awaitSync = noop.useCallback(() => {
    if (null != closure_0) {
      if (ref.current !== ref2.current) {
        if (ref6.current >= 3) {
          tmp3.current = 0;
        }
        flush(tmp2.current);
        current = ref3.current;
        if (!current) {
          current = null != ref8.current;
        }
        if (!current) {
          closure_10((arg0) => arg0 + 1);
        }
        return waitForSync();
      }
    }
    return Promise.resolve(true);
  }, items1);
  const items2 = [awaitSync];
  return noop.useMemo(() => ({ awaitSync }), items2);
}
