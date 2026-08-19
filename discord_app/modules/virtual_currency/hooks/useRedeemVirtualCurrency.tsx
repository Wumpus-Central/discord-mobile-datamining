// === Module 9256: useRedeemVirtualCurrency ===

// Module 9256 (useRedeemVirtualCurrency)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { OrderStatus } from "CustomCheckoutFlow" /* 4357 */;

const require = fn;
({ useState: c5, useEffect: closure_6, useCallback: error } = noop);
let result = require("obj132").fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export const useRedeemVirtualCurrency = function useRedeemVirtualCurrency(order) {
  [tmp2, closure_0] = callback(callback2(""), 2);
  const tmp3 = callback(callback2([]), 2);
  const entitlements = tmp3[0];
  dependencyMap = tmp3[1];
  const tmp5 = callback(callback2(null), 2);
  error = tmp5[0];
  callback = tmp5[1];
  const isSubmitting = callback(callback2(false), 2);
  callback2 = isSubmitting[1];
  const tmp = callback(callback2(""), 2);
  const enabled = entitlements(9257).useConfig({ location: "orb_checkout_modal" }).enabled;
  order = undefined;
  if (order != null) {
    order = order.order;
  }
  if (order == null) {
    order = null;
  }
  const callback3 = order;
  let onSignFailure;
  if (order != null) {
    onSignFailure = order.onSignFailure;
  }
  closure_8 = onSignFailure;
  closure_0 = error((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c13 = 0;
    c14 = 0;
    c11 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c14 === 2) {
        c14 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c14 = 2;
          if (0 === c13) {
            if (arg0 === 1) {
              c14 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c14 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_10 = tmp4;
              closure_9 = tmp10;
              closure_3 = undefined;
              let items;
              let callback2;
              let iter3;
              let next;
              if (null == closure_1_7) {
                const tmp152 = new entitlements(4061)("Order not created yet");
                closure_1_4(tmp152);
                closure_1_5(false);
                c14 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else {
                closure_1_5(true);
                closure_1_4(null);
                c11 = 1;
                let obj2 = { orderId: null, loadId: null };
                obj2[0] = closure_1_7.id;
                obj2[1] = tmp182;
                c13 = 2;
                c14 = 1;
                let obj3 = { value: null, done: false };
                obj3[0] = callback(7210).signOrder(obj2);
                return obj3;
              }
            }
          } else {
            if (1 === tmp10) {
              c11 = 0;
              const constants = closure_12;
              if (constants instanceof callback(7210).OrderSigningFailedWithConstraintsError) {
                if (closure_1_8 != null) {
                  tmp130(closure_1_8.order);
                }
                closure_1_4(constants);
                closure_1_5(false);
                c14 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = undefined;
                return obj4;
              } else {
                if (constants instanceof entitlements(4061)) {
                  let tmp103 = constants;
                } else {
                  tmp103 = new entitlements(4061)(constants);
                }
                closure_7 = tmp103;
                let obj6 = callback(4054);
                if (obj6.isExpectedHttpClientError(constants)) {
                  closure_1_4(closure_7);
                  closure_1_5(false);
                  c14 = 3;
                } else {
                  let obj7 = callback(4054);
                  const _Error3 = Error;
                  let result = closure_9;
                  if (constants instanceof Error) {
                    let tmp115 = constants;
                  } else {
                    tmp115 = closure_7;
                  }
                  const obj5 = { tags: null, extra: null };
                  obj5[0] = { source: "orb_redeem_orders_api" };
                  obj6 = { skuId: null, loadId: null, orderId: null };
                  obj6[0] = callback;
                  obj6[1] = entitlements;
                  obj6[2] = closure_1_7.id;
                  obj5[1] = obj6;
                  result = obj7.captureBillingException(tmp115, obj5);
                }
              }
            } else if (2 === tmp10) {
              if (arg0 === 1) {
                c14 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c11 = 0;
                c14 = 3;
                obj7 = { value: null, done: true };
                obj7[0] = arg1;
                return obj7;
              } else {
                closure_3 = arg1;
                if (closure_3.status !== constants.SIGNED) {
                  if (null != closure_3.errors) {
                    if (closure_3.errors.length > 0) {
                      const _Error2 = Error;
                      const errors = closure_3.errors;
                      const _HermesInternal2 = HermesInternal;
                      error = new Error("Order signing failed with errors: " + errors.join(", "));
                      throw error;
                    }
                  }
                  const _Error = Error;
                  const _HermesInternal = HermesInternal;
                  const error1 = new Error("Unexpected order status: " + closure_3.status);
                  throw error1;
                } else {
                  obj3 = callback(7210);
                  c13 = 3;
                  c14 = 1;
                  const obj8 = { value: null, done: false };
                  obj8[0] = obj3.fetchOrderEntitlements(closure_1_7.id);
                  return obj8;
                }
              }
            } else {
              if (3 === tmp10) {
                if (arg0 === 1) {
                  c14 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c11 = 0;
                  c14 = 3;
                  const obj9 = { value: null, done: true };
                  obj9[0] = arg1;
                  return obj9;
                } else {
                  items = arg1;
                  callback2 = function _loop(arg0) {
                    closure_0 = arg0;
                    c2 = 0;
                    c3 = 0;
                    return (function* _loop(arg0) {
                      if (c3 === 2) {
                        c3 = 3;
                        HermesBuiltin.throwTypeError();
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw arg1;
                        } else if (arg0 === 2) {
                          let obj = { value: null, done: true };
                          obj[0] = arg1;
                          return obj;
                        } else {
                          return { value: "HermesInternal", done: "HermesInternal" };
                        }
                      } else {
                        try {
                          c3 = 2;
                          if (0 === c2) {
                            if (arg0 === 1) {
                              c3 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              c3 = 3;
                              obj = { value: null, done: true };
                              obj[0] = arg1;
                              return obj;
                            } else {
                              closure_1 = tmp4;
                              if (items.length > 0) {
                                c3 = 3;
                                return { value: 1, done: true };
                              } else {
                                const promise = new Promise(() => { ... });
                                c2 = 1;
                                c3 = 1;
                                obj1 = { value: null, done: false };
                                obj1[0] = promise;
                                return obj1;
                              }
                            }
                          } else if (1 === tmp4) {
                            if (arg0 === 1) {
                              c3 = 3;
                              throw arg1;
                            } else if (arg0 === 2) {
                              c3 = 3;
                              const obj2 = { value: null, done: true };
                              obj2[0] = arg1;
                              return obj2;
                            } else {
                              obj1 = callback(table[6]);
                              c2 = 2;
                              c3 = 1;
                              const obj3 = { value: null, done: false };
                              obj3[0] = obj1.fetchOrderEntitlements(next.id);
                              return obj3;
                            }
                          } else if (arg0 === 1) {
                            c3 = 3;
                            throw arg1;
                          } else if (arg0 === 2) {
                            c3 = 3;
                            obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            closure_4 = arg1;
                            c3 = 3;
                            return { value: "HermesInternal", done: "HermesInternal" };
                          }
                        } catch (tmp17) {
                          c3 = tmp;
                          throw tmp17;
                        }
                      }
                    })();
                  };
                  items = [250, 500, 1000, 1500, 2500, 4250];
                  closure_3 = items[Symbol.iterator]();
                  if (closure_3 !== undefined) {
                    c11 = 2;
                    iter3 = tmp37;
                    const iter4 = callback2(iter3)[tmp168.iterator]();
                    HermesBuiltin.ensureObject("iterator is not an object");
                    next = iter4.next;
                    callback2 = undefined;
                    const tmp174 = callback2(iter3);
                  }
                  if (0 !== items.length) {
                    dependencyMap(items);
                    closure_1_5(false);
                    if (dependencyMap != null) {
                      tmp53(items);
                    }
                    c11 = 0;
                  }
                }
              } else if (4 === tmp10) {
                c11 = 1;
                closure_3.return();
                throw closure_12;
              } else {
                if (5 !== tmp10) {
                  c11 = 2;
                  const method = HermesBuiltin.getMethod("throw");
                  if (method === undefined) {
                    const method1 = HermesBuiltin.getMethod("return");
                    if (method1 !== undefined) {
                      HermesBuiltin.ensureObject("iterator.return() did not return an object");
                    }
                    HermesBuiltin.throwTypeError();
                  } else {
                    const iter = method(tmp12);
                    HermesBuiltin.ensureObject("iterator.throw() did not return an object");
                    if (iter.done) {
                      iter3 = iter;
                    } else {
                      c13 = 5;
                      c14 = 1;
                      return iter;
                    }
                  }
                  c11 = 1;
                  if (iter3.value) {
                    closure_3.return();
                  }
                  tmp12 = closure_12;
                }
                c11 = 3;
                if (arg0 === 1) {
                  c14 = 3;
                  throw arg1;
                } else {
                  callback2 = arg1;
                  if (arg0 === 2) {
                    callback2 = arg1;
                    c11 = 2;
                    const method2 = HermesBuiltin.getMethod("return");
                    if (method2 === undefined) {
                      c11 = 1;
                      closure_3.return();
                      c11 = 0;
                      c14 = 3;
                      const obj10 = { value: null, done: true };
                      obj10[0] = arg1;
                      return obj10;
                    } else {
                      const iter2 = method2(callback2);
                      HermesBuiltin.ensureObject("iterator.return() did not return an object");
                      if (iter2.done) {
                        c11 = 1;
                        closure_3.return();
                        c11 = 0;
                        c14 = 3;
                        obj = { value: null, done: true };
                        obj[0] = iter2.value;
                        return obj;
                      } else {
                        c13 = 5;
                        c14 = 1;
                        return iter2;
                      }
                    }
                  } else {
                    c11 = 2;
                    const tmp23 = arg1;
                  }
                }
              }
              iter3 = next(tmp23);
              HermesBuiltin.ensureObject("iterator.next() did not return an object");
              if (!iter3.done) {
                c13 = 5;
                c14 = 1;
                return iter3;
              }
            }
            const orderProcessingPendingError = new callback(7210).OrderProcessingPendingError();
            throw orderProcessingPendingError;
          }
        } catch (tmp158) {
          closure_12 = tmp158;
          if (tmp5 === c11) {
            c14 = tmp3;
            throw tmp158;
          } else if (tmp2 === tmp160) {
            c13 = tmp2;
          } else if (tmp === tmp160) {
            c13 = tmp7;
          } else {
            c13 = tmp6;
          }
        }
      }
    })();
  });
  let items = [order, onSignFailure];
  const tmp10 = callback3(function(arg0, arg1, arg2) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  closure_9 = tmp10;
  const tmp11 = callback3((skuId, loadId) => {
    const callback = arg2;
    callback(9255);
    const obj = {
      skuId,
      loadId,
      onRedeemStart() {
        callback3(true);
        callback2(null);
      },
      onRedeemSucceed(arg0) {
        closure_1_2(arg0);
        closure_1_5(false);
        if (callback != null) {
          callback(arg0);
        }
      },
      onRedeemFail(arg0) {
        callback2(arg0);
        callback3(false);
      }
    };
    return obj.redeemVirtualCurrencyForSKU(obj);
  }, []);
  closure_10 = tmp11;
  const items1 = [enabled, tmp10, tmp11];
  const items2 = [entitlements, error];
  const redeemVirtualCurrency = callback3((arg0, arg1, arg2) => {
    if (enabled) {
      callback2(arg0, arg1, arg2);
    } else {
      callback3(arg0, arg1, arg2);
    }
  }, items1);
  enabled(() => {
    if (null == error) {
      if (null != entitlements) {
        if (entitlements.length > 0) {
          const mapped = entitlements.map((item, index) => {
            const sku = item.sku;
            let name;
            if (sku != null) {
              name = sku.name;
            }
            return name;
          });
          const intl2 = callback(1236).intl;
          let str2 = "SKUs";
          if (1 === mapped.length) {
            str2 = "SKU";
          }
          const joined = mapped.join(", ");
          let str4 = "IDs";
          if (1 === entitlements.length) {
            str4 = "ID";
          }
          let obj = { amountDescription: "1 orb", redeemedItemDescription: null };
          const mapped1 = entitlements.map((item, index) => item.id);
          const _HermesInternal = HermesInternal;
          obj[1] = "" + str2 + ": " + joined + ". Entitlement " + str4 + ": " + mapped1.join(", ");
          callback(intl2.format(callback(1236).t.JxNFav, obj));
        }
      }
      callback("");
    } else {
      const intl = callback(1236).intl;
      obj = { amount: "1 orb", errorMessage: null };
      obj[1] = tmp.message;
      callback(intl.format(callback(1236).t["7gHWrd"], obj));
    }
  }, items2);
  return { entitlements, error, isSubmitting: isSubmitting[0], responseMessage, redeemVirtualCurrency };
};