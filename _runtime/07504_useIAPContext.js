// _runtime/07504_useIAPContext.js
import purchaseUpdatedListener from "purchaseUpdatedListener";
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ useContext: c4, useEffect: c5, useMemo: closure_6, useState: error } = noop);
const context = require("noop").createContext(null);

export const useIAPContext = function useIAPContext() {
  const tmp = callback(closure_9);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const error = new Error("You need wrap your app with withIAPContext HOC");
    throw error;
  }
};
export function withIAPContext(arg0) {
  let closure_0 = arg0;
  return function WrapperComponent(arg0) {
    const tmp = outer1_3(outer1_7(false), 2);
    const first = tmp[0];
    let closure_1 = tmp3;
    const tmp4 = outer1_3(outer1_7([]), 2);
    const first1 = tmp4[0];
    let _slicedToArray = tmp6;
    const tmp7 = outer1_3(outer1_7([]), 2);
    const first2 = tmp7[0];
    let closure_5 = tmp7[1];
    const tmp9 = outer1_3(outer1_7([]), 2);
    const first3 = tmp9[0];
    let closure_7 = tmp11;
    const tmp12 = outer1_3(outer1_7([]), 2);
    const first4 = tmp12[0];
    let closure_9 = tmp14;
    const tmp15 = outer1_3(outer1_7([]), 2);
    const first5 = tmp15[0];
    let closure_11 = tmp17;
    const tmp18 = outer1_3(outer1_7(), 2);
    const first6 = tmp18[0];
    let closure_13 = tmp20;
    const tmp21 = outer1_3(outer1_7(), 2);
    const first7 = tmp21[0];
    let closure_15 = tmp21[1];
    const tmp23 = outer1_3(outer1_7(), 2);
    const first8 = tmp23[0];
    let closure_17 = tmp25;
    const tmp26 = outer1_3(outer1_7(), 2);
    const first9 = tmp26[0];
    let closure_19 = tmp26[1];
    let items = [first, first1, first3, first2, first4, first5, first6, first7, first8, first9, tmp[1], tmp4[1], tmp9[1], tmp12[1], tmp15[1], tmp18[1], tmp23[1]];
    outer1_5(() => {
      const connection = first(tmp3[4]).initConnection();
      const obj = first(tmp3[4]);
      connection.then((arg0) => {
        callback2(undefined);
        callback(arg0);
      }).catch(closure_19);
    }, []);
    let items1 = [first];
    outer1_5(() => {
      if (closure_0) {
        closure_0 = undefined;
        let tmp3 = first1;
        closure_0 = first1((arg0) => {
          let closure_0 = arg0;
          let c1 = 0;
          return (function*(arg0) {
            if (c1 === 2) {
              c1 = 3;
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
                c1 = 2;
                if (arg0 === 1) {
                  c1 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c1 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  outer1_17(undefined);
                  outer1_13(closure_0);
                  c1 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp9) {
                c1 = tmp;
                throw tmp9;
              }
            }
          })();
        });
        closure_0 = first(tmp3[5]).purchaseUpdatedListener(function(arg0) {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
        let obj = first(tmp3[5]);
        closure_0 = undefined;
        closure_0 = first1((arg0) => {
          let closure_0 = arg0;
          let c1 = 0;
          return (function*(arg0) {
            if (c1 === 2) {
              c1 = 3;
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
                c1 = 2;
                if (arg0 === 1) {
                  c1 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c1 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arg1;
                  return obj;
                } else {
                  let error;
                  if (closure_0 != null) {
                    error = tmp4.error;
                  }
                  outer1_17(error);
                  let transaction;
                  if (closure_0 != null) {
                    transaction = tmp4.transaction;
                  }
                  outer1_15(transaction);
                  c1 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } catch (tmp12) {
                c1 = tmp;
                throw tmp12;
              }
            }
          })();
        });
        tmp3 = first(tmp3[5]).transactionListener(function(arg0) {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
        const obj2 = first(tmp3[5]);
        let purchaseUpdatedListener = first(tmp3[5]).purchaseErrorListener((arg0) => {
          callback(undefined);
          callback2(arg0);
        });
        const obj3 = first(tmp3[5]);
        let _slicedToArray = first(tmp3[5]).promotedProductListener(first1(function*() {
          if (c3 === 2) {
            c3 = 3;
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
                  const table = tmp5;
                  let callback = tmp2;
                  callback = undefined;
                  const IapIos = callback(table[4]).IapIos;
                  c2 = 1;
                  c3 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = IapIos.getPromotedProductIOS();
                  return obj1;
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
                callback = arg1;
                outer1_5((arg0) => {
                  const items = [...arg0];
                  if (closure_0) {
                    const items1 = [tmp2];
                    let items2 = items1;
                  } else {
                    items2 = [];
                  }
                  HermesBuiltin.arraySpread(items2, tmp);
                  return items;
                });
                c3 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp12) {
              c3 = tmp;
              throw tmp12;
            }
          }
        }));
        return () => {
          closure_0.remove();
          purchaseUpdatedListener.remove();
          if (_slicedToArray != null) {
            _slicedToArray.remove();
          }
          if (closure_1 != null) {
            closure_1.remove();
          }
        };
      }
    }, items1);
    let obj = { value: outer1_6(() => ({ connected: first, products: first1, subscriptions: first3, promotedProductsIOS: first2, purchaseHistory: first4, availablePurchases: first5, currentPurchase: first6, currentTransaction: first7, currentPurchaseError: first8, initConnectionError: first9, setConnected: closure_1, setProducts: _slicedToArray, setSubscriptions: closure_7, setPurchaseHistory: closure_9, setAvailablePurchases: closure_11, setCurrentPurchase: closure_13, setCurrentPurchaseError: closure_17 }), items), children: null };
    obj = {};
    const merged = Object.assign(arg0);
    obj[1] = outer1_8(first, obj);
    return outer1_8(outer1_9.Provider, obj);
  };
}