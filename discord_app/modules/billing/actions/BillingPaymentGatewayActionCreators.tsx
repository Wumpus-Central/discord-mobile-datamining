// discord_app/modules/billing/actions/BillingPaymentGatewayActionCreators.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import BillingSharedActionCreators from "BillingSharedActionCreators.tsx";
import _mod4888 from "../../../../_runtime/metro/04888__.js";
import StripeActionCreators from "StripeActionCreators.tsx";
import StripeUtilsAll from "../../../utils/StripeUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_12 = async function _getClientSecret() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({
    url: closure_2_5.BILLING_STRIPE_PAYMENT_INTENTS(closure_0),
    oldFormErrors: true,
    rejectWithError: true,
  });
  return arg1.body.stripe_payment_intent_client_secret;
};
function dispatchPaymentElementsConfirmationError(type, flag, stringResult) {
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = util.intl;
    stringResult = intl.string(util.t.khEaRI);
  }
  const obj = { tags: { source: "payment_elements" } };
  return obj.dispatchConfirmationError(type, flag, stringResult, obj);
}
let closure_14 = async function _createCardToken(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          c3 = 0;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          let token;
          let error;
          if (null != _require) {
            if (null != obj11) {
              const element = obj11.getElement(_mod4888.CardNumberElement);
              if (null == element) {
                throw BillingSharedActionCreators.dispatchConfirmationError("Unable to load card elements from Stripe");
              } else {
                c4 = 1;
                c5 = 1;
                let obj1 = { value: _require.createToken(element), done: false };
                return obj1;
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
        let obj2 = { value, done: true };
        return obj2;
      } else {
        closure_130_0 = value;
        token = closure_130_0.token;
        error = closure_130_0.error;
        if (null != error) {
          obj2 = closure_131_0(closure_131_3[6]);
          throw obj2.dispatchConfirmationError(error);
        } else if (null == token) {
          obj1 = closure_131_0(closure_131_3[6]);
          throw obj1.dispatchConfirmationError("token not available with successful stripe call");
        } else {
          c5 = 3;
          obj = { value: token.id, done: true };
          return obj;
        }
      }
    } catch (tmp25) {
      c5 = tmp;
      throw tmp25;
    }
  }
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
  ({ email: closure_132_4, name } = tmp62);
  closure_132_5 = name;
  ({
    line1: closure_132_6,
    line2: closure_132_7,
    city: closure_132_8,
    state: closure_132_9,
    postalCode: closure_132_10,
    country: closure_132_11,
  } = tmp62);
  if (null == name) {
    let obj9 = BillingSharedActionCreators;
    throw obj9.dispatchConfirmationError("Name required for EPS");
  }
  let obj6 = DispatcherDefault;
  obj6.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
  closure_132_12 = await BillingSharedActionCreators.validatePaymentSourceBillingAddress(tmp62);
  const obj3 = { type: "eps", eps: { bank: closure_132_1 }, billing_details: null };
  const obj5 = { address: null, name: closure_132_5, email: closure_132_4 };
  obj6 = {
    line1: closure_132_6,
    line2: closure_132_7,
    city: closure_132_8,
    state: closure_132_9,
    postal_code: closure_132_10,
    country: closure_132_11,
  };
  obj5.address = obj6;
  obj3.billing_details = obj5;
  closure_132_13 = await closure_132_0.createPaymentMethod(obj3);
  const paymentMethod = closure_132_13.paymentMethod;
  const error = closure_132_13.error;
  if (null != error) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(error);
  }
  if (null == paymentMethod) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(
      "paymentMethod not available with successful stripe call",
    );
  }
  obj9 = { billingAddressToken: closure_132_12, analyticsLocation: closure_132_3, bank: closure_132_1 };
  return closure_133_0(closure_133_3[6]).createPaymentSource(
    closure_133_6.STRIPE,
    paymentMethod.id,
    closure_132_2,
    obj9,
  );
};
let closure_16 = async function _confirmPrzelewy() {
  closure_4 = tmp2;
  closure_132_0 = closure_0;
  closure_132_1 = closure_1;
  closure_132_2 = closure_2;
  closure_132_3 = closure_3;
  if (null == closure_0) {
    throw BillingSharedActionCreators.dispatchConfirmationError("Stripe not loaded");
  }
  const email = tmp61.email;
  closure_132_4 = email;
  ({
    name: closure_132_5,
    line1: closure_132_6,
    line2: closure_132_7,
    city: closure_132_8,
    state: closure_132_9,
    postalCode: closure_132_10,
    country: closure_132_11,
  } = tmp61);
  if (null == email) {
    let obj9 = BillingSharedActionCreators;
    throw obj9.dispatchConfirmationError("Email required for Przelewy24");
  }
  let obj6 = DispatcherDefault;
  obj6.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
  closure_132_12 = await BillingSharedActionCreators.validatePaymentSourceBillingAddress(tmp61);
  const p24Bank = closure_132_1.p24Bank;
  const obj3 = { type: "p24", p24: { bank: p24Bank }, billing_details: null };
  const obj5 = { address: null, name: closure_132_5, email: closure_132_4 };
  obj6 = {
    line1: closure_132_6,
    line2: closure_132_7,
    city: closure_132_8,
    state: closure_132_9,
    postal_code: closure_132_10,
    country: closure_132_11,
  };
  obj5.address = obj6;
  obj3.billing_details = obj5;
  closure_132_14 = await closure_132_0.createPaymentMethod(obj3);
  const paymentMethod = closure_132_14.paymentMethod;
  const error = closure_132_14.error;
  if (null != error) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(error);
  }
  if (null == paymentMethod) {
    throw closure_133_0(closure_133_3[6]).dispatchConfirmationError(
      "paymentMethod not available with successful stripe call",
    );
  }
  obj9 = { billingAddressToken: closure_132_12, analyticsLocation: closure_132_3, bank: p24Bank };
  return closure_133_0(closure_133_3[6]).createPaymentSource(
    closure_133_6.STRIPE,
    paymentMethod.id,
    closure_132_2,
    obj9,
  );
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
  closure_129_0 = await closure_0.submit();
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
let closure_22 = async function _createStripePaymentMethodWithElements(arg0, elements) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_3 = tmp5;
    closure_2 = tmp2;
    closure_130_0 = await closure_0.createPaymentMethod({ elements });
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
  if (null == tmp23) {
    throw dispatchPaymentElementsConfirmationError("Stripe Elements not loaded", true);
  }
  await submitElementsForPaymentElement(tmp23);
  closure_130_2 = await closure_131_21(closure_130_0, closure_130_1);
  return { paymentMethod: closure_130_2.paymentMethod, error: closure_130_2.error };
};
let closure_24 = async function _createExpressCheckoutPaymentMethod(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({
            stripePaymentMethodId: closure_129_0,
            billingAddress: closure_129_1,
            analyticsLocation: closure_129_2,
          } = closure_0);
          closure_129_3 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let obj4 = closure_130_0(closure_130_3[6]);
          c3 = 2;
          c4 = 1;
          const obj2 = { value: obj4.validatePaymentSourceBillingAddress(closure_129_1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_129_3 = value;
        obj = closure_130_0(closure_130_3[6]);
        obj4 = { billingAddressToken: closure_129_3, analyticsLocation: closure_129_2 };
        c4 = 3;
        const obj5 = {
          value: obj.createPaymentSource(closure_130_6.STRIPE, closure_129_0, closure_129_1, obj4),
          done: true,
        };
        return obj5;
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
  let iter = (async (arg0, value) => {
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
              obj = { value, done: true };
              return obj;
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
              ({
                billingAddress: closure_136_2,
                paymentSourceType: closure_136_3,
                lastConfirmedSetupIntentRef: closure_136_4,
                createSetupIntent: closure_136_5,
              } = closure_4);
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
              return { value: "PX_16", done: true };
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
              const obj1 = { value, done: true };
              return obj1;
            } else if (null == closure_136_0) {
              throw closure_137_13("Stripe not loaded", true);
            } else if (null == closure_136_1) {
              throw closure_137_13("Stripe Elements not loaded", true);
            } else {
              let obj18 = closure_137_1(closure_137_3[8]);
              obj18.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
              let obj19 = closure_137_0(closure_137_3[6]);
              c12 = 4;
              c13 = 1;
              const obj2 = { value: obj19.validatePaymentSourceBillingAddress(closure_136_2), done: false };
              return obj2;
            }
            break;
          case 4:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_136_7 = value;
              if (closure_136_3 !== closure_137_10.PAYMENT_REQUEST) {
                c12 = 5;
                c13 = 1;
                const obj4 = { value: closure_137_18(closure_136_1), done: false };
                return obj4;
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
                      const obj5 = { setupIntent, error: "a" };
                      closure_136_10 = obj5;
                      if (
                        (function shouldRecreateSetupIntentForPaymentElement(error) {
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
                        })(closure_136_10.error)
                      ) {
                        if (closure_136_3 !== closure_137_10.PAYMENT_REQUEST) {
                          c12 = 7;
                          c13 = 1;
                          const obj6 = { value: closure_136_5(), done: false };
                          return obj6;
                        }
                      }
                      setupIntent2 = closure_137_17(closure_136_10.setupIntent, closure_136_10.error, (type) => {
                        const intl = dependencyMap(1114).intl;
                        dependencyMap(4885);
                        const obj = { tags: { source: "payment_elements" } };
                        return obj.dispatchConfirmationError(
                          type,
                          true,
                          intl.string(dependencyMap(1114).t.khEaRI),
                          obj,
                        );
                      }).setupIntent;
                      closure_136_4.current = setupIntent2;
                      payment_method = setupIntent2.payment_method;
                      const obj24 = closure_137_0(closure_137_3[6]);
                      const obj7 = {
                        billingAddressToken: closure_136_7,
                        analyticsLocation: closure_136_6,
                        pix: closure_136_8,
                      };
                      const paymentSource = obj24.createPaymentSource(
                        closure_137_6.STRIPE,
                        payment_method,
                        closure_136_2,
                        obj7,
                      );
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
                    const obj8 = { value: closure_137_21(closure_136_0, closure_136_1), done: false };
                    return obj8;
                  } else {
                    const obj9 = { redirect: "if_required", elements: closure_136_1 };
                    c12 = 9;
                    c13 = 1;
                    const obj10 = { value: closure_136_0.confirmSetup(obj9), done: false };
                    return obj10;
                  }
                } else {
                  c12 = 6;
                  c13 = 1;
                  const obj11 = { value: closure_137_21(closure_136_0, closure_136_1), done: false };
                  return obj11;
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
              const obj12 = { value, done: true };
              return obj12;
            }
            break;
          case 6:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj13 = { value, done: true };
              return obj13;
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
                    const obj14 = { taxId: billing_details.tax_id };
                    closure_136_8 = obj14;
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
              const obj15 = { value, done: true };
              return obj15;
            } else {
              client_secret = value.client_secret;
              c12 = 10;
              c13 = 1;
              const obj16 = { value: closure_137_18(closure_136_1), done: false };
              return obj16;
            }
            break;
          case 8:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj17 = { value, done: true };
              return obj17;
            }
            break;
          case 9:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              obj18 = { value, done: true };
              return obj18;
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
              obj19 = { value, done: true };
              return obj19;
            } else {
              obj = { redirect: "if_required", clientSecret: client_secret, elements: closure_136_1 };
              c12 = 11;
              c13 = 1;
              const obj20 = { value: closure_136_0.confirmSetup(obj), done: false };
              return obj20;
            }
            break;
          default:
            if (arg0 === 1) {
              c13 = 3;
              throw value;
            } else if (arg0 === 2) {
              c13 = 3;
              const obj21 = { value, done: true };
              return obj21;
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
let closure_27 = async function _confirmCardPaymentSource(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
              let obj8 = DispatcherDefault;
              obj8.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
              client_secret = null;
              c7 = 1;
              let obj9 = StripeActionCreators;
              c8 = 3;
              c9 = 1;
              const obj1 = { value: obj9.createStripeSetupIntent(), done: false };
              return obj1;
            }
          }
          throw BillingSharedActionCreators.dispatchConfirmationError("Stripe or token not loaded");
        }
      } else if (1 === tmp7) {
        c7 = 0;
        closure_132_9 = closure_6;
        let obj7 = closure_133_0(closure_133_3[6]);
        throw obj7.dispatchConfirmationError(closure_132_9);
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_132_5 = value;
          closure_132_6 = closure_133_2(closure_133_3[11]).parseBillingAddressInfoToStripeBillingDetails(closure_132_2);
          const obj3 = { payment_method: null };
          const obj4 = { card: null, billing_details: null };
          const obj5 = { token: closure_132_1 };
          obj4.card = obj5;
          obj4.billing_details = closure_132_6;
          obj3.payment_method = obj4;
          c8 = 4;
          c9 = 1;
          const obj6 = { value: closure_132_0.confirmCardSetup(client_secret, obj3), done: false };
          return obj6;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          obj7 = { value, done: true };
          return obj7;
        } else {
          client_secret = value.client_secret;
          c7 = 0;
          obj2 = closure_133_0(closure_133_3[6]);
          c8 = 2;
          c9 = 1;
          obj8 = { value: obj2.validatePaymentSourceBillingAddress(closure_132_2), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 3;
        obj9 = { value, done: true };
        return obj9;
      } else {
        closure_132_7 = value;
        setupIntent = closure_133_17(closure_132_7.setupIntent, closure_132_7.error, (type) =>
          closure_1_0(closure_1_3[6]).dispatchConfirmationError(type),
        ).setupIntent;
        const obj15 = closure_133_0(closure_133_3[6]);
        const obj10 = { billingAddressToken: closure_132_5, analyticsLocation: closure_132_3 };
        c9 = 3;
        obj = {
          value: obj15.createPaymentSource(closure_133_6.STRIPE, setupIntent.payment_method, closure_132_2, obj10),
          done: true,
        };
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
  let obj8 = BillingSharedActionCreators;
  closure_132_4 = await obj8.validatePaymentSourceBillingAddress(tmp67);
  const name = closure_132_1.name;
  const line1 = closure_132_1.line1;
  const line2 = closure_132_1.line2;
  const city = closure_132_1.city;
  const state = closure_132_1.state;
  const postalCode = closure_132_1.postalCode;
  const country = closure_132_1.country;
  closure_132_12 = closure_133_9.get(closure_132_2);
  closure_133_1(closure_133_3[9])(null != closure_132_12, "unsupported payment method type");
  let obj3 = { type: closure_132_12, billing_details: null };
  let obj4 = { address: { line1, line2, city, state, postal_code: postalCode, country }, name };
  obj3.billing_details = obj4;
  closure_132_13 = await closure_132_0.createPaymentMethod(obj3);
  const paymentMethod = closure_132_13.paymentMethod;
  const error = closure_132_13.error;
  if (null != error) {
    obj4 = closure_133_0(closure_133_3[6]);
    throw obj4.dispatchConfirmationError(error);
  }
  if (null == paymentMethod) {
    obj3 = closure_133_0(closure_133_3[6]);
    throw obj3.dispatchConfirmationError("stripePaymentMethod not available with successful stripe call");
  }
  obj8 = { billingAddressToken: closure_132_4, analyticsLocation: closure_132_3 };
  return closure_133_0(closure_133_3[6]).createPaymentSource(
    closure_133_6.STRIPE,
    paymentMethod.id,
    closure_132_1,
    obj8,
  );
};
let closure_29 = async function _createAdyenPrepaidPaymentSource() {
  closure_4 = tmp5;
  closure_3 = tmp2;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  closure_131_2 = closure_2;
  closure_131_3 = await BillingSharedActionCreators.validatePaymentSourceBillingAddress(closure_0);
  BillingSharedActionCreators;
  closure_131_4 = { type: closure_132_8.get(closure_131_1) };
  {
    type: closure_132_8.get(closure_131_1);
  }
  const ADYEN = closure_132_6.ADYEN;
  const _JSON = JSON;
  return closure_132_0(closure_132_3[6]).createPaymentSource(ADYEN, JSON.stringify(closure_131_4), closure_131_0, {
    billingAddressToken: closure_131_3,
    analyticsLocation: closure_131_2,
  });
};
let closure_30 = async function _createAdyenVaultablePaymentSource(arg0, value) {
  if (c13 === 2) {
    c13 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          c12 = 2;
          c13 = 1;
          const obj2 = {
            value: closure_137_0(closure_137_3[6]).validatePaymentSourceBillingAddress(closure_136_0),
            done: false,
          };
          return obj2;
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          closure_136_5 = value;
          let obj4 = { type: closure_137_8.get(closure_136_1) };
          let paymentMethod;
          if (closure_136_3 != null) {
            paymentMethod = closure_136_3.paymentMethod;
          }
          closure_5 = paymentMethod;
          if (paymentMethod == null) {
            closure_5 = {};
          }
          const merged = Object.assign(closure_5);
          closure_136_6 = obj4;
          let obj10 = closure_137_0(closure_137_3[6]);
          c12 = 3;
          c13 = 1;
          const obj5 = { value: obj10.popupBridgeState(closure_136_1), done: false };
          return obj5;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          let obj6 = { value, done: true };
          return obj6;
        } else {
          closure_136_7 = value;
          c6 = closure_136_7;
          const aPIBaseURL = closure_137_0(closure_137_3[4]).getAPIBaseURL();
          if (closure_136_7 == null) {
            c6 = "";
          }
          closure_136_8 =
            aPIBaseURL + closure_137_5.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_136_1, c6, "success");
          c10 = 1;
          value = {};
          obj6 = closure_137_0(closure_137_3[6]);
          const ADYEN = closure_137_6.ADYEN;
          const _JSON = JSON;
          const obj7 = {
            billingAddressToken: closure_136_5,
            analyticsLocation: closure_136_2,
            returnUrl: closure_136_8,
          };
          c12 = 5;
          c13 = 1;
          const obj8 = {
            value: obj6.createPaymentSource(ADYEN, JSON.stringify(closure_136_6), closure_136_0, obj7, closure_136_4),
            done: false,
          };
          return obj8;
        }
      } else if (4 === tmp7) {
        c10 = 0;
        closure_136_10 = closure_11;
        if (closure_136_10.code !== closure_137_0(closure_137_3[12]).ErrorCodes.CONFIRMATION_REQUIRED) {
          obj4 = closure_137_1(closure_137_3[8]);
          let code;
          if (closure_136_10 != null) {
            code = closure_136_10.code;
          }
          let message;
          if (closure_136_10 != null) {
            message = closure_136_10.message;
          }
          const obj9 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: null };
          const _HermesInternal = HermesInternal;
          const combined = "Unable to create payment source token: code: " + code + " message: " + message;
          const billingError = new closure_137_0(closure_137_3[13]).BillingError(
            combined,
            closure_137_0(closure_137_3[13]).BillingError.ErrorCodes.UNKNOWN,
          );
          obj9.error = billingError;
          obj4.dispatch(obj9);
          throw closure_136_10;
        } else {
          adyen_redirect_url = closure_136_10.fields.adyen_redirect_url;
          if (null == adyen_redirect_url) {
            obj3 = closure_137_0(closure_137_3[6]);
            throw obj3.dispatchConfirmationError("redirect url cannot be null on a redirect for adyen.");
          } else {
            (function performRedirect(arg0) {
              window.open(arg0);
            })(adyen_redirect_url);
            c13 = 3;
            obj10 = { value: { redirectConfirmation: true }, done: true };
            return obj10;
          }
        }
      } else if (arg0 === 1) {
        c13 = 3;
        throw value;
      } else if (arg0 === 2) {
        c10 = 0;
        c13 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        value.paymentSource = value;
        value.redirectConfirmation = false;
        c10 = 0;
        c13 = 3;
        obj = { value, done: true };
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
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
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
              let obj7 = StripeUtilsAll;
              c4 = 1;
              c5 = 1;
              const obj1 = { value: obj7.getStripe(), done: false };
              return obj1;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_130_1 = value;
            let tmp84 = null;
            if (null == closure_130_1) {
              const billingError = new closure_131_0(closure_131_3[13]).BillingError(
                "Stripe not loaded",
                closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN,
              );
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
              const obj3 = { billing_details: null };
              const obj4 = { address: null, name: null };
              const obj5 = { line1, line2, city, state, postal_code: postalCode, country: country2 };
              obj4.address = obj5;
              obj4.name = name;
              obj3.billing_details = obj4;
              closure_130_11 = obj3;
              type = closure_130_0.type;
              if (closure_131_10.GIROPAY === type) {
                closure_130_11.type = "giropay";
              } else if (closure_131_10.SOFORT === type) {
                closure_130_11.type = "sofort";
                country = country2;
                if (country2 == tmp84) {
                  country = "";
                }
                const obj6 = { country };
                closure_130_11.sofort = obj6;
                closure_130_11.billing_details.email = email;
              } else if (closure_131_10.BANCONTACT === type) {
                closure_130_11.type = "bancontact";
              } else {
                if (closure_131_10.IDEAL === type) {
                  closure_130_11.type = "ideal";
                  obj7 = { bank: closure_130_0.bank };
                  closure_130_11.ideal = obj7;
                } else if (closure_131_10.PRZELEWY24 === type) {
                  if (tmp84 == closure_130_0.bank) {
                    const billingError1 = new closure_131_0(closure_131_3[13]).BillingError(
                      "p24 missing bank information",
                      closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE,
                    );
                    throw billingError1;
                  } else {
                    closure_130_11.type = "p24";
                    const obj8 = { bank: closure_130_0.bank };
                    closure_130_11.p24 = obj8;
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
                  const billingError2 = new closure_131_0(closure_131_3[13]).BillingError(
                    "EPS missing bank information",
                    closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN_PAYMENT_SOURCE,
                  );
                  throw billingError2;
                } else {
                  closure_130_11.type = "eps";
                  const obj9 = { bank: closure_130_0.bank };
                  closure_130_11.eps = obj9;
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
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_130_12 = value;
          paymentMethod2 = closure_130_12.paymentMethod;
          error = closure_130_12.error;
          if (null == error) {
            if (null != paymentMethod2) {
              c5 = 3;
              obj = { value: paymentMethod2.id, done: true };
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
          const billingError3 = new closure_131_0(closure_131_3[13]).BillingError(
            combined,
            closure_131_0(closure_131_3[13]).BillingError.ErrorCodes.UNKNOWN,
          );
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
  closure_129_1 = await StripeUtilsAll.getStripe();
  if (null == closure_129_1) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError("Stripe has not loaded.");
  }
  if (null == closure_129_0) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError("payment intent id cannot be null.");
  }
  closure_129_2 = await (function getClientSecret() {
    const self = this;
    const apply = closure_1_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(closure_129_0);
  closure_129_3 = await closure_129_1.retrievePaymentIntent(closure_129_2);
  const paymentIntent = closure_129_3.paymentIntent;
  const error = closure_129_3.error;
  if (null != error) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError(error);
  }
  if (null == paymentIntent) {
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError(
      "paymentIntent not available with successful stripe call",
    );
  }
  if (null != paymentIntent.last_payment_error) {
    const _HermesInternal = HermesInternal;
    throw closure_130_0(closure_130_3[6]).dispatchConfirmationError(
      "unable to retrieve payment intent " + paymentIntent.last_payment_error,
    );
  }
  return true;
};
let Constants = fn(1074);
({ Endpoints: hasOwnProperty, PaymentGateways: metroRequire, VAULTABLE_PAYMENT_SOURCES: closure_7 } = Constants);
Constants = fn(1085);
({ ADYEN_PAYMENT_SOURCES: closure_8, STRIPE_PAYMENT_SOURCES: closure_9, PaymentSourceTypes } = Constants);
let closure_11 = new LoggerDefault("BillingPaymentGatewayActionCreators.tsx");
let closure_20 = { hasCreatedPaymentMethod: false };
const items = [,];
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
  const obj = { analyticsLocation };
  return obj.createPaymentSource(constants.BRAINTREE, id, arg1, obj);
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
  } else {
    if (map.has(obj.type)) {
      let json = null;
      if (!set.has(obj.type)) {
        value = obj3.get(obj.type);
        if (value == null) {
          value = null;
        }
        obj = { type: value };
        json = JSON.stringify(obj);
      }
    } else {
      const tmp2 = createStripePaymentSourceToken(obj);
    }
    obj3 = map;
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
