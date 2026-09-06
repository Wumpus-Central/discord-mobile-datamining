// discord_app/utils/StripeUtils.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import initialize from "../../discord_common/js/packages/flux/index.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _mod4891 from "../../_runtime/metro/04891__.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import LocaleStore from "../modules/user_settings/LocaleStore.tsx";

require = fn;
function getStripe() {
  if (null != React2) {
    let resolved = Promise.resolve(React2);
  } else {
    const stripe = _mod4891.loadStripe(constants.STRIPE.KEY);
    resolved = stripe.then((result) => {
      closure_2 = result;
      return result;
    });
  }
  return resolved;
}
let closure_11 = async function _authenticatePaymentIntentForPaymentId(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          let error;
          let paymentIntent;
          closure_129_5 = undefined;
          let error2;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: timestampProducer.BILLING_STRIPE_PAYMENT_INTENTS(closure_0),
            oldFormErrors: true,
            rejectWithError: false,
          };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        const obj3 = { error: tmp47.message };
        c6 = 3;
        const obj4 = { value: obj3, done: true };
        return obj4;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_129_0 = value.body.stripe_payment_intent_client_secret;
          c5 = 3;
          c6 = 1;
          const obj6 = { value: closure_130_10(), done: false };
          return obj6;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_129_1 = value;
          if (null == closure_129_1) {
            c4 = 0;
            c6 = 3;
            const obj8 = { value: { error: "unable to load stripe" }, done: true };
            return obj8;
          } else {
            c5 = 4;
            c6 = 1;
            const obj9 = { value: closure_129_1.retrievePaymentIntent(closure_129_0), done: false };
            return obj9;
          }
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          closure_129_2 = value;
          error = closure_129_2.error;
          paymentIntent = closure_129_2.paymentIntent;
          if (null != error) {
            const obj11 = { error: error.message };
            c4 = 0;
            c6 = 3;
            const obj12 = { value: obj11, done: true };
            return obj12;
          } else if (null == paymentIntent) {
            c4 = 0;
            c6 = 3;
            const obj13 = { value: { error: "payment intent does not exist" }, done: true };
            return obj13;
          } else {
            closure_129_5 = {};
            let tmp15 = paymentIntent.status === closure_130_9.REQUIRES_PAYMENT_METHOD;
            if (tmp15) {
              tmp15 = null != paymentIntent.last_payment_error;
            }
            if (tmp15) {
              tmp15 = null != paymentIntent.last_payment_error.payment_method;
            }
            if (tmp15) {
              closure_129_5.payment_method = paymentIntent.last_payment_error.payment_method.id;
            }
            const status = paymentIntent.status;
            if (closure_130_9.REQUIRES_PAYMENT_METHOD !== status) {
              if (closure_130_9.REQUIRES_CONFIRMATION !== status) {
                if (closure_130_9.REQUIRES_ACTION !== status) {
                  if (closure_130_9.SUCCEEDED !== status) {
                    if (closure_130_9.PROCESSING !== status) {
                      const CANCELED = closure_130_9.CANCELED;
                      const obj14 = { error: null };
                      const _HermesInternal = HermesInternal;
                      obj14.error = "Invalid Payment Intent status: " + paymentIntent.status;
                      c4 = 0;
                      c6 = 3;
                      const obj15 = { value: obj14, done: true };
                      return obj15;
                    }
                  }
                  c4 = 0;
                  c6 = 3;
                  const obj16 = { value: {}, done: true };
                  return obj16;
                }
              }
            }
            c5 = 5;
            c6 = 1;
            const obj17 = { value: closure_129_1.confirmCardPayment(closure_129_0, closure_129_5), done: false };
            return obj17;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj18 = { value, done: true };
        return obj18;
      } else {
        error2 = value.error;
        if (null != error2) {
          const obj19 = { error: error2.message };
        } else {
          obj = {};
        }
        c4 = 0;
        c6 = 3;
      }
    } catch (tmp47) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp47;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ Endpoints: metroRequire, PaymentSettings: closure_7 } = Constants);
const logger = new LoggerDefault("StripeUtils");
let closure_9 = {
  REQUIRES_PAYMENT_METHOD: "requires_payment_method",
  REQUIRES_CONFIRMATION: "requires_confirmation",
  REQUIRES_ACTION: "requires_action",
  PROCESSING: "processing",
  CANCELED: "canceled",
  SUCCEEDED: "succeeded",
};
let closure_12 = { "en-US": "en", "zh-CN": "zh", "sv-SE": "sv" };
const size = fn(2);
const result = size.fileFinishedImporting("utils/StripeUtils.tsx");

export const validateExpiry = function validateExpiry(arg0) {
  try {
    [tmp4, tmp5] = _slicedToArray(
      (function parseExpString(str) {
        closure_0 = str;
        const parts = str.split(/[.\-/\s]+/g);
        if (2 !== parts.length) {
          let _HermesInternal = HermesInternal;
          let combined =
            "You passed an invalid expiration date " +
            str +
            "" +
            "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
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
            const combined =
              "You passed an invalid expiration date " +
              closure_0 +
              str3 +
              "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
          }
          if (parsed < 1) {
            const _HermesInternal3 = HermesInternal;
            const combined1 = "" + parsed + " is less than one.";
            let str8 = combined1;
            if (combined1 == null) {
              str8 = "";
            }
            const _HermesInternal4 = HermesInternal;
            const combined2 =
              "You passed an invalid expiration date " +
              closure_0 +
              str8 +
              "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
          }
          return parsed;
        });
        if (mapped[0] > 12) {
          const items = [,];
          [arr3[1], arr3[0]] = mapped;
          let items1 = items;
        } else {
          items1 = [,];
          [arr2[0], arr2[1]] = mapped;
        }
        [tmp5, tmp6] = _slicedToArray(items1, 2);
        if (tmp5 > 12) {
          let _HermesInternal2 = HermesInternal;
          let str6 = "Month must be a number 1-12, not " + tmp5 + ".";
          if (str6 == null) {
            str6 = "";
          }
          let _HermesInternal3 = HermesInternal;
          let combined1 =
            "You passed an invalid expiration date " +
            str +
            str6 +
            "Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`";
        }
        let sum = tmp6;
        if (tmp6 < 100) {
          sum = tmp6 + 2000;
        }
        const items2 = [tmp5, sum];
        return items2;
      })(arg0),
      2,
    );
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
  obj = { token: billing_details.id, billingAddressInfo: obj };
  return obj;
};
export const parseBillingAddressInfoToStripeBillingDetails = function parseBillingAddressInfoToStripeBillingDetails(
  name,
) {
  return {
    name: name.name,
    address: {
      line1: name.line1,
      line2: name.line2,
      city: name.city,
      state: name.state,
      postal_code: name.postalCode,
      country: name.country,
    },
  };
};
export const authenticatePaymentIntentForPaymentId = function authenticatePaymentIntentForPaymentId() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getStripeElementLocale = function getStripeElementLocale(arg0) {
  let tmp = closure_12[arg0];
  if (tmp == null) {
    tmp = arg0;
  }
  return tmp;
};
export const useStripeLocale = function useStripeLocale() {
  const items = [LocaleStore];
  return initialize.useStateFromStores(items, () => {
    locale = locale.locale;
    let tmp = closure_1_12[locale];
    if (tmp == null) {
      tmp = locale;
    }
    return tmp;
  });
};
