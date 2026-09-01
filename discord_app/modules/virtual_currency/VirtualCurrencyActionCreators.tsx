// discord_app/modules/virtual_currency/VirtualCurrencyActionCreators.tsx
import timestampDefault from "../debug/Logger.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../stores/game_store/SKUStore.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
function fetchVirtualCurrencyBalance() {
  const self = this;
  const apply = _fetchVirtualCurrencyBalance.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchVirtualCurrencyBalance() {
  const self = this;
  const tmp = callback(function* () {
    if (constants === 2) {
      constants = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        constants = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let balance = tmp3;
            let lib = tmp7;
            lib = undefined;
            balance = undefined;
            let billingError;
            closure_1_1(closure_1_2[4]).wait(() => {
              balance(billingError[4]).dispatch({ type: "VIRTUAL_CURRENCY_BALANCE_FETCH" });
            });
            c3 = 1;
            const HTTP = closure_1_0(closure_1_2[5]).HTTP;
            obj1 = { url: null, rejectWithError: false };
            obj1[0] = constants.VIRTUAL_CURRENCY_USER_BALANCE;
            c4 = 2;
            constants = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c3 = billingError;
          if (c3 instanceof lib(billingError[6]).BillingError) {
            billingError = c3;
          } else {
            billingError = new lib(billingError[6]).BillingError(c3);
          }
          let obj4 = balance(billingError[4]);
          const obj3 = { type: "VIRTUAL_CURRENCY_BALANCE_FETCH_FAIL", error: null };
          obj3[1] = billingError;
          obj4.dispatch(obj3);
          constants = 3;
        } else if (arg0 === 1) {
          constants = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          constants = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          lib = arg1;
          balance = lib.body.balance;
          obj = balance(billingError[4]);
          const obj5 = { type: "VIRTUAL_CURRENCY_BALANCE_FETCH_SUCCESS", balance: null };
          obj5[1] = balance;
          obj.dispatch(obj5);
          c3 = 0;
          constants = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = lib.body;
          return obj6;
        }
      } catch (tmp37) {
        billingError = tmp37;
        if (tmp4 === c3) {
          constants = tmp2;
          throw tmp37;
        } else {
          c4 = tmp;
        }
      }
    }
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
function _redeemVirtualCurrencyForSKU() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function* (arg0, body) {
      if (logger === 2) {
        logger = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = body;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp5;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp6 === 3) {
          if (arg0 === 1) {
            throw body;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            logger = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                logger = 3;
                throw body;
              } else if (arg0 === 2) {
                logger = 3;
                obj = { value: null, done: true };
                obj[0] = body;
                return obj;
              } else {
                dependencyMap = tmp3;
                let callback2 = tmp7;
                let callback;
                callback2 = undefined;
                dependencyMap = undefined;
                c3 = undefined;
                c4 = undefined;
                c5 = undefined;
                throwTypeErrorResult = callback;
                ({
                  skuId: c0,
                  loadId: c1,
                  onRedeemStart: c2,
                  onRedeemSucceed: c3,
                  onRedeemFail: c4,
                  shouldRefetchBalance,
                } = callback);
                if (shouldRefetchBalance === undefined) {
                  shouldRefetchBalance = true;
                }
                c5 = shouldRefetchBalance;
                logger = undefined;
                let applicationId;
                c8 = undefined;
                let obj2;
                body = undefined;
                c11 = undefined;
                error = undefined;
                let billingError;
                c5 = 1;
                logger = 1;
                return { value: "PX_16", done: null };
              }
            } else if (1 === tmp7) {
              if (arg0 === 1) {
                logger = 3;
                throw body;
              } else if (arg0 === 2) {
                logger = 3;
                obj1 = { value: null, done: true };
                obj1[0] = body;
                return obj1;
              } else {
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = callback2(709).wait(() => {
                  let obj = _undefined(_undefined2[4]);
                  obj = { type: "VIRTUAL_CURRENCY_REDEEM_START", skuId: c0 };
                  obj.dispatch(obj);
                });
                if (dependencyMap != null) {
                  dependencyMap();
                }
                c4 = 1;
                logger = c4.get(callback);
                applicationId = undefined;
                if (logger != null) {
                  applicationId = logger.applicationId;
                }
                let result = null != applicationId;
                if (result) {
                  let obj8 = callback(8497);
                  result = obj8.isTestModeForApplication(applicationId);
                }
                c8 = result;
                obj2 = { checkout_session_id: null };
                obj2[0] = callback2;
                if (c8) {
                  obj2.test_mode = true;
                }
                const HTTP = callback(530).HTTP;
                let obj3 = { url: null, body: null, rejectWithError: false };
                obj3[0] = c5.VIRTUAL_CURRENCY_SKU_REDEEM(callback);
                obj3[1] = obj2;
                c5 = 3;
                logger = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = HTTP.post(obj3);
                return obj4;
              }
            } else if (2 === tmp7) {
              c4 = 0;
              closure_14 = c3;
              if (closure_14 instanceof callback(4376).BillingError) {
                billingError = closure_14;
              } else {
                billingError = new callback(4376).BillingError(closure_14);
              }
              let obj6 = callback2(709);
              const obj5 = { type: "VIRTUAL_CURRENCY_REDEEM_FAIL", skuId: null, error: null };
              obj5[1] = callback;
              obj5[2] = billingError;
              obj6.dispatch(obj5);
              if (c5) {
                applicationId();
              }
              if (c4 != null) {
                tmp69(billingError);
              }
              logger = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              logger = 3;
              throw body;
            } else if (arg0 === 2) {
              c4 = 0;
              logger = 3;
              obj6 = { value: null, done: true };
              obj6[0] = body;
              return obj6;
            } else {
              throwTypeErrorResult = callback2;
              body = body.body;
              throwTypeErrorResult = body;
              if (null != body) {
                throwTypeErrorResult = callback2;
                const _Array = Array;
                throwTypeErrorResult = body;
                if (Array.isArray(body)) {
                  obj = callback2(709);
                  const obj7 = { type: "VIRTUAL_CURRENCY_REDEEM_SUCCESS", skuId: null, entitlements: null };
                  obj7[1] = callback;
                  obj7[2] = body;
                  obj.dispatch(obj7);
                  if (c5) {
                    applicationId();
                  }
                  if (c3 != null) {
                    tmp20(body);
                  }
                  c4 = 0;
                  logger = 3;
                  obj8 = { value: null, done: true };
                  obj8[0] = body;
                  return obj8;
                }
              }
              c11 = "Could not read entitlements from Virtual Currency redemption response. Response: ";
              const _Error = Error;
              error = new Error(c11, body);
              logger.error(c11, body);
              obj3 = callback2(1208);
              const obj9 = { tags: null };
              obj9[0] = { app_context: "virtual_currency" };
              obj3.captureException(error, obj9);
              throw error;
            }
          } catch (tmp98) {
            c3 = tmp98;
            throwTypeErrorResult = c4;
            if (tmp4 === c4) {
              throwTypeErrorResult = tmp2;
              logger = tmp2;
              throw tmp98;
            } else {
              c5 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
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
let closure_6 = new timestampDefault("VirtualCurrencyActionCreators");
const tmp2 = new timestampDefault("VirtualCurrencyActionCreators");
let result = require("set").fileFinishedImporting("modules/virtual_currency/VirtualCurrencyActionCreators.tsx");

export { fetchVirtualCurrencyBalance };
export const redeemVirtualCurrencyForSKU = function redeemVirtualCurrencyForSKU(arg0) {
  const self = this;
  const apply = _redeemVirtualCurrencyForSKU.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setBalancePillOverlay = function setBalancePillOverlay(balancePillOverlay) {
  let obj = dispatcherDefault;
  obj = { type: "VIRTUAL_CURRENCY_SET_BALANCE_PILL_OVERLAY", balancePillOverlay };
  return obj.dispatch(obj);
};
