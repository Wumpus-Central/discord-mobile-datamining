// discord_app/modules/payments/Stripe3DSChallenge.tsx
import StripeUtils from "../../utils/StripeUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c5;

let obj = function _getLoadedStripe() {
  obj = _asyncToGenerator(async function () {
    let obj3;
    let value;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value = undefined;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: obj3.getStripe(), done: false };
            obj3 = StripeUtils;
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else if (null == value) {
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error("Stripe is not loaded");
          throw error;
        } else {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp14) {
        c2 = 3;
        throw tmp14;
      }
    }
  });
  return obj(...arguments);
};
obj = function _retrievePaymentIntent() {
  obj = _asyncToGenerator(async function (arg0, arg1) {
    let c3;
    let c4;
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    await closure_0.retrievePaymentIntent(closure_1);
    closure_0 = value;
    let error = closure_0.error;
    const paymentIntent = closure_0.paymentIntent;
    if (null != error) {
      const _Error2 = Error;
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      error = new Error("Could not retrieve the payment intent: " + error.message);
      throw error;
    }
    if (null == paymentIntent) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error1 = new Error("Payment intent does not exist");
      throw error1;
    }
    return paymentIntent;
  });
  return obj(...arguments);
};
obj = function _confirmCardPayment() {
  obj = _asyncToGenerator(async function (arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let error;
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
            let closure_3 = tmp;
            error = undefined;
            c4 = 1;
            c5 = 1;
            const obj4 = { value: closure_0.confirmCardPayment(closure_1, closure_2), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          error = value.error;
          if (null != error) {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const self = this;
            const self2 = this;
            error = new Error("Card authentication failed: " + error.message);
            throw error;
          } else {
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp16) {
        c5 = 3;
        throw tmp16;
      }
    }
  });
  return obj(...arguments);
};
obj = function _authenticateStripePaymentIntent() {
  obj = _asyncToGenerator(async function (arg0) {
    let c0;
    let c1;
    let c2;
    let closure_1;
    function getLoadedStripe() {
      return closure_1_3(...arguments);
    }
    function retrievePaymentIntent() {
      return closure_1_4(...arguments);
    }
    function confirmCardPayment() {
      return closure_1_5(...arguments);
    }
    function getConfirmCardPaymentData(status, c1) {
      if ("requires_payment_method" === status.status) {
        if (null != payment_method) {
          return { payment_method };
        }
      }
    }
    let closure_0 = arg0;
    if (null == c0) {
      const _Error2 = Error;
      const self3 = this;
      const self4 = this;
      const error = new Error("Stripe 3DS context has no client secret");
      throw error;
    }
    await getLoadedStripe();
    let closure_2 = value;
    await retrievePaymentIntent(closure_2, c0);
    let closure_3 = value;
    const status = closure_3.status;
    if ("succeeded" !== status) {
      if ("processing" !== status) {
        if ("requires_payment_method" !== status) {
          if ("requires_confirmation" !== status) {
            if ("requires_action" !== status) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error1 = new Error("Unexpected payment intent status: " + closure_3.status);
              throw error1;
            }
          }
        }
        let c3 = 3;
        obj = { value: confirmCardPayment(closure_2, c0, getConfirmCardPaymentData(closure_3, c1)), done: true };
        return obj;
      }
    }
    await "IconComponent";
    ({ client_secret: c0, payment_method_id: c1 } = closure_0);
    return "Reflect";
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/payments/Stripe3DSChallenge.tsx");

export const authenticateStripePaymentIntent = function authenticateStripePaymentIntent() {
  return obj(...arguments);
};
