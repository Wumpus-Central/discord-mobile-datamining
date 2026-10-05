// === Module 6930: NativeCheckoutStore ===

// Module 6930 (NativeCheckoutStore)
import _mod1254 from "module_1254" /* 1254 */;
import _slicedToArray2 from "_slicedToArray" /* 4492 */;
import PaymentConstants from "PaymentConstants" /* 4869 */;
import ContextUtilsDefault from "ContextUtils" /* 6934 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import OrderRecord from "OrderRecord" /* 6931 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c6, c7, checkoutInitParameters, closure_1, country;

let closure_7;
let first;
const OrderStatus = PaymentConstants.OrderStatus;
[first, closure_7] = ContextUtilsDefault();
let context = react.createContext("unset_context");
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((cResult, shallow) => {
  if (undefined === shallow) {
    shallow = _slicedToArray2.shallow;
  }
  const tmp3 = closure_7();
  const obj = _mod1254;
  return obj.useStoreWithEqualityFn(tmp3, cResult, shallow);
}) : ((cResult) => {
  let shallow;
  if (shallow === undefined) {
    shallow = _slicedToArray2.shallow;
  }
  const tmp3 = closure_7();
  const obj = _mod1254;
  return obj.useStoreWithEqualityFn(tmp3, cResult, shallow);
});
let result = size.fileFinishedImporting("modules/checkout/native/NativeCheckoutStore.tsx");

export const NativeCheckoutStoreContextOrNull = context;
export const useNativeCheckoutStore = tmp6;
export const useNativeCheckoutStoreOrNull = function useNativeCheckoutStoreOrNull(cResult) {
  let shallow;
  if (shallow === undefined) {
    shallow = _slicedToArray2.shallow;
  }
  context = react.useContext(context);
  let storeWithEqualityFn = null;
  if ("unset_context" !== context) {
    const obj = _mod1254;
    storeWithEqualityFn = obj.useStoreWithEqualityFn(context, cResult, shallow);
  }
  return storeWithEqualityFn;
};
export const createNativeStore = function createNativeStore(arg0) {
  ({ order: require, checkoutInitParameters: importDefault, contextMetadata: dependencyMap, analyticsFields: _asyncToGenerator, paymentGateway: react, orderRequired: OrderRecord, onOrderRetryCancellation: OrderStatus, initialSubscriptionFacet: closure_7 } = arg0);
  let obj = _mod1254;
  return obj.createWithEqualityFn((arg0, arg1) => {
    let tmp;
    let closure_0 = arg0;
    checkoutInitParameters = arg1;
    function runPatchOrderLineItems() {
      return obj(...arguments);
    }
    let obj = function _runPatchOrderLineItems() {
      obj = _asyncToGenerator(async (value, externalGatewayFacet) => {
        let c4 = 0;
        let c5 = 0;
        return (async function(arg0, value) {
          let obj4;
          if (c5 === 2) {
            c5 = 3;
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
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  return { value, done: true };
                } else {
                  closure_3 = tmp4;
                  closure_2 = tmp;
                  value = undefined;
                  const orderRecord = closure_2_1().orderRecord;
                  const tmp20 = value;
                  if (null == orderRecord) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error("Patch being called in a missing order state");
                    throw error;
                  } else {
                    const obj6 = { orderId: null, expectedRevision: null, orderLineItems: tmp20, externalGatewayFacet };
                    ({ id: obj5.orderId, revision: obj5.expectedRevision } = orderRecord);
                    c4 = 1;
                    c5 = 1;
                    const obj7 = { value: obj4.patchOrder(obj6), done: false };
                    obj4 = closure_2_0(runPatchOrderLineItems[9]);
                    return obj7;
                  }
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                return { value, done: true };
              } else {
                obj = { orderRecord: closure_2_5.createFromServer(value) };
                closure_131_0(obj);
                c5 = 3;
                return { value, done: true };
              }
            } catch (tmp16) {
              c5 = 3;
              throw tmp16;
            }
          }
        })();
      });
      return obj(...arguments);
    };
    function runRecreateOrder() {
      return obj(...arguments);
    }
    obj = function _runRecreateOrder() {
      obj = _asyncToGenerator(async (arg0) => {
        let line_items;
        let obj7;
        let obj8;
        let paymentGateway;
        country = arg0;
        if (paymentGateway === 2) {
          paymentGateway = 3;
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
                let closure_2 = tmp;
                country = undefined;
                const orderRecord = closure_2_1().orderRecord;
                if (null != orderRecord) {
                  const orderLineItems = orderRecord.orderLineItems;
                  const mapped = orderLineItems.map((sku_id) => ({ sku_id: sku_id.sku_id, quantity: sku_id.quantity, purchase_type: sku_id.purchase_type, subscription_plan_id: sku_id.subscription_plan_id }));
                  let tmp14;
                  const obj3 = closure_2_1(runPatchOrderLineItems[10]);
                  if (obj3.some(mapped, (subscription_plan_id) => null != subscription_plan_id.subscription_plan_id)) {
                    const obj6 = { subscription_preview: obj8 };
                    obj8 = { currency: null, country_code: null };
                    ({ currency: obj5.currency, country: obj5.country_code } = country);
                    if (null != tmp4.activeSubscription) {
                      obj6.subscription_id = tmp4.activeSubscription.id;
                    }
                    const tmp18 = null != closure_1_7 && null != closure_1_7.subscription_preview.subscription_trial_id;
                    tmp14 = obj6;
                    if (tmp18) {
                      obj6.subscription_preview.subscription_trial_id = closure_1_7.subscription_preview.subscription_trial_id;
                      tmp14 = obj6;
                    }
                  }
                  let tmp19;
                  if (null != orderRecord.externalGatewayFacet) {
                    const obj9 = { line_items: line_items.map((external_product_id) => ({ external_product_id: external_product_id.external_product_id })) };
                    line_items = orderRecord.externalGatewayFacet.line_items;
                    tmp19 = obj9;
                  }
                  const obj10 = { orderLineItems: mapped, paymentGateway, isGift: tmp4.isGift, subscriptionFacet: tmp14, externalGatewayFacet: tmp19, countryCode: country.country };
                  c3 = 1;
                  paymentGateway = 1;
                  const obj11 = { value: obj7.createOrder(obj10), done: false };
                  obj7 = closure_2_0(runPatchOrderLineItems[9]);
                  return obj11;
                }
              }
            } else if (arg0 === 1) {
              paymentGateway = 3;
              throw value;
            } else if (arg0 === 2) {
              paymentGateway = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              country = value;
              obj = { orderRecord: closure_2_5.createFromServer(country) };
              closure_130_0(obj);
            }
            paymentGateway = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp23) {
            paymentGateway = 3;
            throw tmp23;
          }
        }
      });
      return obj(...arguments);
    };
    function runRevertOrderToDraft() {
      return obj(...arguments);
    }
    obj = function _runRevertOrderToDraft() {
      obj = _asyncToGenerator(async function() {
        let obj3;
        let obj6;
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
          try {
            let id;
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
                let closure_2 = tmp4;
                let closure_3 = tmp;
                id = undefined;
                closure_1 = undefined;
                const orderRecord = closure_2_1().orderRecord;
                if (null != orderRecord) {
                  id = orderRecord.id;
                  c6 = 1;
                  c7 = 1;
                  const obj5 = { value: obj6.getOrder(id), done: false };
                  obj6 = closure_2_0(runPatchOrderLineItems[11]);
                  return obj5;
                }
              }
            } else {
              let closure_4;
              let closure_5;
              let createFromServer;
              if (1 === c6) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c7 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  closure_1 = value;
                  if (null == closure_1) {
                    const _Error2 = Error;
                    const _HermesInternal2 = HermesInternal;
                    const self3 = this;
                    const self4 = this;
                    const error = new Error("Order " + id + " could not be read");
                    throw error;
                  } else if (closure_1.status !== constants.DRAFT) {
                    if (closure_1.status !== constants.SIGNING_IN_PROGRESS) {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      const self = this;
                      const self2 = this;
                      const error1 = new Error("Order " + id + " is no longer editable (status " + closure_1.status + ")");
                      throw error1;
                    } else {
                      closure_4 = closure_130_0;
                      closure_5 = {};
                      closure_1 = closure_2_5;
                      createFromServer = closure_2_5.createFromServer;
                      c6 = 2;
                      c7 = 1;
                      const obj8 = { value: obj3.cancelOrderSigning(id), done: false };
                      obj3 = closure_2_0(runPatchOrderLineItems[9]);
                      return obj8;
                    }
                  } else {
                    const obj9 = { orderRecord: closure_2_5.createFromServer(closure_1) };
                    closure_130_0(obj9);
                  }
                }
              } else if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_5.orderRecord = createFromServer(value);
                closure_4(closure_5);
              }
            }
            c7 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp40) {
            c7 = 3;
            throw tmp40;
          }
        }
      });
      return obj(...arguments);
    };
    let fromServer = null;
    if (null != closure_0) {
      fromServer = OrderRecord.createFromServer(tmp);
    }
    obj = {
      orderRecord: fromServer,
      setOrder(order) {
        obj = { orderRecord: OrderRecord.createFromServer(order) };
        return closure_0(obj);
      },
      setOrderRevision(arg0, arg1) {
        const orderRecord = closure_1().orderRecord;
        const tmp = null == orderRecord || orderRecord.id !== arg0 || arg1 <= orderRecord.revision;
        if (!tmp) {
          obj = { orderRecord: orderRecord.set("revision", arg1) };
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
      patchOrderLineItems: function() {
        return closure_10(...arguments);
      },
      isCreateOrderLoading: false,
      recreateOrder: function() {
        return closure_9(...arguments);
      },
      revertOrderToDraft: function() {
        return closure_8(...arguments);
      },
      checkoutInitParameters,
      contextMetadata: runPatchOrderLineItems,
      analyticsFields: obj,
      purchaseInFlight: false,
      getPurchaseInFlight() {
        return closure_1().purchaseInFlight;
      },
      setPurchaseInFlight(purchaseInFlight) {
        obj = { purchaseInFlight };
        return closure_0(obj);
      },
      orderRequired: obj,
      checkoutSucceeded: false,
      setCheckoutSucceeded() {
        return closure_0({ checkoutSucceeded: true });
      },
      checkoutFailed: false,
      setCheckoutFailed() {
        return closure_0({ checkoutFailed: true });
      },
      onOrderRetryCancellation: runRevertOrderToDraft
    };
    let closure_10 = _asyncToGenerator(async (arg0, arg1) => {
      let obj6;
      let obj7;
      closure_0 = arg0;
      closure_1 = arg1;
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
          let closure_2;
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
              let closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 2;
              closure_0({ isPatchOrderLoading: true });
              c6 = 3;
              c7 = 1;
              const obj4 = { value: runPatchOrderLineItems(closure_0, closure_1), done: false };
              return obj4;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            throw closure_4;
          } else if (2 === c6) {
            c5 = 1;
            closure_2 = closure_4;
            const obj5 = { tags: { source: "NativeCheckoutStore_patchOrderLineItems" }, extra: obj6 };
            const captureBillingException = closure_0(runPatchOrderLineItems[12]).captureBillingException;
            const tmp23 = closure_0(runPatchOrderLineItems[12]);
            const orderRecord = closure_131_1().orderRecord;
            let id;
            const tmp24 = closure_2;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            obj6 = { orderId: id };
            const result = captureBillingException(tmp24, obj5);
            c6 = 4;
            c7 = 1;
            const obj8 = { value: obj7.showCheckoutOrderErrorModal(() => closure_2(closure_1_0, closure_1_1)), done: false };
            obj7 = closure_0(runPatchOrderLineItems[13]);
            return obj8;
          } else if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_0({ isPatchOrderLoading: false });
              c7 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              c5 = 0;
              closure_131_0({ isPatchOrderLoading: false });
              c7 = 3;
              const obj10 = { value, done: true };
              return obj10;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            c7 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c5 = 0;
            closure_131_0({ isPatchOrderLoading: false });
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp42) {
          closure_4 = tmp42;
          if (0 === c5) {
            c7 = 3;
            throw tmp42;
          } else if (1 === tmp44) {
            c6 = 1;
          } else {
            c6 = 2;
          }
        }
      }
    });
    let closure_9 = _asyncToGenerator(async (arg0) => {
      let obj5;
      let obj7;
      closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
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
              let closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 2;
              closure_0({ isCreateOrderLoading: true });
              c5 = 3;
              c6 = 1;
              const obj4 = { value: runRecreateOrder(closure_0), done: false };
              return obj4;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_130_0({ isCreateOrderLoading: false });
            throw closure_3;
          } else if (2 === c5) {
            c4 = 1;
            closure_1 = closure_3;
            const obj6 = { tags: { source: "NativeCheckoutStore_recreateOrder" }, extra: obj7 };
            const captureBillingException = closure_0(runPatchOrderLineItems[12]).captureBillingException;
            const tmp20 = closure_0(runPatchOrderLineItems[12]);
            const orderRecord = closure_130_1().orderRecord;
            let id;
            const tmp21 = closure_1;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            obj7 = { orderId: id };
            const result = captureBillingException(tmp21, obj6);
            c5 = 4;
            c6 = 1;
            const obj8 = { value: obj5.showCheckoutOrderErrorModal(() => c4(closure_1_0), c6), done: false };
            obj5 = closure_0(runPatchOrderLineItems[13]);
            return obj8;
          } else {
            if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_130_0({ isCreateOrderLoading: false });
                c6 = 3;
                const obj9 = { value, done: true };
                return obj9;
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp39) {
          closure_3 = tmp39;
          if (0 === c4) {
            c6 = 3;
            throw tmp39;
          } else if (1 === tmp41) {
            c5 = 1;
          } else {
            c5 = 2;
          }
        }
      }
    });
    let closure_8 = _asyncToGenerator(async () => {
      let obj5;
      let obj7;
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
              closure_0 = tmp4;
              c3 = 2;
              closure_0({ isCreateOrderLoading: true });
              c4 = 3;
              c5 = 1;
              const obj4 = { value: runRevertOrderToDraft(), done: false };
              return obj4;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_0({ isCreateOrderLoading: false });
            throw closure_2;
          } else if (2 === c4) {
            c3 = 1;
            closure_0 = closure_2;
            const obj6 = { tags: { source: "NativeCheckoutStore_revertOrderToDraft" }, extra: obj7 };
            const captureBillingException = closure_0(runPatchOrderLineItems[12]).captureBillingException;
            const tmp20 = closure_0(runPatchOrderLineItems[12]);
            const orderRecord = closure_129_1().orderRecord;
            let id;
            const tmp21 = closure_0;
            if (orderRecord != null) {
              id = orderRecord.id;
            }
            obj7 = { orderId: id };
            const result = captureBillingException(tmp21, obj6);
            c4 = 4;
            c5 = 1;
            const obj8 = { value: obj5.showCheckoutOrderErrorModal(() => closure_1_6(), closure_1_6), done: false };
            obj5 = closure_0(runPatchOrderLineItems[13]);
            return obj8;
          } else {
            if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_0({ isCreateOrderLoading: false });
                c5 = 3;
                const obj9 = { value, done: true };
                return obj9;
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
              obj = { value, done: true };
              return obj;
            }
            c3 = 0;
            closure_129_0({ isCreateOrderLoading: false });
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp38) {
          closure_2 = tmp38;
          if (0 === c3) {
            c5 = 3;
            throw tmp38;
          } else if (1 === tmp40) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    });
    return obj;
  }, _slicedToArray2.shallow);
};
export const NativeCheckoutStoreContext = first;