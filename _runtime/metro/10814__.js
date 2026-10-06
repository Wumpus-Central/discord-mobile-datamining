// _runtime/metro/10814__.js
import Fragment from "../react/00021_Fragment.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";
import _slicedToArray from "00032__slicedToArray.js";
import react_mod from "../00019_react.js";

let c1, c2, c3, redux, setConnected;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let react = react_mod;
({ useContext: closure_4, useEffect: hasOwnProperty, useMemo: metroRequire, useState: metroImportDefault } = react);
react = react_mod;
const jsx = Fragment.jsx;
const context = react.createContext(null);

export const useIAPContext = function useIAPContext() {
  const tmp = React3(closure_9);
  if (tmp) {
    return tmp;
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("You need wrap your app with withIAPContext HOC");
    throw error;
  }
};
export function withIAPContext(arg0) {
  let closure_0 = arg0;
  return function WrapperComponent(arg0) {
    let closure_15;
    let closure_19;
    let first;
    let first1;
    let first2;
    let first3;
    let first7;
    let first9;
    let tmp11;
    let tmp3;
    let tmp6;
    [first, tmp3] = metroImportDefault(false);
    let closure_1 = tmp3;
    [first1, tmp6] = metroImportDefault([]);
    let closure_3 = tmp6;
    [first2, hasOwnProperty] = metroImportDefault([]);
    [first3, tmp11] = metroImportDefault([]);
    metroImportDefault = tmp11;
    const tmp12 = _slicedToArray(metroImportDefault([]), 2);
    const first4 = tmp12[0];
    redux = tmp14;
    const tmp15 = _slicedToArray(metroImportDefault([]), 2);
    const first5 = tmp15[0];
    let closure_11 = tmp17;
    const tmp18 = _slicedToArray(metroImportDefault(), 2);
    const first6 = tmp18[0];
    let closure_13 = tmp20;
    [first7, closure_15] = metroImportDefault();
    const tmp23 = _slicedToArray(metroImportDefault(), 2);
    const first8 = tmp23[0];
    let closure_17 = tmp25;
    [first9, closure_19] = metroImportDefault();
    let items = [
      first,
      first1,
      first3,
      first2,
      first4,
      first5,
      first6,
      first7,
      first8,
      first9,
      tmp3,
      tmp6,
      tmp11,
      tmp12[1],
      tmp15[1],
      tmp18[1],
      tmp23[1],
    ];
    const tmp28 = metroRequire(
      () => ({
        connected,
        products: first1,
        subscriptions: first3,
        promotedProductsIOS: first2,
        purchaseHistory: first4,
        availablePurchases: first5,
        currentPurchase: first6,
        currentTransaction: first7,
        currentPurchaseError: first8,
        initConnectionError: first9,
        setConnected,
        setProducts,
        setSubscriptions,
        setPurchaseHistory,
        setAvailablePurchases,
        setCurrentPurchase,
        setCurrentPurchaseError,
      }),
      items,
    );
    hasOwnProperty(() => {
      const obj = closure_2_0(closure_2_1[4]);
      const connection = obj.initConnection();
      const nextPromise = connection.then((result) => {
        closure_1_19(undefined);
        setConnected(result);
      });
      nextPromise.catch(closure_19);
    }, []);
    let items1 = [first];
    hasOwnProperty(() => {
      if (closure_0) {
        const tmp2 = setConnected;
        const tmp3 = first(setConnected[5]);
        const purchaseUpdatedListener = tmp3.purchaseUpdatedListener;
        first1(function* (arg0) {
          closure_0 = arg0;
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              c1 = 2;
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                closure_1_17(undefined);
                closure_1_13(closure_0);
                c1 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp8) {
              c1 = 3;
              throw tmp8;
            }
          }
        });
        purchaseUpdatedListener(function (arg0) {
          return closure_0(...arguments);
        });
        const transactionListener = first(setConnected[5]).transactionListener;
        const tmp5 = first(setConnected[5]);
        closure_0 = first1(function* (arg0) {
          closure_0 = arg0;
          if (c1 === 2) {
            c1 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
              c1 = 2;
              if (arg0 === 1) {
                c1 = 3;
                throw value;
              } else if (arg0 === 2) {
                c1 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                let error;
                if (closure_0 != null) {
                  error = closure_0.error;
                }
                closure_1_17(error);
                let transaction;
                if (closure_0 != null) {
                  transaction = closure_0.transaction;
                }
                closure_1_15(transaction);
                c1 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp11) {
              c1 = 3;
              throw tmp11;
            }
          }
        });
        setConnected = transactionListener(function (arg0) {
          return closure_0(...arguments);
        });
        let obj = first(setConnected[5]);
        let closure_2 = obj.purchaseErrorListener((arg0) => {
          setCurrentPurchase(undefined);
          setCurrentPurchaseError(arg0);
        });
        let obj2 = first(setConnected[5]);
        let closure_3 = obj2.promotedProductListener(
          first1(function* () {
            if (c3 === 2) {
              c3 = 3;
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
                let tmp;
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp4;
                    tmp = undefined;
                    const IapIos = tmp(closure_1[4]).IapIos;
                    c2 = 1;
                    c3 = 1;
                    const obj4 = { value: IapIos.getPromotedProductIOS(), done: false };
                    return obj4;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  tmp = value;
                  closure_1_5((arg0) => {
                    let items2;
                    const items = [...arg0];
                    if (closure_1_0) {
                      const items1 = [tmp3];
                      items2 = items1;
                    } else {
                      items2 = [];
                    }
                    HermesBuiltin.arraySpread(items, items2, tmp2);
                    return items;
                  });
                  c3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp11) {
                c3 = 3;
                throw tmp11;
              }
            }
          }),
        );
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
    let obj2 = {};
    const Provider = redux.Provider;
    const merged = Object.assign(arg0);
    return <Provider value={tmp28}>{null}</Provider>;
  };
}
