// === Module 7103: context ===

// Module 7103 (context)
import identity from "identity" /* 700 */;
import isIterable from "isIterable" /* 4074 */;
import createDefinedContextDefault from "createDefinedContext" /* 7107 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import closure_5 from "createFromOrder" /* 7104 */;
import importDefaultResult from "_slicedToArray" /* 32 */;

require = arg1;
let c4 = importAllResult;
const importDefaultResultResult = importDefaultResult(createDefinedContextDefault(), 2);
let closure_6 = importDefaultResultResult[1];
let context = importAllResult.createContext("unset_context");
let result = require("set").fileFinishedImporting("modules/checkout/native/NativeCheckoutStore.tsx");

export const NativeCheckoutStoreContextOrNull = context;
export const useNativeCheckoutStore = function useNativeCheckoutStore(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = isIterable.shallow;
  }
  return callback()(arg0, shallow);
};
export const useNativeCheckoutStoreOrNull = function useNativeCheckoutStoreOrNull(arg0) {
  let shallow = arg1;
  if (arg1 === undefined) {
    shallow = isIterable.shallow;
  }
  context = importAllResult.useContext(context);
  let contextResult = null;
  if ("unset_context" !== context) {
    contextResult = context(arg0, shallow);
  }
  return contextResult;
};
export const createNativeStore = function createNativeStore(arg0) {
  ({ order: require, checkoutInitParameters: importDefault, contextMetadata: dependencyMap, paymentGateway: closure_3, orderRequired: closure_4, onOrderRetryCancellation: closure_5, initialSubscriptionFacet: closure_6 } = arg0);
  return identity.createWithEqualityFn((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    function runPatchOrderLineItems() {
      const self = this;
      const apply = _runPatchOrderLineItems.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _runPatchOrderLineItems() {
      const self = this;
      const tmp = closure_2_3((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        c4 = 0;
        c5 = 0;
        return (function*(arg0, arg1) {
          if (c5 === 2) {
            c5 = 3;
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
                  closure_3 = tmp5;
                  closure_2 = tmp2;
                  let callback;
                  const orderRecord = callback2().orderRecord;
                  if (null == orderRecord) {
                    const _Error = Error;
                    error = new Error("Patch being called in a missing order state");
                    throw error;
                  } else {
                    let obj3 = closure_2_0(closure_2_2[7]);
                    obj1 = { orderId: null, expectedRevision: null, orderLineItems: null, externalGatewayFacet: null };
                    ({ id: obj5[0], revision: obj5[1] } = orderRecord);
                    obj1[2] = tmp25;
                    obj1[3] = tmp26;
                    c4 = 1;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = obj3.patchOrder(obj1);
                    return obj2;
                  }
                  tmp25 = callback;
                  tmp26 = callback2;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                callback = arg1;
                obj = { orderRecord: null };
                obj[0] = closure_2_5.createFromServer(callback);
                callback(obj);
                c5 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = callback;
                return obj4;
              }
            } catch (tmp19) {
              c5 = tmp;
              throw tmp19;
            }
          }
        })();
      });
      closure_3 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function runRecreateOrder() {
      const self = this;
      const apply = _runRecreateOrder.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    function _runRecreateOrder() {
      const self = this;
      const tmp = closure_2_3((arg0) => {
        closure_0 = arg0;
        c3 = 0;
        c4 = 0;
        return (function*(arg0) {
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
                  closure_2 = tmp2;
                  closure_1 = tmp5;
                  let callback;
                  const orderRecord = closure_1_1().orderRecord;
                  if (null != orderRecord) {
                    const orderLineItems = orderRecord.orderLineItems;
                    const mapped = orderLineItems.map(() => { ... });
                    let obj2 = closure_2_1(closure_2_2[8]);
                    let tmp15;
                    if (obj2.some(mapped, () => { ... })) {
                      obj1 = { subscription_preview: null };
                      obj2 = { currency: null, country_code: null };
                      ({ currency: obj5[0], country: obj5[1] } = tmp30);
                      obj1[0] = obj2;
                      if (null != closure_1_1.activeSubscription) {
                        obj1.subscription_id = closure_1_1.activeSubscription.id;
                      }
                      let tmp19 = null != closure_1_6;
                      if (tmp19) {
                        tmp19 = null != tmp18.subscription_preview.subscription_trial_id;
                      }
                      tmp15 = obj1;
                      if (tmp19) {
                        obj1.subscription_preview.subscription_trial_id = tmp18.subscription_preview.subscription_trial_id;
                        tmp15 = obj1;
                      }
                    }
                    let tmp20;
                    if (null != orderRecord.externalGatewayFacet) {
                      const obj3 = { line_items: null };
                      const line_items = orderRecord.externalGatewayFacet.line_items;
                      obj3[0] = line_items.map(() => { ... });
                      tmp20 = obj3;
                    }
                    let obj6 = closure_2_0(closure_2_2[7]);
                    const obj4 = { orderLineItems: null, paymentGateway: null, isGift: null, subscriptionFacet: null, externalGatewayFacet: null, countryCode: null };
                    obj4[0] = mapped;
                    obj4[1] = c3;
                    obj4[2] = closure_1_1.isGift;
                    obj4[3] = tmp15;
                    obj4[4] = tmp20;
                    obj4[5] = tmp30.country;
                    c3 = 1;
                    c4 = 1;
                    const obj5 = { value: null, done: false };
                    obj5[0] = obj6.createOrder(obj4);
                    return obj5;
                  } else {
                    c4 = 3;
                  }
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                callback = arg1;
                obj = { orderRecord: null };
                obj[0] = closure_5.createFromServer(callback);
                callback(obj);
              }
              c4 = 3;
              obj6 = { value: null, done: true };
              obj6[0] = arg1;
              return obj6;
            } catch (tmp24) {
              c4 = tmp;
              throw tmp24;
            }
          }
        })();
      });
      closure_5 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    let fromServer = null;
    if (null != closure_0) {
      fromServer = closure_1_5.createFromServer(tmp);
    }
    let obj = {
      orderRecord: fromServer,
      setOrder(PLAN_SELECT) {
        return callback({ orderRecord: closure_2_5.createFromServer(PLAN_SELECT) });
      },
      getCheckoutContextRecord() {
        const orderRecord = callback2().orderRecord;
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
      orderRequired: null,
      checkoutSucceeded: false,
      setCheckoutSucceeded: null,
      onOrderRetryCancellation: null
    };
    closure_7 = closure_1_3((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
      c6 = 0;
      c7 = 0;
      c5 = 0;
      return (function*(arg0, arg1) {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
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
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_3 = tmp4;
                closure_2 = tmp8;
                c5 = 2;
                callback({ isPatchOrderLoading: true });
                c6 = 3;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_2(callback, callback2);
                return obj1;
              }
            } else if (1 === tmp8) {
              c5 = 0;
              callback({ isPatchOrderLoading: false });
              throw closure_4;
            } else if (2 === tmp8) {
              c5 = 1;
              closure_2 = closure_4;
              let obj4 = callback(runPatchOrderLineItems[9]);
              const obj2 = { tags: null, extra: null };
              obj2[0] = { source: "NativeCheckoutStore_patchOrderLineItems" };
              const orderRecord = callback2().orderRecord;
              let id;
              if (orderRecord != null) {
                id = orderRecord.id;
              }
              const obj3 = { orderId: null };
              obj3[0] = id;
              obj2[1] = obj3;
              const result = obj4.captureBillingException(closure_2, obj2);
              let obj7 = callback(runPatchOrderLineItems[10]);
              c6 = 4;
              c7 = 1;
              obj4 = { value: null, done: false };
              obj4[0] = obj7.showCheckoutOrderErrorModal(() => callback(closure_0, closure_1));
              return obj4;
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                callback({ isPatchOrderLoading: false });
                c7 = 3;
                const obj5 = { value: null, done: true };
                obj5[0] = arg1;
                return obj5;
              } else {
                c5 = 0;
                callback({ isPatchOrderLoading: false });
                c7 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 0;
              callback({ isPatchOrderLoading: false });
              c7 = 3;
              obj7 = { value: null, done: true };
              obj7[0] = arg1;
              return obj7;
            } else {
              c5 = 0;
              callback({ isPatchOrderLoading: false });
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
      })();
    });
    obj[4] = function() {
      const self = this;
      const apply = closure_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    closure_6 = closure_1_3((arg0) => {
      closure_0 = arg0;
      c5 = 0;
      c6 = 0;
      c4 = 0;
      return (function*(arg0) {
        if (c6 === 2) {
          c6 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp7 === 3) {
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
                closure_2 = tmp4;
                let callback2 = tmp8;
                let v0 = 2;
                callback({ isCreateOrderLoading: true });
                c5 = 3;
                c6 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = v0(callback);
                return obj1;
              }
            } else if (1 === tmp8) {
              v0 = 0;
              callback({ isCreateOrderLoading: false });
              throw closure_3;
            } else if (2 === tmp8) {
              v0 = 1;
              callback2 = closure_3;
              let obj2 = callback(runPatchOrderLineItems[9]);
              obj2 = { tags: null, extra: null };
              obj2[0] = { source: "NativeCheckoutStore_recreateOrder" };
              const orderRecord = callback2().orderRecord;
              let id;
              if (orderRecord != null) {
                id = orderRecord.id;
              }
              const obj3 = { orderId: null };
              obj3[0] = id;
              obj2[1] = obj3;
              const result = obj2.captureBillingException(callback2, obj2);
              let obj5 = callback(runPatchOrderLineItems[10]);
              c5 = 4;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj5.showCheckoutOrderErrorModal(() => v0(closure_0), c5);
              return obj4;
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  v0 = 0;
                  callback({ isCreateOrderLoading: false });
                  c6 = 3;
                  obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                } else {
                  v0 = 1;
                }
              } else if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                callback({ isCreateOrderLoading: false });
                c6 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              v0 = 0;
              callback({ isCreateOrderLoading: false });
              c6 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp42) {
            closure_3 = tmp42;
            if (tmp5 === v0) {
              c6 = tmp3;
              throw tmp42;
            } else if (tmp2 === tmp44) {
              c5 = tmp2;
            } else {
              c5 = tmp;
            }
          }
        }
      })();
    });
    obj[6] = function() {
      const self = this;
      const apply = closure_6.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[7] = closure_1;
    obj[8] = runPatchOrderLineItems;
    obj[9] = runRecreateOrder;
    obj[11] = function setCheckoutSucceeded() {
      return callback({ checkoutSucceeded: true });
    };
    obj[12] = _runRecreateOrder;
    return obj;
  }, isIterable.shallow);
};
export const NativeCheckoutStoreContext = importDefaultResultResult[0];