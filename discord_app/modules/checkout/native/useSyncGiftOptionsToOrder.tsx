// discord_app/modules/checkout/native/useSyncGiftOptionsToOrder.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import BillingUtils from "../../../utils/BillingUtils.tsx";
import useGiftOptionsSyncDebounceDefault from "../../payments/native/hooks/useGiftOptionsSyncDebounce.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
fn(7143).useNativeCheckoutStoreOrNull;
const ReactCompilerGating = fn(558);
const tmp2 = new LoggerDefault("useSyncGiftOptionsToOrder");
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/useSyncGiftOptionsToOrder.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useSyncGiftOptionsToOrder(arg0, current) {
  _require = arg0;
  importDefault = current;
  const cResult = require("c").c(22);
  dependencyMap = noop.useRef(null);
  let obj = require("c");
  noop = noop.useRef(false);
  ref = noop.useRef(null);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef(null);
  noop.useRef(null);
  ref2 = noop.useRef(undefined);
  [tmp4, tmp5] = ref(noop.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(setOrderRevision) {
      return setOrderRevision.setOrderRevision;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  let tmp7 = ref2(first);
  closure_11 = tmp7;
  let tmp8 = useGiftOptionsSyncDebounceDefault(tmp5);
  const waitForPause = tmp8.waitForPause;
  const flush = tmp8.flush;
  const waitForSync = tmp8.waitForSync;
  const resolveSyncs = tmp8.resolveSyncs;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k() {
      return () => {
        if (null != ref.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp.current);
        }
      };
    };
    const items = [];
    cResult[1] = fn2;
    cResult[2] = items;
    let tmp10 = items;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[1];
    tmp10 = cResult[2];
  }
  const effect = obj2.useEffect(tmp9, tmp10);
  if (cResult[3] === current) {
    if (cResult[4] === arg0) {
      if (cResult[5] === resolveSyncs) {
        if (cResult[6] === tmp7) {
          if (cResult[7] === waitForPause) {
            let tmp12 = cResult[8];
          }
          if (cResult[9] === current) {
            if (cResult[10] === arg0) {
              if (cResult[11] === resolveSyncs) {
                if (cResult[12] === tmp7) {
                  if (cResult[13] === tmp4) {
                    if (cResult[14] === waitForPause) {
                      let tmp13 = cResult[15];
                    }
                    const effect1 = obj2.useEffect(tmp12, tmp13);
                    if (cResult[16] === flush) {
                      if (cResult[17] === arg0) {
                        if (cResult[18] === waitForSync) {
                          let tmp15 = cResult[19];
                        }
                        if (cResult[20] !== tmp15) {
                          const obj3 = { awaitSync: tmp15 };
                          class G {
                            constructor() {
                              if (null != closure_0) {
                                tmp = closure_2;
                                if (closure_2.current !== closure_3.current) {
                                  num = 3;
                                  if (closure_7.current >= 3) {
                                    num2 = 0;
                                    tmp3.current = 0;
                                  }
                                  tmp4 = flush;
                                  tmp5 = flush(tmp2.current);
                                  tmp6 = waitForSync;
                                  tmp8 = closure_4;
                                  current = closure_4.current;
                                  tmp7 = waitForSync();
                                  if (!current) {
                                    tmp9 = closure_9;
                                    current = null != closure_9.current;
                                  }
                                  if (!current) {
                                    tmp10 = closure_10;
                                    tmp11 = closure_10((arg0) => arg0 + 1);
                                  }
                                  return tmp7;
                                }
                              }
                              return Promise.resolve(true);
                            }
                          }
                          cResult[21] = obj3;
                          let tmp16 = obj3;
                        } else {
                          tmp16 = cResult[21];
                        }
                        return tmp16;
                      }
                    }
                    class G {
                      constructor() {
                        if (null != closure_0) {
                          tmp = closure_2;
                          if (closure_2.current !== closure_3.current) {
                            num = 3;
                            if (closure_7.current >= 3) {
                              num2 = 0;
                              tmp3.current = 0;
                            }
                            tmp4 = flush;
                            tmp5 = flush(tmp2.current);
                            tmp6 = waitForSync;
                            tmp8 = closure_4;
                            current = closure_4.current;
                            tmp7 = waitForSync();
                            if (!current) {
                              tmp9 = closure_9;
                              current = null != closure_9.current;
                            }
                            if (!current) {
                              tmp10 = closure_10;
                              tmp11 = closure_10((arg0) => arg0 + 1);
                            }
                            return tmp7;
                          }
                        }
                        return Promise.resolve(true);
                      }
                    }
                    cResult[16] = flush;
                    cResult[17] = arg0;
                    cResult[18] = waitForSync;
                    cResult[19] = G;
                    tmp15 = G;
                  }
                }
              }
            }
          }
          const items1 = [, current, tmp4, resolveSyncs, tmp7, waitForPause];
          cResult[9] = current;
          cResult[10] = arg0;
          cResult[11] = resolveSyncs;
          cResult[12] = tmp7;
          cResult[13] = tmp4;
          cResult[14] = waitForPause;
          cResult[15] = items1;
          tmp13 = items1;
        }
      }
    }
  }
  class E {
    constructor() {
      tmp = id;
      if (null != id) {
        id = tmp.id;
        tmp4 = closure_3;
        tmp5 = closure_1;
        closure_3.current = closure_1;
        if (closure_6.current !== id) {
          closure_6.current = id;
          tmp9 = closure_5;
          closure_5.current = tmp.revision;
          tmp10 = closure_2;
          closure_2.current = null;
          tmp11 = closure_8;
          closure_8.current = null;
          tmp12 = closure_7;
          num = 0;
          closure_7.current = 0;
          tmp8 = closure_5;
        } else {
          tmp6 = closure_5;
          tmp7 = null == closure_5.current || tmp.revision > tmp6.current;
          tmp8 = tmp6;
          if (tmp7) {
            tmp6.current = tmp.revision;
            tmp8 = tmp6;
          }
        }
        tmp13 = closure_8;
        if (closure_8.current !== tmp5) {
          tmp14 = closure_7;
          num2 = 0;
          closure_7.current = 0;
        }
        if (!closure_4.current) {
          tmp16 = closure_2;
          if (closure_2.current !== tmp5) {
            tmp19 = null != tmp13.current && tmp13.current !== tmp5;
            if (tmp19) {
              tmp20 = waitForPause;
              tmp19 = waitForPause(tmp5);
            }
            if (!tmp19) {
              tmp21 = closure_9;
              if (null != closure_9.current) {
                tmp22 = globalThis;
                _clearTimeout = clearTimeout;
                clearTimeoutResult = clearTimeout(tmp21.current);
                tmp21.current = null;
              }
              flag3 = true;
              tmp15.current = true;
              tmp13.current = tmp5;
              tmp24 = closure_0;
              tmp25 = closure_2;
              obj = closure_0(closure_2[7]);
              obj1 = { orderId: null, giftInfo: null, expectedRevision: null };
              obj1.orderId = id;
              obj4 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
              ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = tmp5);
              obj1.giftInfo = obj4;
              obj1.expectedRevision = tmp8.current;
              updateOrderResult = obj.updateOrder(obj1);
              nextPromise = updateOrderResult.then((current) => {
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
              catchPromise = nextPromise.catch((error) => {
                ref4.current = ref4.current + 1;
                logger.error("Failed to sync gift customization to order", { error, orderId: id });
                const result = BillingUtils.captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } });
              });
              cleanupPromise = catchPromise.finally(() => {
                ref3.current = false;
                if (ref.current !== ref2.current) {
                  if (0 === ref4.current) {
                    closure_1_10((arg0) => arg0 + 1);
                  } else if (ref4.current < 3) {
                    const _setTimeout = setTimeout;
                    ref8.current = setTimeout(() => closure_1_10(() => { ... }), 500 * 2 ** (ref4.current - 1));
                  } else {
                    resolveSyncs(false);
                  }
                } else {
                  resolveSyncs(true);
                }
              });
            }
          } else {
            tmp17 = resolveSyncs;
            flag2 = true;
            tmp18 = resolveSyncs(true);
          }
        }
      } else {
        tmp2 = resolveSyncs;
        flag = true;
        tmp3 = resolveSyncs(true);
      }
      return;
    }
  }
  cResult[3] = current;
  cResult[4] = arg0;
  cResult[5] = resolveSyncs;
  cResult[6] = tmp7;
  cResult[7] = waitForPause;
  cResult[8] = E;
  tmp12 = E;
}) : (function useSyncGiftOptionsToOrder(arg0, current) {
  closure_0 = arg0;
  importDefault = current;
  dependencyMap = noop.useRef(null);
  noop = noop.useRef(false);
  ref = noop.useRef(null);
  noop.useRef(null);
  noop.useRef(0);
  noop.useRef(null);
  noop.useRef(null);
  const tmp = ref(noop.useState(0), 2);
  closure_10 = tmp2;
  const tmp3 = noop.useRef(undefined)((setOrderRevision) => setOrderRevision.setOrderRevision);
  closure_11 = tmp3;
  const tmp4 = useGiftOptionsSyncDebounceDefault(tmp[1]);
  const waitForPause = tmp4.waitForPause;
  const flush = tmp4.flush;
  const waitForSync = tmp4.waitForSync;
  const resolveSyncs = tmp4.resolveSyncs;
  const effect = noop.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp.current);
    }
  }, []);
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
            ({ recipient_id: obj3.recipient_id, gift_style: obj3.gift_style, emoji_id: obj3.emoji_id, emoji_name: obj3.emoji_name, sound_id: obj3.sound_id, reward_sku_ids: obj3.reward_sku_ids, custom_message: obj3.custom_message_contents } = current);
            obj2.giftInfo = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
            obj2.expectedRevision = tmp8.current;
            const obj = closure_0(ref[7]);
            const obj5 = { recipient_id: null, gift_style: null, emoji_id: null, emoji_name: null, sound_id: null, reward_sku_ids: null, custom_message_contents: null };
            const updateOrderResult = closure_0(ref[7]).updateOrder(obj2);
            const nextPromise = closure_0(ref[7]).updateOrder(obj2).then((current) => {
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
            closure_0(ref[7]).updateOrder(obj2).then((current) => {
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
            }).catch((error) => {
              ref4.current = ref4.current + 1;
              logger.error("Failed to sync gift customization to order", { error, orderId: id });
              const result = BillingUtils.captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } });
            }).finally(() => {
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
            const catchPromise = closure_0(ref[7]).updateOrder(obj2).then((current) => {
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
            }).catch((error) => {
              ref4.current = ref4.current + 1;
              logger.error("Failed to sync gift customization to order", { error, orderId: id });
              const result = BillingUtils.captureBillingException(error, { tags: { source: "useSyncGiftOptionsToOrder" }, extra: { orderId: id } });
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
});