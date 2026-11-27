// === Module 11260: useOrderSigning ===

// Module 11260 (useOrderSigning)
import BillingErrorDefault from "BillingError" /* 5794 */;
import ClientBillingError2 from "ClientBillingError" /* 5808 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: hasOwnProperty, useState: closure_6 } = noop);
const OrderStatus = fn(5760).OrderStatus;
const prototype = function OrderSigningFailedError(arg0) {
  const tmp2 = new tmp(concat(arg0), concat);
  tmp2.name = "OrderSigningFailed";
  return tmp2;
}.prototype;
class prototype extends Error {
}
const prototype2 = function UnexpectedOrderStatusError(arg0) {
  const tmp2 = new tmp(concat(arg0), concat);
  tmp2.name = "UnexpectedOrderStatus";
  return tmp2;
}.prototype;
class prototype2 extends Error {
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/hooks/useOrderSigning.tsx");

export function useOrderSigning(order) {
  order = order.order;
  let errorSource = order.errorSource;
  const onSignFailure = order.onSignFailure;
  const onError = order.onError;
  _slicedToArray = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  const tmp = _slicedToArray(closure_6(null), 2);
  _slicedToArray = tmp[1];
  items = [onError];
  const tmp2 = closure_5((arg0) => {
    closure_4(arg0);
    if (onError != null) {
      onError(arg0);
    }
  }, items);
  closure_5 = tmp2;
  const items1 = [errorSource, tmp2];
  const tmp3 = closure_5((arg0, extra, arg2) => {
    const ClientBillingError = ClientBillingError2.ClientBillingError;
    const obj = { site: "order_sign", tags: { flow: errorSource }, extra };
    ClientBillingError.report(obj, arg0);
    let tmp4 = arg0;
    if (!(arg0 instanceof BillingErrorDefault)) {
      tmp4 = new BillingErrorDefault(arg0);
    }
    if (null != arg2) {
      tmp4 = new BillingErrorDefault(arg2);
    }
    closure_5(tmp4);
    return tmp4;
  }, items1);
  closure_6 = tmp3;
  let obj = { error: tmp[0], signOrder: null, reportError: tmp3 };
  const items2 = [order, onSignFailure, tmp3, tmp2];
  obj.signOrder = closure_5(onError(function*() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            errorSource = tmp9;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            let obj4 = order;
            if (order === undefined) {
              obj4 = {};
            }
            ({ loadId: closure_129_0, purchaseToken: closure_129_1, gatewayCheckoutContext: closure_129_2, errorExtra: closure_129_3, onSigningDeferred: closure_129_4 } = obj4);
            closure_129_5 = undefined;
            let billing_facet;
            closure_129_7 = undefined;
            let orderSigningError;
            c5 = 1;
            c6 = 1;
            return { value: "Path", done: true };
          }
        } else if (1 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else if (null == closure_130_0) {
            const tmp95 = new errorSource(tmp4[5])("Order not created yet");
            closure_130_5(tmp95);
            c6 = 3;
            const obj7 = { value: { type: "failed" }, done: true };
            return obj7;
          } else {
            closure_130_4(null);
            c4 = 1;
            const obj8 = { orderId: closure_130_0.id, loadId: closure_129_0, purchaseToken: closure_129_1, gatewayCheckoutContext: closure_129_2 };
            c5 = 3;
            c6 = 1;
            const obj9 = { value: order(tmp4[6]).signOrder(obj8), done: false };
            return obj9;
          }
        } else if (2 === tmp9) {
          c4 = 0;
          closure_129_9 = closure_3;
          if (closure_129_9 instanceof order(tmp4[6]).OrderSigningFailedWithConstraintsError) {
            if (closure_130_2 != null) {
              tmp80(closure_129_9.order);
            }
            closure_130_5(closure_129_9);
          } else {
            const obj11 = {};
            const merged = Object.assign(closure_129_3);
            obj11.orderId = closure_130_0.id;
            closure_130_6(closure_129_9, obj11);
          }
          c6 = 3;
        } else {
          if (3 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              closure_129_5 = value;
              if (closure_129_5.status === constants.SIGNED) {
                const obj14 = { type: "signed", order: closure_129_5 };
                c4 = 0;
                c6 = 3;
                const obj15 = { value: obj14, done: true };
                return obj15;
              } else if (closure_129_5.status === constants.SIGNING_IN_PROGRESS) {
                billing_facet = closure_129_5.billing_facet;
                let prop = null;
                if (null != billing_facet) {
                  prop = billing_facet.order_signing_deferral_context;
                }
                closure_129_7 = prop;
                if (closure_129_4 != null) {
                  tmp48(closure_129_5);
                }
                if (null != closure_129_7) {
                  c4 = 2;
                  c5 = 5;
                  c6 = 1;
                  const obj16 = { value: order(tmp4[7]).performSigningDeferralAction(closure_129_7), done: false };
                  return obj16;
                } else {
                  { type: "pending", order: null }[1] = closure_129_5;
                  c4 = 0;
                  c6 = 3;
                }
              } else {
                orderSigningError = order(tmp4[9]).getOrderSigningError(closure_129_5);
                if (null != orderSigningError) {
                  closure_130_5(orderSigningError);
                  c4 = 0;
                  c6 = 3;
                  const obj17 = { value: { type: "failed" }, done: true };
                  return obj17;
                } else if (null != closure_129_5.error) {
                  throw new prototype(closure_129_5.error.code);
                } else {
                  throw new prototype2(closure_129_5.status);
                }
                const obj19 = order(tmp4[9]);
              }
            }
          } else if (4 === tmp9) {
            c4 = 1;
            const obj18 = {};
            const merged1 = Object.assign(closure_129_3);
            obj18.orderId = closure_130_0.id;
            const intl = order(tmp4[8]).intl;
            closure_130_6(closure_3, obj18, intl.string(order(tmp4[8]).t.khEaRI));
            c4 = 0;
            c6 = 3;
            const obj21 = { value: { type: "failed" }, done: true };
            return obj21;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c4 = 1;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp98) {
        closure_3 = tmp98;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp98;
        } else if (tmp2 === tmp100) {
          c5 = tmp;
        } else {
          c5 = tmp6;
        }
      }
    }
  }), items2);
  return obj;
}