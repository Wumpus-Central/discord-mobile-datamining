// === Module 13194: PremiumSubscriptionInvoice ===

// Module 13194 (PremiumSubscriptionInvoice)
import Constants from "Constants" /* 1085 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import InvoiceRecord from "InvoiceRecord" /* 4537 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_12, dependencyMap, planId, preventFetch;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
const f114147 = (enabled) => enabled.enabled;
function createSubscriptionInvoicePreview() {
  return obj(...arguments);
}
let obj = function _createSubscriptionInvoicePreview() {
  obj = _asyncToGenerator(async function(arg0) {
    let applyEntitlements;
    let c0;
    let c1;
    let c2;
    let c3;
    let c5;
    let c6;
    let c7;
    let c8;
    let currency;
    let renewal;
    let result;
    let value;
    let closure_0 = arg0;
    if (renewal === 2) {
      renewal = 3;
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
      let c4;
      try {
        let paymentSourceId;
        let trial_id;
        let code;
        let metadata;
        let load_id;
        let obj5;
        let body;
        renewal = 2;
        if (0 === currency) {
          if (arg0 === 1) {
            renewal = 3;
            throw value;
          } else if (arg0 === 2) {
            renewal = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c0 = undefined;
            paymentSourceId = undefined;
            trial_id = undefined;
            code = undefined;
            applyEntitlements = undefined;
            currency = undefined;
            renewal = undefined;
            metadata = undefined;
            load_id = undefined;
            ({ items: c0, paymentSourceId: c1, trialId: c2, code: c3, applyEntitlements } = closure_0);
            if (applyEntitlements === undefined) {
              applyEntitlements = false;
            }
            ({ currency: c5, renewal: c6, metadata: c7, loadId: c8 } = closure_0);
            obj5 = undefined;
            body = undefined;
            value = undefined;
            currency = 1;
            renewal = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === currency) {
          if (arg0 === 1) {
            renewal = 3;
            throw value;
          } else if (arg0 === 2) {
            renewal = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            obj5 = {
              items: result.map((planId) => {
                        planId = planId.planId;
                        obj = { plan_id: planId };
                        const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
                        return obj;
                      }),
              payment_source_id: paymentSourceId,
              trial_id,
              code,
              apply_entitlements: applyEntitlements,
              currency,
              renewal,
              metadata,
              load_id
            };
            const obj10 = closure_130_0(closure_130_2[6]);
            result = obj10.coerceExistingItemsToNewItemInterval(c0);
            c0 = result;
            c4 = 1;
            const HTTP = closure_130_0(closure_130_2[7]).HTTP;
            const request = { url: closure_130_12.BILLING_SUBSCRIPTIONS_PREVIEW, body: obj5, oldFormErrors: true, rejectWithError: false };
            currency = 3;
            renewal = 1;
            const obj6 = { value: HTTP.post(request), done: false };
            return obj6;
          }
        } else if (2 === currency) {
          c4 = 0;
          closure_12 = closure_3;
          const self = this;
          const self2 = this;
          const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_12);
          throw billingError;
        } else if (arg0 === 1) {
          renewal = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          renewal = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          value = closure_130_11.createInvoiceFromServer(body.body);
          const checkoutContext = value.checkoutContext;
          let payment_sources;
          if (checkoutContext != null) {
            payment_sources = checkoutContext.payment_sources;
          }
          if (null != payment_sources) {
            obj = closure_130_1(closure_130_2[8]);
            const obj8 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: value.checkoutContext, paymentSourceId };
            obj.dispatch(obj8);
          }
          c4 = 0;
          renewal = 3;
          const obj9 = { value, done: true };
          return obj9;
        }
      } catch (tmp23) {
        closure_3 = tmp23;
        if (0 === c4) {
          renewal = 3;
          throw tmp23;
        } else {
          currency = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function updateSubscriptionInvoicePreview() {
  return obj(...arguments);
}
obj = function _updateSubscriptionInvoicePreview() {
  obj = _asyncToGenerator(async function(arg0) {
    let applyEntitlements;
    let c0;
    let c2;
    let c3;
    let c4;
    let c6;
    let c7;
    let c8;
    let c9;
    let closure_1;
    let location_stack;
    let obj7;
    let value;
    let closure_0 = arg0;
    if (location_stack === 2) {
      location_stack = 3;
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
      let currency;
      try {
        let renewal;
        let _location;
        let user_discount_offer_id;
        let load_id;
        let obj6;
        let body;
        location_stack = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            location_stack = 3;
            throw value;
          } else if (arg0 === 2) {
            location_stack = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            c0 = undefined;
            closure_1 = undefined;
            renewal = undefined;
            currency = undefined;
            applyEntitlements = undefined;
            location_stack = undefined;
            _location = undefined;
            user_discount_offer_id = undefined;
            load_id = undefined;
            ({ subscriptionId: c0, items: closure_1, paymentSourceId: c2, renewal: c3, currency: c4, applyEntitlements } = closure_0);
            if (applyEntitlements === undefined) {
              applyEntitlements = false;
            }
            ({ analyticsLocations: c6, analyticsLocation: c7, userDiscountOfferId: c8, loadId: c9 } = closure_0);
            obj6 = undefined;
            body = undefined;
            value = undefined;
            c5 = 1;
            location_stack = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            location_stack = 3;
            throw value;
          } else if (arg0 === 2) {
            location_stack = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (null != closure_1) {
              const obj5 = closure_130_0(closure_130_2[6]);
              closure_1 = obj5.coerceExistingItemsToNewItemInterval(closure_1);
            }
            let mapped;
            const arr = closure_1;
            if (closure_1 != null) {
              mapped = arr.map((planId) => {
                planId = planId.planId;
                obj = { plan_id: planId };
                const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
                return obj;
              });
            }
            obj6 = { items: mapped, payment_source_id: tmp, renewal, apply_entitlements: applyEntitlements, currency, user_discount_offer_id, load_id };
            currency = 1;
            const HTTP = closure_130_0(closure_130_2[7]).HTTP;
            const request = { url: closure_130_12.BILLING_SUBSCRIPTION_PREVIEW(c0), query: obj7, body: obj6, oldFormErrors: true, rejectWithError: false };
            const patch = HTTP.patch;
            obj7 = { location: _location, location_stack };
            c5 = 3;
            location_stack = 1;
            const obj8 = { value: patch(request), done: false };
            return obj8;
          }
        } else if (2 === c5) {
          currency = 0;
          let closure_13 = closure_3;
          const self = this;
          const self2 = this;
          const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_13);
          throw billingError;
        } else if (arg0 === 1) {
          location_stack = 3;
          throw value;
        } else if (arg0 === 2) {
          currency = 0;
          location_stack = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body = value;
          value = closure_130_11.createInvoiceFromServer(body.body);
          let tmp8 = null != tmp;
          if (tmp8) {
            const checkoutContext = value.checkoutContext;
            let payment_sources;
            if (checkoutContext != null) {
              payment_sources = checkoutContext.payment_sources;
            }
            tmp8 = null != payment_sources;
          }
          if (tmp8) {
            obj = closure_130_1(closure_130_2[8]);
            const obj10 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: value.checkoutContext, paymentSourceId: tmp };
            obj.dispatch(obj10);
          }
          currency = 0;
          location_stack = 3;
          const obj11 = { value, done: true };
          return obj11;
        }
      } catch (tmp48) {
        closure_3 = tmp48;
        if (0 === currency) {
          location_stack = 3;
          throw tmp48;
        } else {
          c5 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function createOneTimePurchaseInvoicePreview() {
  return obj(...arguments);
}
obj = function _createOneTimePurchaseInvoicePreview() {
  obj = _asyncToGenerator(async function(payment_source_id) {
    let c0;
    let c1;
    let c2;
    let c3;
    let c4;
    let c5;
    let quantity;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (payment_source_id === 1) {
        throw value;
      } else if (payment_source_id === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let load_id;
      try {
        let sku_subscription_plan_id;
        let currency;
        let obj5;
        let body;
        c6 = 2;
        if (0 === quantity) {
          if (payment_source_id === 1) {
            c6 = 3;
            throw value;
          } else if (payment_source_id === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            payment_source_id = undefined;
            c1 = undefined;
            sku_subscription_plan_id = undefined;
            currency = undefined;
            load_id = undefined;
            ({ paymentSourceId: c0, skuId: c1, subscriptionPlanId: c2, currency: c3, loadId: c4, quantity: c5 } = closure_0);
            obj5 = undefined;
            body = undefined;
            quantity = 1;
            c6 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === quantity) {
          if (payment_source_id === 1) {
            c6 = 3;
            throw value;
          } else if (payment_source_id === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp20 = null != c1;
            const tmp50 = closure_130_1(closure_130_2[10]);
            if (tmp20) {
              tmp20 = "" !== c1;
            }
            tmp50(tmp20, "SKU ID is missing for one time purchase gift invoice preview");
            obj5 = { gift: true, payment_source_id, sku_subscription_plan_id, currency, load_id };
            if (null != quantity) {
              obj5.quantity = quantity;
            }
            load_id = 1;
            const request = { url: closure_130_12.STORE_SKU_PURCHASE(c1), query: obj5, oldFormErrors: true, rejectWithError: false };
            const httpGetWithCountryCodeQuery = closure_130_0(closure_130_2[11]).httpGetWithCountryCodeQuery;
            const tmp35 = closure_130_0(closure_130_2[11]);
            quantity = 3;
            c6 = 1;
            const obj6 = { value: httpGetWithCountryCodeQuery(request), done: false };
            return obj6;
          }
        } else if (2 === quantity) {
          load_id = 0;
          let closure_8 = closure_3;
          const self = this;
          const self2 = this;
          const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_8);
          throw billingError;
        } else if (payment_source_id === 1) {
          c6 = 3;
          throw value;
        } else if (payment_source_id === 2) {
          load_id = 0;
          c6 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          load_id = 0;
          c6 = 3;
          obj = { value: closure_130_11.createInvoiceFromServer(body.body), done: true };
          return obj;
        }
      } catch (tmp39) {
        closure_3 = tmp39;
        if (0 === load_id) {
          c6 = 3;
          throw tmp39;
        } else {
          quantity = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
function getSubscriptionInvoice() {
  return obj(...arguments);
}
obj = function _getSubscriptionInvoice() {
  obj = _asyncToGenerator(async (arg0) => {
    let c0;
    let c1;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
      try {
        let body;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ subscriptionId: c0, preventFetch: c1 } = closure_0);
            body = undefined;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const tmp20 = c1;
            if (tmp20) {
              c4 = 3;
              return { value: null, done: true };
            } else {
              const HTTP = closure_130_0(closure_130_2[7]).HTTP;
              const obj5 = { url: closure_130_12.BILLING_SUBSCRIPTION_INVOICE(c0), oldFormErrors: true, rejectWithError: false };
              const get = HTTP.get;
              c3 = 2;
              c4 = 1;
              const obj6 = { value: get(obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          body = value;
          c4 = 3;
          obj = { value: closure_130_11.createInvoiceFromServer(body.body), done: true };
          return obj;
        }
      } catch (tmp15) {
        c4 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
let closure_3 = ["subscriptionId"];
({ useCallback: metroImportDefault, useEffect: metroImportAll, useState: c9, useRef: c10 } = react);
const Endpoints = Constants.Endpoints;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((preventFetch, arg1, arg2) => {
  let tmp4;
  let tmp6;
  _require = arg1;
  obj = require("react");
  const cResult = obj.c(10);
  preventFetch = preventFetch.preventFetch;
  let closure_1 = tmp2;
  const tmp3 = _slicedToArray(closure_9(null), 2);
  [tmp4, dependencyMap] = tmp3;
  [tmp6, closure_3] = _slicedToArray(closure_9(null), 2);
  const tmp5 = _slicedToArray(closure_9(null), 2);
  if (cResult[0] === arg1) {
    let tmp7;
    if (cResult[1] === (undefined !== preventFetch && preventFetch)) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === arg1) {
      if (cResult[4] === (undefined !== preventFetch && preventFetch)) {
        let tmp9;
        if (cResult[5] === arg2) {
          tmp9 = cResult[6];
        }
        closure_8(tmp7, tmp9);
        if (cResult[7] === tmp6) {
          let tmp12;
          if (cResult[8] === tmp4) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
        const items = [tmp4, tmp6];
        cResult[7] = tmp6;
        cResult[8] = tmp4;
        cResult[9] = items;
        tmp12 = items;
      }
    }
    const items1 = [tmp2, arg1, arg2];
    cResult[3] = arg1;
    cResult[4] = undefined !== preventFetch && preventFetch;
    cResult[5] = arg2;
    cResult[6] = items1;
    tmp9 = items1;
  }
  const fn = function o() {
    function loadPreview() {
      return closure_0(...arguments);
    }
    let c0 = false;
    closure_0 = _asyncToGenerator(async () => {
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
              closure_1 = tmp;
              closure_0 = undefined;
              c3 = 1;
              closure_2_3(null);
              c4 = 2;
              c5 = 1;
              const obj4 = { value: closure_0(), done: false };
              return obj4;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_1 = closure_2;
              const tmp15 = closure_0;
              if (!tmp15) {
                closure_2_3(tmp13);
                closure_2_2(null);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = value;
              const tmp7 = closure_0;
              if (!tmp7) {
                closure_2_2(closure_0);
              }
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp23) {
          closure_2 = tmp23;
          if (0 === c3) {
            c5 = 3;
            throw tmp23;
          } else {
            c4 = 1;
          }
        }
      }
    });
    if (!closure_1) {
      loadPreview();
    }
    return () => {
      c0 = true;
    };
  };
  cResult[0] = arg1;
  cResult[1] = undefined !== preventFetch && preventFetch;
  cResult[2] = fn;
  tmp7 = fn;
}) : ((preventFetch, arg1, arg2) => {
  let c2;
  let first;
  let tmp2;
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  let closure_1 = arg1;
  c2 = undefined;
  closure_3 = undefined;
  let tmp = _slicedToArray(closure_9(null), 2);
  [tmp2, c2] = tmp;
  [first, closure_3] = closure_9(null);
  const items = [flag, arg1, arg2];
  closure_8(() => {
    function loadPreview() {
      return obj(...arguments);
    }
    obj = function _loadPreview2() {
      obj = _asyncToGenerator(async () => {
        let closure_2;
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
          let v0;
          try {
            let closure_0;
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
                closure_0 = undefined;
                v0 = 1;
                v0(null);
                c4 = 2;
                c5 = 1;
                const obj4 = { value: tmp23(), done: false };
                return obj4;
              }
            } else {
              if (1 === c4) {
                v0 = 0;
                if (!closure_129_0) {
                  v0(tmp13);
                  tmp23(null);
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = value;
                if (!closure_129_0) {
                  tmp23(closure_0);
                }
                v0 = 0;
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp23) {
            if (0 === v0) {
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
    let c0 = false;
    const tmp = c0;
    if (!tmp) {
      loadPreview();
    }
    return () => {
      c0 = true;
    };
  }, items);
  const items1 = [tmp2, first];
  return items1;
});
let closure_21 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useFetchSubscriptionGiftInvoicePreview(current, arg1) {
  let ref2;
  let tmp2;
  let tmp5;
  _require = current;
  obj = require("react");
  const cResult = obj.c(3);
  const ref = closure_10(current);
  dependencyMap = closure_10(false);
  if (cResult[0] !== current) {
    const fn = function t() {
      ref.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  closure_8(tmp2);
  const json = JSON.stringify(current);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      current = ref.current;
      let tmp2 = current;
      if (!ref2.current) {
        obj = { paymentSourceId: null };
        const merged = Object.assign(current);
        tmp2 = obj;
      }
      ref2.current = true;
      return createOneTimePurchaseInvoicePreview(tmp2);
    };
    cResult[2] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  return closure_21(current, tmp5, arg1);
}) : (function useFetchSubscriptionGiftInvoicePreview(current, arg1) {
  const ref = closure_10(current);
  const ref2 = closure_10(false);
  closure_8(() => {
    ref.current = current;
  });
  const items = [JSON.stringify(current)];
  return closure_21(current, closure_7(() => {
    current = ref.current;
    let tmp2 = current;
    if (!ref2.current) {
      obj = { paymentSourceId: null };
      const merged = Object.assign(current);
      tmp2 = obj;
    }
    ref2.current = true;
    return createOneTimePurchaseInvoicePreview(tmp2);
  }, items), arg1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (function useServerProvidedInvoiceCache(arg0) {
  let first;
  let ref;
  let tmp4;
  let tmp6;
  let tmp7;
  let tmp8;
  obj = require("react");
  const cResult = obj.c(6);
  let tmp2 = closure_10(null);
  _require = tmp2;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      ref.current = null;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const items = [arg0];
    cResult[1] = arg0;
    cResult[2] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[2];
  }
  closure_8(first, tmp4);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function c(paymentSourceId, arg1) {
      const current = ref.current;
      return null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId && arg1 === current.dedupeKey;
    };
    cResult[3] = fn2;
    tmp6 = fn2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function s(record, dedupeKey, arg2) {
      let tmp6;
      let tmp2 = null;
      if (null == arg2) {
        const checkoutContext = record.checkoutContext;
        let payment_sources;
        obj = { record, dedupeKey, serverSelectedPaymentSourceId: tmp6 };
        if (checkoutContext != null) {
          payment_sources = checkoutContext.payment_sources;
        }
        tmp6 = null;
        if (null != payment_sources) {
          const found = payment_sources.find(f114147);
          let id;
          if (found != null) {
            id = found.id;
          }
          if (id == null) {
            id = null;
          }
          tmp6 = id;
        }
        tmp2 = obj;
      }
      ref.current = tmp2;
    };
    cResult[4] = fn3;
    tmp7 = fn3;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { serverPricedPreviewRef: tmp2, shouldReturnInvoiceCache: tmp6, updateServerPricedPreviewRef: tmp7 };
    cResult[5] = obj2;
    tmp8 = obj2;
  } else {
    tmp8 = cResult[5];
  }
  return tmp8;
}) : (function useServerProvidedInvoiceCache(arg0) {
  const tmp = closure_10(null);
  const ref = tmp;
  const items = [arg0];
  let tmp2 = closure_8(() => {
    ref.current = null;
  }, items);
  const tmp3 = closure_7((paymentSourceId, arg1) => {
    const current = ref.current;
    return null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId && arg1 === current.dedupeKey;
  }, []);
  obj = {
    serverPricedPreviewRef: tmp,
    shouldReturnInvoiceCache: tmp3,
    updateServerPricedPreviewRef: closure_7((record, dedupeKey, arg2) => {
      let tmp6;
      let tmp2 = null;
      if (null == arg2) {
        const checkoutContext = record.checkoutContext;
        let payment_sources;
        obj = { record, dedupeKey, serverSelectedPaymentSourceId: tmp6 };
        if (checkoutContext != null) {
          payment_sources = checkoutContext.payment_sources;
        }
        tmp6 = null;
        if (null != payment_sources) {
          const found = payment_sources.find(f114147);
          let id;
          if (found != null) {
            id = found.id;
          }
          if (id == null) {
            id = null;
          }
          tmp6 = id;
        }
        tmp2 = obj;
      }
      ref.current = tmp2;
    }, [])
  };
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetSubscriptionInvoice(current, arg1) {
  let tmp2;
  let tmp5;
  _require = current;
  obj = require("react");
  const cResult = obj.c(3);
  const ref = closure_10(current);
  if (cResult[0] !== current) {
    const fn = function t() {
      ref.current = current;
    };
    cResult[0] = current;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  closure_8(tmp2);
  const json = JSON.stringify(current);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
      return getSubscriptionInvoice(ref.current);
    };
    cResult[2] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  return closure_21(current, tmp5, arg1);
}) : (function useGetSubscriptionInvoice(current, arg1) {
  const ref = closure_10(current);
  closure_8(() => {
    ref.current = current;
  });
  const items = [JSON.stringify(current)];
  return closure_21(current, closure_7(() => getSubscriptionInvoice(ref.current), items), arg1);
});
let result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export const useFetchGenericInvoicePreview = tmp3;
export const useFetchSubscriptionGiftInvoicePreview = tmp4;
export const useFetchSubscriptionInvoicePreview = function useFetchSubscriptionInvoicePreview(subscriptionId, arg1) {
  let serverPricedPreviewRef;
  let shouldReturnInvoiceCache;
  let current = subscriptionId;
  let tmp = subscriptionId;
  if ("subscriptionId" in subscriptionId) {
    let tmp2 = null;
    tmp = subscriptionId;
    if (null == subscriptionId.subscriptionId) {
      subscriptionId = subscriptionId.subscriptionId;
      const tmp5 = shouldReturnInvoiceCache(subscriptionId, serverPricedPreviewRef);
      current = tmp5;
      tmp = tmp5;
    }
  }
  let closure_1 = closure_10(tmp);
  const ref = closure_10(false);
  const tmp6 = closure_22(arg1);
  serverPricedPreviewRef = tmp6.serverPricedPreviewRef;
  shouldReturnInvoiceCache = tmp6.shouldReturnInvoiceCache;
  const updateServerPricedPreviewRef = tmp6.updateServerPricedPreviewRef;
  closure_8(() => {
    closure_1.current = current;
  });
  const items = [JSON.stringify(tmp), serverPricedPreviewRef, shouldReturnInvoiceCache, updateServerPricedPreviewRef];
  return closure_21(tmp, closure_7(() => {
    let json;
    current = json.current;
    let tmp2 = current;
    if (!ref.current) {
      obj = { paymentSourceId: null };
      const merged = Object.assign(current);
      tmp2 = obj;
    }
    obj = tmp2;
    if ("subscriptionId" in tmp2) {
      ref.current = true;
      return updateSubscriptionInvoicePreview(tmp2);
    } else if ("items" in tmp2) {
      ref.current = true;
      const _JSON = JSON;
      const obj2 = { paymentSourceId: "exclude_from_dedupe" };
      const merged1 = Object.assign(tmp2);
      json = stringify(obj2);
      const current2 = serverPricedPreviewRef.current;
      if (null != current2) {
        let resolved;
        if (shouldReturnInvoiceCache(tmp2, json)) {
          resolved = Promise.resolve(current2.record);
        }
        return resolved;
      }
      const promise = createSubscriptionInvoicePreview(tmp2);
      resolved = promise.then((result) => {
        updateServerPricedPreviewRef(result, json, obj.paymentSourceId);
        return result;
      });
    } else {
      return null;
    }
  }, items), arg1);
};
export const useGetSubscriptionInvoice = tmp5;
export const getItemUnitPriceWithDiscount = function getItemUnitPriceWithDiscount(arg0) {
  let closure_1;
  let discounts;
  const quantity = arg0;
  ({ subscriptionPlanPrice: closure_1, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / quantity.quantity;
  });
  return closure_1;
};