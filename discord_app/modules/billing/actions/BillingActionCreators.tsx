// discord_app/modules/billing/actions/BillingActionCreators.tsx
import sendRequest from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import getPremiumPlanItem from "../../../utils/PremiumUtils.tsx";
import performRedirect from "HandleConfirmPaymentRegistry.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import createFromServer from "../../../records/PaymentSourceRecord.tsx";
import handlePaymentSourceCreateEnd from "../../../stores/billing/BillingInfoStore.tsx";
import reset from "../../../stores/billing/SubscriptionStore.tsx";
import ME from "../../../Constants.tsx";
import { UserLazyPerkSyncLevels } from "../../../components/billing/BillingConstants.tsx";
import sum from "../../../../discord_common/js/shared/Constants.tsx";
import obj132 from "../../../../_runtime/00002_obj132.js";

require = fn;
function _deletePaymentSource() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let billingError = tmp7;
              billingError = undefined;
              closure_1_1(closure_1_2[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
              c4 = 1;
              const HTTP = callback(closure_1_2[9]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = closure_1_10.BILLING_PAYMENT_SOURCE(callback);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.del(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = closure_3;
            billingError = new callback(4273).BillingError(dependencyMap);
            let obj3 = billingError(709);
            obj3 = { type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: null };
            obj3[1] = billingError;
            obj3.dispatch(obj3);
            throw billingError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = billingError(709);
            const obj5 = { type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: null };
            obj5[1] = callback;
            obj.dispatch(obj5);
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp30) {
          closure_3 = tmp30;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp30;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updatePaymentSource() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              dependencyMap = tmp7;
              let lib;
              let lib2;
              dependencyMap = undefined;
              lib2(closure_1_2[8]).dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
              c5 = 1;
              const billingAddress = lib2.billingAddress;
              ({ line1, line2, postalCode } = billingAddress);
              const obj10 = lib2(closure_1_2[8]);
              const HTTP = lib(closure_1_2[9]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: false };
              obj1[0] = closure_1_10.BILLING_PAYMENT_SOURCE(lib);
              const obj2 = { billing_address: null, expires_month: null, expires_year: null, default: null };
              let obj3 = {};
              const merged = Object.assign(closure_1_4(billingAddress, closure_1_3));
              obj3.line_1 = line1;
              obj3.line_2 = line2;
              obj3.postal_code = postalCode;
              obj2[0] = obj3;
              ({ expiresMonth: obj12[1], expiresYear: obj12[2], isDefault: obj12[3] } = lib2);
              obj1[1] = obj2;
              c6 = 2;
              c7 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.patch(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_3 = closure_4;
            obj3 = lib(4061);
            dependencyMap = obj3.parseV8BillingAddressSkemaErrorToBillingError(closure_3);
            obj4 = lib2(709);
            const obj5 = { type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error: null };
            obj5[1] = dependencyMap;
            obj4.dispatch(obj5);
            throw dependencyMap;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            lib = arg1;
            lib2 = c6.createFromServer(lib.body);
            obj = lib2(709);
            const obj7 = { type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: null };
            obj7[1] = lib2;
            obj.dispatch(obj7);
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp28) {
          closure_4 = tmp28;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp28;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_21 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPaymentSources() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib = tmp3;
            c0 = tmp7;
            c0 = undefined;
            lib = undefined;
            if (closure_1_7.isPaymentSourceFetching) {
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              c3 = 1;
              const HTTP = closure_1_0(closure_1_2[9]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = closure_1_10.BILLING_PAYMENT_SOURCES;
              const value = HTTP.get(obj1);
              c0 = value;
              closure_1_1(closure_1_2[8]).wait(() => {
                callback(tmp26[8]);
                const obj = { type: "BILLING_PAYMENT_SOURCES_FETCH_START", request: c0 };
                return obj.dispatch(obj);
              });
              c4 = 2;
              c5 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = value;
              return obj2;
            }
          }
        } else if (1 === tmp7) {
          c3 = 0;
          let obj4 = lib(709);
          obj4.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" });
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          lib = arg1;
          obj = lib(709);
          obj4 = { type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: null };
          obj4[1] = lib.body;
          obj.dispatch(obj4);
          c3 = 0;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = lib;
          return obj5;
        }
      } catch (tmp26) {
        dependencyMap = tmp26;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp26;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPaymentSource() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback = tmp7;
              let lib;
              callback = undefined;
              c4 = 1;
              const HTTP = lib(closure_1_2[9]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = closure_1_10.BILLING_PAYMENT_SOURCE(lib);
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            dependencyMap = closure_3;
            let obj4 = callback(709);
            obj4.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" });
            throw dependencyMap;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            callback = c6.createFromServer(lib.body);
            obj = callback(709);
            obj4 = { type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: null };
            obj4[1] = callback;
            obj.dispatch(obj4);
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = lib;
            return obj5;
          }
        } catch (tmp28) {
          closure_3 = tmp28;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp28;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_23 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchWalletInformation() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let obj6 = tmp3;
              let lib = tmp7;
              lib = undefined;
              obj6 = undefined;
              obj1 = { type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId: null };
              obj1[1] = callback;
              closure_1_1(closure_1_2[8]).dispatch(obj1);
              c4 = 1;
              const HTTP = callback(closure_1_2[9]).HTTP;
              let obj2 = { url: null, query: null, rejectWithError: true };
              obj2[0] = closure_1_10.BILLING_WALLET_INFORMATION(callback);
              obj2[1] = { get_history: false };
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            obj2 = lib(obj6[8]);
            const obj4 = { type: "BILLING_WALLET_BALANCE_FETCH_FAIL", paymentSourceId: null };
            obj4[1] = callback;
            obj2.dispatch(obj4);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            lib = arg1;
            obj6 = { currency: null, amount: null };
            obj6[0] = lib.body.currency;
            obj6[1] = lib.body.balance;
            const obj7 = { type: "BILLING_WALLET_BALANCE_FETCH_SUCCESS", paymentSourceId: null, currency: null, amount: null };
            obj7[1] = callback;
            obj7[2] = obj6.currency;
            obj7[3] = obj6.amount;
            lib(obj6[8]).dispatch(obj7);
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = obj6;
            return obj;
          }
        } catch (tmp15) {
          closure_3 = tmp15;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp15;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchPayment() {
  const self = this;
  const apply = _fetchPayment.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPayment() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      const table = tmp2;
      const callback = tmp5;
      const HTTP = lib(closure_1_2[9]).HTTP;
      obj1 = { url: null, rejectWithError: true };
      obj1[0] = closure_1_10.BILLING_PAYMENT(lib);
      lib = yield HTTP.get(obj1);
      const obj = callback(table[8]);
      const obj4 = { type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: null };
      obj4[1] = lib.body;
      obj.dispatch(obj4);
      return lib;
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchPayments() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*() {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              let body = tmp7;
              let num7;
              let callback;
              if (num7 === undefined) {
                num7 = 10;
              }
              body = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              callback(body[8]).dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
              c5 = 1;
              const HTTP = num7(body[9]).HTTP;
              const obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: false };
              obj2[0] = constants.BILLING_PAYMENTS;
              const obj3 = { limit: null, before: null };
              obj3[0] = num7;
              obj3[1] = callback;
              obj2[1] = obj3;
              c6 = 3;
              c7 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = HTTP.get(obj2);
              return obj4;
            }
          } else if (2 === tmp7) {
            c5 = 0;
            closure_3 = closure_4;
            obj4 = callback(body[8]);
            obj4.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" });
            throw closure_3;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            body = arg1;
            obj = callback(body[8]);
            const obj6 = { type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: null };
            obj6[1] = body.body;
            obj.dispatch(obj6);
            c5 = 0;
            c7 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = body;
            return obj7;
          }
        } catch (tmp23) {
          closure_4 = tmp23;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp23;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_27 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchSubscriptions() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib = tmp3;
            let callback = tmp5;
            callback = undefined;
            lib = undefined;
            closure_1_1(closure_1_2[8]).wait(() => {
              callback(tmp42[8]).dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
            });
            c3 = 1;
            let FULL_RESYNC = closure_1_14.ADD_PERKS_IF_DETECTED;
            const lastLazyPerkSync = closure_1_8.getLastLazyPerkSync();
            callback = lastLazyPerkSync;
            let tmp36 = null == lastLazyPerkSync;
            if (!tmp36) {
              let obj5 = closure_1_1(closure_1_2[12])();
              tmp36 = obj5.diff(lastLazyPerkSync, "hours") >= 1;
            }
            if (tmp36) {
              FULL_RESYNC = closure_1_14.FULL_RESYNC;
              callback = closure_1_1(closure_1_2[12])();
            }
            const HTTP = closure_1_0(closure_1_2[9]).HTTP;
            obj1 = { url: null, oldFormErrors: true, rejectWithError: false, query: null };
            obj1[0] = closure_1_10.BILLING_SUBSCRIPTIONS;
            const obj2 = { sync_level: null };
            obj2[0] = FULL_RESYNC;
            obj1[3] = obj2;
            c4 = 2;
            c5 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = HTTP.get(obj1);
            return obj3;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          let obj4 = lib(709);
          obj4.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" });
          throw dependencyMap;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          lib = arg1;
          if (null == lib.body) {
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            const billingError = new callback(4273).BillingError("response body is null, response: " + JSON.stringify(lib), lib.status);
            throw billingError;
          } else {
            obj = lib(709);
            obj5 = { type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: null, lastLazyPerkSync: null };
            obj5[1] = lib.body;
            obj5[2] = callback;
            obj.dispatch(obj5);
            c3 = 0;
            c5 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = lib;
            return obj6;
          }
        }
      } catch (tmp42) {
        dependencyMap = tmp42;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp42;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_28 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getPerksRelevance() {
  const self = this;
  const tmp = callback(function*() {
    const callback = tmp3;
    closure_1_1(closure_1_2[8]).wait(() => {
      tmp3(tmp19[8]).dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_START" });
    });
    c3 = 1;
    const HTTP = closure_1_0(closure_1_2[9]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_10.BILLING_PERKS_RELEVANCE;
    yield HTTP.get(obj1);
    if (1 === tmp7) {
      c3 = 0;
      let obj3 = callback(709);
      obj3.dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL" });
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      const body = arg1;
      const obj = callback(709);
      obj3 = { type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS", res: null };
      obj3[1] = body.body;
      obj.dispatch(obj3);
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  });
  closure_29 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchMostRecentSubscription() {
  const self = this;
  const tmp = callback(function*() {
    const callback = tmp3;
    closure_1_1(closure_1_2[8]).wait(() => {
      tmp3(tmp27[8]).dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    const HTTP = closure_1_0(closure_1_2[9]).HTTP;
    obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
    obj1[0] = closure_1_10.BILLING_SUBSCRIPTIONS;
    const obj2 = { include_inactive: true, limit: 2, exclude_unpaid_statuses: true, subscription_type: null };
    obj2[3] = closure_1_19.PREMIUM;
    obj1[1] = obj2;
    yield HTTP.get(obj1);
    c3 = 0;
    let obj5 = callback(709);
    obj5.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
    closure_0 = yield "HermesInternal";
    let first = null;
    if (closure_0.body.length > 0) {
      first = closure_0.body[0];
    }
    const obj = { type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS", subscription: null };
    obj[1] = first;
    callback(709).dispatch(obj);
    obj1 = callback(709);
    let tmp17 = null;
    if (closure_0.body.length > 1) {
      tmp17 = closure_0.body[1];
    }
    obj5 = { type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS", subscription: null };
    obj5[1] = tmp17;
    obj1.dispatch(obj5);
    c3 = 0;
    return closure_0;
  });
  closure_30 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createSubscription() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c10 = 0;
    c11 = 0;
    c8 = 0;
    const iter = (function*(arg0, gateway_checkout_context) {
      if (c11 === 2) {
        c11 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw gateway_checkout_context;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = gateway_checkout_context;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c11 = 2;
          if (0 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw gateway_checkout_context;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value: null, done: true };
              obj[0] = gateway_checkout_context;
              return obj;
            } else {
              c6 = tmp2;
              c7 = tmp6;
              let lib;
              let lib2;
              obj14 = undefined;
              obj13 = undefined;
              post = undefined;
              HTTP = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              ({ items: closure_0, paymentSource: c1, trialId: obj14, code: obj13, currency: post, metadata: HTTP, referralCode: c6, loadId: c7, expectedInvoicePrice: c8, expectedRenewalPrice: c9 } = lib);
              c10 = undefined;
              c11 = undefined;
              closure_12 = undefined;
              let billingError;
              c10 = 1;
              c11 = 1;
              return { value: "ct", done: true };
            }
          } else {
            if (1 === tmp6) {
              if (arg0 === 1) {
                c11 = 3;
                throw gateway_checkout_context;
              } else if (arg0 === 2) {
                c11 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = gateway_checkout_context;
                return obj1;
              } else {
                lib2(obj14[8]).dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
                const obj26 = lib2(obj14[8]);
                lib = lib(obj14[13]).coerceExistingItemsToNewItemInterval(lib);
                c10 = null;
                if (null != lib2) {
                  if (set.has(lib2.type)) {
                    c10 = 2;
                    c11 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = lib(obj14[14]).popupBridgeState(lib2.type);
                    return obj2;
                  }
                }
                const obj27 = lib(obj14[13]);
              }
            } else {
              if (2 === tmp6) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw gateway_checkout_context;
                } else if (arg0 === 2) {
                  c11 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = gateway_checkout_context;
                  return obj3;
                } else {
                  c11 = gateway_checkout_context;
                  let obj12 = lib(obj14[9]);
                  lib2 = c11;
                  const aPIBaseURL = obj12.getAPIBaseURL();
                  if (c11 == null) {
                    lib2 = "";
                  }
                  c10 = aPIBaseURL + c10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(lib2.type, lib2, "success");
                }
              } else if (3 === tmp6) {
                c8 = 0;
                closure_14 = c9;
                if (closure_14 instanceof lib(obj14[10]).BillingError) {
                  billingError = closure_14;
                } else {
                  billingError = new lib(obj14[10]).BillingError(closure_14);
                }
                let obj8 = lib2(obj14[8]);
                const obj4 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: null };
                obj4[1] = billingError;
                obj8.dispatch(obj4);
                if (billingError.code !== lib(obj14[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
                  throw billingError;
                } else if (closure_14.body.payment_id) {
                  c11 = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = callback(closure_14.body, lib2);
                  return obj5;
                } else {
                  let obj10 = lib(obj14[14]);
                  throw obj10.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
                }
              } else if (4 === tmp6) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw gateway_checkout_context;
                } else {
                  let tmp14 = gateway_checkout_context;
                  if (arg0 === 2) {
                    c8 = 0;
                    c11 = 3;
                    const obj6 = { value: null, done: true };
                    obj6[0] = gateway_checkout_context;
                    return obj6;
                  }
                }
              } else if (5 === tmp6) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw gateway_checkout_context;
                } else if (arg0 === 2) {
                  c8 = 0;
                  c11 = 3;
                  const obj7 = { value: null, done: true };
                  obj7[0] = gateway_checkout_context;
                  return obj7;
                } else {
                  obj14.gateway_checkout_context = gateway_checkout_context;
                  obj14.purchase_token = lib(obj14[17]).getPurchaseToken();
                  obj14.referral_code = c6;
                  obj14.load_id = c7;
                  obj14.expected_invoice_price = c8;
                  obj14.expected_renewal_price = c9;
                  obj13.body = obj14;
                  obj13.oldFormErrors = true;
                  obj13.rejectWithError = false;
                  c10 = 6;
                  c11 = 1;
                  obj8 = { value: null, done: false };
                  obj8[0] = post(obj13);
                  return obj8;
                }
              } else if (arg0 === 1) {
                c11 = 3;
                throw gateway_checkout_context;
              } else if (arg0 === 2) {
                c8 = 0;
                c11 = 3;
                const obj9 = { value: null, done: true };
                obj9[0] = gateway_checkout_context;
                return obj9;
              } else {
                closure_12 = gateway_checkout_context;
                obj = lib2(obj14[8]);
                obj10 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: null };
                obj10[1] = closure_12.body;
                obj.dispatch(obj10);
                const obj11 = { subscription: null, redirectConfirmation: false };
                obj11[0] = closure_12.body;
                c8 = 0;
                c11 = 3;
                obj12 = { value: null, done: true };
                obj12[0] = obj11;
                return obj12;
              }
              obj14.payment_source_token = tmp14;
              obj14.trial_id = obj14;
              obj14.return_url = c10;
              obj14.code = obj13;
              if (null != lib2) {
                let USD = post;
              } else {
                USD = constants.USD;
              }
              obj14.currency = USD;
              obj14.metadata = HTTP;
              const gatewayCheckoutContext = lib(obj14[16]).createGatewayCheckoutContext(lib2);
              c10 = 5;
              c11 = 1;
              const obj17 = lib(obj14[16]);
            }
            c8 = 1;
            HTTP = lib(obj14[9]).HTTP;
            post = HTTP.post;
            obj13 = { url: c10.BILLING_SUBSCRIPTIONS };
            obj14 = { items: lib.map((item, index) => ({ plan_id: item.planId, quantity: item.quantity })) };
            let id = null;
            if (null != lib2) {
              id = lib2.id;
            }
            obj14.payment_source_id = id;
            tmp14 = null;
            if (null != lib2) {
              c10 = 4;
              c11 = 1;
              const obj15 = { value: null, done: false };
              obj15[0] = lib(obj14[15]).createPaymentSourceToken(lib2);
              return obj15;
            }
          }
        } catch (tmp104) {
          c9 = tmp104;
          if (tmp3 === c8) {
            c11 = tmp;
            throw tmp104;
          } else {
            c10 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _payInvoiceManually() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c14 = 0;
    c15 = 0;
    c12 = 0;
    return (function*(arg0, arg1, arg2, arg3, arg4) {
      if (c15 === 2) {
        c15 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c15 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_10 = tmp3;
              closure_11 = tmp5;
              let obj11;
              let obj10;
              let post;
              closure_5 = null;
              if (null != closure_2) {
                if (closure_1_18.has(closure_2.type)) {
                  c14 = 1;
                  c15 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = lib(closure_2[14]).popupBridgeState(closure_2.type);
                  return obj1;
                }
              }
            }
          } else {
            if (1 === tmp8) {
              if (arg0 === 1) {
                c15 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c15 = 3;
                const obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                obj11 = arg1;
                let obj7 = lib(closure_2[9]);
                closure_5 = obj11;
                const aPIBaseURL = obj7.getAPIBaseURL();
                if (obj11 == null) {
                  closure_5 = "";
                }
                closure_5 = aPIBaseURL + closure_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_2.type, closure_5, "success");
              }
            } else if (2 === tmp8) {
              let set = 0;
              let HTTP = closure_13;
              if (HTTP instanceof lib(closure_2[10]).BillingError) {
                let billingError = HTTP;
              } else {
                billingError = new lib(closure_2[10]).BillingError(HTTP);
              }
              post = billingError;
              if (post.code !== lib(closure_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
                let obj5 = callback(closure_2[8]);
                let obj3 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: null };
                obj3[1] = post;
                obj5.dispatch(obj3);
                throw post;
              } else if (HTTP.body.payment_id) {
                c15 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = callback2(HTTP.body, closure_2);
                return obj4;
              } else {
                obj3 = lib(closure_2[14]);
                throw obj3.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
              }
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c15 = 3;
                throw arg1;
              } else {
                let tmp9 = arg1;
                if (arg0 === 2) {
                  set = 0;
                  c15 = 3;
                  obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                }
              }
            } else if (arg0 === 1) {
              c15 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              set = 0;
              c15 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } else {
              obj10 = arg1;
              obj7 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: null };
              obj7[1] = obj10.body;
              callback(closure_2[8]).dispatch(obj7);
              const obj8 = { subscription: null, redirectConfirmation: null };
              obj8[0] = obj10.body;
              obj8[1] = set.has(closure_2.type);
              set = 0;
              c15 = 3;
              obj = { value: null, done: true };
              obj[0] = obj8;
              return obj;
            }
            obj11.payment_source_token = tmp9;
            obj11.return_url = closure_5;
            obj11.currency = closure_3;
            obj11 = lib(closure_2[17]);
            obj11.purchase_token = obj11.getPurchaseToken();
            obj11.load_id = closure_4;
            obj10.body = obj11;
            obj10.oldFormErrors = true;
            obj10.rejectWithError = false;
            c14 = 4;
            c15 = 1;
            const obj9 = { value: null, done: false };
            obj9[0] = post(obj10);
            return obj9;
          }
          set = 1;
          HTTP = lib(closure_2[9]).HTTP;
          post = HTTP.post;
          obj10 = { url: closure_10.BILLING_INVOICE_MANUAL_PAYMENT(lib.id, callback) };
          obj11 = {};
          let id = null;
          if (null != closure_2) {
            id = closure_2.id;
          }
          obj11.payment_source_id = id;
          tmp9 = null;
          if (null != closure_2) {
            c14 = 3;
            c15 = 1;
            const obj12 = { value: null, done: false };
            obj12[0] = lib(closure_2[15]).createPaymentSourceToken(closure_2);
            return obj12;
          }
        } catch (tmp89) {
          closure_13 = tmp89;
          if (tmp4 === set) {
            c15 = tmp2;
            throw tmp89;
          } else {
            c14 = tmp;
          }
        }
      }
    })();
  });
  closure_32 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handlePaymentConfirmation(body, paymentSource) {
  if (null != paymentSource) {
    if (set.has(paymentSource.type)) {
      const adyenPaymentConfirmationHandler = new performRedirect.AdyenPaymentConfirmationHandler(paymentSource, body);
      let confirmPaymentResult = adyenPaymentConfirmationHandler.confirmPayment();
    }
    return confirmPaymentResult;
  }
  confirmPaymentResult = new performRedirect.StripePaymentConfirmationHandler(paymentSource, body).confirmPayment();
  const stripePaymentConfirmationHandler = new performRedirect.StripePaymentConfirmationHandler(paymentSource, body);
}
function _redirectedPaymentSucceeded() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      closure_2 = tmp5;
      closure_1 = yield closure_1_25(callback);
      if (closure_1 != null) {
        let body = closure_1.body;
      }
      if (null == body) {
        throw callback(closure_2[14]).dispatchConfirmationError("could not fetch payment");
      }
      closure_2 = closure_6.createFromServer(closure_1.body.payment_source);
      if (!set.has(closure_2.type)) {
        const obj = callback(closure_2[14]);
        throw obj.dispatchConfirmationError("unsupported redirect payment source");
      }
      if (closure_1 != null) {
        body = closure_1.body;
        if (body != null) {
          const status = body.status;
        }
      }
      if (status === constants2.FAILED) {
        const obj3 = callback(closure_2[14]);
        throw obj3.dispatchConfirmationError("payment failed");
      }
      let result = closure_2.paymentGateway !== constants.STRIPE;
      if (!result) {
        obj1 = callback(closure_2[15]);
        result = obj1.paymentIntentSucceeded(callback);
      }
      return result;
    })();
  });
  closure_34 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _cancelSubscription() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp3;
              closure_3 = tmp7;
              let callback;
              let billingError;
              callback2(709).dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
              c6 = 1;
              const HTTP = callback(530).HTTP;
              obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = closure_1_10.BILLING_SUBSCRIPTION(callback);
              const obj2 = { location: null, location_stack: null };
              obj2[0] = dependencyMap;
              obj2[1] = billingError;
              obj1[1] = obj2;
              c7 = 2;
              c8 = 1;
              let obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c6 = 0;
            dependencyMap = closure_5;
            billingError = new callback(4273).BillingError(dependencyMap);
            obj3 = billingError(709);
            const obj4 = { type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: null };
            obj4[1] = billingError;
            obj3.dispatch(obj4);
            throw billingError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = arg1;
            return obj5;
          } else {
            callback = arg1;
            obj = billingError(709);
            obj.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" });
            c6 = 0;
            c8 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = callback;
            return obj6;
          }
        } catch (tmp29) {
          closure_5 = tmp29;
          if (tmp4 === c6) {
            c8 = tmp2;
            throw tmp29;
          } else {
            c7 = tmp;
          }
        }
      }
    })();
  });
  closure_35 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateSubscription(currency, arg1, arg2, itemPlansTotalServerPrice, closure_1_6, arg5) {
  const self = this;
  const apply = _updateSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateSubscription() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4, arg5, arg6) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    closure_5 = arg5;
    closure_6 = arg6;
    c13 = 0;
    c14 = 0;
    c11 = 0;
    return (function*(arg0, gateway_checkout_context) {
      if (c14 === 2) {
        c14 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw gateway_checkout_context;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = gateway_checkout_context;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c14 = 2;
          if (0 === c13) {
            if (arg0 === 1) {
              c14 = 3;
              throw gateway_checkout_context;
            } else if (arg0 === 2) {
              c14 = 3;
              obj = { value: null, done: true };
              obj[0] = gateway_checkout_context;
              return obj;
            } else {
              let billingError = tmp3;
              closure_9 = tmp5;
              c7 = undefined;
              closure_8 = undefined;
              closure_9 = undefined;
              billingError = undefined;
              lib2(709).dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
              c11 = 1;
              obj1 = {};
              closure_8 = obj1;
              ({ status: obj28.status, paymentSource } = lib2);
              let id;
              if (paymentSource != null) {
                id = paymentSource.id;
              }
              obj1.payment_source_id = id;
              let tmp52 = null;
              if (null != lib2.paymentSource) {
                c13 = 2;
                c14 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = lib(4469).createPaymentSourceToken(lib2.paymentSource);
                return obj2;
              }
              const obj27 = lib2(709);
            }
          } else if (1 === tmp8) {
            c11 = 0;
            c11 = closure_12;
            if (c11 instanceof lib(4273).BillingError) {
              billingError = c11;
            } else {
              billingError = new lib(4273).BillingError(c11);
            }
            let obj15 = lib2(709);
            const obj3 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: null };
            obj3[1] = billingError;
            obj15.dispatch(obj3);
            if (billingError.code !== lib(4061).ErrorCodes.CONFIRMATION_REQUIRED) {
              throw billingError;
            } else if (c11.body.payment_id) {
              c14 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = callback(c11.body, lib2.paymentSource);
              return obj4;
            } else {
              throw lib(4467).dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
            }
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              c14 = 3;
              throw gateway_checkout_context;
            } else {
              tmp52 = gateway_checkout_context;
              if (arg0 === 2) {
                c11 = 0;
                c14 = 3;
                let obj5 = { value: null, done: true };
                obj5[0] = gateway_checkout_context;
                return obj5;
              }
            }
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c14 = 3;
                throw gateway_checkout_context;
              } else if (arg0 === 2) {
                c11 = 0;
                c14 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = gateway_checkout_context;
                return obj6;
              } else {
                closure_8.gateway_checkout_context = gateway_checkout_context;
                closure_8.load_id = closure_6;
                closure_8.pause_duration = lib2.pauseDuration;
                closure_8.purchase_token = lib(4475).getPurchaseToken();
                closure_8.expected_invoice_price = dependencyMap;
                closure_8.expected_renewal_price = closure_3;
                c7 = closure_8;
                if (null != lib2.paymentSource) {
                  if (set.has(lib2.paymentSource.type)) {
                    let obj11 = lib(4467);
                    c13 = 4;
                    c14 = 1;
                    let obj7 = { value: null, done: false };
                    obj7[0] = obj11.popupBridgeState(lib2.paymentSource.type);
                    return obj7;
                  }
                }
                const obj26 = lib(4475);
              }
            } else if (4 === tmp8) {
              if (arg0 === 1) {
                c14 = 3;
                throw gateway_checkout_context;
              } else if (arg0 === 2) {
                c11 = 0;
                c14 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = gateway_checkout_context;
                return obj8;
              } else {
                closure_8 = gateway_checkout_context;
                obj5 = lib(530);
                c7 = closure_8;
                const aPIBaseURL = obj5.getAPIBaseURL();
                if (closure_8 == null) {
                  c7 = "";
                }
                c7.return_url = aPIBaseURL + billingError.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(lib2.paymentSource.type, c7, "success");
              }
            } else if (arg0 === 1) {
              c14 = 3;
              throw gateway_checkout_context;
            } else if (arg0 === 2) {
              c11 = 0;
              c14 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = gateway_checkout_context;
              return obj9;
            } else {
              closure_9 = gateway_checkout_context;
              obj = lib2(709);
              const obj10 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: null };
              obj10[1] = closure_9.body;
              obj.dispatch(obj10);
              obj11 = { subscription: null, redirectConfirmation: false };
              obj11[0] = closure_9.body;
              c11 = 0;
              c14 = 3;
              const obj12 = { value: null, done: true };
              obj12[0] = obj11;
              return obj12;
            }
            if (null != lib2.items) {
              obj7 = lib(4039);
              const result = obj7.coerceExistingItemsToNewItemInterval(lib2.items);
              c7.items = result.map((item, index) => {
                const obj = {};
                const merged = Object.assign(Object.assign(item, Object.create(null)));
                obj.plan_id = item.planId;
                return obj;
              });
            }
            const HTTP = lib(530).HTTP;
            const obj13 = { url: null, query: null, body: null, oldFormErrors: true, rejectWithError: false };
            obj13[0] = billingError.BILLING_SUBSCRIPTION(lib.id);
            const obj14 = { location: null, location_stack: null };
            obj14[0] = closure_5;
            obj14[1] = closure_4;
            obj13[1] = obj14;
            obj13[2] = c7;
            c13 = 5;
            c14 = 1;
            obj15 = { value: null, done: false };
            obj15[0] = HTTP.patch(obj13);
            return obj15;
          }
          closure_8.payment_source_token = tmp52;
          closure_8.currency = lib2.currency;
          c13 = 3;
          c14 = 1;
          const obj16 = { value: null, done: false };
          obj16[0] = lib(4054).createGatewayCheckoutContext(lib2.paymentSource);
          return obj16;
        } catch (tmp99) {
          closure_12 = tmp99;
          if (tmp4 === c11) {
            c14 = tmp2;
            throw tmp99;
          } else {
            c13 = tmp;
          }
        }
      }
    })();
  });
  closure_37 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _voidPendingPayment() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === table) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[9]).HTTP;
              obj1 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj1[0] = closure_1_10.BILLING_PAYMENTS_VOID(callback);
              table = 1;
              c1 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp9) {
          c1 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_38 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchIpCountryCode() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*() {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              let callback = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              callback = undefined;
              body = undefined;
              let country_code;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (!flag) {
                if (null != closure_7.ipCountryCodeRequest) {
                  c6 = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = closure_7.ipCountryCodeRequest;
                  return obj2;
                }
              }
              c4 = 1;
              const HTTP = flag(body[9]).HTTP;
              const obj3 = { url: null, rejectWithError: false };
              obj3[0] = constants.BILLING_COUNTRY_CODE;
              callback = HTTP.get(obj3);
              let obj8 = callback(body[8]);
              obj8.wait(() => {
                callback(table[8]);
                const obj = { type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request: callback };
                return obj.dispatch(obj);
              });
              c5 = 3;
              c6 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = callback;
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            c4 = country_code;
            obj4 = callback(body[8]);
            obj4.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" });
            c6 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = c4;
            return obj5;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            body = arg1;
            country_code = body.body.country_code;
            obj = callback(body[8]);
            const obj7 = { type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: null };
            obj7[1] = country_code;
            obj.dispatch(obj7);
            c4 = 0;
            c6 = 3;
            obj8 = { value: null, done: true };
            obj8[0] = body;
            return obj8;
          }
        } catch (tmp34) {
          country_code = tmp34;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp34;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_39 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchIpLocation() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*() {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === message) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              let callback = tmp7;
              let flag;
              if (flag === undefined) {
                flag = false;
              }
              callback = undefined;
              closure_2 = undefined;
              let country_code;
              let subdivision_code;
              message = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (!flag) {
                if (null != closure_7.ipLocationRequest) {
                  c6 = 3;
                  let obj2 = { value: null, done: true };
                  obj2[0] = closure_7.ipLocationRequest;
                  return obj2;
                }
              }
              subdivision_code = 1;
              const HTTP = flag(closure_2[9]).HTTP;
              const obj3 = { url: null, rejectWithError: false };
              obj3[0] = constants2.BILLING_LOCATION;
              callback = HTTP.get(obj3);
              let obj8 = callback(closure_2[8]);
              obj8.wait(() => {
                callback(table[8]);
                const obj = { type: "BILLING_IP_LOCATION_FETCH_START", request: callback };
                return obj.dispatch(obj);
              });
              message = 3;
              c6 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = callback;
              return obj4;
            }
          } else if (2 === tmp7) {
            subdivision_code = 0;
            message = country_code;
            obj2 = callback(closure_2[19]);
            const obj5 = { error_message: null };
            obj5[0] = message.message;
            obj2.track(constants.BILLING_IP_LOCATION_FETCH_ERROR, obj5);
            obj4 = callback(closure_2[8]);
            obj4.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" });
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = message;
            return obj6;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            subdivision_code = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          } else {
            closure_2 = arg1;
            country_code = closure_2.body.country_code;
            subdivision_code = closure_2.body.subdivision_code;
            obj8 = { type: "BILLING_SET_IP_LOCATION", location: null };
            const obj9 = { countryCode: null, subdivisionCode: null };
            obj9[0] = country_code;
            obj9[1] = subdivision_code;
            obj8[1] = obj9;
            callback(closure_2[8]).dispatch(obj8);
            const obj14 = callback(closure_2[8]);
            const obj10 = { type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: null };
            obj10[1] = country_code;
            callback(closure_2[8]).dispatch(obj10);
            subdivision_code = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_2;
            return obj;
          }
        } catch (tmp32) {
          country_code = tmp32;
          if (tmp4 === subdivision_code) {
            c6 = tmp2;
            throw tmp32;
          } else {
            message = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_40 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _redeemReactivationOffer() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp3;
              let billingError = tmp7;
              const lib = lib2;
              lib2 = undefined;
              billingError = undefined;
              c5 = 1;
              const HTTP = lib(closure_1_2[9]).HTTP;
              obj1 = { url: null, rejectWithError: false };
              obj1[0] = closure_1_10.REACTIVATION_OFFER_REDEEM(lib.id, lib2.id);
              c6 = 2;
              c7 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.post(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c5 = 0;
            closure_3 = closure_4;
            if (closure_3 instanceof lib(billingError[10]).BillingError) {
              billingError = closure_3;
            } else {
              billingError = new lib(billingError[10]).BillingError(closure_3);
            }
            obj1 = lib2(billingError[8]);
            const obj3 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: null };
            obj3[1] = billingError;
            obj1.dispatch(obj3);
            throw billingError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            lib2 = arg1;
            const obj4 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: null };
            obj4[1] = lib2.body;
            lib2(billingError[8]).dispatch(obj4);
            const obj7 = lib2(billingError[8]);
            const obj5 = { type: "BILLING_USER_OFFER_REDEEMED", offerId: null };
            obj5[1] = lib.id;
            lib2(billingError[8]).dispatch(obj5);
            c5 = 0;
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp30) {
          closure_4 = tmp30;
          if (tmp4 === c5) {
            c7 = tmp2;
            throw tmp30;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  closure_41 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _redeemUserDiscountOffer() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp3;
              let callback = tmp7;
              c4 = 1;
              const HTTP = lib(closure_1_2[9]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true };
              obj1[0] = closure_1_10.USER_OFFER_REDEEM;
              const obj2 = { user_discount_offer_id: null };
              obj2[0] = lib.id;
              obj1[1] = obj2;
              c5 = 2;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = closure_3;
            if (callback instanceof lib(4273).BillingError) {
              let billingError = callback;
            } else {
              billingError = new lib(4273).BillingError(callback);
            }
            throw billingError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            obj = callback(709);
            const obj5 = { type: "BILLING_USER_OFFER_REDEEMED", offerId: null };
            obj5[1] = lib.id;
            obj.dispatch(obj5);
            c4 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp29) {
          closure_3 = tmp29;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp29;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_42 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["line1", "line2", "postalCode"];
({ AnalyticEvents: c9, Endpoints: c10, PaymentGateways: unpackModuleId, REDIRECTED_PAYMENT_SOURCES: closure_12, SubscriptionStatusTypes: map1 } = ME);
({ ADYEN_PAYMENT_SOURCES: closure_15, CurrencyCodes: closure_16, PaymentStatusTypes: closure_17, PREPAID_PAYMENT_SOURCES: closure_18, SubscriptionTypes: closure_19 } = sum);
let result = require("obj132").fileFinishedImporting("modules/billing/actions/BillingActionCreators.tsx");
for (const key10070 in require("_getClientSecret")) {
  arg5[key10070] = require("_getClientSecret")[key10070];
  continue;
}
for (const key10074 in require("_validatePaymentSourceBillingAddress")) {
  arg5[key10074] = require("_validatePaymentSourceBillingAddress")[key10074];
  continue;
}

export const deletePaymentSource = function deletePaymentSource() {
  const self = this;
  const apply = _deletePaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updatePaymentSource = function updatePaymentSource() {
  const self = this;
  const apply = _updatePaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPaymentSources = function fetchPaymentSources() {
  const self = this;
  const apply = _fetchPaymentSources.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPaymentSource = function fetchPaymentSource() {
  const self = this;
  const apply = _fetchPaymentSource.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchWalletInformation = function fetchWalletInformation(arg0) {
  const self = this;
  const apply = _fetchWalletInformation.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { fetchPayment };
export const fetchPayments = function fetchPayments() {
  const self = this;
  const apply = _fetchPayments.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSubscriptions = function fetchSubscriptions() {
  const self = this;
  const apply = _fetchSubscriptions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPerksRelevance = function getPerksRelevance() {
  const self = this;
  const apply = _getPerksRelevance.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMostRecentSubscription = function fetchMostRecentSubscription() {
  const self = this;
  const apply = _fetchMostRecentSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createSubscription = function createSubscription() {
  const self = this;
  const apply = _createSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const payInvoiceManually = function payInvoiceManually() {
  const self = this;
  const apply = _payInvoiceManually.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { handlePaymentConfirmation };
export const redirectedPaymentSucceeded = function redirectedPaymentSucceeded() {
  const self = this;
  const apply = _redirectedPaymentSucceeded.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const cancelSubscription = function cancelSubscription(id, c4) {
  const self = this;
  const apply = _cancelSubscription.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteRenewalMutation = function deleteRenewalMutation(currency, closure_1_6) {
  const obj = { amount: 0, currency: currency.currency };
  return updateSubscription(currency, obj, obj, getPremiumPlanItem.getItemPlansTotalServerPrice(currency.items, currency.currency, currency.paymentSourceId), closure_1_6);
};
export { updateSubscription };
export const resubscribeToSubscription = function resubscribeToSubscription(currency, closure_1_6, id) {
  const obj = { amount: 0, currency: currency.currency };
  id = undefined;
  ({ items, currency } = currency);
  if (id != null) {
    id = id.id;
  }
  return updateSubscription(currency, obj, obj, getPremiumPlanItem.getItemPlansTotalServerPrice(items, currency, id), closure_1_6, arg4);
};
export const upgradeSubscription = function upgradeSubscription(renewalMutations, basePlanId, arg2, itemPlansTotalServerPrice, closure_1_6) {
  let obj = getPremiumPlanItem;
  obj = { status: constants.ACTIVE, items: obj.getItemsWithUpsertedPremiumPlanId(renewalMutations, basePlanId) };
  return updateSubscription(renewalMutations, obj, arg2, itemPlansTotalServerPrice, closure_1_6, arg5);
};
export const changeSubscriptionCurrency = function changeSubscriptionCurrency(currency, currency, itemPlansTotalServerPrice, closure_1_6) {
  const obj = { amount: 0, currency: currency.toLowerCase() };
  return updateSubscription(currency, obj, obj, itemPlansTotalServerPrice, closure_1_6, arg4);
};
export const changePaymentSource = function changePaymentSource(currency, paymentSource, currency, closure_1_6) {
  const obj = { amount: 0, currency: currency.currency };
  return updateSubscription(currency, obj, obj, currency, closure_1_6, arg4);
};
export const clearUpdatePaymentSourceError = function clearUpdatePaymentSourceError() {
  dispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
};
export const clearRemovePaymentSourceError = function clearRemovePaymentSourceError() {
  dispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
};
export const clearPaymentAuthenticationError = function clearPaymentAuthenticationError() {
  dispatcherDefault.dispatch({ type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR" });
};
export const cancelPaymentAuthentication = function cancelPaymentAuthentication() {
  dispatcherDefault.dispatch({ type: "PAYMENT_AUTHENTICATION_CANCEL" });
};
export const voidPendingPayment = function voidPendingPayment() {
  const self = this;
  const apply = _voidPendingPayment.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const popupBridgeCallback = function popupBridgeCallback(paymentSourceType) {
  paymentSourceType = paymentSourceType.paymentSourceType;
  ({ state, path, query, insecure } = paymentSourceType);
  let obj = dispatcherDefault;
  obj.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType });
  const HTTP = paymentSourceType(530).HTTP;
  obj = { url: closure_10.BILLING_POPUP_BRIDGE_CALLBACK(paymentSourceType), body: { state, path, query, insecure }, oldFormErrors: true, rejectWithError: false };
  return HTTP.post(obj).then((result) => {
    const obj = { type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType };
    obj.dispatch(obj);
    return result;
  });
};
export const fetchIpCountryCode = function fetchIpCountryCode() {
  const self = this;
  const apply = _fetchIpCountryCode.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPaymentSourceCreationContext = function fetchPaymentSourceCreationContext() {
  const HTTP = sendRequest.HTTP;
  return HTTP.get({ url: closure_10.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: true, rejectWithError: false });
};
export const clearAndFetchPaymentSourceCreationContext = function clearAndFetchPaymentSourceCreationContext() {
  let obj = dispatcherDefault;
  obj.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" });
  const HTTP = sendRequest.HTTP;
  obj = { url: closure_10.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj);
  value.then((result) => {
    const body = result.body;
    if (null != body) {
      let store_country = body.store_country;
      if (store_country == null) {
        store_country = null;
      }
      let obj = { store_country: null, allowed_payment_source_types: null, allowed_billing_address_countries: null };
      obj[0] = store_country;
      let prop = body.allowed_payment_source_types;
      if (prop == null) {
        prop = [];
      }
      obj[1] = prop;
      let prop1 = body.allowed_billing_address_countries;
      if (prop1 == null) {
        prop1 = [];
      }
      obj = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS", data: null };
      obj[2] = prop1;
      obj[1] = obj;
      callback(709).dispatch(obj);
      const obj3 = callback(709);
    } else {
      obj = callback(709);
      obj1 = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL", error: null };
      const _Error = Error;
      error = new Error("Missing response body");
      obj1[1] = error;
      obj.dispatch(obj1);
    }
  }).catch((error) => {
    if (!(error instanceof Error)) {
      const _Error = Error;
      const _String = String;
      error = new Error(String(error));
    }
    callback(709).dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL", error });
  });
};
export const fetchIpLocation = function fetchIpLocation() {
  const self = this;
  const apply = _fetchIpLocation.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetPaymentIntentId = function resetPaymentIntentId() {
  dispatcherDefault.dispatch({ type: "RESET_PAYMENT_ID" });
};
export const resetSubscriptionStore = function resetSubscriptionStore() {
  dispatcherDefault.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
};
export const startBrowserCheckout = function startBrowserCheckout(loadId) {
  const obj = { type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId };
  obj.dispatch(obj);
};
export const redeemReactivationOffer = function redeemReactivationOffer() {
  const self = this;
  const apply = _redeemReactivationOffer.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const redeemUserDiscountOffer = function redeemUserDiscountOffer() {
  const self = this;
  const apply = _redeemUserDiscountOffer.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};