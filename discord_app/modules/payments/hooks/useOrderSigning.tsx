// === Module 9051: useOrderSigning ===

// Module 9051 (useOrderSigning)
import BillingUtils from "BillingUtils" /* 4743 */;
import BillingErrorDefault from "BillingError" /* 4750 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: hasOwnProperty, useState: metroRequire } = noop);
const OrderStatus = fn(5070).OrderStatus;
const size = fn(2);
let result = size.fileFinishedImporting("modules/payments/hooks/useOrderSigning.tsx");

export const useOrderSigning = function useOrderSigning(order) {
  order = order.order;
  let errorSource = order.errorSource;
  const onSignFailure = order.onSignFailure;
  const onError = order.onError;
  _slicedToArray = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  const tmp = _slicedToArray(closure_6(null), 2);
  _slicedToArray = tmp[1];
  const items = [onError];
  const tmp2 = closure_5((arg0) => {
    closure_4(arg0);
    if (onError != null) {
      onError(arg0);
    }
  }, items);
  closure_5 = tmp2;
  const items1 = [errorSource, tmp2];
  let tmp3 = closure_5((error, extra, arg2) => {
    let tmp3 = error;
    if (!(error instanceof BillingErrorDefault)) {
      tmp3 = new BillingErrorDefault(error);
    }
    if (!obj.isExpectedHttpClientError(error)) {
      const _Error = Error;
      let tmp9 = tmp3;
      if (error instanceof Error) {
        tmp9 = error;
      }
      const obj2 = { tags: null, extra: null };
      const obj3 = { source: errorSource };
      obj2.tags = obj3;
      obj2.extra = extra;
      const result = BillingUtils.captureBillingException(tmp9, obj2);
      const tmp7Result = BillingUtils;
    }
    if (null != arg2) {
      tmp3 = new BillingErrorDefault(arg2);
    }
    closure_5(tmp3);
    return tmp3;
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
        return { value: "IconComponent", done: null };
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
            let obj4 = order;
            if (order === undefined) {
              obj4 = {};
            }
            ({ loadId: closure_129_0, purchaseToken: closure_129_1, gatewayCheckoutContext: closure_129_2, errorExtra: closure_129_3 } = obj4);
            closure_129_4 = undefined;
            let billing_facet;
            let orderSigningError;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (null == closure_130_0) {
            const tmp87 = new errorSource(tmp4[4])("Order not created yet");
            closure_130_5(tmp87);
            c6 = 3;
            const obj6 = { value: { type: "failed" }, done: true };
            return obj6;
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
          closure_129_7 = closure_3;
          if (closure_129_7 instanceof order(tmp4[6]).OrderSigningFailedWithConstraintsError) {
            if (closure_130_2 != null) {
              tmp72(closure_129_7.order);
            }
            closure_130_5(closure_129_7);
          } else {
            const obj11 = {};
            const merged = Object.assign(closure_129_3);
            obj11.orderId = closure_130_0.id;
            closure_130_6(closure_129_7, obj11);
          }
          c6 = 3;
        } else if (3 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_129_4 = value;
            if (closure_129_4.status === constants.SIGNED) {
              const obj14 = { type: "signed", order: closure_129_4 };
              c4 = 0;
              c6 = 3;
              const obj15 = { value: obj14, done: true };
              return obj15;
            } else if (closure_129_4.status === constants.SIGNING_IN_PROGRESS) {
              billing_facet = closure_129_4.billing_facet;
              c4 = 2;
              let prop = null;
              if (null != billing_facet) {
                prop = billing_facet.order_signing_deferral_context;
              }
              c5 = 5;
              c6 = 1;
              const obj16 = { value: order(tmp4[7]).performSigningDeferralAction(prop), done: false };
              return obj16;
            } else {
              orderSigningError = order(tmp4[9]).getOrderSigningError(closure_129_4);
              if (null != orderSigningError) {
                closure_130_5(orderSigningError);
                c4 = 0;
                c6 = 3;
                const obj17 = { value: { type: "failed" }, done: true };
                return obj17;
              } else if (null != closure_129_4.error) {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const error = new Error("Order signing failed with error: " + closure_129_4.error.code);
                throw error;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const error1 = new Error("Unexpected order status: " + closure_129_4.status);
                throw error1;
              }
              const obj21 = order(tmp4[9]);
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
          const obj19 = { value: { type: "failed" }, done: true };
          return obj19;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj20 = { value, done: true };
          return obj20;
        } else {
          const obj = { type: "pending", order: closure_129_4 };
          c4 = 0;
          c6 = 3;
          const obj23 = { value: obj, done: true };
          return obj23;
        }
      } catch (tmp90) {
        closure_3 = tmp90;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp90;
        } else if (tmp2 === tmp92) {
          c5 = tmp;
        } else {
          c5 = tmp6;
        }
      }
    }
  }), items2);
  return obj;
};