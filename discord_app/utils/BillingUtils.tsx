// === Module 5055: BillingUtils ===

// Module 5055 (BillingUtils)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import BraintreeUtils from "BraintreeUtils" /* 5057 */;
import BillingErrorDefault from "BillingError" /* 5063 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_6 = async function _createGatewayCheckoutContext(arg0) {
  let paymentGateway = arg0;
  c2 = 0;
  c3 = 0;
  return (async (arg0) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp2;
            closure_129_1 = undefined;
            closure_129_0 = null;
            if (null != paymentGateway) {
              if (paymentGateway.paymentGateway === constants.BRAINTREE) {
                c2 = 1;
                c3 = 1;
                const obj5 = { value: BraintreeUtils.collectDeviceData(), done: false };
                return obj5;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_1 = value;
          if (null != closure_129_1) {
            const obj6 = { braintree_device_data: closure_129_1 };
            closure_129_0 = obj6;
          }
        }
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
const StripeErrorTypes = fn(5056).StripeErrorTypes;
const PaymentGateways = fn(1083).PaymentGateways;
const set = new Set(["card_error", "api_connection_error", "validation_error"]);
const size = fn(2);
const result = size.fileFinishedImporting("utils/BillingUtils.tsx");

export function getLocalizedDisplayMonth(arg0, arg1) {
  const date = new Date();
  date.setMonth(arg0 - 1);
  return date.toLocaleString(arg1, { month: "short" });
}
export function createGatewayCheckoutContext() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function captureBillingException(error, merged) {
  const obj2 = {};
  merged = Object.assign(merged);
  let tags;
  if (merged != null) {
    tags = merged.tags;
  }
  const obj3 = {};
  const merged1 = Object.assign(tags);
  obj3.app_context = "billing";
  obj2.tags = obj3;
  SentryUtilsDefault.captureException(error, obj2);
}
export function isExpectedHttpClientError(status) {
  let tmp2 = status instanceof HTTPUtils.HTTPResponseError;
  if (tmp2) {
    tmp2 = status.status >= 400;
  }
  if (tmp2) {
    tmp2 = status.status < 500;
  }
  if (!tmp2) {
    let tmp4 = status instanceof BillingErrorDefault;
    if (tmp4) {
      tmp4 = null != status.status;
    }
    if (tmp4) {
      tmp4 = status.status >= 400;
    }
    if (tmp4) {
      tmp4 = status.status < 500;
    }
    tmp2 = tmp4;
  }
  return tmp2;
}
export function isOfTypeStripeError(code) {
  let hasItem = null != code;
  if (hasItem) {
    hasItem = StripeErrorTypes.includes(code.type);
  }
  return hasItem;
}
export function shouldReportExpressCheckoutError(code) {
  if (code instanceof BillingErrorDefault) {
    let tmp8 = code.code !== BillingErrorDefault.ErrorCodes.INVALID_PAYMENT_SOURCE;
    if (tmp8) {
      let tmp10 = code instanceof HTTPUtils.HTTPResponseError;
      if (tmp10) {
        tmp10 = code.status >= 400;
      }
      if (tmp10) {
        tmp10 = code.status < 500;
      }
      if (!tmp10) {
        let tmp11 = code instanceof BillingErrorDefault;
        if (tmp11) {
          tmp11 = null != code.status;
        }
        if (tmp11) {
          tmp11 = code.status >= 400;
        }
        if (tmp11) {
          tmp11 = code.status < 500;
        }
        tmp10 = tmp11;
      }
      tmp8 = !tmp10;
    }
    let tmp6 = tmp8;
  } else {
    let hasItem = null != code;
    if (hasItem) {
      hasItem = StripeErrorTypes.includes(code.type);
    }
    tmp6 = !hasItem;
    if (hasItem) {
      tmp6 = !set.has(code.type);
    }
  }
  return tmp6;
}
export function captureBillingMessage(arg0, tags) {
  const obj2 = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  const obj3 = {};
  const merged1 = Object.assign(tags);
  obj3.app_context = "billing";
  obj2.tags = obj3;
  SentryUtilsDefault.captureMessage(arg0, obj2);
}
export function calculateStandardizedUnits(billingPeriod, billingPeriod2) {
  let tmp = "P1M" === billingPeriod;
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = "P1Y" === billingPeriod2;
  }
  if (tmp2 === true) {
    return 12;
  } else {
    let tmp3 = tmp;
    if (tmp) {
      tmp3 = "P6M" === billingPeriod2;
    }
    if (tmp3 === true) {
      return 6;
    } else {
      if (tmp) {
        tmp = "P3M" === billingPeriod2;
      }
      if (tmp === true) {
        return 3;
      } else {
        let tmp4 = "P3M" === billingPeriod;
        let tmp5 = tmp4;
        if (tmp4) {
          tmp5 = "P1Y" === billingPeriod2;
        }
        if (tmp5 === true) {
          return 4;
        } else {
          if (tmp4) {
            tmp4 = "P6M" === billingPeriod2;
          }
          if (tmp4 !== true) {
            let tmp6 = "P6M" === billingPeriod;
            if (tmp6) {
              tmp6 = "P1Y" === billingPeriod2;
            }
            if (tmp6 !== true) {
              return 1;
            }
          }
          return 2;
        }
      }
    }
  }
}