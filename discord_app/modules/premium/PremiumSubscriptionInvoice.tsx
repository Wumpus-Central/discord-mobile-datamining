// === Module 13343: createSubscriptionInvoicePreview ===

// Module 13343 (createSubscriptionInvoicePreview)
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "_slicedToArray" /* 32 */;
import closure_6 from "asyncGeneratorStep" /* 5 */;
import noop from "noop" /* 19 */;
import closure_11 from "createFromServer" /* 4227 */;
import { Endpoints } from "ME" /* 1074 */;

const require = arg1;
function createSubscriptionInvoicePreview() {
  const self = this;
  const apply = _createSubscriptionInvoicePreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createSubscriptionInvoicePreview() {
  const self = this;
  const tmp = callback3((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: null };
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
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              ({ items: c0, paymentSourceId: c1, trialId: c2, code: c3, applyEntitlements } = callback);
              if (applyEntitlements === undefined) {
                applyEntitlements = false;
              }
              c4 = applyEntitlements;
              ({ currency: c5, renewal: c6, metadata: c7, loadId: c8 } = callback);
              let obj2;
              let body;
              closure_11 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
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
              obj2 = { items: null, payment_source_id: null, trial_id: null, code: null, apply_entitlements: null, currency: null, renewal: null, metadata: null, load_id: null };
              const result = callback(4218).coerceExistingItemsToNewItemInterval(callback);
              callback = result;
              obj2[0] = result.map((planId) => {
                const obj = {};
                const merged = Object.assign(Object.assign(planId, Object.create(null)));
                obj.plan_id = planId.planId;
                return obj;
              });
              obj2[1] = callback2;
              obj2[2] = dependencyMap;
              obj2[3] = c3;
              obj2[4] = c4;
              obj2[5] = c5;
              obj2[6] = c6;
              obj2[7] = c7;
              obj2[8] = c8;
              c4 = 1;
              const HTTP = callback(1272).HTTP;
              const obj3 = { url: null, body: null, oldFormErrors: true, rejectWithError: false };
              obj3[0] = constants.BILLING_SUBSCRIPTIONS_PREVIEW;
              obj3[1] = obj2;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj3);
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            constants = c3;
            const billingError = new callback(4461).BillingError(constants);
            throw billingError;
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
            body = arg1;
            closure_11 = closure_11.createInvoiceFromServer(body.body);
            const checkoutContext = closure_11.checkoutContext;
            let payment_sources;
            if (checkoutContext != null) {
              payment_sources = checkoutContext.payment_sources;
            }
            if (null != payment_sources) {
              obj = callback2(573);
              const obj6 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: null, paymentSourceId: null };
              obj6[1] = closure_11.checkoutContext;
              obj6[2] = callback2;
              obj.dispatch(obj6);
            }
            c4 = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = closure_11;
            return obj7;
          }
        } catch (tmp28) {
          c3 = tmp28;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp28;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function updateSubscriptionInvoicePreview() {
  const self = this;
  const apply = _updateSubscriptionInvoicePreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateSubscriptionInvoicePreview() {
  const self = this;
  const tmp = callback3((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: null };
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
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              c6 = undefined;
              c7 = undefined;
              c8 = undefined;
              c9 = undefined;
              ({ subscriptionId: c0, items: closure_1, paymentSourceId: c2, renewal: c3, currency: c4, applyEntitlements } = callback);
              if (applyEntitlements === undefined) {
                applyEntitlements = false;
              }
              c5 = applyEntitlements;
              ({ analyticsLocations: c6, analyticsLocation: c7, userDiscountOfferId: c8, loadId: c9 } = callback);
              let obj2;
              closure_11 = undefined;
              closure_12 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
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
              if (null != callback2) {
                let obj4 = callback(4218);
                callback2 = obj4.coerceExistingItemsToNewItemInterval(callback2);
              }
              let mapped;
              if (callback2 != null) {
                mapped = callback2.map((planId) => {
                  const obj = {};
                  const merged = Object.assign(Object.assign(planId, Object.create(null)));
                  obj.plan_id = planId.planId;
                  return obj;
                });
              }
              obj2 = { items: null, payment_source_id: null, renewal: null, apply_entitlements: null, currency: null, user_discount_offer_id: null, load_id: null };
              obj2[0] = mapped;
              obj2[1] = dependencyMap;
              obj2[2] = c3;
              obj2[3] = c5;
              obj2[4] = c4;
              obj2[5] = c8;
              obj2[6] = c9;
              c4 = 1;
              const HTTP = callback(1272).HTTP;
              const obj3 = { url: null, query: null, body: null, oldFormErrors: true, rejectWithError: false };
              obj3[0] = closure_12.BILLING_SUBSCRIPTION_PREVIEW(callback);
              obj4 = { location: null, location_stack: null };
              obj4[0] = c7;
              obj4[1] = c6;
              obj3[1] = obj4;
              obj3[2] = obj2;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.patch(obj3);
              return obj5;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            closure_13 = c3;
            const billingError = new callback(4461).BillingError(closure_13);
            throw billingError;
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
            closure_11 = arg1;
            closure_12 = closure_11.createInvoiceFromServer(closure_11.body);
            let tmp11 = null != dependencyMap;
            if (tmp11) {
              const checkoutContext = closure_12.checkoutContext;
              let payment_sources;
              if (checkoutContext != null) {
                payment_sources = checkoutContext.payment_sources;
              }
              tmp11 = null != payment_sources;
            }
            if (tmp11) {
              obj = callback2(573);
              const obj7 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: null, paymentSourceId: null };
              obj7[1] = closure_12.checkoutContext;
              obj7[2] = dependencyMap;
              obj.dispatch(obj7);
            }
            c4 = 0;
            c6 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = closure_12;
            return obj8;
          }
        } catch (tmp53) {
          c3 = tmp53;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp53;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function createOneTimePurchaseInvoicePreview() {
  const self = this;
  const apply = _createOneTimePurchaseInvoicePreview.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _createOneTimePurchaseInvoicePreview() {
  const self = this;
  const tmp = callback3((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
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
          return { value: "HermesInternal", done: null };
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
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              c4 = undefined;
              c5 = undefined;
              ({ paymentSourceId: c0, skuId: c1, subscriptionPlanId: c2, currency: c3, loadId: c4, quantity: c5 } = callback);
              c6 = undefined;
              let body;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
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
              let tmp25 = null != callback2;
              if (tmp25) {
                tmp25 = "" !== callback2;
              }
              callback2(38)(tmp25, "SKU ID is missing for one time purchase gift invoice preview");
              const obj2 = { gift: true, payment_source_id: null, sku_subscription_plan_id: null, currency: null, load_id: null };
              obj2[1] = callback;
              obj2[2] = dependencyMap;
              obj2[3] = c3;
              obj2[4] = c4;
              c6 = obj2;
              if (null != c5) {
                c6.quantity = c5;
              }
              c4 = 1;
              let obj3 = callback(4802);
              obj3 = { url: null, query: null, oldFormErrors: true, rejectWithError: false };
              obj3[0] = closure_12.STORE_SKU_PURCHASE(callback2);
              obj3[1] = c6;
              c5 = 3;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj3.httpGetWithCountryCodeQuery(obj3);
              return obj4;
            }
          } else if (2 === tmp7) {
            c4 = 0;
            closure_8 = c3;
            const billingError = new callback(4461).BillingError(closure_8);
            throw billingError;
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
            body = arg1;
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_11.createInvoiceFromServer(body.body);
            return obj;
          }
        } catch (tmp43) {
          c3 = tmp43;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp43;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_18 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function getSubscriptionInvoice() {
  const self = this;
  const apply = _getSubscriptionInvoice.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getSubscriptionInvoice() {
  const self = this;
  const tmp = callback3((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp5;
              c1 = tmp2;
              let callback;
              c1 = undefined;
              ({ subscriptionId: c0, preventFetch: c1 } = callback);
              body = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else if (c1) {
              c4 = 3;
              return { value: null, done: true };
            } else {
              const HTTP = callback(body[7]).HTTP;
              const obj2 = { url: null, oldFormErrors: true, rejectWithError: false };
              obj2[0] = closure_12.BILLING_SUBSCRIPTION_INVOICE(callback);
              c3 = 2;
              c4 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.get(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            body = arg1;
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = closure_11.createInvoiceFromServer(body.body);
            return obj;
          }
        } catch (tmp16) {
          c4 = tmp;
          throw tmp16;
        }
      }
    })();
    iter.next();
    return iter;
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
let closure_3 = ["subscriptionId"];
({ useCallback: error, useEffect: closure_8, useState: c9, useRef: c10 } = noop);
let result = require("set").fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export const useFetchGenericInvoicePreview = function useFetchGenericInvoicePreview(preventFetch) {
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = arg1;
  c2 = undefined;
  closure_3 = undefined;
  [tmp2, c2] = callback2(callback6(null), 2);
  const tmp3 = callback2(callback6(null), 2);
  closure_3 = tmp3[1];
  const items = [flag, arg1, arg2];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = closure_2_6(function*() {
        let callback = tmp3;
        let v0 = 1;
        v0(null);
        yield callback();
        if (1 === tmp7) {
          v0 = 0;
          callback = closure_2;
          if (!closure_0) {
            v0(tmp16);
            closure_1_2(null);
          }
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          if (!closure_0) {
            closure_1_2(closure_0);
          }
          v0 = 0;
        }
        v0 = 0;
        return arg1;
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    c0 = false;
    if (!c0) {
      (function loadPreview() {
        const self = this;
        const apply = _loadPreview.apply;
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
export const useFetchSubscriptionGiftInvoicePreview = function useFetchSubscriptionGiftInvoicePreview(preventFetch) {
  let flag = preventFetch;
  closure_1 = callback7(preventFetch);
  c2 = callback7(false);
  callback5(() => {
    closure_1.current = flag;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp3 = callback4(() => {
    const current = ref.current;
    let tmp2 = current;
    if (!_undefined.current) {
      const obj = {};
      const merged = Object.assign(current);
      obj.paymentSourceId = null;
      tmp2 = obj;
    }
    _undefined.current = true;
    return closure_1_17(tmp2);
  }, items);
  flag = undefined;
  closure_1 = undefined;
  flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = tmp3;
  c2 = undefined;
  closure_3 = undefined;
  [tmp5, c2] = callback2(callback6(null), 2);
  const tmp6 = callback2(callback6(null), 2);
  closure_3 = tmp6[1];
  const items1 = [flag, tmp3, arg1];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = closure_2_6(function*() {
        let callback = tmp3;
        let v0 = 1;
        v0(null);
        yield callback();
        if (1 === tmp7) {
          v0 = 0;
          callback = closure_2;
          if (!closure_0) {
            v0(tmp16);
            closure_1_2(null);
          }
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          if (!closure_0) {
            closure_1_2(closure_0);
          }
          v0 = 0;
        }
        v0 = 0;
        return arg1;
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    c0 = false;
    if (!c0) {
      (function loadPreview() {
        const self = this;
        const apply = _loadPreview.apply;
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
export const useFetchSubscriptionInvoicePreview = function useFetchSubscriptionInvoicePreview(subscriptionId) {
  let flag = subscriptionId;
  let tmp = subscriptionId;
  if ("subscriptionId" in subscriptionId) {
    tmp = subscriptionId;
    if (null == subscriptionId.subscriptionId) {
      subscriptionId = subscriptionId.subscriptionId;
      const tmp5 = callback(subscriptionId, closure_3);
      flag = tmp5;
      tmp = tmp5;
    }
  }
  closure_1 = callback7(tmp);
  c2 = callback7(false);
  flag = undefined;
  let tmp6 = callback7(null);
  flag = tmp6;
  const items = [arg1];
  callback5(() => {
    flag.current = null;
  }, items);
  const tmp9 = callback4((paymentSourceId) => {
    const current = flag.current;
    let tmp = null != current && null != paymentSourceId.paymentSourceId && paymentSourceId.paymentSourceId === current.serverSelectedPaymentSourceId;
    if (tmp) {
      tmp = arg1 === current.dedupeKey;
    }
    return tmp;
  }, []);
  const tmp10 = callback4((checkoutContext) => {
    let tmp2 = null;
    if (null == arg2) {
      const obj = { record: null, dedupeKey: null, serverSelectedPaymentSourceId: null };
      obj[0] = checkoutContext;
      obj[1] = arg1;
      checkoutContext = checkoutContext.checkoutContext;
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
      obj[2] = tmp6;
      tmp2 = obj;
    }
    flag.current = tmp2;
  }, []);
  closure_3 = tmp6;
  callback = tmp9;
  const callback2 = tmp10;
  callback5(() => {
    closure_1.current = flag;
  });
  const items1 = [JSON.stringify(tmp), tmp6, tmp9, tmp10];
  const tmp12 = callback4(() => {
    const current = json.current;
    let tmp2 = current;
    if (!_undefined.current) {
      let obj = {};
      const merged = Object.assign(current);
      obj.paymentSourceId = null;
      tmp2 = obj;
    }
    obj = tmp2;
    if ("subscriptionId" in tmp2) {
      tmp.current = true;
      return closure_1_15(tmp2);
    } else if ("items" in tmp2) {
      tmp.current = true;
      const _JSON = JSON;
      obj = {};
      const merged1 = Object.assign(tmp2);
      obj.paymentSourceId = "exclude_from_dedupe";
      json = JSON.stringify(obj);
      const current2 = ref.current;
      if (null != current2) {
        if (callback(tmp2, json)) {
          let resolved = Promise.resolve(current2.record);
        }
        return resolved;
      }
      resolved = closure_1_13(tmp2).then((arg0) => {
        closure_1_5(arg0, json, obj.paymentSourceId);
        return arg0;
      });
      const promise = closure_1_13(tmp2);
    } else {
      return null;
    }
  }, items1);
  flag = undefined;
  closure_1 = undefined;
  flag = tmp.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = tmp12;
  c2 = undefined;
  closure_3 = undefined;
  [tmp14, c2] = callback2(callback6(null), 2);
  const tmp15 = callback2(callback6(null), 2);
  closure_3 = tmp15[1];
  const items2 = [flag, tmp12, arg1];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = closure_2_6(function*() {
        let callback = tmp3;
        let v0 = 1;
        v0(null);
        yield callback();
        if (1 === tmp7) {
          v0 = 0;
          callback = closure_2;
          if (!closure_0) {
            v0(tmp16);
            closure_1_2(null);
          }
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          if (!closure_0) {
            closure_1_2(closure_0);
          }
          v0 = 0;
        }
        v0 = 0;
        return arg1;
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    c0 = false;
    if (!c0) {
      (function loadPreview() {
        const self = this;
        const apply = _loadPreview.apply;
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
export const useGetSubscriptionInvoice = function useGetSubscriptionInvoice(preventFetch) {
  let flag = preventFetch;
  closure_1 = callback7(preventFetch);
  callback5(() => {
    closure_1.current = flag;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp3 = callback4(() => closure_1_19(ref.current), items);
  flag = undefined;
  closure_1 = undefined;
  flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  closure_1 = tmp3;
  c2 = undefined;
  closure_3 = undefined;
  [tmp5, c2] = callback2(callback6(null), 2);
  const tmp6 = callback2(callback6(null), 2);
  closure_3 = tmp6[1];
  const items1 = [flag, tmp3, arg1];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = closure_2_6(function*() {
        let callback = tmp3;
        let v0 = 1;
        v0(null);
        yield callback();
        if (1 === tmp7) {
          v0 = 0;
          callback = closure_2;
          if (!closure_0) {
            v0(tmp16);
            closure_1_2(null);
          }
          c5 = 3;
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          if (!closure_0) {
            closure_1_2(closure_0);
          }
          v0 = 0;
        }
        v0 = 0;
        return arg1;
      });
      closure_1 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    c0 = false;
    if (!c0) {
      (function loadPreview() {
        const self = this;
        const apply = _loadPreview.apply;
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
  closure_0 = arg0;
  ({ subscriptionPlanPrice: importDefault, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / quantity.quantity;
  });
  return importDefault;
};