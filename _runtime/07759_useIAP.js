// _runtime/07759_useIAP.js
import closure_2 from "00005_asyncGeneratorStep.js";
import noop from "00019_noop.js";

const require = arg1;
({ useCallback: c3, useEffect: c4 } = noop);

export const useIAP = () => {
  let obj = _require(currentPurchaseError[2]);
  const iAPContext = obj.useIAPContext();
  const currentPurchase = iAPContext.currentPurchase;
  _require = currentPurchase;
  currentPurchaseError = iAPContext.currentPurchaseError;
  ({ setConnected: closure_2, setProducts } = iAPContext);
  const setSubscriptions = iAPContext.setSubscriptions;
  const setAvailablePurchases = iAPContext.setAvailablePurchases;
  const setPurchaseHistory = iAPContext.setPurchaseHistory;
  const setCurrentPurchase = iAPContext.setCurrentPurchase;
  const setCurrentPurchaseError = iAPContext.setCurrentPurchaseError;
  _require = undefined;
  ({ connected, products, promotedProductsIOS, subscriptions, purchaseHistory, availablePurchases, initConnectionError } = iAPContext);
  _require = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
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
              let skus;
              skus = skus.skus;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const callback2 = closure_1_3;
              obj1 = callback(currentPurchaseError[3]);
              const obj2 = { skus: null };
              obj2[0] = skus;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj1.getProducts(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback2(arg1);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c5 = tmp;
          throw tmp15;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items = [setProducts];
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
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
              let skus;
              skus = skus.skus;
              c4 = 1;
              c5 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              const callback2 = c4;
              obj1 = callback(currentPurchaseError[3]);
              const obj2 = { skus: null };
              obj2[0] = skus;
              c4 = 2;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj1.getSubscriptions(obj2);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            callback2(arg1);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c5 = tmp;
          throw tmp15;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const items1 = [setSubscriptions];
  const tmp4 = setProducts;
  const tmp5 = setProducts(function(arg0) {
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
  const tmp6 = setProducts(function(arg0) {
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
  _require = undefined;
  const tmp7 = setProducts(callback(function*() {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = closure_1_5;
            obj1 = closure_1_0(table[3]);
            table = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.getAvailablePurchases();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback(arg1);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  }), items2);
  _require = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp8 === 3) {
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
              c2 = tmp4;
              c1 = tmp6;
              let lib;
              c1 = undefined;
              c2 = undefined;
              ({ purchase: c0, isConsumable: c1, developerPayloadAndroid: c2 } = lib);
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp9) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 2;
              let obj2 = lib(currentPurchaseError[3]);
              obj2 = { purchase: null, isConsumable: null, developerPayloadAndroid: null };
              obj2[0] = lib;
              obj2[1] = c1;
              obj2[2] = c2;
              c5 = 4;
              c6 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj2.finishTransaction(obj2);
              return obj3;
            }
          } else if (2 === tmp9) {
            c4 = 0;
            let productId;
            if (lib != null) {
              productId = lib.productId;
            }
            if (lib.productId === productId) {
              closure_1_7(undefined);
            }
            let productId1;
            if (closure_1_1 != null) {
              productId1 = closure_1_1.productId;
            }
            if (lib.productId === productId1) {
              closure_1_8(undefined);
            }
            throw closure_3;
          } else if (3 === tmp9) {
            c4 = 1;
            throw closure_3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            let productId2;
            if (lib != null) {
              productId2 = lib.productId;
            }
            if (lib.productId === productId2) {
              closure_1_7(undefined);
            }
            let productId3;
            if (closure_1_1 != null) {
              productId3 = closure_1_1.productId;
            }
            if (lib.productId === productId3) {
              closure_1_8(undefined);
            }
            c6 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            c4 = 0;
            let productId4;
            if (lib != null) {
              productId4 = lib.productId;
            }
            if (lib.productId === productId4) {
              closure_1_7(undefined);
            }
            let productId5;
            if (closure_1_1 != null) {
              productId5 = closure_1_1.productId;
            }
            if (lib.productId === productId5) {
              closure_1_8(undefined);
            }
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
    })();
    iter.next();
    return iter;
  });
  let productId;
  if (currentPurchase != null) {
    productId = currentPurchase.productId;
  }
  const items4 = [productId, , , ];
  let productId1;
  if (currentPurchaseError != null) {
    productId1 = currentPurchaseError.productId;
  }
  items4[1] = productId1;
  items4[2] = setCurrentPurchase;
  items4[3] = setCurrentPurchaseError;
  const tmp8 = setProducts(callback(function*() {
    if (c2 === 2) {
      c2 = 3;
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
        c2 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = closure_1_6;
            obj1 = closure_1_0(table[3]);
            table = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.getPurchaseHistory();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          callback(arg1);
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  }), items3);
  setSubscriptions(() => {
    callback(true);
    return () => {
      callback(false);
      callback2(undefined);
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
    finishTransaction: tmp4(function(arg0) {
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
    requestSubscription: tmp(tmp2[3]).requestSubscription
  };
  return obj;
};