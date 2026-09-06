// discord_app/modules/billing/actions/BillingActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef4153 from "../../../../_runtime/metro/04153__.js";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import BillingSharedActionCreators from "BillingSharedActionCreators.tsx";
import BillingPaymentGatewayActionCreators from "BillingPaymentGatewayActionCreators.tsx";
import HandleConfirmPaymentRegistry from "HandleConfirmPaymentRegistry.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import PaymentSourceRecord from "../../../records/PaymentSourceRecord.tsx";
import BillingInfoStore from "../../../stores/billing/BillingInfoStore.tsx";
import SubscriptionStore from "../../../stores/billing/SubscriptionStore.tsx";

require = fn;
let closure_20 = async function _deletePaymentSource(arg0, value) {
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
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_START" });
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: closure_2_10.BILLING_PAYMENT_SOURCE(closure_0), oldFormErrors: true, rejectWithError: false };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        const billingError = new closure_130_0(closure_130_2[10]).BillingError(closure_129_2);
        closure_129_1 = billingError;
        let obj3 = closure_130_1(closure_130_2[8]);
        obj3 = { type: "BILLING_PAYMENT_SOURCE_REMOVE_FAIL", error: closure_129_1 };
        obj3.dispatch(obj3);
        throw closure_129_1;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        obj = closure_130_1(closure_130_2[8]);
        const obj5 = { type: "BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS", id: closure_129_0 };
        obj.dispatch(obj5);
        c4 = 0;
        c6 = 3;
        return { value: "HermesInternal", done: null };
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
};
let closure_21 = async function _updatePaymentSource(arg0, arg1) {
  closure_0 = arg0;
  let billingAddress = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_START" });
            c5 = 1;
            billingAddress = billingAddress.billingAddress;
            ({ line1, line2, postalCode } = billingAddress);
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_10.BILLING_PAYMENT_SOURCE(closure_0), body: null, rejectWithError: false };
            const obj1 = { billing_address: null, expires_month: null, expires_year: null, default: null };
            const obj2 = {};
            const merged = Object.assign(_objectWithoutProperties(billingAddress, closure_2_3));
            obj2.line_1 = line1;
            obj2.line_2 = line2;
            obj2.postal_code = postalCode;
            obj1.billing_address = obj2;
            ({ expiresMonth: obj12.expires_month, expiresYear: obj12.expires_year, isDefault: obj12.default } = billingAddress);
            request.body = obj1;
            c6 = 2;
            c7 = 1;
            let obj3 = { value: HTTP.patch(request), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_3 = closure_4;
          obj3 = closure_131_0(closure_131_2[11]);
          closure_130_2 = obj3.parseV8BillingAddressSkemaErrorToBillingError(closure_130_3);
          let obj4 = closure_131_1(closure_131_2[8]);
          obj4 = { type: "BILLING_PAYMENT_SOURCE_UPDATE_FAIL", error: closure_130_2 };
          obj4.dispatch(obj4);
          throw closure_130_2;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_130_0 = value;
          closure_130_1 = closure_131_6.createFromServer(closure_130_0.body);
          obj = closure_131_1(closure_131_2[8]);
          const obj6 = { type: "BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS", paymentSource: closure_130_1 };
          obj.dispatch(obj6);
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
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
};
let closure_22 = async function _fetchPaymentSources(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          const request = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          if (BillingInfoStore.isPaymentSourceFetching) {
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj1 = { url: constants.BILLING_PAYMENT_SOURCES, oldFormErrors: true, rejectWithError: false };
            value = HTTP.get(obj1);
            closure_128_0 = value;
            DispatcherDefault.wait(() => {
              closure_1(closure_2[8]);
              const obj = { type: "BILLING_PAYMENT_SOURCES_FETCH_START", request };
              return obj.dispatch(obj);
            });
            c4 = 2;
            c5 = 1;
            const obj2 = { value, done: false };
            return obj2;
          }
        }
      } else if (1 === tmp7) {
        c3 = 0;
        let obj4 = closure_129_1(closure_129_2[8]);
        obj4.dispatch({ type: "BILLING_PAYMENT_SOURCES_FETCH_FAIL" });
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_128_1 = value;
        obj = closure_129_1(closure_129_2[8]);
        obj4 = { type: "BILLING_PAYMENT_SOURCES_FETCH_SUCCESS", paymentSources: closure_128_1.body };
        obj.dispatch(obj4);
        c3 = 0;
        c5 = 3;
        const obj5 = { value: closure_128_1, done: true };
        return obj5;
      }
    } catch (tmp26) {
      closure_2 = tmp26;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp26;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_23 = async function _fetchPaymentSource(arg0, value) {
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
          closure_129_1 = undefined;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: closure_2_10.BILLING_PAYMENT_SOURCE(closure_0), oldFormErrors: true, rejectWithError: false };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        let obj4 = closure_130_1(closure_130_2[8]);
        obj4.dispatch({ type: "BILLING_PAYMENT_SOURCE_FETCH_FAIL" });
        throw closure_129_2;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_129_0 = value;
        closure_129_1 = closure_130_6.createFromServer(closure_129_0.body);
        obj = closure_130_1(closure_130_2[8]);
        obj4 = { type: "BILLING_PAYMENT_SOURCE_FETCH_SUCCESS", paymentSource: closure_129_1 };
        obj.dispatch(obj4);
        c4 = 0;
        c6 = 3;
        const obj5 = { value: closure_129_0, done: true };
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
};
let closure_24 = async function _fetchWalletInformation(paymentSourceId) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
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
            closure_129_0 = paymentSourceId;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            const obj1 = { type: "BILLING_WALLET_BALANCE_FETCH_START", paymentSourceId };
            DispatcherDefault.dispatch(obj1);
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_10.BILLING_WALLET_INFORMATION(paymentSourceId), query: { get_history: false }, rejectWithError: true };
            c5 = 2;
            c6 = 1;
            let obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          obj2 = closure_130_1(closure_130_2[8]);
          const obj3 = { type: "BILLING_WALLET_BALANCE_FETCH_FAIL", paymentSourceId: closure_129_0 };
          obj2.dispatch(obj3);
          c6 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_1 = value;
          const obj5 = { currency: closure_129_1.body.currency, amount: closure_129_1.body.balance };
          closure_129_2 = obj5;
          const obj6 = { type: "BILLING_WALLET_BALANCE_FETCH_SUCCESS", paymentSourceId: closure_129_0, currency: closure_129_2.currency, amount: closure_129_2.amount };
          closure_130_1(closure_130_2[8]).dispatch(obj6);
          c4 = 0;
          c6 = 3;
          obj = { value: closure_129_2, done: true };
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
};
function fetchPayment() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _fetchPayment() {
  closure_2 = tmp2;
  closure_1 = tmp5;
  const HTTP = HTTPUtils.HTTP;
  closure_129_0 = await HTTP.get({ url: closure_2_10.BILLING_PAYMENT(closure_0), rejectWithError: true });
  { url: closure_2_10.BILLING_PAYMENT(closure_0), rejectWithError: true };
  closure_130_1(closure_130_2[8]).dispatch({ type: "BILLING_PAYMENT_FETCH_SUCCESS", payment: closure_129_0.body });
  return closure_129_0;
};
let closure_27 = async function _fetchPayments(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          let num7 = closure_0;
          if (closure_0 === undefined) {
            num7 = 10;
          }
          closure_130_0 = num7;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          closure_131_1(closure_131_2[8]).dispatch({ type: "BILLING_PAYMENTS_FETCH_START" });
          c5 = 1;
          const HTTP = closure_131_0(closure_131_2[9]).HTTP;
          const request = { url: closure_131_10.BILLING_PAYMENTS, query: null, oldFormErrors: true, rejectWithError: false };
          const obj2 = { limit: closure_130_0, before: closure_130_1 };
          request.query = obj2;
          c6 = 3;
          c7 = 1;
          const obj3 = { value: HTTP.get(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        closure_130_3 = closure_4;
        let obj4 = closure_131_1(closure_131_2[8]);
        obj4.dispatch({ type: "BILLING_PAYMENTS_FETCH_FAIL" });
        throw closure_130_3;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        obj4 = { value, done: true };
        return obj4;
      } else {
        closure_130_2 = value;
        obj = closure_131_1(closure_131_2[8]);
        const obj5 = { type: "BILLING_PAYMENTS_FETCH_SUCCESS", payments: closure_130_2.body };
        obj.dispatch(obj5);
        c5 = 0;
        c7 = 3;
        const obj6 = { value: closure_130_2, done: true };
        return obj6;
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
};
let closure_28 = async function _fetchSubscriptions(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          DispatcherDefault.wait(() => {
            closure_1_1(closure_1_2[8]).dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_START" });
          });
          c3 = 1;
          let FULL_RESYNC = constants2.ADD_PERKS_IF_DETECTED;
          lastLazyPerkSync = lastLazyPerkSync.getLastLazyPerkSync();
          closure_128_0 = lastLazyPerkSync;
          let tmp36 = null == lastLazyPerkSync;
          if (!tmp36) {
            let obj5 = _modDef4153();
            tmp36 = obj5.diff(lastLazyPerkSync, "hours") >= 1;
          }
          if (tmp36) {
            FULL_RESYNC = constants2.FULL_RESYNC;
            closure_128_0 = _modDef4153();
          }
          const HTTP = HTTPUtils.HTTP;
          const request = { url: constants.BILLING_SUBSCRIPTIONS, oldFormErrors: true, rejectWithError: false, query: null };
          const obj1 = { sync_level: FULL_RESYNC };
          request.query = obj1;
          c4 = 2;
          c5 = 1;
          const obj2 = { value: HTTP.get(request), done: false };
          return obj2;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_128_2 = closure_2;
        let obj4 = closure_129_1(closure_129_2[8]);
        obj4.dispatch({ type: "BILLING_SUBSCRIPTION_FETCH_FAIL" });
        throw closure_128_2;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_128_1 = value;
        if (null == closure_128_1.body) {
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          const billingError = new closure_129_0(closure_129_2[10]).BillingError("response body is null, response: " + JSON.stringify(closure_128_1), closure_128_1.status);
          throw billingError;
        } else {
          obj = closure_129_1(closure_129_2[8]);
          obj4 = { type: "BILLING_SUBSCRIPTION_FETCH_SUCCESS", subscriptions: closure_128_1.body, lastLazyPerkSync: closure_128_0 };
          obj.dispatch(obj4);
          c3 = 0;
          c5 = 3;
          obj5 = { value: closure_128_1, done: true };
          return obj5;
        }
      }
    } catch (tmp42) {
      closure_2 = tmp42;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp42;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_29 = async function _getPerksRelevance() {
  closure_1 = tmp3;
  DispatcherDefault.wait(() => {
    closure_1_1(closure_1_2[8]).dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_START" });
  });
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({ url: constants.BILLING_PERKS_RELEVANCE, rejectWithError: true });
  if (1 === tmp7) {
    c3 = 0;
    let obj3 = closure_129_1(closure_129_2[8]);
    obj3.dispatch({ type: "BILLING_PERKS_RELEVANCE_FETCH_FAIL" });
    c5 = 3;
  } else if (arg0 === 1) {
    c5 = 3;
    throw arg1;
  } else if (arg0 !== 2) {
    closure_128_0 = arg1;
    obj3 = { type: "BILLING_PERKS_RELEVANCE_FETCH_SUCCESS", res: closure_128_0.body };
    closure_129_1(closure_129_2[8]).dispatch(obj3);
    c3 = 0;
    closure_129_1(closure_129_2[8]);
  }
  return arg1;
};
let closure_30 = async function _fetchMostRecentSubscription() {
  closure_1 = tmp3;
  DispatcherDefault.wait(() => {
    closure_1_1(closure_1_2[8]).dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START" });
  });
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.BILLING_SUBSCRIPTIONS, query: null, oldFormErrors: true, rejectWithError: true };
  let obj1 = { include_inactive: true, limit: 2, exclude_unpaid_statuses: true, subscription_type: constants2.PREMIUM };
  request.query = obj1;
  await HTTP.get(request);
  closure_129_1(closure_129_2[8]).dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL" });
  closure_128_0 = await "HermesInternal";
  let first = null;
  if (closure_128_0.body.length > 0) {
    first = closure_128_0.body[0];
  }
  closure_129_1(closure_129_2[8]).dispatch({ type: "BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS", subscription: first });
  obj1 = closure_129_1(closure_129_2[8]);
  let tmp17 = null;
  if (closure_128_0.body.length > 1) {
    tmp17 = closure_128_0.body[1];
  }
  obj1.dispatch({ type: "BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS", subscription: tmp17 });
  return closure_128_0;
};
let closure_31 = async function _createSubscription(arg0, value) {
  if (c11 === 2) {
    c11 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c11 = 2;
      if (0 === c10) {
        if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp2;
          closure_7 = tmp6;
          closure_135_0 = undefined;
          closure_135_1 = undefined;
          closure_135_2 = undefined;
          closure_135_3 = undefined;
          closure_135_4 = undefined;
          closure_135_5 = undefined;
          closure_135_6 = undefined;
          closure_135_7 = undefined;
          closure_135_8 = undefined;
          closure_135_9 = undefined;
          ({ items: closure_135_0, paymentSource: closure_135_1, trialId: closure_135_2, code: closure_135_3, currency: closure_135_4, metadata: closure_135_5, referralCode: closure_135_6, loadId: closure_135_7, expectedInvoicePrice: closure_135_8, expectedRenewalPrice: closure_135_9 } = closure_0);
          closure_135_10 = undefined;
          closure_135_11 = undefined;
          closure_135_12 = undefined;
          closure_135_13 = undefined;
          c10 = 1;
          c11 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp6) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_134_1(closure_134_2[8]).dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
            const obj26 = closure_134_1(closure_134_2[8]);
            closure_135_0 = closure_134_0(closure_134_2[13]).coerceExistingItemsToNewItemInterval(closure_135_0);
            closure_135_10 = null;
            if (null != closure_135_1) {
              if (closure_134_15.has(closure_135_1.type)) {
                c10 = 2;
                c11 = 1;
                const obj2 = { value: closure_134_0(closure_134_2[14]).popupBridgeState(closure_135_1.type), done: false };
                return obj2;
              }
            }
            const obj27 = closure_134_0(closure_134_2[13]);
          }
        } else {
          if (2 === tmp6) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_135_11 = value;
              let obj12 = closure_134_0(closure_134_2[9]);
              c1 = closure_135_11;
              const aPIBaseURL = obj12.getAPIBaseURL();
              if (closure_135_11 == null) {
                c1 = "";
              }
              closure_135_10 = aPIBaseURL + closure_134_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_135_1.type, c1, "success");
            }
          } else if (3 === tmp6) {
            c8 = 0;
            closure_135_14 = closure_9;
            if (closure_135_14 instanceof closure_134_0(closure_134_2[10]).BillingError) {
              let billingError = closure_135_14;
            } else {
              billingError = new closure_134_0(closure_134_2[10]).BillingError(closure_135_14);
            }
            closure_135_13 = billingError;
            let obj8 = closure_134_1(closure_134_2[8]);
            const obj4 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: closure_135_13 };
            obj8.dispatch(obj4);
            if (closure_135_13.code !== closure_134_0(closure_134_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
              throw closure_135_13;
            } else if (closure_135_14.body.payment_id) {
              c11 = 3;
              const obj5 = { value: closure_134_33(closure_135_14.body, closure_135_1), done: true };
              return obj5;
            } else {
              let obj10 = closure_134_0(closure_134_2[14]);
              throw obj10.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
            }
          } else if (4 === tmp6) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else {
              let tmp14 = value;
              if (arg0 === 2) {
                c8 = 0;
                c11 = 3;
                const obj6 = { value, done: true };
                return obj6;
              }
            }
          } else if (5 === tmp6) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 0;
              c11 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              obj14.gateway_checkout_context = value;
              obj14.purchase_token = closure_134_0(closure_134_2[17]).getPurchaseToken();
              obj14.referral_code = closure_135_6;
              obj14.load_id = closure_135_7;
              obj14.expected_invoice_price = closure_135_8;
              obj14.expected_renewal_price = closure_135_9;
              obj13.body = obj14;
              obj13.oldFormErrors = true;
              obj13.rejectWithError = false;
              c10 = 6;
              c11 = 1;
              obj8 = { value: post(obj13), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            c11 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_135_12 = value;
            obj = closure_134_1(closure_134_2[8]);
            obj10 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: closure_135_12.body };
            obj.dispatch(obj10);
            const obj11 = { subscription: closure_135_12.body, redirectConfirmation: false };
            c8 = 0;
            c11 = 3;
            obj12 = { value: obj11, done: true };
            return obj12;
          }
          obj14.payment_source_token = tmp14;
          obj14.trial_id = closure_135_2;
          obj14.return_url = closure_135_10;
          obj14.code = closure_135_3;
          if (null != closure_135_1) {
            let USD = closure_135_4;
          } else {
            USD = closure_134_16.USD;
          }
          obj14.currency = USD;
          obj14.metadata = closure_135_5;
          const gatewayCheckoutContext = closure_134_0(closure_134_2[16]).createGatewayCheckoutContext(closure_135_1);
          c10 = 5;
          c11 = 1;
          const obj17 = closure_134_0(closure_134_2[16]);
        }
        c8 = 1;
        const HTTP = closure_134_0(closure_134_2[9]).HTTP;
        post = HTTP.post;
        obj13 = { url: closure_134_10.BILLING_SUBSCRIPTIONS };
        obj14 = { items: closure_135_0.map((planId) => ({ plan_id: planId.planId, quantity: planId.quantity })) };
        let id = null;
        if (null != closure_135_1) {
          id = closure_135_1.id;
        }
        obj14.payment_source_id = id;
        tmp14 = null;
        if (null != closure_135_1) {
          c10 = 4;
          c11 = 1;
          const obj15 = { value: closure_134_0(closure_134_2[15]).createPaymentSourceToken(closure_135_1), done: false };
          return obj15;
        }
      }
    } catch (tmp104) {
      closure_9 = tmp104;
      if (tmp3 === c8) {
        c11 = tmp;
        throw tmp104;
      } else {
        c10 = tmp;
      }
    }
  }
};
let closure_32 = async function _payInvoiceManually(arg0, value) {
  if (c15 === 2) {
    c15 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c15 = 2;
      if (0 === c14) {
        if (arg0 === 1) {
          c15 = 3;
          throw value;
        } else if (arg0 === 2) {
          c15 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_10 = tmp3;
          closure_11 = tmp5;
          closure_139_0 = closure_0;
          closure_139_1 = closure_1;
          closure_139_2 = closure_2;
          closure_139_3 = closure_3;
          closure_139_4 = closure_4;
          closure_139_6 = undefined;
          closure_139_7 = undefined;
          closure_139_8 = undefined;
          closure_139_5 = null;
          if (null != closure_2) {
            if (set.has(tmp108.type)) {
              c14 = 1;
              c15 = 1;
              const obj1 = { value: BillingSharedActionCreators.popupBridgeState(tmp108.type), done: false };
              return obj1;
            }
          }
        }
      } else {
        if (1 === tmp8) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            closure_139_6 = value;
            let obj7 = closure_138_0(closure_138_2[9]);
            c5 = closure_139_6;
            const aPIBaseURL = obj7.getAPIBaseURL();
            if (closure_139_6 == null) {
              c5 = "";
            }
            closure_139_5 = aPIBaseURL + closure_138_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_139_2.type, c5, "success");
          }
        } else if (2 === tmp8) {
          c12 = 0;
          closure_139_9 = closure_13;
          if (closure_139_9 instanceof closure_138_0(closure_138_2[10]).BillingError) {
            let billingError = closure_139_9;
          } else {
            billingError = new closure_138_0(closure_138_2[10]).BillingError(closure_139_9);
          }
          closure_139_8 = billingError;
          if (closure_139_8.code !== closure_138_0(closure_138_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
            let obj5 = closure_138_1(closure_138_2[8]);
            let obj3 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: closure_139_8 };
            obj5.dispatch(obj3);
            throw closure_139_8;
          } else if (closure_139_9.body.payment_id) {
            c15 = 3;
            const obj4 = { value: closure_138_33(closure_139_9.body, closure_139_2), done: true };
            return obj4;
          } else {
            obj3 = closure_138_0(closure_138_2[14]);
            throw obj3.dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else {
            let tmp9 = value;
            if (arg0 === 2) {
              c12 = 0;
              c15 = 3;
              obj5 = { value, done: true };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c15 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 0;
          c15 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_139_7 = value;
          obj7 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: closure_139_7.body };
          closure_138_1(closure_138_2[8]).dispatch(obj7);
          const obj8 = { subscription: closure_139_7.body, redirectConfirmation: closure_138_12.has(closure_139_2.type) };
          c12 = 0;
          c15 = 3;
          obj = { value: obj8, done: true };
          return obj;
        }
        obj11.payment_source_token = tmp9;
        obj11.return_url = closure_139_5;
        obj11.currency = closure_139_3;
        obj11 = closure_138_0(closure_138_2[17]);
        obj11.purchase_token = obj11.getPurchaseToken();
        obj11.load_id = closure_139_4;
        obj10.body = obj11;
        obj10.oldFormErrors = true;
        obj10.rejectWithError = false;
        c14 = 4;
        c15 = 1;
        const obj9 = { value: post(obj10), done: false };
        return obj9;
      }
      c12 = 1;
      const HTTP = closure_138_0(closure_138_2[9]).HTTP;
      post = HTTP.post;
      obj10 = { url: closure_138_10.BILLING_INVOICE_MANUAL_PAYMENT(closure_139_0.id, closure_139_1) };
      obj11 = {};
      let id = null;
      if (null != closure_139_2) {
        id = closure_139_2.id;
      }
      obj11.payment_source_id = id;
      tmp9 = null;
      if (null != closure_139_2) {
        c14 = 3;
        c15 = 1;
        const obj12 = { value: closure_138_0(closure_138_2[15]).createPaymentSourceToken(closure_139_2), done: false };
        return obj12;
      }
    } catch (tmp89) {
      closure_13 = tmp89;
      if (tmp4 === c12) {
        c15 = tmp2;
        throw tmp89;
      } else {
        c14 = tmp;
      }
    }
  }
};
function handlePaymentConfirmation(body, type) {
  if (null != type) {
    if (set.has(type.type)) {
      const adyenPaymentConfirmationHandler = new HandleConfirmPaymentRegistry.AdyenPaymentConfirmationHandler(type, body);
      let confirmPaymentResult = adyenPaymentConfirmationHandler.confirmPayment();
    }
    return confirmPaymentResult;
  }
  confirmPaymentResult = new HandleConfirmPaymentRegistry.StripePaymentConfirmationHandler(type, body).confirmPayment();
}
let closure_34 = async function _redirectedPaymentSucceeded() {
  closure_2 = tmp5;
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  closure_129_1 = await fetchPayment(closure_0);
  if (closure_129_1 != null) {
    let body = closure_129_1.body;
  }
  if (null == body) {
    throw closure_130_0(closure_130_2[14]).dispatchConfirmationError("could not fetch payment");
  }
  closure_129_2 = closure_130_6.createFromServer(closure_129_1.body.payment_source);
  if (!closure_130_12.has(closure_129_2.type)) {
    throw closure_130_0(closure_130_2[14]).dispatchConfirmationError("unsupported redirect payment source");
  }
  if (closure_129_1 != null) {
    body = closure_129_1.body;
    if (body != null) {
      const status = body.status;
    }
  }
  if (status === closure_130_17.FAILED) {
    throw closure_130_0(closure_130_2[14]).dispatchConfirmationError("payment failed");
  }
  let result = closure_129_2.paymentGateway !== closure_130_11.STRIPE;
  if (!result) {
    result = closure_130_0(closure_130_2[15]).paymentIntentSucceeded(closure_129_0);
    closure_130_0(closure_130_2[15]);
  }
  return result;
};
let closure_35 = async function _cancelSubscription(arg0, location_stack, _location) {
  closure_0 = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            DispatcherDefault.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_START" });
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_10.BILLING_SUBSCRIPTION(closure_0), query: null, oldFormErrors: true, rejectWithError: false };
            const obj1 = { location: _location, location_stack };
            request.query = obj1;
            c7 = 2;
            c8 = 1;
            const obj2 = { value: HTTP.del(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_2 = closure_5;
          const billingError = new closure_132_0(closure_132_2[10]).BillingError(closure_131_2);
          closure_131_1 = billingError;
          let obj3 = closure_132_1(closure_132_2[8]);
          obj3 = { type: "BILLING_SUBSCRIPTION_CANCEL_FAIL", error: closure_131_1 };
          obj3.dispatch(obj3);
          throw closure_131_1;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_131_0 = value;
          obj = closure_132_1(closure_132_2[8]);
          obj.dispatch({ type: "BILLING_SUBSCRIPTION_CANCEL_SUCCESS" });
          c6 = 0;
          c8 = 3;
          const obj5 = { value: closure_131_0, done: true };
          return obj5;
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
};
function updateSubscription() {
  const self = this;
  const apply = closure_37.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_37 = async function _updateSubscription(arg0, value) {
  if (c14 === 2) {
    c14 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c14 = 2;
      if (0 === c13) {
        if (arg0 === 1) {
          c14 = 3;
          throw value;
        } else if (arg0 === 2) {
          c14 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_10 = tmp3;
          closure_9 = tmp5;
          closure_137_0 = closure_0;
          closure_137_1 = importDefault;
          closure_137_2 = closure_2;
          closure_137_3 = closure_3;
          closure_137_4 = closure_4;
          closure_137_5 = closure_5;
          closure_137_6 = closure_6;
          closure_137_7 = undefined;
          closure_137_8 = undefined;
          closure_137_9 = undefined;
          closure_137_10 = undefined;
          DispatcherDefault.dispatch({ type: "BILLING_SUBSCRIPTION_UPDATE_START" });
          c11 = 1;
          const obj1 = {};
          ({ status: obj28.status, paymentSource } = importDefault);
          let id;
          if (paymentSource != null) {
            id = paymentSource.id;
          }
          obj1.payment_source_id = id;
          let tmp52 = null;
          if (null != importDefault.paymentSource) {
            c13 = 2;
            c14 = 1;
            const obj2 = { value: BillingPaymentGatewayActionCreators.createPaymentSourceToken(tmp118.paymentSource), done: false };
            return obj2;
          }
        }
      } else if (1 === tmp8) {
        c11 = 0;
        closure_137_11 = closure_12;
        if (closure_137_11 instanceof closure_138_0(closure_138_2[10]).BillingError) {
          let billingError = closure_137_11;
        } else {
          billingError = new closure_138_0(closure_138_2[10]).BillingError(closure_137_11);
        }
        closure_137_10 = billingError;
        let obj15 = closure_138_1(closure_138_2[8]);
        const obj3 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: closure_137_10 };
        obj15.dispatch(obj3);
        if (closure_137_10.code !== closure_138_0(closure_138_2[11]).ErrorCodes.CONFIRMATION_REQUIRED) {
          throw closure_137_10;
        } else if (closure_137_11.body.payment_id) {
          c14 = 3;
          const obj4 = { value: closure_138_33(closure_137_11.body, closure_137_1.paymentSource), done: true };
          return obj4;
        } else {
          throw closure_138_0(closure_138_2[14]).dispatchConfirmationError("payment id cannot be null on redirected confirmations.");
        }
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c14 = 3;
          throw value;
        } else {
          tmp52 = value;
          if (arg0 === 2) {
            c11 = 0;
            c14 = 3;
            let obj5 = { value, done: true };
            return obj5;
          }
        }
      } else {
        if (3 === tmp8) {
          if (arg0 === 1) {
            c14 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 0;
            c14 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj1.gateway_checkout_context = value;
            obj1.load_id = closure_137_6;
            obj1.pause_duration = closure_137_1.pauseDuration;
            obj1.purchase_token = closure_138_0(closure_138_2[17]).getPurchaseToken();
            obj1.expected_invoice_price = closure_137_2;
            obj1.expected_renewal_price = closure_137_3;
            closure_137_7 = obj1;
            if (null != closure_137_1.paymentSource) {
              if (closure_138_15.has(closure_137_1.paymentSource.type)) {
                let obj11 = closure_138_0(closure_138_2[14]);
                c13 = 4;
                c14 = 1;
                let obj7 = { value: obj11.popupBridgeState(closure_137_1.paymentSource.type), done: false };
                return obj7;
              }
            }
            const obj26 = closure_138_0(closure_138_2[17]);
          }
        } else if (4 === tmp8) {
          if (arg0 === 1) {
            c14 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 0;
            c14 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_137_8 = value;
            obj5 = closure_138_0(closure_138_2[9]);
            c7 = closure_137_8;
            const aPIBaseURL = obj5.getAPIBaseURL();
            if (closure_137_8 == null) {
              c7 = "";
            }
            closure_137_7.return_url = aPIBaseURL + closure_138_10.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX(closure_137_1.paymentSource.type, c7, "success");
          }
        } else if (arg0 === 1) {
          c14 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 0;
          c14 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_137_9 = value;
          obj = closure_138_1(closure_138_2[8]);
          const obj10 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: closure_137_9.body };
          obj.dispatch(obj10);
          obj11 = { subscription: closure_137_9.body, redirectConfirmation: false };
          c11 = 0;
          c14 = 3;
          const obj12 = { value: obj11, done: true };
          return obj12;
        }
        if (null != closure_137_1.items) {
          obj7 = closure_138_0(closure_138_2[13]);
          const result = obj7.coerceExistingItemsToNewItemInterval(closure_137_1.items);
          closure_137_7.items = result.map((planId) => {
            const obj = {};
            const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
            obj.plan_id = planId.planId;
            return obj;
          });
        }
        const HTTP = closure_138_0(closure_138_2[9]).HTTP;
        const request = { url: closure_138_10.BILLING_SUBSCRIPTION(closure_137_0.id), query: null, body: null, oldFormErrors: true, rejectWithError: false };
        const obj13 = { location: closure_137_5, location_stack: closure_137_4 };
        request.query = obj13;
        request.body = closure_137_7;
        c13 = 5;
        c14 = 1;
        const obj14 = { value: HTTP.patch(request), done: false };
        return obj14;
      }
      obj1.payment_source_token = tmp52;
      obj1.currency = closure_137_1.currency;
      c13 = 3;
      c14 = 1;
      obj15 = { value: closure_138_0(closure_138_2[16]).createGatewayCheckoutContext(closure_137_1.paymentSource), done: false };
      return obj15;
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
};
let closure_38 = async function _voidPendingPayment(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: closure_2_10.BILLING_PAYMENTS_VOID(closure_0), oldFormErrors: true, rejectWithError: false };
          c2 = 1;
          c1 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp9) {
      c1 = tmp;
      throw tmp9;
    }
  }
};
let closure_39 = async function _fetchIpCountryCode(arg0, value) {
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
          const request = tmp7;
          closure_129_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = false;
          }
          closure_129_0 = flag;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          let country_code;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (!closure_129_0) {
            if (null != closure_130_7.ipCountryCodeRequest) {
              c6 = 3;
              const obj2 = { value: closure_130_7.ipCountryCodeRequest, done: true };
              return obj2;
            }
          }
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[9]).HTTP;
          const obj3 = { url: closure_130_10.BILLING_COUNTRY_CODE, rejectWithError: false };
          closure_129_1 = HTTP.get(obj3);
          let obj8 = closure_130_1(closure_130_2[8]);
          obj8.wait(() => {
            request(closure_2[8]);
            const obj = { type: "BILLING_IP_COUNTRY_CODE_FETCH_START", request };
            return obj.dispatch(obj);
          });
          c5 = 3;
          c6 = 1;
          let obj4 = { value: closure_129_1, done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_4 = closure_3;
        obj4 = closure_130_1(closure_130_2[8]);
        obj4.dispatch({ type: "BILLING_IP_COUNTRY_CODE_FAILURE" });
        c6 = 3;
        const obj5 = { value: closure_129_4, done: true };
        return obj5;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_2 = value;
        country_code = closure_129_2.body.country_code;
        obj = closure_130_1(closure_130_2[8]);
        const obj7 = { type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: country_code };
        obj.dispatch(obj7);
        c4 = 0;
        c6 = 3;
        obj8 = { value: closure_129_2, done: true };
        return obj8;
      }
    } catch (tmp34) {
      closure_3 = tmp34;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp34;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_40 = async function _fetchIpLocation(arg0, value) {
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
          const request = tmp7;
          closure_129_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = false;
          }
          closure_129_0 = flag;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          let country_code;
          let subdivision_code;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          if (!closure_129_0) {
            if (null != closure_130_7.ipLocationRequest) {
              c6 = 3;
              let obj2 = { value: closure_130_7.ipLocationRequest, done: true };
              return obj2;
            }
          }
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[9]).HTTP;
          const obj3 = { url: closure_130_10.BILLING_LOCATION, rejectWithError: false };
          closure_129_1 = HTTP.get(obj3);
          let obj8 = closure_130_1(closure_130_2[8]);
          obj8.wait(() => {
            request(closure_2[8]);
            const obj = { type: "BILLING_IP_LOCATION_FETCH_START", request };
            return obj.dispatch(obj);
          });
          c5 = 3;
          c6 = 1;
          let obj4 = { value: closure_129_1, done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_5 = closure_3;
        obj2 = closure_130_1(closure_130_2[19]);
        const obj5 = { error_message: closure_129_5.message };
        obj2.track(closure_130_9.BILLING_IP_LOCATION_FETCH_ERROR, obj5);
        obj4 = closure_130_1(closure_130_2[8]);
        obj4.dispatch({ type: "BILLING_IP_LOCATION_FAILURE" });
        c6 = 3;
        const obj6 = { value: closure_129_5, done: true };
        return obj6;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_2 = value;
        country_code = closure_129_2.body.country_code;
        subdivision_code = closure_129_2.body.subdivision_code;
        obj8 = { type: "BILLING_SET_IP_LOCATION", location: null };
        const obj9 = { countryCode: country_code, subdivisionCode: subdivision_code };
        obj8.location = obj9;
        closure_130_1(closure_130_2[8]).dispatch(obj8);
        const obj14 = closure_130_1(closure_130_2[8]);
        const obj10 = { type: "BILLING_SET_IP_COUNTRY_CODE", countryCode: country_code };
        closure_130_1(closure_130_2[8]).dispatch(obj10);
        c4 = 0;
        c6 = 3;
        obj = { value: closure_129_2, done: true };
        return obj;
      }
    } catch (tmp32) {
      closure_3 = tmp32;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp32;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_41 = async function _redeemReactivationOffer(arg0, arg1) {
  let id = arg0;
  let id2 = arg1;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = id2;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            let obj1 = { url: closure_2_10.REACTIVATION_OFFER_REDEEM(id.id, id2.id), rejectWithError: false };
            c6 = 2;
            c7 = 1;
            const obj2 = { value: HTTP.post(obj1), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_3 = closure_4;
          if (closure_130_3 instanceof closure_131_0(closure_131_2[10]).BillingError) {
            let billingError = closure_130_3;
          } else {
            billingError = new closure_131_0(closure_131_2[10]).BillingError(closure_130_3);
          }
          closure_130_2 = billingError;
          obj1 = closure_131_1(closure_131_2[8]);
          const obj3 = { type: "BILLING_SUBSCRIPTION_UPDATE_FAIL", error: closure_130_2 };
          obj1.dispatch(obj3);
          throw closure_130_2;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_130_1 = value;
          const obj4 = { type: "BILLING_SUBSCRIPTION_UPDATE_SUCCESS", subscription: closure_130_1.body };
          closure_131_1(closure_131_2[8]).dispatch(obj4);
          const obj7 = closure_131_1(closure_131_2[8]);
          const obj5 = { type: "BILLING_USER_OFFER_REDEEMED", offerId: closure_130_0.id };
          closure_131_1(closure_131_2[8]).dispatch(obj5);
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: null };
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
};
let closure_42 = async function _redeemUserDiscountOffer(arg0) {
  let id = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
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
            closure_129_0 = id;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.USER_OFFER_REDEEM, body: null, rejectWithError: true };
            const obj1 = { user_discount_offer_id: id.id };
            request.body = obj1;
            c5 = 2;
            c6 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          if (closure_129_1 instanceof closure_130_0(closure_130_2[10]).BillingError) {
            let billingError = closure_129_1;
          } else {
            billingError = new closure_130_0(closure_130_2[10]).BillingError(closure_129_1);
          }
          throw billingError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          obj = closure_130_1(closure_130_2[8]);
          const obj4 = { type: "BILLING_USER_OFFER_REDEEMED", offerId: closure_129_0.id };
          obj.dispatch(obj4);
          c4 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
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
};
let closure_3 = ["line1", "line2", "postalCode"];
let Constants = fn(1074);
({ AnalyticEvents: closure_9, Endpoints: c10, PaymentGateways: closure_11, REDIRECTED_PAYMENT_SOURCES: closure_12, SubscriptionStatusTypes: map1 } = Constants);
const UserLazyPerkSyncLevels = fn(4229).UserLazyPerkSyncLevels;
Constants = fn(1085);
({ ADYEN_PAYMENT_SOURCES: closure_15, CurrencyCodes: closure_16, PaymentStatusTypes: closure_17, PREPAID_PAYMENT_SOURCES: closure_18, SubscriptionTypes: closure_19 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/billing/actions/BillingActionCreators.tsx");
for (const key10070 in require("BillingPaymentGatewayActionCreators")) {
  arg5[key10070] = require("BillingPaymentGatewayActionCreators")[key10070];
  continue;
}
for (const key10074 in require("BillingSharedActionCreators")) {
  arg5[key10074] = require("BillingSharedActionCreators")[key10074];
  continue;
}

export const deletePaymentSource = function deletePaymentSource() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updatePaymentSource = function updatePaymentSource() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPaymentSources = function fetchPaymentSources() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPaymentSource = function fetchPaymentSource() {
  const self = this;
  const apply = closure_23.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchWalletInformation = function fetchWalletInformation() {
  const self = this;
  const apply = closure_24.apply;
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
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchSubscriptions = function fetchSubscriptions() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPerksRelevance = function getPerksRelevance() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchMostRecentSubscription = function fetchMostRecentSubscription() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createSubscription = function createSubscription() {
  const self = this;
  const apply = closure_31.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const payInvoiceManually = function payInvoiceManually() {
  const self = this;
  const apply = closure_32.apply;
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
  const apply = closure_34.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const cancelSubscription = function cancelSubscription() {
  const self = this;
  const apply = closure_35.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteRenewalMutation = function deleteRenewalMutation(currency, arg1) {
  let obj = { items: currency.items };
  obj = { amount: 0, currency: currency.currency };
  return updateSubscription(currency, obj, obj, PremiumUtils.getItemPlansTotalServerPrice(currency.items, currency.currency, currency.paymentSourceId), arg1);
};
export { updateSubscription };
export const resubscribeToSubscription = function resubscribeToSubscription(currency, arg1, id, arg3, arg4) {
  let obj = { status: constants.ACTIVE, paymentSource: id, currency: arg3 };
  obj = { amount: 0, currency: currency.currency };
  id = undefined;
  ({ items, currency } = currency);
  if (id != null) {
    id = id.id;
  }
  return updateSubscription(currency, obj, obj, PremiumUtils.getItemPlansTotalServerPrice(items, currency, id), arg1, arg4);
};
export const upgradeSubscription = function upgradeSubscription(renewalMutations, basePlanId, arg2, itemPlansTotalServerPrice, arg4, arg5) {
  let obj = PremiumUtils;
  obj = { status: constants.ACTIVE, items: obj.getItemsWithUpsertedPremiumPlanId(renewalMutations, basePlanId) };
  return updateSubscription(renewalMutations, obj, arg2, itemPlansTotalServerPrice, arg4, arg5);
};
export const changeSubscriptionCurrency = function changeSubscriptionCurrency(currency, currency, itemPlansTotalServerPrice, arg3, arg4) {
  let obj = { currency };
  obj = { amount: 0, currency: currency.toLowerCase() };
  return updateSubscription(currency, obj, obj, itemPlansTotalServerPrice, arg3, arg4);
};
export const changePaymentSource = function changePaymentSource(currency, paymentSource, currency, arg3, arg4) {
  let obj = { paymentSource };
  obj = { amount: 0, currency: currency.currency };
  return updateSubscription(currency, obj, obj, currency, arg3, arg4);
};
export const clearUpdatePaymentSourceError = function clearUpdatePaymentSourceError() {
  DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR" });
};
export const clearRemovePaymentSourceError = function clearRemovePaymentSourceError() {
  DispatcherDefault.dispatch({ type: "BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR" });
};
export const clearPaymentAuthenticationError = function clearPaymentAuthenticationError() {
  DispatcherDefault.dispatch({ type: "PAYMENT_AUTHENTICATION_CLEAR_ERROR" });
};
export const cancelPaymentAuthentication = function cancelPaymentAuthentication() {
  DispatcherDefault.dispatch({ type: "PAYMENT_AUTHENTICATION_CANCEL" });
};
export const voidPendingPayment = function voidPendingPayment() {
  const self = this;
  const apply = closure_38.apply;
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
  DispatcherDefault.dispatch({ type: "BILLING_POPUP_BRIDGE_CALLBACK_START", paymentSourceType });
  const HTTP = paymentSourceType(1272).HTTP;
  const request = { url: closure_10.BILLING_POPUP_BRIDGE_CALLBACK(paymentSourceType), body: { state, path, query, insecure }, oldFormErrors: true, rejectWithError: false };
  return HTTP.post(request).then((result) => {
    const obj = { type: "BILLING_POPUP_BRIDGE_CALLBACK_END", paymentSourceType };
    obj.dispatch(obj);
    return result;
  });
};
export const fetchIpCountryCode = function fetchIpCountryCode() {
  const self = this;
  const apply = closure_39.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchPaymentSourceCreationContext = function fetchPaymentSourceCreationContext() {
  const HTTP = HTTPUtils.HTTP;
  return HTTP.get({ url: closure_1_10.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: true, rejectWithError: false });
};
export const clearAndFetchPaymentSourceCreationContext = function clearAndFetchPaymentSourceCreationContext() {
  let obj = DispatcherDefault;
  obj.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_START" });
  const HTTP = HTTPUtils.HTTP;
  obj = { url: closure_1_10.BILLING_PAYMENT_SOURCE_CREATION_CONTEXT, oldFormErrors: true, rejectWithError: false };
  value = HTTP.get(obj);
  value.then((body) => {
    body = body.body;
    if (null != body) {
      let store_country = body.store_country;
      if (store_country == null) {
        store_country = null;
      }
      let obj = { store_country, allowed_payment_source_types: null, allowed_billing_address_countries: null };
      let prop = body.allowed_payment_source_types;
      if (prop == null) {
        prop = [];
      }
      obj.allowed_payment_source_types = prop;
      let prop1 = body.allowed_billing_address_countries;
      if (prop1 == null) {
        prop1 = [];
      }
      obj = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_SUCCESS", data: null, allowed_billing_address_countries: prop1 };
      obj.data = obj;
      DispatcherDefault.dispatch(obj);
    } else {
      obj = DispatcherDefault;
      const obj1 = { type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL", error: null };
      const _Error = Error;
      const error = new Error("Missing response body");
      obj1.error = error;
      obj.dispatch(obj1);
    }
  }).catch((error) => {
    if (!(error instanceof Error)) {
      const _Error = Error;
      const _String = String;
      error = new Error(String(error));
    }
    DispatcherDefault.dispatch({ type: "PAYMENT_SOURCE_CREATION_CONTEXT_FETCH_FAIL", error });
  });
};
export const fetchIpLocation = function fetchIpLocation() {
  const self = this;
  const apply = closure_40.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetPaymentIntentId = function resetPaymentIntentId() {
  DispatcherDefault.dispatch({ type: "RESET_PAYMENT_ID" });
};
export const resetSubscriptionStore = function resetSubscriptionStore() {
  DispatcherDefault.dispatch({ type: "BILLING_SUBSCRIPTION_RESET" });
};
export const startBrowserCheckout = function startBrowserCheckout(loadId) {
  const obj = { type: "USER_PAYMENT_BROWSER_CHECKOUT_STARTED", loadId };
  obj.dispatch(obj);
};
export const redeemReactivationOffer = function redeemReactivationOffer() {
  const self = this;
  const apply = closure_41.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const redeemUserDiscountOffer = function redeemUserDiscountOffer() {
  const self = this;
  const apply = closure_42.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};