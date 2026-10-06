// === Module 8550: useRedeemVirtualCurrency ===

// Module 8550 (useRedeemVirtualCurrency)
import intl3 from "intl" /* 1126 */;
import useOrderSigning from "useOrderSigning" /* 8552 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, closure_5, sku, v0, v3;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ useState: hasOwnProperty, useEffect: metroRequire, useCallback: metroImportDefault } = react);
const result = size.fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export const useRedeemVirtualCurrency = function useRedeemVirtualCurrency(order) {
  let closure_4;
  let enabled;
  let entitlements;
  let error;
  let isSubmitting;
  let tmp2;
  let tmp = _slicedToArray(enabled(""), 2);
  [tmp2, require] = tmp;
  [entitlements, dependencyMap] = enabled([]);
  [error, _asyncToGenerator] = _slicedToArray(enabled(null), 2);
  const tmp5 = _slicedToArray(enabled(null), 2);
  [isSubmitting, _slicedToArray] = enabled(false);
  let obj = entitlements(8551);
  enabled = obj.useConfig({ location: "orb_checkout_modal" }).enabled;
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
  let obj2 = useOrderSigning;
  const orderSigning = obj2.useOrderSigning({ order, errorSource: "orb_redeem_orders_api", onSignFailure });
  const signOrder = orderSigning.signOrder;
  const _reportError = orderSigning.reportError;
  if (enabled) {
    error = orderSigning.error;
  }
  let closure_0 = _asyncToGenerator(async (skuId, loadId, arg2) => {
    closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj3;
      let obj6;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          c8 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_3 = undefined;
              tmp = undefined;
              tmp(true);
              const obj5 = { loadId, errorExtra: obj6 };
              v3 = 1;
              c8 = 1;
              obj6 = { skuId, loadId };
              const obj7 = { value: v0(obj5), done: false };
              return obj7;
            }
          } else {
            if (1 === v3) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                closure_3 = value;
                if ("signed" === closure_3.type) {
                  v0 = 2;
                  v3 = 4;
                  c8 = 1;
                  const obj9 = { value: obj3.fetchOrderEntitlementsWithRetry(closure_3.order.id), done: false };
                  obj3 = skuId(closure_2_2[5]);
                  return obj9;
                } else {
                  tmp(false);
                }
              }
            } else if (2 === v3) {
              v0 = 0;
              tmp(false);
              throw closure_5;
            } else {
              if (3 === v3) {
                v0 = 1;
                const obj10 = { skuId, loadId, orderId: closure_3.order.id };
                v3(closure_5, obj10);
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                tmp(false);
                c8 = 3;
                return { value, done: true };
              } else {
                tmp = value;
                if (0 === tmp.length) {
                  const self = this;
                  const self2 = this;
                  const orderProcessingPendingError = new skuId(closure_2_2[5]).OrderProcessingPendingError();
                  throw orderProcessingPendingError;
                } else {
                  closure_2(tmp);
                  if (closure_2 != null) {
                    tmp10(tmp);
                  }
                  v0 = 1;
                }
              }
              v0 = 0;
              tmp(false);
            }
            c8 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp47) {
          closure_5 = tmp47;
          if (0 === v0) {
            c8 = 3;
            throw tmp47;
          } else if (1 === tmp49) {
            v3 = 2;
          } else {
            v3 = 3;
          }
        }
      }
    })();
  });
  const items = [signOrder, _reportError];
  const tmp12 = _reportError(function() {
    return closure_0(...arguments);
  }, items);
  let closure_9 = tmp12;
  const tmp13 = _reportError((skuId, loadId, arg2) => {
    let closure_0;
    require = arg2;
    const obj = require("VirtualCurrencyActionCreators");
    const obj2 = {
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
    return obj.redeemVirtualCurrencyForSKU(obj2);
  }, []);
  let closure_10 = tmp13;
  const items1 = [enabled, tmp12, tmp13];
  const items2 = [entitlements, error];
  const redeemVirtualCurrency = _reportError((arg0, arg1, arg2) => {
    if (enabled) {
      closure_9(arg0, arg1, arg2);
    } else {
      closure_10(arg0, arg1, arg2);
    }
  }, items1);
  signOrder(() => {
    let mapped1;
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
          const intl2 = intl3.intl;
          const format = intl2.format;
          let str2 = "SKUs";
          const JxNFav = intl3.t.JxNFav;
          if (1 === mapped.length) {
            str2 = "SKU";
          }
          const joined = mapped.join(", ");
          let str4 = "IDs";
          if (1 === entitlements.length) {
            str4 = "ID";
          }
          const obj2 = { amountDescription: "1 orb", redeemedItemDescription: "" + str2 + ": " + joined + ". Entitlement " + str4 + ": " + mapped1.join(", ") };
          mapped1 = entitlements.map((id) => id.id);
          const _HermesInternal = HermesInternal;
          require(format(JxNFav, obj2));
        }
      }
      require("");
    } else {
      const intl = intl3.intl;
      const obj = { amount: "1 orb", errorMessage: tmp.message };
      require(intl.format(intl3.t["7gHWrd"], obj));
    }
  }, items2);
  return { entitlements, error, isSubmitting, responseMessage, redeemVirtualCurrency };
};