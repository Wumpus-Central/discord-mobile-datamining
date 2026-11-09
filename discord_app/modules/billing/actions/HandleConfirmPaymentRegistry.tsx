// === Module 6609: HandleConfirmPaymentRegistry ===

// Module 6609 (HandleConfirmPaymentRegistry)
import BillingSharedActionCreators from "BillingSharedActionCreators" /* 6590 */;
import StripeUtilsAll from "StripeUtils" /* 6604 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const Constants = fn(1072);
({ Endpoints: closure_4, REDIRECTED_PAYMENT_SOURCES: hasOwnProperty } = Constants);
const PaymentSourceTypes = fn(1083).PaymentSourceTypes;
let obj = { [PaymentSourceTypes.GIROPAY]: obj2, [PaymentSourceTypes.SOFORT]: obj3, [PaymentSourceTypes.PRZELEWY24]: obj4, [PaymentSourceTypes.BANCONTACT]: obj5, [PaymentSourceTypes.EPS]: obj6, [PaymentSourceTypes.IDEAL]: obj7 };
let obj8 = { [PaymentSourceTypes.SEPA_DEBIT]: obj9, [PaymentSourceTypes.PIX]: obj10 };
class PaymentConfirmationHandler {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.paymentSource = global;
    obj.payment = fn;
    obj.paymentSourceType = global.type;
    obj.paymentId = fn.payment_id;
    return obj;
  }
}
PaymentConfirmationHandler.prototype["performRedirect"] = function performRedirect(arg0) {
  window.open(arg0);
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/actions/HandleConfirmPaymentRegistry.tsx");
class StripePaymentConfirmationHandler extends PaymentConfirmationHandler {
  constructor(arg0, arg1) {
    if (null == global) {
      tmp7 = closure_0;
      tmp8 = closure_2;
      obj2 = closure_0(closure_2[3]);
      str2 = "Payment source cannot be null on a redirect.";
      throw obj2.dispatchConfirmationError("Payment source cannot be null on a redirect.");
    } else {
      tmp9 = fn;
      tmp10 = new.target;
      tmp11 = StripePaymentConfirmationHandler;
      tmp12 = new.target;
      tmp13 = new.target;
      tmp14 = global;
      tmp15 = new StripePaymentConfirmationHandler(global, fn, global);
      tmp16 = tmp15;
      tmp17 = globalThis;
      _Map = Map;
      tmp18 = new.target;
      tmp19 = new.target;
      map = new Map();
      tmp21 = map;
      tmp15.stripeByMerchantAccountId = map;
      paymentSourceType = tmp15.paymentSourceType;
      tmp22 = closure_5;
      hasItem = closure_5.has(paymentSourceType);
      if (hasItem) {
        tmp = closure_6;
        hasItem = paymentSourceType in closure_6;
      }
      if (hasItem) {
        tmp6 = closure_6;
        tmp15.handlerRegistry = closure_6[tmp15.paymentSourceType];
      } else if (tmp15.paymentSourceType in closure_7) {
        tmp15.handlerRegistry = tmp3[tmp15.paymentSourceType];
      } else {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[3]);
        str = "Invalid Payment Source Type - redirect or direct confirmation handlers not found.";
        throw obj.dispatchConfirmationError("Invalid Payment Source Type - redirect or direct confirmation handlers not found.");
      }
      return tmp15;
    }
  }
}
const prototype = StripePaymentConfirmationHandler.prototype;
prototype["getStripe"] = function getStripe(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    let str2 = "";
    if (null != tmp5) {
      str2 = "";
      if ("" !== tmp5) {
        str2 = tmp5;
      }
    }
    closure_128_0 = str2;
    const stripeByMerchantAccountId2 = self.stripeByMerchantAccountId;
    value = stripeByMerchantAccountId2.get(str2);
    if (null != value) {
      return value;
    }
    await tmp2(6604).getStripe(tmp5);
    closure_128_1 = value;
    if (null == closure_128_1) {
      throw tmp5(6590).dispatchConfirmationError("Stripe cannot be null on a redirect.");
    }
    const stripeByMerchantAccountId = closure_129_1.stripeByMerchantAccountId;
    const result = stripeByMerchantAccountId.set(closure_128_0, closure_128_1);
    return closure_128_1;
  })();
};
prototype["getPaymentIntentInfo"] = function getPaymentIntentInfo() {
  return StripeUtilsAll.fetchStripePaymentIntentInfo(this.paymentId);
};
prototype["getStripeRedirect"] = function getStripeRedirect(arg0) {
  ({ clientSecret: require, state: importAll, paymentMethodId: dependencyMap, merchantAccountId: asyncGeneratorStep } = arg0);
  const self = this;
  return (async () => {
    closure_1 = tmp2;
    await self.getStripe(asyncGeneratorStep);
    closure_129_0 = value;
    const handlerRegistry = closure_130_4.handlerRegistry;
    closure_129_1 = handlerRegistry.constructStripeConfirmPaymentHandler({ stripe: closure_129_0, paymentSource: closure_130_4.paymentSource, paymentMethodId: closure_130_2 });
    const stripeConfirmPayment = closure_129_1.stripeConfirmPayment;
    const paymentMethod = closure_129_1.paymentMethod;
    const obj10 = { payment_method: paymentMethod, return_url: null };
    let _var = closure_130_1;
    const aPIBaseURL = _var(1282).getAPIBaseURL();
    if (closure_130_1 == null) {
      _var = "";
    }
    obj10.return_url = aPIBaseURL + _self.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_130_4.paymentSourceType, _var, "success");
    await stripeConfirmPayment(closure_130_0, obj10, { handleActions: false });
    closure_129_4 = value;
    const paymentIntent = closure_129_4.paymentIntent;
    const error = closure_129_4.error;
    if (null != error) {
      throw _var(6590).dispatchConfirmationError(error);
    }
    if (null == paymentIntent) {
      throw _var(6590).dispatchConfirmationError("paymentIntent not available with successful api call");
    }
    const next_action = paymentIntent.next_action;
    if (next_action != null) {
      const redirect_to_url = next_action.redirect_to_url;
      if (redirect_to_url != null) {
        const url = redirect_to_url.url;
      }
    }
    if (null == url) {
      throw _var(6590).dispatchConfirmationError("confirm payment did not return a redirect url");
    }
    return paymentIntent.next_action.redirect_to_url.url;
  })();
};
prototype["confirmRedirectedPaymentSource"] = function confirmRedirectedPaymentSource(arg0) {
  ({ clientSecret: require, paymentMethodId: importAll, merchantAccountId: dependencyMap } = arg0);
  const self = this;
  return self(function*() {
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
            closure_1 = tmp5;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: tmp2(c2[3]).popupBridgeState(self.paymentSourceType), done: false };
            return obj4;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            const obj7 = { clientSecret: closure_129_0, state: closure_128_0, paymentMethodId: closure_129_1, merchantAccountId: closure_129_2 };
            c2 = 2;
            c3 = 1;
            obj8 = { value: closure_129_3.getStripeRedirect(obj7), done: false };
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
          closure_128_1 = value;
          closure_129_3.performRedirect(closure_128_1);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp21) {
        c3 = tmp;
        throw tmp21;
      }
    }
  })();
};
prototype["confirmDirectPaymentSource"] = function confirmDirectPaymentSource(arg0) {
  ({ clientSecret: require, paymentMethodId: importAll, merchantAccountId: dependencyMap } = arg0);
  const self = this;
  return self(function*() {
    yield self.getStripe(closure_2_2);
    closure_128_0 = value;
    const handlerRegistry = closure_129_3.handlerRegistry;
    closure_128_1 = handlerRegistry.constructStripeConfirmPaymentHandler({ stripe: closure_128_0, paymentSource: closure_129_3.paymentSource, paymentMethodId: closure_129_1 });
    const stripeConfirmPayment = closure_128_1.stripeConfirmPayment;
    const paymentMethod = closure_128_1.paymentMethod;
    closure_128_4 = closure_128_1.pendingCustomerAction;
    yield stripeConfirmPayment(closure_129_0, { payment_method: paymentMethod });
    closure_128_5 = value;
    const paymentIntent = closure_128_5.paymentIntent;
    const error = closure_128_5.error;
    if (null != error) {
      throw tmp2(6590).dispatchConfirmationError(error);
    }
    if (null == paymentIntent) {
      throw tmp2(6590).dispatchConfirmationError("paymentIntent not available with successful stripe call");
    }
    value = { pendingCustomerAction: closure_128_4, customerActionCancelled: "requires_action" === paymentIntent.status };
    return value;
  })();
};
prototype["confirmPayment"] = function confirmPayment() {
  const self = this;
  return (async () => {
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
            closure_1 = tmp5;
            closure_128_0 = undefined;
            let clientSecret;
            let paymentMethodId;
            let merchantAccountId;
            closure_128_4 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: self.getPaymentIntentInfo(), done: false };
            return obj4;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = value;
            clientSecret = closure_128_0.clientSecret;
            paymentMethodId = closure_128_0.paymentMethodId;
            merchantAccountId = closure_128_0.merchantAccountId;
            if (null == paymentMethodId) {
              throw tmp2(c2[3]).dispatchConfirmationError("payment method id cannot be null.");
            } else if ("stripe_redirect_confirmation" === closure_129_0.handlerRegistry.confirmationType) {
              const obj6 = { clientSecret, paymentMethodId, merchantAccountId };
              c2 = 2;
              c3 = 1;
              const obj7 = { value: closure_129_0.confirmRedirectedPaymentSource(obj6), done: false };
              return obj7;
            } else {
              obj8 = { clientSecret, paymentMethodId, merchantAccountId };
              c2 = 3;
              c3 = 1;
              const obj9 = { value: closure_129_0.confirmDirectPaymentSource(obj8), done: false };
              return obj9;
            }
          }
        } else if (2 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c3 = 3;
            const obj12 = { value: { redirectConfirmation: true }, done: true };
            return obj12;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_128_4 = value;
          value = { redirectConfirmation: false, pendingCustomerAction: closure_128_4.pendingCustomerAction, customerActionCancelled: closure_128_4.customerActionCancelled };
          c3 = 3;
          const obj14 = { value, done: true };
          return obj14;
        }
      } catch (tmp25) {
        c3 = tmp;
        throw tmp25;
      }
    }
  })();
};
class AdyenPaymentConfirmationHandler extends PaymentConfirmationHandler {
  constructor(arg0, arg1) {
    if (null == global) {
      tmp9 = closure_0;
      tmp10 = closure_2;
      obj = closure_0(closure_2[3]);
      str = "Payment source cannot be null on a redirect.";
      throw obj.dispatchConfirmationError("Payment source cannot be null on a redirect.");
    } else {
      tmp = fn;
      tmp2 = new.target;
      tmp3 = AdyenPaymentConfirmationHandler;
      tmp4 = new.target;
      tmp5 = new.target;
      tmp6 = global;
      tmp7 = new AdyenPaymentConfirmationHandler(global, fn, global);
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
    throw BillingSharedActionCreators.dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
  } else {
    if (set.has(self.paymentSource.type)) {
      self.performRedirect(adyen_redirect_url);
      const obj2 = { redirectConfirmation: true, redirectURL: adyen_redirect_url };
      obj = obj2;
    } else {
      obj = { redirectConfirmation: false, redirectURL: adyen_redirect_url };
    }
    return obj;
  }
};
prototype2["confirmPayment"] = function confirmPayment() {
  return Promise.resolve(this.handleAdyenConfirmation());
};

export const STRIPE_REDIRECTED_PAYMENT_METHOD_REGISTRY = obj;
export function getIsStripeRedirectedPaymentSource(arg0) {
  let hasItem = set.has(arg0);
  if (hasItem) {
    hasItem = arg0 in obj;
  }
  return hasItem;
}
export const STRIPE_DIRECT_CONFIRM_PAYMENT_METHOD_REGISTRY = obj8;
export function getIsStripeDirectConfirmationPaymentSource(arg0) {
  return arg0 in obj8;
}
export { StripePaymentConfirmationHandler };
export { AdyenPaymentConfirmationHandler };