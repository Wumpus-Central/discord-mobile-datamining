// === Module 8858: useRedeemVirtualCurrency ===

// Module 8858 (useRedeemVirtualCurrency)
import util from "util" /* 1114 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useState: hasOwnProperty, useEffect: metroRequire, useCallback: closure_7 } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export const useRedeemVirtualCurrency = function useRedeemVirtualCurrency(order) {
  [tmp2, closure_0] = _slicedToArray(enabled(""), 2);
  const tmp3 = _slicedToArray(enabled([]), 2);
  const entitlements = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp = _slicedToArray(enabled(""), 2);
  [error, asyncGeneratorStep] = _slicedToArray(enabled(null), 2);
  const isSubmitting = _slicedToArray(enabled(false), 2);
  _slicedToArray = isSubmitting[1];
  const tmp5 = _slicedToArray(enabled(null), 2);
  enabled = entitlements(8859).useConfig({ location: "orb_checkout_modal" }).enabled;
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
  let obj = entitlements(8859);
  const orderSigning = require("useOrderSigning").useOrderSigning({ order, errorSource: "orb_redeem_orders_api", onSignFailure });
  const signOrder = orderSigning.signOrder;
  const _reportError = orderSigning.reportError;
  if (enabled) {
    error = orderSigning.error;
  }
  _require = asyncGeneratorStep(async (skuId, loadId, arg2) => {
    dependencyMap = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === v4) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_3 = tmp8;
              closure_131_0 = skuId;
              closure_131_1 = loadId;
              closure_131_2 = dependencyMap;
              closure_131_3 = undefined;
              closure_131_4 = undefined;
              tmp4(true);
              const obj1 = { loadId, errorExtra: null };
              let obj2 = { skuId, loadId };
              obj1.errorExtra = obj2;
              v4 = 1;
              c8 = 1;
              const obj3 = { value: v0(obj1), done: false };
              return obj3;
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_131_3 = value;
                if ("signed" === closure_131_3.type) {
                  v0 = 2;
                  obj2 = skuId(7243);
                  v4 = 4;
                  c8 = 1;
                  const obj5 = { value: obj2.fetchOrderEntitlementsWithRetry(closure_131_3.order.id), done: false };
                  return obj5;
                } else {
                  tmp4(false);
                  c8 = 3;
                }
              }
            } else if (2 !== tmp8) {
              if (3 === tmp8) {
                v0 = 1;
                const obj6 = { skuId: closure_131_0, loadId: closure_131_1, orderId: closure_131_3.order.id };
                v4(closure_5, obj6);
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                tmp4(false);
                c8 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_131_4 = value;
                if (0 === closure_131_4.length) {
                  const orderProcessingPendingError = new skuId(7243).OrderProcessingPendingError();
                  throw orderProcessingPendingError;
                } else {
                  dependencyMap(closure_131_4);
                  if (closure_131_2 != null) {
                    tmp14(closure_131_4);
                  }
                  v0 = 1;
                }
              }
              v0 = 0;
              tmp4(false);
            }
            v0 = 0;
            tmp4(false);
            throw closure_5;
          }
        } catch (tmp53) {
          closure_5 = tmp53;
          if (tmp5 === v0) {
            c8 = tmp3;
            throw tmp53;
          } else if (tmp2 === tmp55) {
            v4 = tmp;
          } else {
            v4 = tmp3;
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
  const tmp12 = _reportError((skuId, loadId, arg2) => {
    closure_0 = arg2;
    closure_0(closure_2[6]);
    const obj = {
      skuId,
      loadId,
      onRedeemStart() {
        closure_1_4(true);
        closure_1_3(null);
      },
      onRedeemSucceed(arg0) {
        closure_2(arg0);
        closure_4(false);
        if (closure_0 != null) {
          closure_0(arg0);
        }
      },
      onRedeemFail(arg0) {
        closure_1_3(arg0);
        closure_1_4(false);
      }
    };
    return obj.redeemVirtualCurrencyForSKU(obj);
  }, []);
  closure_10 = tmp12;
  const items1 = [enabled, tmp11, tmp12];
  const items2 = [entitlements, error];
  const redeemVirtualCurrency = _reportError((arg0, arg1, arg2) => {
    if (enabled) {
      closure_9(arg0, arg1, arg2);
    } else {
      closure_10(arg0, arg1, arg2);
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
          const intl2 = util.intl;
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
          obj.redeemedItemDescription = "" + str2 + ": " + joined + ". Entitlement " + str4 + ": " + mapped1.join(", ");
          closure_0(intl2.format(util.t.JxNFav, obj));
        }
      }
      closure_0("");
    } else {
      const intl = util.intl;
      obj = { amount: "1 orb", errorMessage: tmp.message };
      closure_0(intl.format(util.t["7gHWrd"], obj));
    }
  }, items2);
  return { entitlements, error, isSubmitting: isSubmitting[0], responseMessage, redeemVirtualCurrency };
};