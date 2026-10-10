// discord_app/modules/premium/PremiumSubscriptionInvoice.tsx
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import InvoiceRecord from "../../records/InvoiceRecord.tsx";

const require = globalThis.__r;

const require = fn;
function createSubscriptionInvoicePreview() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _createSubscriptionInvoicePreview(arg0) {
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
      return { value: "IconComponent", done: "+51" };
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
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          ({
            items: closure_129_0,
            paymentSourceId: closure_129_1,
            trialId: closure_129_2,
            code: closure_129_3,
            applyEntitlements,
          } = closure_0);
          if (applyEntitlements === undefined) {
            applyEntitlements = false;
          }
          closure_129_4 = applyEntitlements;
          ({
            currency: closure_129_5,
            renewal: closure_129_6,
            metadata: closure_129_7,
            loadId: closure_129_8,
          } = closure_0);
          closure_129_9 = undefined;
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const obj5 = {
            items: null,
            payment_source_id: null,
            trial_id: null,
            code: null,
            apply_entitlements: null,
            currency: null,
            renewal: null,
            metadata: null,
            load_id: null,
          };
          const result = closure_130_0(closure_130_2[6]).coerceExistingItemsToNewItemInterval(closure_129_0);
          closure_129_0 = result;
          obj5.items = result.map((planId) => {
            const obj = {};
            const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
            obj.plan_id = planId.planId;
            return obj;
          });
          obj5.payment_source_id = closure_129_1;
          obj5.trial_id = closure_129_2;
          obj5.code = closure_129_3;
          obj5.apply_entitlements = closure_129_4;
          obj5.currency = closure_129_5;
          obj5.renewal = closure_129_6;
          obj5.metadata = closure_129_7;
          obj5.load_id = closure_129_8;
          closure_129_9 = obj5;
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[7]).HTTP;
          const request = {
            url: closure_130_12.BILLING_SUBSCRIPTIONS_PREVIEW,
            body: closure_129_9,
            oldFormErrors: true,
            rejectWithError: false,
          };
          c5 = 3;
          c6 = 1;
          const obj6 = { value: HTTP.post(request), done: false };
          return obj6;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_12 = closure_3;
        const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_129_12);
        throw billingError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_10 = value;
        closure_129_11 = closure_130_11.createInvoiceFromServer(closure_129_10.body);
        const checkoutContext = closure_129_11.checkoutContext;
        let payment_sources;
        if (checkoutContext != null) {
          payment_sources = checkoutContext.payment_sources;
        }
        if (null != payment_sources) {
          const obj8 = {
            type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
            checkoutContext: closure_129_11.checkoutContext,
            paymentSourceId: closure_129_1,
          };
          closure_130_1(closure_130_2[8]).dispatch(obj8);
          let obj = closure_130_1(closure_130_2[8]);
        }
        c4 = 0;
        c6 = 3;
        const obj9 = { value: closure_129_11, done: true };
        return obj9;
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
function updateSubscriptionInvoicePreview() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _updateSubscriptionInvoicePreview(arg0) {
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
      return { value: "IconComponent", done: "+51" };
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
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_9 = undefined;
          ({
            subscriptionId: closure_129_0,
            items: closure_129_1,
            paymentSourceId: closure_129_2,
            renewal: closure_129_3,
            currency: closure_129_4,
            applyEntitlements,
          } = closure_0);
          if (applyEntitlements === undefined) {
            applyEntitlements = false;
          }
          closure_129_5 = applyEntitlements;
          ({
            analyticsLocations: closure_129_6,
            analyticsLocation: closure_129_7,
            userDiscountOfferId: closure_129_8,
            loadId: closure_129_9,
          } = closure_0);
          closure_129_10 = undefined;
          closure_129_11 = undefined;
          closure_129_12 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          if (null != closure_129_1) {
            closure_129_1 = closure_130_0(closure_130_2[6]).coerceExistingItemsToNewItemInterval(closure_129_1);
            const obj5 = closure_130_0(closure_130_2[6]);
          }
          let mapped;
          if (closure_129_1 != null) {
            mapped = closure_129_1.map((planId) => {
              const obj = {};
              const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
              obj.plan_id = planId.planId;
              return obj;
            });
          }
          const obj6 = {
            items: mapped,
            payment_source_id: closure_129_2,
            renewal: closure_129_3,
            apply_entitlements: closure_129_5,
            currency: closure_129_4,
            user_discount_offer_id: closure_129_8,
            load_id: closure_129_9,
          };
          closure_129_10 = obj6;
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[7]).HTTP;
          const request = {
            url: closure_130_12.BILLING_SUBSCRIPTION_PREVIEW(closure_129_0),
            query: null,
            body: null,
            oldFormErrors: true,
            rejectWithError: false,
          };
          const obj7 = { location: closure_129_7, location_stack: closure_129_6 };
          request.query = obj7;
          request.body = closure_129_10;
          c5 = 3;
          c6 = 1;
          const obj8 = { value: HTTP.patch(request), done: false };
          return obj8;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_13 = closure_3;
        const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_129_13);
        throw billingError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_129_11 = value;
        closure_129_12 = closure_130_11.createInvoiceFromServer(closure_129_11.body);
        let tmp11 = null != closure_129_2;
        if (tmp11) {
          const checkoutContext = closure_129_12.checkoutContext;
          let payment_sources;
          if (checkoutContext != null) {
            payment_sources = checkoutContext.payment_sources;
          }
          tmp11 = null != payment_sources;
        }
        if (tmp11) {
          const obj10 = {
            type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
            checkoutContext: closure_129_12.checkoutContext,
            paymentSourceId: closure_129_2,
          };
          closure_130_1(closure_130_2[8]).dispatch(obj10);
          let obj = closure_130_1(closure_130_2[8]);
        }
        c4 = 0;
        c6 = 3;
        const obj11 = { value: closure_129_12, done: true };
        return obj11;
      }
    } catch (tmp53) {
      closure_3 = tmp53;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp53;
      } else {
        c5 = tmp;
      }
    }
  }
};
function createOneTimePurchaseInvoicePreview() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_18 = async function _createOneTimePurchaseInvoicePreview(arg0) {
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
      return { value: "IconComponent", done: "+51" };
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
          closure_129_6 = undefined;
          ({
            paymentSourceId: closure_129_0,
            skuId: closure_129_1,
            subscriptionPlanId: closure_129_2,
            currency: closure_129_3,
            loadId: closure_129_4,
            quantity: closure_129_5,
            applyWalletBalance: closure_129_6,
          } = closure_0);
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Set", done: true };
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
          let tmp25 = null != closure_129_1;
          if (tmp25) {
            tmp25 = "" !== closure_129_1;
          }
          closure_130_1(closure_130_2[10])(tmp25, "SKU ID is missing for one time purchase gift invoice preview");
          const obj6 = {
            gift: true,
            payment_source_id: closure_129_0,
            sku_subscription_plan_id: closure_129_2,
            currency: closure_129_3,
            load_id: closure_129_4,
          };
          closure_129_7 = obj6;
          if (null != closure_129_5) {
            closure_129_7.quantity = closure_129_5;
          }
          if (null != closure_129_6) {
            closure_129_7.apply_wallet_balance = closure_129_6;
          }
          c4 = 1;
          const tmp60 = closure_130_1(closure_130_2[10]);
          const request = {
            url: closure_130_12.STORE_SKU_PURCHASE(closure_129_1),
            query: closure_129_7,
            oldFormErrors: true,
            rejectWithError: false,
          };
          c5 = 3;
          c6 = 1;
          const obj7 = { value: closure_130_0(closure_130_2[11]).httpGetWithCountryCodeQuery(request), done: false };
          return obj7;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_9 = closure_3;
        const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_129_9);
        throw billingError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_129_8 = value;
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_130_11.createFromOTPPreview(closure_129_8.body), done: true };
        return obj;
      }
    } catch (tmp48) {
      closure_3 = tmp48;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp48;
      } else {
        c5 = tmp;
      }
    }
  }
};
function getSubscriptionInvoice() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _getSubscriptionInvoice(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
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
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ subscriptionId: closure_129_0, preventFetch: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (closure_129_1) {
          c4 = 3;
          return { value: null, done: true };
        } else {
          const HTTP = closure_130_0(closure_130_2[7]).HTTP;
          const obj5 = {
            url: closure_130_12.BILLING_SUBSCRIPTION_INVOICE(closure_129_0),
            oldFormErrors: true,
            rejectWithError: false,
          };
          c3 = 2;
          c4 = 1;
          const obj6 = { value: HTTP.get(obj5), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_2 = value;
        c4 = 3;
        const obj = { value: closure_130_11.createInvoiceFromServer(closure_129_2.body), done: true };
        return obj;
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
};
let closure_3 = ["subscriptionId"];
const noop = fn(19);
({ useCallback: closure_7, useEffect: closure_8, useState: closure_9, useRef: c10 } = noop);
const Endpoints = fn(1085).Endpoints;
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchGenericInvoicePreview(preventFetch, arg1, arg2) {
      _require = arg1;
      const cResult = require("c").c(10);
      preventFetch = preventFetch.preventFetch;
      closure_1 = tmp2;
      const obj = require("c");
      [tmp4, dependencyMap] = closure_9(null);
      const tmp3 = _slicedToArray(closure_9(null), 2);
      [tmp6, closure_3] = closure_9(null);
      closure_4 = closure_10(null);
      if (cResult[0] === arg1) {
        if (cResult[1] === tmp2) {
          let tmp7 = cResult[2];
        }
        if (cResult[3] === arg1) {
          if (cResult[4] === tmp2) {
            if (cResult[5] === arg2) {
              let tmp9 = cResult[6];
            }
            closure_8(tmp7, tmp9);
            if (cResult[7] === tmp6) {
              if (cResult[8] === tmp4) {
                let tmp12 = cResult[9];
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
        cResult[4] = tmp2;
        cResult[5] = arg2;
        cResult[6] = items1;
        tmp9 = items1;
      }
      const fn = function o() {
        c0 = asyncGeneratorStep(async () => {
          closure_1 = tmp3;
          closure_2_3(null);
          await c0(ref.current);
          if (1 === tmp7) {
            c3 = 0;
            closure_128_1 = closure_2;
            if (!closure_0) {
              ref.current = null;
              closure_2_3(closure_128_1);
              dependencyMap(null);
            }
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            if (!closure_0) {
              ref.current = closure_128_0;
              dependencyMap(closure_128_0);
            }
            c3 = 0;
          }
          return value;
        });
        if (!closure_1) {
          (function loadPreview() {
            const self = this;
            const apply = c0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
        return () => {
          c0 = true;
        };
      };
      cResult[0] = arg1;
      cResult[1] = undefined !== preventFetch && preventFetch;
      cResult[2] = fn;
      tmp7 = fn;
      const tmp5 = _slicedToArray(closure_9(null), 2);
    }
  : function useFetchGenericInvoicePreview(preventFetch, arg1, arg2) {
      let flag = preventFetch.preventFetch;
      if (flag === undefined) {
        flag = false;
      }
      closure_1 = arg1;
      c2 = undefined;
      [tmp2, c2] = closure_9(null);
      const tmp3 = _slicedToArray(closure_9(null), 2);
      closure_3 = tmp3[1];
      closure_4 = closure_10(null);
      const items = [flag, arg1, arg2];
      closure_8(() => {
        closure_1 = async function _loadPreview2() {
          let v0 = 1;
          v0(null);
          await tmp3(ref.current);
          if (1 === tmp7) {
            v0 = 0;
            closure_128_1 = tmp31;
            if (!closure_129_0) {
              ref.current = null;
              v0(closure_128_1);
              tmp31(null);
            }
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_128_0 = value;
            if (!closure_129_0) {
              ref.current = closure_128_0;
              tmp31(closure_128_0);
            }
            v0 = 0;
          }
          v0 = 0;
          return value;
        };
        c0 = false;
        if (!c0) {
          (function loadPreview() {
            const self = this;
            const apply = closure_1.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
        }
        return () => {
          c0 = true;
        };
      }, items);
      const items1 = [tmp2, tmp3[0]];
      return items1;
    };
let closure_21 = tmp3;
fn(558);
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useServerProvidedInvoiceCache(arg0) {
      const cResult = require("c").c(6);
      let tmp2 = closure_10(null);
      _require = tmp2;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          closure_0.current = null;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const items = [arg0];
        cResult[1] = arg0;
        cResult[2] = items;
        let tmp4 = items;
      } else {
        tmp4 = cResult[2];
      }
      closure_8(first, tmp4);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function c(paymentSourceId, arg1) {
          const current = ref.current;
          let tmp =
            null != current &&
            null != paymentSourceId.paymentSourceId &&
            paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
          if (tmp) {
            tmp = arg1 === current.dedupeKey;
          }
          return tmp;
        };
        cResult[3] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function s(record, dedupeKey, arg2) {
          let tmp2 = null;
          if (null == arg2) {
            const obj = { record, dedupeKey, serverSelectedPaymentSourceId: null };
            const checkoutContext = record.checkoutContext;
            let payment_sources;
            if (checkoutContext != null) {
              payment_sources = checkoutContext.payment_sources;
            }
            let tmp6 = null;
            if (null != payment_sources) {
              const found = payment_sources.find((enabled) => enabled.enabled);
              let id;
              if (found != null) {
                id = found.id;
              }
              if (id == null) {
                id = null;
              }
              tmp6 = id;
            }
            obj.serverSelectedPaymentSourceId = tmp6;
            tmp2 = obj;
          }
          closure_0.current = tmp2;
        };
        cResult[4] = fn3;
        let tmp7 = fn3;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          serverPricedPreviewRef: tmp2,
          shouldReturnInvoiceCache: tmp6,
          updateServerPricedPreviewRef: tmp7,
        };
        cResult[5] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[5];
      }
      return tmp8;
    }
  : function useServerProvidedInvoiceCache(arg0) {
      let tmp = closure_10(null);
      const items = [arg0];
      closure_8(() => {
        closure_0.current = null;
      }, items);
      const tmp3 = closure_7((paymentSourceId, arg1) => {
        const current = ref.current;
        let tmp =
          null != current &&
          null != paymentSourceId.paymentSourceId &&
          paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
        if (tmp) {
          tmp = arg1 === current.dedupeKey;
        }
        return tmp;
      }, []);
      return {
        serverPricedPreviewRef: tmp,
        shouldReturnInvoiceCache: closure_7((paymentSourceId, arg1) => {
          const current = ref.current;
          let tmp =
            null != current &&
            null != paymentSourceId.paymentSourceId &&
            paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
          if (tmp) {
            tmp = arg1 === current.dedupeKey;
          }
          return tmp;
        }, []),
        updateServerPricedPreviewRef: closure_7((record, dedupeKey, arg2) => {
          let tmp2 = null;
          if (null == arg2) {
            const obj = { record, dedupeKey, serverSelectedPaymentSourceId: null };
            const checkoutContext = record.checkoutContext;
            let payment_sources;
            if (checkoutContext != null) {
              payment_sources = checkoutContext.payment_sources;
            }
            let tmp6 = null;
            if (null != payment_sources) {
              const found = payment_sources.find((enabled) => enabled.enabled);
              let id;
              if (found != null) {
                id = found.id;
              }
              if (id == null) {
                id = null;
              }
              tmp6 = id;
            }
            obj.serverSelectedPaymentSourceId = tmp6;
            tmp2 = obj;
          }
          closure_0.current = tmp2;
        }, []),
      };
    };
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFetchSubscriptionGiftInvoicePreview(current, arg1) {
      _require = current;
      const cResult = require("c").c(3);
      closure_10(current);
      dependencyMap = closure_10(false);
      if (cResult[0] !== current) {
        const fn = function t() {
          closure_1.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        let tmp2 = fn;
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
            const obj = {};
            const merged = Object.assign(current);
            obj.paymentSourceId = null;
            tmp2 = obj;
          }
          ref2.current = true;
          return createOneTimePurchaseInvoicePreview(tmp2);
        };
        cResult[2] = fn2;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[2];
      }
      return closure_21(current, tmp5, arg1);
    }
  : function useFetchSubscriptionGiftInvoicePreview(current, arg1) {
      closure_10(current);
      closure_10(false);
      closure_8(() => {
        closure_1.current = current;
      });
      const items = [JSON.stringify(current)];
      return closure_21(
        current,
        closure_7(() => {
          current = ref.current;
          let tmp2 = current;
          if (!ref2.current) {
            const obj = {};
            const merged = Object.assign(current);
            obj.paymentSourceId = null;
            tmp2 = obj;
          }
          ref2.current = true;
          return createOneTimePurchaseInvoicePreview(tmp2);
        }, items),
        arg1,
      );
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export const useFetchGenericInvoicePreview = tmp3;
export const useFetchSubscriptionGiftInvoicePreview = tmp4;
export const useFetchSubscriptionInvoicePreview = function useFetchSubscriptionInvoicePreview(subscriptionId, arg1) {
  let current = subscriptionId;
  let tmp = subscriptionId;
  if ("subscriptionId" in subscriptionId) {
    tmp = subscriptionId;
    if (null == subscriptionId.subscriptionId) {
      subscriptionId = subscriptionId.subscriptionId;
      const tmp5 = shouldReturnInvoiceCache(subscriptionId, serverPricedPreviewRef);
      current = tmp5;
      tmp = tmp5;
    }
  }
  closure_1 = closure_10(tmp);
  closure_10(false);
  const tmp6 = closure_22(arg1);
  serverPricedPreviewRef = tmp6.serverPricedPreviewRef;
  shouldReturnInvoiceCache = tmp6.shouldReturnInvoiceCache;
  const updateServerPricedPreviewRef = tmp6.updateServerPricedPreviewRef;
  closure_8(() => {
    closure_1.current = current;
  });
  const items = [JSON.stringify(tmp), serverPricedPreviewRef, shouldReturnInvoiceCache, updateServerPricedPreviewRef];
  return closure_21(
    tmp,
    closure_7(() => {
      current = json.current;
      let tmp2 = current;
      if (!ref.current) {
        let obj = {};
        const merged = Object.assign(current);
        obj.paymentSourceId = null;
        tmp2 = obj;
      }
      obj = tmp2;
      if ("subscriptionId" in tmp2) {
        ref.current = true;
        return updateSubscriptionInvoicePreview(tmp2);
      } else if ("items" in tmp2) {
        ref.current = true;
        const _JSON = JSON;
        const obj2 = {};
        const merged1 = Object.assign(tmp2);
        obj2.paymentSourceId = "exclude_from_dedupe";
        json = JSON.stringify(obj2);
        const current2 = serverPricedPreviewRef.current;
        if (null != current2) {
          if (shouldReturnInvoiceCache(tmp2, json)) {
            let resolved = Promise.resolve(current2.record);
          }
          return resolved;
        }
        resolved = createSubscriptionInvoicePreview(tmp2).then((result) => {
          updateServerPricedPreviewRef(result, json, obj.paymentSourceId);
          return result;
        });
        const promise = createSubscriptionInvoicePreview(tmp2);
      } else {
        return null;
      }
    }, items),
    arg1,
  );
};
export const useGetSubscriptionInvoice = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGetSubscriptionInvoice(current, arg1) {
      _require = current;
      const cResult = require("c").c(3);
      closure_10(current);
      if (cResult[0] !== current) {
        const fn = function t() {
          closure_1.current = current;
        };
        cResult[0] = current;
        cResult[1] = fn;
        let tmp2 = fn;
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
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[2];
      }
      return closure_21(current, tmp5, arg1);
    }
  : function useGetSubscriptionInvoice(current, arg1) {
      closure_10(current);
      closure_8(() => {
        closure_1.current = current;
      });
      const items = [JSON.stringify(current)];
      return closure_21(
        current,
        closure_7(() => getSubscriptionInvoice(ref.current), items),
        arg1,
      );
    };
export const getItemUnitPriceWithDiscount = function getItemUnitPriceWithDiscount(arg0) {
  const quantity = arg0;
  ({ subscriptionPlanPrice: closure_1, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / quantity.quantity;
  });
  return closure_1;
};
