// === Module 11115: OrderSigningDeferral ===

// Module 11115 (OrderSigningDeferral)
import Stripe3DSChallenge from "Stripe3DSChallenge" /* 11116 */;
import StripeNextAction from "StripeNextAction" /* 11117 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
function openPaymentRedirect(redirect_url) {
  redirect_url = redirect_url.redirect_url;
  if (null == redirect_url) {
    const _Error = Error;
    const error = new Error("Payment redirect context has no redirect url");
    throw error;
  } else {
    const _window = window;
    window.open(redirect_url);
  }
}
let closure_5 = async function _performSigningDeferralAction(arg0) {
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
      return { value: "HermesInternal", done: null };
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
          const _Error2 = Error;
          const error = new Error("Order signing was deferred without a deferral context");
          throw error;
        } else {
          ({ payment_redirect_context, stripe_3ds_context, stripe_next_action_context } = _require);
          if (null == payment_redirect_context) {
            if (null == stripe_3ds_context) {
              if (null == stripe_next_action_context) {
                const _Error = Error;
                const error1 = new Error("Order signing deferral context has no action the client can complete");
                throw error1;
              } else {
                c2 = 2;
                c1 = 1;
                const obj6 = { value: StripeNextAction.handleStripeNextAction(stripe_next_action_context, _require.payment_gateway_merchant_account_id), done: false };
                return obj6;
              }
            } else {
              c2 = 1;
              c1 = 1;
              const obj7 = { value: Stripe3DSChallenge.authenticateStripePaymentIntent(stripe_3ds_context, _require.payment_gateway_merchant_account_id), done: false };
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
      return { value: "HermesInternal", done: null };
    } catch (tmp21) {
      c1 = tmp;
      throw tmp21;
    }
  }
};
const OrderStatus = fn(5634).OrderStatus;
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
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}