// discord_app/modules/billing/actions/BillingActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import BillingConstants from "../../../components/billing/BillingConstants.tsx";
import BillingSharedActionCreators from "BillingSharedActionCreators.tsx";
import BillingPaymentGatewayActionCreators from "BillingPaymentGatewayActionCreators.tsx";
import HandleConfirmPaymentRegistry from "HandleConfirmPaymentRegistry.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import PaymentSourceRecord from "../../../records/PaymentSourceRecord.tsx";
import BillingInfoStore from "../../../stores/billing/BillingInfoStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";
import Constants_mod from "../../../Constants.tsx";
import Constants_mod2 from "../../../../discord_common/js/shared/Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_10, closure_13, closure_4, closure_5, closure_9, id2, lastLazyPerkSync, planId;

let c10;
let c9;
let closure_12;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let map1;
let unpackModuleId;
let obj = function _deletePaymentSource() {
  obj = _asyncToGenerator(async (id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function (arg0) {
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
          let billingError;
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
              billingError = undefined;
              const obj9 = DispatcherDefault;
              obj9.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const del = HTTP.del;
              c5 = 2;
              c6 = 1;
              const obj5 = {
                url: closure_2_10.BILLING_PAYMENT_SOURCE(id),
                oldFormErrors: true,
                rejectWithError: false,
              };
              const obj6 = { value: del(obj5), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const self = this;
            const self2 = this;
            billingError = new closure_130_0(closure_130_2[10]).BillingError(closure_2);
            const obj7 = { type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: billingError };
            const obj4 = closure_130_1(closure_130_2[8]);
            obj4.dispatch(obj7);
            throw billingError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const obj10 = { type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj10);
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          closure_3 = tmp25;
          if (0 === c4) {
            c6 = 3;
            throw tmp25;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updatePaymentSource() {
  obj = _asyncToGenerator(async (arg0, paymentSource) => {
    let body = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let line1;
      let line2;
      let obj6;
      let obj7;
      let postalCode;
      if (c7 === 2) {
        c7 = 3;
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
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              body = undefined;
              paymentSource = undefined;
              error = undefined;
              const obj10 = DispatcherDefault;
              obj10.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
              c5 = 1;
              const billingAddress = paymentSource.billingAddress;
              ({ line1, line2, postalCode } = billingAddress);
              const tmp38 = _objectWithoutProperties(billingAddress, closure_2_3);
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_10.BILLING_PAYMENT_SOURCE(body), body: obj6, rejectWithError: false };
              const patch = HTTP.patch;
              obj6 = { billing_address: obj7, expires_month: null, expires_year: null, default: null };
              obj7 = { line_1: line1, line_2: line2, postal_code: postalCode };
              const merged = Object.assign(tmp38);
              ({
                expiresMonth: obj12.expires_month,
                expiresYear: obj12.expires_year,
                isDefault: obj12.default,
              } = paymentSource);
              c6 = 2;
              c7 = 1;
              const obj8 = { value: patch(request), done: false };
              return obj8;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_3 = closure_4;
            const obj4 = closure_131_0(closure_131_2[11]);
            error = obj4.parseV8BillingAddressSkemaErrorToBillingError(closure_3);
            const obj9 = { type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error };
            const obj5 = closure_131_1(closure_131_2[8]);
            obj5.dispatch(obj9);
            throw error;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value;
            paymentSource = closure_131_6.createFromServer(body.body);
            const obj13 = { type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource };
            obj = closure_131_1(closure_131_2[8]);
            obj.dispatch(obj13);
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          closure_4 = tmp25;
          if (0 === c5) {
            c7 = 3;
            throw tmp25;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchPaymentSources() {
  obj = _asyncToGenerator(async () => {
    let value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
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
            let closure_0 = tmp4;
            let c0;
            value = undefined;
            if (BillingInfoStore.isPaymentSourceFetching) {
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              c3 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj4 = { url: constants.BILLING_PAYMENT_SOURCES, oldFormErrors: true, rejectWithError: false };
              value = HTTP.get(obj4);
              c0 = value;
              const obj7 = DispatcherDefault;
              obj7.wait(() => {
                obj = closure_2_1(closure_2_2[8]);
                const obj2 = { type: "BILLING_PAYMENT_SOURCES_FETCH_START", request };
                return obj.dispatch(obj2);
              });
              c4 = 2;
              c5 = 1;
              const obj6 = { value, done: false };
              return obj6;
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          const obj5 = closure_129_1(closure_129_2[8]);
          obj5.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" });
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          obj = closure_129_1(closure_129_2[8]);
          const obj9 = { type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: value.body };
          obj.dispatch(obj9);
          c3 = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
      } catch (tmp23) {
        let closure_2 = tmp23;
        if (0 === c3) {
          c5 = 3;
          throw tmp23;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchPaymentSource() {
  obj = _asyncToGenerator(async (value) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
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
              value = undefined;
              paymentSource = undefined;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj4 = {
                url: closure_2_10.BILLING_PAYMENT_SOURCE(value),
                oldFormErrors: true,
                rejectWithError: false,
              };
              const obj6 = { value: get(obj4), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_2 = closure_3;
            const obj5 = closure_130_1(closure_130_2[8]);
            obj5.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" });
            throw closure_2;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            paymentSource = closure_130_6.createFromServer(value.body);
            const obj8 = { type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj8);
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp25) {
          closure_3 = tmp25;
          if (0 === c4) {
            c6 = 3;
            throw tmp25;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchWalletInformation() {
  obj = _asyncToGenerator(async (paymentSourceId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0) => {
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
          let obj10;
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
              closure_1 = undefined;
              obj10 = undefined;
              const obj5 = { type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId };
              const obj11 = DispatcherDefault;
              obj11.dispatch(obj5);
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: closure_2_10.BILLING_WALLET_INFORMATION(paymentSourceId),
                query: { get_history: false },
                rejectWithError: true,
              };
              const get = HTTP.get;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: get(request), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            const obj7 = { type: "BILLING_WALLET_BALANCE_FETCH_FAIL", paymentSourceId };
            const obj3 = closure_130_1(closure_130_2[8]);
            obj3.dispatch(obj7);
            c6 = 3;
            return { value: null, done: true };
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            obj10 = { currency: closure_1.body.currency, amount: closure_1.body.balance };
            const obj12 = {
              type: "BILLING_WALLET_BALANCE_FETCH_SUCCESS",
              paymentSourceId,
              currency: obj10.currency,
              amount: obj10.amount,
            };
            const obj9 = closure_130_1(closure_130_2[8]);
            obj9.dispatch(obj12);
            c4 = 0;
            c6 = 3;
            return { value: obj10, done: true };
          }
        } catch (tmp12) {
          closure_3 = tmp12;
          if (0 === c4) {
            c6 = 3;
            throw tmp12;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchPayment() {
  return obj(...arguments);
}
obj = function _fetchPayment() {
  obj = _asyncToGenerator(async (value) => {
    let closure_1;
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0) => {
      const HTTP = HTTPUtils.HTTP;
      const get = HTTP.get;
      const obj4 = { url: closure_2_10.BILLING_PAYMENT(value), rejectWithError: true };
      await get(obj4);
      const obj7 = { type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: value.body };
      obj = closure_130_1(closure_130_2[8]);
      obj.dispatch(obj7);
      return value;
    })();
  });
  return obj(...arguments);
};
obj = function _fetchPayments() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj6;
    let value;
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let before;
        let num7;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            value = tmp4;
            before = undefined;
            num7 = closure_0;
            if (closure_0 === undefined) {
              num7 = 10;
            }
            value = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj10 = closure_131_1(closure_131_2[8]);
            obj10.dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
            c5 = 1;
            const HTTP = closure_131_0(closure_131_2[9]).HTTP;
            const request = {
              url: closure_131_10.BILLING_PAYMENTS,
              query: obj6,
              oldFormErrors: true,
              rejectWithError: false,
            };
            obj6 = { limit: num7, before };
            c6 = 3;
            c7 = 1;
            const obj7 = { value: HTTP.get(request), done: false };
            return obj7;
          }
        } else if (2 === c6) {
          c5 = 0;
          closure_3 = closure_4;
          const obj5 = closure_131_1(closure_131_2[8]);
          obj5.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" });
          throw closure_3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          const obj9 = { type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: value.body };
          obj = closure_131_1(closure_131_2[8]);
          obj.dispatch(obj9);
          c5 = 0;
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        }
      } catch (tmp20) {
        closure_4 = tmp20;
        if (0 === c5) {
          c7 = 3;
          throw tmp20;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchSubscriptions() {
  let constants2;
  obj = _asyncToGenerator(async function () {
    let obj4;
    let value;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let HTTP;
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
            lastLazyPerkSync = undefined;
            value = undefined;
            const obj12 = DispatcherDefault;
            obj12.wait(() => {
              obj = closure_1_1(closure_1_2[8]);
              obj.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
            });
            c3 = 1;
            let FULL_RESYNC = constants2.ADD_PERKS_IF_DETECTED;
            lastLazyPerkSync = lastLazyPerkSync.getLastLazyPerkSync();
            let tmp30 = null == lastLazyPerkSync;
            if (!tmp30) {
              const obj6 = _modDef4461();
              tmp30 = obj6.diff(lastLazyPerkSync, "hours") >= 1;
            }
            if (tmp30) {
              FULL_RESYNC = constants2.FULL_RESYNC;
              lastLazyPerkSync = _modDef4461();
            }
            HTTP = HTTPUtils.HTTP;
            const request = {
              url: constants.BILLING_SUBSCRIPTIONS,
              oldFormErrors: true,
              rejectWithError: false,
              query: obj4,
            };
            obj4 = { sync_level: FULL_RESYNC };
            c4 = 2;
            c5 = 1;
            const obj7 = { value: HTTP.get(request), done: false };
            return obj7;
          }
        } else if (1 === tmp4) {
          c3 = 0;
          const obj5 = closure_129_1(closure_129_2[8]);
          const dispatchResult = obj5.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" });
          throw closure_2;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (null == value.body) {
          const _JSON = JSON;
          const BillingError = closure_129_0(closure_129_2[10]).BillingError;
          HTTP = JSON.stringify(value);
          const _HermesInternal = HermesInternal;
          const self = this;
          const self2 = this;
          const billingError = new BillingError("response body is null, response: " + HTTP, value.status);
          throw billingError;
        } else {
          obj = closure_129_1(closure_129_2[8]);
          const obj9 = { type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: value.body, lastLazyPerkSync };
          obj.dispatch(obj9);
          c3 = 0;
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        }
      } catch (tmp36) {
        closure_2 = tmp36;
        if (0 === c3) {
          c5 = 3;
          throw tmp36;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getPerksRelevance() {
  obj = _asyncToGenerator(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let body;
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
            let closure_1 = tmp;
            body = undefined;
            const obj8 = DispatcherDefault;
            obj8.wait(() => {
              obj = closure_1_1(closure_1_2[8]);
              obj.dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_START" });
            });
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.BILLING_PERKS_RELEVANCE, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj4 = closure_129_1(closure_129_2[8]);
            const dispatchResult = obj4.dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value;
            obj = closure_129_1(closure_129_2[8]);
            const obj9 = { type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS", res: body.body };
            obj.dispatch(obj9);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        let closure_2 = tmp16;
        if (0 === c3) {
          c5 = 3;
          throw tmp16;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchMostRecentSubscription() {
  let constants2;
  obj = _asyncToGenerator(async () => {
    let c3;
    let c4;
    let c5;
    let closure_1;
    let closure_2;
    let obj4;
    const value = tmp4;
    const obj9 = DispatcherDefault;
    obj9.wait(() => {
      obj = closure_1_1(closure_1_2[8]);
      obj.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
    });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.BILLING_SUBSCRIPTIONS, query: obj4, oldFormErrors: true, rejectWithError: true };
    obj4 = { include_inactive: true, limit: 2, exclude_unpaid_statuses: true, subscription_type: constants2.PREMIUM };
    await HTTP.get(request);
    const obj5 = closure_129_1(closure_129_2[8]);
    const dispatchResult = obj5.dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
    await "IconComponent";
    let first = null;
    const dispatch2 = closure_129_1(closure_129_2[8]).dispatch;
    const tmp35 = closure_129_1(closure_129_2[8]);
    if (value.body.length > 0) {
      first = value.body[0];
    }
    obj = { type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS", subscription: first };
    dispatch2(obj);
    let tmp15 = null;
    const dispatch = closure_129_1(closure_129_2[8]).dispatch;
    const tmp13 = closure_129_1(closure_129_2[8]);
    if (value.body.length > 1) {
      tmp15 = value.body[1];
    }
    const obj8 = { type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS", subscription: tmp15 };
    dispatch(obj8);
    return value;
  });
  return obj(...arguments);
};
obj = function _createSubscription() {
  obj = _asyncToGenerator(async function (arg0) {
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let c6;
    let c7;
    let c8;
    let c9;
    let closure_0;
    let id;
    let obj17;
    let obj19;
    let obj21;
    let obj23;
    let obj24;
    let post;
    closure_0 = arg0;
    if (c11 === 2) {
      c11 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let expected_invoice_price;
      try {
        let _var;
        let trial_id;
        let code;
        let metadata;
        let referral_code;
        let load_id;
        let expected_renewal_price;
        let return_url;
        let closure_11;
        let billingError;
        c11 = 2;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_6 = tmp;
            let closure_7 = tmp4;
            closure_0 = undefined;
            _var = undefined;
            trial_id = undefined;
            code = undefined;
            c4 = undefined;
            metadata = undefined;
            referral_code = undefined;
            load_id = undefined;
            expected_invoice_price = undefined;
            expected_renewal_price = undefined;
            ({
              items: closure_0,
              paymentSource: c1,
              trialId: c2,
              code: c3,
              currency: c4,
              metadata: c5,
              referralCode: c6,
              loadId: c7,
              expectedInvoicePrice: c8,
              expectedRenewalPrice: c9,
            } = closure_0);
            return_url = undefined;
            closure_11 = undefined;
            closure_12 = undefined;
            billingError = undefined;
            c10 = 1;
            c11 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === c10) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj27 = closure_134_1(closure_134_2[8]);
              obj27.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
              const obj28 = closure_134_0(closure_134_2[13]);
              closure_0 = obj28.coerceExistingItemsToNewItemInterval(closure_0);
              return_url = null;
              if (null != _var) {
                if (closure_134_15.has(_var.type)) {
                  c10 = 2;
                  c11 = 1;
                  const obj5 = { value: obj21.popupBridgeState(_var.type), done: false };
                  obj21 = closure_134_0(closure_134_2[14]);
                  return obj5;
                }
              }
            }
          } else {
            let tmp12;
            let USD;
            if (2 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_11 = value;
                _var = closure_11;
                const obj13 = closure_134_0(closure_134_2[9]);
                const aPIBaseURL = obj13.getAPIBaseURL();
                const BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX =
                  closure_134_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                const type = _var.type;
                if (closure_11 == null) {
                  _var = "";
                }
                return_url = aPIBaseURL + BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(type, _var, "success");
              }
            } else if (3 === c10) {
              expected_invoice_price = 0;
              let closure_14 = closure_9;
              if (closure_14 instanceof closure_134_0(closure_134_2[10]).BillingError) {
                billingError = closure_14;
              } else {
                const self = this;
                const self2 = this;
                billingError = new closure_134_0(closure_134_2[10]).BillingError(closure_14);
              }
              const obj7 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: billingError };
              const obj9 = closure_134_1(closure_134_2[8]);
              obj9.dispatch(obj7);
              if (billingError.code !== closure_134_0(closure_134_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
                throw billingError;
              } else if (closure_14.body.payment_id) {
                c11 = 3;
                const obj8 = { value: closure_134_33(closure_14.body, _var), done: true };
                return obj8;
              } else {
                const obj11 = closure_134_0(closure_134_2[14]);
                throw obj11.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
              }
            } else if (4 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else {
                tmp12 = value;
                if (arg0 === 2) {
                  expected_invoice_price = 0;
                  c11 = 3;
                  const obj10 = { value, done: true };
                  return obj10;
                }
              }
            } else if (5 === c10) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                expected_invoice_price = 0;
                c11 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                obj24.gateway_checkout_context = value;
                const obj26 = closure_134_0(closure_134_2[17]);
                obj24.purchase_token = obj26.getPurchaseToken();
                obj24.referral_code = referral_code;
                obj24.load_id = load_id;
                obj24.expected_invoice_price = expected_invoice_price;
                obj24.expected_renewal_price = expected_renewal_price;
                obj23.body = obj24;
                obj23.oldFormErrors = true;
                obj23.rejectWithError = false;
                c10 = 6;
                c11 = 1;
                const obj14 = { value: post(obj23), done: false };
                return obj14;
              }
            } else if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              expected_invoice_price = 0;
              c11 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              closure_12 = value;
              obj = closure_134_1(closure_134_2[8]);
              const obj16 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: closure_12.body };
              obj.dispatch(obj16);
              const obj18 = { subscription: closure_12.body, redirectConfirmation: false };
              expected_invoice_price = 0;
              c11 = 3;
              const obj20 = { value: obj18, done: true };
              return obj20;
            }
            obj24.payment_source_token = tmp12;
            obj24.trial_id = trial_id;
            obj24.return_url = return_url;
            obj24.code = code;
            if (null != _var) {
              USD = c4;
            } else {
              USD = closure_134_16.USD;
            }
            obj24.currency = USD;
            obj24.metadata = metadata;
            c10 = 5;
            c11 = 1;
            const obj22 = { value: obj17.createGatewayCheckoutContext(_var), done: false };
            obj17 = closure_134_0(closure_134_2[16]);
            return obj22;
          }
          expected_invoice_price = 1;
          const HTTP = closure_134_0(closure_134_2[9]).HTTP;
          post = HTTP.post;
          obj23 = { url: closure_134_10.BILLING_SUBSCRIPTIONS };
          obj24 = {
            items: closure_0.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })),
            payment_source_id: id,
          };
          id = null;
          if (null != _var) {
            id = _var.id;
          }
          tmp12 = null;
          if (null != _var) {
            c10 = 4;
            c11 = 1;
            const obj25 = { value: obj19.createPaymentSourceToken(_var), done: false };
            obj19 = closure_134_0(closure_134_2[15]);
            return obj25;
          }
        }
      } catch (tmp99) {
        closure_9 = tmp99;
        if (0 === expected_invoice_price) {
          c11 = 3;
          throw tmp99;
        } else {
          c10 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _payInvoiceManually() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, currency, load_id) => {
    let id = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c14 = 0;
    let c15 = 0;
    let c12 = 0;
    return (async function (arg0, value, arg2, arg3, arg4) {
      let obj13;
      if (c15 === 2) {
        c15 = 3;
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
          let closure_6;
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              return { value, done: true };
            } else {
              closure_10 = tmp;
              closure_6 = undefined;
              obj18 = undefined;
              code = undefined;
              return_url = null;
              if (null != closure_2) {
                code = set.has(closure_2.type);
                if (code) {
                  const obj15 = BillingSharedActionCreators;
                  code = obj15.popupBridgeState(closure_2.type);
                  c14 = 1;
                  c15 = 1;
                  return { value: code, done: false };
                }
              }
            }
          } else {
            let tmp5;
            if (1 === c14) {
              if (arg0 === 1) {
                c15 = 3;
                throw value;
              } else if (arg0 === 2) {
                c15 = 3;
                return { value, done: true };
              } else {
                closure_6 = value;
                code = closure_2;
                let c5 = closure_6;
                const obj7 = closure_138_0(closure_138_2[9]);
                const aPIBaseURL = obj7.getAPIBaseURL();
                const BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX =
                  closure_138_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                const type = closure_2.type;
                if (closure_6 == null) {
                  c5 = "";
                }
                return_url = aPIBaseURL + BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(type, c5, "success");
              }
            } else if (2 === c14) {
              let tmp18;
              c12 = 0;
              HTTP = closure_13;
              code = HTTP instanceof closure_138_0(closure_138_2[10]).BillingError;
              if (code) {
                tmp18 = HTTP;
              } else {
                const self = this;
                const self2 = this;
                code = new closure_138_0(closure_138_2[10]).BillingError(HTTP);
                tmp18 = code;
              }
              code = tmp18;
              code = code.code;
              if (code !== closure_138_0(closure_138_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
                const obj8 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: code };
                const obj5 = closure_138_1(closure_138_2[8]);
                code = obj5.dispatch(obj8);
                throw code;
              } else if (HTTP.body.payment_id) {
                code = closure_138_33(HTTP.body, closure_2);
                c15 = 3;
                return { value: code, done: true };
              } else {
                code = closure_138_0(closure_138_2[14]);
                throw code.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
              }
            } else if (3 === c14) {
              if (arg0 === 1) {
                c15 = 3;
                throw value;
              } else {
                tmp5 = value;
                if (arg0 === 2) {
                  c12 = 0;
                  c15 = 3;
                  return { value, done: true };
                }
              }
            } else if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 0;
              c15 = 3;
              return { value, done: true };
            } else {
              obj18 = value;
              const obj14 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: obj18.body };
              const obj19 = closure_138_1(closure_138_2[8]);
              obj19.dispatch(obj14);
              c12 = 0;
              c15 = 3;
              obj = {
                value: { subscription: obj18.body, redirectConfirmation: closure_138_12.has(closure_2.type) },
                done: true,
              };
              return obj;
            }
            code = HTTP;
            obj20.payment_source_token = tmp5;
            obj20.return_url = return_url;
            obj20.currency = currency;
            const obj11 = closure_138_0(closure_138_2[17]);
            obj20.purchase_token = obj11.getPurchaseToken();
            obj20.load_id = load_id;
            obj18.body = obj20;
            obj18.oldFormErrors = true;
            obj18.rejectWithError = false;
            c14 = 4;
            c15 = 1;
            const obj17 = { value: post(obj18), done: false };
            return obj17;
          }
          c12 = 1;
          HTTP = closure_138_0(closure_138_2[9]).HTTP;
          post = HTTP.post;
          obj18 = { url: closure_138_10.BILLING_INVOICE_MANUAL_PAYMENT(id.id, closure_1) };
          obj20 = { payment_source_id: id };
          code = null != closure_2;
          id = null;
          if (code) {
            code = closure_2;
            id = closure_2.id;
          }
          code = null != closure_2;
          tmp5 = null;
          if (code) {
            code = closure_2;
            c14 = 3;
            c15 = 1;
            const obj21 = { value: obj13.createPaymentSourceToken(closure_2), done: false };
            obj13 = closure_138_0(closure_138_2[15]);
            return obj21;
          }
        } catch (tmp77) {
          closure_13 = tmp77;
          if (0 === c12) {
            c15 = 3;
            throw tmp77;
          } else {
            c14 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function handlePaymentConfirmation(body, paymentSource) {
  if (null != paymentSource) {
    let confirmPaymentResult;
    if (set.has(paymentSource.type)) {
      const self = this;
      const self2 = this;
      const adyenPaymentConfirmationHandler = new HandleConfirmPaymentRegistry.AdyenPaymentConfirmationHandler(
        paymentSource,
        body,
      );
      confirmPaymentResult = adyenPaymentConfirmationHandler.confirmPayment();
    }
    return confirmPaymentResult;
  }
  const stripePaymentConfirmationHandler = new HandleConfirmPaymentRegistry.StripePaymentConfirmationHandler(
    paymentSource,
    body,
  );
  confirmPaymentResult = stripePaymentConfirmationHandler.confirmPayment();
}
obj = function _redirectedPaymentSucceeded() {
  obj = _asyncToGenerator(async (arg0) => {
    let body1;
    let c3;
    let c4;
    let closure_1;
    let closure_2;
    let status;
    let closure_0 = arg0;
    await fetchPayment(closure_0);
    const tmp = value;
    if (tmp != null) {
      body1 = tmp.body;
    }
    if (null == body1) {
      const obj5 = closure_130_0(closure_130_2[14]);
      throw obj5.dispatchConfirmationError("could not fetch payment");
    }
    const tmp4 = closure_130_6.createFromServer(tmp.body.payment_source);
    if (!closure_130_12.has(tmp4.type)) {
      obj = closure_130_0(closure_130_2[14]);
      throw obj.dispatchConfirmationError("unsupported redirect payment source");
    }
    if (tmp != null) {
      const body = tmp.body;
      if (body != null) {
        status = body.status;
      }
    }
    if (status === closure_130_17.FAILED) {
      const obj4 = closure_130_0(closure_130_2[14]);
      throw obj4.dispatchConfirmationError("payment failed");
    }
    let result = tmp4.paymentGateway !== closure_130_11.STRIPE;
    if (!result) {
      const obj2 = closure_130_0(closure_130_2[15]);
      result = obj2.paymentIntentSucceeded(closure_0);
    }
    return result;
  });
  return obj(...arguments);
};
obj = function _cancelSubscription() {
  obj = _asyncToGenerator(async (value, location_stack, _location) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function (arg0, value, arg2) {
      let obj5;
      if (c8 === 2) {
        c8 = 3;
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
          let billingError;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              value = undefined;
              billingError = undefined;
              const obj9 = DispatcherDefault;
              obj9.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: closure_2_10.BILLING_SUBSCRIPTION(value),
                query: obj5,
                oldFormErrors: true,
                rejectWithError: false,
              };
              const del = HTTP.del;
              c7 = 2;
              c8 = 1;
              obj5 = { location: _location, location_stack };
              const obj6 = { value: del(request), done: false };
              return obj6;
            }
          } else if (1 === c7) {
            c6 = 0;
            _location = closure_5;
            const self = this;
            const self2 = this;
            billingError = new closure_132_0(closure_132_2[10]).BillingError(_location);
            const obj7 = { type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: billingError };
            const obj4 = closure_132_1(closure_132_2[8]);
            obj4.dispatch(obj7);
            throw billingError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            obj = closure_132_1(closure_132_2[8]);
            obj.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" });
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          }
        } catch (tmp24) {
          closure_5 = tmp24;
          if (0 === c6) {
            c8 = 3;
            throw tmp24;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function updateSubscription() {
  return obj(...arguments);
}
obj = function _updateSubscription() {
  obj = _asyncToGenerator(
    async (arg0, arg1, expected_invoice_price, expected_renewal_price, location_stack, _location, load_id) => {
      let id = arg0;
      let closure_1 = arg1;
      let c13 = 0;
      let c14 = 0;
      let c11 = 0;
      return (async function (arg0, value, arg2, arg3, arg4, arg5, arg6) {
        let obj19;
        let obj20;
        let paymentSource;
        if (c14 === 2) {
          c14 = 3;
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
            let closure_8;
            let tmp46;
            c14 = 2;
            if (0 === c13) {
              if (arg0 === 1) {
                c14 = 3;
                throw value;
              } else if (arg0 === 2) {
                c14 = 3;
                return { value, done: true };
              } else {
                closure_10 = tmp;
                body = undefined;
                closure_8 = undefined;
                id2 = undefined;
                id = undefined;
                const obj26 = DispatcherDefault;
                obj26.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
                c11 = 1;
                obj4 = { payment_source_id: id };
                ({ status: obj27.status, paymentSource } = closure_1);
                id = undefined;
                if (paymentSource != null) {
                  id = paymentSource.id;
                }
                id = null != closure_1.paymentSource;
                tmp46 = null;
                if (id) {
                  const obj21 = BillingPaymentGatewayActionCreators;
                  id = obj21.createPaymentSourceToken(closure_1.paymentSource);
                  c13 = 2;
                  c14 = 1;
                  return { value: id, done: false };
                }
              }
            } else if (1 === c13) {
              let tmp59;
              c11 = 0;
              let closure_11 = closure_12;
              id = closure_11 instanceof closure_138_0(closure_138_2[10]).BillingError;
              if (id) {
                tmp59 = closure_11;
              } else {
                const self = this;
                const self2 = this;
                id = new closure_138_0(closure_138_2[10]).BillingError(closure_11);
                tmp59 = id;
              }
              id = tmp59;
              const obj7 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: id };
              const obj16 = closure_138_1(closure_138_2[8]);
              obj16.dispatch(obj7);
              id = id.code;
              if (id !== closure_138_0(closure_138_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
                throw id;
              } else if (closure_11.body.payment_id) {
                id = closure_138_33(closure_11.body, closure_1.paymentSource);
                c14 = 3;
                return { value: id, done: true };
              } else {
                id = closure_138_0(closure_138_2[14]);
                throw id.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
              }
            } else if (2 === c13) {
              if (arg0 === 1) {
                c14 = 3;
                throw value;
              } else {
                tmp46 = value;
                if (arg0 === 2) {
                  c11 = 0;
                  c14 = 3;
                  return { value, done: true };
                }
              }
            } else {
              if (3 === c13) {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c11 = 0;
                  c14 = 3;
                  return { value, done: true };
                } else {
                  id = obj4;
                  obj4.gateway_checkout_context = value;
                  obj4.load_id = load_id;
                  obj4.pause_duration = closure_1.pauseDuration;
                  const obj25 = closure_138_0(closure_138_2[17]);
                  obj4.purchase_token = obj25.getPurchaseToken();
                  obj4.expected_invoice_price = expected_invoice_price;
                  obj4.expected_renewal_price = expected_renewal_price;
                  body = obj4;
                  if (null != closure_1.paymentSource) {
                    id = closure_138_15.has;
                    if (id(closure_1.paymentSource.type)) {
                      const obj12 = closure_138_0(closure_138_2[14]);
                      id = obj12.popupBridgeState(closure_1.paymentSource.type);
                      c13 = 4;
                      c14 = 1;
                      return { value: id, done: false };
                    }
                  }
                }
              } else if (4 === c13) {
                if (arg0 === 1) {
                  c14 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c11 = 0;
                  c14 = 3;
                  return { value, done: true };
                } else {
                  closure_8 = value;
                  id = body;
                  let c7 = closure_8;
                  const obj6 = closure_138_0(closure_138_2[9]);
                  const aPIBaseURL = obj6.getAPIBaseURL();
                  const BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX =
                    closure_138_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                  const type = closure_1.paymentSource.type;
                  if (closure_8 == null) {
                    c7 = "";
                  }
                  id.return_url = aPIBaseURL + BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(type, c7, "success");
                }
              } else if (arg0 === 1) {
                c14 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 0;
                c14 = 3;
                return { value, done: true };
              } else {
                id2 = value;
                obj = closure_138_1(closure_138_2[8]);
                const obj17 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: id2.body };
                obj.dispatch(obj17);
                id = { subscription: id2.body, redirectConfirmation: false };
                c11 = 0;
                c14 = 3;
                return { value: id, done: true };
              }
              if (null != closure_1.items) {
                id = body;
                const obj8 = closure_138_0(closure_138_2[13]);
                const result = obj8.coerceExistingItemsToNewItemInterval(closure_1.items);
                body.items = result.map((planId) => {
                  planId = planId.planId;
                  obj = { plan_id: planId };
                  const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
                  return obj;
                });
              }
              const HTTP = closure_138_0(closure_138_2[9]).HTTP;
              const request = {
                url: closure_138_10.BILLING_SUBSCRIPTION(id.id),
                query: obj20,
                body,
                oldFormErrors: true,
                rejectWithError: false,
              };
              const patch = HTTP.patch;
              obj20 = { location: _location, location_stack };
              id = patch(request);
              c13 = 5;
              c14 = 1;
              return { value: id, done: false };
            }
            obj4.payment_source_token = tmp46;
            obj4.currency = closure_1.currency;
            id = closure_1.paymentSource;
            c13 = 3;
            c14 = 1;
            const obj23 = { value: obj19.createGatewayCheckoutContext(id), done: false };
            obj19 = closure_138_0(closure_138_2[16]);
            return obj23;
          } catch (tmp90) {
            closure_12 = tmp90;
            if (0 === c11) {
              c14 = 3;
              throw tmp90;
            } else {
              c13 = 1;
            }
          }
        }
      })();
    },
  );
  return obj(...arguments);
};
obj = function _voidPendingPayment() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const obj4 = {
              url: authStore.BILLING_PAYMENTS_VOID(closure_0),
              oldFormErrors: true,
              rejectWithError: false,
            };
            const post = HTTP.post;
            c2 = 1;
            c1 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c1 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchIpCountryCode() {
  obj = _asyncToGenerator(async () => {
    let value;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let value2;
        let flag;
        let country_code;
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
            value2 = tmp;
            value = tmp4;
            flag = closure_0;
            if (closure_0 === undefined) {
              flag = false;
            }
            value = undefined;
            value2 = undefined;
            country_code = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp39 = flag;
            if (!tmp39) {
              if (null != closure_130_7.ipCountryCodeRequest) {
                c6 = 3;
                const obj6 = { value: closure_130_7.ipCountryCodeRequest, done: true };
                return obj6;
              }
            }
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[9]).HTTP;
            const obj7 = { url: closure_130_10.BILLING_COUNTRY_CODE, rejectWithError: false };
            value = HTTP.get(obj7);
            const obj9 = closure_130_1(closure_130_2[8]);
            obj9.wait(() => {
              obj = request(value2[8]);
              const obj2 = { type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request };
              return obj.dispatch(obj2);
            });
            c5 = 3;
            c6 = 1;
            const obj8 = { value, done: false };
            return obj8;
          }
        } else if (2 === c5) {
          c4 = 0;
          const value3 = closure_3;
          const obj5 = closure_130_1(closure_130_2[8]);
          obj5.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" });
          c6 = 3;
          const obj10 = { value: value3, done: true };
          return obj10;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          value2 = value;
          country_code = value2.body.country_code;
          obj = closure_130_1(closure_130_2[8]);
          const obj12 = { type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: country_code };
          obj.dispatch(obj12);
          c4 = 0;
          c6 = 3;
          const obj13 = { value: value2, done: true };
          return obj13;
        }
      } catch (tmp31) {
        closure_3 = tmp31;
        if (0 === c4) {
          c6 = 3;
          throw tmp31;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchIpLocation() {
  obj = _asyncToGenerator(async () => {
    let obj16;
    let value;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let value2;
        let flag;
        let country_code;
        let subdivision_code;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            value2 = tmp;
            value = tmp4;
            flag = closure_0;
            if (closure_0 === undefined) {
              flag = false;
            }
            value = undefined;
            value2 = undefined;
            country_code = undefined;
            subdivision_code = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const tmp50 = flag;
            if (!tmp50) {
              if (null != closure_130_7.ipLocationRequest) {
                c6 = 3;
                const obj7 = { value: closure_130_7.ipLocationRequest, done: true };
                return obj7;
              }
            }
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[9]).HTTP;
            const obj8 = { url: closure_130_10.BILLING_LOCATION, rejectWithError: false };
            value = HTTP.get(obj8);
            const obj9 = closure_130_1(closure_130_2[8]);
            obj9.wait(() => {
              obj = request(value2[8]);
              const obj2 = { type: "BILLING_IP_LOCATION_FETCH_START", request };
              return obj.dispatch(obj2);
            });
            c5 = 3;
            c6 = 1;
            const obj10 = { value, done: false };
            return obj10;
          }
        } else if (2 === c5) {
          c4 = 0;
          const value3 = closure_3;
          const obj11 = { error_message: value3.message };
          const obj3 = closure_130_1(closure_130_2[19]);
          obj3.track(closure_130_9.BILLING_IP_LOCATION_FETCH_ERROR, obj11);
          const obj5 = closure_130_1(closure_130_2[8]);
          obj5.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" });
          c6 = 3;
          const obj12 = { value: value3, done: true };
          return obj12;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          value2 = value;
          country_code = value2.body.country_code;
          subdivision_code = value2.body.subdivision_code;
          const obj15 = { type: "BILLING_SET_IP_LOCATION", location: obj16 };
          obj16 = { countryCode: country_code, subdivisionCode: subdivision_code };
          const obj14 = closure_130_1(closure_130_2[8]);
          obj14.dispatch(obj15);
          const obj18 = { type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: country_code };
          const obj17 = closure_130_1(closure_130_2[8]);
          obj17.dispatch(obj18);
          c4 = 0;
          c6 = 3;
          obj = { value: value2, done: true };
          return obj;
        }
      } catch (tmp29) {
        closure_3 = tmp29;
        if (0 === c4) {
          c6 = 3;
          throw tmp29;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _redeemReactivationOffer() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let user = arg0;
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function (arg0, value) {
      if (c7 === 2) {
        c7 = 3;
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
          let billingError;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              user = closure_1;
              closure_1 = undefined;
              billingError = undefined;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const post = HTTP.post;
              c6 = 2;
              c7 = 1;
              const obj5 = {
                url: closure_2_10.REACTIVATION_OFFER_REDEEM(user.id, closure_1.id),
                rejectWithError: false,
              };
              const obj6 = { value: post(obj5), done: false };
              return obj6;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_3 = closure_4;
            if (closure_3 instanceof closure_131_0(closure_131_2[10]).BillingError) {
              billingError = closure_3;
            } else {
              const self = this;
              const self2 = this;
              billingError = new closure_131_0(closure_131_2[10]).BillingError(closure_3);
            }
            const obj8 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: billingError };
            const obj2 = closure_131_1(closure_131_2[8]);
            obj2.dispatch(obj8);
            throw billingError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            const obj10 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: closure_1.body };
            const obj7 = closure_131_1(closure_131_2[8]);
            obj7.dispatch(obj10);
            const obj11 = { type: "BILLING_USER_OFFER_REDEEMED", offerId: user.id };
            const obj9 = closure_131_1(closure_131_2[8]);
            obj9.dispatch(obj11);
            c5 = 0;
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp25) {
          closure_4 = tmp25;
          if (0 === c5) {
            c7 = 3;
            throw tmp25;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _redeemUserDiscountOffer() {
  obj = _asyncToGenerator(async (arg0) => {
    const user = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function (arg0) {
      let obj4;
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
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.USER_OFFER_REDEEM, body: obj4, rejectWithError: true };
              c5 = 2;
              c6 = 1;
              obj4 = { user_discount_offer_id: user.id };
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            let billingError;
            c4 = 0;
            closure_1 = closure_3;
            if (closure_1 instanceof closure_130_0(closure_130_2[10]).BillingError) {
              billingError = closure_1;
            } else {
              const self = this;
              const self2 = this;
              billingError = new closure_130_0(closure_130_2[10]).BillingError(closure_1);
            }
            throw billingError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const obj7 = { type: "BILLING_USER_OFFER_REDEEMED", offerId: user.id };
            obj = closure_130_1(closure_130_2[8]);
            obj.dispatch(obj7);
            c4 = 0;
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp24) {
          closure_3 = tmp24;
          if (0 === c4) {
            c6 = 3;
            throw tmp24;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_3 = ["line1", "line2", "postalCode"];
let Constants = Constants_mod2;
({
  AnalyticEvents: c9,
  Endpoints: c10,
  PaymentGateways: unpackModuleId,
  REDIRECTED_PAYMENT_SOURCES: closure_12,
  SubscriptionStatusTypes: map1,
} = Constants);
const UserLazyPerkSyncLevels = BillingConstants.UserLazyPerkSyncLevels;
Constants = Constants_mod2;
({
  ADYEN_PAYMENT_SOURCES: closure_15,
  CurrencyCodes: closure_16,
  PaymentStatusTypes: closure_17,
  PREPAID_PAYMENT_SOURCES: closure_18,
  SubscriptionTypes: closure_19,
} = Constants);
let result = size.fileFinishedImporting("modules/billing/actions/BillingActionCreators.tsx");
for (const key10070 in BillingPaymentGatewayActionCreators) {
  exports[key10070] = BillingPaymentGatewayActionCreators[key10070];
  continue;
}
for (const key10074 in BillingSharedActionCreators) {
  exports[key10074] = BillingSharedActionCreators[key10074];
  continue;
}

export const deletePaymentSource = function deletePaymentSource() {
  return obj(...arguments);
};
export const updatePaymentSource = function updatePaymentSource() {
  return obj(...arguments);
};
export const fetchPaymentSources = function fetchPaymentSources() {
  return obj(...arguments);
};
export const fetchPaymentSource = function fetchPaymentSource() {
  return obj(...arguments);
};
export const fetchWalletInformation = function fetchWalletInformation() {
  return obj(...arguments);
};
export { fetchPayment };
export const fetchPayments = function fetchPayments() {
  return obj(...arguments);
};
export const fetchSubscriptions = function fetchSubscriptions() {
  return obj(...arguments);
};
export const getPerksRelevance = function getPerksRelevance() {
  return obj(...arguments);
};
export const fetchMostRecentSubscription = function fetchMostRecentSubscription() {
  return obj(...arguments);
};
export const createSubscription = function createSubscription() {
  return obj(...arguments);
};
export const payInvoiceManually = function payInvoiceManually() {
  return obj(...arguments);
};
export { handlePaymentConfirmation };
export const redirectedPaymentSucceeded = function redirectedPaymentSucceeded() {
  return obj(...arguments);
};
export const cancelSubscription = function cancelSubscription() {
  return obj(...arguments);
};
export const deleteRenewalMutation = function deleteRenewalMutation(currency, analyticsLocations) {
  obj = { items: currency.items };
  const obj2 = { amount: 0, currency: currency.currency };
  const obj3 = PremiumUtils;
  return updateSubscription(
    currency,
    obj,
    obj2,
    obj3.getItemPlansTotalServerPrice(currency.items, currency.currency, currency.paymentSourceId),
    analyticsLocations,
  );
};
export { updateSubscription };
export const resubscribeToSubscription = function resubscribeToSubscription(
  currency,
  analyticsLocations,
  id,
  arg3,
  arg4,
) {
  let items;
  obj = { status: map1.ACTIVE, paymentSource: id, currency: arg3 };
  id = undefined;
  const obj2 = { amount: 0, currency: currency.currency };
  const getItemPlansTotalServerPrice = PremiumUtils.getItemPlansTotalServerPrice;
  ({ items, currency } = currency);
  PremiumUtils;
  if (id != null) {
    id = id.id;
  }
  return updateSubscription(
    currency,
    obj,
    obj2,
    getItemPlansTotalServerPrice(items, currency, id),
    analyticsLocations,
    arg4,
  );
};
export const upgradeSubscription = function upgradeSubscription(
  renewalMutations,
  basePlanId,
  arg2,
  itemPlansTotalServerPrice,
  analyticsLocations,
  arg5,
) {
  obj = PremiumUtils;
  const obj2 = { status: map1.ACTIVE, items: obj.getItemsWithUpsertedPremiumPlanId(renewalMutations, basePlanId) };
  return updateSubscription(renewalMutations, obj2, arg2, itemPlansTotalServerPrice, analyticsLocations, arg5);
};
export const changeSubscriptionCurrency = function changeSubscriptionCurrency(
  currency,
  currency2,
  itemPlansTotalServerPrice,
  analyticsLocations,
  arg4,
) {
  obj = { currency };
  const obj2 = { amount: 0, currency: currency.toLowerCase() };
  return updateSubscription(currency, obj, obj2, itemPlansTotalServerPrice, analyticsLocations, arg4);
};
export const changePaymentSource = function changePaymentSource(
  currency,
  paymentSource,
  currency2,
  analyticsLocations,
  arg4,
) {
  obj = { paymentSource };
  const obj2 = { amount: 0, currency: currency.currency };
  return updateSubscription(currency, obj, obj2, currency, analyticsLocations, arg4);
};
export const clearUpdatePaymentSourceError = function clearUpdatePaymentSourceError() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
};
export const clearRemovePaymentSourceError = function clearRemovePaymentSourceError() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
};
export const clearPaymentAuthenticationError = function clearPaymentAuthenticationError() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR" });
};
export const cancelPaymentAuthentication = function cancelPaymentAuthentication() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "PAYMENT_AUTHENTICATION_CANCEL" });
};
export const voidPendingPayment = function voidPendingPayment() {
  return obj(...arguments);
};
export const popupBridgeCallback = function popupBridgeCallback(paymentSourceType) {
  let insecure;
  let path;
  let query;
  let state;
  paymentSourceType = paymentSourceType.paymentSourceType;
  ({ state, path, query, insecure } = paymentSourceType);
  obj = DispatcherDefault;
  obj.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType });
  const HTTP = paymentSourceType(1282).HTTP;
  const request = {
    url: closure_10.BILLING_POPUP_BRIDGE_CALLBACK(paymentSourceType),
    body: { state, path, query, insecure },
    oldFormErrors: true,
    rejectWithError: false,
  };
  const postResult = HTTP.post(request);
  return postResult.then((result) => {
    obj = DispatcherDefault;
    const obj2 = { type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType };
    obj.dispatch(obj2);
    return result;
  });
};
export const fetchIpCountryCode = function fetchIpCountryCode() {
  return obj(...arguments);
};
export const fetchPaymentSourceCreationContext = function fetchPaymentSourceCreationContext() {
  const HTTP = HTTPUtils.HTTP;
  obj = { url: authStore.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: true, rejectWithError: false };
  return HTTP.get(obj);
};
export const clearAndFetchPaymentSourceCreationContext = function clearAndFetchPaymentSourceCreationContext() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  let obj2 = { url: authStore.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: true, rejectWithError: false };
  const value = HTTP.get(obj2);
  const nextPromise = value.then(function (body) {
    let error;
    let prop;
    let prop1;
    body = body.body;
    if (null != body) {
      let store_country = body.store_country;
      const dispatch2 = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (store_country == null) {
        store_country = null;
      }
      const obj2 = { store_country, allowed_payment_source_types: prop, allowed_billing_address_countries: prop1 };
      prop = body.allowed_payment_source_types;
      if (prop == null) {
        prop = [];
      }
      prop1 = body.allowed_billing_address_countries;
      if (prop1 == null) {
        prop1 = [];
      }
      const obj3 = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS", data: obj2 };
      dispatch2(obj3);
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      obj = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL", error };
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      error = new Error("Missing response body");
      dispatch(obj);
    }
  });
  nextPromise.catch(function (error) {
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    if (!(error instanceof Error)) {
      const _Error = Error;
      const _String = String;
      const self = this;
      const self2 = this;
      error = new Error(String(error));
    }
    dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL", error });
  });
};
export const fetchIpLocation = function fetchIpLocation() {
  return obj(...arguments);
};
export const resetPaymentIntentId = function resetPaymentIntentId() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "RESET_PAYMENT_ID" });
};
export const resetSubscriptionStore = function resetSubscriptionStore() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
};
export const startBrowserCheckout = function startBrowserCheckout(loadId) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId };
  obj.dispatch(obj2);
};
export const redeemReactivationOffer = function redeemReactivationOffer() {
  return obj(...arguments);
};
export const redeemUserDiscountOffer = function redeemUserDiscountOffer() {
  return obj(...arguments);
};
