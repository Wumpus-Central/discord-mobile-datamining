// === Module 5423: BillingPaymentGatewayActionCreators ===

// Module 5423 (BillingPaymentGatewayActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import BillingSharedActionCreators from "BillingSharedActionCreators" /* 5412 */;
import react from "react" /* 5424 */;
import StripeActionCreators from "StripeActionCreators" /* 5425 */;
import StripeUtilsAll from "StripeUtils" /* 5426 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants_mod from "Constants" /* 1085 */;
import Constants_mod2 from "Constants" /* 1096 */;
import size from "module_2" /* 2 */;

let _undefined, closure_12, closure_5, closure_8, postal_code, returnUrl;

let PaymentSourceTypes;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _getClientSecret() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: hasOwnProperty.BILLING_STRIPE_PAYMENT_INTENTS(closure_0), oldFormErrors: true, rejectWithError: true };
    const get = HTTP.get;
    await get(obj4);
    return value.body.stripe_payment_intent_client_secret;
  });
  return obj(...arguments);
};
function dispatchPaymentElementsConfirmationError(error) {
  let stringResult;
  if (stringResult === undefined) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.khEaRI);
  }
  obj = BillingSharedActionCreators;
  const obj2 = { tags: { source: "payment_elements" } };
  return obj.dispatchConfirmationError(error, flag, stringResult, obj2);
}
obj = function _createCardToken() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let element = arg1;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let token;
          let error;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              c3 = 0;
              closure_2 = tmp;
              const obj10 = closure_0;
              closure_0 = undefined;
              token = undefined;
              error = undefined;
              if (null != closure_0) {
                if (null != element) {
                  element = element.getElement(react.CardNumberElement);
                  if (null == element) {
                    const obj6 = BillingSharedActionCreators;
                    throw obj6.dispatchConfirmationError("Unable to load card elements from Stripe");
                  } else {
                    c4 = 1;
                    c5 = 1;
                    const obj8 = { value: obj10.createToken(element), done: false };
                    return obj8;
                  }
                }
              }
              const obj7 = BillingSharedActionCreators;
              throw obj7.dispatchConfirmationError("Stripe or elements not loaded");
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_0 = value;
            token = closure_0.token;
            error = closure_0.error;
            if (null != error) {
              const obj3 = closure_131_0(closure_131_3[6]);
              throw obj3.dispatchConfirmationError(error);
            } else if (null == token) {
              const obj2 = closure_131_0(closure_131_3[6]);
              throw obj2.dispatchConfirmationError("token not available with successful stripe call");
            } else {
              c5 = 3;
              return { value: token.id, done: true };
            }
          }
        } catch (tmp24) {
          c5 = 3;
          throw tmp24;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _confirmEPS() {
  obj = _asyncToGenerator(async (arg0, bank, arg2, analyticsLocation) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let c10;
      let c11;
      let c4;
      let c6;
      let c7;
      let c8;
      let c9;
      let name;
      let obj14;
      let obj16;
      let obj17;
      let obj8;
      if (line2 === 2) {
        line2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_13;
          let paymentMethod;
          let error;
          line2 = 2;
          if (0 === line1) {
            if (arg0 === 1) {
              line2 = 3;
              throw value;
            } else if (arg0 === 2) {
              line2 = 3;
              return { value, done: true };
            } else {
              c5 = 0;
              let closure_4 = tmp;
              email = undefined;
              name = undefined;
              line1 = undefined;
              line2 = undefined;
              city = undefined;
              state = undefined;
              postal_code = undefined;
              country = undefined;
              billingAddressToken = undefined;
              closure_13 = undefined;
              paymentMethod = undefined;
              error = undefined;
              if (null == closure_0) {
                const obj12 = BillingSharedActionCreators;
                throw obj12.dispatchConfirmationError("Stripe not loaded");
              } else if (null == tmp59) {
                const obj11 = BillingSharedActionCreators;
                throw obj11.dispatchConfirmationError("Bank required for EPS");
              } else {
                ({ email: c4, name } = closure_2);
                ({ line1: c6, line2: c7, city: c8, state: c9, postalCode: c10, country: c11 } = closure_2);
                if (null == name) {
                  const obj10 = BillingSharedActionCreators;
                  throw obj10.dispatchConfirmationError("Name required for EPS");
                } else {
                  const obj7 = DispatcherDefault;
                  obj7.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
                  line1 = 1;
                  line2 = 1;
                  const obj6 = { value: obj8.validatePaymentSourceBillingAddress(closure_2), done: false };
                  obj8 = BillingSharedActionCreators;
                  return obj6;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              line2 = 3;
              throw value;
            } else if (arg0 === 2) {
              line2 = 3;
              return { value, done: true };
            } else {
              billingAddressToken = value;
              const obj13 = { type: "eps", eps: obj14, billing_details: obj16 };
              obj16 = { address: obj17, name, email };
              obj17 = { line1, line2, city, state, postal_code, country };
              line1 = 2;
              line2 = 1;
              obj14 = { bank };
              const obj18 = { value: closure_0.createPaymentMethod(obj13), done: false };
              return obj18;
            }
          } else if (arg0 === 1) {
            line2 = 3;
            throw value;
          } else if (arg0 === 2) {
            line2 = 3;
            return { value, done: true };
          } else {
            closure_13 = value;
            paymentMethod = closure_13.paymentMethod;
            error = closure_13.error;
            if (null != error) {
              const obj3 = closure_133_0(closure_133_3[6]);
              throw obj3.dispatchConfirmationError(error);
            } else if (null == paymentMethod) {
              const obj2 = closure_133_0(closure_133_3[6]);
              throw obj2.dispatchConfirmationError("paymentMethod not available with successful stripe call");
            } else {
              line2 = 3;
              const obj15 = closure_133_0(closure_133_3[6]);
              const obj20 = { billingAddressToken, analyticsLocation, bank };
              obj = { value: obj15.createPaymentSource(closure_133_6.STRIPE, paymentMethod.id, closure_2, obj20), done: true };
              return obj;
            }
          }
        } catch (tmp24) {
          line2 = 3;
          throw tmp24;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _confirmPrzelewy() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, analyticsLocation) => {
    let closure_0 = arg0;
    let p24Bank = arg1;
    const user = arg2;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let c10;
      let c11;
      let c5;
      let c6;
      let c7;
      let c8;
      let c9;
      let obj13;
      let obj15;
      let obj16;
      let obj8;
      if (line2 === 2) {
        line2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let email;
          let closure_14;
          let paymentMethod;
          let error;
          line2 = 2;
          if (0 === line1) {
            if (arg0 === 1) {
              line2 = 3;
              throw value;
            } else if (arg0 === 2) {
              line2 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              email = undefined;
              name = undefined;
              line1 = undefined;
              line2 = undefined;
              city = undefined;
              state = undefined;
              postal_code = undefined;
              country = undefined;
              billingAddressToken = undefined;
              p24Bank = undefined;
              closure_14 = undefined;
              paymentMethod = undefined;
              error = undefined;
              if (null == closure_0) {
                const obj11 = BillingSharedActionCreators;
                throw obj11.dispatchConfirmationError("Stripe not loaded");
              } else {
                email = user.email;
                ({ name: c5, line1: c6, line2: c7, city: c8, state: c9, postalCode: c10, country: c11 } = user);
                if (null == email) {
                  const obj10 = BillingSharedActionCreators;
                  throw obj10.dispatchConfirmationError("Email required for Przelewy24");
                } else {
                  const obj7 = DispatcherDefault;
                  obj7.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
                  line1 = 1;
                  line2 = 1;
                  const obj6 = { value: obj8.validatePaymentSourceBillingAddress(user), done: false };
                  obj8 = BillingSharedActionCreators;
                  return obj6;
                }
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              line2 = 3;
              throw value;
            } else if (arg0 === 2) {
              line2 = 3;
              return { value, done: true };
            } else {
              billingAddressToken = value;
              p24Bank = p24Bank.p24Bank;
              const obj12 = { type: "p24", p24: obj13, billing_details: obj15 };
              obj15 = { address: obj16, name, email };
              obj16 = { line1, line2, city, state, postal_code, country };
              line1 = 2;
              line2 = 1;
              obj13 = { bank: p24Bank };
              const obj17 = { value: closure_0.createPaymentMethod(obj12), done: false };
              return obj17;
            }
          } else if (arg0 === 1) {
            line2 = 3;
            throw value;
          } else if (arg0 === 2) {
            line2 = 3;
            return { value, done: true };
          } else {
            closure_14 = value;
            paymentMethod = closure_14.paymentMethod;
            error = closure_14.error;
            if (null != error) {
              const obj3 = closure_133_0(closure_133_3[6]);
              throw obj3.dispatchConfirmationError(error);
            } else if (null == paymentMethod) {
              const obj2 = closure_133_0(closure_133_3[6]);
              throw obj2.dispatchConfirmationError("paymentMethod not available with successful stripe call");
            } else {
              line2 = 3;
              const obj14 = closure_133_0(closure_133_3[6]);
              const obj19 = { billingAddressToken, analyticsLocation, bank: p24Bank };
              obj = { value: obj14.createPaymentSource(closure_133_6.STRIPE, paymentMethod.id, user, obj19), done: true };
              return obj;
            }
          }
        } catch (tmp22) {
          line2 = 3;
          throw tmp22;
        }
      }
    })();
  });
  return obj(...arguments);
};
function validateSetupIntentResponse(payment_method, error, created) {
  if (null != error) {
    throw created(error);
  } else if (null == payment_method) {
    throw created("SetupIntent not created");
  } else if (null == payment_method.payment_method) {
    throw created("setupIntent.payment_method not available with successful stripe call");
  } else {
    _modDef38(typeof payment_method.payment_method === "string", "setupIntent.payment_method expanded not supported");
    return { setupIntent: payment_method, error };
  }
}
function submitElementsForPaymentElement() {
  return obj(...arguments);
}
obj = function _submitElementsForPaymentElement() {
  obj = _asyncToGenerator(async (value) => {
    let c2;
    let closure_1;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const obj3 = value;
      if (null == value) {
        throw dispatchPaymentElementsConfirmationError("Stripe Elements not loaded", true);
      }
      await obj3.submit();
      closure_130_11.info("Stripe Elements submit response: ", value);
      if (null != value.error) {
        closure_130_11.error("Stripe Elements submit error: ", value.error);
        throw closure_130_13(value.error, true);
      }
      return value;
    })();
  });
  return obj(...arguments);
};
function createStripePaymentMethodWithElements() {
  return obj(...arguments);
}
obj = function _createStripePaymentMethodWithElements() {
  obj = _asyncToGenerator(async (arg0, elements) => {
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      const obj4 = { elements };
      await closure_0.createPaymentMethod(obj4);
      closure_0 = value;
      const paymentMethod = closure_0.paymentMethod;
      const error = closure_0.error;
      if (null != error) {
        closure_131_11.error("Stripe createPaymentMethod error: ", error);
        throw closure_131_13(error, true);
      }
      if (null == paymentMethod) {
        const obj7 = { paymentMethod, error };
        closure_131_11.warn("Stripe createPaymentMethod failed to return payment method: ", obj7);
        throw closure_131_13("paymentMethod not available with successful stripe call", true);
      }
      closure_131_20.hasCreatedPaymentMethod = true;
      return { paymentMethod, error };
    })();
  });
  return obj(...arguments);
};
obj = function _submitElementsAndCreateStripePaymentMethod() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c3;
    let c4;
    let c5;
    let closure_2;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (null == closure_0) {
      throw dispatchPaymentElementsConfirmationError("Stripe not loaded", true);
    }
    if (null == closure_1) {
      throw dispatchPaymentElementsConfirmationError("Stripe Elements not loaded", true);
    }
    await submitElementsForPaymentElement(closure_1);
    await closure_131_21(closure_0, closure_1);
    const tmp = value;
    obj = { paymentMethod: tmp.paymentMethod, error: tmp.error };
    return obj;
  });
  return obj(...arguments);
};
obj = function _createExpressCheckoutPaymentMethod() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let c2;
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
        let analyticsLocation;
        let billingAddressToken;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            analyticsLocation = undefined;
            ({ stripePaymentMethodId: c0, billingAddress: c1, analyticsLocation: c2 } = closure_0);
            billingAddressToken = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 2;
            c4 = 1;
            const obj6 = { value: obj5.validatePaymentSourceBillingAddress(c1), done: false };
            obj5 = closure_130_0(closure_130_3[6]);
            return obj6;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          billingAddressToken = value;
          obj = closure_130_0(closure_130_3[6]);
          const obj8 = { billingAddressToken, analyticsLocation };
          c4 = 3;
          const obj9 = { value: obj.createPaymentSource(closure_130_6.STRIPE, c0, c1, obj8), done: true };
          return obj9;
        }
      } catch (tmp22) {
        c4 = 3;
        throw tmp22;
      }
    }
  });
  return obj(...arguments);
};
obj = function _confirmPaymentElementSource() {
  obj = _asyncToGenerator(async () => {
    let closure_10;
    let ref;
    let closure_0 = [...arguments];
    let c12 = 0;
    let c13 = 0;
    let c11 = 0;
    let iter = (async (arg0) => {
      let obj20;
      let tmp;
      function shouldRecreateSetupIntentForPaymentElement(error) {
        let tmp = null != error && "setup_intent_unexpected_state" === error.code && null != error.setup_intent;
        if (tmp) {
          tmp = "succeeded" === error.setup_intent.status || "canceled" === error.setup_intent.status;
          const tmp2 = "succeeded" === error.setup_intent.status || "canceled" === error.setup_intent.status;
        }
        return tmp;
      }
      if (c13 === 2) {
        c13 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp121;
        try {
          let c2;
          let c3;
          let c5;
          let obj18;
          let id;
          let client_secret;
          let setupIntent;
          let paymentMethod;
          let billing_details;
          c13 = 2;
          switch (c12) {
            case 0:
            {
              let c4;
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                closure_9 = tmp;
                closure_8 = tmp4;
                closure_0 = undefined;
                c2 = undefined;
                c3 = undefined;
                c5 = undefined;
                analyticsLocation = undefined;
                const iter2 = closure_0[Symbol.iterator]();
                closure_2 = closure_0;
                let closure_4;
                elements = iter2;
                let tmp89 = iter2 === undefined;
                closure_3 = tmp89;
                if (!closure_3) {
                  closure_4 = iter2.next();
                }
                closure_0 = closure_4;
                closure_4 = undefined;
                let iter = tmp148;
                if (!tmp89) {
                  elements = iter3;
                  closure_3 = tmp88;
                  tmp89 = tmp88;
                  iter = iter3;
                  if (iter2 !== undefined) {
                    closure_4 = iter3.next();
                    tmp89 = tmp88;
                    iter = iter3;
                  }
                }
                elements = closure_4;
                c11 = 0;
                closure_4 = undefined;
                if (!tmp89) {
                  elements = iter;
                  closure_3 = tmp93;
                  if (iter !== undefined) {
                    closure_4 = iter.next();
                  }
                }
                ({ billingAddress: c2, paymentSourceType: c3, lastConfirmedSetupIntentRef: c4, createSetupIntent: c5 } = closure_4);
                c11 = 0;
                closure_4 = undefined;
                let tmp95 = closure_3;
                if (!tmp95) {
                  closure_3 = tmp98;
                  tmp95 = tmp98;
                  if (!tmp95) {
                    closure_4 = elements.next();
                    tmp95 = tmp98;
                  }
                }
                analyticsLocation = closure_4;
                if (!tmp95) {
                  elements.return();
                }
                _undefined = undefined;
                obj18 = undefined;
                id = undefined;
                tmp121 = undefined;
                closure_11 = undefined;
                client_secret = undefined;
                setupIntent = undefined;
                paymentMethod = undefined;
                billing_details = undefined;
                c12 = 3;
                c13 = 1;
                return { value: "Reflect", done: true };
              }
              break;
            }
            case 1:
            {
              c11 = 0;
              closure_5 = tmp121;
              const tmp82 = closure_3;
              if (!tmp82) {
                elements.return();
              }
              throw closure_5;
            }
            case 2:
            {
              c11 = 0;
              closure_5 = tmp121;
              break;
            }
            case 3:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else if (null == closure_0) {
                throw closure_137_13("Stripe not loaded", true);
              } else if (null == elements) {
                throw closure_137_13("Stripe Elements not loaded", true);
              } else {
                const obj19 = closure_137_1(closure_137_3[8]);
                obj19.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
                c12 = 4;
                c13 = 1;
                const obj5 = { value: obj20.validatePaymentSourceBillingAddress(c2), done: false };
                obj20 = closure_137_0(closure_137_3[6]);
                return obj5;
              }
              break;
            }
            case 4:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                _undefined = value;
                if (c3 !== closure_137_10.PAYMENT_REQUEST) {
                  c12 = 5;
                  c13 = 1;
                  const obj7 = { value: closure_137_18(elements), done: false };
                  return obj7;
                } else {
                  id = null;
                  if (closure_137_25.has(c3)) {
                    const current = ref.current;
                    let c6 = current;
                    if (current == null) {
                      c6 = undefined;
                    }
                    closure_11 = c6;
                    if (null != closure_11) {
                      if (c3 === closure_137_10.PAYMENT_REQUEST) {
                        _undefined = closure_11;
                        if (closure_11 == null) {
                          _undefined = undefined;
                        }
                        tmp121 = { setupIntent: _undefined, error: "Array" };
                        const obj8 = { setupIntent: _undefined, error: "Array" };
                        if (shouldRecreateSetupIntentForPaymentElement(tmp121.error)) {
                          if (c3 !== closure_137_10.PAYMENT_REQUEST) {
                            c12 = 7;
                            c13 = 1;
                            const obj9 = { value: c5(), done: false };
                            return obj9;
                          }
                        }
                        setupIntent = closure_137_17(tmp121.setupIntent, tmp121.error, (error) => {
                          const intl = closure_1_0(closure_1_3[5]).intl;
                          const stringResult = intl.string(closure_1_0(closure_1_3[5]).t.khEaRI);
                          obj = closure_1_0(closure_1_3[6]);
                          const obj2 = { tags: { source: "payment_elements" } };
                          return obj.dispatchConfirmationError(error, true, stringResult, obj2);
                        }).setupIntent;
                        ref.current = setupIntent;
                        id = setupIntent.payment_method;
                        c13 = 3;
                        const obj10 = { billingAddressToken: _undefined, analyticsLocation, pix: obj18 };
                        const obj24 = closure_137_0(closure_137_3[6]);
                        const obj11 = { value: obj24.createPaymentSource(closure_137_6.STRIPE, id, c2, obj10), done: true };
                        return obj11;
                      }
                    }
                    const hasCreatedPaymentMethod = c3 === closure_137_10.CARD && closure_137_20.hasCreatedPaymentMethod;
                    if (hasCreatedPaymentMethod) {
                      c12 = 8;
                      c13 = 1;
                      const obj12 = { value: closure_137_21(closure_0, elements), done: false };
                      return obj12;
                    } else {
                      c12 = 9;
                      c13 = 1;
                      const obj13 = { redirect: "if_required", elements };
                      const obj14 = { value: closure_0.confirmSetup(obj13), done: false };
                      return obj14;
                    }
                  } else {
                    c12 = 6;
                    c13 = 1;
                    const obj15 = { value: closure_137_21(closure_0, elements), done: false };
                    return obj15;
                  }
                }
              }
              break;
            }
            case 5:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 6:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                paymentMethod = value.paymentMethod;
                id = paymentMethod.id;
                if (c3 === closure_137_10.PIX) {
                  billing_details = paymentMethod.billing_details;
                  let tax_id;
                  if (billing_details != null) {
                    tax_id = billing_details.tax_id;
                  }
                  if (null != tax_id) {
                    if ("" !== billing_details.tax_id) {
                      obj18 = { taxId: billing_details.tax_id };
                    }
                  }
                  throw closure_137_13("Missing PIX tax_id from Payment Element", true);
                }
              }
              break;
            }
            case 7:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                client_secret = value.client_secret;
                c12 = 10;
                c13 = 1;
                const obj22 = { value: closure_137_18(elements), done: false };
                return obj22;
              }
              break;
            }
            case 8:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              }
              break;
            }
            case 9:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                tmp121 = value;
              }
              break;
            }
            case 10:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                obj = { redirect: "if_required", clientSecret: client_secret, elements };
                c12 = 11;
                c13 = 1;
                const obj27 = { value: closure_0.confirmSetup(obj), done: false };
                return obj27;
              }
              break;
            }
            default:
            {
              if (arg0 === 1) {
                c13 = 3;
                throw value;
              } else if (arg0 === 2) {
                c13 = 3;
                return { value, done: true };
              } else {
                tmp121 = value;
              }
              break;
            }
          }
        } catch (tmp121) {
          if (0 === c11) {
            c13 = 3;
            throw tmp121;
          } else if (1 === tmp123) {
            c12 = 1;
          } else {
            c12 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _confirmCardPaymentSource() {
  obj = _asyncToGenerator(async (arg0, token, arg2, analyticsLocation) => {
    let closure_0 = arg0;
    let closure_2 = arg2;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj10;
      let obj11;
      let obj13;
      let obj3;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let client_secret;
          let closure_7;
          let setupIntent;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              client_secret = undefined;
              billingAddressToken = undefined;
              billing_details = undefined;
              closure_7 = undefined;
              setupIntent = undefined;
              if (null != closure_0) {
                if (null != token) {
                  const obj9 = DispatcherDefault;
                  obj9.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
                  client_secret = null;
                  c7 = 1;
                  c8 = 3;
                  c9 = 1;
                  const obj5 = { value: obj10.createStripeSetupIntent(), done: false };
                  obj10 = StripeActionCreators;
                  return obj5;
                }
              }
              const obj12 = BillingSharedActionCreators;
              throw obj12.dispatchConfirmationError("Stripe or token not loaded");
            }
          } else if (1 === c8) {
            c7 = 0;
            let closure_9 = billing_details;
            const obj8 = closure_133_0(closure_133_3[6]);
            throw obj8.dispatchConfirmationError(closure_9);
          } else if (2 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              billingAddressToken = value;
              const obj17 = closure_133_2(closure_133_3[11]);
              billing_details = obj17.parseBillingAddressInfoToStripeBillingDetails(closure_2);
              const obj7 = { payment_method: obj11 };
              obj11 = { card: obj13, billing_details };
              c8 = 4;
              c9 = 1;
              obj13 = { token };
              const obj14 = { value: closure_0.confirmCardSetup(client_secret, obj7), done: false };
              return obj14;
            }
          } else if (3 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              client_secret = value.client_secret;
              c7 = 0;
              c8 = 2;
              c9 = 1;
              const obj18 = { value: obj3.validatePaymentSourceBillingAddress(closure_2), done: false };
              obj3 = closure_133_0(closure_133_3[6]);
              return obj18;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            return { value, done: true };
          } else {
            closure_7 = value;
            setupIntent = closure_133_17(closure_7.setupIntent, closure_7.error, (error) => {
              obj = closure_1_0(analyticsLocation[6]);
              return obj.dispatchConfirmationError(error);
            }).setupIntent;
            c9 = 3;
            const obj15 = closure_133_0(closure_133_3[6]);
            const obj20 = { billingAddressToken, analyticsLocation };
            obj = { value: obj15.createPaymentSource(closure_133_6.STRIPE, setupIntent.payment_method, closure_2, obj20), done: true };
            return obj;
          }
        } catch (tmp25) {
          billing_details = tmp25;
          if (0 === c7) {
            c9 = 3;
            throw tmp25;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createStripePaymentSource() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, analyticsLocation) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj10;
      let obj12;
      let obj9;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let name;
          let line1;
          let line2;
          let city;
          let state;
          let postalCode;
          let country;
          let closure_13;
          let paymentMethod;
          let error;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 0;
              billingAddressToken = undefined;
              name = undefined;
              line1 = undefined;
              line2 = undefined;
              city = undefined;
              state = undefined;
              postalCode = undefined;
              country = undefined;
              type = undefined;
              closure_13 = undefined;
              paymentMethod = undefined;
              error = undefined;
              if (null == closure_0) {
                const obj11 = BillingSharedActionCreators;
                throw obj11.dispatchConfirmationError("Stripe not loaded");
              } else {
                c6 = 1;
                c7 = 1;
                const obj6 = { value: obj9.validatePaymentSourceBillingAddress(tmp65), done: false };
                obj9 = BillingSharedActionCreators;
                return obj6;
              }
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              billingAddressToken = value;
              name = closure_1.name;
              line1 = closure_1.line1;
              line2 = closure_1.line2;
              city = closure_1.city;
              state = closure_1.state;
              postalCode = closure_1.postalCode;
              country = closure_1.country;
              type = closure_133_9.get(closure_2);
              closure_133_1(closure_133_3[9])(null != type, "unsupported payment method type");
              const obj8 = { type, billing_details: obj10 };
              obj10 = { address: obj12, name };
              c6 = 2;
              c7 = 1;
              obj12 = { line1, line2, city, state, postal_code: postalCode, country };
              const obj13 = { value: closure_0.createPaymentMethod(obj8), done: false };
              return obj13;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            closure_13 = value;
            paymentMethod = closure_13.paymentMethod;
            error = closure_13.error;
            if (null != error) {
              const obj5 = closure_133_0(closure_133_3[6]);
              throw obj5.dispatchConfirmationError(error);
            } else if (null == paymentMethod) {
              const obj4 = closure_133_0(closure_133_3[6]);
              throw obj4.dispatchConfirmationError("stripePaymentMethod not available with successful stripe call");
            } else {
              c7 = 3;
              obj = closure_133_0(closure_133_3[6]);
              const obj15 = { billingAddressToken, analyticsLocation };
              const obj16 = { value: obj.createPaymentSource(closure_133_6.STRIPE, paymentMethod.id, closure_1, obj15), done: true };
              return obj16;
            }
          }
        } catch (tmp28) {
          c7 = 3;
          throw tmp28;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createAdyenPrepaidPaymentSource() {
  obj = _asyncToGenerator(async (arg0, arg1, analyticsLocation) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj3;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj7;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp4;
              billingAddressToken = undefined;
              obj7 = undefined;
              c5 = 1;
              c6 = 1;
              const obj5 = { value: obj3.validatePaymentSourceBillingAddress(closure_0), done: false };
              obj3 = BillingSharedActionCreators;
              return obj5;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            billingAddressToken = value;
            obj7 = { type: closure_132_8.get(closure_1) };
            const ADYEN = closure_132_6.ADYEN;
            const _JSON = JSON;
            c6 = 3;
            const obj8 = closure_132_0(closure_132_3[6]);
            const obj9 = { billingAddressToken, analyticsLocation };
            obj = { value: obj8.createPaymentSource(ADYEN, JSON.stringify(obj7), closure_0, obj9), done: true };
            return obj;
          }
        } catch (tmp10) {
          c6 = 3;
          throw tmp10;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createAdyenVaultablePaymentSource() {
  obj = _asyncToGenerator(async (arg0, arg1, analyticsLocation, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let paymentMethod = arg3;
    let closure_4 = arg4;
    let c12 = 0;
    let c13 = 0;
    let c10 = 0;
    const iter = (async function(arg0, value, arg2, arg3) {
      let billingError;
      let obj10;
      let obj13;
      function performRedirect(adyen_redirect_url) {
        window.open(adyen_redirect_url);
      }
      if (c13 === 2) {
        c13 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let flag;
          let obj9;
          let adyen_redirect_url;
          c13 = 2;
          if (0 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              return { value, done: true };
            } else {
              closure_9 = tmp;
              returnUrl = tmp4;
              flag = closure_4;
              if (closure_4 === undefined) {
                flag = false;
              }
              billingAddressToken = undefined;
              obj9 = undefined;
              value = undefined;
              returnUrl = undefined;
              adyen_redirect_url = undefined;
              c12 = 1;
              c13 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              return { value, done: true };
            } else {
              c12 = 2;
              c13 = 1;
              const obj7 = { value: obj13.validatePaymentSourceBillingAddress(closure_0), done: false };
              obj13 = closure_137_0(closure_137_3[6]);
              return obj7;
            }
          } else if (2 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              return { value, done: true };
            } else {
              billingAddressToken = value;
              obj9 = { type: closure_137_8.get(closure_1) };
              paymentMethod = undefined;
              if (paymentMethod != null) {
                paymentMethod = paymentMethod.paymentMethod;
              }
              billingAddressToken = paymentMethod;
              if (paymentMethod == null) {
                billingAddressToken = {};
              }
              const merged = Object.assign(billingAddressToken);
              c12 = 3;
              c13 = 1;
              const obj11 = { value: obj10.popupBridgeState(closure_1), done: false };
              obj10 = closure_137_0(closure_137_3[6]);
              return obj11;
            }
          } else if (3 === c12) {
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              return { value, done: true };
            } else {
              c6 = value;
              const obj18 = closure_137_0(closure_137_3[4]);
              const aPIBaseURL = obj18.getAPIBaseURL();
              const BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX = closure_137_5.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
              if (value == null) {
                c6 = "";
              }
              returnUrl = aPIBaseURL + BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_1, c6, "success");
              c10 = 1;
              value = {};
              const ADYEN = closure_137_6.ADYEN;
              const _JSON = JSON;
              c12 = 5;
              c13 = 1;
              const obj14 = { billingAddressToken, analyticsLocation, returnUrl };
              const obj6 = closure_137_0(closure_137_3[6]);
              const obj15 = { value: obj6.createPaymentSource(ADYEN, JSON.stringify(obj9), closure_0, obj14, flag), done: false };
              return obj15;
            }
          } else if (4 === c12) {
            c10 = 0;
            let closure_10 = closure_11;
            if (closure_10.code !== closure_137_0(closure_137_3[12]).ErrorCodes.CONFIRMATION_REQUIRED) {
              const dispatch = closure_137_1(closure_137_3[8]).dispatch;
              let code;
              closure_137_1(closure_137_3[8]);
              const BillingError = closure_137_0(closure_137_3[13]).BillingError;
              if (closure_10 != null) {
                code = closure_10.code;
              }
              let message;
              if (closure_10 != null) {
                message = closure_10.message;
              }
              const _HermesInternal = HermesInternal;
              const obj16 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError };
              const combined = "Unable to create payment source token: code: " + code + " message: " + message;
              const self = this;
              const self2 = this;
              billingError = new BillingError(combined, closure_137_0(closure_137_3[13]).BillingError.ErrorCodes.UNKNOWN);
              dispatch(obj16);
              throw closure_10;
            } else {
              adyen_redirect_url = closure_10.fields.adyen_redirect_url;
              if (null == adyen_redirect_url) {
                const obj4 = closure_137_0(closure_137_3[6]);
                throw obj4.dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
              } else {
                performRedirect(adyen_redirect_url);
                c13 = 3;
                return { value: { redirectConfirmation: true }, done: true };
              }
            }
          } else if (arg0 === 1) {
            c13 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            c13 = 3;
            return { value, done: true };
          } else {
            value.paymentSource = value;
            value.redirectConfirmation = false;
            c10 = 0;
            c13 = 3;
            return { value, done: true };
          }
        } catch (tmp77) {
          closure_11 = tmp77;
          if (0 === c10) {
            c13 = 3;
            throw tmp77;
          } else {
            c12 = 4;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function createStripePaymentSourceToken() {
  return obj(...arguments);
}
obj = function _createStripePaymentSourceToken() {
  obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async function(arg0) {
      let obj7;
      let obj8;
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let billingAddress;
          let email;
          let name;
          let line1;
          let line2;
          let city;
          let state;
          let postalCode;
          let obj6;
          let paymentMethod;
          let error;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              billingAddress = undefined;
              email = undefined;
              name = undefined;
              line1 = undefined;
              line2 = undefined;
              city = undefined;
              state = undefined;
              postalCode = undefined;
              country = undefined;
              obj6 = undefined;
              closure_12 = undefined;
              paymentMethod = undefined;
              error = undefined;
              if (set.has(user.type)) {
                c5 = 3;
                return { value: null, done: true };
              } else {
                c4 = 1;
                c5 = 1;
                const obj4 = { value: obj9.getStripe(), done: false };
                obj9 = StripeUtilsAll;
                return obj4;
              }
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              country = value;
              if (null == country) {
                const self7 = this;
                const self8 = this;
                const billingError = new closure_131_0(closure_131_3[13]).BillingError("Stripe not loaded", closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN);
                throw billingError;
              } else {
                billingAddress = user.billingAddress;
                email = billingAddress.email;
                name = billingAddress.name;
                line1 = billingAddress.line1;
                line2 = billingAddress.line2;
                city = billingAddress.city;
                state = billingAddress.state;
                postalCode = billingAddress.postalCode;
                country = billingAddress.country;
                obj6 = { billing_details: obj7 };
                obj7 = { address: obj8, name };
                const type = user.type;
                obj8 = { line1, line2, city, state, postal_code: postalCode, country };
                if (closure_131_10.GIROPAY === type) {
                  obj6.type = "giropay";
                } else if (closure_131_10.SOFORT === type) {
                  obj6.type = "sofort";
                  const tmp63 = obj6;
                  if (country == null) {
                    country = "";
                  }
                  const obj10 = { country };
                  tmp63.sofort = obj10;
                  obj6.billing_details.email = email;
                } else if (closure_131_10.BANCONTACT === type) {
                  obj6.type = "bancontact";
                } else if (closure_131_10.IDEAL === type) {
                  obj6.type = "ideal";
                  const obj11 = { bank: user.bank };
                  obj6.ideal = obj11;
                } else if (closure_131_10.PRZELEWY24 === type) {
                  if (null == user.bank) {
                    const self5 = this;
                    const self6 = this;
                    const billingError1 = new closure_131_0(closure_131_3[13]).BillingError("p24 missing bank information", closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                    throw billingError1;
                  } else {
                    obj6.type = "p24";
                    const obj12 = { bank: user.bank };
                    obj6.p24 = obj12;
                    obj6.billing_details.email = user.email;
                  }
                } else if (closure_131_10.EPS === type) {
                  if (null == user.bank) {
                    const self3 = this;
                    const self4 = this;
                    const billingError2 = new closure_131_0(closure_131_3[13]).BillingError("EPS missing bank information", closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                    throw billingError2;
                  } else {
                    obj6.type = "eps";
                    const obj13 = { bank: user.bank };
                    obj6.eps = obj13;
                  }
                } else if (closure_131_10.PIX === type) {
                  obj6.type = "pix";
                  obj6.billing_details.email = user.email;
                  const pixMetadata = user.pixMetadata;
                  let taxId;
                  const billing_details = obj6.billing_details;
                  if (pixMetadata != null) {
                    taxId = pixMetadata.taxId;
                  }
                  billing_details.tax_id = taxId;
                }
                closure_131_1(closure_131_3[9])(null != obj6.type, "unsupported payment method type");
                c4 = 2;
                c5 = 1;
                const obj14 = { value: country.createPaymentMethod(obj6), done: false };
                return obj14;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            closure_12 = value;
            paymentMethod = closure_12.paymentMethod;
            error = closure_12.error;
            if (null == error) {
              if (null != paymentMethod) {
                c5 = 3;
                return { value: paymentMethod.id, done: true };
              }
            }
            let code;
            const BillingError = closure_131_0(closure_131_3[13]).BillingError;
            if (error != null) {
              code = error.code;
            }
            let message;
            if (error != null) {
              message = error.message;
            }
            const _HermesInternal = HermesInternal;
            const combined = "Unable to create payment source token: code: " + code + " message: " + message;
            const self = this;
            const self2 = this;
            const billingError3 = new BillingError(combined, closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN);
            throw billingError3;
          }
        } catch (tmp88) {
          c5 = 3;
          throw tmp88;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _paymentIntentSucceeded() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let obj11;
    function getClientSecret() {
      return closure_1_12(...arguments);
    }
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let tmp;
        let closure_2;
        let closure_3;
        let paymentIntent;
        let error;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            paymentIntent = undefined;
            error = undefined;
            c3 = 1;
            c4 = 1;
            const obj6 = { value: obj11.getStripe(), done: false };
            obj11 = StripeUtilsAll;
            return obj6;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp = value;
            if (null == tmp) {
              const obj9 = closure_130_0(closure_130_3[6]);
              throw obj9.dispatchConfirmationError("Stripe has not loaded.");
            } else if (null == closure_0) {
              const obj8 = closure_130_0(closure_130_3[6]);
              throw obj8.dispatchConfirmationError("payment intent id cannot be null.");
            } else {
              c3 = 2;
              c4 = 1;
              const obj10 = { value: getClientSecret(closure_0), done: false };
              return obj10;
            }
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            closure_2 = value;
            c3 = 3;
            c4 = 1;
            const obj13 = { value: tmp.retrievePaymentIntent(closure_2), done: false };
            return obj13;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_3 = value;
          paymentIntent = closure_3.paymentIntent;
          error = closure_3.error;
          if (null != error) {
            const obj3 = closure_130_0(closure_130_3[6]);
            throw obj3.dispatchConfirmationError(error);
          } else if (null == paymentIntent) {
            const obj2 = closure_130_0(closure_130_3[6]);
            throw obj2.dispatchConfirmationError("paymentIntent not available with successful stripe call");
          } else if (null != paymentIntent.last_payment_error) {
            const _HermesInternal = HermesInternal;
            obj = closure_130_0(closure_130_3[6]);
            throw obj.dispatchConfirmationError("unable to retrieve payment intent " + paymentIntent.last_payment_error);
          } else {
            c4 = 3;
            return { value: true, done: true };
          }
        }
      } catch (tmp37) {
        c4 = 3;
        throw tmp37;
      }
    }
  });
  return obj(...arguments);
};
let Constants = Constants_mod2;
({ Endpoints: hasOwnProperty, PaymentGateways: metroRequire, VAULTABLE_PAYMENT_SOURCES: metroImportDefault } = Constants);
Constants = Constants_mod2;
({ ADYEN_PAYMENT_SOURCES: metroImportAll, STRIPE_PAYMENT_SOURCES: c9, PaymentSourceTypes } = Constants);
const tmp4 = new LoggerDefault("BillingPaymentGatewayActionCreators.tsx");
let closure_11 = tmp4;
let closure_20 = { hasCreatedPaymentMethod: false };
let items = [, ];
({ CARD: arr[0], PAYMENT_REQUEST: arr[1] } = PaymentSourceTypes);
const set = new Set(items);
const result = size.fileFinishedImporting("modules/billing/actions/BillingPaymentGatewayActionCreators.tsx");

export const createAdyenPaymentSourceToken = function createAdyenPaymentSourceToken(type) {
  let json = null;
  if (!metroImportDefault.has(type.type)) {
    const _JSON = JSON;
    let value = metroImportAll.get(type.type);
    if (value == null) {
      value = null;
    }
    obj = { type: value };
    json = stringify(obj);
  }
  return json;
};
export { dispatchPaymentElementsConfirmationError };
export const createCardToken = function createCardToken() {
  return obj(...arguments);
};
export const confirmEPS = function confirmEPS() {
  return obj(...arguments);
};
export const confirmPrzelewy24 = function confirmPrzelewy24() {
  return obj(...arguments);
};
export { submitElementsForPaymentElement };
export const submitElementsAndCreateStripePaymentMethod = function submitElementsAndCreateStripePaymentMethod() {
  return obj(...arguments);
};
export const createExpressCheckoutPaymentMethod = function createExpressCheckoutPaymentMethod() {
  return obj(...arguments);
};
export const confirmPaymentElementSource = function confirmPaymentElementSource() {
  return obj(...arguments);
};
export const confirmCardPaymentSource = function confirmCardPaymentSource() {
  return obj(...arguments);
};
export const createBraintreePaymentSource = function createBraintreePaymentSource(id, c1, analyticsLocation) {
  obj = BillingSharedActionCreators;
  const obj2 = { analyticsLocation };
  return obj.createPaymentSource(metroRequire.BRAINTREE, id, c1, obj2);
};
export const createStripePaymentSource = function createStripePaymentSource() {
  return obj(...arguments);
};
export const createAdyenPrepaidPaymentSource = function createAdyenPrepaidPaymentSource() {
  return obj(...arguments);
};
export const createAdyenVaultablePaymentSource = function createAdyenVaultablePaymentSource() {
  return obj(...arguments);
};
export { createStripePaymentSourceToken };
export const createPaymentSourceToken = function createPaymentSourceToken(paymentSource) {
  let tmp = null;
  if (!metroImportDefault.has(paymentSource.type)) {
    let tmp3;
    if (metroImportAll.has(paymentSource.type)) {
      let json = null;
      if (!metroImportDefault.has(paymentSource.type)) {
        const _JSON = JSON;
        let value = metroImportAll.get(paymentSource.type);
        if (value == null) {
          value = null;
        }
        const obj3 = { type: value };
        json = stringify(obj3);
      }
      tmp3 = json;
    } else {
      tmp3 = createStripePaymentSourceToken(paymentSource);
    }
    tmp = tmp3;
  }
  return tmp;
};
export const paymentIntentSucceeded = function paymentIntentSucceeded() {
  return obj(...arguments);
};