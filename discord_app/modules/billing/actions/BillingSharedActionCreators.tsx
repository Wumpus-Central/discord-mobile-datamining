// discord_app/modules/billing/actions/BillingSharedActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import V6OrEarlierAPIError from "../../../errors/index.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import PaymentSourceRecord from "../../../records/PaymentSourceRecord.tsx";

require = fn;
let closure_8 = async function _validatePaymentSourceBillingAddress(arg0) {
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const request = {
            url: constants.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS,
            body: null,
            rejectWithError: false,
          };
          const obj6 = { billing_address: null };
          ({
            name: obj11.name,
            line1: obj11.line_1,
            line2: obj11.line_2,
            city: obj11.city,
            state: obj11.state,
            postalCode: obj11.postal_code,
            country: obj11.country,
            email: obj11.email,
          } = closure_0);
          obj6.billing_address = {
            name: null,
            line_1: null,
            line_2: null,
            city: null,
            state: null,
            postal_code: null,
            country: null,
            email: null,
          };
          request.body = obj6;
          c5 = 2;
          c6 = 1;
          const obj8 = { value: HTTP.post(request), done: false };
          return obj8;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_1 = closure_3;
        closure_129_0 = closure_130_0(closure_130_2[5]).parseV8BillingAddressSkemaErrorToBillingError(closure_129_1);
        const obj3 = closure_130_0(closure_130_2[5]);
        const obj9 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: closure_129_0 };
        closure_130_1(closure_130_2[6]).dispatch(obj9);
        throw closure_129_0;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj10 = { value, done: true };
        return obj10;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value: value.body.token, done: true };
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
  closure_130_1(closure_130_2[6]).dispatch({
    type: "BILLING_POPUP_BRIDGE_STATE_UPDATE",
    state,
    paymentSourceType: closure_129_0,
  });
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
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
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_134_1(closure_134_2[6]).dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
          c8 = 1;
          const HTTP = closure_134_0(closure_134_2[4]).HTTP;
          const request = {
            url: closure_134_7.BILLING_PAYMENT_SOURCES,
            query: null,
            body: null,
            rejectWithError: false,
          };
          const obj5 = { location: closure_133_3.analyticsLocation };
          request.query = obj5;
          const obj7 = {
            payment_gateway: closure_133_0,
            token: closure_133_1,
            billing_address: null,
            billing_address_token: null,
            bank: null,
            pix: null,
            return_url: null,
            default: null,
          };
          const obj8 = {
            name: closure_133_2.name,
            line_1: closure_133_2.line1,
            line_2: closure_133_2.line2,
            city: closure_133_2.city,
            state: closure_133_2.state,
            postal_code: closure_133_2.postalCode,
            country: closure_133_2.country,
            email: closure_133_2.email,
          };
          obj7.billing_address = obj8;
          obj7.billing_address_token = closure_133_3.billingAddressToken;
          obj7.bank = closure_133_3.bank;
          let tmp53;
          if (null != closure_133_3.pix) {
            const obj9 = { tax_id: closure_133_3.pix.taxId };
            tmp53 = obj9;
          }
          obj7.pix = tmp53;
          obj7.return_url = closure_133_3.returnUrl;
          obj7.default = closure_133_4;
          request.body = obj7;
          c9 = 3;
          c10 = 1;
          const obj10 = { value: HTTP.post(request), done: false };
          return obj10;
        }
      } else if (2 === tmp7) {
        c8 = 0;
        closure_133_8 = closure_7;
        if (closure_133_8 instanceof closure_134_0(closure_134_2[11]).CaptchaCancelError) {
          const message = closure_133_8.message;
          let billingError = new closure_134_0(closure_134_2[9]).BillingError(
            message,
            closure_134_0(closure_134_2[5]).ErrorCodes.INVALID_PAYMENT_SOURCE,
          );
        } else {
          billingError = closure_134_0(closure_134_2[5]).parseV8BillingAddressSkemaErrorToBillingError(closure_133_8);
          const tmp25Result = closure_134_0(closure_134_2[5]);
        }
        closure_133_7 = billingError;
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
          const obj11 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: closure_133_7 };
          closure_134_1(closure_134_2[6]).dispatch(obj11);
          const obj6 = closure_134_1(closure_134_2[6]);
        }
        throw closure_133_7;
      } else if (arg0 === 1) {
        c10 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 0;
        c10 = 3;
        const obj12 = { value, done: true };
        return obj12;
      } else {
        closure_133_5 = value;
        closure_133_6 = closure_134_4.createFromServer(closure_133_5.body);
        const obj14 = { type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: closure_133_6 };
        closure_134_1(closure_134_2[6]).dispatch(obj14);
        c8 = 0;
        c10 = 3;
        const obj15 = { value: closure_133_6, done: true };
        return obj15;
      }
    } catch (tmp61) {
      closure_7 = tmp61;
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp61;
      } else {
        c9 = tmp;
      }
    }
  }
};
const StripeErrorTypes = fn(5166).StripeErrorTypes;
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
    const obj5 = {
      failure_message: combined,
      error_type: null,
      failure_code: null,
      failure_sub_code: null,
      payment_source_type: null,
    };
    ({ type: obj3.error_type, code: obj3.failure_code, decline_code: obj3.failure_sub_code, payment_method } = message);
    type = undefined;
    if (payment_method != null) {
      type = payment_method.type;
    }
    obj5.payment_source_type = type;
    if ("card_error" === message.type) {
      const obj7 = {};
      const merged = Object.assign(obj5);
      const _Error = Error;
      const error = new Error();
      obj7.stacktrace = error.stack;
      AnalyticsUtilsDefault.track(constants.PAYMENT_SOURCE_CREATION_FAILED, obj7);
      flag = false;
    }
    let billingError = new V6OrEarlierAPIError.BillingError(combined);
    let flag2 = flag;
    let tmp12 = obj5;
    let tmp15 = require;
  } else {
    let tmp6 = message;
    if (typeof message === "string") {
      tmp6 = stringResult;
    }
    const obj8 = { failure_message: null, status_code: null };
    const billingError1 = new V6OrEarlierAPIError.BillingError(tmp6);
    ({ message: obj2.failure_message, code: obj2.status_code } = billingError1);
    tmp12 = obj8;
    billingError = billingError1;
    flag2 = flag;
    tmp15 = require;
    if (429 === billingError1.code) {
      flag2 = false;
      tmp12 = obj8;
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
    const obj9 = {};
    const merged1 = Object.assign(obj);
    const obj14 = {};
    const merged2 = Object.assign(tmp12);
    const merged3 = Object.assign(obj.extra);
    obj9.extra = obj14;
    const result = tmp15(4496).captureBillingException(error1, obj9);
    const tmp15Result = tmp15(4496);
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
