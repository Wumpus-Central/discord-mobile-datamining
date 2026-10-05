// discord_app/modules/virtual_currency/VirtualCurrencyActionCreators.tsx
import LoggerDefault from "../debug/Logger.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import SKUStore from "../../stores/game_store/SKUStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c6;

function fetchVirtualCurrencyBalance() {
  return obj(...arguments);
}
let obj = function _fetchVirtualCurrencyBalance() {
  obj = _asyncToGenerator(async function () {
    let billingError;
    let c3;
    let c4;
    let c5;
    let closure_1;
    let closure_0 = tmp4;
    const obj10 = DispatcherDefault;
    obj10.wait(() => {
      obj = closure_1_1(closure_1_2[4]);
      obj.dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
    });
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.VIRTUAL_CURRENCY_USER_BALANCE, rejectWithError: false };
    await HTTP.get(obj4);
    let closure_3 = closure_2;
    if (closure_3 instanceof closure_129_0(closure_129_2[6]).BillingError) {
      billingError = closure_3;
    } else {
      const self = this;
      const self2 = this;
      billingError = new closure_129_0(closure_129_2[6]).BillingError(closure_3);
    }
    const obj7 = { type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: billingError };
    const obj5 = closure_129_1(closure_129_2[4]);
    const dispatchResult = obj5.dispatch(obj7);
    await "IconComponent";
    closure_0 = value;
    const balance = closure_0.body.balance;
    obj = closure_129_1(closure_129_2[4]);
    const obj9 = { type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance };
    obj.dispatch(obj9);
    return closure_0.body;
  });
  return obj(...arguments);
};
obj = function _fetchVirtualCurrencyTotalRedeemed() {
  obj = _asyncToGenerator(async function () {
    let billingError;
    let c3;
    let c4;
    let c5;
    let closure_1;
    let closure_0 = tmp4;
    const obj10 = DispatcherDefault;
    obj10.wait(() => {
      obj = closure_1_1(closure_1_2[4]);
      obj.dispatch({ type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH" });
    });
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.VIRTUAL_CURRENCY_USER_TOTAL_REDEEMED, rejectWithError: false };
    await HTTP.get(obj4);
    let closure_3 = closure_2;
    if (closure_3 instanceof closure_129_0(closure_129_2[6]).BillingError) {
      billingError = closure_3;
    } else {
      const self = this;
      const self2 = this;
      billingError = new closure_129_0(closure_129_2[6]).BillingError(closure_3);
    }
    const obj7 = { type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_FAIL", error: billingError };
    const obj5 = closure_129_1(closure_129_2[4]);
    const dispatchResult = obj5.dispatch(obj7);
    await "IconComponent";
    closure_0 = value;
    const total_redeemed = closure_0.body.total_redeemed;
    obj = closure_129_1(closure_129_2[4]);
    const obj9 = { type: "VIRTUAL_CURRENCY_TOTAL_REDEEMED_FETCH_SUCCESS", totalRedeemed: total_redeemed };
    obj.dispatch(obj9);
    return closure_0.body;
  });
  return obj(...arguments);
};
obj = function _redeemVirtualCurrencyForSKU() {
  obj = _asyncToGenerator(async function (skuId) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let shouldRefetchBalance;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (skuId === 1) {
        throw value;
      } else if (skuId === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let checkout_session_id;
        let applicationId;
        let c8;
        let obj6;
        let body;
        let c11;
        let error;
        let billingError;
        c6 = 2;
        if (0 === c5) {
          if (skuId === 1) {
            c6 = 3;
            throw value;
          } else if (skuId === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            skuId = undefined;
            checkout_session_id = undefined;
            c3 = undefined;
            c4 = undefined;
            shouldRefetchBalance = undefined;
            ({
              skuId: c0,
              loadId: c1,
              onRedeemStart: c2,
              onRedeemSucceed: c3,
              onRedeemFail: c4,
              shouldRefetchBalance,
            } = skuId);
            if (shouldRefetchBalance === undefined) {
              shouldRefetchBalance = true;
            }
            applicationId = undefined;
            c8 = undefined;
            obj6 = undefined;
            body = undefined;
            c11 = undefined;
            error = undefined;
            billingError = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (skuId === 1) {
            c6 = 3;
            throw value;
          } else if (skuId === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj16 = closure_130_1(closure_130_2[4]);
            obj16.wait(() => {
              obj = checkout_session_id(closure_2[4]);
              const obj2 = { type: "VIRTUAL_CURRENCY_REDEEM_START", skuId };
              obj.dispatch(obj2);
            });
            if (tmp != null) {
              tmp();
            }
            c4 = 1;
            closure_130_4.get(skuId);
            applicationId = undefined;
            if (applicationId != null) {
              applicationId = applicationId.applicationId;
            }
            let result = null != applicationId;
            if (result) {
              const obj9 = closure_130_0(closure_130_2[7]);
              result = obj9.isTestModeForApplication(applicationId);
            }
            c8 = result;
            obj6 = { checkout_session_id };
            const tmp82 = c8;
            if (tmp82) {
              obj6.test_mode = true;
            }
            const HTTP = closure_130_0(closure_130_2[5]).HTTP;
            const request = {
              url: closure_130_5.VIRTUAL_CURRENCY_SKU_REDEEM(skuId),
              body: obj6,
              rejectWithError: false,
            };
            const post = HTTP.post;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: post(request), done: false };
            return obj8;
          }
        } else if (2 === c5) {
          c4 = 0;
          let closure_14 = closure_3;
          if (closure_14 instanceof closure_130_0(closure_130_2[6]).BillingError) {
            billingError = closure_14;
          } else {
            const self3 = this;
            const self4 = this;
            billingError = new closure_130_0(closure_130_2[6]).BillingError(closure_14);
          }
          const obj10 = { type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId, error: billingError };
          const obj7 = closure_130_1(closure_130_2[4]);
          const dispatchResult = obj7.dispatch(obj10);
          const tmp57 = shouldRefetchBalance;
          if (tmp57) {
            closure_130_7();
          }
          if (c4 != null) {
            tmp62(billingError);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (skuId === 1) {
          c6 = 3;
          throw value;
        } else if (skuId === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          body = value.body;
          if (null != body) {
            const _Array = Array;
            if (Array.isArray(body)) {
              obj = closure_130_1(closure_130_2[4]);
              const obj12 = { type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId, entitlements: body };
              obj.dispatch(obj12);
              const tmp12 = shouldRefetchBalance;
              if (tmp12) {
                closure_130_7();
              }
              if (c3 != null) {
                tmp17(body);
              }
              c4 = 0;
              c6 = 3;
              const obj13 = { value: body, done: true };
              return obj13;
            }
          }
          c11 = "Could not read entitlements from Virtual Currency redemption response. Response: ";
          const _Error = Error;
          const self = this;
          const self2 = this;
          error = new Error(c11, body);
          closure_130_6.error(c11, body);
          const obj14 = { tags: { app_context: "virtual_currency" } };
          const obj4 = closure_130_1(closure_130_2[8]);
          obj4.captureException(error, obj14);
          throw error;
        }
      } catch (tmp91) {
        closure_3 = tmp91;
        if (0 === c4) {
          c6 = 3;
          throw tmp91;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_6 = new LoggerDefault("VirtualCurrencyActionCreators");
new LoggerDefault("VirtualCurrencyActionCreators");
let result = size.fileFinishedImporting("modules/virtual_currency/VirtualCurrencyActionCreators.tsx");

export { fetchVirtualCurrencyBalance };
export const fetchVirtualCurrencyTotalRedeemed = function fetchVirtualCurrencyTotalRedeemed() {
  return obj(...arguments);
};
export const redeemVirtualCurrencyForSKU = function redeemVirtualCurrencyForSKU() {
  return obj(...arguments);
};
export const setBalancePillOverlay = function setBalancePillOverlay(balancePillOverlay) {
  obj = DispatcherDefault;
  const obj2 = { type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY", balancePillOverlay };
  return obj.dispatch(obj2);
};
