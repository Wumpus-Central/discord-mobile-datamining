// === Module 11064: ? ===

// Module 11064
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
let noop = fn(19);
({ useContext: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useState: closure_7 } = noop);
const jsx = fn(21).jsx;
const context = noop.createContext(null);

export const useIAPContext = function useIAPContext() {
  const tmp = React4(closure_9);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const error = new Error("You need wrap your app with withIAPContext HOC");
    throw error;
  }
};
export function withIAPContext(arg0) {
  closure_0 = arg0;
  return function WrapperComponent(arg0) {
    const tmp = _slicedToArray(React5(false), 2);
    const connected = tmp[0];
    let setConnected = tmp3;
    const tmp4 = _slicedToArray(React5([]), 2);
    const first1 = tmp4[0];
    const setProducts = tmp6;
    const tmp7 = _slicedToArray(React5([]), 2);
    const first2 = tmp7[0];
    closure_5 = tmp7[1];
    const tmp9 = _slicedToArray(React5([]), 2);
    const first3 = tmp9[0];
    const setSubscriptions = tmp11;
    const tmp12 = _slicedToArray(React5([]), 2);
    const first4 = tmp12[0];
    redux = tmp14;
    const tmp15 = _slicedToArray(React5([]), 2);
    const first5 = tmp15[0];
    const setAvailablePurchases = tmp17;
    const tmp18 = _slicedToArray(React5(), 2);
    const first6 = tmp18[0];
    const setCurrentPurchase = tmp20;
    const tmp21 = _slicedToArray(React5(), 2);
    const first7 = tmp21[0];
    closure_15 = tmp21[1];
    const tmp23 = _slicedToArray(React5(), 2);
    const first8 = tmp23[0];
    const setCurrentPurchaseError = tmp25;
    const tmp26 = _slicedToArray(React5(), 2);
    const first9 = tmp26[0];
    closure_19 = tmp26[1];
    let items = [connected, first1, first3, first2, first4, first5, first6, first7, first8, first9, tmp[1], tmp4[1], tmp9[1], tmp12[1], tmp15[1], tmp18[1], tmp23[1]];
    hasOwnProperty(() => {
      const connection = connected(dependencyMap[4]).initConnection();
      const obj = connected(dependencyMap[4]);
      connection.then((result) => {
        closure_1_19(undefined);
        setConnected(result);
      }).catch(closure_19);
    }, []);
    let items1 = [connected];
    hasOwnProperty(() => {
      if (closure_0) {
        closure_129_0 = first1(function*(arg0) {
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              c1 = 2;
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                setCurrentPurchaseError(undefined);
                setCurrentPurchase(closure_0);
                c1 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp9) {
              c1 = tmp;
              throw tmp9;
            }
          }
        });
        closure_0 = first(setConnected[5]).purchaseUpdatedListener(function(arg0) {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
        let obj = first(setConnected[5]);
        closure_130_0 = first1(function*(arg0) {
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
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
              c1 = 2;
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                let error;
                if (closure_0 != null) {
                  error = closure_0.error;
                }
                setCurrentPurchaseError(error);
                let transaction;
                if (closure_0 != null) {
                  transaction = closure_0.transaction;
                }
                closure_1_15(transaction);
                c1 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp12) {
              c1 = tmp;
              throw tmp12;
            }
          }
        });
        setConnected = first(setConnected[5]).transactionListener(function(arg0) {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        });
        const obj2 = first(setConnected[5]);
        closure_2 = first(setConnected[5]).purchaseErrorListener((arg0) => {
          setCurrentPurchase(undefined);
          setCurrentPurchaseError(arg0);
        });
        const obj3 = first(setConnected[5]);
        closure_3 = first(setConnected[5]).promotedProductListener(first1(function*() {
          if (c3 === 2) {
            c3 = 3;
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
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = undefined;
                  const IapIos = tmp2(tmp5[4]).IapIos;
                  c2 = 1;
                  c3 = 1;
                  const obj1 = { value: IapIos.getPromotedProductIOS(), done: false };
                  return obj1;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                closure_1_5((arg0) => {
                  const items = [...arg0];
                  if (closure_1_0) {
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
          closure_2.remove();
          if (closure_3 != null) {
            closure_3.remove();
          }
          if (closure_1 != null) {
            closure_1.remove();
          }
        };
      }
    }, items1);
    let obj = { value: timestampProducer(() => ({ connected, products: first1, subscriptions: first3, promotedProductsIOS: first2, purchaseHistory: first4, availablePurchases: first5, currentPurchase: first6, currentTransaction: first7, currentPurchaseError: first8, initConnectionError: first9, setConnected, setProducts, setSubscriptions, setPurchaseHistory, setAvailablePurchases, setCurrentPurchase, setCurrentPurchaseError }), items), children: null };
    obj = {};
    const merged = Object.assign(arg0);
    obj.children = <connected />;
    return <redux.Provider />;
  };
}