// discord_app/utils/BillingUtils.tsx
import set from "set";
import { PaymentGateways } from "sum";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { set } from "../errors/BillingError.tsx";
import { SentryUtils.native } from "SentryUtils.native.tsx";

const require = arg1;
function _createGatewayCheckoutContext() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              closure_1 = undefined;
              let obj2 = null;
              if (null != obj2) {
                if (obj2.paymentGateway === outer1_4.BRAINTREE) {
                  let obj1 = callback(table[2]);
                  table = 1;
                  c3 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.collectDeviceData();
                  return obj1;
                }
              }
              c3 = 3;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            closure_1 = arg1;
            if (null != closure_1) {
              obj2 = { braintree_device_data: null };
              obj2[0] = closure_1;
            }
          }
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _createGatewayCheckoutContext = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("getBraintreeSDK").fileFinishedImporting("utils/BillingUtils.tsx");

export const getLocalizedDisplayMonth = function getLocalizedDisplayMonth(arg0, arg1) {
  const date = new Date();
  date.setMonth(arg0 - 1);
  return date.toLocaleString(arg1, { month: "short" });
};
export const createGatewayCheckoutContext = function createGatewayCheckoutContext(paymentSource) {
  const self = this;
  const apply = _createGatewayCheckoutContext.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const captureBillingException = function captureBillingException(error, tags) {
  let obj = SentryUtils.native;
  obj = {};
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
export const isExpectedHttpClientError = function isExpectedHttpClientError(onSignFailure) {
  let tmp2 = onSignFailure instanceof sendRequest.HTTPResponseError;
  if (tmp2) {
    tmp2 = onSignFailure.status >= 400;
  }
  if (tmp2) {
    tmp2 = onSignFailure.status < 500;
  }
  if (!tmp2) {
    let tmp4 = onSignFailure instanceof set;
    if (tmp4) {
      tmp4 = null != onSignFailure.status;
    }
    if (tmp4) {
      tmp4 = onSignFailure.status >= 400;
    }
    if (tmp4) {
      tmp4 = onSignFailure.status < 500;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const captureBillingMessage = function captureBillingMessage(arg0, tags) {
  let obj = SentryUtils.native;
  obj = {};
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