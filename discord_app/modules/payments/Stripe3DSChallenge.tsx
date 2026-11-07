// discord_app/modules/payments/Stripe3DSChallenge.tsx
import StripeUtils from "../../utils/StripeUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function getLoadedStripe() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = async function _getLoadedStripe() {
  closure_1 = tmp2;
  await StripeUtils.getStripe(closure_0);
  closure_129_0 = value;
  if (null == closure_129_0) {
    const _Error = Error;
    const error = new Error("Stripe is not loaded");
    throw error;
  }
  return closure_129_0;
};
let closure_5 = async function _retrievePaymentIntent() {
  closure_2 = tmp2;
  await closure_0.retrievePaymentIntent(closure_1);
  closure_130_0 = value;
  const error2 = closure_130_0.error;
  const paymentIntent = closure_130_0.paymentIntent;
  if (null != error2) {
    const _Error2 = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Could not retrieve the payment intent: " + error2.message);
    throw error;
  }
  if (null == paymentIntent) {
    const _Error = Error;
    const error1 = new Error("Payment intent does not exist");
    throw error1;
  }
  return paymentIntent;
};
let closure_6 = async function _confirmCardPayment(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp2;
          let error2;
          c4 = 1;
          c5 = 1;
          const obj4 = { value: _require.confirmCardPayment(closure_1, closure_2), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        error2 = value.error;
        if (null != error2) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Card authentication failed: " + error2.message);
          throw error;
        } else {
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
let closure_7 = async function _authenticateStripePaymentIntent() {
  if (null == closure_130_0) {
    const _Error2 = Error;
    const error = new Error("Stripe 3DS context has no client secret");
    throw error;
  }
  await closure_131_3(closure_130_2);
  closure_130_3 = value;
  await (function retrievePaymentIntent() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_130_3, closure_130_0);
  closure_130_4 = value;
  const status = closure_130_4.status;
  if ("succeeded" !== status) {
    if ("processing" !== status) {
      if ("requires_payment_method" !== status) {
        if ("requires_confirmation" !== status) {
          if ("requires_action" !== status) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error1 = new Error("Unexpected payment intent status: " + closure_130_4.status);
            throw error1;
          }
        }
      }
      c5 = 3;
      return {
        value: (function confirmCardPayment() {
          const self = this;
          const apply = closure_1_6.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        })(
          closure_130_3,
          closure_130_0,
          (function getConfirmCardPaymentData(status, payment_method) {
            if ("requires_payment_method" === status.status) {
              if (null != payment_method) {
                const obj = { payment_method };
                return obj;
              }
            }
          })(closure_130_4, closure_130_1),
        ),
        done: true,
      };
    }
  }
  await "HermesInternal";
  closure_2 = tmp2;
  ({ client_secret: closure_130_0, payment_method_id: closure_130_1 } = closure_0);
  closure_130_2 = closure_1;
  return "flexDirection";
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/Stripe3DSChallenge.tsx");

export { getLoadedStripe };
export function authenticateStripePaymentIntent() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
