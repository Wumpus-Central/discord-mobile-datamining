// discord_app/utils/BillingUtils.tsx
import SentryUtilsDefault from "SentryUtils.native.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import BraintreeUtils from "BraintreeUtils.tsx";
import BillingErrorDefault from "../errors/BillingError.tsx";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _createGatewayCheckoutContext(arg0) {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp2;
            closure_129_1 = undefined;
            closure_129_0 = null;
            if (null != paymentGateway) {
              if (paymentGateway.paymentGateway === constants.BRAINTREE) {
                let obj1 = BraintreeUtils;
                c2 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.collectDeviceData();
                return obj1;
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
            const obj2 = { braintree_device_data: closure_129_1 };
            closure_129_0 = obj2;
          }
        }
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
const PaymentGateways = fn(1085).PaymentGateways;
const size = fn(2);
const result = size.fileFinishedImporting("utils/BillingUtils.tsx");

export const getLocalizedDisplayMonth = function getLocalizedDisplayMonth(arg0, arg1) {
  const date = new Date();
  date.setMonth(arg0 - 1);
  return date.toLocaleString(arg1, { month: "short" });
};
export const createGatewayCheckoutContext = function createGatewayCheckoutContext() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const captureBillingException = function captureBillingException(error, tags) {
  let obj = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj = {};
  const merged1 = Object.assign(tags);
  obj.app_context = "billing";
  obj.tags = obj;
  obj.captureException(error, obj);
};
export const isExpectedHttpClientError = function isExpectedHttpClientError(status) {
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
};
export const captureBillingMessage = function captureBillingMessage(arg0, tags) {
  let obj = {};
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj = {};
  const merged1 = Object.assign(tags);
  obj.app_context = "billing";
  obj.tags = obj;
  obj.captureMessage(arg0, obj);
};
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
