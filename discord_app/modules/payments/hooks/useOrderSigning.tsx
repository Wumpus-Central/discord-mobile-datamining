// discord_app/modules/payments/hooks/useOrderSigning.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { OrderStatus } from "../PaymentConstants.tsx";

const require = arg1;
({ useCallback: c5, useState: closure_6 } = noop);
let result = require("set").fileFinishedImporting("modules/payments/hooks/useOrderSigning.tsx");

export const useOrderSigning = function useOrderSigning(order) {
  order = order.order;
  const errorSource = order.errorSource;
  const onSignFailure = order.onSignFailure;
  const onError = order.onError;
  let callback;
  let callback2;
  let callback3;
  const tmp = callback(callback3(null), 2);
  callback = tmp[1];
  const items = [onError];
  const tmp2 = callback2((arg0) => {
    callback(arg0);
    if (onError != null) {
      onError(arg0);
    }
  }, items);
  callback2 = tmp2;
  const items1 = [errorSource, tmp2];
  let tmp3 = callback2((error) => {
    let tmp3 = error;
    if (!(error instanceof errorSource(onSignFailure[4]))) {
      tmp3 = new errorSource(tmp2[4])(error);
    }
    let obj = order(tmp2[5]);
    if (!obj.isExpectedHttpClientError(error)) {
      const _Error = Error;
      let tmp9 = tmp3;
      if (error instanceof Error) {
        tmp9 = error;
      }
      obj = { tags: null, extra: null };
      obj = { source: null };
      obj[0] = errorSource;
      obj[0] = obj;
      obj[1] = arg1;
      const result = order(tmp2[5]).captureBillingException(tmp9, obj);
      const tmp7Result = order(tmp2[5]);
    }
    callback2(tmp3);
    return tmp3;
  }, items1);
  callback3 = tmp3;
  const items2 = [order, onSignFailure, tmp3, tmp2];
  return {
    error: tmp[0],
    signOrder: callback2(
      onError(() => {
        closure_0 = arg0;
        c5 = 0;
        c6 = 0;
        c4 = 0;
        const iter = (function* () {
          if (v03 === 2) {
            v03 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp6 === 3) {
            if (arg0 === 1) {
              throw arg1;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              v03 = 2;
              if (0 === v02) {
                if (arg0 === 1) {
                  v03 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v03 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let status = tmp3;
                  c1 = tmp7;
                  let lib;
                  c1 = undefined;
                  obj1 = lib;
                  if (lib === undefined) {
                    obj1 = {};
                  }
                  ({ loadId: c0, errorExtra: c1 } = obj1);
                  status = undefined;
                  v02 = 1;
                  v03 = 1;
                  return { value: "PX_16", done: true };
                }
              } else if (1 === tmp7) {
                if (arg0 === 1) {
                  v03 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v03 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = arg1;
                  return obj2;
                } else if (null == lib) {
                  const tmp67 = new closure_1_1(closure_1_2[4])("Order not created yet");
                  v02(tmp67);
                  v03 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = { type: "failed" };
                  return obj3;
                } else {
                  v0(null);
                  v0 = 1;
                  let obj6 = lib(closure_1_2[6]);
                  const obj4 = { orderId: null, loadId: null };
                  obj4[0] = lib.id;
                  obj4[1] = lib;
                  v02 = 3;
                  v03 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = obj6.signOrder(obj4);
                  return obj5;
                }
              } else if (2 === tmp7) {
                v0 = 0;
                if (closure_3 instanceof lib(closure_1_2[6]).OrderSigningFailedWithConstraintsError) {
                  if (closure_1_2 != null) {
                    tmp43(closure_1_3.order);
                  }
                  v02(closure_1_3);
                  obj6 = { type: "failed" };
                } else {
                  const obj7 = {};
                  const merged = Object.assign(c1);
                  obj7.orderId = lib.id;
                  v03(closure_3, obj7);
                }
                v03 = 3;
              } else if (arg0 === 1) {
                v03 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                v03 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = arg1;
                return obj9;
              } else {
                status = arg1;
                if (status.status !== closure_1_7.SIGNED) {
                  if (null != closure_1_2.errors) {
                    if (closure_1_2.errors.length > 0) {
                      const _Error2 = Error;
                      const errors = closure_1_2.errors;
                      const _HermesInternal2 = HermesInternal;
                      error = new Error("Order signing failed with errors: " + errors.join(", "));
                      throw error;
                    }
                  }
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error("Unexpected order status: " + closure_1_2.status);
                  throw error1;
                } else {
                  obj = { type: "signed", order: null };
                  obj[1] = closure_1_2;
                  v0 = 0;
                  v03 = 3;
                  const obj10 = { value: null, done: true };
                  obj10[0] = obj;
                  return obj10;
                }
              }
            } catch (tmp70) {
              closure_3 = tmp70;
              if (tmp4 === v0) {
                v03 = tmp2;
                throw tmp70;
              } else {
                v02 = tmp;
              }
            }
          }
        })();
        iter.next();
        return iter;
      }),
      items2,
    ),
    reportError: tmp3,
  };
};
