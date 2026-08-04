import sendRequest from "sendRequest";
import ME from "ME";
import { PaymentSourceTypes } from "sum";

let c4;
let c5;
const require = arg1;
({ Endpoints: c4, REDIRECTED_PAYMENT_SOURCES: c5 } = ME);
obj = { [PaymentSourceTypes.GIROPAY]: obj, [PaymentSourceTypes.SOFORT]: obj, [PaymentSourceTypes.PRZELEWY24]: obj1, [PaymentSourceTypes.BANCONTACT]: obj2, [PaymentSourceTypes.EPS]: obj3, [PaymentSourceTypes.IDEAL]: obj4 };
obj = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(name) {
    let obj = { name: name.paymentSource.billingAddress.name };
    obj = { stripeConfirmPayment: name.stripe.confirmGiropayPayment, paymentMethod: { billing_details: obj } };
    return obj;
  }
};
obj = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    let obj = { country: paymentSource.billingAddress.country };
    obj = { name: paymentSource.billingAddress.name, email: paymentSource.email };
    obj = { stripeConfirmPayment: paymentSource.stripe.confirmSofortPayment, paymentMethod: { sofort: obj, billing_details: obj } };
    return obj;
  }
};
let obj5 = { [PaymentSourceTypes.SEPA_DEBIT]: obj6, [PaymentSourceTypes.PIX]: obj7 };
class PaymentConfirmationHandler {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.paymentSource = global;
    obj.payment = arg1;
    obj.paymentSourceType = global.type;
    obj.paymentId = arg1.payment_id;
    return obj;
  }
}
PaymentConfirmationHandler.prototype["performRedirect"] = function performRedirect(arg0) {
  window.open(arg0);
};
const result = require("sum").fileFinishedImporting("modules/billing/actions/HandleConfirmPaymentRegistry.tsx");
class StripePaymentConfirmationHandler extends PaymentConfirmationHandler {
  constructor(arg0, arg1) {
    if (null == global) {
      tmp7 = closure_0;
      tmp8 = closure_2;
      obj2 = require("_validatePaymentSourceBillingAddress");
      str2 = "Payment source cannot be null on a redirect.";
      throw obj2.dispatchConfirmationError("Payment source cannot be null on a redirect.");
    } else {
      tmp9 = arg1;
      tmp10 = new.target;
      tmp11 = StripePaymentConfirmationHandler;
      tmp12 = new.target;
      tmp13 = new.target;
      tmp14 = global;
      tmp15 = new StripePaymentConfirmationHandler(global, arg1, global);
      tmp16 = tmp15;
      // ThrowIfThisInitialized (0x7c)
      tmp15.stripe = null;
      paymentSourceType = tmp15.paymentSourceType;
      tmp17 = closure_5;
      hasItem = closure_5.has(paymentSourceType);
      if (hasItem) {
        tmp = defineProperty;
        hasItem = paymentSourceType in defineProperty;
      }
      if (hasItem) {
        tmp6 = defineProperty;
        tmp15.handlerRegistry = defineProperty[tmp15.paymentSourceType];
      } else if (tmp15.paymentSourceType in Endpoints) {
        tmp15.handlerRegistry = tmp3[tmp15.paymentSourceType];
      } else {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = require("_validatePaymentSourceBillingAddress");
        str = "Invalid Payment Source Type - redirect or direct confirmation handlers not found.";
        throw obj.dispatchConfirmationError("Invalid Payment Source Type - redirect or direct confirmation handlers not found.");
      }
      return tmp15;
    }
  }
}
const prototype = StripePaymentConfirmationHandler.prototype;
prototype["getStripe"] = function getStripe() {
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp4;
            if (null == outer1_0.stripe) {
              let closure_0 = outer1_0;
              dependencyMap = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_1(4610).getStripe();
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0.stripe = arg1;
        }
        if (null == closure_0.stripe) {
          let obj2 = outer1_0(4605);
          throw obj2.dispatchConfirmationError("Stripe cannot be null on a redirect.");
        } else {
          c3 = 3;
          obj2 = { value: null, done: true };
          obj2[0] = closure_0.stripe;
          return obj2;
        }
      } catch (tmp17) {
        c3 = tmp;
        throw tmp17;
      }
    }
  })();
};
prototype["getPaymentIntentInfo"] = function getPaymentIntentInfo() {
  const self = this;
  return callback(function*() {
    let body = tmp4;
    const HTTP = outer1_0(table[5]).HTTP;
    const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
    obj1[0] = outer1_4.BILLING_STRIPE_PAYMENT_INTENTS(outer1_0.paymentId);
    yield HTTP.get(obj1);
    body = arg1.body;
    const obj = { clientSecret: null, paymentMethodId: null };
    obj[0] = body.stripe_payment_intent_client_secret;
    obj[1] = body.stripe_payment_intent_payment_method_id;
    return obj;
  })();
};
prototype["getStripeRedirect"] = function getStripeRedirect(arg0) {
  let dependencyMap;
  let importAll;
  let require;
  ({ clientSecret: require, state: importAll, paymentMethodId: dependencyMap } = arg0);
  const self = this;
  return self(function*() {
    let c1 = tmp2;
    const outer1_0 = yield stripe.getStripe();
    const handlerRegistry = stripe.handlerRegistry;
    let obj3 = { stripe: null, paymentSource: null, paymentMethodId: null };
    obj3[0] = outer1_0;
    obj3[1] = stripe.paymentSource;
    obj3[2] = outer1_2;
    const outer1_1 = handlerRegistry.constructStripeConfirmPaymentHandler(obj3);
    outer1_2 = outer1_1.stripeConfirmPayment;
    const obj4 = { payment_method: null, return_url: null };
    obj4[0] = stripe;
    let c0 = outer1_1;
    const aPIBaseURL = outer1_0(outer1_2[5]).getAPIBaseURL();
    if (outer1_1 == null) {
      c0 = "";
    }
    obj4[1] = aPIBaseURL + c4.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(stripe.paymentSourceType, c0, "success");
    c4 = yield outer1_2(outer1_0, obj4, { handleActions: false });
    const paymentIntent = c4.paymentIntent;
    const error = c4.error;
    if (null != error) {
      obj3 = outer1_0(outer1_2[3]);
      throw obj3.dispatchConfirmationError(outer1_6);
    }
    if (null == paymentIntent) {
      const obj2 = outer1_0(outer1_2[3]);
      throw obj2.dispatchConfirmationError("paymentIntent not available with successful api call");
    }
    const next_action = paymentIntent.next_action;
    if (next_action != null) {
      const redirect_to_url = next_action.redirect_to_url;
      if (redirect_to_url != null) {
        const url = redirect_to_url.url;
      }
    }
    if (null == url) {
      const obj1 = outer1_0(outer1_2[3]);
      throw obj1.dispatchConfirmationError("confirm payment did not return a redirect url");
    }
    return paymentIntent.next_action.redirect_to_url.url;
  })();
};
prototype["confirmRedirectedPaymentSource"] = function confirmRedirectedPaymentSource(arg0) {
  let importAll;
  let require;
  ({ clientSecret: require, paymentMethodId: importAll } = arg0);
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            closure_1 = undefined;
            let obj4 = outer1_0(c2[3]);
            c2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = obj4.popupBridgeState(c2.paymentSourceType);
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            const obj3 = { clientSecret: null, state: null, paymentMethodId: null };
            obj3[0] = closure_0;
            obj3[1] = closure_0;
            obj3[2] = closure_1;
            c2 = 2;
            c3 = 1;
            obj4 = { value: null, done: false };
            obj4[0] = c2.getStripeRedirect(obj3);
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_1 = arg1;
          c2.performRedirect(closure_1);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  })();
};
prototype["confirmDirectPaymentSource"] = function confirmDirectPaymentSource(arg0) {
  let importAll;
  let require;
  ({ clientSecret: require, paymentMethodId: importAll } = arg0);
  const self = this;
  return callback(function*() {
    let c0 = tmp2;
    const outer1_0 = yield stripe.getStripe();
    const handlerRegistry = stripe.handlerRegistry;
    let obj3 = { stripe: null, paymentSource: null, paymentMethodId: null };
    obj3[0] = outer1_0;
    obj3[1] = stripe.paymentSource;
    obj3[2] = outer1_1;
    outer1_1 = handlerRegistry.constructStripeConfirmPaymentHandler(obj3);
    const outer1_4 = outer1_1.pendingCustomerAction;
    const obj4 = { payment_method: null };
    obj4[0] = paymentMethod;
    let closure_5 = yield stripe(outer1_0, obj4);
    const paymentIntent = closure_5.paymentIntent;
    const error = closure_5.error;
    if (null != error) {
      obj3 = outer1_0(stripe[3]);
      throw obj3.dispatchConfirmationError(outer1_7);
    }
    if (null == paymentIntent) {
      const obj2 = outer1_0(stripe[3]);
      throw obj2.dispatchConfirmationError("paymentIntent not available with successful stripe call");
    }
    const obj = { pendingCustomerAction: null, customerActionCancelled: null };
    obj[0] = c4;
    obj[1] = "requires_action" === paymentIntent.status;
    return obj;
  })();
};
prototype["confirmPayment"] = function confirmPayment() {
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c3 = 2;
        if (0 === paymentMethodId) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let clientSecret = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            clientSecret = undefined;
            paymentMethodId = undefined;
            c3 = undefined;
            paymentMethodId = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0.getPaymentIntentInfo();
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            closure_0 = arg1;
            clientSecret = closure_0.clientSecret;
            paymentMethodId = closure_0.paymentMethodId;
            if ("stripe_redirect_confirmation" === closure_0.handlerRegistry.confirmationType) {
              const obj3 = { clientSecret: null, paymentMethodId: null };
              obj3[0] = clientSecret;
              obj3[1] = paymentMethodId;
              paymentMethodId = 2;
              c3 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = closure_0.confirmRedirectedPaymentSource(obj3);
              return obj4;
            } else {
              const obj5 = { clientSecret: null, paymentMethodId: null };
              obj5[0] = clientSecret;
              obj5[1] = paymentMethodId;
              paymentMethodId = 3;
              c3 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = closure_0.confirmDirectPaymentSource(obj5);
              return obj6;
            }
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            c3 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = { redirectConfirmation: true };
            return obj8;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = arg1;
          return obj9;
        } else {
          c3 = arg1;
          obj = { redirectConfirmation: false, pendingCustomerAction: null, customerActionCancelled: null };
          obj[1] = c3.pendingCustomerAction;
          obj[2] = c3.customerActionCancelled;
          c3 = 3;
          const obj10 = { value: null, done: true };
          obj10[0] = obj;
          return obj10;
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  })();
};
class AdyenPaymentConfirmationHandler extends PaymentConfirmationHandler {
  constructor(arg0, arg1) {
    if (null == global) {
      tmp9 = closure_0;
      tmp10 = closure_2;
      obj = require("_validatePaymentSourceBillingAddress");
      str = "Payment source cannot be null on a redirect.";
      throw obj.dispatchConfirmationError("Payment source cannot be null on a redirect.");
    } else {
      tmp = arg1;
      tmp2 = new.target;
      tmp3 = AdyenPaymentConfirmationHandler;
      tmp4 = new.target;
      tmp5 = new.target;
      tmp6 = global;
      tmp7 = new AdyenPaymentConfirmationHandler(global, arg1, global);
      // ThrowIfThisInitialized (0x7c)
      tmp8 = tmp7;
      return tmp7;
    }
  }
}
const prototype2 = AdyenPaymentConfirmationHandler.prototype;
prototype2["handleAdyenConfirmation"] = function handleAdyenConfirmation() {
  const self = this;
  const adyen_redirect_url = this.payment.adyen_redirect_url;
  if (null == adyen_redirect_url) {
    throw require(4605) /* _validatePaymentSourceBillingAddress */.dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
  } else {
    if (set.has(self.paymentSource.type)) {
      self.performRedirect(adyen_redirect_url);
      let obj = { redirectConfirmation: true, redirectURL: null };
      obj[1] = adyen_redirect_url;
    } else {
      obj = { redirectConfirmation: false, redirectURL: null };
      obj[1] = adyen_redirect_url;
    }
    return obj;
  }
};
prototype2["confirmPayment"] = function confirmPayment() {
  return Promise.resolve(this.handleAdyenConfirmation());
};

export const STRIPE_REDIRECTED_PAYMENT_METHOD_REGISTRY = obj;
export const getIsStripeRedirectedPaymentSource = function getIsStripeRedirectedPaymentSource(arg0) {
  let hasItem = set.has(arg0);
  if (hasItem) {
    hasItem = arg0 in obj;
  }
  return hasItem;
};
export const STRIPE_DIRECT_CONFIRM_PAYMENT_METHOD_REGISTRY = obj5;
export const getIsStripeDirectConfirmationPaymentSource = function getIsStripeDirectConfirmationPaymentSource(arg0) {
  return arg0 in obj5;
};
export { StripePaymentConfirmationHandler };
export { AdyenPaymentConfirmationHandler };