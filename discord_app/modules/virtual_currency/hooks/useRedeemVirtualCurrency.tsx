import set from "set";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { OrderStatus } from "CustomCheckoutFlow";

let c5;
let closure_6;
let error;
const require = arg1;
({ useState: c5, useEffect: closure_6, useCallback: error } = noop);
const result = require("noop").fileFinishedImporting("modules/virtual_currency/hooks/useRedeemVirtualCurrency.tsx");

export const useRedeemVirtualCurrency = function useRedeemVirtualCurrency(order) {
  let closure_0;
  let tmp2;
  [tmp2, closure_0] = callback(callback2(""), 2);
  const tmp3 = callback(callback2([]), 2);
  const entitlements = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp5 = callback(callback2(null), 2);
  let error = tmp5[0];
  callback = tmp5[1];
  const isSubmitting = callback(callback2(false), 2);
  callback2 = isSubmitting[1];
  const tmp = callback(callback2(""), 2);
  const enabled = entitlements(8910).useConfig({ location: "orb_checkout_modal" }).enabled;
  order = undefined;
  if (order != null) {
    order = order.order;
  }
  if (order == null) {
    order = null;
  }
  let onSignFailure;
  if (order != null) {
    onSignFailure = order.onSignFailure;
  }
  closure_0 = undefined;
  closure_0 = error((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c13 = 0;
    let c14 = 0;
    let c11 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c14 === 2) {
        c14 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp8;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp9 === 3) {
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
                let closure_10 = tmp4;
                let closure_9 = tmp10;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = dependencyMap;
                let set;
                let items;
                let callback2;
                let iter3;
                let next;
                throwTypeErrorResult = outer1_7;
                if (null == outer1_7) {
                  throwTypeErrorResult = entitlements;
                  throwTypeErrorResult = dependencyMap;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new.target;
                  throwTypeErrorResult = new entitlements(3923)("Order not created yet");
                  throwTypeErrorResult = outer1_4;
                  throwTypeErrorResult = outer1_4(throwTypeErrorResult);
                  throwTypeErrorResult = outer1_5;
                  throwTypeErrorResult = outer1_5(false);
                  c14 = 3;
                  let obj1 = { value: null, done: true };
                  obj1[0] = undefined;
                  return obj1;
                } else {
                  throwTypeErrorResult = outer1_5;
                  throwTypeErrorResult = outer1_5(true);
                  throwTypeErrorResult = outer1_4;
                  throwTypeErrorResult = outer1_4(null);
                  let c11 = 1;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  let obj2 = { orderId: null, loadId: null };
                  throwTypeErrorResult = outer1_7;
                  obj2[0] = outer1_7.id;
                  obj2[1] = throwTypeErrorResult;
                  c13 = 2;
                  c14 = 1;
                  let obj3 = { value: null, done: false };
                  obj3[0] = callback(5744).signOrder(obj2);
                  return obj3;
                }
              }
            } else {
              if (1 === tmp10) {
                c11 = 0;
                const onSignFailure = throwTypeErrorResult;
                if (onSignFailure instanceof callback(5744).OrderSigningFailedWithConstraintsError) {
                  throwTypeErrorResult = closure_10;
                  if (outer1_8 != null) {
                    throwTypeErrorResult = closure_9;
                    throwTypeErrorResult = outer1_8;
                    throwTypeErrorResult = throwTypeErrorResult(outer1_8.order);
                  }
                  throwTypeErrorResult = closure_9;
                  throwTypeErrorResult = closure_10;
                  throwTypeErrorResult = outer1_4;
                  throwTypeErrorResult = onSignFailure;
                  throwTypeErrorResult = outer1_4(onSignFailure);
                  throwTypeErrorResult = outer1_5;
                  throwTypeErrorResult = outer1_5(false);
                  c14 = 3;
                  const obj4 = { value: null, done: true };
                  obj4[0] = undefined;
                  return obj4;
                } else {
                  if (onSignFailure instanceof entitlements(3923)) {
                    throwTypeErrorResult = onSignFailure;
                  } else {
                    throwTypeErrorResult = onSignFailure;
                    throwTypeErrorResult = new.target;
                    throwTypeErrorResult = new.target;
                    throwTypeErrorResult = new entitlements(3923)(onSignFailure);
                  }
                  throwTypeErrorResult = closure_9;
                  throwTypeErrorResult = closure_10;
                  const order = throwTypeErrorResult;
                  throwTypeErrorResult = callback;
                  throwTypeErrorResult = dependencyMap;
                  let obj6 = callback(3916);
                  throwTypeErrorResult = onSignFailure;
                  if (obj6.isExpectedHttpClientError(onSignFailure)) {
                    throwTypeErrorResult = closure_9;
                    throwTypeErrorResult = closure_10;
                    throwTypeErrorResult = outer1_4;
                    throwTypeErrorResult = order;
                    throwTypeErrorResult = outer1_4(order);
                    throwTypeErrorResult = outer1_5;
                    throwTypeErrorResult = outer1_5(false);
                    c14 = 3;
                  } else {
                    throwTypeErrorResult = closure_9;
                    throwTypeErrorResult = closure_10;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    let obj7 = callback(3916);
                    throwTypeErrorResult = onSignFailure;
                    const _Error3 = Error;
                    throwTypeErrorResult = closure_9;
                    if (onSignFailure instanceof Error) {
                      throwTypeErrorResult = onSignFailure;
                    } else {
                      throwTypeErrorResult = order;
                    }
                    throwTypeErrorResult = closure_10;
                    const obj5 = { tags: null, extra: null };
                    obj5[0] = { source: "orb_redeem_orders_api" };
                    obj6 = { skuId: null, loadId: null, orderId: null };
                    throwTypeErrorResult = callback;
                    obj6[0] = callback;
                    throwTypeErrorResult = entitlements;
                    obj6[1] = entitlements;
                    throwTypeErrorResult = outer1_7;
                    obj6[2] = outer1_7.id;
                    obj5[1] = obj6;
                    throwTypeErrorResult = obj7.captureBillingException(throwTypeErrorResult, obj5);
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
                  throwTypeErrorResult = closure_9;
                  throwTypeErrorResult = closure_10;
                  const outer1_3 = arg1;
                  throwTypeErrorResult = outer1_3;
                  throwTypeErrorResult = onSignFailure;
                  if (outer1_3.status !== onSignFailure.SIGNED) {
                    if (null != outer1_3.errors) {
                      if (outer1_3.errors.length > 0) {
                        const _Error2 = Error;
                        const errors = outer1_3.errors;
                        const _HermesInternal2 = HermesInternal;
                        const error = new Error("Order signing failed with errors: " + errors.join(", "));
                        throw error;
                      }
                    }
                    const _Error = Error;
                    const _HermesInternal = HermesInternal;
                    const error1 = new Error("Unexpected order status: " + outer1_3.status);
                    throw error1;
                  } else {
                    obj3 = callback(5744);
                    c13 = 3;
                    c14 = 1;
                    const obj8 = { value: null, done: false };
                    obj8[0] = obj3.fetchOrderEntitlements(outer1_7.id);
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
                    throwTypeErrorResult = closure_9;
                    items = arg1;
                    callback2 = function _loop(arg0) {
                      let closure_0 = arg0;
                      let c2 = 0;
                      let c3 = 0;
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
                            return { value: "HermesInternal", done: null };
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
                                let closure_1 = tmp4;
                                if (outer1_4.length > 0) {
                                  c3 = 3;
                                  return { value: 1, done: true };
                                } else {
                                  const promise = new Promise(() => { ... });
                                  c2 = 1;
                                  c3 = 1;
                                  let obj1 = { value: null, done: false };
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
                                obj3[0] = obj1.fetchOrderEntitlements(outer1_7.id);
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
                              let _slicedToArray = arg1;
                              c3 = 3;
                              return { value: "HermesInternal", done: null };
                            }
                          } catch (tmp17) {
                            c3 = tmp;
                            throw tmp17;
                          }
                        }
                      })();
                    };
                    items = [250, 500, 1000, 1500, 2500, 4250];
                    throwTypeErrorResult = items;
                    set = items[Symbol.iterator]();
                    if (set !== undefined) {
                      throwTypeErrorResult = closure_9;
                      c11 = 2;
                      iter3 = tmp37;
                      throwTypeErrorResult = callback2;
                      throwTypeErrorResult = iter3;
                      throwTypeErrorResult = callback2(iter3);
                      const iter4 = throwTypeErrorResult[throwTypeErrorResult.iterator]();
                      throwTypeErrorResult = iter4;
                      throwTypeErrorResult = HermesBuiltin.ensureObject("iterator is not an object");
                      next = iter4.next;
                      callback2 = undefined;
                    }
                    if (0 !== items.length) {
                      dependencyMap(items);
                      outer1_5(false);
                      if (dependencyMap != null) {
                        tmp53(items);
                      }
                      c11 = 0;
                    }
                  }
                } else if (4 === tmp10) {
                  c11 = 1;
                  set.return();
                  throw throwTypeErrorResult;
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
                      set.return();
                    }
                    tmp12 = throwTypeErrorResult;
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
                        set.return();
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
                          set.return();
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
              const orderProcessingPendingError = new callback(5744).OrderProcessingPendingError();
              throw orderProcessingPendingError;
            }
          } catch (throwTypeErrorResult) {
            throwTypeErrorResult = c11;
            if (tmp5 === c11) {
              throwTypeErrorResult = tmp3;
              c14 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              c13 = tmp2;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c13 = tmp7;
            } else {
              c13 = tmp6;
            }
          }
        }
      }
    })();
  });
  let items = [order, onSignFailure];
  const tmp10 = order(function(arg0, arg1, arg2) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  let closure_9 = tmp10;
  const tmp11 = order((skuId, loadId) => {
    const callback = arg2;
    let obj = callback(8908);
    obj = {
      skuId,
      loadId,
      onRedeemStart() {
        callback3(true);
        callback2(null);
      },
      onRedeemSucceed(arg0) {
        outer1_2(arg0);
        outer1_5(false);
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
  let closure_10 = tmp11;
  const items1 = [enabled, tmp10, tmp11];
  const items2 = [entitlements, error];
  const redeemVirtualCurrency = order((arg0, arg1, arg2) => {
    if (enabled) {
      tmp10(arg0, arg1, arg2);
    } else {
      tmp11(arg0, arg1, arg2);
    }
  }, items1);
  enabled(() => {
    if (null == error) {
      if (null != entitlements) {
        if (arr.length > 0) {
          const mapped = arr.map((sku) => {
            sku = sku.sku;
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
          if (1 === arr.length) {
            str4 = "ID";
          }
          let obj = { amountDescription: "1 orb", redeemedItemDescription: null };
          const mapped1 = arr.map((id) => id.id);
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