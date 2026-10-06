// === Module 10813: ? ===

// Module 10813
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;

let c5, c6, purchase;

let c3;
let closure_4;
({ useCallback: c3, useEffect: closure_4 } = react);

export const useIAP = () => {
  let availablePurchases;
  let connected;
  let currentPurchase;
  let currentPurchaseError;
  let initConnectionError;
  let products;
  let promotedProductsIOS;
  let purchaseHistory;
  let setProducts;
  let subscriptions;
  const tmp = currentPurchase;
  const tmp2 = currentPurchaseError;
  let obj = currentPurchase(currentPurchaseError[2]);
  const iAPContext = obj.useIAPContext();
  currentPurchaseError = iAPContext.currentPurchaseError;
  ({ setConnected: _asyncToGenerator, setProducts } = iAPContext);
  const setSubscriptions = iAPContext.setSubscriptions;
  const setAvailablePurchases = iAPContext.setAvailablePurchases;
  const setPurchaseHistory = iAPContext.setPurchaseHistory;
  const setCurrentPurchase = iAPContext.setCurrentPurchase;
  const setCurrentPurchaseError = iAPContext.setCurrentPurchaseError;
  ({ connected, products, promotedProductsIOS, subscriptions, purchaseHistory, availablePurchases, initConnectionError } = iAPContext);
  const tmp4 = setProducts;
  _asyncToGenerator(async (arg0) => {
    let obj2;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_3;
        let skus;
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
            closure_3 = tmp4;
            let closure_2 = tmp;
            skus = closure_0.skus;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          let closure_1;
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_1 = closure_3;
              const obj6 = { skus };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: obj2.getProducts(obj6), done: false };
              obj2 = closure_0(currentPurchaseError[3]);
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_1(value);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp14) {
        c5 = 3;
        throw tmp14;
      }
    }
  });
  const items = [setProducts];
  const tmp5 = setProducts(function(arg0) {
    return closure_0(...arguments);
  }, items);
  _asyncToGenerator(async (arg0) => {
    let obj2;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let skus;
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
            let closure_3 = tmp4;
            let closure_2 = tmp;
            skus = closure_0.skus;
            c4 = 1;
            c5 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          let closure_1;
          if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_1 = c4;
              const obj6 = { skus };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: obj2.getSubscriptions(obj6), done: false };
              obj2 = closure_0(currentPurchaseError[3]);
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_1(value);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        }
      } catch (tmp14) {
        c5 = 3;
        throw tmp14;
      }
    }
  });
  const items1 = [setSubscriptions];
  const items2 = [setAvailablePurchases];
  const tmp6 = setProducts(function(arg0) {
    return closure_0(...arguments);
  }, items1);
  const items3 = [setPurchaseHistory];
  const tmp7 = setProducts(_asyncToGenerator(async () => {
    let c1;
    let closure_0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === currentPurchaseError) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            currentPurchase = setAvailablePurchases;
            const obj2 = currentPurchase(currentPurchaseError[3]);
            currentPurchaseError = 1;
            c2 = 1;
            const obj5 = { value: obj2.getAvailablePurchases(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          currentPurchase(value);
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  }), items2);
  const tmp8 = setProducts(_asyncToGenerator(async () => {
    let c1;
    let closure_0;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === currentPurchaseError) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            currentPurchase = setPurchaseHistory;
            const obj2 = currentPurchase(currentPurchaseError[3]);
            currentPurchaseError = 1;
            c2 = 1;
            const obj5 = { value: obj2.getPurchaseHistory(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          currentPurchase(value);
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  }), items3);
  currentPurchase = _asyncToGenerator(async (purchase) => {
    let c0;
    let c1;
    let c2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (purchase === 1) {
        throw value;
      } else if (purchase === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let isConsumable;
        let developerPayloadAndroid;
        c6 = 2;
        if (0 === c5) {
          if (purchase === 1) {
            c6 = 3;
            throw value;
          } else if (purchase === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_2 = tmp;
            purchase = undefined;
            isConsumable = undefined;
            developerPayloadAndroid = undefined;
            ({ purchase: c0, isConsumable: c1, developerPayloadAndroid: c2 } = purchase);
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          let finishTransactionResult;
          if (1 === c5) {
            if (purchase === 1) {
              c6 = 3;
              throw value;
            } else if (purchase === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              c4 = 2;
              const obj6 = { purchase, isConsumable, developerPayloadAndroid };
              const obj3 = purchase(currentPurchaseError[3]);
              finishTransactionResult = obj3.finishTransaction(obj6);
              c5 = 4;
              c6 = 1;
              const obj7 = { value: finishTransactionResult, done: false };
              return obj7;
            }
          } else if (2 === c5) {
            c4 = 0;
            finishTransactionResult = undefined;
            const productId = purchase.productId;
            const tmp35 = closure_3;
            if (purchase != null) {
              finishTransactionResult = purchase.productId;
            }
            if (productId === finishTransactionResult) {
              finishTransactionResult = setCurrentPurchase(undefined);
            }
            finishTransactionResult = undefined;
            const productId2 = purchase.productId;
            if (finishTransactionResult != null) {
              finishTransactionResult = finishTransactionResult.productId;
            }
            if (productId2 === finishTransactionResult) {
              finishTransactionResult = setCurrentPurchaseError(undefined);
            }
            throw tmp35;
          } else if (3 === c5) {
            c4 = 1;
            throw closure_3;
          } else if (purchase === 1) {
            c6 = 3;
            throw value;
          } else if (purchase === 2) {
            c4 = 0;
            finishTransactionResult = purchase.productId;
            let productId1;
            if (purchase != null) {
              productId1 = purchase.productId;
            }
            if (finishTransactionResult === productId1) {
              setCurrentPurchase(undefined);
            }
            finishTransactionResult = purchase.productId;
            let productId3;
            if (finishTransactionResult != null) {
              productId3 = finishTransactionResult.productId;
            }
            if (finishTransactionResult === productId3) {
              setCurrentPurchaseError(undefined);
            }
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            c4 = 0;
            finishTransactionResult = purchase.productId;
            let productId4;
            if (purchase != null) {
              productId4 = purchase.productId;
            }
            if (finishTransactionResult === productId4) {
              setCurrentPurchase(undefined);
            }
            finishTransactionResult = purchase.productId;
            let productId5;
            if (finishTransactionResult != null) {
              productId5 = finishTransactionResult.productId;
            }
            if (finishTransactionResult === productId5) {
              setCurrentPurchaseError(undefined);
            }
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
        }
      } catch (tmp53) {
        closure_3 = tmp53;
        if (0 === c4) {
          c6 = 3;
          throw tmp53;
        } else if (1 === tmp55) {
          c5 = 2;
        } else {
          c5 = 3;
        }
      }
    }
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
  const tmp4Result = tmp4(function(arg0) {
    return closure_0(...arguments);
  }, items4);
  setSubscriptions(() => {
    _asyncToGenerator(true);
    return () => {
      closure_1_2(false);
      setCurrentPurchaseError(undefined);
    };
  }, []);
  let obj2 = { connected, products, promotedProductsIOS, subscriptions, purchaseHistory, availablePurchases, currentPurchase, currentPurchaseError, initConnectionError, finishTransaction: tmp4Result, getProducts: tmp5, getSubscriptions: tmp6, getAvailablePurchases: tmp7, getPurchaseHistory: tmp8, requestPurchase: tmp(tmp2[3]).requestPurchase, requestSubscription: tmp(tmp2[3]).requestSubscription };
  return obj2;
};