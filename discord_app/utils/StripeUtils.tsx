// === Module 5419: StripeUtils ===

// Module 5419 (StripeUtils)
import LoggerDefault from "Logger" /* 3 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _mod5420 from "module_5420" /* 5420 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c5, c6, locale;

let metroImportDefault;
let metroRequire;
function getStripe() {
  let resolved;
  if (null != React2) {
    resolved = Promise.resolve(React2);
  } else {
    obj = _mod5420;
    const stripe = obj.loadStripe(metroImportDefault.STRIPE.KEY);
    resolved = stripe.then((result) => {
      let closure_1_2 = result;
      return result;
    });
  }
  return resolved;
}
let obj = function _authenticatePaymentIntentForPaymentId() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    let message;
    let value;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let closure_1;
        let tmp;
        let paymentIntent;
        let closure_5;
        let error;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            closure_1 = undefined;
            tmp = undefined;
            paymentIntent = undefined;
            closure_5 = undefined;
            error = undefined;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: metroRequire.BILLING_STRIPE_PAYMENT_INTENTS(closure_0), oldFormErrors: true, rejectWithError: false };
            const get = HTTP.get;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          const obj6 = { error: message.message };
          c6 = 3;
          const obj7 = { value: obj6, done: true };
          return obj7;
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_0 = value.body.stripe_payment_intent_client_secret;
            c5 = 3;
            c6 = 1;
            const obj9 = { value: closure_130_10(), done: false };
            return obj9;
          }
        } else if (3 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_1 = value;
            if (null == closure_1) {
              c4 = 0;
              c6 = 3;
              const obj11 = { value: { error: "unable to load stripe" }, done: true };
              return obj11;
            } else {
              c5 = 4;
              c6 = 1;
              const obj12 = { value: closure_1.retrievePaymentIntent(closure_0), done: false };
              return obj12;
            }
          }
        } else if (4 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            tmp = value;
            error = tmp.error;
            paymentIntent = tmp.paymentIntent;
            if (null != error) {
              const obj14 = { error: error.message };
              c4 = 0;
              c6 = 3;
              const obj15 = { value: obj14, done: true };
              return obj15;
            } else if (null == paymentIntent) {
              c4 = 0;
              c6 = 3;
              const obj16 = { value: { error: "payment intent does not exist" }, done: true };
              return obj16;
            } else {
              closure_5 = {};
              const tmp11 = paymentIntent.status === closure_130_9.REQUIRES_PAYMENT_METHOD && null != paymentIntent.last_payment_error && null != paymentIntent.last_payment_error.payment_method;
              if (tmp11) {
                closure_5.payment_method = paymentIntent.last_payment_error.payment_method.id;
              }
              const status = paymentIntent.status;
              if (closure_130_9.REQUIRES_PAYMENT_METHOD !== status) {
                if (closure_130_9.REQUIRES_CONFIRMATION !== status) {
                  if (closure_130_9.REQUIRES_ACTION !== status) {
                    if (closure_130_9.SUCCEEDED !== status) {
                      if (closure_130_9.PROCESSING !== status) {
                        const CANCELED = closure_130_9.CANCELED;
                        const obj17 = { error: "Invalid Payment Intent status: " + paymentIntent.status };
                        const _HermesInternal = HermesInternal;
                        c4 = 0;
                        c6 = 3;
                        const obj18 = { value: obj17, done: true };
                        return obj18;
                      }
                    }
                    c4 = 0;
                    c6 = 3;
                    const obj19 = { value: {}, done: true };
                    return obj19;
                  }
                }
              }
              c5 = 5;
              c6 = 1;
              const obj20 = { value: closure_1.confirmCardPayment(closure_0, closure_5), done: false };
              return obj20;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj21 = { value, done: true };
          return obj21;
        } else {
          error = value.error;
          if (null != error) {
            const obj22 = { error: error.message };
            value = obj22;
          } else {
            value = {};
          }
          c4 = 0;
          c6 = 3;
          const obj23 = { value, done: true };
          return obj23;
        }
      } catch (tmp43) {
        message = tmp43;
        if (0 === c4) {
          c6 = 3;
          throw tmp43;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ Endpoints: metroRequire, PaymentSettings: metroImportDefault } = Constants);
const tmp3 = new LoggerDefault("StripeUtils");
const logger = tmp3;
let closure_9 = { REQUIRES_PAYMENT_METHOD: "requires_payment_method", REQUIRES_CONFIRMATION: "requires_confirmation", REQUIRES_ACTION: "requires_action", PROCESSING: "processing", CANCELED: "canceled", SUCCEEDED: "succeeded" };
let closure_12 = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocaleStore];
    const fn = function t() {
      locale = locale.locale;
      let tmp = closure_1_12[locale];
      if (tmp == null) {
        tmp = locale;
      }
      return tmp;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  const items = [LocaleStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    locale = locale.locale;
    let tmp = closure_1_12[locale];
    if (tmp == null) {
      tmp = locale;
    }
    return tmp;
  });
});
function getStripeElementLocale(arg0) {
  let tmp = closure_12[arg0];
  if (tmp == null) {
    tmp = arg0;
  }
  return tmp;
}
const result = size.fileFinishedImporting("utils/StripeUtils.tsx");

export const validateExpiry = function validateExpiry(arg0) {
  let tmp4;
  let tmp5;
  function parseExpString(str) {
    let items1;
    let tmp5;
    let tmp6;
    let closure_0 = str;
    const parts = str.split(/[.\-/\s]+/g);
    if (2 !== parts.length) {
      let _HermesInternal = HermesInternal;
      let str3 = "You passed an invalid expiration date ";
      let combined = "You passed an invalid expiration date " + str + "" + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
    }
    const mapped = parts.map((item) => {
      const parsed = parseInt(item);
      if (isNaN(parsed)) {
        const _HermesInternal = HermesInternal;
        let str3 = "" + parts + " is not a number.";
        if (str3 == null) {
          str3 = "";
        }
        const _HermesInternal2 = HermesInternal;
        const combined = "You passed an invalid expiration date " + closure_0 + str3 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
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
      }
      return parsed;
    });
    if (mapped[0] > 12) {
      const items = [, ];
      [arr3[1], arr3[0]] = mapped;
      items1 = items;
    } else {
      items1 = [, ];
      [arr2[0], arr2[1]] = mapped;
    }
    [tmp5, tmp6] = _slicedToArray(items1, 2);
    const tmp4 = _slicedToArray(items1, 2);
    if (tmp5 > 12) {
      let _HermesInternal2 = HermesInternal;
      let str6 = "Month must be a number 1-12, not " + tmp5 + ".";
      if (str6 == null) {
        str6 = "";
      }
      let _HermesInternal3 = HermesInternal;
      let str8 = "You passed an invalid expiration date ";
      let combined1 = "You passed an invalid expiration date " + str + str6 + "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
    }
    let sum = tmp6;
    if (tmp6 < 100) {
      sum = tmp6 + 2000;
    }
    const items2 = [tmp5, sum];
    return items2;
  }
  try {
    [tmp4, tmp5] = parseExpString(arg0);
    const tmp6 = globalThis;
    const _Date = Date;
    const self = this;
    const self2 = this;
    _slicedToArray(parseExpString(arg0), 2);
    const date = new Date(tmp5, tmp4);
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
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
  let str2;
  if (null == metroImportDefault.STRIPE.KEY) {
    logger.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", metroImportDefault.STRIPE.KEY);
    str2 = "unknown";
  } else {
    const KEY = metroImportDefault.STRIPE.KEY;
    str2 = "live";
    if (!KEY.startsWith("pk_live")) {
      const KEY2 = metroImportDefault.STRIPE.KEY;
      let str4 = "test";
      if (!KEY2.startsWith("pk_test")) {
        logger.warn("Unexpected value for Stripe public key: ", metroImportDefault.STRIPE.KEY);
        str4 = "unknown";
      }
      str2 = str4;
    }
  }
  return str2;
};
export const parseStripePaymentMethod = function parseStripePaymentMethod(billing_details) {
  let str2;
  let str3;
  let str4;
  let str5;
  let str6;
  let str7;
  billing_details = billing_details.billing_details;
  let address = billing_details.address;
  if (address == null) {
    address = {};
  }
  let str = billing_details.name;
  if (str == null) {
    str = "";
  }
  const billingAddressInfo = { name: str, line1: str2, line2: str3, city: str4, state: str5, country: str6, postalCode: str7 };
  str2 = address.line1;
  if (str2 == null) {
    str2 = "";
  }
  str3 = address.line2;
  if (str3 == null) {
    str3 = "";
  }
  str4 = address.city;
  if (str4 == null) {
    str4 = "";
  }
  str5 = address.state;
  if (str5 == null) {
    str5 = "";
  }
  str6 = address.country;
  if (str6 == null) {
    str6 = "";
  }
  str7 = address.postal_code;
  if (str7 == null) {
    str7 = "";
  }
  return { token: billing_details.id, billingAddressInfo };
};
export const parseBillingAddressInfoToStripeBillingDetails = function parseBillingAddressInfoToStripeBillingDetails(name) {
  return { name: name.name, address: { line1: name.line1, line2: name.line2, city: name.city, state: name.state, postal_code: name.postalCode, country: name.country } };
};
export const authenticatePaymentIntentForPaymentId = function authenticatePaymentIntentForPaymentId() {
  return obj(...arguments);
};
export { getStripeElementLocale };
export const useStripeLocale = tmp4;