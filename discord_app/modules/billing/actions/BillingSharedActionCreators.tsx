// discord_app/modules/billing/actions/BillingSharedActionCreators.tsx
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import V6OrEarlierAPIError from "../../../errors/index.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import createFromServer from "../../../records/PaymentSourceRecord.tsx";
import { StripeErrorTypes } from "../Constants.tsx";
import ME from "../../../Constants.tsx";

require = fn;
function _validatePaymentSourceBillingAddress() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              c4 = 1;
              const HTTP = callback(closure_1_2[4]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = closure_1_7.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS;
              let obj2 = { billing_address: null };
              let obj3 = { name: null, line_1: null, line_2: null, city: null, state: null, postal_code: null, country: null, email: null };
              ({ name: obj11[0], line1: obj11[1], line2: obj11[2], city: obj11[3], state: obj11[4], postalCode: obj11[5], country: obj11[6], email: obj11[7] } = callback);
              obj2[0] = obj3;
              obj1[1] = obj2;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback2 = closure_3;
            obj2 = callback(4061);
            callback = obj2.parseV8BillingAddressSkemaErrorToBillingError(callback2);
            obj3 = callback2(709);
            const obj5 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: null };
            obj5[1] = callback;
            obj3.dispatch(obj5);
            throw callback;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = body;
            return obj6;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body.token;
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
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _popupBridgeState() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      const table = tmp2;
      const HTTP = callback(closure_1_2[4]).HTTP;
      obj1 = { url: null, oldFormErrors: true, rejectWithError: true };
      obj1[0] = closure_1_7.BILLING_POPUP_BRIDGE(callback);
      yield HTTP.post(obj1);
      const state = body.body.state;
      const obj = state(table[6]);
      const obj4 = { type: "BILLING_POPUP_BRIDGE_STATE_UPDATE", state: null, paymentSourceType: null };
      obj4[1] = state;
      obj4[2] = callback;
      obj.dispatch(obj4);
      return state;
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createPaymentSource() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c9 = 0;
    c10 = 0;
    c8 = 0;
    const iter = (function*(arg0, arg1, arg2, arg3) {
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_6 = tmp3;
              let body = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              body = undefined;
              closure_6 = undefined;
              closure_7 = undefined;
              c9 = 1;
              c10 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              callback2(user[6]).dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_START" });
              c8 = 1;
              const HTTP = callback(user[4]).HTTP;
              const obj2 = { url: null, query: null, body: null, rejectWithError: false };
              obj2[0] = closure_7.BILLING_PAYMENT_SOURCES;
              const obj3 = { location: null };
              obj3[0] = closure_3.analyticsLocation;
              obj2[1] = obj3;
              let obj4 = { payment_gateway: null, token: null, billing_address: null, billing_address_token: null, bank: null, pix: null, return_url: null, default: null };
              obj4[0] = callback;
              obj4[1] = callback2;
              let obj5 = { name: null, line_1: null, line_2: null, city: null, state: null, postal_code: null, country: null, email: null };
              obj5[0] = user.name;
              obj5[1] = user.line1;
              obj5[2] = user.line2;
              obj5[3] = user.city;
              obj5[4] = user.state;
              obj5[5] = user.postalCode;
              obj5[6] = user.country;
              obj5[7] = user.email;
              obj4[2] = obj5;
              obj4[3] = closure_3.billingAddressToken;
              obj4[4] = closure_3.bank;
              let tmp39;
              if (null != closure_3.pix) {
                const obj6 = { tax_id: null };
                obj6[0] = closure_3.pix.taxId;
                tmp39 = obj6;
              }
              obj4[5] = tmp39;
              obj4[6] = closure_3.returnUrl;
              obj4[7] = flag;
              obj2[2] = obj4;
              c9 = 3;
              c10 = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = HTTP.post(obj2);
              return obj7;
            }
          } else if (2 === tmp7) {
            c8 = 0;
            c8 = closure_7;
            obj4 = callback(user[5]);
            closure_7 = obj4.parseV8BillingAddressSkemaErrorToBillingError(c8);
            (function addFieldsToBillingError(closure_7, c8) {
              let adyen_redirect_url;
              if (c8 != null) {
                const body = c8.body;
                if (body != null) {
                  adyen_redirect_url = body.adyen_redirect_url;
                }
              }
              if (adyen_redirect_url) {
                let adyen_redirect_url1;
                if (c8 != null) {
                  const body2 = c8.body;
                  if (body2 != null) {
                    adyen_redirect_url1 = body2.adyen_redirect_url;
                  }
                }
                tmp47.fields.adyen_redirect_url = adyen_redirect_url1;
              }
            })(closure_7, c8);
            if (closure_7.code !== callback(user[5]).ErrorCodes.CONFIRMATION_REQUIRED) {
              obj5 = callback2(user[6]);
              const obj8 = { type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: null };
              obj8[1] = closure_7;
              obj5.dispatch(obj8);
            }
            throw closure_7;
          } else if (arg0 === 1) {
            c10 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c8 = 0;
            c10 = 3;
            const obj9 = { value: null, done: true };
            obj9[0] = arg1;
            return obj9;
          } else {
            body = arg1;
            closure_6 = flag.createFromServer(body.body);
            obj = callback2(user[6]);
            const obj10 = { type: "BILLING_PAYMENT_SOURCE_CREATE_SUCCESS", paymentSource: null };
            obj10[1] = closure_6;
            obj.dispatch(obj10);
            c8 = 0;
            c10 = 3;
            const obj11 = { value: null, done: true };
            obj11[0] = closure_6;
            return obj11;
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
    })();
    iter.next();
    return iter;
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_6, Endpoints: error } = ME);
let result = require("obj132").fileFinishedImporting("modules/billing/actions/BillingSharedActionCreators.tsx");

export const validatePaymentSourceBillingAddress = function validatePaymentSourceBillingAddress(closure_0) {
  const self = this;
  const apply = _validatePaymentSourceBillingAddress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const dispatchConfirmationError = function dispatchConfirmationError(error, flag, stringResult, arg3) {
  if (flag === undefined) {
    flag = true;
  }
  if (stringResult === undefined) {
    const intl = getSystemLocale.intl;
    stringResult = intl.string(getSystemLocale.t.khEaRI);
  }
  let obj = arg3;
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
    obj = { failure_message: null, error_type: null, failure_code: null, failure_sub_code: null, payment_source_type: null };
    obj[0] = combined;
    ({ type: obj3[1], code: obj3[2], decline_code: obj3[3], payment_method } = message);
    let type;
    if (payment_method != null) {
      type = payment_method.type;
    }
    obj[4] = type;
    if ("card_error" === message.type) {
      let obj3 = expandEventPropertiesDefault;
      obj = {};
      const merged = Object.assign(obj);
      const _Error = Error;
      error = new Error();
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
    obj1 = { failure_message: null, status_code: null };
    const billingError1 = new V6OrEarlierAPIError.BillingError(tmp6);
    ({ message: obj2[0], code: obj2[1] } = billingError1);
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
  dispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_CREATE_FAIL", error: billingError });
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
    const result = tmp15(4054).captureBillingException(error1, obj2);
    const tmp15Result = tmp15(4054);
  }
  return error1;
};
export const popupBridgeState = function popupBridgeState(type) {
  const self = this;
  const apply = _popupBridgeState.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createPaymentSource = function createPaymentSource(STRIPE, id, closure_2, arg3, flag) {
  const self = this;
  const apply = _createPaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};