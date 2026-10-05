// discord_app/utils/BillingUtils.tsx
import Constants from "../../discord_common/js/shared/Constants.tsx";
import SentryUtilsDefault from "SentryUtils.native.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import BraintreeUtils from "BraintreeUtils.tsx";
import BillingErrorDefault from "../errors/BillingError.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../_runtime/metro/00002__.js";

let braintree_device_data;

let obj = function _createGatewayCheckoutContext() {
  obj = _asyncToGenerator(async (arg0) => {
    const paymentGateway = arg0;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj3;
      if (c3 === 2) {
        c3 = 3;
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
          let obj6;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              braintree_device_data = undefined;
              obj6 = null;
              if (null != paymentGateway) {
                if (paymentGateway.paymentGateway === constants.BRAINTREE) {
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: obj3.collectDeviceData(), done: false };
                  obj3 = BraintreeUtils;
                  return obj5;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          } else {
            braintree_device_data = value;
            if (null != braintree_device_data) {
              obj6 = { braintree_device_data };
            }
          }
          c3 = 3;
          return { value: obj6, done: true };
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
const PaymentGateways = Constants.PaymentGateways;
const result = size.fileFinishedImporting("utils/BillingUtils.tsx");

export const getLocalizedDisplayMonth = function getLocalizedDisplayMonth(arg0, arg1) {
  const date = new Date();
  date.setMonth(arg0 - 1);
  return date.toLocaleString(arg1, { month: "short" });
};
export const createGatewayCheckoutContext = function createGatewayCheckoutContext() {
  return obj(...arguments);
};
export const captureBillingException = function captureBillingException(error, tags) {
  let obj2;
  obj = { tags: obj2 };
  const captureException = SentryUtilsDefault.captureException;
  SentryUtilsDefault;
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj2 = { app_context: "billing" };
  const merged1 = Object.assign(tags);
  captureException(error, obj);
};
export const isExpectedHttpClientError = function isExpectedHttpClientError(status) {
  let tmp2 = status instanceof HTTPUtils.HTTPResponseError && status.status >= 400 && status.status < 500;
  if (!tmp2) {
    tmp2 =
      status instanceof BillingErrorDefault && null != status.status && status.status >= 400 && status.status < 500;
    const tmp4 =
      status instanceof BillingErrorDefault && null != status.status && status.status >= 400 && status.status < 500;
  }
  return tmp2;
};
export const captureBillingMessage = function captureBillingMessage(arg0, tags) {
  let obj2;
  obj = { tags: obj2 };
  const captureMessage = SentryUtilsDefault.captureMessage;
  SentryUtilsDefault;
  const merged = Object.assign(tags);
  tags = undefined;
  if (tags != null) {
    tags = tags.tags;
  }
  obj2 = { app_context: "billing" };
  const merged1 = Object.assign(tags);
  captureMessage(arg0, obj);
};
export function calculateStandardizedUnits(billingPeriod, billingPeriod2) {
  let tmp = "P1M" === billingPeriod;
  const tmp2 = tmp && "P1Y" === billingPeriod2;
  if (tmp2 === true) {
    return 12;
  } else {
    const tmp3 = tmp && "P6M" === billingPeriod2;
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
        const tmp5 = tmp4 && "P1Y" === billingPeriod2;
        if (tmp5 === true) {
          return 4;
        } else {
          if (tmp4) {
            tmp4 = "P6M" === billingPeriod2;
          }
          if (tmp4 !== true) {
            const tmp6 = "P6M" === billingPeriod && "P1Y" === billingPeriod2;
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
