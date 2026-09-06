// === Module 7424: NativeCheckoutStore ===

// Module 7424 (NativeCheckoutStore)
import _mod1244 from "module_1244" /* 1244 */;
import _mod4184 from "module_4184" /* 4184 */;
import ContextUtilsDefault from "ContextUtils" /* 7428 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import OrderRecord from "OrderRecord" /* 7425 */;

require = fn;
const importDefaultResultResult = _slicedToArray(ContextUtilsDefault(), 2);
let closure_6 = importDefaultResultResult[1];
let context = noop.createContext("unset_context");
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/NativeCheckoutStore.tsx");

export const NativeCheckoutStoreContextOrNull = context;
export const useNativeCheckoutStore = function useNativeCheckoutStore(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = _mod4184.shallow;
  }
  return closure_6()(arg0, shallow);
};
export const useNativeCheckoutStoreOrNull = function useNativeCheckoutStoreOrNull(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = _mod4184.shallow;
  }
  context = noop.useContext(context);
  let contextResult = null;
  if ("unset_context" !== context) {
    contextResult = context(arg0, shallow);
  }
  return contextResult;
};
export const createNativeStore = function createNativeStore(arg0) {
  ({ order: require, checkoutInitParameters: importDefault, contextMetadata: dependencyMap, analyticsFields: asyncGeneratorStep, paymentGateway: noop, orderRequired: OrderRecord, onOrderRetryCancellation: closure_6, initialSubscriptionFacet: context } = arg0);
  return _mod1244.createWithEqualityFn((arg0, arg1) => {
    closure_0 = arg0;
    checkoutInitParameters = arg1;
    function runPatchOrderLineItems() {
      const self = this;
      const apply = closure_3.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    analyticsFields = async function _runPatchOrderLineItems() {
      c4 = 0;
      c5 = 0;
      return (async (arg0, value) => {
        closure_3 = tmp5;
        closure_2 = tmp2;
        const orderRecord = closure_2_1().orderRecord;
        if (null == orderRecord) {
          const _Error = Error;
          const error = new Error("Patch being called in a missing order state");
          throw error;
        }
        ({ id: obj5.orderId, revision: obj5.expectedRevision } = orderRecord);
        await closure_2_0(runPatchOrderLineItems[7]).patchOrder({ orderId: null, expectedRevision: null, orderLineItems, externalGatewayFacet });
        closure_130_0 = value;
        closure_2_0(runPatchOrderLineItems[7]);
        closure_131_0({ orderRecord: closure_2_5.createFromServer(closure_130_0) });
        return closure_130_0;
      })();
    };
    function runRecreateOrder() {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    orderRequired = async function _runRecreateOrder(arg0) {
      let country = arg0;
      c3 = 0;
      c4 = 0;
      return (async (arg0) => {
        if (paymentGateway === 2) {
          paymentGateway = 3;
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
            paymentGateway = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                paymentGateway = 3;
                throw value;
              } else if (arg0 === 2) {
                paymentGateway = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_2 = tmp2;
                closure_129_0 = undefined;
                const orderRecord = closure_2_1().orderRecord;
                if (null != orderRecord) {
                  const orderLineItems = orderRecord.orderLineItems;
                  const mapped = orderLineItems.map((sku_id) => ({ sku_id: sku_id.sku_id, quantity: sku_id.quantity, purchase_type: sku_id.purchase_type, subscription_plan_id: sku_id.subscription_plan_id }));
                  let obj2 = closure_2_1(runPatchOrderLineItems[8]);
                  let tmp15;
                  if (obj2.some(mapped, (subscription_plan_id) => null != subscription_plan_id.subscription_plan_id)) {
                    const obj1 = { subscription_preview: null };
                    obj2 = { currency: null, country_code: null };
                    ({ currency: obj5.currency, country: obj5.country_code } = country);
                    obj1.subscription_preview = obj2;
                    if (null != tmp5.activeSubscription) {
                      obj1.subscription_id = tmp5.activeSubscription.id;
                    }
                    let tmp19 = null != closure_1_7;
                    if (tmp19) {
                      tmp19 = null != closure_1_7.subscription_preview.subscription_trial_id;
                    }
                    tmp15 = obj1;
                    if (tmp19) {
                      obj1.subscription_preview.subscription_trial_id = closure_1_7.subscription_preview.subscription_trial_id;
                      tmp15 = obj1;
                    }
                  }
                  let tmp20;
                  if (null != orderRecord.externalGatewayFacet) {
                    const obj3 = { line_items: null };
                    const line_items = orderRecord.externalGatewayFacet.line_items;
                    obj3.line_items = line_items.map((external_product_id) => ({ external_product_id: external_product_id.external_product_id }));
                    tmp20 = obj3;
                  }
                  let obj6 = closure_2_0(runPatchOrderLineItems[7]);
                  const obj4 = { orderLineItems: mapped, paymentGateway, isGift: tmp5.isGift, subscriptionFacet: tmp15, externalGatewayFacet: tmp20, countryCode: country.country };
                  c3 = 1;
                  paymentGateway = 1;
                  const obj5 = { value: obj6.createOrder(obj4), done: false };
                  return obj5;
                } else {
                  paymentGateway = 3;
                }
              }
            } else if (arg0 === 1) {
              paymentGateway = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_0 = value;
              obj = { orderRecord: closure_2_5.createFromServer(closure_129_0) };
              closure_130_0(obj);
            }
            paymentGateway = 3;
            obj6 = { value, done: true };
            return obj6;
          } catch (tmp24) {
            paymentGateway = tmp;
            throw tmp24;
          }
        }
      })();
    };
    let fromServer = null;
    if (null != closure_0) {
      fromServer = orderRequired.createFromServer(tmp);
    }
    let obj = {
      orderRecord: fromServer,
      setOrder(order) {
        return closure_0({ orderRecord: OrderRecord.createFromServer(order) });
      },
      getCheckoutContextRecord() {
        const orderRecord = closure_1().orderRecord;
        let prop = null;
        if (null != orderRecord) {
          prop = orderRecord.checkoutContextRecord;
        }
        return prop;
      },
      isPatchOrderLoading: false,
      patchOrderLineItems: null,
      isCreateOrderLoading: false,
      recreateOrder: null,
      checkoutInitParameters: null,
      contextMetadata: null,
      analyticsFields: null,
      purchaseInFlight: false,
      getPurchaseInFlight: null,
      setPurchaseInFlight: null,
      orderRequired: null,
      checkoutSucceeded: false,
      setCheckoutSucceeded: null,
      checkoutFailed: false,
      setCheckoutFailed: null,
      onOrderRetryCancellation: null
    };
    closure_7 = analyticsFields(function*(arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
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
              closure_3 = tmp4;
              closure_2 = tmp8;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              c5 = 2;
              closure_0({ isPatchOrderLoading: true });
              c6 = 3;
              c7 = 1;
              const obj1 = { value: runPatchOrderLineItems(closure_0, closure_1), done: false };
              return obj1;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            throw closure_4;
          } else if (2 === tmp8) {
            c5 = 1;
            closure_130_2 = closure_4;
            let obj4 = closure_0(runPatchOrderLineItems[9]);
            const obj2 = { tags: { source: "NativeCheckoutStore_patchOrderLineItems" }, extra: null };
            const orderRecord = closure_131_1().orderRecord;
            let id;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            const obj3 = { orderId: id };
            obj2.extra = obj3;
            const result = obj4.captureBillingException(closure_130_2, obj2);
            let obj7 = closure_0(runPatchOrderLineItems[10]);
            c6 = 4;
            c7 = 1;
            obj4 = { value: obj7.showCheckoutOrderErrorModal(() => closure_2(closure_1_0, closure_1_1)), done: false };
            return obj4;
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_0({ isPatchOrderLoading: false });
              c7 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c5 = 0;
              closure_131_0({ isPatchOrderLoading: false });
              c7 = 3;
              const obj6 = { value, done: true };
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            c7 = 3;
            obj7 = { value, done: true };
            return obj7;
          } else {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp45) {
          closure_4 = tmp45;
          if (tmp5 === c5) {
            c7 = tmp3;
            throw tmp45;
          } else if (tmp2 === tmp47) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    });
    obj.patchOrderLineItems = function() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    onOrderRetryCancellation = analyticsFields(function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
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
              closure_2 = tmp4;
              closure_1 = tmp8;
              closure_129_0 = closure_0;
              c4 = 2;
              closure_0({ isCreateOrderLoading: true });
              c5 = 3;
              c6 = 1;
              const obj1 = { value: runRecreateOrder(closure_0), done: false };
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_130_0({ isCreateOrderLoading: false });
            throw closure_3;
          } else if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            let obj2 = closure_0(runPatchOrderLineItems[9]);
            obj2 = { tags: { source: "NativeCheckoutStore_recreateOrder" }, extra: null };
            const orderRecord = closure_130_1().orderRecord;
            let id;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            const obj3 = { orderId: id };
            obj2.extra = obj3;
            const result = obj2.captureBillingException(closure_129_1, obj2);
            let obj5 = closure_0(runPatchOrderLineItems[10]);
            c5 = 4;
            c6 = 1;
            const obj4 = { value: obj5.showCheckoutOrderErrorModal(() => c4(closure_1_0), c6), done: false };
            return obj4;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_130_0({ isCreateOrderLoading: false });
                c6 = 3;
                obj5 = { value, done: true };
                return obj5;
              } else {
                c4 = 1;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_130_0({ isCreateOrderLoading: false });
              c6 = 3;
              obj = { value, done: true };
              return obj;
            }
            c4 = 0;
            closure_130_0({ isCreateOrderLoading: false });
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp42) {
          closure_3 = tmp42;
          if (tmp5 === c4) {
            c6 = tmp3;
            throw tmp42;
          } else if (tmp2 === tmp44) {
            c5 = tmp2;
          } else {
            c5 = tmp;
          }
        }
      }
    });
    obj.recreateOrder = function() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.checkoutInitParameters = checkoutInitParameters;
    obj.contextMetadata = runPatchOrderLineItems;
    obj.analyticsFields = analyticsFields;
    obj.getPurchaseInFlight = function getPurchaseInFlight() {
      return closure_1().purchaseInFlight;
    };
    obj.setPurchaseInFlight = function setPurchaseInFlight(purchaseInFlight) {
      return closure_0({ purchaseInFlight });
    };
    obj.orderRequired = orderRequired;
    obj.setCheckoutSucceeded = function setCheckoutSucceeded() {
      return closure_0({ checkoutSucceeded: true });
    };
    obj.setCheckoutFailed = function setCheckoutFailed() {
      return closure_0({ checkoutFailed: true });
    };
    obj.onOrderRetryCancellation = onOrderRetryCancellation;
    return obj;
  }, _mod4184.shallow);
};
export const NativeCheckoutStoreContext = importDefaultResultResult[0];