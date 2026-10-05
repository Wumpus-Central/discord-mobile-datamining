// === Module 8519: useOrderSigning ===

// Module 8519 (useOrderSigning)
import BillingUtils from "BillingUtils" /* 4543 */;
import BillingErrorDefault from "BillingError" /* 4550 */;
import PaymentConstants from "PaymentConstants" /* 4869 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c5, c6;

let hasOwnProperty;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ useCallback: hasOwnProperty, useState: metroRequire } = react);
const OrderStatus = PaymentConstants.OrderStatus;
let result = size.fileFinishedImporting("modules/payments/hooks/useOrderSigning.tsx");

export const useOrderSigning = function useOrderSigning(order) {
  let closure_4;
  let first;
  let items2;
  order = order.order;
  const errorSource = order.errorSource;
  let onSignFailure = order.onSignFailure;
  const onError = order.onError;
  _slicedToArray = undefined;
  let closure_5;
  let closure_6;
  [first, _slicedToArray] = closure_6(null);
  const items = [onError];
  let tmp3 = closure_5((arg0) => {
    closure_4(arg0);
    if (onError != null) {
      onError(arg0);
    }
  }, items);
  closure_5 = tmp3;
  const items1 = [errorSource, tmp3];
  const tmp4 = closure_5(function(error, extra, arg2) {
    let obj3;
    let tmp3 = error;
    if (!(error instanceof BillingErrorDefault)) {
      const self = this;
      const self2 = this;
      tmp3 = new BillingErrorDefault(error);
    }
    const obj = BillingUtils;
    if (!obj.isExpectedHttpClientError(error)) {
      const _Error = Error;
      let tmp8 = tmp3;
      const captureBillingException = BillingUtils.captureBillingException;
      BillingUtils;
      if (error instanceof Error) {
        tmp8 = error;
      }
      const obj2 = { tags: obj3, extra };
      obj3 = { source: errorSource };
      const result = captureBillingException(tmp8, obj2);
    }
    if (null != arg2) {
      const self3 = this;
      const self4 = this;
      tmp3 = new BillingErrorDefault(arg2);
    }
    closure_5(tmp3);
    return tmp3;
  }, items1);
  closure_6 = tmp4;
  let obj = {
    error: first,
    signOrder: closure_5(onError(function*(loadId) {
      let c0;
      let c1;
      let c2;
      let closure_2;
      let obj21;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (loadId === 1) {
          throw value;
        } else if (loadId === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          let purchaseToken;
          let billing_facet;
          let orderSigningError;
          c6 = 2;
          if (0 === c5) {
            if (loadId === 1) {
              c6 = 3;
              throw value;
            } else if (loadId === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              onSignFailure = tmp;
              loadId = undefined;
              purchaseToken = undefined;
              c2 = undefined;
              let obj4 = loadId;
              if (loadId === undefined) {
                obj4 = {};
              }
              ({ loadId: c0, purchaseToken: c1, errorExtra: c2 } = obj4);
              order = undefined;
              billing_facet = undefined;
              orderSigningError = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c5) {
            if (loadId === 1) {
              c6 = 3;
              throw value;
            } else if (loadId === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (null == closure_130_0) {
              const self5 = this;
              const self6 = this;
              const tmp77 = new purchaseToken(onSignFailure[4])("Order not created yet");
              closure_130_5(tmp77);
              c6 = 3;
              const obj6 = { value: { type: "failed" }, done: true };
              return obj6;
            } else {
              closure_130_4(null);
              c4 = 1;
              const obj7 = { orderId: closure_130_0.id, loadId, purchaseToken };
              c5 = 3;
              c6 = 1;
              const obj8 = { value: obj21.signOrder(obj7), done: false };
              obj21 = loadId(onSignFailure[6]);
              return obj8;
            }
          } else if (2 === c5) {
            let obj9;
            c4 = 0;
            const order2 = order;
            if (order2 instanceof loadId(onSignFailure[6]).OrderSigningFailedWithConstraintsError) {
              if (closure_130_2 != null) {
                tmp64(order2.order);
              }
              closure_130_5(order2);
              obj9 = { type: "failed" };
            } else {
              const obj10 = { orderId: closure_130_0.id };
              const merged = Object.assign(c2);
              closure_130_6(order2, obj10);
              obj9 = { type: "failed" };
            }
            c6 = 3;
            const obj11 = { value: obj9, done: true };
            return obj11;
          } else if (3 === c5) {
            if (loadId === 1) {
              c6 = 3;
              throw value;
            } else if (loadId === 2) {
              c4 = 0;
              c6 = 3;
              const obj12 = { value, done: true };
              return obj12;
            } else {
              order = value;
              if (order.status === constants.SIGNED) {
                const obj13 = { type: "signed", order };
                c4 = 0;
                c6 = 3;
                const obj14 = { value: obj13, done: true };
                return obj14;
              } else if (order.status === constants.SIGNING_IN_PROGRESS) {
                billing_facet = order.billing_facet;
                c4 = 2;
                let prop = null;
                const performSigningDeferralAction = loadId(onSignFailure[7]).performSigningDeferralAction;
                const tmp40 = loadId(onSignFailure[7]);
                if (null != billing_facet) {
                  prop = billing_facet.order_signing_deferral_context;
                }
                c5 = 5;
                c6 = 1;
                const obj15 = { value: performSigningDeferralAction(prop), done: false };
                return obj15;
              } else {
                const obj20 = loadId(onSignFailure[9]);
                orderSigningError = obj20.getOrderSigningError(order);
                if (null != orderSigningError) {
                  closure_130_5(orderSigningError);
                  c4 = 0;
                  c6 = 3;
                  const obj16 = { value: { type: "failed" }, done: true };
                  return obj16;
                } else if (null != order.error) {
                  const _Error2 = Error;
                  const _HermesInternal2 = HermesInternal;
                  const self3 = this;
                  const self4 = this;
                  const error = new Error("Order signing failed with error: " + order.error.code);
                  throw error;
                } else {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const self = this;
                  const self2 = this;
                  const error1 = new Error("Unexpected order status: " + order.status);
                  throw error1;
                }
              }
            }
          } else if (4 === c5) {
            const obj17 = { orderId: closure_130_0.id };
            const merged1 = Object.assign(c2);
            const intl = loadId(onSignFailure[8]).intl;
            closure_130_6(order, obj17, intl.string(loadId(onSignFailure[8]).t.khEaRI));
            c4 = 0;
            c6 = 3;
            const obj18 = { value: { type: "failed" }, done: true };
            return obj18;
          } else if (loadId === 1) {
            c6 = 3;
            throw value;
          } else if (loadId === 2) {
            c4 = 0;
            c6 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            const obj = { type: "pending", order };
            c4 = 0;
            c6 = 3;
            const obj22 = { value: obj, done: true };
            return obj22;
          }
        } catch (tmp80) {
          order = tmp80;
          if (0 === c4) {
            c6 = 3;
            throw tmp80;
          } else if (1 === tmp82) {
            c5 = 2;
          } else {
            c5 = 4;
          }
        }
      }
    }), items2),
    reportError: tmp4
  };
  items2 = [order, onSignFailure, tmp4, tmp3];
  return obj;
};