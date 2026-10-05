// === Module 5423: HandleConfirmPaymentRegistry ===

// Module 5423 (HandleConfirmPaymentRegistry)
import Constants2 from "Constants" /* 1096 */;
import BillingSharedActionCreators from "BillingSharedActionCreators" /* 5405 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let _self, c2;

let closure_4;
let hasOwnProperty;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj9;
({ Endpoints: closure_4, REDIRECTED_PAYMENT_SOURCES: hasOwnProperty } = Constants);
const PaymentSourceTypes = Constants2.PaymentSourceTypes;
let obj = { [PaymentSourceTypes.GIROPAY]: obj2, [PaymentSourceTypes.SOFORT]: obj3, [PaymentSourceTypes.PRZELEWY24]: obj4, [PaymentSourceTypes.BANCONTACT]: obj5, [PaymentSourceTypes.EPS]: obj6, [PaymentSourceTypes.IDEAL]: obj7 };
obj2 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(name) {
    const paymentMethod = { billing_details: { name: name.paymentSource.billingAddress.name } };
    return { stripeConfirmPayment: name.stripe.confirmGiropayPayment, paymentMethod };
  }
};
obj3 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    const paymentMethod = { sofort: { country: paymentSource.billingAddress.country }, billing_details: { name: paymentSource.billingAddress.name, email: paymentSource.email } };
    return { stripeConfirmPayment: paymentSource.stripe.confirmSofortPayment, paymentMethod };
  }
};
obj4 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    if (null == paymentSource.bank) {
      const _HermesInternal = HermesInternal;
      const obj5 = BillingSharedActionCreators;
      throw obj5.dispatchConfirmationError("PaymentSource (" + paymentSource.id + ") missing bank info for p24.");
    } else {
      const paymentMethod = { p24: obj2, billing_details: obj3 };
      return { stripeConfirmPayment: tmp.confirmP24Payment, paymentMethod };
    }
  }
};
obj5 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    const paymentMethod = { billing_details: { name: paymentSource.billingAddress.name, email: paymentSource.email } };
    return { stripeConfirmPayment: paymentSource.stripe.confirmBancontactPayment, paymentMethod };
  }
};
obj6 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    if (null == paymentSource.bank) {
      const _HermesInternal = HermesInternal;
      const obj5 = BillingSharedActionCreators;
      throw obj5.dispatchConfirmationError("PaymentSource (" + paymentSource.id + ") missing bank info for EPS.");
    } else {
      const paymentMethod = { eps: obj2, billing_details: obj3 };
      return { stripeConfirmPayment: tmp.confirmEpsPayment, paymentMethod };
    }
  }
};
obj7 = {
  confirmationType: "stripe_redirect_confirmation",
  constructStripeConfirmPaymentHandler(paymentSource) {
    paymentSource = paymentSource.paymentSource;
    const paymentMethod = { ideal: {}, billing_details: { name: paymentSource.billingAddress.name } };
    const stripe = paymentSource.stripe;
    if (null != paymentSource.bank) {
      const obj2 = { bank: paymentSource.bank };
      paymentMethod.ideal = obj2;
    }
    return { stripeConfirmPayment: stripe.confirmIdealPayment, paymentMethod };
  }
};
let obj8 = { [PaymentSourceTypes.SEPA_DEBIT]: obj9, [PaymentSourceTypes.PIX]: obj10 };
obj9 = {
  confirmationType: "stripe_direct_confirmation",
  constructStripeConfirmPaymentHandler(paymentMethodId) {
    paymentMethodId = paymentMethodId.paymentMethodId;
    if (null == paymentMethodId) {
      const obj2 = BillingSharedActionCreators;
      throw obj2.dispatchConfirmationError("On a sepa payment payment method id cannot be null");
    } else {
      return { stripeConfirmPayment: tmp.confirmSepaDebitPayment, paymentMethod: paymentMethodId };
    }
  }
};
obj10 = {
  confirmationType: "stripe_direct_confirmation",
  constructStripeConfirmPaymentHandler(stripe) {
    return { stripeConfirmPayment: stripe.stripe.confirmPixPayment, paymentMethod: stripe.paymentMethodId, pendingCustomerAction: true };
  }
};
class PaymentConfirmationHandler {
  constructor(paymentSource, payment) {
    obj = Object.create(new.target.prototype);
    obj.paymentSource = paymentSource;
    obj.payment = payment;
    obj.paymentSourceType = paymentSource.type;
    obj.paymentId = payment.payment_id;
    return obj;
  }
  performRedirect(arg0) {
    window.open(arg0);
  }
}
const prototype = PaymentConfirmationHandler.prototype;
const result = size.fileFinishedImporting("modules/billing/actions/HandleConfirmPaymentRegistry.tsx");
class StripePaymentConfirmationHandler extends PaymentConfirmationHandler {
  constructor(paymentSource, body) {
    if (null == paymentSource) {
      const obj2 = BillingSharedActionCreators;
      throw obj2.dispatchConfirmationError("Payment source cannot be null on a redirect.");
    } else {
      const self = this;
      const self2 = this;
      const tmp13 = new StripePaymentConfirmationHandler(paymentSource, body, paymentSource);
      tmp13.stripe = null;
      const paymentSourceType = tmp13.paymentSourceType;
      const hasItem = hasOwnProperty.has(paymentSourceType) && paymentSourceType in obj;
      if (hasItem) {
        tmp13.handlerRegistry = obj[tmp13.paymentSourceType];
      } else if (tmp13.paymentSourceType in obj8) {
        tmp13.handlerRegistry = tmp3[tmp13.paymentSourceType];
      } else {
        obj = BillingSharedActionCreators;
        throw obj.dispatchConfirmationError("Invalid Payment Source Type - redirect or direct confirmation handlers not found.");
      }
      return tmp13;
    }
  }
  getStripe() {
    const self = this;
    return (async () => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else if (null == self.stripe) {
              _self = self;
              const obj4 = tmp3(c2[4]);
              c2 = 1;
              c3 = 1;
              const obj6 = { value: obj4.getStripe(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            _self.stripe = value;
          }
          if (null == closure_129_0.stripe) {
            const obj3 = _self(c2[3]);
            throw obj3.dispatchConfirmationError("Stripe cannot be null on a redirect.");
          } else {
            c3 = 3;
            const obj7 = { value: closure_129_0.stripe, done: true };
            return obj7;
          }
        } catch (tmp16) {
          c3 = 3;
          throw tmp16;
        }
      }
    })();
  }
  getPaymentIntentInfo() {
    const self = this;
    return (async () => {
      let c1;
      let closure_0;
      let value;
      const HTTP = tmp3(c2[5]).HTTP;
      const obj4 = { url: closure_1_4.BILLING_STRIPE_PAYMENT_INTENTS(self.paymentId), oldFormErrors: true, rejectWithError: true };
      const get = HTTP.get;
      await get(obj4);
      const body = value.body;
      value = { clientSecret: body.stripe_payment_intent_client_secret, paymentMethodId: body.stripe_payment_intent_payment_method_id };
      return value;
    })();
  }
  getStripeRedirect(arg0) {
    ({ clientSecret: require, state: importAll, paymentMethodId: dependencyMap } = arg0);
    const self = this;
    return self(function*() {
      let BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
      let aPIBaseURL;
      let c3;
      let closure_1;
      let paymentSourceType;
      let url;
      let closure_2 = tmp4;
      yield self.getStripe();
      let stripe = value;
      const handlerRegistry = closure_130_3.handlerRegistry;
      const obj9 = { stripe, paymentSource: closure_130_3.paymentSource, paymentMethodId: closure_130_2 };
      const tmp = handlerRegistry.constructStripeConfirmPaymentHandler(obj9);
      const stripeConfirmPayment = tmp.stripeConfirmPayment;
      const paymentMethod = tmp.paymentMethod;
      const obj10 = { payment_method: paymentMethod, return_url: aPIBaseURL + BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(paymentSourceType, stripe, "success") };
      const obj13 = stripe(closure_2[5]);
      stripe = closure_130_1;
      aPIBaseURL = obj13.getAPIBaseURL();
      BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX = c4.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
      paymentSourceType = closure_130_3.paymentSourceType;
      const tmp42 = stripeConfirmPayment;
      if (closure_130_1 == null) {
        stripe = "";
      }
      yield tmp42(closure_130_0, obj10, { handleActions: false });
      let closure_4 = value;
      const paymentIntent = closure_4.paymentIntent;
      const error = closure_4.error;
      if (null != error) {
        const obj4 = stripe(closure_2[3]);
        throw obj4.dispatchConfirmationError(error);
      }
      if (null == paymentIntent) {
        const obj3 = stripe(closure_2[3]);
        throw obj3.dispatchConfirmationError("paymentIntent not available with successful api call");
      }
      const next_action = paymentIntent.next_action;
      if (next_action != null) {
        const redirect_to_url = next_action.redirect_to_url;
        if (redirect_to_url != null) {
          url = redirect_to_url.url;
        }
      }
      if (null == url) {
        const obj2 = stripe(closure_2[3]);
        throw obj2.dispatchConfirmationError("confirm payment did not return a redirect url");
      }
      return paymentIntent.next_action.redirect_to_url.url;
    })();
  }
  confirmRedirectedPaymentSource(arg0) {
    ({ clientSecret: require, paymentMethodId: importAll } = arg0);
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
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
          let state;
          let closure_1;
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
              state = undefined;
              closure_1 = undefined;
              const obj5 = state(c2[3]);
              c2 = 1;
              c3 = 1;
              const obj4 = { value: obj5.popupBridgeState(self.paymentSourceType), done: false };
              return obj4;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              state = value;
              const obj7 = { clientSecret: closure_129_0, state, paymentMethodId: closure_129_1 };
              c2 = 2;
              c3 = 1;
              obj8 = { value: closure_129_2.getStripeRedirect(obj7), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = value;
            closure_129_2.performRedirect(closure_1);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    })();
  }
  confirmDirectPaymentSource(arg0) {
    ({ clientSecret: require, paymentMethodId: importAll } = arg0);
    const self = this;
    return (async () => {
      let c3;
      let value;
      await self.getStripe();
      const stripe = value;
      const handlerRegistry = closure_129_2.handlerRegistry;
      obj8 = { stripe, paymentSource: closure_129_2.paymentSource, paymentMethodId: closure_129_1 };
      let closure_1 = handlerRegistry.constructStripeConfirmPaymentHandler(obj8);
      const stripeConfirmPayment = closure_1.stripeConfirmPayment;
      const paymentMethod = closure_1.paymentMethod;
      const pendingCustomerAction = closure_1.pendingCustomerAction;
      const obj9 = { payment_method: paymentMethod };
      await stripeConfirmPayment(closure_129_0, obj9);
      let closure_5 = value;
      const paymentIntent = closure_5.paymentIntent;
      const error = closure_5.error;
      if (null != error) {
        const obj4 = stripe(c2[3]);
        throw obj4.dispatchConfirmationError(error);
      }
      if (null == paymentIntent) {
        const obj3 = stripe(c2[3]);
        throw obj3.dispatchConfirmationError("paymentIntent not available with successful stripe call");
      }
      value = { pendingCustomerAction, customerActionCancelled: "requires_action" === paymentIntent.status };
      return value;
    })();
  }
  confirmPayment() {
    const self = this;
    return (async () => {
      let closure_0;
      let value;
      if (c3 === 2) {
        c3 = 3;
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
          let tmp;
          let clientSecret;
          let paymentMethodId;
          let closure_3;
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
              let closure_1 = tmp4;
              tmp = undefined;
              clientSecret = undefined;
              paymentMethodId = undefined;
              closure_3 = undefined;
              c2 = 1;
              c3 = 1;
              const obj4 = { value: self.getPaymentIntentInfo(), done: false };
              return obj4;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              tmp = value;
              clientSecret = tmp.clientSecret;
              paymentMethodId = tmp.paymentMethodId;
              if ("stripe_redirect_confirmation" === closure_129_0.handlerRegistry.confirmationType) {
                const obj6 = { clientSecret, paymentMethodId };
                c2 = 2;
                c3 = 1;
                const obj7 = { value: closure_129_0.confirmRedirectedPaymentSource(obj6), done: false };
                return obj7;
              } else {
                obj8 = { clientSecret, paymentMethodId };
                c2 = 3;
                c3 = 1;
                const obj9 = { value: closure_129_0.confirmDirectPaymentSource(obj8), done: false };
                return obj9;
              }
            }
          } else if (2 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c3 = 3;
              const obj11 = { value: { redirectConfirmation: true }, done: true };
              return obj11;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_3 = value;
            value = { redirectConfirmation: false, pendingCustomerAction: closure_3.pendingCustomerAction, customerActionCancelled: closure_3.customerActionCancelled };
            c3 = 3;
            const obj13 = { value, done: true };
            return obj13;
          }
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    })();
  }
}
const prototype2 = StripePaymentConfirmationHandler.prototype;
class AdyenPaymentConfirmationHandler extends PaymentConfirmationHandler {
  constructor(paymentSource, body) {
    if (null == paymentSource) {
      obj = BillingSharedActionCreators;
      throw obj.dispatchConfirmationError("Payment source cannot be null on a redirect.");
    } else {
      const self = this;
      const self2 = this;
      const tmp5 = new AdyenPaymentConfirmationHandler(paymentSource, body, paymentSource);
      return tmp5;
    }
  }
  handleAdyenConfirmation() {
    const self = this;
    const adyen_redirect_url = this.payment.adyen_redirect_url;
    if (null == adyen_redirect_url) {
      const obj3 = BillingSharedActionCreators;
      throw obj3.dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
    } else {
      if (hasOwnProperty.has(self.paymentSource.type)) {
        self.performRedirect(adyen_redirect_url);
        obj = { redirectConfirmation: true, redirectURL: adyen_redirect_url };
        const obj2 = { redirectConfirmation: true, redirectURL: adyen_redirect_url };
      } else {
        obj = { redirectConfirmation: false, redirectURL: adyen_redirect_url };
      }
      return obj;
    }
  }
  confirmPayment() {
    return Promise.resolve(this.handleAdyenConfirmation());
  }
}
const prototype3 = AdyenPaymentConfirmationHandler.prototype;

export const STRIPE_REDIRECTED_PAYMENT_METHOD_REGISTRY = obj;
export const getIsStripeRedirectedPaymentSource = function getIsStripeRedirectedPaymentSource(arg0) {
  const hasItem = hasOwnProperty.has(arg0) && arg0 in obj;
  return hasItem;
};
export const STRIPE_DIRECT_CONFIRM_PAYMENT_METHOD_REGISTRY = obj8;
export const getIsStripeDirectConfirmationPaymentSource = function getIsStripeDirectConfirmationPaymentSource(arg0) {
  return arg0 in obj8;
};
export { StripePaymentConfirmationHandler };
export { AdyenPaymentConfirmationHandler };