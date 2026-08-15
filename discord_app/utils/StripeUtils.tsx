// discord_app/utils/StripeUtils.tsx
import _typeof from "_typeof";
import _slicedToArray from "_slicedToArray";
import _getSystemLocale from "_getSystemLocale";
import ME from "ME";
import { _typeof } from "../../_runtime/metro/04473__typeof.js";
import { initialize } from "../../discord_common/js/packages/flux/index.tsx";

let closure_6;
let error;
const require = arg1;
function getStripe() {
  if (null != closure_2) {
    let resolved = Promise.resolve(closure_2);
  } else {
    const stripe = _typeof.loadStripe(constants.STRIPE.KEY);
    resolved = stripe.then((arg0) => {
      let closure_2 = arg0;
      return arg0;
    });
    const obj = _typeof;
  }
  return resolved;
}
function _authenticatePaymentIntentForPaymentId() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (error2 === 2) {
        error2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          error2 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              error2 = 3;
              throw body;
            } else if (arg0 === 2) {
              error2 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              let callback;
              closure_1 = undefined;
              closure_2 = undefined;
              let error;
              let paymentIntent;
              c5 = undefined;
              error2 = undefined;
              paymentIntent = 1;
              const HTTP = callback(outer1_1[6]).HTTP;
              const obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = error2.BILLING_STRIPE_PAYMENT_INTENTS(callback);
              c5 = 2;
              error2 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            paymentIntent = 0;
            const obj3 = { error: null };
            obj3[0] = error.message;
            error2 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = obj3;
            return obj4;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              error2 = 3;
              throw body;
            } else if (arg0 === 2) {
              paymentIntent = 0;
              error2 = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = body;
              return obj5;
            } else {
              callback = body.body.stripe_payment_intent_client_secret;
              c5 = 3;
              error2 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = callback2();
              return obj6;
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              error2 = 3;
              throw body;
            } else if (arg0 === 2) {
              paymentIntent = 0;
              error2 = 3;
              const obj7 = { value: null, done: true };
              obj7[0] = body;
              return obj7;
            } else {
              closure_1 = body;
              if (null == closure_1) {
                paymentIntent = 0;
                error2 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = { error: "unable to load stripe" };
                return obj8;
              } else {
                c5 = 4;
                error2 = 1;
                const obj9 = { value: null, done: false };
                obj9[0] = closure_1.retrievePaymentIntent(callback);
                return obj9;
              }
            }
          } else if (4 === tmp7) {
            if (arg0 === 1) {
              error2 = 3;
              throw body;
            } else if (arg0 === 2) {
              paymentIntent = 0;
              error2 = 3;
              const obj10 = { value: null, done: true };
              obj10[0] = body;
              return obj10;
            } else {
              closure_2 = body;
              error = closure_2.error;
              paymentIntent = closure_2.paymentIntent;
              if (null != error) {
                const obj11 = { error: null };
                obj11[0] = error.message;
                paymentIntent = 0;
                error2 = 3;
                const obj12 = { value: null, done: true };
                obj12[0] = obj11;
                return obj12;
              } else if (null == paymentIntent) {
                paymentIntent = 0;
                error2 = 3;
                const obj13 = { value: null, done: true };
                obj13[0] = { error: "payment intent does not exist" };
                return obj13;
              } else {
                c5 = {};
                let tmp15 = paymentIntent.status === constants.REQUIRES_PAYMENT_METHOD;
                if (tmp15) {
                  tmp15 = null != paymentIntent.last_payment_error;
                }
                if (tmp15) {
                  tmp15 = null != paymentIntent.last_payment_error.payment_method;
                }
                if (tmp15) {
                  c5.payment_method = paymentIntent.last_payment_error.payment_method.id;
                }
                const status = paymentIntent.status;
                if (constants.REQUIRES_PAYMENT_METHOD !== status) {
                  if (constants.REQUIRES_CONFIRMATION !== status) {
                    if (constants.REQUIRES_ACTION !== status) {
                      if (constants.SUCCEEDED !== status) {
                        if (constants.PROCESSING !== status) {
                          const CANCELED = constants.CANCELED;
                          const obj14 = { error: null };
                          const _HermesInternal = HermesInternal;
                          obj14[0] = "Invalid Payment Intent status: " + paymentIntent.status;
                          paymentIntent = 0;
                          error2 = 3;
                          const obj15 = { value: null, done: true };
                          obj15[0] = obj14;
                          return obj15;
                        }
                      }
                      paymentIntent = 0;
                      error2 = 3;
                      const obj16 = { value: null, done: true };
                      obj16[0] = {};
                      return obj16;
                    }
                  }
                }
                c5 = 5;
                error2 = 1;
                const obj17 = { value: null, done: false };
                obj17[0] = closure_1.confirmCardPayment(callback, c5);
                return obj17;
              }
            }
          } else if (arg0 === 1) {
            error2 = 3;
            throw body;
          } else if (arg0 === 2) {
            paymentIntent = 0;
            error2 = 3;
            const obj18 = { value: null, done: true };
            obj18[0] = body;
            return obj18;
          } else {
            error2 = body.error;
            if (null != error2) {
              const obj19 = { error: null };
              obj19[0] = error2.message;
            } else {
              obj = {};
            }
            paymentIntent = 0;
            error2 = 3;
          }
        } catch (tmp47) {
          error = tmp47;
          if (tmp4 === paymentIntent) {
            error2 = tmp2;
            throw tmp47;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  const _authenticatePaymentIntentForPaymentId = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Endpoints: closure_6, PaymentSettings: error } = ME);
const metroImportAll = new require("ME")("StripeUtils");
let closure_9 = { REQUIRES_PAYMENT_METHOD: "requires_payment_method", REQUIRES_CONFIRMATION: "requires_confirmation", REQUIRES_ACTION: "requires_action", PROCESSING: "processing", CANCELED: "canceled", SUCCEEDED: "succeeded" };
let closure_12 = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
let tmp3 = new require("ME")("StripeUtils");
const result = require("_getSystemLocale").fileFinishedImporting("utils/StripeUtils.tsx");

export const validateExpiry = function validateExpiry(arg0) {
  let tmp4;
  let tmp5;
  try {
    [tmp4, tmp5] = callback2((function parseExpString(str) {
      let tmp5;
      let tmp6;
      let closure_0 = str;
      const parts = str.split(/[.\-/\s]+/g);
      if (2 !== parts.length) {
        let _HermesInternal = HermesInternal;
        let combined = "You passed an invalid expiration date " + str + "" + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
      }
      const mapped = parts.map((joined) => {
        const parsed = parseInt(joined);
        if (isNaN(parsed)) {
          const _HermesInternal = HermesInternal;
          let str3 = "" + parts + " is not a number.";
          if (str3 == null) {
            str3 = "";
          }
          const _HermesInternal2 = HermesInternal;
          const combined = "You passed an invalid expiration date " + closure_0 + str3 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
          const tmp3 = closure_0;
        }
        if (parsed < 1) {
          const _HermesInternal3 = HermesInternal;
          const combined1 = "" + parsed + " is less than one.";
          let str8 = combined1;
          if (combined1 == null) {
            str8 = "";
          }
          const _HermesInternal4 = HermesInternal;
          const combined2 = "You passed an invalid expiration date " + closure_0 + str8 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
          const tmp7 = closure_0;
        }
        return parsed;
      });
      if (mapped[0] > 12) {
        const items = [, ];
        [arr3[1], arr3[0]] = mapped;
        let items1 = items;
      } else {
        items1 = [, ];
        [arr2[0], arr2[1]] = mapped;
      }
      [tmp5, tmp6] = callback(items1, 2);
      if (tmp5 > 12) {
        let _HermesInternal2 = HermesInternal;
        let str6 = "Month must be a number 1-12, not " + tmp5 + ".";
        if (str6 == null) {
          str6 = "";
        }
        let _HermesInternal3 = HermesInternal;
        let combined1 = "You passed an invalid expiration date " + str + str6 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
      }
      let sum = tmp6;
      if (tmp6 < 100) {
        sum = tmp6 + 2000;
      }
      const items2 = [tmp5, sum];
      return items2;
    })(arg0), 2);
    const _Date = Date;
    const date = new Date(tmp5, tmp4);
    const _Date2 = Date;
    const date1 = new Date();
    date.setMonth(date.getMonth() - 1);
    date.setMonth(date.getMonth() + 1, 1);
    return date > date1;
  } catch (err) {
    return false;
  }
};
export { getStripe };
export const getStripeClientMode = function getStripeClientMode() {
  if (null == constants.STRIPE.KEY) {
    tmp3.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", tmp.STRIPE.KEY);
    let str2 = "unknown";
  } else {
    const KEY = tmp.STRIPE.KEY;
    str2 = "live";
    if (!KEY.startsWith("pk_live")) {
      const KEY2 = tmp.STRIPE.KEY;
      let str4 = "test";
      if (!KEY2.startsWith("pk_test")) {
        tmp3.warn("Unexpected value for Stripe public key: ", tmp.STRIPE.KEY);
        str4 = "unknown";
      }
      str2 = str4;
    }
  }
  return str2;
};
export const parseStripePaymentMethod = function parseStripePaymentMethod(billing_details) {
  billing_details = billing_details.billing_details;
  let address = billing_details.address;
  if (address == null) {
    address = {};
  }
  let str = billing_details.name;
  if (str == null) {
    str = "";
  }
  let obj = { name: str, line1: null, line2: null, city: null, state: null, country: null, postalCode: null };
  let str2 = address.line1;
  if (str2 == null) {
    str2 = "";
  }
  obj[1] = str2;
  let str3 = address.line2;
  if (str3 == null) {
    str3 = "";
  }
  obj[2] = str3;
  let str4 = address.city;
  if (str4 == null) {
    str4 = "";
  }
  obj[3] = str4;
  let str5 = address.state;
  if (str5 == null) {
    str5 = "";
  }
  obj[4] = str5;
  let str6 = address.country;
  if (str6 == null) {
    str6 = "";
  }
  obj[5] = str6;
  let str7 = address.postal_code;
  if (str7 == null) {
    str7 = "";
  }
  obj[6] = str7;
  obj = { token: billing_details.id, billingAddressInfo: obj };
  return obj;
};
export const parseBillingAddressInfoToStripeBillingDetails = function parseBillingAddressInfoToStripeBillingDetails(closure_2) {
  obj = { name: closure_2.name, address: obj };
  obj = { line1: closure_2.line1, line2: closure_2.line2, city: closure_2.city, state: closure_2.state, postal_code: closure_2.postalCode, country: closure_2.country };
  return obj;
};
export const authenticatePaymentIntentForPaymentId = function authenticatePaymentIntentForPaymentId() {
  const self = this;
  const apply = _authenticatePaymentIntentForPaymentId.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getStripeElementLocale = function getStripeElementLocale(arg0) {
  let tmp = table[arg0];
  if (tmp == null) {
    tmp = arg0;
  }
  return tmp;
};
export const useStripeLocale = function useStripeLocale() {
  const items = [_getSystemLocale];
  return initialize.useStateFromStores(items, () => {
    locale = locale.locale;
    let tmp = table[locale];
    if (tmp == null) {
      tmp = locale;
    }
    return tmp;
  });
};