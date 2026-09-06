// === Module 4885: BillingSharedActionCreators ===

// Module 4885 (BillingSharedActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 4461 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import PaymentSourceRecord from "PaymentSourceRecord" /* 4222 */;

require = fn;
let closure_8 = async function _validatePaymentSourceBillingAddress(arg0) {
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
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS, body: null, rejectWithError: false };
          const obj1 = { billing_address: null };
          let obj2 = { name: null, line_1: null, line_2: null, city: null, state: null, postal_code: null, country: null, email: null };
          ({ name: obj11.name, line1: obj11.line_1, line2: obj11.line_2, city: obj11.city, state: obj11.state, postalCode: obj11.postal_code, country: obj11.country, email: obj11.email } = closure_0);
          obj1.billing_address = obj2;
          request.body = obj1;
          c5 = 2;
          c6 = 1;
          let obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        obj2 = closure_130_0(closure_130_2[5]);
        closure_129_0 = obj2.parseV8BillingAddressSkemaErrorToBillingError(closure_129_1);
        obj3 = closure_130_1(closure_130_2[6]);
        const obj4 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: closure_129_0 };
        obj3.dispatch(obj4);
        throw closure_129_0;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: value.body.token, done: true };
        return obj;
      }
    } catch (tmp20) {
      closure_3 = tmp20;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp20;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_9 = async function _popupBridgeState() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  closure_129_0 = closure_0;
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: closure_2_7.BILLING_POPUP_BRIDGE(closure_0), oldFormErrors: true, rejectWithError: true });
  const state = value.body.state;
  { url: React5.BILLING_POPUP_BRIDGE(closure_0), oldFormErrors: true, rejectWithError: true };
  closure_130_1(closure_130_2[6]).dispatch({ type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state, paymentSourceType: closure_129_0 });
  return state;
};
let closure_10 = async function _createPaymentSource(arg0) {
  if (c10 === 2) {
    c10 = 3;
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
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp3;
          closure_5 = tmp7;
          closure_133_4 = undefined;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = closure_2;
          closure_133_3 = closure_3;
          let flag = closure_4;
          if (closure_4 === undefined) {
            flag = false;
          }
          closure_133_4 = flag;
          closure_133_5 = undefined;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          c9 = 1;
          c10 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_134_1(closure_134_2[6]).dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
          c8 = 1;
          const HTTP = closure_134_0(closure_134_2[4]).HTTP;
          const request = { url: closure_134_7.BILLING_PAYMENT_SOURCES, query: null, body: null, rejectWithError: false };
          const obj2 = { location: closure_133_3.analyticsLocation };
          request.query = obj2;
          const obj3 = { payment_gateway: closure_133_0, token: closure_133_1, billing_address: null, billing_address_token: null, bank: null, pix: null, return_url: null, default: null };
          let obj4 = { name: closure_133_2.name, line_1: closure_133_2.line1, line_2: closure_133_2.line2, city: closure_133_2.city, state: closure_133_2.state, postal_code: closure_133_2.postalCode, country: closure_133_2.country, email: closure_133_2.email };
          obj3.billing_address = obj4;
          obj3.billing_address_token = closure_133_3.billingAddressToken;
          obj3.bank = closure_133_3.bank;
          let tmp39;
          if (null != closure_133_3.pix) {
            let obj5 = { tax_id: closure_133_3.pix.taxId };
            tmp39 = obj5;
          }
          obj3.pix = tmp39;
          obj3.return_url = closure_133_3.returnUrl;
          obj3.default = closure_133_4;
          request.body = obj3;
          c9 = 3;
          c10 = 1;
          const obj6 = { value: HTTP.post(request), done: false };
          return obj6;
        }
      } else if (2 === tmp7) {
        c8 = 0;
        closure_133_8 = closure_7;
        obj4 = closure_134_0(closure_134_2[5]);
        closure_133_7 = obj4.parseV8BillingAddressSkemaErrorToBillingError(closure_133_8);
        (function addFieldsToBillingError(fields, body) {
          let adyen_redirect_url;
          if (body != null) {
            body = body.body;
            if (body != null) {
              adyen_redirect_url = body.adyen_redirect_url;
            }
          }
          if (adyen_redirect_url) {
            let adyen_redirect_url1;
            if (body != null) {
              const body2 = body.body;
              if (body2 != null) {
                adyen_redirect_url1 = body2.adyen_redirect_url;
              }
            }
            fields.fields.adyen_redirect_url = adyen_redirect_url1;
          }
        })(closure_133_7, closure_133_8);
        if (closure_133_7.code !== closure_134_0(closure_134_2[5]).ErrorCodes.CONFIRMATION_REQUIRED) {
          obj5 = closure_134_1(closure_134_2[6]);
          const obj7 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: closure_133_7 };
          obj5.dispatch(obj7);
        }
        throw closure_133_7;
      } else if (arg0 === 1) {
        c10 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 0;
        c10 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_133_5 = value;
        closure_133_6 = closure_134_4.createFromServer(closure_133_5.body);
        obj = closure_134_1(closure_134_2[6]);
        const obj9 = { type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: closure_133_6 };
        obj.dispatch(obj9);
        c8 = 0;
        c10 = 3;
        const obj10 = { value: closure_133_6, done: true };
        return obj10;
      }
    } catch (tmp47) {
      closure_7 = tmp47;
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp47;
      } else {
        c9 = tmp;
      }
    }
  }
};
const StripeErrorTypes = fn(4886).StripeErrorTypes;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/actions/BillingSharedActionCreators.tsx");

export const validatePaymentSourceBillingAddress = function validatePaymentSourceBillingAddress() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dispatchConfirmationError = function dispatchConfirmationError(type) {
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = util.intl;
    stringResult = intl.string(util.t.khEaRI);
  }
  let obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let message = type;
  if (StripeErrorTypes.includes(type.type)) {
    let combined = stringResult;
    if (null != message.message) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringResult + ": " + message.message;
    }
    obj = { failure_message: combined, error_type: null, failure_code: null, failure_sub_code: null, payment_source_type: null };
    ({ type: obj3.error_type, code: obj3.failure_code, decline_code: obj3.failure_sub_code, payment_method } = message);
    type = undefined;
    if (payment_method != null) {
      type = payment_method.type;
    }
    obj.payment_source_type = type;
    if ("card_error" === message.type) {
      let obj3 = AnalyticsUtilsDefault;
      obj = {};
      const merged = Object.assign(obj);
      const _Error = Error;
      const error = new Error();
      obj.stacktrace = error.stack;
      obj3.track(constants.PAYMENT_SOURCE_CREATION_FAILED, obj);
      flag = false;
    }
    let billingError = new V6OrEarlierAPIError.BillingError(combined);
    let flag2 = flag;
    let tmp12 = obj;
    let tmp15 = require;
  } else {
    let tmp6 = message;
    if (typeof message === "string") {
      tmp6 = stringResult;
    }
    const obj1 = { failure_message: null, status_code: null };
    const billingError1 = new V6OrEarlierAPIError.BillingError(tmp6);
    ({ message: obj2.failure_message, code: obj2.status_code } = billingError1);
    tmp12 = obj1;
    billingError = billingError1;
    flag2 = flag;
    tmp15 = require;
    if (429 === billingError1.code) {
      flag2 = false;
      tmp12 = obj1;
      billingError = billingError1;
      tmp15 = require;
    }
  }
  DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError });
  if (typeof message !== "string") {
    message = billingError.message;
  }
  const error1 = new Error(message);
  if (flag2) {
    const obj2 = {};
    const merged1 = Object.assign(obj);
    obj3 = {};
    const merged2 = Object.assign(tmp12);
    const merged3 = Object.assign(obj.extra);
    obj2.extra = obj3;
    const result = tmp15(4233).captureBillingException(error1, obj2);
    const tmp15Result = tmp15(4233);
  }
  return error1;
};
export const popupBridgeState = function popupBridgeState() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createPaymentSource = function createPaymentSource() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};