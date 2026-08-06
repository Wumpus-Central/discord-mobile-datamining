// discord_app/modules/billing/actions/BillingPaymentGatewayActionCreators.tsx
import getSystemLocale from "getSystemLocale";
import ME from "ME";
import sum from "sum";
import set from "sum";
import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { _validatePaymentSourceBillingAddress } from "BillingSharedActionCreators.tsx";

let PaymentSourceTypes;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function _getClientSecret() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0, body) {
      const HTTP = callback(outer1_3[4]).HTTP;
      const obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = outer1_5.BILLING_STRIPE_PAYMENT_INTENTS(callback);
      yield HTTP.get(obj1);
      return body.body.stripe_payment_intent_client_secret;
    })();
  });
  const _getClientSecret = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function dispatchPaymentElementsConfirmationError(error, flag, stringResult) {
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.khEaRI);
  }
  let obj = _validatePaymentSourceBillingAddress;
  obj = { tags: { source: "payment_elements" } };
  return obj.dispatchConfirmationError(error, flag, stringResult, obj);
}
function _createCardToken() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = 0;
              let error = tmp2;
              let lib;
              let token;
              error = undefined;
              if (null != lib) {
                if (null != obj11) {
                  const element = obj11.getElement(lib(outer1_3[7]).CardNumberElement);
                  if (null == element) {
                    throw lib(outer1_3[6]).dispatchConfirmationError("Unable to load card elements from Stripe");
                  } else {
                    c4 = 1;
                    c5 = 1;
                    let obj1 = { value: null, done: false };
                    obj1[0] = lib.createToken(element);
                    return obj1;
                  }
                }
              }
              throw lib(outer1_3[6]).dispatchConfirmationError("Stripe or elements not loaded");
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            lib = arg1;
            token = lib.token;
            error = lib.error;
            if (null != error) {
              obj2 = lib(4605);
              throw obj2.dispatchConfirmationError(error);
            } else if (null == token) {
              obj1 = lib(4605);
              throw obj1.dispatchConfirmationError("token not available with successful stripe call");
            } else {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = token.id;
              return obj;
            }
          }
        } catch (tmp25) {
          c5 = tmp;
          throw tmp25;
        }
      }
    })();
  });
  const _createCardToken = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmEPS() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let c10;
      let c11;
      let c4;
      let c6;
      let c7;
      let c8;
      let c9;
      let name;
      name = 0;
      c4 = tmp2;
      if (null == lib) {
        throw lib(4605).dispatchConfirmationError("Stripe not loaded");
      }
      if (null == tmp62) {
        throw lib(4605).dispatchConfirmationError("Bank required for EPS");
      }
      ({ email: c4, name } = tmp63);
      ({ line1: c6, line2: c7, city: c8, state: c9, postalCode: c10, country: c11 } = tmp63);
      if (null == name) {
        let obj9 = lib(4605);
        throw obj9.dispatchConfirmationError("Name required for EPS");
      }
      let obj6 = callback(709);
      obj6.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
      const obj7 = lib(4605);
      let closure_12 = yield obj7.validatePaymentSourceBillingAddress(tmp63);
      const obj3 = { type: "eps", eps: null, billing_details: null };
      const obj4 = { bank: null };
      obj4[0] = callback;
      obj3[1] = obj4;
      const obj5 = { address: null, name: null, email: null };
      obj6 = { line1: null, line2: null, city: null, state: null, postal_code: null, country: null };
      obj6[0] = constants;
      obj6[1] = c7;
      obj6[2] = c8;
      obj6[3] = c9;
      obj6[4] = c10;
      obj6[5] = c11;
      obj5[0] = obj6;
      obj5[1] = name;
      obj5[2] = c4;
      obj3[2] = obj5;
      let closure_13 = yield lib.createPaymentMethod(obj3);
      const paymentMethod = closure_13.paymentMethod;
      const error = closure_13.error;
      if (null != error) {
        const obj2 = lib(4605);
        throw obj2.dispatchConfirmationError(error);
      }
      if (null == paymentMethod) {
        const obj1 = lib(4605);
        throw obj1.dispatchConfirmationError("paymentMethod not available with successful stripe call");
      }
      const obj15 = lib(4605);
      obj9 = { billingAddressToken: null, analyticsLocation: null, bank: null };
      obj9[0] = closure_12;
      obj9[1] = dependencyMap;
      obj9[2] = callback;
      return obj15.createPaymentSource(constants.STRIPE, paymentMethod.id, closure_2, obj9);
    })();
  });
  const _confirmEPS = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmIdeal() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      let c10;
      let c3;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let name;
      name = 0;
      const dependencyMap = tmp2;
      if (null == lib) {
        throw lib(outer1_3[6]).dispatchConfirmationError("Stripe not loaded");
      }
      ({ email: c3, name } = tmp58);
      ({ line1: c5, line2: c6, city: c7, state: c8, postalCode: c9, country: c10 } = tmp58);
      if (null == name) {
        throw lib(outer1_3[6]).dispatchConfirmationError("Name required for iDEAL");
      }
      let obj8 = callback(outer1_3[8]);
      obj8.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
      const obj9 = lib(outer1_3[6]);
      let closure_11 = yield obj9.validatePaymentSourceBillingAddress(tmp58);
      let obj3 = { type: "ideal", ideal: null, billing_details: null };
      obj3[1] = {};
      let obj4 = { address: null, name: null, email: null };
      const obj5 = { line1: null, line2: null, city: null, state: null, postal_code: null, country: null };
      obj5[0] = c5;
      obj5[1] = constants;
      obj5[2] = c7;
      obj5[3] = c8;
      obj5[4] = c9;
      obj5[5] = c10;
      obj4[0] = obj5;
      obj4[1] = name;
      obj4[2] = dependencyMap;
      obj3[2] = obj4;
      let closure_12 = yield lib.createPaymentMethod(obj3);
      const paymentMethod = closure_12.paymentMethod;
      const error = closure_12.error;
      if (null != error) {
        obj4 = lib(4605);
        throw obj4.dispatchConfirmationError(error);
      }
      if (null == paymentMethod) {
        obj3 = lib(4605);
        throw obj3.dispatchConfirmationError("paymentMethod not available with successful stripe call");
      }
      const obj = lib(4605);
      obj8 = { billingAddressToken: null, analyticsLocation: null };
      obj8[0] = closure_11;
      obj8[1] = closure_2;
      return obj.createPaymentSource(constants.STRIPE, paymentMethod.id, callback, obj8);
    })();
  });
  const _confirmIdeal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmPrzelewy() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let c10;
      let c11;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      c5 = 0;
      let email = tmp2;
      if (null == lib) {
        throw lib(4605).dispatchConfirmationError("Stripe not loaded");
      }
      email = tmp62.email;
      ({ name: c5, line1: c6, line2: c7, city: c8, state: c9, postalCode: c10, country: c11 } = tmp62);
      if (null == email) {
        let obj9 = lib(4605);
        throw obj9.dispatchConfirmationError("Email required for Przelewy24");
      }
      let obj6 = lib2(709);
      obj6.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
      const obj7 = lib(4605);
      let closure_12 = yield obj7.validatePaymentSourceBillingAddress(tmp62);
      const p24Bank = lib2.p24Bank;
      const obj3 = { type: "p24", p24: null, billing_details: null };
      const obj4 = { bank: null };
      obj4[0] = p24Bank;
      obj3[1] = obj4;
      const obj5 = { address: null, name: null, email: null };
      obj6 = { line1: null, line2: null, city: null, state: null, postal_code: null, country: null };
      obj6[0] = constants;
      obj6[1] = c7;
      obj6[2] = c8;
      obj6[3] = c9;
      obj6[4] = c10;
      obj6[5] = c11;
      obj5[0] = obj6;
      obj5[1] = c5;
      obj5[2] = email;
      obj3[2] = obj5;
      let closure_14 = yield lib.createPaymentMethod(obj3);
      const paymentMethod = closure_14.paymentMethod;
      const error = closure_14.error;
      if (null != error) {
        const obj2 = lib(4605);
        throw obj2.dispatchConfirmationError(error);
      }
      if (null == paymentMethod) {
        const obj1 = lib(4605);
        throw obj1.dispatchConfirmationError("paymentMethod not available with successful stripe call");
      }
      const obj14 = lib(4605);
      obj9 = { billingAddressToken: null, analyticsLocation: null, bank: null };
      obj9[0] = closure_12;
      obj9[1] = dependencyMap;
      obj9[2] = p24Bank;
      return obj14.createPaymentSource(constants.STRIPE, paymentMethod.id, closure_2, obj9);
    })();
  });
  const _confirmPrzelewy = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function validateSetupIntentResponse(payment_method, arg1, created) {
  if (null != arg1) {
    throw created(arg1);
  } else if (null == payment_method) {
    throw created("SetupIntent not created");
  } else if (null == payment_method.payment_method) {
    throw created("setupIntent.payment_method not available with successful stripe call");
  } else {
    00038__(typeof payment_method.payment_method === "string", "setupIntent.payment_method expanded not supported");
    const obj = { setupIntent: null, error: null };
    obj[0] = payment_method;
    obj[1] = arg1;
    return obj;
  }
}
function submitElementsForPaymentElement() {
  const self = this;
  const apply = _submitElementsForPaymentElement.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitElementsForPaymentElement() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let c2 = 0;
      let closure_1 = tmp2;
      const obj2 = closure_0;
      if (null == closure_0) {
        throw outer1_13("Stripe Elements not loaded", true);
      }
      closure_0 = yield obj2.submit();
      logger.info("Stripe Elements submit response: ", closure_0);
      if (null != closure_0.error) {
        logger.error("Stripe Elements submit error: ", closure_0.error);
        throw callback(closure_0.error, true);
      }
      return closure_0;
    })();
  });
  const _submitElementsForPaymentElement = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function createStripePaymentMethodWithElements() {
  const self = this;
  const apply = _createStripePaymentMethodWithElements.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createStripePaymentMethodWithElements() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let closure_3 = tmp5;
      let error = tmp2;
      const obj1 = { elements: null };
      obj1[0] = paymentMethod;
      closure_0 = yield closure_0.createPaymentMethod(obj1);
      paymentMethod = closure_0.paymentMethod;
      error = closure_0.error;
      if (null != error) {
        logger.error("Stripe createPaymentMethod error: ", error);
        throw callback(error, true);
      }
      if (null == paymentMethod) {
        const obj4 = { paymentMethod: null, error: null };
        obj4[0] = paymentMethod;
        obj4[1] = error;
        logger.warn("Stripe createPaymentMethod failed to return payment method: ", obj4);
        throw callback("paymentMethod not available with successful stripe call", true);
      }
      closure_21.hasCreatedPaymentMethod = true;
      const obj = { paymentMethod: null, error: null };
      obj[0] = paymentMethod;
      obj[1] = error;
      return obj;
    })();
  });
  const _createStripePaymentMethodWithElements = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitElementsAndCreateStripePaymentMethod() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      let c3 = 0;
      let closure_2 = tmp2;
      if (null == closure_0) {
        throw outer1_13("Stripe not loaded", true);
      }
      if (null == tmp24) {
        throw outer1_13("Stripe Elements not loaded", true);
      }
      yield outer1_19(tmp24);
      closure_2 = yield callback(closure_0, closure_1);
      const obj = { paymentMethod: null, error: null };
      obj[0] = closure_2.paymentMethod;
      obj[1] = closure_2.error;
      return obj;
    })();
  });
  const _submitElementsAndCreateStripePaymentMethod = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmPaymentElementSource() {
  const self = this;
  const tmp = callback(() => {
    let closure_0 = [...arguments];
    let c12 = 0;
    let c13 = 0;
    let c11 = 0;
    const iter = (function*() {
      if (c13 === 2) {
        c13 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          if (arg0 === 1) {
            c13 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c13 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            obj = { redirect: "if_required", clientSecret: null, elements: null };
            obj[1] = c12;
            obj[2] = closure_1;
            c12 = 11;
            c13 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = closure_0.confirmSetup(obj);
            return obj1;
          }
        } catch (tmp11) {
          let closure_10 = tmp11;
          if (tmp4 === c11) {
            c13 = tmp3;
            throw tmp11;
          } else if (tmp2 === tmp13) {
            c12 = tmp2;
          } else {
            c12 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _confirmPaymentElementSource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _confirmCardPaymentSource() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (function*(arg0, client_secret) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw client_secret;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = client_secret;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c9 = 2;
          if (0 === setupIntent) {
            if (arg0 === 1) {
              c9 = 3;
              throw client_secret;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = client_secret;
              return obj;
            } else {
              let closure_5 = tmp3;
              let c4 = tmp7;
              c4 = undefined;
              closure_5 = undefined;
              let constants;
              let closure_7;
              setupIntent = undefined;
              if (null != lib) {
                if (null != callback) {
                  let obj8 = callback(709);
                  obj8.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
                  c4 = null;
                  closure_7 = 1;
                  let obj9 = lib(4609);
                  setupIntent = 3;
                  c9 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = obj9.createStripeSetupIntent();
                  return obj1;
                }
              }
              throw lib(4605).dispatchConfirmationError("Stripe or token not loaded");
            }
          } else if (1 === tmp7) {
            closure_7 = 0;
            c9 = constants;
            let obj7 = lib(4605);
            throw obj7.dispatchConfirmationError(c9);
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c9 = 3;
              throw client_secret;
            } else if (arg0 === 2) {
              c9 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = client_secret;
              return obj2;
            } else {
              closure_5 = client_secret;
              constants = callback2(4610).parseBillingAddressInfoToStripeBillingDetails(callback2);
              const obj3 = { payment_method: null };
              const obj4 = { card: null, billing_details: null };
              const obj5 = { token: null };
              obj5[0] = callback;
              obj4[0] = obj5;
              obj4[1] = constants;
              obj3[0] = obj4;
              setupIntent = 4;
              c9 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = lib.confirmCardSetup(c4, obj3);
              return obj6;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c9 = 3;
              throw client_secret;
            } else if (arg0 === 2) {
              closure_7 = 0;
              c9 = 3;
              obj7 = { value: null, done: true };
              obj7[0] = client_secret;
              return obj7;
            } else {
              const outer1_4 = client_secret.client_secret;
              closure_7 = 0;
              obj2 = lib(4605);
              setupIntent = 2;
              c9 = 1;
              obj8 = { value: null, done: false };
              obj8[0] = obj2.validatePaymentSourceBillingAddress(callback2);
              return obj8;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw client_secret;
          } else if (arg0 === 2) {
            c9 = 3;
            obj9 = { value: null, done: true };
            obj9[0] = client_secret;
            return obj9;
          } else {
            closure_7 = client_secret;
            setupIntent = callback3(closure_7.setupIntent, closure_7.error, (error) => callback(table[6]).dispatchConfirmationError(error)).setupIntent;
            const obj15 = lib(4605);
            const obj10 = { billingAddressToken: null, analyticsLocation: null };
            obj10[0] = closure_5;
            obj10[1] = dependencyMap;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = obj15.createPaymentSource(constants.STRIPE, setupIntent.payment_method, callback2, obj10);
            return obj;
          }
        } catch (tmp28) {
          constants = tmp28;
          if (tmp4 === closure_7) {
            c9 = tmp2;
            throw tmp28;
          } else {
            setupIntent = tmp;
          }
        }
      }
    })();
  });
  const _confirmCardPaymentSource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createStripePaymentSource() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c6 = 0;
    let c7 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let name = 0;
      let getSystemLocale = tmp2;
      if (null == lib) {
        throw lib(4605).dispatchConfirmationError("Stripe not loaded");
      }
      let obj8 = lib(4605);
      getSystemLocale = yield obj8.validatePaymentSourceBillingAddress(tmp68);
      name = lib2.name;
      const city = lib2.city;
      const state = lib2.state;
      const postalCode = lib2.postalCode;
      const country = lib2.country;
      let closure_12 = state.get(closure_2);
      lib2(38)(null != closure_12, "unsupported payment method type");
      let obj3 = { type: null, billing_details: null };
      obj3[0] = closure_12;
      let obj4 = { address: null, name: null };
      const obj5 = { line1: null, line2: null, city: null, state: null, postal_code: null, country: null };
      obj5[0] = constants;
      obj5[1] = line2;
      obj5[2] = city;
      obj5[3] = state;
      obj5[4] = postalCode;
      obj5[5] = country;
      obj4[0] = obj5;
      obj4[1] = name;
      obj3[1] = obj4;
      let closure_13 = yield lib.createPaymentMethod(obj3);
      const paymentMethod = closure_13.paymentMethod;
      const error = closure_13.error;
      if (null != error) {
        obj4 = lib(4605);
        throw obj4.dispatchConfirmationError(error);
      }
      if (null == paymentMethod) {
        obj3 = lib(4605);
        throw obj3.dispatchConfirmationError("stripePaymentMethod not available with successful stripe call");
      }
      const obj = lib(4605);
      obj8 = { billingAddressToken: null, analyticsLocation: null };
      obj8[0] = getSystemLocale;
      obj8[1] = dependencyMap;
      return obj.createPaymentSource(constants.STRIPE, paymentMethod.id, lib2, obj8);
    })();
  });
  const _createStripePaymentSource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createAdyenPrepaidPaymentSource() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      let obj3 = tmp5;
      let table = tmp2;
      const obj2 = callback(outer1_3[6]);
      table = yield obj2.validatePaymentSourceBillingAddress(callback);
      obj3 = { type: null };
      obj3[0] = closure_8.get(closure_1);
      const obj8 = callback(table[6]);
      const ADYEN = constants.ADYEN;
      const _JSON = JSON;
      const obj4 = { billingAddressToken: null, analyticsLocation: null };
      obj4[0] = table;
      obj4[1] = closure_2;
      return obj8.createPaymentSource(ADYEN, JSON.stringify(obj3), callback, obj4);
    })();
  });
  const _createAdyenPrepaidPaymentSource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createAdyenVaultablePaymentSource() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let getSystemLocale = arg4;
    let c12 = 0;
    let c13 = 0;
    let c10 = 0;
    const iter = (function*(arg0, paymentSource) {
      if (c13 === 2) {
        c13 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw paymentSource;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = paymentSource;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c13 = 2;
          if (0 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw paymentSource;
            } else if (arg0 === 2) {
              c13 = 3;
              obj = { value: null, done: true };
              obj[0] = paymentSource;
              return obj;
            } else {
              let adyen_redirect_url = tmp2;
              let closure_8 = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              let closure_5;
              let constants;
              let closure_7;
              closure_8 = undefined;
              adyen_redirect_url = undefined;
              c12 = 1;
              c13 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c13 = 3;
              throw paymentSource;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = paymentSource;
              return obj1;
            } else {
              c12 = 2;
              c13 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = callback(paymentMethod[6]).validatePaymentSourceBillingAddress(callback);
              return obj2;
            }
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c13 = 3;
              throw paymentSource;
            } else if (arg0 === 2) {
              c13 = 3;
              let obj3 = { value: null, done: true };
              obj3[0] = paymentSource;
              return obj3;
            } else {
              let tmp = adyen_redirect_url;
              closure_5 = paymentSource;
              let obj4 = { type: null };
              tmp = closure_8;
              tmp = callback2;
              obj4[0] = closure_8.get(callback2);
              paymentMethod = undefined;
              if (paymentMethod != null) {
                paymentMethod = paymentMethod.paymentMethod;
              }
              closure_5 = paymentMethod;
              if (paymentMethod == null) {
                closure_5 = {};
              }
              const merged = Object.assign(closure_5);
              constants = obj4;
              let obj10 = callback(paymentMethod[6]);
              c12 = 3;
              c13 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = obj10.popupBridgeState(callback2);
              return obj5;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c13 = 3;
              throw paymentSource;
            } else if (arg0 === 2) {
              c13 = 3;
              let obj6 = { value: null, done: true };
              obj6[0] = paymentSource;
              return obj6;
            } else {
              closure_7 = paymentSource;
              constants = closure_7;
              const aPIBaseURL = callback(paymentMethod[4]).getAPIBaseURL();
              if (closure_7 == null) {
                constants = "";
              }
              closure_8 = aPIBaseURL + closure_5.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(callback2, constants, "success");
              let c10 = 1;
              closure_7 = {};
              obj6 = callback(paymentMethod[6]);
              const ADYEN = constants.ADYEN;
              const _JSON = JSON;
              const obj7 = { billingAddressToken: null, analyticsLocation: null, returnUrl: null };
              obj7[0] = closure_5;
              obj7[1] = closure_2;
              obj7[2] = closure_8;
              c12 = 5;
              c13 = 1;
              const obj8 = { value: null, done: false };
              obj8[0] = obj6.createPaymentSource(ADYEN, JSON.stringify(constants), callback, obj7, flag);
              return obj8;
            }
          } else if (4 === tmp7) {
            c10 = 0;
            c10 = closure_11;
            if (c10.code !== callback(paymentMethod[12]).ErrorCodes.CONFIRMATION_REQUIRED) {
              obj4 = callback2(paymentMethod[8]);
              let code;
              if (c10 != null) {
                code = c10.code;
              }
              let message;
              if (c10 != null) {
                message = c10.message;
              }
              const obj9 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: null };
              const _HermesInternal = HermesInternal;
              const combined = "Unable to create payment source token: code: " + code + " message: " + message;
              const billingError = new callback(paymentMethod[13]).BillingError(combined, callback(paymentMethod[13]).BillingError.ErrorCodes.UNKNOWN);
              obj9[1] = billingError;
              obj4.dispatch(obj9);
              throw c10;
            } else {
              adyen_redirect_url = c10.fields.adyen_redirect_url;
              if (null == adyen_redirect_url) {
                obj3 = callback(paymentMethod[6]);
                throw obj3.dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
              } else {
                (function performRedirect(adyen_redirect_url) {
                  window.open(adyen_redirect_url);
                })(adyen_redirect_url);
                c13 = 3;
                obj10 = { value: null, done: true };
                obj10[0] = { redirectConfirmation: true };
                return obj10;
              }
            }
          } else if (arg0 === 1) {
            c13 = 3;
            throw paymentSource;
          } else if (arg0 === 2) {
            c10 = 0;
            c13 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = paymentSource;
            return obj11;
          } else {
            closure_7.paymentSource = paymentSource;
            closure_7.redirectConfirmation = false;
            c10 = 0;
            c13 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_7;
            return obj;
          }
        } catch (tmp81) {
          closure_11 = tmp81;
          if (tmp3 === c10) {
            c13 = tmp;
            throw tmp81;
          } else {
            c12 = tmp4;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _createAdyenVaultablePaymentSource = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function createStripePaymentSourceToken(paymentSource) {
  const self = this;
  const apply = _createStripePaymentSourceToken.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createStripePaymentSourceToken() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0) {
      if (line1 === 2) {
        line1 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp3;
        if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            line1 = 2;
            if (0 === name) {
              if (arg0 === 1) {
                line1 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                line1 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let email = tmp5;
                let billingAddress = tmp2;
                throwTypeErrorResult = lib;
                let lib2;
                billingAddress = undefined;
                email = undefined;
                name = undefined;
                line1 = undefined;
                let line2;
                let city;
                let state;
                let postalCode;
                let country;
                let obj3;
                let closure_12;
                let paymentMethod;
                let error;
                throwTypeErrorResult = outer1_7;
                if (outer1_7.has(lib.type)) {
                  line1 = 3;
                  return { value: null, done: true };
                } else {
                  let obj7 = outer1_2(outer1_3[11]);
                  name = 1;
                  line1 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = obj7.getStripe();
                  return obj1;
                }
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                line1 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                line1 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                throwTypeErrorResult = billingAddress;
                lib2 = arg1;
                throwTypeErrorResult = lib2;
                let tmp84 = null;
                if (null == lib2) {
                  const billingError = new lib(email[13]).BillingError("Stripe not loaded", lib(email[13]).BillingError.ErrorCodes.UNKNOWN);
                  throw billingError;
                } else {
                  throwTypeErrorResult = billingAddress;
                  throwTypeErrorResult = email;
                  throwTypeErrorResult = lib;
                  billingAddress = lib.billingAddress;
                  throwTypeErrorResult = billingAddress;
                  email = billingAddress.email;
                  throwTypeErrorResult = billingAddress;
                  name = billingAddress.name;
                  throwTypeErrorResult = billingAddress;
                  line1 = billingAddress.line1;
                  throwTypeErrorResult = billingAddress;
                  line2 = billingAddress.line2;
                  throwTypeErrorResult = billingAddress;
                  city = billingAddress.city;
                  throwTypeErrorResult = billingAddress;
                  state = billingAddress.state;
                  throwTypeErrorResult = billingAddress;
                  postalCode = billingAddress.postalCode;
                  throwTypeErrorResult = billingAddress;
                  country = billingAddress.country;
                  obj3 = { billing_details: null };
                  const obj4 = { address: null, name: null };
                  const obj5 = { line1: null, line2: null, city: null, state: null, postal_code: null, country: null };
                  throwTypeErrorResult = line1;
                  obj5[0] = line1;
                  throwTypeErrorResult = line2;
                  obj5[1] = line2;
                  throwTypeErrorResult = city;
                  obj5[2] = city;
                  throwTypeErrorResult = state;
                  obj5[3] = state;
                  throwTypeErrorResult = postalCode;
                  obj5[4] = postalCode;
                  throwTypeErrorResult = country;
                  obj5[5] = country;
                  obj4[0] = obj5;
                  throwTypeErrorResult = name;
                  obj4[1] = name;
                  obj3[0] = obj4;
                  throwTypeErrorResult = lib;
                  const type = lib.type;
                  throwTypeErrorResult = country;
                  if (country.GIROPAY === type) {
                    obj3.type = "giropay";
                  } else {
                    throwTypeErrorResult = email;
                    throwTypeErrorResult = country;
                    if (country.SOFORT === type) {
                      obj3.type = "sofort";
                      lib2 = country;
                      if (country == tmp84) {
                        lib2 = "";
                      }
                      const obj6 = { country: null };
                      obj6[0] = lib2;
                      obj3.sofort = obj6;
                      obj3.billing_details.email = email;
                      const tmp70 = obj3;
                    } else {
                      throwTypeErrorResult = email;
                      throwTypeErrorResult = country;
                      if (country.BANCONTACT === type) {
                        obj3.type = "bancontact";
                      } else {
                        throwTypeErrorResult = email;
                        throwTypeErrorResult = country;
                        if (country.IDEAL === type) {
                          obj3.type = "ideal";
                          obj7 = { bank: null };
                          obj7[0] = lib.bank;
                          obj3.ideal = obj7;
                        } else {
                          throwTypeErrorResult = email;
                          throwTypeErrorResult = country;
                          if (country.PRZELEWY24 === type) {
                            if (tmp84 == lib.bank) {
                              const billingError1 = new lib(email[13]).BillingError("p24 missing bank information", lib(email[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                              throw billingError1;
                            } else {
                              obj3.type = "p24";
                              const obj8 = { bank: null };
                              obj8[0] = lib.bank;
                              obj3.p24 = obj8;
                              obj3.billing_details.email = lib.email;
                            }
                          } else {
                            throwTypeErrorResult = email;
                            throwTypeErrorResult = country;
                            if (country.EPS !== type) {
                              if (country.PIX === type) {
                                throwTypeErrorResult = billingAddress;
                                throwTypeErrorResult = obj3;
                                obj3.type = "pix";
                                throwTypeErrorResult = obj3;
                                throwTypeErrorResult = lib;
                                obj3.billing_details.email = lib.email;
                                throwTypeErrorResult = obj3;
                                throwTypeErrorResult = lib;
                                const pixMetadata = lib.pixMetadata;
                                let taxId;
                                if (pixMetadata != tmp84) {
                                  taxId = pixMetadata.taxId;
                                }
                                obj3.billing_details.tax_id = taxId;
                              }
                            }
                          }
                        }
                        if (tmp84 == lib.bank) {
                          const billingError2 = new lib(email[13]).BillingError("EPS missing bank information", lib(email[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                          throw billingError2;
                        } else {
                          obj3.type = "eps";
                          const obj9 = { bank: null };
                          obj9[0] = lib.bank;
                          obj3.eps = obj9;
                        }
                      }
                    }
                  }
                  lib2(email[9])(tmp84 != obj3.type, "unsupported payment method type");
                  tmp84 = lib2;
                  paymentMethod = lib2.createPaymentMethod(obj3);
                  name = 2;
                  line1 = 1;
                }
              }
            } else if (arg0 === 1) {
              line1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              line1 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = arg1;
              return obj10;
            } else {
              throwTypeErrorResult = billingAddress;
              closure_12 = arg1;
              throwTypeErrorResult = closure_12;
              paymentMethod = closure_12.paymentMethod;
              throwTypeErrorResult = closure_12;
              error = closure_12.error;
              throwTypeErrorResult = error;
              throwTypeErrorResult = null;
              if (null == error) {
                if (null != paymentMethod) {
                  line1 = 3;
                  obj = { value: null, done: true };
                  obj[0] = paymentMethod.id;
                  return obj;
                }
              }
              let code;
              if (error != null) {
                code = error.code;
              }
              let message;
              if (error != null) {
                message = error.message;
              }
              const _HermesInternal = HermesInternal;
              const combined = "Unable to create payment source token: code: " + code + " message: " + message;
              const billingError3 = new lib(email[13]).BillingError(combined, lib(email[13]).BillingError.ErrorCodes.UNKNOWN);
              throw billingError3;
            }
          } catch (tmp98) {
            line1 = throwTypeErrorResult;
            throw tmp98;
          }
        }
      }
    })();
  });
  const _createStripePaymentSourceToken = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _paymentIntentSucceeded() {
  let self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      let closure_1 = tmp2;
      closure_1 = yield outer1_2(c3[11]).getStripe();
      if (null == closure_1) {
        throw callback(closure_3[6]).dispatchConfirmationError("Stripe has not loaded.");
      }
      if (null == callback) {
        throw callback(closure_3[6]).dispatchConfirmationError("payment intent id cannot be null.");
      }
      let closure_2 = yield (function getClientSecret(closure_0) {
        const self = this;
        const apply = closure_12.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(callback);
      closure_3 = yield closure_1.retrievePaymentIntent(closure_2);
      const error = closure_3.error;
      if (null != error) {
        const obj2 = callback(closure_3[6]);
        throw obj2.dispatchConfirmationError(error);
      }
      if (null == paymentIntent) {
        const obj1 = callback(closure_3[6]);
        throw obj1.dispatchConfirmationError("paymentIntent not available with successful stripe call");
      }
      if (null != paymentIntent.last_payment_error) {
        const obj = callback(closure_3[6]);
        const _HermesInternal = HermesInternal;
        throw obj.dispatchConfirmationError("unable to retrieve payment intent " + paymentIntent.last_payment_error);
      }
      return true;
    })();
  });
  const _paymentIntentSucceeded = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: c5, PaymentGateways: closure_6, VAULTABLE_PAYMENT_SOURCES: error } = ME);
({ ADYEN_PAYMENT_SOURCES: metroImportAll, STRIPE_PAYMENT_SOURCES: c9, PaymentSourceTypes } = sum);
const unpackModuleId = new require("timestamp")("BillingPaymentGatewayActionCreators.tsx");
let closure_21 = { hasCreatedPaymentMethod: false };
const items = [, ];
({ CARD: arr[0], PAYMENT_REQUEST: arr[1] } = PaymentSourceTypes);
let set = new Set(items);
let result = set.fileFinishedImporting("modules/billing/actions/BillingPaymentGatewayActionCreators.tsx");

export const createAdyenPaymentSourceToken = function createAdyenPaymentSourceToken(type) {
  let json = null;
  if (!set.has(type.type)) {
    let value = map.get(type.type);
    if (value == null) {
      value = null;
    }
    const obj = { type: null };
    obj[0] = value;
    json = JSON.stringify(obj);
  }
  return json;
};
export { dispatchPaymentElementsConfirmationError };
export const createCardToken = function createCardToken() {
  const self = this;
  const apply = _createCardToken.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmEPS = function confirmEPS() {
  const self = this;
  const apply = _confirmEPS.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmIdeal = function confirmIdeal() {
  const self = this;
  const apply = _confirmIdeal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmPrzelewy24 = function confirmPrzelewy24() {
  const self = this;
  const apply = _confirmPrzelewy.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { submitElementsForPaymentElement };
export const submitElementsAndCreateStripePaymentMethod = function submitElementsAndCreateStripePaymentMethod() {
  const self = this;
  const apply = _submitElementsAndCreateStripePaymentMethod.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmPaymentElementSource = function confirmPaymentElementSource() {
  const self = this;
  const apply = _confirmPaymentElementSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmCardPaymentSource = function confirmCardPaymentSource() {
  const self = this;
  const apply = _confirmCardPaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createPaymentRequestPaymentSource = function createPaymentRequestPaymentSource(billing_details, closure_2, analyticsLocation) {
  let billingAddressInfo = closure_2;
  let obj = importAll(4610);
  const result = obj.parseStripePaymentMethod(billing_details);
  if (closure_2 == null) {
    billingAddressInfo = result.billingAddressInfo;
  }
  obj = { analyticsLocation };
  return _validatePaymentSourceBillingAddress.createPaymentSource(constants.STRIPE, result.token, billingAddressInfo, obj);
};
export const createBraintreePaymentSource = function createBraintreePaymentSource(id, closure_2, analyticsLocation) {
  let obj = _validatePaymentSourceBillingAddress;
  obj = { analyticsLocation };
  return obj.createPaymentSource(constants.BRAINTREE, id, closure_2, obj);
};
export const createStripePaymentSource = function createStripePaymentSource() {
  const self = this;
  const apply = _createStripePaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createAdyenPrepaidPaymentSource = function createAdyenPrepaidPaymentSource() {
  const self = this;
  const apply = _createAdyenPrepaidPaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createAdyenVaultablePaymentSource = function createAdyenVaultablePaymentSource() {
  const self = this;
  const apply = _createAdyenVaultablePaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { createStripePaymentSourceToken };
export const createPaymentSourceToken = function createPaymentSourceToken(paymentSource) {
  let obj = paymentSource;
  if (set.has(paymentSource.type)) {
    return null;
  } else {
    if (map.has(obj.type)) {
      let json = null;
      if (!set.has(obj.type)) {
        let value = obj3.get(obj.type);
        if (value == null) {
          value = null;
        }
        obj = { type: null };
        obj[0] = value;
        json = JSON.stringify(obj);
      }
      let tmp2 = json;
    } else {
      tmp2 = createStripePaymentSourceToken(obj);
    }
    obj3 = map;
  }
};
export const paymentIntentSucceeded = function paymentIntentSucceeded(closure_0) {
  const self = this;
  const apply = _paymentIntentSucceeded.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};