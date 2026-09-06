// _runtime/metro/11063__.js
import asyncGeneratorStep from "../00005_asyncGeneratorStep.js";

const require = fn;
const noop = fn(19);
({ useCallback: c3, useEffect: closure_4 } = noop);

export const useIAP = () => {
  let obj = require("11064__.js");
  const iAPContext = obj.useIAPContext();
  const currentPurchase = iAPContext.currentPurchase;
  currentPurchaseError = iAPContext.currentPurchaseError;
  ({ setConnected: asyncGeneratorStep, setProducts } = iAPContext);
  const setSubscriptions = iAPContext.setSubscriptions;
  const setAvailablePurchases = iAPContext.setAvailablePurchases;
  const setPurchaseHistory = iAPContext.setPurchaseHistory;
  const setCurrentPurchase = iAPContext.setCurrentPurchase;
  const setCurrentPurchaseError = iAPContext.setCurrentPurchaseError;
  ({
    connected,
    products,
    promotedProductsIOS,
    subscriptions,
    purchaseHistory,
    availablePurchases,
    initConnectionError,
  } = iAPContext);
  asyncGeneratorStep(async (arg0) => {
    dependencyMap = closure_3;
    await closure_0(currentPurchaseError[3]).getProducts({ skus });
    dependencyMap(arg1);
    await "HermesInternal";
    closure_2 = tmp2;
    skus = closure_0.skus;
    return "PX_16";
  });
  const items = [setProducts];
  asyncGeneratorStep(async (arg0) => {
    await closure_0(currentPurchaseError[3]).getSubscriptions({ skus });
    dependencyMap(arg1);
    await "HermesInternal";
    closure_2 = tmp2;
    skus = closure_0.skus;
    return "PX_16";
  });
  const items1 = [setSubscriptions];
  const tmp4 = setProducts;
  const tmp5 = setProducts(function (arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items2 = [setAvailablePurchases];
  const tmp6 = setProducts(function (arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items3 = [setPurchaseHistory];
  const tmp7 = setProducts(
    asyncGeneratorStep(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = setAvailablePurchases;
              let obj1 = closure_0(dependencyMap[3]);
              dependencyMap = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.getAvailablePurchases();
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0(value);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    }),
    items2,
  );
  _require = asyncGeneratorStep(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp8 === 3) {
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
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            ({
              purchase: closure_129_0,
              isConsumable: closure_129_1,
              developerPayloadAndroid: closure_129_2,
            } = closure_0);
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            c4 = 2;
            let obj2 = closure_0(currentPurchaseError[3]);
            obj2 = { purchase: closure_129_0, isConsumable: closure_129_1, developerPayloadAndroid: closure_129_2 };
            c5 = 4;
            c6 = 1;
            const obj3 = { value: obj2.finishTransaction(obj2), done: false };
            return obj3;
          }
        } else if (2 === tmp9) {
          c4 = 0;
          let productId;
          if (closure_0 != null) {
            productId = closure_0.productId;
          }
          if (closure_129_0.productId === productId) {
            setCurrentPurchase(undefined);
          }
          let productId1;
          if (tmp6 != null) {
            productId1 = tmp6.productId;
          }
          if (closure_129_0.productId === productId1) {
            setCurrentPurchaseError(undefined);
          }
          throw closure_3;
        } else if (3 === tmp9) {
          c4 = 1;
          throw closure_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          let productId2;
          if (closure_0 != null) {
            productId2 = closure_0.productId;
          }
          if (closure_129_0.productId === productId2) {
            setCurrentPurchase(undefined);
          }
          let productId3;
          if (tmp6 != null) {
            productId3 = tmp6.productId;
          }
          if (closure_129_0.productId === productId3) {
            setCurrentPurchaseError(undefined);
          }
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 0;
          let productId4;
          if (closure_0 != null) {
            productId4 = closure_0.productId;
          }
          if (closure_129_0.productId === productId4) {
            setCurrentPurchase(undefined);
          }
          let productId5;
          if (tmp6 != null) {
            productId5 = tmp6.productId;
          }
          if (closure_129_0.productId === productId5) {
            setCurrentPurchaseError(undefined);
          }
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp61) {
        closure_3 = tmp61;
        if (tmp5 === c4) {
          c6 = tmp3;
          throw tmp61;
        } else if (tmp2 === tmp63) {
          c5 = tmp;
        } else {
          c5 = tmp3;
        }
      }
    }
  });
  let productId;
  if (currentPurchase != null) {
    productId = currentPurchase.productId;
  }
  const items4 = [productId, , ,];
  let productId1;
  if (currentPurchaseError != null) {
    productId1 = currentPurchaseError.productId;
  }
  items4[1] = productId1;
  items4[2] = setCurrentPurchase;
  items4[3] = setCurrentPurchaseError;
  const tmp8 = setProducts(
    asyncGeneratorStep(async (arg0, value) => {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = setPurchaseHistory;
              let obj1 = closure_0(dependencyMap[3]);
              dependencyMap = 1;
              c2 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.getPurchaseHistory();
              return obj1;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0(value);
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = tmp;
          throw tmp10;
        }
      }
    }),
    items3,
  );
  setSubscriptions(() => {
    asyncGeneratorStep(true);
    return () => {
      closure_1_2(false);
      setCurrentPurchaseError(undefined);
    };
  }, []);
  obj = {
    connected,
    products,
    promotedProductsIOS,
    subscriptions,
    purchaseHistory,
    availablePurchases,
    currentPurchase,
    currentPurchaseError,
    initConnectionError,
    finishTransaction: tmp4(function (arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items4),
    getProducts: tmp5,
    getSubscriptions: tmp6,
    getAvailablePurchases: tmp7,
    getPurchaseHistory: tmp8,
    requestPurchase: tmp(tmp2[3]).requestPurchase,
    requestSubscription: tmp(tmp2[3]).requestSubscription,
  };
  return obj;
};
