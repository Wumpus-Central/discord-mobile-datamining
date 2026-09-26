// === Module 8318: VirtualCurrencyActionCreators ===

// Module 8318 (VirtualCurrencyActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SKUStore from "SKUStore" /* 5822 */;

require = fn;
function fetchVirtualCurrencyBalance() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _fetchVirtualCurrencyBalance() {
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
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          let balance;
          closure_128_2 = undefined;
          DispatcherDefault.wait(() => {
            closure_1_1(closure_1_2[4]).dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
          });
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: constants.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: false };
          c4 = 2;
          c5 = 1;
          const obj6 = { value: HTTP.get(obj4), done: false };
          return obj6;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_3 = closure_2;
        if (closure_128_3 instanceof closure_129_0(closure_129_2[6]).BillingError) {
          let billingError = closure_128_3;
        } else {
          billingError = new closure_129_0(closure_129_2[6]).BillingError(closure_128_3);
        }
        closure_128_2 = billingError;
        const obj7 = { type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: closure_128_2 };
        closure_129_1(closure_129_2[4]).dispatch(obj7);
        c5 = 3;
        const obj5 = closure_129_1(closure_129_2[4]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_128_0 = value;
        balance = closure_128_0.body.balance;
        const obj9 = { type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance };
        closure_129_1(closure_129_2[4]).dispatch(obj9);
        c3 = 0;
        c5 = 3;
        const obj11 = { value: closure_128_0.body, done: true };
        return obj11;
      }
    } catch (tmp37) {
      closure_2 = tmp37;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp37;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_9 = async function _redeemVirtualCurrencyForSKU(arg0) {
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
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({ skuId: closure_129_0, loadId: closure_129_1, onRedeemStart: closure_129_2, onRedeemSucceed: closure_129_3, onRedeemFail: closure_129_4, shouldRefetchBalance } = skuId);
          if (shouldRefetchBalance === undefined) {
            shouldRefetchBalance = true;
          }
          closure_129_5 = shouldRefetchBalance;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          let body;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          closure_129_13 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_1(closure_130_2[4]).wait(() => {
            closure_1(closure_2[4]).dispatch({ type: "VIRTUAL_CURRENCY_REDEEM_START", skuId });
          });
          if (closure_129_2 != null) {
            closure_129_2();
          }
          c4 = 1;
          closure_129_6 = closure_130_4.get(closure_129_0);
          let applicationId;
          if (closure_129_6 != null) {
            applicationId = closure_129_6.applicationId;
          }
          closure_129_7 = applicationId;
          let result = null != closure_129_7;
          if (result) {
            result = closure_130_0(closure_130_2[7]).isTestModeForApplication(closure_129_7);
            const obj9 = closure_130_0(closure_130_2[7]);
          }
          closure_129_8 = result;
          const obj6 = { checkout_session_id: closure_129_1 };
          closure_129_9 = obj6;
          if (closure_129_8) {
            closure_129_9.test_mode = true;
          }
          const HTTP = closure_130_0(closure_130_2[5]).HTTP;
          const request = { url: closure_130_5.VIRTUAL_CURRENCY_SKU_REDEEM(closure_129_0), body: closure_129_9, rejectWithError: false };
          c5 = 3;
          c6 = 1;
          const obj8 = { value: HTTP.post(request), done: false };
          return obj8;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_14 = closure_3;
        if (closure_129_14 instanceof closure_130_0(closure_130_2[6]).BillingError) {
          let billingError = closure_129_14;
        } else {
          billingError = new closure_130_0(closure_130_2[6]).BillingError(closure_129_14);
        }
        closure_129_13 = billingError;
        const obj10 = { type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: closure_129_0, error: closure_129_13 };
        closure_130_1(closure_130_2[4]).dispatch(obj10);
        if (closure_129_5) {
          closure_130_7();
        }
        if (closure_129_4 != null) {
          tmp69(closure_129_13);
        }
        c6 = 3;
        return { value: "HermesInternal", done: null };
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj11 = { value, done: true };
        return obj11;
      } else {
        body = value.body;
        if (null != body) {
          const _Array = Array;
          if (Array.isArray(body)) {
            const obj12 = { type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: closure_129_0, entitlements: body };
            closure_130_1(closure_130_2[4]).dispatch(obj12);
            if (closure_129_5) {
              closure_130_7();
            }
            if (closure_129_3 != null) {
              tmp20(body);
            }
            c4 = 0;
            c6 = 3;
            const obj13 = { value: body, done: true };
            return obj13;
          }
        }
        closure_129_11 = "Could not read entitlements from Virtual Currency redemption response. Response: ";
        const _Error = Error;
        const error = new Error(closure_129_11, body);
        closure_129_12 = error;
        closure_130_6.error(closure_129_11, body);
        const obj14 = { tags: { app_context: "virtual_currency" } };
        closure_130_1(closure_130_2[8]).captureException(closure_129_12, obj14);
        throw closure_129_12;
      }
    } catch (tmp98) {
      closure_3 = tmp98;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp98;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_6 = new LoggerDefault("VirtualCurrencyActionCreators");
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyActionCreators.tsx");

export { fetchVirtualCurrencyBalance };
export const redeemVirtualCurrencyForSKU = function redeemVirtualCurrencyForSKU() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setBalancePillOverlay = function setBalancePillOverlay(balancePillOverlay) {
  return DispatcherDefault.dispatch({ type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY", balancePillOverlay });
};