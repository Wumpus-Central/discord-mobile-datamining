// === Module 10370: useRedeemVirtualCurrency ===

// Module 10370 (useRedeemVirtualCurrency)
import util from "util" /* 1113 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useState: closure_4, useEffect: hasOwnProperty, useCallback: closure_6 } = noop);
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export function useRedeemVirtualCurrency(onSignFailure) {
  [tmp2, closure_0] = closure_4("");
  [entitlements, asyncGeneratorStep] = closure_4([]);
  const tmp = _slicedToArray(closure_4(""), 2);
  [error, _slicedToArray] = closure_4(null);
  const isSubmitting = _slicedToArray(closure_4(false), 2);
  closure_4 = isSubmitting[1];
  const useOrdersAPI = onSignFailure.useOrdersAPI;
  let order = onSignFailure.order;
  if (order == null) {
    order = null;
  }
  const tmp5 = _slicedToArray(closure_4(null), 2);
  const orderSigning = require("useOrderSigning").useOrderSigning({ order, errorSource: "orb_redeem_orders_api", onSignFailure: onSignFailure.onSignFailure });
  const signOrder = orderSigning.signOrder;
  const _reportError = orderSigning.reportError;
  if (useOrdersAPI) {
    error = orderSigning.error;
  }
  const onSetIsSubmitting = onSignFailure.onSetIsSubmitting;
  items = [onSetIsSubmitting];
  const tmp9 = signOrder((arg0) => {
    closure_4(arg0);
    if (null != onSetIsSubmitting) {
      onSetIsSubmitting(arg0);
    }
  }, items);
  closure_10 = tmp9;
  _require = asyncGeneratorStep(async (skuId, loadId, arg2) => {
    closure_2 = arg2;
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_4 = tmp4;
              closure_3 = tmp8;
              closure_131_0 = skuId;
              closure_131_1 = loadId;
              closure_131_2 = closure_2;
              closure_131_3 = undefined;
              closure_131_4 = undefined;
              closure_1_10(true);
              const obj4 = { loadId, errorExtra: null };
              const obj6 = { skuId, loadId };
              obj4.errorExtra = obj6;
              v4 = 1;
              c8 = 1;
              const obj7 = { value: v0(obj4), done: false };
              return obj7;
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_131_3 = value;
                if ("signed" === closure_131_3.type) {
                  v0 = 2;
                  v4 = 4;
                  c8 = 1;
                  const obj9 = { value: skuId(entitlements[4]).fetchOrderEntitlementsWithRetry(closure_131_3.order.id), done: false };
                  return obj9;
                } else {
                  closure_1_10(false);
                  c8 = 3;
                }
              }
            } else if (2 !== tmp8) {
              if (3 === tmp8) {
                v0 = 1;
                const obj10 = { skuId: closure_131_0, loadId: closure_131_1, orderId: closure_131_3.order.id };
                v4(closure_5, obj10);
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                closure_1_10(false);
                c8 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                closure_131_4 = value;
                if (0 === closure_131_4.length) {
                  const orderProcessingPendingError = new skuId(entitlements[4]).OrderProcessingPendingError();
                  throw orderProcessingPendingError;
                } else {
                  closure_2(closure_131_4);
                  const obj12 = { skuId: closure_131_0, entitlements: closure_131_4 };
                  const result = skuId(entitlements[5]).dispatchVirtualCurrencyRedeemSuccess(obj12);
                  if (closure_131_2 != null) {
                    tmp19(closure_131_4);
                  }
                  v0 = 1;
                  const obj = skuId(entitlements[5]);
                }
              }
              v0 = 0;
              closure_1_10(false);
            }
            v0 = 0;
            closure_1_10(false);
            throw closure_5;
          }
        } catch (tmp58) {
          closure_5 = tmp58;
          if (tmp5 === v0) {
            c8 = tmp3;
            throw tmp58;
          } else if (tmp2 === tmp60) {
            v4 = tmp;
          } else {
            v4 = tmp3;
          }
        }
      }
    })();
  });
  const items1 = [signOrder, _reportError, tmp9];
  const tmp10 = signOrder(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  closure_11 = tmp10;
  const items2 = [tmp9];
  const tmp11 = signOrder((skuId, loadId, arg2) => {
    closure_0 = arg2;
    return closure_0(entitlements[5]).redeemVirtualCurrencyForSKU({
      skuId,
      loadId,
      onRedeemStart() {
        closure_1_10(true);
        closure_1_3(null);
      },
      onRedeemSucceed(arg0) {
        closure_2(arg0);
        closure_10(false);
        if (closure_0 != null) {
          closure_0(arg0);
        }
      },
      onRedeemFail(arg0) {
        closure_1_3(arg0);
        closure_1_10(false);
      }
    });
  }, items2);
  closure_12 = tmp11;
  const items3 = [useOrdersAPI, tmp10, tmp11];
  const items4 = [entitlements, error];
  const redeemVirtualCurrency = signOrder((arg0, arg1, arg2) => {
    if (useOrdersAPI) {
      closure_11(arg0, arg1, arg2);
    } else {
      closure_12(arg0, arg1, arg2);
    }
  }, items3);
  useOrdersAPI(() => {
    if (null == error) {
      if (null != entitlements) {
        if (entitlements.length > 0) {
          const mapped = entitlements.map((sku) => {
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
          if (1 === entitlements.length) {
            str4 = "ID";
          }
          const obj2 = { amountDescription: "1 orb", redeemedItemDescription: null };
          const mapped1 = entitlements.map((id) => id.id);
          const _HermesInternal = HermesInternal;
          obj2.redeemedItemDescription = "" + str2 + ": " + joined + ". Entitlement " + str4 + ": " + mapped1.join(", ");
          closure_0(intl2.format(util.t.JxNFav, obj2));
        }
      }
      closure_0("");
    } else {
      const intl = util.intl;
      const obj = { amount: "1 orb", errorMessage: tmp.message };
      closure_0(intl.format(util.t["7gHWrd"], obj));
    }
  }, items4);
  return { entitlements, error, isSubmitting: isSubmitting[0], responseMessage, redeemVirtualCurrency };
}