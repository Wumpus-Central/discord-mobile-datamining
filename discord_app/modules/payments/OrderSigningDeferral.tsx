// discord_app/modules/payments/OrderSigningDeferral.tsx
import Stripe3DSChallenge from "Stripe3DSChallenge.tsx";
import StripeNextAction from "StripeNextAction.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function openPaymentRedirect(redirect_url) {
  redirect_url = redirect_url.redirect_url;
  if (null == redirect_url) {
    if (typeof prototype === "function") {
      const redirect_url1 = new redirect_url("Payment redirect context has no redirect url", tmp3, redirect_url);
      redirect_url1.name = "PaymentRedirectUrlMissing";
      throw redirect_url1;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    const _window = window;
    window.open(redirect_url);
  }
}
let closure_8 = async function _performSigningDeferralAction(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null == _require) {
          throw new prototype2();
        } else {
          ({ payment_redirect_context, stripe_3ds_context, stripe_next_action_context } = _require);
          if (null == payment_redirect_context) {
            if (null == stripe_3ds_context) {
              if (null == stripe_next_action_context) {
                throw new prototype3();
              } else {
                c2 = 2;
                c1 = 1;
                const obj6 = {
                  value: StripeNextAction.handleStripeNextAction(
                    stripe_next_action_context,
                    _require.payment_gateway_merchant_account_id,
                  ),
                  done: false,
                };
                return obj6;
              }
            } else {
              c2 = 1;
              c1 = 1;
              const obj7 = {
                value: Stripe3DSChallenge.authenticateStripePaymentIntent(
                  stripe_3ds_context,
                  _require.payment_gateway_merchant_account_id,
                ),
                done: false,
              };
              return obj7;
            }
          } else {
            openPaymentRedirect(payment_redirect_context);
          }
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj8 = { value, done: true };
          return obj8;
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
      return { value: "HermesInternal", done: "HermesInternal" };
    } catch (tmp15) {
      c1 = tmp;
      throw tmp15;
    }
  }
};
const OrderStatus = fn(5729).OrderStatus;
const prototype = function PaymentRedirectUrlMissingError() {
  const tmp2 = new tmp("Payment redirect context has no redirect url", new.target);
  tmp2.name = "PaymentRedirectUrlMissing";
  return tmp2;
}.prototype;
class prototype extends Error {}
const prototype2 = function SigningDeferralContextMissingError() {
  const tmp2 = new tmp("Order signing was deferred without a deferral context", new.target);
  tmp2.name = "SigningDeferralContextMissing";
  return tmp2;
}.prototype;
class prototype2 extends Error {}
const prototype3 = function SigningDeferralActionUnsupportedError() {
  const tmp2 = new tmp("Order signing deferral context has no action the client can complete", new.target);
  tmp2.name = "SigningDeferralActionUnsupported";
  return tmp2;
}.prototype;
class prototype3 extends Error {}
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/OrderSigningDeferral.tsx");

export function getPaymentRedirectContext(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1 = null;
  if (null != prop) {
    prop1 = prop.payment_redirect_context;
  }
  return prop1;
}
export function getStripeNextActionContext(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.stripe_next_action_context;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  return prop1;
}
export function isAwaitingStripeNextAction(status) {
  let tmp = null != status;
  if (tmp) {
    tmp = status.status === OrderStatus.SIGNING_IN_PROGRESS;
  }
  if (tmp) {
    let billing_facet = null;
    if (null != status) {
      billing_facet = status.billing_facet;
    }
    let prop;
    if (billing_facet != null) {
      prop = billing_facet.order_signing_deferral_context;
    }
    if (prop == null) {
      prop = null;
    }
    let prop1;
    if (prop != null) {
      prop1 = prop.stripe_next_action_context;
    }
    if (prop1 == null) {
      prop1 = null;
    }
    tmp = null != prop1;
  }
  return tmp;
}
export function getSigningDeferralMerchantAccountId(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.payment_gateway_merchant_account_id;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  return prop1;
}
export function isSigningDeferralExpired(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.stripe_next_action_context;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  let expires_at;
  if (prop1 != null) {
    expires_at = prop1.expires_at;
  }
  let time = null;
  if (null != expires_at) {
    const _Date = Date;
    const date = new Date(expires_at);
    time = date.getTime();
  }
  let tmp11 = null != time;
  if (tmp11) {
    const _Date2 = Date;
    tmp11 = Date.now() >= time;
  }
  return tmp11;
}
export function getSigningDeferralDeadline(billing_facet) {
  billing_facet = null;
  if (null != billing_facet) {
    billing_facet = billing_facet.billing_facet;
  }
  let prop;
  if (billing_facet != null) {
    prop = billing_facet.order_signing_deferral_context;
  }
  if (prop == null) {
    prop = null;
  }
  let prop1;
  if (prop != null) {
    prop1 = prop.stripe_next_action_context;
  }
  if (prop1 == null) {
    prop1 = null;
  }
  let expires_at;
  if (prop1 != null) {
    expires_at = prop1.expires_at;
  }
  let time = null;
  if (null != expires_at) {
    const _Date = Date;
    const date = new Date(expires_at);
    time = date.getTime();
  }
  let sum = null;
  if (null != time) {
    sum = time + 120000;
  }
  return sum;
}
export { openPaymentRedirect };
export function performSigningDeferralAction() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
