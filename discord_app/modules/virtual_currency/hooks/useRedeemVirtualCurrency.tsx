// === Module 11315: useRedeemVirtualCurrency ===

// Module 11315 (useRedeemVirtualCurrency)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;

const require = arg1;
({ useState: c5, useEffect: closure_6, useCallback: error } = noop);
const result = require("set").fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export const useRedeemVirtualCurrency = function useRedeemVirtualCurrency(order) {
  [tmp2, closure_0] = callback2(enabled(""), 2);
  const tmp3 = callback2(enabled([]), 2);
  const entitlements = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp = callback2(enabled(""), 2);
  [error, closure_3] = callback2(enabled(null), 2);
  const isSubmitting = callback2(enabled(false), 2);
  callback2 = isSubmitting[1];
  const tmp5 = callback2(enabled(null), 2);
  enabled = entitlements(11316).useConfig({ location: "orb_checkout_modal" }).enabled;
  order = undefined;
  if (order != null) {
    order = order.order;
  }
  if (order == null) {
    order = null;
  }
  let onSignFailure;
  if (order != null) {
    onSignFailure = order.onSignFailure;
  }
  let obj = entitlements(11316);
  const orderSigning = _require(11317).useOrderSigning({ order, errorSource: "orb_redeem_orders_api", onSignFailure });
  const signOrder = orderSigning.signOrder;
  const _reportError = orderSigning.reportError;
  if (enabled) {
    error = orderSigning.error;
  }
  _require = undefined;
  _require = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c8 = 2;
          if (0 === v02) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let length = tmp4;
              c3 = tmp8;
              c3 = undefined;
              length = undefined;
              closure_1_4(true);
              obj1 = { loadId: null, errorExtra: null };
              obj1[0] = closure_1;
              let obj2 = { skuId: null, loadId: null };
              obj2[0] = callback;
              obj2[1] = closure_1;
              obj1[1] = obj2;
              v02 = 1;
              c8 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = v0(obj1);
              return obj3;
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_3 = arg1;
                if ("signed" === closure_3.type) {
                  v0 = 2;
                  obj2 = callback(6058);
                  v02 = 4;
                  c8 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = obj2.fetchOrderEntitlementsWithRetry(closure_3.order.id);
                  return obj5;
                } else {
                  closure_1_4(false);
                  c8 = 3;
                }
              }
            } else if (2 !== tmp8) {
              if (3 === tmp8) {
                v0 = 1;
                const obj6 = { skuId: null, loadId: null, orderId: null };
                obj6[0] = callback;
                obj6[1] = closure_1;
                obj6[2] = c3.order.id;
                v02(closure_5, obj6);
              } else if (arg0 === 1) {
                c8 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                closure_1_4(false);
                c8 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                length = arg1;
                if (0 === length.length) {
                  const orderProcessingPendingError = new callback(6058).OrderProcessingPendingError();
                  throw orderProcessingPendingError;
                } else {
                  dependencyMap(length);
                  if (dependencyMap != null) {
                    tmp14(length);
                  }
                  v0 = 1;
                }
              }
              v0 = 0;
              closure_1_4(false);
            }
            v0 = 0;
            closure_1_4(false);
            throw closure_5;
          }
        } catch (tmp53) {
          closure_5 = tmp53;
          if (tmp5 === v0) {
            c8 = tmp3;
            throw tmp53;
          } else if (tmp2 === tmp55) {
            v02 = tmp;
          } else {
            v02 = tmp3;
          }
        }
      }
    })();
  });
  const items = [signOrder, _reportError];
  const tmp11 = _reportError(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  closure_9 = tmp11;
  const tmp12 = _reportError((skuId, loadId) => {
    const callback = arg2;
    let obj = callback(10799);
    obj = {
      skuId,
      loadId,
      onRedeemStart() {
        callback3(true);
        callback2(null);
      },
      onRedeemSucceed(arg0) {
        closure_1_2(arg0);
        closure_1_4(false);
        if (callback != null) {
          callback(arg0);
        }
      },
      onRedeemFail(arg0) {
        callback2(arg0);
        callback3(false);
      }
    };
    return obj.redeemVirtualCurrencyForSKU(obj);
  }, []);
  closure_10 = tmp12;
  const items1 = [enabled, tmp11, tmp12];
  const items2 = [entitlements, error];
  const redeemVirtualCurrency = _reportError((arg0, arg1, arg2) => {
    if (enabled) {
      callback2(arg0, arg1, arg2);
    } else {
      callback3(arg0, arg1, arg2);
    }
  }, items1);
  signOrder(() => {
    if (null == error) {
      if (null != entitlements) {
        if (arr.length > 0) {
          const mapped = arr.map((sku) => {
            sku = sku.sku;
            let name;
            if (sku != null) {
              name = sku.name;
            }
            return name;
          });
          const intl2 = callback(1236).intl;
          let str2 = "SKUs";
          if (1 === mapped.length) {
            str2 = "SKU";
          }
          const joined = mapped.join(", ");
          let str4 = "IDs";
          if (1 === arr.length) {
            str4 = "ID";
          }
          let obj = { amountDescription: "1 orb", redeemedItemDescription: null };
          const mapped1 = arr.map((id) => id.id);
          const _HermesInternal = HermesInternal;
          obj[1] = "" + str2 + ": " + joined + ". Entitlement " + str4 + ": " + mapped1.join(", ");
          callback(intl2.format(callback(1236).t.JxNFav, obj));
        }
      }
      callback("");
    } else {
      const intl = callback(1236).intl;
      obj = { amount: "1 orb", errorMessage: null };
      obj[1] = tmp.message;
      callback(intl.format(callback(1236).t["7gHWrd"], obj));
    }
  }, items2);
  return { entitlements, error, isSubmitting: isSubmitting[0], responseMessage, redeemVirtualCurrency };
};