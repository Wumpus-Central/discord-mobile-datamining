import _objectWithoutProperties from "_objectWithoutProperties";
import _slicedToArray from "_slicedToArray";
import ME from "ME";
import noop from "noop";
import createFromServer from "createFromServer";
import { Endpoints } from "ME";

let c10;
let c9;
let error;
let metroImportAll;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let applyEntitlements;
      let c0;
      let c1;
      let c2;
      let c3;
      let c5;
      let c6;
      let c7;
      let c8;
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
              let dependencyMap = tmp3;
              let callback2 = tmp7;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              let c4;
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
              let createFromServer;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              obj2 = { items: null, payment_source_id: null, trial_id: null, code: null, apply_entitlements: null, currency: null, renewal: null, metadata: null, load_id: null };
              const result = callback(3931).coerceExistingItemsToNewItemInterval(callback);
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
              const HTTP = callback(530).HTTP;
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
            const billingError = new callback(4184).BillingError(constants);
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
            createFromServer = createFromServer.createInvoiceFromServer(body.body);
            const checkoutContext = createFromServer.checkoutContext;
            let payment_sources;
            if (checkoutContext != null) {
              payment_sources = checkoutContext.payment_sources;
            }
            if (null != payment_sources) {
              obj = callback2(709);
              const obj6 = { type: "SUBSCRIPTION_PREVIEW_CHECKOUT_CONTEXT_UPDATE", checkoutContext: null, paymentSourceId: null };
              obj6[1] = createFromServer.checkoutContext;
              obj6[2] = callback2;
              obj.dispatch(obj6);
            }
            c4 = 0;
            c6 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = createFromServer;
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
  const _createSubscriptionInvoicePreview = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
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
              let dependencyMap = tmp3;
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
              let createFromServer;
              let closure_12;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (null != callback2) {
                let obj4 = callback(3931);
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
              const HTTP = callback(530).HTTP;
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
            let closure_13 = c3;
            const billingError = new callback(4184).BillingError(closure_13);
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
            createFromServer = arg1;
            closure_12 = createFromServer.createInvoiceFromServer(createFromServer.body);
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
              obj = callback2(709);
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
  const _updateSubscriptionInvoicePreview = tmp;
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
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let c5;
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
              let dependencyMap = tmp3;
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
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
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
              let obj3 = callback(4522);
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
            let closure_8 = c3;
            const billingError = new callback(4184).BillingError(closure_8);
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
            obj[0] = createFromServer.createInvoiceFromServer(body.body);
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
  const _createOneTimePurchaseInvoicePreview = tmp;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
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
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj1 = { value: null, done: true };
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
            obj[0] = createFromServer.createInvoiceFromServer(body.body);
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
  const _getSubscriptionInvoice = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_3 = ["subscriptionId"];
({ useCallback: error, useEffect: metroImportAll, useState: c9, useRef: c10 } = noop);
let result = require("asyncGeneratorStep").fileFinishedImporting("modules/premium/PremiumSubscriptionInvoice.tsx");

export { createSubscriptionInvoicePreview };
export { updateSubscriptionInvoicePreview };
export { createOneTimePurchaseInvoicePreview };
export { getSubscriptionInvoice };
export const useFetchGenericInvoicePreview = function useFetchGenericInvoicePreview(preventFetch) {
  let c2;
  let tmp2;
  let flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  let closure_1 = arg1;
  c2 = undefined;
  let closure_3;
  [tmp2, c2] = callback2(callback6(null), 2);
  const tmp3 = callback2(callback6(null), 2);
  closure_3 = tmp3[1];
  const items = [flag, arg1, arg2];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = outer2_6(function*() {
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
            return { value: "HermesInternal", done: null };
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
                let closure_1 = tmp3;
                let closure_0 = tmp7;
                closure_0 = undefined;
                let v0 = 1;
                v0(null);
                c4 = 2;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_1();
                return obj1;
              }
            } else {
              if (1 === tmp7) {
                v0 = 0;
                outer1_1 = closure_2;
                if (!closure_0) {
                  v0(tmp16);
                  outer1_2(null);
                }
                c5 = 3;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_0 = arg1;
                if (!closure_0) {
                  outer1_2(closure_0);
                }
                v0 = 0;
              }
              v0 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp26) {
            closure_2 = tmp26;
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp26;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const _loadPreview = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let c0 = false;
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
      let c0 = true;
    };
  }, items);
  const items1 = [tmp2, tmp3[0]];
  return items1;
};
export const useFetchSubscriptionGiftInvoicePreview = function useFetchSubscriptionGiftInvoicePreview(preventFetch) {
  let c2;
  let tmp5;
  let flag = preventFetch;
  let c1 = callback7(preventFetch);
  c2 = callback7(false);
  callback5(() => {
    c1.current = flag;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp3 = callback4(() => {
    const current = _undefined.current;
    let tmp2 = current;
    if (!_undefined2.current) {
      const obj = {};
      const merged = Object.assign(current);
      obj.paymentSourceId = null;
      tmp2 = obj;
    }
    _undefined2.current = true;
    return outer1_17(tmp2);
  }, items);
  flag = undefined;
  c1 = undefined;
  flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  c1 = tmp3;
  c2 = undefined;
  let closure_3;
  [tmp5, c2] = callback2(callback6(null), 2);
  const tmp6 = callback2(callback6(null), 2);
  closure_3 = tmp6[1];
  const items1 = [flag, tmp3, arg1];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = outer2_6(function*() {
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
            return { value: "HermesInternal", done: null };
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
                let closure_1 = tmp3;
                let closure_0 = tmp7;
                closure_0 = undefined;
                let v0 = 1;
                v0(null);
                c4 = 2;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_1();
                return obj1;
              }
            } else {
              if (1 === tmp7) {
                v0 = 0;
                outer1_1 = closure_2;
                if (!closure_0) {
                  v0(tmp16);
                  outer1_2(null);
                }
                c5 = 3;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_0 = arg1;
                if (!closure_0) {
                  outer1_2(closure_0);
                }
                v0 = 0;
              }
              v0 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp26) {
            closure_2 = tmp26;
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp26;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const _loadPreview = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let c0 = false;
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
      let c0 = true;
    };
  }, items1);
  const items2 = [tmp5, tmp6[0]];
  return items2;
};
export const useFetchSubscriptionInvoicePreview = function useFetchSubscriptionInvoicePreview(subscriptionId) {
  let c2;
  let tmp14;
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
  let c1 = callback7(tmp);
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
    c1.current = flag;
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
    if ("subscriptionId" in tmp2) {
      tmp.current = true;
      return outer1_15(tmp2);
    } else if ("items" in tmp2) {
      tmp.current = true;
      const _JSON = JSON;
      obj = {};
      const merged1 = Object.assign(tmp2);
      obj.paymentSourceId = "exclude_from_dedupe";
      json = JSON.stringify(obj);
      const current2 = ref.current;
      if (null != current2) {
        if (tmp9(tmp2, json)) {
          let resolved = Promise.resolve(current2.record);
        }
        return resolved;
      }
      resolved = outer1_13(tmp2).then((arg0) => {
        outer1_5(arg0, json, tmp2.paymentSourceId);
        return arg0;
      });
      const promise = outer1_13(tmp2);
    } else {
      return null;
    }
  }, items1);
  flag = undefined;
  c1 = undefined;
  flag = tmp.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  c1 = tmp12;
  c2 = undefined;
  closure_3 = undefined;
  [tmp14, c2] = callback2(callback6(null), 2);
  const tmp15 = callback2(callback6(null), 2);
  closure_3 = tmp15[1];
  const items2 = [flag, tmp12, arg1];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = outer2_6(function*() {
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
            return { value: "HermesInternal", done: null };
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
                let closure_1 = tmp3;
                let closure_0 = tmp7;
                closure_0 = undefined;
                let v0 = 1;
                v0(null);
                c4 = 2;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_1();
                return obj1;
              }
            } else {
              if (1 === tmp7) {
                v0 = 0;
                outer1_1 = closure_2;
                if (!closure_0) {
                  v0(tmp16);
                  outer1_2(null);
                }
                c5 = 3;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_0 = arg1;
                if (!closure_0) {
                  outer1_2(closure_0);
                }
                v0 = 0;
              }
              v0 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp26) {
            closure_2 = tmp26;
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp26;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const _loadPreview = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let c0 = false;
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
      let c0 = true;
    };
  }, items2);
  const items3 = [tmp14, tmp15[0]];
  return items3;
};
export const useGetSubscriptionInvoice = function useGetSubscriptionInvoice(preventFetch) {
  let c2;
  let tmp5;
  let flag = preventFetch;
  let c1 = callback7(preventFetch);
  callback5(() => {
    c1.current = flag;
  });
  const items = [JSON.stringify(preventFetch)];
  const tmp3 = callback4(() => outer1_19(_undefined.current), items);
  flag = undefined;
  c1 = undefined;
  flag = preventFetch.preventFetch;
  if (flag === undefined) {
    flag = false;
  }
  c1 = tmp3;
  c2 = undefined;
  let closure_3;
  [tmp5, c2] = callback2(callback6(null), 2);
  const tmp6 = callback2(callback6(null), 2);
  closure_3 = tmp6[1];
  const items1 = [flag, tmp3, arg1];
  callback5(() => {
    function _loadPreview() {
      const self = this;
      const tmp = outer2_6(function*() {
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
            return { value: "HermesInternal", done: null };
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
                let closure_1 = tmp3;
                let closure_0 = tmp7;
                closure_0 = undefined;
                let v0 = 1;
                v0(null);
                c4 = 2;
                c5 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_1();
                return obj1;
              }
            } else {
              if (1 === tmp7) {
                v0 = 0;
                outer1_1 = closure_2;
                if (!closure_0) {
                  v0(tmp16);
                  outer1_2(null);
                }
                c5 = 3;
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                closure_0 = arg1;
                if (!closure_0) {
                  outer1_2(closure_0);
                }
                v0 = 0;
              }
              v0 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          } catch (tmp26) {
            closure_2 = tmp26;
            if (tmp4 === v0) {
              c5 = tmp2;
              throw tmp26;
            } else {
              c4 = tmp;
            }
          }
        }
      });
      const _loadPreview = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let c0 = false;
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
      let c0 = true;
    };
  }, items1);
  const items2 = [tmp5, tmp6[0]];
  return items2;
};
export const getItemUnitPriceWithDiscount = function getItemUnitPriceWithDiscount(arg0) {
  let discounts;
  let importDefault;
  let closure_0 = arg0;
  ({ subscriptionPlanPrice: importDefault, discounts } = arg0);
  const item = discounts.forEach((amount) => {
    closure_1 = closure_1 - amount.amount / quantity.quantity;
  });
  return importDefault;
};