// discord_app/modules/checkout/native/NativeCheckoutStore.tsx
import _mod1243 from "../../../../_runtime/metro/01243__.js";
import _mod4379 from "../../../../_runtime/metro/04379__.js";
import OrderActionCreators from "../../payments/OrderActionCreators.tsx";
import ContextUtilsDefault from "../../../utils/ContextUtils.tsx";
import payments_OrderActionCreators from "../../payments/native/OrderActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import OrderRecord from "../../payments/records/OrderRecord.tsx";

require = fn;
const OrderStatus = fn(4738).OrderStatus;
[exports.NativeCheckoutStoreContext, closure_7] = ContextUtilsDefault();
let context = noop.createContext("unset_context");
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkout/native/NativeCheckoutStore.tsx");

export const NativeCheckoutStoreContextOrNull = context;
export const useNativeCheckoutStore = function useNativeCheckoutStore(arg0) {
  if (shallow === undefined) {
    shallow = _mod4379.shallow;
  }
  const tmp3 = closure_7();
  return _mod1243.useStoreWithEqualityFn(tmp3, arg0, shallow);
};
export const useNativeCheckoutStoreOrNull = function useNativeCheckoutStoreOrNull(arg0) {
  if (shallow === undefined) {
    shallow = _mod4379.shallow;
  }
  context = noop.useContext(context);
  let storeWithEqualityFn = null;
  if ("unset_context" !== context) {
    storeWithEqualityFn = _mod1243.useStoreWithEqualityFn(context, arg0, shallow);
  }
  return storeWithEqualityFn;
};
export const createNativeStore = function createNativeStore(arg0) {
  ({
    order: require,
    checkoutInitParameters: importDefault,
    contextMetadata: dependencyMap,
    analyticsFields: asyncGeneratorStep,
    paymentGateway: noop,
    orderRequired: OrderRecord,
    onOrderRetryCancellation: OrderStatus,
    initialSubscriptionFacet: closure_7,
  } = arg0);
  return _mod1243.createWithEqualityFn((arg0, arg1) => {
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
        await closure_2_0(runPatchOrderLineItems[8]).patchOrder({
          orderId: null,
          expectedRevision: null,
          orderLineItems,
          externalGatewayFacet,
        });
        closure_130_0 = value;
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
            const obj2 = { value, done: true };
            return obj2;
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
                const obj4 = { value, done: true };
                return obj4;
              } else {
                closure_2 = tmp2;
                closure_129_0 = undefined;
                const orderRecord = closure_2_1().orderRecord;
                if (null != orderRecord) {
                  const orderLineItems = orderRecord.orderLineItems;
                  const mapped = orderLineItems.map((sku_id) => ({
                    sku_id: sku_id.sku_id,
                    quantity: sku_id.quantity,
                    purchase_type: sku_id.purchase_type,
                    subscription_plan_id: sku_id.subscription_plan_id,
                  }));
                  let tmp15;
                  if (obj3.some(mapped, (subscription_plan_id) => null != subscription_plan_id.subscription_plan_id)) {
                    const obj6 = { subscription_preview: null };
                    ({ currency: obj5.currency, country: obj5.country_code } = country);
                    obj6.subscription_preview = { currency: null, country_code: null };
                    if (null != tmp5.activeSubscription) {
                      obj6.subscription_id = tmp5.activeSubscription.id;
                    }
                    let tmp19 = null != closure_1_7;
                    if (tmp19) {
                      tmp19 = null != closure_1_7.subscription_preview.subscription_trial_id;
                    }
                    tmp15 = obj6;
                    if (tmp19) {
                      obj6.subscription_preview.subscription_trial_id =
                        closure_1_7.subscription_preview.subscription_trial_id;
                      tmp15 = obj6;
                    }
                    const obj8 = { currency: null, country_code: null };
                  }
                  let tmp20;
                  if (null != orderRecord.externalGatewayFacet) {
                    const obj9 = { line_items: null };
                    const line_items = orderRecord.externalGatewayFacet.line_items;
                    obj9.line_items = line_items.map((external_product_id) => ({
                      external_product_id: external_product_id.external_product_id,
                    }));
                    tmp20 = obj9;
                  }
                  obj3 = closure_2_1(runPatchOrderLineItems[9]);
                  const obj10 = {
                    orderLineItems: mapped,
                    paymentGateway,
                    isGift: tmp5.isGift,
                    subscriptionFacet: tmp15,
                    externalGatewayFacet: tmp20,
                    countryCode: country.country,
                  };
                  c3 = 1;
                  paymentGateway = 1;
                  const obj11 = { value: closure_2_0(runPatchOrderLineItems[8]).createOrder(obj10), done: false };
                  return obj11;
                } else {
                  paymentGateway = 3;
                }
              }
            } else if (arg0 === 1) {
              paymentGateway = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_129_0 = value;
              const obj = { orderRecord: closure_2_5.createFromServer(closure_129_0) };
              closure_130_0(obj);
            }
            paymentGateway = 3;
            const obj19 = { value, done: true };
            return obj19;
          } catch (tmp24) {
            paymentGateway = tmp;
            throw tmp24;
          }
        }
      })();
    };
    function runRevertOrderToDraft() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    closure_7 = async function _runRevertOrderToDraft() {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp5;
              closure_3 = tmp2;
              closure_131_0 = undefined;
              closure_131_1 = undefined;
              const orderRecord = checkoutInitParameters().orderRecord;
              if (null != orderRecord) {
                const id = orderRecord.id;
                closure_131_0 = id;
                c6 = 1;
                c7 = 1;
                const obj5 = { value: OrderActionCreators.getOrder(id), done: false };
                return obj5;
              } else {
                c7 = 3;
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_131_1 = value;
              if (null == closure_131_1) {
                const _Error2 = Error;
                const _HermesInternal2 = HermesInternal;
                const error = new Error("Order " + closure_131_0 + " could not be read");
                throw error;
              } else if (closure_131_1.status !== constants.DRAFT) {
                if (closure_131_1.status !== constants.SIGNING_IN_PROGRESS) {
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error(
                    "Order " + closure_131_0 + " is no longer editable (status " + closure_131_1.status + ")",
                  );
                  throw error1;
                } else {
                  closure_4 = closure_130_0;
                  closure_5 = {};
                  closure_1 = orderRequired;
                  const createFromServer = orderRequired.createFromServer;
                  c6 = 2;
                  c7 = 1;
                  const obj8 = { value: payments_OrderActionCreators.cancelOrderSigning(closure_131_0), done: false };
                  return obj8;
                }
              } else {
                const obj9 = { orderRecord: orderRequired.createFromServer(closure_131_1) };
                closure_130_0(obj9);
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_5.orderRecord = createFromServer(value);
            closure_4(closure_5);
          }
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        } catch (tmp45) {
          c7 = tmp;
          throw tmp45;
        }
      }
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
      setOrderRevision(arg0, arg1) {
        const orderRecord = closure_1().orderRecord;
        let tmp = null == orderRecord;
        if (!tmp) {
          tmp = orderRecord.id !== arg0;
        }
        if (!tmp) {
          tmp = arg1 <= orderRecord.revision;
        }
        if (!tmp) {
          const obj = { orderRecord: orderRecord.set("revision", arg1) };
          closure_0(obj);
        }
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
      revertOrderToDraft: null,
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
      onOrderRetryCancellation: null,
    };
    closure_10 = analyticsFields(function* (arg0, arg1) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp4;
              closure_2 = tmp8;
              closure_130_0 = closure_0;
              closure_130_1 = closure_1;
              c5 = 2;
              closure_0({ isPatchOrderLoading: true });
              c6 = 3;
              c7 = 1;
              const obj4 = { value: runPatchOrderLineItems(closure_0, closure_1), done: false };
              return obj4;
            }
          } else if (1 === tmp8) {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            throw closure_4;
          } else if (2 === tmp8) {
            c5 = 1;
            closure_130_2 = closure_4;
            const obj6 = { tags: { source: "NativeCheckoutStore_patchOrderLineItems" }, extra: null };
            const orderRecord = closure_131_1().orderRecord;
            let id;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            const obj7 = { orderId: id };
            obj6.extra = obj7;
            const result = closure_0(runPatchOrderLineItems[11]).captureBillingException(closure_130_2, obj6);
            const obj5 = closure_0(runPatchOrderLineItems[11]);
            c6 = 4;
            c7 = 1;
            const obj9 = {
              value: closure_0(runPatchOrderLineItems[12]).showCheckoutOrderErrorModal(() =>
                closure_2(closure_1_0, closure_1_1),
              ),
              done: false,
            };
            return obj9;
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_0({ isPatchOrderLoading: false });
              c7 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c5 = 0;
              closure_131_0({ isPatchOrderLoading: false });
              c7 = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            c7 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            c7 = 3;
            const obj = { value, done: true };
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
    obj.patchOrderLineItems = function () {
      const self = this;
      const apply = closure_10.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_9 = analyticsFields(function* (arg0) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp4;
              closure_1 = tmp8;
              closure_129_0 = closure_0;
              c4 = 2;
              closure_0({ isCreateOrderLoading: true });
              c5 = 3;
              c6 = 1;
              const obj5 = { value: runRecreateOrder(closure_0), done: false };
              return obj5;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            closure_130_0({ isCreateOrderLoading: false });
            throw closure_3;
          } else if (2 === tmp8) {
            c4 = 1;
            closure_129_1 = closure_3;
            const obj7 = { tags: { source: "NativeCheckoutStore_recreateOrder" }, extra: null };
            const orderRecord = closure_130_1().orderRecord;
            let id;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            const obj8 = { orderId: id };
            obj7.extra = obj8;
            const result = closure_0(runPatchOrderLineItems[11]).captureBillingException(closure_129_1, obj7);
            const obj3 = closure_0(runPatchOrderLineItems[11]);
            c5 = 4;
            c6 = 1;
            const obj9 = {
              value: closure_0(runPatchOrderLineItems[12]).showCheckoutOrderErrorModal(() => c4(closure_1_0), c6),
              done: false,
            };
            return obj9;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_130_0({ isCreateOrderLoading: false });
                c6 = 3;
                const obj10 = { value, done: true };
                return obj10;
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
              const obj = { value, done: true };
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
    obj.recreateOrder = function () {
      const self = this;
      const apply = closure_9.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_8 = analyticsFields(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp4;
              closure_0 = tmp8;
              c3 = 2;
              closure_0({ isCreateOrderLoading: true });
              c4 = 3;
              c5 = 1;
              const obj5 = { value: runRevertOrderToDraft(), done: false };
              return obj5;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_0({ isCreateOrderLoading: false });
            throw closure_2;
          } else if (2 === tmp8) {
            c3 = 1;
            closure_128_0 = closure_2;
            const obj7 = { tags: { source: "NativeCheckoutStore_revertOrderToDraft" }, extra: null };
            const orderRecord = closure_129_1().orderRecord;
            let id;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            const obj8 = { orderId: id };
            obj7.extra = obj8;
            const result = closure_0(runPatchOrderLineItems[11]).captureBillingException(closure_128_0, obj7);
            const obj3 = closure_0(runPatchOrderLineItems[11]);
            c4 = 4;
            c5 = 1;
            const obj9 = {
              value: closure_0(runPatchOrderLineItems[12]).showCheckoutOrderErrorModal(
                () => closure_1_6(),
                closure_1_6,
              ),
              done: false,
            };
            return obj9;
          } else {
            if (3 === tmp8) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_0({ isCreateOrderLoading: false });
                c5 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else {
                c3 = 1;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_0({ isCreateOrderLoading: false });
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            }
            c3 = 0;
            closure_129_0({ isCreateOrderLoading: false });
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp41) {
          closure_2 = tmp41;
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp41;
          } else if (tmp2 === tmp43) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    obj.revertOrderToDraft = function () {
      const self = this;
      const apply = closure_8.apply;
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
    obj.onOrderRetryCancellation = runRevertOrderToDraft;
    return obj;
  }, _mod4379.shallow);
};
