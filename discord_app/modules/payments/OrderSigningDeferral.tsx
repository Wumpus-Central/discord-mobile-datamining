// discord_app/modules/payments/OrderSigningDeferral.tsx
import Stripe3DSChallenge from "Stripe3DSChallenge.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c1, c2;

let obj = function _performSigningDeferralAction() {
  obj = _asyncToGenerator(async function (arg0) {
    let obj2;
    let payment_redirect_context;
    let stripe_3ds_context;
    function openPaymentRedirect(payment_redirect_context) {
      const redirect_url = payment_redirect_context.redirect_url;
      if (null == redirect_url) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Payment redirect context has no redirect url");
        throw error;
      } else {
        const _window = window;
        window.open(redirect_url);
      }
    }
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
            const self3 = this;
            const self4 = this;
            let error = new Error("Order signing was deferred without a deferral context");
            throw error;
          } else {
            ({ payment_redirect_context, stripe_3ds_context } = closure_0);
            if (null == payment_redirect_context) {
              if (null == stripe_3ds_context) {
                let _Error = Error;
                let self = this;
                const str = "Order signing deferral context has no action the client can complete";
                let self2 = this;
                const error1 = new Error("Order signing deferral context has no action the client can complete");
                throw error1;
              } else {
                c2 = 1;
                c1 = 1;
                const obj5 = { value: obj2.authenticateStripePaymentIntent(stripe_3ds_context), done: false };
                obj2 = Stripe3DSChallenge;
                return obj5;
              }
            } else {
              openPaymentRedirect(payment_redirect_context);
            }
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
        c1 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp13) {
        c1 = 3;
        throw tmp13;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/payments/OrderSigningDeferral.tsx");

export const performSigningDeferralAction = function performSigningDeferralAction() {
  return obj(...arguments);
};
