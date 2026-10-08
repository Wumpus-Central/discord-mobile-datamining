// === Module 9037: OrderSigningDeferral ===

// Module 9037 (OrderSigningDeferral)
import Stripe3DSChallenge from "Stripe3DSChallenge" /* 9038 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _performSigningDeferralAction(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null == closure_0) {
          const _Error2 = Error;
          let error = new Error("Order signing was deferred without a deferral context");
          throw error;
        } else {
          ({ payment_redirect_context, stripe_3ds_context } = closure_0);
          if (null == payment_redirect_context) {
            if (null == stripe_3ds_context) {
              let _Error = Error;
              const error1 = new Error("Order signing deferral context has no action the client can complete");
              throw error1;
            } else {
              c2 = 1;
              c1 = 1;
              const obj5 = { value: Stripe3DSChallenge.authenticateStripePaymentIntent(stripe_3ds_context), done: false };
              return obj5;
            }
          } else {
            (function openPaymentRedirect(payment_redirect_context) {
              const redirect_url = payment_redirect_context.redirect_url;
              if (null == redirect_url) {
                const _Error = Error;
                const error = new Error("Payment redirect context has no redirect url");
                throw error;
              } else {
                const _window = window;
                window.open(redirect_url);
              }
            })(payment_redirect_context);
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c1 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp18) {
      c1 = tmp;
      throw tmp18;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/OrderSigningDeferral.tsx");

export const performSigningDeferralAction = function performSigningDeferralAction() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};