// === Module 8516: Stripe3DSChallenge ===

// Module 8516 (Stripe3DSChallenge)
import StripeUtils from "StripeUtils" /* 5373 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _getLoadedStripe() {
  closure_0 = tmp2;
  await StripeUtils.getStripe();
  closure_128_0 = value;
  if (null == closure_128_0) {
    const _Error = Error;
    const error = new Error("Stripe is not loaded");
    throw error;
  }
  return closure_128_0;
};
let closure_4 = async function _retrievePaymentIntent() {
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
let closure_5 = async function _confirmCardPayment(arg0) {
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
      return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
        }
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
let closure_6 = async function _authenticateStripePaymentIntent(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ client_secret: closure_129_0, payment_method_id: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          c2 = 1;
          c3 = 1;
          return { value: "flex", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null == closure_129_0) {
          const _Error2 = Error;
          const error = new Error("Stripe 3DS context has no client secret");
          throw error;
        } else {
          c2 = 2;
          c3 = 1;
          const obj5 = {
            value: (function getLoadedStripe() {
                      const self = this;
                      const apply = closure_1_3.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(),
            done: false
          };
          return obj5;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_129_2 = value;
          c2 = 3;
          c3 = 1;
          const obj7 = {
            value: (function retrievePaymentIntent() {
                      const self = this;
                      const apply = closure_1_4.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_129_2, closure_129_0),
            done: false
          };
          return obj7;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_129_3 = value;
        const status = closure_129_3.status;
        if ("succeeded" !== status) {
          if ("processing" !== status) {
            if ("requires_payment_method" !== status) {
              if ("requires_confirmation" !== status) {
                if ("requires_action" !== status) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error("Unexpected payment intent status: " + closure_129_3.status);
                  throw error1;
                }
              }
            }
            c3 = 3;
            let obj = {
              value: (function confirmCardPayment() {
                          const self = this;
                          const apply = closure_1_5.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(closure_129_2, closure_129_0, (function getConfirmCardPaymentData(status, payment_method) {
                          if ("requires_payment_method" === status.status) {
                            if (null != payment_method) {
                              const obj = { payment_method };
                              return obj;
                            }
                          }
                        })(closure_129_3, closure_129_1)),
              done: true
            };
            return obj;
          }
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp31) {
      c3 = tmp;
      throw tmp31;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/Stripe3DSChallenge.tsx");

export const authenticateStripePaymentIntent = function authenticateStripePaymentIntent() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};