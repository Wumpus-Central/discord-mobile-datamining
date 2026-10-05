// === Module 5405: BillingSharedActionCreators ===

// Module 5405 (BillingSharedActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import intl2 from "intl" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import V6OrEarlierAPIError from "V6OrEarlierAPIError" /* 5312 */;
import Constants2 from "Constants" /* 5406 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import PaymentSourceRecord from "PaymentSourceRecord" /* 4532 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_7;

let metroImportDefault;
let metroRequire;
let obj = function _validatePaymentSourceBillingAddress() {
  obj = _asyncToGenerator(async (error) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
      let obj6;
      let obj7;
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              error = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS, body: obj6, rejectWithError: false };
              obj6 = { billing_address: obj7 };
              obj7 = { name: null, line_1: null, line_2: null, city: null, state: null, postal_code: null, country: null, email: null };
              ({ name: obj11.name, line1: obj11.line_1, line2: obj11.line_2, city: obj11.city, state: obj11.state, postalCode: obj11.postal_code, country: obj11.country, email: obj11.email } = error);
              c5 = 2;
              c6 = 1;
              const obj8 = { value: HTTP.post(request), done: false };
              return obj8;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            const obj3 = closure_130_0(closure_130_2[5]);
            error = obj3.parseV8BillingAddressSkemaErrorToBillingError(closure_1);
            const obj9 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error };
            const obj4 = closure_130_1(closure_130_2[6]);
            obj4.dispatch(obj9);
            throw error;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value: value.body.token, done: true };
          }
        } catch (tmp17) {
          closure_3 = tmp17;
          if (0 === c4) {
            c6 = 3;
            throw tmp17;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _popupBridgeState() {
  obj = _asyncToGenerator(async (paymentSourceType) => {
    let closure_1;
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const HTTP = HTTPUtils.HTTP;
      const post = HTTP.post;
      const obj4 = { url: closure_2_7.BILLING_POPUP_BRIDGE(paymentSourceType), oldFormErrors: true, rejectWithError: true };
      await post(obj4);
      const state = value.body.state;
      const obj7 = { type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state, paymentSourceType };
      obj = closure_130_1(closure_130_2[6]);
      obj.dispatch(obj7);
      return state;
    })();
  });
  return obj(...arguments);
};
obj = function _createPaymentSource() {
  obj = _asyncToGenerator(async (payment_gateway, token, arg2, arg3) => {
    let closure_6;
    const user = arg2;
    let closure_3 = arg3;
    let closure_4 = arg4;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    const iter = (async function(arg0, value, arg2, arg3) {
      let obj5;
      let obj7;
      let obj8;
      let tmp48;
      function addFieldsToBillingError(billingError, body) {
        let adyen_redirect_url;
        if (body != null) {
          body = body.body;
          if (body != null) {
            adyen_redirect_url = body.adyen_redirect_url;
          }
        }
        if (adyen_redirect_url) {
          let adyen_redirect_url1;
          const fields = billingError.fields;
          if (body != null) {
            const body2 = body.body;
            if (body2 != null) {
              adyen_redirect_url1 = body2.adyen_redirect_url;
            }
          }
          fields.adyen_redirect_url = adyen_redirect_url1;
        }
      }
      if (c10 === 2) {
        c10 = 3;
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
        let c8;
        try {
          let flag;
          let tmp;
          let billingError;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              body = tmp4;
              flag = closure_4;
              if (closure_4 === undefined) {
                flag = false;
              }
              body = undefined;
              tmp = undefined;
              billingError = undefined;
              c9 = 1;
              c10 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              const obj13 = closure_134_1(closure_134_2[6]);
              obj13.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
              c8 = 1;
              const HTTP = closure_134_0(closure_134_2[4]).HTTP;
              const request = { url: closure_134_7.BILLING_PAYMENT_SOURCES, query: obj5, body: obj7, rejectWithError: false };
              obj7 = { payment_gateway, token, billing_address: obj8, billing_address_token: closure_3.billingAddressToken, bank: closure_3.bank, pix: tmp48, return_url: closure_3.returnUrl, default: flag };
              tmp48 = undefined;
              const post = HTTP.post;
              obj5 = { location: closure_3.analyticsLocation };
              obj8 = { name: user.name, line_1: user.line1, line_2: user.line2, city: user.city, state: user.state, postal_code: user.postalCode, country: user.country, email: user.email };
              if (null != closure_3.pix) {
                tmp48 = { tax_id: closure_3.pix.taxId };
                const obj9 = { tax_id: closure_3.pix.taxId };
              }
              c9 = 3;
              c10 = 1;
              const obj10 = { value: post(request), done: false };
              return obj10;
            }
          } else if (2 === c9) {
            c8 = 0;
            message = closure_7;
            if (message instanceof closure_134_0(closure_134_2[11]).CaptchaCancelError) {
              message = message.message;
              const self = this;
              const self2 = this;
              billingError = new closure_134_0(closure_134_2[9]).BillingError(message, closure_134_0(closure_134_2[5]).ErrorCodes.INVALID_PAYMENT_SOURCE);
            } else {
              const tmp22Result = closure_134_0(closure_134_2[5]);
              billingError = tmp22Result.parseV8BillingAddressSkemaErrorToBillingError(message);
            }
            addFieldsToBillingError(billingError, message);
            if (billingError.code !== closure_134_0(closure_134_2[5]).ErrorCodes.CONFIRMATION_REQUIRED) {
              const obj11 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError };
              const obj6 = closure_134_1(closure_134_2[6]);
              obj6.dispatch(obj11);
            }
            throw billingError;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            return { value, done: true };
          } else {
            body = value;
            tmp = closure_134_4.createFromServer(body.body);
            const obj14 = { type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: tmp };
            obj = closure_134_1(closure_134_2[6]);
            obj.dispatch(obj14);
            c8 = 0;
            c10 = 3;
            return { value: tmp, done: true };
          }
        } catch (tmp56) {
          closure_7 = tmp56;
          if (0 === c8) {
            c10 = 3;
            throw tmp56;
          } else {
            c9 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
const StripeErrorTypes = Constants2.StripeErrorTypes;
({ AnalyticEvents: metroRequire, Endpoints: metroImportDefault } = Constants);
let result = size.fileFinishedImporting("modules/billing/actions/BillingSharedActionCreators.tsx");

export const validatePaymentSourceBillingAddress = function validatePaymentSourceBillingAddress() {
  return obj(...arguments);
};
export const dispatchConfirmationError = function dispatchConfirmationError(error) {
  let billingError;
  let flag;
  let flag2;
  let obj13;
  let payment_method;
  let stringResult;
  let tmp10;
  let tmp13;
  let type;
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = intl2.intl;
    stringResult = intl.string(intl2.t.khEaRI);
  }
  obj = arg3;
  if (arg3 === undefined) {
    obj = {};
  }
  let message = error;
  if (StripeErrorTypes.includes(error.type)) {
    let combined = stringResult;
    if (null != message.message) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringResult + ": " + message.message;
    }
    const obj4 = { failure_message: combined, error_type: null, failure_code: null, failure_sub_code: null, payment_source_type: type };
    ({ type: obj3.error_type, code: obj3.failure_code, decline_code: obj3.failure_sub_code, payment_method } = message);
    type = undefined;
    if (payment_method != null) {
      type = payment_method.type;
    }
    if ("card_error" === message.type) {
      const obj6 = { stacktrace: error.stack };
      const track = AnalyticsUtilsDefault.track;
      const PAYMENT_SOURCE_CREATION_FAILED = metroRequire.PAYMENT_SOURCE_CREATION_FAILED;
      AnalyticsUtilsDefault;
      const merged = Object.assign(obj4);
      const _Error = Error;
      const self3 = this;
      const self4 = this;
      error = new Error();
      track(PAYMENT_SOURCE_CREATION_FAILED, obj6);
      flag = false;
    }
    const self5 = this;
    const self6 = this;
    billingError = new V6OrEarlierAPIError.BillingError(combined);
    flag2 = flag;
    tmp10 = obj4;
    tmp13 = require;
  } else {
    let tmp6 = message;
    const BillingError = V6OrEarlierAPIError.BillingError;
    if (typeof message === "string") {
      tmp6 = stringResult;
    }
    const obj7 = { failure_message: null, status_code: null };
    const self = this;
    const self2 = this;
    const billingError1 = new BillingError(tmp6);
    ({ message: obj2.failure_message, code: obj2.status_code } = billingError1);
    tmp10 = obj7;
    billingError = billingError1;
    flag2 = flag;
    tmp13 = require;
    if (429 === billingError1.code) {
      flag2 = false;
      tmp10 = obj7;
      billingError = billingError1;
      tmp13 = require;
    }
  }
  const obj5 = DispatcherDefault;
  obj5.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError });
  const _Error2 = Error;
  if (typeof message !== "string") {
    message = billingError.message;
  }
  const _Error21 = new _Error2(message);
  if (flag2) {
    const obj12 = { extra: obj13 };
    const captureBillingException = tmp13(4543).captureBillingException;
    tmp13(4543);
    const merged1 = Object.assign(obj);
    obj13 = {};
    const merged2 = Object.assign(tmp10);
    const merged3 = Object.assign(obj.extra);
    const result = captureBillingException(_Error21, obj12);
  }
  return _Error21;
};
export const popupBridgeState = function popupBridgeState() {
  return obj(...arguments);
};
export const createPaymentSource = function createPaymentSource() {
  return obj(...arguments);
};