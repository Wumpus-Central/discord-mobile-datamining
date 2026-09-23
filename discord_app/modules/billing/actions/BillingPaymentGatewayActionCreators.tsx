// === Module 5176: BillingPaymentGatewayActionCreators ===

// Module 5176 (BillingPaymentGatewayActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1115 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import BillingSharedActionCreators from "BillingSharedActionCreators" /* 5165 */;
import _mod5177 from "module_5177" /* 5177 */;
import StripeActionCreators from "StripeActionCreators" /* 5178 */;
import StripeUtilsAll from "StripeUtils" /* 5179 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_12 = async function _getClientSecret() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: closure_2_5.BILLING_STRIPE_PAYMENT_INTENTS(closure_0), oldFormErrors: true, rejectWithError: true });
  return value.body.stripe_payment_intent_client_secret;
};
function dispatchPaymentElementsConfirmationError(type) {
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = util.intl;
    stringResult = intl.string(util.t.khEaRI);
  }
  return BillingSharedActionCreators.dispatchConfirmationError(type, flag, stringResult, { tags: { source: "payment_elements" } });
}
let closure_14 = async function _createCardToken(arg0, arg1) {
  closure_0 = arg0;
  let element = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            closure_2 = tmp2;
            closure_130_0 = undefined;
            let token;
            let error;
            if (null != closure_0) {
              if (null != element) {
                element = element.getElement(_mod5177.CardNumberElement);
                if (null == element) {
                  throw BillingSharedActionCreators.dispatchConfirmationError("Unable to load card elements from Stripe");
                } else {
                  c4 = 1;
                  c5 = 1;
                  const obj8 = { value: closure_0.createToken(element), done: false };
                  return obj8;
                }
              }
            }
            throw BillingSharedActionCreators.dispatchConfirmationError("Stripe or elements not loaded");
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_130_0 = value;
          token = closure_130_0.token;
          error = closure_130_0.error;
          if (null != error) {
            throw closure_131_0(closure_131_3[6]).dispatchConfirmationError(error);
          } else if (null == token) {
            throw closure_131_0(closure_131_3[6]).dispatchConfirmationError("token not available with successful stripe call");
          } else {
            c5 = 3;
            const obj = { value: token.id, done: true };
            return obj;
          }
        }
      } catch (tmp25) {
        c5 = tmp;
        throw tmp25;
      }
    }
  })();
};
let closure_15 = async function _confirmEPS() {
  closure_4 = tmp2;
  closure_132_0 = closure_0;
  closure_132_1 = closure_1;
  closure_132_2 = closure_2;
  closure_132_3 = closure_3;
  if (null == closure_0) {
    throw BillingSharedActionCreators.dispatchConfirmationError("Stripe not loaded");
  }
  if (null == tmp61) {
    throw BillingSharedActionCreators.dispatchConfirmationError("Bank required for EPS");
  }
  ({ email: closure_132_4, name } = closure_2);
  closure_132_5 = name;
  ({ line1: closure_132_6, line2: closure_132_7, city: closure_132_8, state: closure_132_9, postalCode: closure_132_10, country: closure_132_11 } = closure_2);
  if (null == name) {
    throw BillingSharedActionCreators.dispatchConfirmationError("Name required for EPS");
  }
  DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
  await BillingSharedActionCreators.validatePaymentSourceBillingAddress(closure_2);
  closure_132_12 = value;
  const obj13 = { type: "eps", eps: { bank: closure_132_1 }, billing_details: { address: { line1: closure_132_6, line2: closure_132_7, city: closure_132_8, state: closure_132_9, postal_code: closure_132_10, country: closure_132_11 }, name: closure_132_5, email: closure_132_4 } };
  await closure_132_0.createPaymentMethod(obj13);
  closure_132_13 = value;
  const paymentMethod = closure_132_13.paymentMethod;
  const error = closure_132_13.error;
  if (null != error) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(error);
  }
  if (null == paymentMethod) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
  }
  return closure_133_0(closure_133_3[6]).createPaymentSource(closure_133_6.STRIPE, paymentMethod.id, closure_132_2, { billingAddressToken: closure_132_12, analyticsLocation: closure_132_3, bank: closure_132_1 });
};
let closure_16 = async function _confirmPrzelewy(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  let user = arg2;
  closure_3 = arg3;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    closure_4 = tmp2;
    closure_132_0 = closure_0;
    closure_132_1 = closure_1;
    closure_132_2 = user;
    closure_132_3 = closure_3;
    if (null == closure_0) {
      throw BillingSharedActionCreators.dispatchConfirmationError("Stripe not loaded");
    }
    const email = user.email;
    closure_132_4 = email;
    ({ name: closure_132_5, line1: closure_132_6, line2: closure_132_7, city: closure_132_8, state: closure_132_9, postalCode: closure_132_10, country: closure_132_11 } = user);
    if (null == email) {
      throw BillingSharedActionCreators.dispatchConfirmationError("Email required for Przelewy24");
    }
    DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
    await BillingSharedActionCreators.validatePaymentSourceBillingAddress(user);
    closure_132_12 = value;
    const p24Bank = closure_132_1.p24Bank;
    const obj12 = { type: "p24", p24: { bank: p24Bank }, billing_details: { address: { line1: closure_132_6, line2: closure_132_7, city: closure_132_8, state: closure_132_9, postal_code: closure_132_10, country: closure_132_11 }, name: closure_132_5, email: closure_132_4 } };
    await closure_132_0.createPaymentMethod(obj12);
    closure_132_14 = value;
    const paymentMethod = closure_132_14.paymentMethod;
    const error = closure_132_14.error;
    if (null != error) {
      throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(error);
    }
    if (null == paymentMethod) {
      throw closure_133_0(closure_133_3[6]).dispatchConfirmationError("paymentMethod not available with successful stripe call");
    }
    return closure_133_0(closure_133_3[6]).createPaymentSource(closure_133_6.STRIPE, paymentMethod.id, closure_132_2, { billingAddressToken: closure_132_12, analyticsLocation: closure_132_3, bank: p24Bank });
  })();
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
    const obj = { setupIntent: payment_method, error };
    return obj;
  }
}
function submitElementsForPaymentElement() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_19 = async function _submitElementsForPaymentElement() {
  closure_1 = tmp2;
  if (null == _require) {
    throw dispatchPaymentElementsConfirmationError("Stripe Elements not loaded", true);
  }
  await closure_0.submit();
  closure_129_0 = value;
  closure_130_11.info("Stripe Elements submit response: ", closure_129_0);
  if (null != closure_129_0.error) {
    closure_130_11.error("Stripe Elements submit error: ", closure_129_0.error);
    throw closure_130_13(closure_129_0.error, true);
  }
  return closure_129_0;
};
function createStripePaymentMethodWithElements() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _createStripePaymentMethodWithElements(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp5;
    closure_2 = tmp2;
    await closure_0.createPaymentMethod({ elements });
    closure_130_0 = value;
    const paymentMethod = closure_130_0.paymentMethod;
    const error = closure_130_0.error;
    if (null != error) {
      closure_131_11.error("Stripe createPaymentMethod error: ", error);
      throw closure_131_13(error, true);
    }
    if (null == paymentMethod) {
      closure_131_11.warn("Stripe createPaymentMethod failed to return payment method: ", { paymentMethod, error });
      throw closure_131_13("paymentMethod not available with successful stripe call", true);
    }
    closure_131_20.hasCreatedPaymentMethod = true;
    return { paymentMethod, error };
  })();
};
let closure_23 = async function _submitElementsAndCreateStripePaymentMethod() {
  closure_2 = tmp2;
  closure_130_0 = closure_0;
  closure_130_1 = closure_1;
  if (null == closure_0) {
    throw dispatchPaymentElementsConfirmationError("Stripe not loaded", true);
  }
  if (null == closure_1) {
    throw dispatchPaymentElementsConfirmationError("Stripe Elements not loaded", true);
  }
  await submitElementsForPaymentElement(closure_1);
  await closure_131_21(closure_130_0, closure_130_1);
  closure_130_2 = value;
  return { paymentMethod: closure_130_2.paymentMethod, error: closure_130_2.error };
};
let closure_24 = async function _createExpressCheckoutPaymentMethod(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ stripePaymentMethodId: closure_129_0, billingAddress: closure_129_1, analyticsLocation: closure_129_2 } = closure_0);
          closure_129_3 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
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
          const obj6 = { value: closure_130_0(closure_130_3[6]).validatePaymentSourceBillingAddress(closure_129_1), done: false };
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
        closure_129_3 = value;
        const obj = closure_130_0(closure_130_3[6]);
        const obj8 = { billingAddressToken: closure_129_3, analyticsLocation: closure_129_2 };
        c4 = 3;
        const obj9 = { value: obj.createPaymentSource(closure_130_6.STRIPE, closure_129_0, closure_129_1, obj8), done: true };
        return obj9;
      }
    } catch (tmp23) {
      c4 = tmp;
      throw tmp23;
    }
  }
};
let closure_26 = async function _confirmPaymentElementSource() {
  dependencyMap = [...arguments];
  c12 = 0;
  c13 = 0;
  c11 = 0;
  let iter = (async (arg0) => {
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c13 = 2;
        switch (c12) {
          case 0:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_9 = tmp4;
              closure_8 = tmp8;
              closure_136_0 = undefined;
              closure_136_1 = undefined;
              closure_136_2 = undefined;
              closure_136_3 = undefined;
              closure_136_4 = undefined;
              closure_136_5 = undefined;
              closure_136_6 = undefined;
              closure_2 = dependencyMap;
              const iter2 = dependencyMap[Symbol.iterator]();
              closure_2 = dependencyMap;
              closure_1 = iter2;
              dependencyMap = undefined;
              closure_4 = undefined;
              closure_1 = iter2;
              let tmp93 = iter2 === undefined;
              dependencyMap = tmp93;
              if (!tmp93) {
                closure_4 = iter2.next();
              }
              closure_136_0 = closure_4;
              closure_4 = undefined;
              let iter = tmp154;
              if (!tmp93) {
                closure_1 = iter3;
                dependencyMap = tmp92;
                tmp93 = tmp92;
                iter = iter3;
                if (iter3 !== undefined) {
                  closure_4 = iter3.next();
                  tmp93 = tmp92;
                  iter = iter3;
                }
              }
              closure_136_1 = closure_4;
              c11 = 0;
              closure_4 = undefined;
              if (!tmp93) {
                closure_1 = iter;
                dependencyMap = tmp97;
                if (iter !== undefined) {
                  closure_4 = iter.next();
                }
              }
              c11 = 2;
              ({ billingAddress: closure_136_2, paymentSourceType: closure_136_3, lastConfirmedSetupIntentRef: closure_136_4, createSetupIntent: closure_136_5 } = closure_4);
              c11 = 0;
              closure_4 = undefined;
              let tmp99 = dependencyMap;
              if (!dependencyMap) {
                dependencyMap = tmp102;
                tmp99 = tmp102;
                if (closure_1 !== undefined) {
                  closure_4 = closure_1.next();
                  tmp99 = tmp102;
                }
              }
              closure_136_6 = closure_4;
              if (!tmp99) {
                closure_1.return();
              }
              closure_136_7 = undefined;
              closure_136_8 = undefined;
              let payment_method;
              closure_136_10 = undefined;
              closure_136_11 = undefined;
              let client_secret;
              let setupIntent2;
              let paymentMethod;
              let billing_details;
              c12 = 3;
              c13 = 1;
              return { value: "flex", done: true };
            }
          break;
          case 1:
            c11 = 0;
            closure_5 = closure_10;
            if (!dependencyMap) {
              closure_1.return();
            }
            throw closure_5;
          case 2:
            c11 = 0;
            closure_5 = closure_10;
          break;
          case 3:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null == closure_136_0) {
              throw closure_137_13("Stripe not loaded", true);
            } else if (null == closure_136_1) {
              throw closure_137_13("Stripe Elements not loaded", true);
            } else {
              closure_137_1(closure_137_3[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
              const obj19 = closure_137_1(closure_137_3[8]);
              c12 = 4;
              c13 = 1;
              const obj5 = { value: closure_137_0(closure_137_3[6]).validatePaymentSourceBillingAddress(closure_136_2), done: false };
              return obj5;
            }
          break;
          case 4:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_136_7 = value;
              if (closure_136_3 !== closure_137_10.PAYMENT_REQUEST) {
                c12 = 5;
                c13 = 1;
                const obj7 = { value: closure_137_18(closure_136_1), done: false };
                return obj7;
              } else {
                payment_method = null;
                if (closure_137_25.has(closure_136_3)) {
                  const current = closure_136_4.current;
                  c6 = current;
                  if (current == null) {
                    c6 = undefined;
                  }
                  closure_136_11 = c6;
                  if (null != closure_136_11) {
                    if (closure_136_3 === closure_137_10.PAYMENT_REQUEST) {
                      setupIntent = closure_136_11;
                      if (closure_136_11 == null) {
                        setupIntent = undefined;
                      }
                      const obj8 = { setupIntent, error: "Array" };
                      closure_136_10 = obj8;
                      if ((function shouldRecreateSetupIntentForPaymentElement(error) {
                        let tmp = null != error;
                        if (tmp) {
                          tmp = "setup_intent_unexpected_state" === error.code;
                        }
                        if (tmp) {
                          tmp = null != error.setup_intent;
                        }
                        if (tmp) {
                          let tmp2 = "succeeded" === error.setup_intent.status;
                          if (!tmp2) {
                            tmp2 = "canceled" === error.setup_intent.status;
                          }
                          tmp = tmp2;
                        }
                        return tmp;
                      })(closure_136_10.error)) {
                        if (closure_136_3 !== closure_137_10.PAYMENT_REQUEST) {
                          c12 = 7;
                          c13 = 1;
                          const obj9 = { value: closure_136_5(), done: false };
                          return obj9;
                        }
                      }
                      setupIntent2 = closure_137_17(closure_136_10.setupIntent, closure_136_10.error, (type) => {
                        const intl = dependencyMap(1115).intl;
                        const stringResult = intl.string(dependencyMap(1115).t.khEaRI);
                        return dependencyMap(5165).dispatchConfirmationError(type, true, stringResult, { tags: { source: "payment_elements" } });
                      }).setupIntent;
                      closure_136_4.current = setupIntent2;
                      payment_method = setupIntent2.payment_method;
                      const obj24 = closure_137_0(closure_137_3[6]);
                      const obj10 = { billingAddressToken: closure_136_7, analyticsLocation: closure_136_6, pix: closure_136_8 };
                      const paymentSource = obj24.createPaymentSource(closure_137_6.STRIPE, payment_method, closure_136_2, obj10);
                      c13 = 3;
                      throw closure_137_13("Missing PIX tax_id from Payment Element", true);
                    }
                  }
                  let hasCreatedPaymentMethod = closure_136_3 === closure_137_10.CARD;
                  if (hasCreatedPaymentMethod) {
                    hasCreatedPaymentMethod = closure_137_20.hasCreatedPaymentMethod;
                  }
                  if (hasCreatedPaymentMethod) {
                    c12 = 8;
                    c13 = 1;
                    const obj11 = { value: closure_137_21(closure_136_0, closure_136_1), done: false };
                    return obj11;
                  } else {
                    const obj12 = { redirect: "if_required", elements: closure_136_1 };
                    c12 = 9;
                    c13 = 1;
                    const obj13 = { value: closure_136_0.confirmSetup(obj12), done: false };
                    return obj13;
                  }
                } else {
                  c12 = 6;
                  c13 = 1;
                  const obj14 = { value: closure_137_21(closure_136_0, closure_136_1), done: false };
                  return obj14;
                }
              }
            }
          break;
          case 5:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj15 = { value, done: true };
              return obj15;
            }
          break;
          case 6:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              paymentMethod = value.paymentMethod;
              payment_method = paymentMethod.id;
              if (closure_136_3 === closure_137_10.PIX) {
                billing_details = paymentMethod.billing_details;
                let tax_id;
                if (billing_details != null) {
                  tax_id = billing_details.tax_id;
                }
                if (null != tax_id) {
                  if ("" !== billing_details.tax_id) {
                    const obj17 = { taxId: billing_details.tax_id };
                    closure_136_8 = obj17;
                  }
                }
              }
            }
          break;
          case 7:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              client_secret = value.client_secret;
              c12 = 10;
              c13 = 1;
              const obj21 = { value: closure_137_18(closure_136_1), done: false };
              return obj21;
            }
          break;
          case 8:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj22 = { value, done: true };
              return obj22;
            }
          break;
          case 9:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj23 = { value, done: true };
              return obj23;
            } else {
              closure_136_10 = value;
            }
          break;
          case 10:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj25 = { value, done: true };
              return obj25;
            } else {
              const obj = { redirect: "if_required", clientSecret: client_secret, elements: closure_136_1 };
              c12 = 11;
              c13 = 1;
              const obj26 = { value: closure_136_0.confirmSetup(obj), done: false };
              return obj26;
            }
          break;
          default:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj27 = { value, done: true };
              return obj27;
            } else {
              closure_136_10 = value;
            }
        }
      } catch (tmp126) {
        closure_10 = tmp126;
        if (tmp5 === c11) {
          c13 = tmp3;
          throw tmp126;
        } else if (tmp2 === tmp128) {
          c12 = tmp2;
        } else {
          c12 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_27 = async function _confirmCardPaymentSource(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          closure_132_2 = closure_2;
          closure_132_3 = closure_3;
          let client_secret;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          let setupIntent;
          if (null != closure_0) {
            if (null != closure_1) {
              DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
              client_secret = null;
              c7 = 1;
              c8 = 3;
              c9 = 1;
              const obj5 = { value: StripeActionCreators.createStripeSetupIntent(), done: false };
              return obj5;
            }
          }
          throw BillingSharedActionCreators.dispatchConfirmationError("Stripe or token not loaded");
        }
      } else if (1 === tmp7) {
        c7 = 0;
        closure_132_9 = closure_6;
        throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(closure_132_9);
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_132_5 = value;
          closure_132_6 = closure_133_2(closure_133_3[11]).parseBillingAddressInfoToStripeBillingDetails(closure_132_2);
          const obj7 = { payment_method: null };
          const obj11 = { card: null, billing_details: null };
          const obj13 = { token: closure_132_1 };
          obj11.card = obj13;
          obj11.billing_details = closure_132_6;
          obj7.payment_method = obj11;
          c8 = 4;
          c9 = 1;
          const obj14 = { value: closure_132_0.confirmCardSetup(client_secret, obj7), done: false };
          return obj14;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          client_secret = value.client_secret;
          c7 = 0;
          c8 = 2;
          c9 = 1;
          const obj18 = { value: closure_133_0(closure_133_3[6]).validatePaymentSourceBillingAddress(closure_132_2), done: false };
          return obj18;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 3;
        const obj19 = { value, done: true };
        return obj19;
      } else {
        closure_132_7 = value;
        setupIntent = closure_133_17(closure_132_7.setupIntent, closure_132_7.error, (type) => closure_1_0(closure_1_3[6]).dispatchConfirmationError(type)).setupIntent;
        const obj15 = closure_133_0(closure_133_3[6]);
        const obj20 = { billingAddressToken: closure_132_5, analyticsLocation: closure_132_3 };
        c9 = 3;
        const obj = { value: obj15.createPaymentSource(closure_133_6.STRIPE, setupIntent.payment_method, closure_132_2, obj20), done: true };
        return obj;
      }
    } catch (tmp28) {
      closure_6 = tmp28;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp28;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_28 = async function _createStripePaymentSource() {
  closure_4 = tmp2;
  closure_132_0 = closure_0;
  closure_132_1 = closure_1;
  closure_132_2 = closure_2;
  closure_132_3 = closure_3;
  if (null == closure_0) {
    throw BillingSharedActionCreators.dispatchConfirmationError("Stripe not loaded");
  }
  await BillingSharedActionCreators.validatePaymentSourceBillingAddress(tmp67);
  closure_132_4 = value;
  const name = closure_132_1.name;
  const line1 = closure_132_1.line1;
  const line2 = closure_132_1.line2;
  const city = closure_132_1.city;
  const state = closure_132_1.state;
  const postalCode = closure_132_1.postalCode;
  const country = closure_132_1.country;
  closure_132_12 = closure_133_9.get(closure_132_2);
  closure_133_1(closure_133_3[9])(null != closure_132_12, "unsupported payment method type");
  const obj8 = { type: closure_132_12, billing_details: { address: { line1, line2, city, state, postal_code: postalCode, country }, name } };
  await closure_132_0.createPaymentMethod(obj8);
  closure_132_13 = value;
  const paymentMethod = closure_132_13.paymentMethod;
  const error = closure_132_13.error;
  if (null != error) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(error);
  }
  if (null == paymentMethod) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError("stripePaymentMethod not available with successful stripe call");
  }
  return closure_133_0(closure_133_3[6]).createPaymentSource(closure_133_6.STRIPE, paymentMethod.id, closure_132_1, { billingAddressToken: closure_132_4, analyticsLocation: closure_132_3 });
};
let closure_29 = async function _createAdyenPrepaidPaymentSource() {
  closure_4 = tmp5;
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  closure_131_2 = closure_2;
  await BillingSharedActionCreators.validatePaymentSourceBillingAddress(closure_0);
  closure_131_3 = value;
  closure_131_4 = { type: closure_132_8.get(closure_131_1) };
  { type: closure_132_8.get(closure_131_1) };
  const ADYEN = closure_132_6.ADYEN;
  const _JSON = JSON;
  return closure_132_0(closure_132_3[6]).createPaymentSource(ADYEN, JSON.stringify(closure_131_4), closure_131_0, { billingAddressToken: closure_131_3, analyticsLocation: closure_131_2 });
};
let closure_30 = async function _createAdyenVaultablePaymentSource(arg0) {
  if (c13 === 2) {
    c13 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c13 = 2;
      if (0 === c12) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_9 = tmp2;
          closure_8 = tmp7;
          closure_136_4 = undefined;
          closure_136_0 = closure_0;
          closure_136_1 = closure_1;
          closure_136_2 = closure_2;
          closure_136_3 = closure_3;
          let flag = closure_4;
          if (closure_4 === undefined) {
            flag = false;
          }
          closure_136_4 = flag;
          closure_136_5 = undefined;
          closure_136_6 = undefined;
          closure_136_7 = undefined;
          closure_136_8 = undefined;
          let adyen_redirect_url;
          c12 = 1;
          c13 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c12 = 2;
          c13 = 1;
          const obj8 = { value: closure_137_0(closure_137_3[6]).validatePaymentSourceBillingAddress(closure_136_0), done: false };
          return obj8;
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_136_5 = value;
          const obj10 = { type: closure_137_8.get(closure_136_1) };
          let paymentMethod;
          if (closure_136_3 != null) {
            paymentMethod = closure_136_3.paymentMethod;
          }
          closure_5 = paymentMethod;
          if (paymentMethod == null) {
            closure_5 = {};
          }
          const merged = Object.assign(closure_5);
          closure_136_6 = obj10;
          c12 = 3;
          c13 = 1;
          const obj12 = { value: closure_137_0(closure_137_3[6]).popupBridgeState(closure_136_1), done: false };
          return obj12;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          closure_136_7 = value;
          c6 = closure_136_7;
          const aPIBaseURL = closure_137_0(closure_137_3[4]).getAPIBaseURL();
          if (closure_136_7 == null) {
            c6 = "";
          }
          closure_136_8 = aPIBaseURL + closure_137_5.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_136_1, c6, "success");
          c10 = 1;
          value = {};
          const obj7 = closure_137_0(closure_137_3[6]);
          const ADYEN = closure_137_6.ADYEN;
          const _JSON = JSON;
          const obj15 = { billingAddressToken: closure_136_5, analyticsLocation: closure_136_2, returnUrl: closure_136_8 };
          c12 = 5;
          c13 = 1;
          const obj16 = { value: obj7.createPaymentSource(ADYEN, JSON.stringify(closure_136_6), closure_136_0, obj15, closure_136_4), done: false };
          return obj16;
        }
      } else if (4 === tmp7) {
        c10 = 0;
        closure_136_10 = closure_11;
        if (closure_136_10.code !== closure_137_0(closure_137_3[12]).ErrorCodes.CONFIRMATION_REQUIRED) {
          let code;
          if (closure_136_10 != null) {
            code = closure_136_10.code;
          }
          let message;
          if (closure_136_10 != null) {
            message = closure_136_10.message;
          }
          const obj17 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: null };
          const _HermesInternal = HermesInternal;
          const combined = "Unable to create payment source token: code: " + code + " message: " + message;
          const billingError = new closure_137_0(closure_137_3[13]).BillingError(combined, closure_137_0(closure_137_3[13]).BillingError.ErrorCodes.UNKNOWN);
          obj17.error = billingError;
          closure_137_1(closure_137_3[8]).dispatch(obj17);
          throw closure_136_10;
        } else {
          adyen_redirect_url = closure_136_10.fields.adyen_redirect_url;
          if (null == adyen_redirect_url) {
            throw closure_137_0(closure_137_3[6]).dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
          } else {
            (function performRedirect(adyen_redirect_url) {
              window.open(adyen_redirect_url);
            })(adyen_redirect_url);
            c13 = 3;
            const obj18 = { value: { redirectConfirmation: true }, done: true };
            return obj18;
          }
        }
      } else if (arg0 === 1) {
        c13 = 3;
        throw value;
      } else if (arg0 === 2) {
        c10 = 0;
        c13 = 3;
        const obj20 = { value, done: true };
        return obj20;
      } else {
        value.paymentSource = value;
        value.redirectConfirmation = false;
        c10 = 0;
        c13 = 3;
        const obj = { value, done: true };
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
};
function createStripePaymentSourceToken() {
  const self = this;
  const apply = closure_32.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_32 = async function _createStripePaymentSourceToken(arg0) {
  let type = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0) => {
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
            closure_3 = tmp5;
            closure_2 = tmp2;
            closure_130_0 = type;
            closure_130_1 = undefined;
            let billingAddress;
            let email;
            let name;
            let line1;
            let line2;
            let city;
            let state;
            let postalCode;
            let country2;
            closure_130_11 = undefined;
            closure_130_12 = undefined;
            let paymentMethod2;
            let error;
            if (set.has(type.type)) {
              c5 = 3;
              return { value: null, done: true };
            } else {
              c4 = 1;
              c5 = 1;
              const obj4 = { value: StripeUtilsAll.getStripe(), done: false };
              return obj4;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_130_1 = value;
            let tmp84 = null;
            if (null == closure_130_1) {
              const billingError = new closure_131_0(closure_131_3[13]).BillingError("Stripe not loaded", closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN);
              throw billingError;
            } else {
              billingAddress = closure_130_0.billingAddress;
              email = billingAddress.email;
              name = billingAddress.name;
              line1 = billingAddress.line1;
              line2 = billingAddress.line2;
              city = billingAddress.city;
              state = billingAddress.state;
              postalCode = billingAddress.postalCode;
              country2 = billingAddress.country;
              const obj6 = { billing_details: null };
              const obj7 = { address: null, name: null };
              const obj9 = { line1, line2, city, state, postal_code: postalCode, country: country2 };
              obj7.address = obj9;
              obj7.name = name;
              obj6.billing_details = obj7;
              closure_130_11 = obj6;
              type = closure_130_0.type;
              if (closure_131_10.GIROPAY === type) {
                closure_130_11.type = "giropay";
              } else if (closure_131_10.SOFORT === type) {
                closure_130_11.type = "sofort";
                country = country2;
                if (country2 == tmp84) {
                  country = "";
                }
                const obj10 = { country };
                closure_130_11.sofort = obj10;
                closure_130_11.billing_details.email = email;
              } else if (closure_131_10.BANCONTACT === type) {
                closure_130_11.type = "bancontact";
              } else {
                if (closure_131_10.IDEAL === type) {
                  closure_130_11.type = "ideal";
                  const obj11 = { bank: closure_130_0.bank };
                  closure_130_11.ideal = obj11;
                } else if (closure_131_10.PRZELEWY24 === type) {
                  if (tmp84 == closure_130_0.bank) {
                    const billingError1 = new closure_131_0(closure_131_3[13]).BillingError("p24 missing bank information", closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                    throw billingError1;
                  } else {
                    closure_130_11.type = "p24";
                    const obj12 = { bank: closure_130_0.bank };
                    closure_130_11.p24 = obj12;
                    closure_130_11.billing_details.email = closure_130_0.email;
                  }
                } else if (closure_131_10.EPS !== type) {
                  if (closure_131_10.PIX === type) {
                    closure_130_11.type = "pix";
                    closure_130_11.billing_details.email = closure_130_0.email;
                    const pixMetadata = closure_130_0.pixMetadata;
                    let taxId;
                    if (pixMetadata != tmp84) {
                      taxId = pixMetadata.taxId;
                    }
                    closure_130_11.billing_details.tax_id = taxId;
                  }
                }
                if (tmp84 == closure_130_0.bank) {
                  const billingError2 = new closure_131_0(closure_131_3[13]).BillingError("EPS missing bank information", closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE);
                  throw billingError2;
                } else {
                  closure_130_11.type = "eps";
                  const obj13 = { bank: closure_130_0.bank };
                  closure_130_11.eps = obj13;
                }
              }
              closure_131_1(closure_131_3[9])(tmp84 != closure_130_11.type, "unsupported payment method type");
              tmp84 = closure_130_1;
              const paymentMethod = closure_130_1.createPaymentMethod(closure_130_11);
              c4 = 2;
              c5 = 1;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_130_12 = value;
          paymentMethod2 = closure_130_12.paymentMethod;
          error = closure_130_12.error;
          if (null == error) {
            if (null != paymentMethod2) {
              c5 = 3;
              const obj = { value: paymentMethod2.id, done: true };
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
          const billingError3 = new closure_131_0(closure_131_3[13]).BillingError(combined, closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN);
          throw billingError3;
        }
      } catch (tmp98) {
        c5 = tmp;
        throw tmp98;
      }
    }
  })();
};
let closure_33 = async function _paymentIntentSucceeded() {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  await StripeUtilsAll.getStripe();
  closure_129_1 = value;
  if (null == closure_129_1) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError("Stripe has not loaded.");
  }
  if (null == closure_129_0) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError("payment intent id cannot be null.");
  }
  await (function getClientSecret() {
    const self = this;
    const apply = closure_1_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_129_0);
  closure_129_2 = value;
  await closure_129_1.retrievePaymentIntent(closure_129_2);
  closure_129_3 = value;
  const paymentIntent = closure_129_3.paymentIntent;
  const error = closure_129_3.error;
  if (null != error) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError(error);
  }
  if (null == paymentIntent) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError("paymentIntent not available with successful stripe call");
  }
  if (null != paymentIntent.last_payment_error) {
    const _HermesInternal = HermesInternal;
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError("unable to retrieve payment intent " + paymentIntent.last_payment_error);
  }
  return true;
};
let Constants = fn(1074);
({ Endpoints: hasOwnProperty, PaymentGateways: metroRequire, VAULTABLE_PAYMENT_SOURCES: closure_7 } = Constants);
Constants = fn(1085);
({ ADYEN_PAYMENT_SOURCES: closure_8, STRIPE_PAYMENT_SOURCES: closure_9, PaymentSourceTypes } = Constants);
let closure_11 = new LoggerDefault("BillingPaymentGatewayActionCreators.tsx");
let closure_20 = { hasCreatedPaymentMethod: false };
const items = [, ];
({ CARD: arr[0], PAYMENT_REQUEST: arr[1] } = PaymentSourceTypes);
const set = new Set(items);
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/actions/BillingPaymentGatewayActionCreators.tsx");

export const createAdyenPaymentSourceToken = function createAdyenPaymentSourceToken(type) {
  let json = null;
  if (!set.has(type.type)) {
    value = map.get(type.type);
    if (value == null) {
      value = null;
    }
    const obj = { type: value };
    json = JSON.stringify(obj);
  }
  return json;
};
export { dispatchPaymentElementsConfirmationError };
export const createCardToken = function createCardToken() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmEPS = function confirmEPS() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmPrzelewy24 = function confirmPrzelewy24() {
  const self = this;
  const apply = closure_16.apply;
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
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createExpressCheckoutPaymentMethod = function createExpressCheckoutPaymentMethod() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmPaymentElementSource = function confirmPaymentElementSource() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const confirmCardPaymentSource = function confirmCardPaymentSource() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createBraintreePaymentSource = function createBraintreePaymentSource(id, arg1, analyticsLocation) {
  return BillingSharedActionCreators.createPaymentSource(constants.BRAINTREE, id, arg1, { analyticsLocation });
};
export const createStripePaymentSource = function createStripePaymentSource() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createAdyenPrepaidPaymentSource = function createAdyenPrepaidPaymentSource() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createAdyenVaultablePaymentSource = function createAdyenVaultablePaymentSource() {
  const self = this;
  const apply = closure_30.apply;
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
  } else if (map.has(obj.type)) {
    let json = null;
    if (!set.has(obj.type)) {
      value = map.get(obj.type);
      if (value == null) {
        value = null;
      }
      obj = { type: value };
      json = JSON.stringify(obj);
    }
  } else {
    const tmp2 = createStripePaymentSourceToken(obj);
  }
};
export const paymentIntentSucceeded = function paymentIntentSucceeded() {
  const self = this;
  const apply = closure_33.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};