// === Module 6718: StripeUtils ===

// Module 6718 (StripeUtils)
import LoggerDefault from "Logger" /* 3 */;
import initialize from "initialize" /* 504 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import LocaleStore from "LocaleStore" /* 2186 */;

require = fn;
function getStripe(payment_gateway_merchant_account_id) {
  let tmp = (function resolveStripePublishableKey(payment_gateway_merchant_account_id) {
    let tmp = null;
    if (null != payment_gateway_merchant_account_id) {
      let tmp4;
      const KEYS_BY_MERCHANT_ACCOUNT_ID = closure_0(6719).StripePaymentSettings.KEYS_BY_MERCHANT_ACCOUNT_ID;
      if (KEYS_BY_MERCHANT_ACCOUNT_ID != null) {
        tmp4 = KEYS_BY_MERCHANT_ACCOUNT_ID[payment_gateway_merchant_account_id];
      }
      tmp = tmp4;
    }
    if (typeof payment_gateway_merchant_account_id === "string") {
      if ("" !== payment_gateway_merchant_account_id) {
        if (typeof tmp !== "string") {
          if (!set.has(payment_gateway_merchant_account_id)) {
            set.add(payment_gateway_merchant_account_id);
            try {
              const obj2 = { tags: null };
              const obj3 = { app_context: "billing", billing_context: "stripe_publishable_key", payment_gateway_merchant_account_id, build_environment: null };
              const _window = window;
              obj3.build_environment = window.GLOBAL_ENV.PROJECT_ENV;
              obj2.tags = obj3;
              closure_1(1242).captureMessage("Stripe publishable key missing for merchant account", obj2, "warning");
              const obj = closure_1(1242);
            } catch (err) {
            }
          }
        }
      }
    }
    if (typeof tmp !== "string") {
      let str3 = constants.STRIPE.KEY;
      if (str3 == null) {
        str3 = "";
      }
      tmp = str3;
    }
    return tmp;
  })(payment_gateway_merchant_account_id);
  _require = tmp;
  value = map.get(tmp);
  if (null != value) {
    return value;
  } else {
    closure_1 = require("module_6720").loadStripe(tmp);
    const tmp6 = (async () => {
      if (c5 === 2) {
        c5 = 3;
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
              value = tmp3;
              closure_0 = tmp7;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj4 = { value, done: false };
              return obj4;
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = closure_2;
            set.delete(closure_129_0);
            throw closure_128_0;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp16) {
          closure_2 = tmp16;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp16;
          } else {
            c4 = tmp;
          }
        }
      }
    })();
    const result = map.set(tmp, tmp6);
    return tmp6;
  }
}
function fetchStripePaymentIntentInfo() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _fetchStripePaymentIntentInfo() {
  closure_3 = tmp4;
  const HTTP = require("HTTPUtils").HTTP;
  await HTTP.get({ url: closure_2_6.BILLING_STRIPE_PAYMENT_INTENTS(closure_0), oldFormErrors: true, rejectWithError: true });
  const body = value.body;
  const obj7 = { clientSecret: body.stripe_payment_intent_client_secret, paymentMethodId: null, merchantAccountId: null };
  const stripe_payment_intent_payment_method_id = body.stripe_payment_intent_payment_method_id;
  let paymentMethodId = stripe_payment_intent_payment_method_id;
  if (stripe_payment_intent_payment_method_id == null) {
    paymentMethodId = null;
  }
  obj7.paymentMethodId = paymentMethodId;
  const payment_gateway_merchant_account_id = body.payment_gateway_merchant_account_id;
  let merchantAccountId = payment_gateway_merchant_account_id;
  if (payment_gateway_merchant_account_id == null) {
    merchantAccountId = null;
  }
  obj7.merchantAccountId = merchantAccountId;
  return obj7;
};
let closure_15 = async function _authenticatePaymentIntentForPaymentId(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          let clientSecret;
          let merchantAccountId;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          let error;
          let paymentIntent;
          closure_129_7 = undefined;
          let error2;
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj4 = { value: fetchStripePaymentIntentInfo(closure_0), done: false };
          return obj4;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        const obj5 = { error: tmp52.message };
        c6 = 3;
        const obj6 = { value: obj5, done: true };
        return obj6;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_129_0 = value;
          clientSecret = closure_129_0.clientSecret;
          merchantAccountId = closure_129_0.merchantAccountId;
          c5 = 3;
          c6 = 1;
          const obj8 = { value: closure_130_12(merchantAccountId), done: false };
          return obj8;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_129_3 = value;
          if (null == closure_129_3) {
            c4 = 0;
            c6 = 3;
            const obj10 = { value: { error: "unable to load stripe" }, done: true };
            return obj10;
          } else {
            c5 = 4;
            c6 = 1;
            const obj11 = { value: closure_129_3.retrievePaymentIntent(clientSecret), done: false };
            return obj11;
          }
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_129_4 = value;
          error = closure_129_4.error;
          paymentIntent = closure_129_4.paymentIntent;
          if (null != error) {
            const obj13 = { error: error.message };
            c4 = 0;
            c6 = 3;
            const obj14 = { value: obj13, done: true };
            return obj14;
          } else if (null == paymentIntent) {
            c4 = 0;
            c6 = 3;
            const obj15 = { value: { error: "payment intent does not exist" }, done: true };
            return obj15;
          } else {
            closure_129_7 = {};
            let tmp15 = paymentIntent.status === closure_130_11.REQUIRES_PAYMENT_METHOD;
            if (tmp15) {
              tmp15 = null != paymentIntent.last_payment_error;
            }
            if (tmp15) {
              tmp15 = null != paymentIntent.last_payment_error.payment_method;
            }
            if (tmp15) {
              closure_129_7.payment_method = paymentIntent.last_payment_error.payment_method.id;
            }
            const status = paymentIntent.status;
            if (closure_130_11.REQUIRES_PAYMENT_METHOD !== status) {
              if (closure_130_11.REQUIRES_CONFIRMATION !== status) {
                if (closure_130_11.REQUIRES_ACTION !== status) {
                  if (closure_130_11.SUCCEEDED !== status) {
                    if (closure_130_11.PROCESSING !== status) {
                      const CANCELED = closure_130_11.CANCELED;
                      const obj16 = { error: null };
                      const _HermesInternal = HermesInternal;
                      obj16.error = "Invalid Payment Intent status: " + paymentIntent.status;
                      c4 = 0;
                      c6 = 3;
                      const obj17 = { value: obj16, done: true };
                      return obj17;
                    }
                  }
                  c4 = 0;
                  c6 = 3;
                  const obj18 = { value: {}, done: true };
                  return obj18;
                }
              }
            }
            c5 = 5;
            c6 = 1;
            const obj19 = { value: closure_129_3.confirmCardPayment(clientSecret, closure_129_7), done: false };
            return obj19;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj20 = { value, done: true };
        return obj20;
      } else {
        error2 = value.error;
        if (null != error2) {
          const obj21 = { error: error2.message };
        }
        c4 = 0;
        c6 = 3;
      }
    } catch (tmp52) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp52;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1072);
({ Endpoints: closure_6, PaymentSettings: metroImportDefault } = Constants);
const logger = new LoggerDefault("StripeUtils");
const map = new Map();
const set = new Set();
let closure_11 = { REQUIRES_PAYMENT_METHOD: "requires_payment_method", REQUIRES_CONFIRMATION: "requires_confirmation", REQUIRES_ACTION: "requires_action", PROCESSING: "processing", CANCELED: "canceled", SUCCEEDED: "succeeded" };
let closure_16 = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
const size = fn(2);
let result = size.fileFinishedImporting("utils/StripeUtils.tsx");

export function validateExpiry(arg0) {
  try {
    [tmp4, tmp5] = (function parseExpString(str) {
      closure_0 = str;
      const parts = str.split(/[.\-/\s]+/g);
      if (2 !== parts.length) {
        let _HermesInternal = HermesInternal;
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
        items = [, ];
        [arr3[1], arr3[0]] = mapped;
        let items1 = items;
      } else {
        items1 = [, ];
        [arr2[0], arr2[1]] = mapped;
      }
      [tmp5, tmp6] = items1;
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
    })(arg0);
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
}
export { getStripe };
export { fetchStripePaymentIntentInfo };
export function getStripeClientMode() {
  if (null == constants.STRIPE.KEY) {
    logger.warn("getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ", constants.STRIPE.KEY);
    let str2 = "unknown";
  } else {
    const KEY = constants.STRIPE.KEY;
    str2 = "live";
    if (!KEY.startsWith("pk_live")) {
      const KEY2 = constants.STRIPE.KEY;
      let str4 = "test";
      if (!KEY2.startsWith("pk_test")) {
        logger.warn("Unexpected value for Stripe public key: ", constants.STRIPE.KEY);
        str4 = "unknown";
      }
      str2 = str4;
    }
  }
  return str2;
}
export function parseStripePaymentMethod(billing_details) {
  billing_details = billing_details.billing_details;
  let address = billing_details.address;
  if (address == null) {
    address = {};
  }
  let str = billing_details.name;
  if (str == null) {
    str = "";
  }
  const obj = { name: str, line1: null, line2: null, city: null, state: null, country: null, postalCode: null };
  let str2 = address.line1;
  if (str2 == null) {
    str2 = "";
  }
  obj.line1 = str2;
  let str3 = address.line2;
  if (str3 == null) {
    str3 = "";
  }
  obj.line2 = str3;
  let str4 = address.city;
  if (str4 == null) {
    str4 = "";
  }
  obj.city = str4;
  let str5 = address.state;
  if (str5 == null) {
    str5 = "";
  }
  obj.state = str5;
  let str6 = address.country;
  if (str6 == null) {
    str6 = "";
  }
  obj.country = str6;
  let str7 = address.postal_code;
  if (str7 == null) {
    str7 = "";
  }
  obj.postalCode = str7;
  return { token: billing_details.id, billingAddressInfo: obj };
}
export function parseBillingAddressInfoToStripeBillingDetails(name) {
  return { name: name.name, address: { line1: name.line1, line2: name.line2, city: name.city, state: name.state, postal_code: name.postalCode, country: name.country } };
}
export function authenticatePaymentIntentForPaymentId() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function getStripeElementLocale(arg0) {
  let tmp = closure_16[arg0];
  if (tmp == null) {
    tmp = arg0;
  }
  return tmp;
}
export function useStripeLocale() {
  items = [LocaleStore];
  return initialize.useStateFromStores(items, () => {
    locale = locale.locale;
    let tmp = closure_1_16[locale];
    if (tmp == null) {
      tmp = locale;
    }
    return tmp;
  });
}