// discord_app/modules/payments/hooks/useOrderSigning.tsx
import BillingUtils from "../../../utils/BillingUtils.tsx";
import BillingErrorDefault from "../../../errors/BillingError.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const noop = fn(19);
({ useCallback: hasOwnProperty, useState: metroRequire } = noop);
const OrderStatus = fn(4738).OrderStatus;
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
  let tmp3 = closure_5((error, extra) => {
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
    closure_5(tmp3);
    return tmp3;
  }, items1);
  closure_6 = tmp3;
  let obj = { error: tmp[0], signOrder: null, reportError: tmp3 };
  const items2 = [order, onSignFailure, tmp3, tmp2];
  obj.signOrder = closure_5(
    onError(function* () {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
              errorSource = tmp7;
              closure_129_0 = undefined;
              closure_129_1 = undefined;
              let obj4 = order;
              if (order === undefined) {
                obj4 = {};
              }
              ({ loadId: closure_129_0, errorExtra: closure_129_1 } = obj4);
              closure_129_2 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (null == closure_130_0) {
              const tmp67 = new errorSource(tmp3[4])("Order not created yet");
              closure_130_5(tmp67);
              c6 = 3;
              const obj6 = { value: { type: "failed" }, done: true };
              return obj6;
            } else {
              closure_130_4(null);
              c4 = 1;
              const obj8 = { orderId: closure_130_0.id, loadId: closure_129_0 };
              c5 = 3;
              c6 = 1;
              const obj9 = { value: order(tmp3[6]).signOrder(obj8), done: false };
              return obj9;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            closure_129_3 = closure_3;
            if (closure_129_3 instanceof order(tmp3[6]).OrderSigningFailedWithConstraintsError) {
              if (closure_130_2 != null) {
                tmp43(closure_129_3.order);
              }
              closure_130_5(closure_129_3);
            } else {
              const obj11 = {};
              const merged = Object.assign(closure_129_1);
              obj11.orderId = closure_130_0.id;
              closure_130_6(closure_129_3, obj11);
            }
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            closure_129_2 = value;
            if (closure_129_2.status !== constants.SIGNED) {
              if (null != closure_129_2.errors) {
                if (closure_129_2.errors.length > 0) {
                  const _Error2 = Error;
                  const errors = closure_129_2.errors;
                  const _HermesInternal2 = HermesInternal;
                  const error = new Error("Order signing failed with errors: " + errors.join(", "));
                  throw error;
                }
              }
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error1 = new Error("Unexpected order status: " + closure_129_2.status);
              throw error1;
            } else {
              const obj = { type: "signed", order: closure_129_2 };
              c4 = 0;
              c6 = 3;
              const obj14 = { value: obj, done: true };
              return obj14;
            }
          }
        } catch (tmp70) {
          closure_3 = tmp70;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp70;
          } else {
            c5 = tmp;
          }
        }
      }
    }),
    items2,
  );
  return obj;
};
