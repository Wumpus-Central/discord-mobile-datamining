// discord_app/modules/premium/PremiumSubscriptionInvoice.tsx
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import InvoiceRecord from "../../records/InvoiceRecord.tsx";

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
let closure_14 = async function _createSubscriptionInvoicePreview(arg0, value) {
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
          const obj2 = {
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
          obj2.items = result.map((planId) => {
            const obj = {};
            const merged = Object.assign(Object.assign(planId, Object.assign({ planId: 0 })));
            obj.plan_id = planId.planId;
            return obj;
          });
          obj2.payment_source_id = closure_129_1;
          obj2.trial_id = closure_129_2;
          obj2.code = closure_129_3;
          obj2.apply_entitlements = closure_129_4;
          obj2.currency = closure_129_5;
          obj2.renewal = closure_129_6;
          obj2.metadata = closure_129_7;
          obj2.load_id = closure_129_8;
          closure_129_9 = obj2;
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
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
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
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_10 = value;
        closure_129_11 = closure_130_11.createInvoiceFromServer(closure_129_10.body);
        const checkoutContext = closure_129_11.checkoutContext;
        let payment_sources;
        if (checkoutContext != null) {
          payment_sources = checkoutContext.payment_sources;
        }
        if (null != payment_sources) {
          obj = closure_130_1(closure_130_2[8]);
          const obj5 = {
            type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
            checkoutContext: closure_129_11.checkoutContext,
            paymentSourceId: closure_129_1,
          };
          obj.dispatch(obj5);
        }
        c4 = 0;
        c6 = 3;
        const obj6 = { value: closure_129_11, done: true };
        return obj6;
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
let closure_16 = async function _updateSubscriptionInvoicePreview(arg0, value) {
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
          if (null != closure_129_1) {
            let obj4 = closure_130_0(closure_130_2[6]);
            closure_129_1 = obj4.coerceExistingItemsToNewItemInterval(closure_129_1);
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
          const obj2 = {
            items: mapped,
            payment_source_id: closure_129_2,
            renewal: closure_129_3,
            apply_entitlements: closure_129_5,
            currency: closure_129_4,
            user_discount_offer_id: closure_129_8,
            load_id: closure_129_9,
          };
          closure_129_10 = obj2;
          c4 = 1;
          const HTTP = closure_130_0(closure_130_2[7]).HTTP;
          const request = {
            url: closure_130_12.BILLING_SUBSCRIPTION_PREVIEW(closure_129_0),
            query: null,
            body: null,
            oldFormErrors: true,
            rejectWithError: false,
          };
          const obj3 = { location: closure_129_7, location_stack: closure_129_6 };
          request.query = obj3;
          request.body = closure_129_10;
          c5 = 3;
          c6 = 1;
          obj4 = { value: HTTP.patch(request), done: false };
          return obj4;
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
        const obj5 = { value, done: true };
        return obj5;
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
          obj = closure_130_1(closure_130_2[8]);
          const obj6 = {
            type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE",
            checkoutContext: closure_129_12.checkoutContext,
            paymentSourceId: closure_129_2,
          };
          obj.dispatch(obj6);
        }
        c4 = 0;
        c6 = 3;
        const obj7 = { value: closure_129_12, done: true };
        return obj7;
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
let closure_18 = async function _createOneTimePurchaseInvoicePreview(arg0, value) {
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
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          closure_129_5 = undefined;
          ({
            paymentSourceId: closure_129_0,
            skuId: closure_129_1,
            subscriptionPlanId: closure_129_2,
            currency: closure_129_3,
            loadId: closure_129_4,
            quantity: closure_129_5,
          } = closure_0);
          closure_129_6 = undefined;
          closure_129_7 = undefined;
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
          let tmp25 = null != closure_129_1;
          if (tmp25) {
            tmp25 = "" !== closure_129_1;
          }
          closure_130_1(closure_130_2[10])(tmp25, "SKU ID is missing for one time purchase gift invoice preview");
          const obj2 = {
            gift: true,
            payment_source_id: closure_129_0,
            sku_subscription_plan_id: closure_129_2,
            currency: closure_129_3,
            load_id: closure_129_4,
          };
          closure_129_6 = obj2;
          if (null != closure_129_5) {
            closure_129_6.quantity = closure_129_5;
          }
          c4 = 1;
          let obj3 = closure_130_0(closure_130_2[11]);
          const request = {
            url: closure_130_12.STORE_SKU_PURCHASE(closure_129_1),
            query: closure_129_6,
            oldFormErrors: true,
            rejectWithError: false,
          };
          c5 = 3;
          c6 = 1;
          obj3 = { value: null, done: false };
          obj3.value = obj3.httpGetWithCountryCodeQuery(request);
          return obj3;
        }
      } else if (2 === tmp7) {
        c4 = 0;
        closure_129_8 = closure_3;
        const billingError = new closure_130_0(closure_130_2[9]).BillingError(closure_129_8);
        throw billingError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_7 = value;
        c4 = 0;
        c6 = 3;
        obj = { value: closure_130_11.createInvoiceFromServer(closure_129_7.body), done: true };
        return obj;
      }
    } catch (tmp43) {
      closure_3 = tmp43;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp43;
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
let closure_20 = async function _getSubscriptionInvoice(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ subscriptionId: closure_129_0, preventFetch: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (closure_129_1) {
          c4 = 3;
          return { value: null, done: true };
        } else {
          const HTTP = closure_130_0(closure_130_2[7]).HTTP;
          const obj2 = {
            url: closure_130_12.BILLING_SUBSCRIPTION_INVOICE(closure_129_0),
            oldFormErrors: true,
            rejectWithError: false,
          };
          c3 = 2;
          c4 = 1;
          const obj3 = { value: HTTP.get(obj2), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_129_2 = value;
        c4 = 3;
        obj = { value: closure_130_11.createInvoiceFromServer(closure_129_2.body), done: true };
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
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export const useFetchGenericInvoicePreview = function useFetchGenericInvoicePreview(preventFetch, arg1, arg2) {
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = arg1;
  c2 = undefined;
  [tmp2, c2] = _slicedToArray(closure_9(null), 2);
  const tmp3 = _slicedToArray(closure_9(null), 2);
  closure_3 = tmp3[1];
  const items = [flag, arg1, arg2];
  closure_8(() => {
    closure_1 = async function _loadPreview() {
      let v0 = 1;
      v0(null);
      await tmp3();
      if (1 === tmp7) {
        v0 = 0;
        closure_128_1 = tmp26;
        if (!closure_129_0) {
          v0(tmp16);
          tmp26(null);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        if (!closure_129_0) {
          tmp26(closure_128_0);
        }
        v0 = 0;
      }
      v0 = 0;
      return arg1;
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
export const useFetchSubscriptionGiftInvoicePreview = function useFetchSubscriptionGiftInvoicePreview(
  preventFetch,
  arg1,
) {
  let current = preventFetch;
  closure_10(preventFetch);
  closure_10(false);
  closure_8(() => {
    closure_1.current = current;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp3 = closure_7(() => {
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
  }, items);
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_129_0 = flag;
  closure_129_1 = tmp3;
  closure_129_2 = undefined;
  [tmp5, closure_129_2] = _slicedToArray(closure_9(null), 2);
  const tmp6 = _slicedToArray(closure_9(null), 2);
  closure_129_3 = tmp6[1];
  const items1 = [flag, tmp3, arg1];
  closure_8(() => {
    closure_1 = async function _loadPreview() {
      let v0 = 1;
      v0(null);
      await tmp3();
      if (1 === tmp7) {
        v0 = 0;
        closure_128_1 = tmp26;
        if (!closure_129_0) {
          v0(tmp16);
          tmp26(null);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        if (!closure_129_0) {
          tmp26(closure_128_0);
        }
        v0 = 0;
      }
      v0 = 0;
      return arg1;
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
  }, items1);
  const items2 = [tmp5, tmp6[0]];
  return items2;
};
export const useFetchSubscriptionInvoicePreview = function useFetchSubscriptionInvoicePreview(subscriptionId, arg1) {
  let current = subscriptionId;
  let tmp = subscriptionId;
  if ("subscriptionId" in subscriptionId) {
    tmp = subscriptionId;
    if (null == subscriptionId.subscriptionId) {
      subscriptionId = subscriptionId.subscriptionId;
      const tmp5 = _objectWithoutProperties(subscriptionId, ref2);
      current = tmp5;
      tmp = tmp5;
    }
  }
  closure_1 = closure_10(tmp);
  closure_10(false);
  let tmp6 = closure_10(null);
  closure_129_0 = tmp6;
  const items = [arg1];
  closure_8(() => {
    closure_0.current = null;
  }, items);
  const tmp9 = closure_7((paymentSourceId, arg1) => {
    current = current.current;
    let tmp =
      null != current &&
      null != paymentSourceId.paymentSourceId &&
      paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
    if (tmp) {
      tmp = arg1 === current.dedupeKey;
    }
    return tmp;
  }, []);
  const tmp10 = closure_7((record, dedupeKey, arg2) => {
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
  }, []);
  _objectWithoutProperties = tmp9;
  _slicedToArray = tmp10;
  closure_8(() => {
    closure_1.current = current;
  });
  const items1 = [JSON.stringify(tmp), tmp6, tmp9, tmp10];
  const tmp12 = closure_7(() => {
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
      tmp.current = true;
      return updateSubscriptionInvoicePreview(tmp2);
    } else if ("items" in tmp2) {
      tmp.current = true;
      const _JSON = JSON;
      obj = {};
      const merged1 = Object.assign(tmp2);
      obj.paymentSourceId = "exclude_from_dedupe";
      json = JSON.stringify(obj);
      const current2 = ref2.current;
      if (null != current2) {
        if (closure_4(tmp2, json)) {
          let resolved = Promise.resolve(current2.record);
        }
        return resolved;
      }
      resolved = createSubscriptionInvoicePreview(tmp2).then((result) => {
        closure_5(result, json, obj.paymentSourceId);
        return result;
      });
      const promise = createSubscriptionInvoicePreview(tmp2);
    } else {
      return null;
    }
  }, items1);
  closure_130_0 = undefined;
  closure_130_1 = undefined;
  let flag = tmp.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_130_0 = flag;
  closure_130_1 = tmp12;
  closure_130_2 = undefined;
  [tmp14, closure_130_2] = _slicedToArray(closure_9(null), 2);
  const tmp15 = _slicedToArray(closure_9(null), 2);
  closure_130_3 = tmp15[1];
  const items2 = [flag, tmp12, arg1];
  closure_8(() => {
    closure_1 = async function _loadPreview() {
      let v0 = 1;
      v0(null);
      await tmp3();
      if (1 === tmp7) {
        v0 = 0;
        closure_128_1 = tmp26;
        if (!closure_129_0) {
          v0(tmp16);
          tmp26(null);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        if (!closure_129_0) {
          tmp26(closure_128_0);
        }
        v0 = 0;
      }
      v0 = 0;
      return arg1;
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
  }, items2);
  const items3 = [tmp14, tmp15[0]];
  return items3;
};
export const useGetSubscriptionInvoice = function useGetSubscriptionInvoice(preventFetch, arg1) {
  const current = preventFetch;
  closure_10(preventFetch);
  closure_8(() => {
    closure_1.current = current;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp3 = closure_7(() => getSubscriptionInvoice(ref.current), items);
  closure_129_0 = undefined;
  closure_129_1 = undefined;
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_129_0 = flag;
  closure_129_1 = tmp3;
  closure_129_2 = undefined;
  [tmp5, closure_129_2] = _slicedToArray(closure_9(null), 2);
  const tmp6 = _slicedToArray(closure_9(null), 2);
  closure_129_3 = tmp6[1];
  const items1 = [flag, tmp3, arg1];
  closure_8(() => {
    closure_1 = async function _loadPreview() {
      let v0 = 1;
      v0(null);
      await tmp3();
      if (1 === tmp7) {
        v0 = 0;
        closure_128_1 = tmp26;
        if (!closure_129_0) {
          v0(tmp16);
          tmp26(null);
        }
        c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        closure_128_0 = arg1;
        if (!closure_129_0) {
          tmp26(closure_128_0);
        }
        v0 = 0;
      }
      v0 = 0;
      return arg1;
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
  }, items1);
  const items2 = [tmp5, tmp6[0]];
  return items2;
};
export const getItemUnitPriceWithDiscount = function getItemUnitPriceWithDiscount(arg0) {
  const quantity = arg0;
  ({ subscriptionPlanPrice: closure_1, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / quantity.quantity;
  });
  return closure_1;
};
