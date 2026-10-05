// === Module 12990: OrbCheckoutModalContext ===

// Module 12990 (OrbCheckoutModalContext)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7064 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import SKUStore from "SKUStore" /* 5695 */;
import v1_mod from "v1" /* 1266 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let createContext;
let hasOwnProperty;
let v1;
({ useContext: c3, useCallback: closure_4, useMemo: hasOwnProperty, createContext } = react);
const jsx = Fragment.jsx;
let obj = {
  skuId: "123",
  skuProductLine: null,
  skuApplicationId: "r",
  loadId: v1.v4(),
  analyticsLocations: [],
  analyticsSourceLocation: null,
  isRedeeming: null,
  orbRedemptionError: "lg",
  orbProductContext: null,
  onRedeemVirtualCurrency() {

  }
};
v1 = v1_mod;
const redux = createContext(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  let currentUser;
  let obj5;
  let onCheckoutSuccess;
  let onSignFailure;
  let order;
  let tmp11;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp = skuId;
  let obj = skuId(onCheckoutSuccess[6]);
  const cResult = obj.c(37);
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  onCheckoutSuccess = skuId.onCheckoutSuccess;
  ({ onSignFailure, order } = skuId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function n() {
      const obj = loadId(onCheckoutSuccess[7]);
      return obj.canUseShopDiscounts(currentUser.getCurrentUser());
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[8]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [SKUStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== skuId) {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
    const items2 = [skuId];
    cResult[3] = skuId;
    cResult[4] = S;
    cResult[5] = items2;
    tmp11 = items2;
  } else {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
    tmp11 = cResult[5];
  }
  const tmpResult5 = tmp(onCheckoutSuccess[8]);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp8, S, tmp11);
  if (null != stateFromStores1) {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
  }
  const tmp13 = cResult[6];
  if (stateFromStores1 != null) {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
  }
  if (tmp13 === undefined) {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
    if (cResult[9] !== stateFromStores1) {
      class S {
        constructor() {
          return SKUStore.get(skuId);
        }
      }
      tmp16[0] = stateFromStores1;
      cResult[9] = stateFromStores1;
      cResult[10] = tmp16;
    } else {
      class S {
        constructor() {
          return SKUStore.get(skuId);
        }
      }
    }
    const tmpResult6 = tmp(onCheckoutSuccess[10]);
    const sKUOrbPrice = tmpResult6.useSKUOrbPrice(tmp16);
    const tmpResult7 = tmp(onCheckoutSuccess[11]);
    const product = tmpResult7.useFetchCollectiblesProduct(skuId).product;
    if (null == sKUOrbPrice) {
      class S {
        constructor() {
          return SKUStore.get(skuId);
        }
      }
      if (null != product) {
        class S {
          constructor() {
            return SKUStore.get(skuId);
          }
        }
        const obj2 = { product, hasShopDiscount: stateFromStores };
        const tmpResult8 = tmp(onCheckoutSuccess[12]);
        const productOrbPrice = tmpResult8.getProductOrbPrice(obj2);
        cResult[13] = stateFromStores;
        cResult[14] = product;
        cResult[15] = productOrbPrice;
      }
    } else {
      class S {
        constructor() {
          return SKUStore.get(skuId);
        }
      }
    }
    if (tmp18 != null) {
      class S {
        constructor() {
          return SKUStore.get(skuId);
        }
      }
    }
    if (null == undefined) {
      class S {
        constructor() {
          return SKUStore.get(skuId);
        }
      }
      const obj3 = { tags: obj5, fingerprint: ["orb-price-not-found-for-product"] };
      obj5 = { sku_id: skuId };
      const result = obj9.captureBillingMessage("Orb price not found for product", obj3);
    }
    if (cResult[18] === loadId) {
      class S {
        constructor() {
          return SKUStore.get(skuId);
        }
      }
    }
    const obj6 = { skuId, loadId, order, onSignFailure };
    cResult[18] = loadId;
    cResult[19] = onSignFailure;
    cResult[20] = order;
    cResult[21] = skuId;
    cResult[22] = obj6;
  }
  let result1;
  if (stateFromStores1 != null) {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
  }
  if (result1 == null) {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
    result1 = obj4.get1PShopApplicationIdForSKU(skuId);
  }
  if (stateFromStores1 != null) {
    class S {
      constructor() {
        return SKUStore.get(skuId);
      }
    }
  }
  cResult[6] = undefined;
  cResult[7] = skuId;
  cResult[8] = result1;
}) : ((skuId) => {
  let error;
  let isSubmitting;
  let obj4;
  let onSignFailure;
  let order;
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  const onCheckoutSuccess = skuId.onCheckoutSuccess;
  let sKUOrbPrice;
  let c5;
  let redeemVirtualCurrency;
  let tmp = skuId;
  const tmp2 = onCheckoutSuccess;
  ({ onSignFailure, order } = skuId);
  let obj = skuId(onCheckoutSuccess[8]);
  const items = [redeemVirtualCurrency];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = loadId(onCheckoutSuccess[7]);
    return obj.canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser());
  });
  const obj2 = skuId(onCheckoutSuccess[8]);
  const items1 = [SKUStore];
  const items2 = [skuId];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => SKUStore.get(skuId), items2);
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (stateFromStores1 != null) {
    applicationId = stateFromStores1.applicationId;
  }
  if (applicationId == null) {
    const tmpResult = tmp(tmp2[9]);
    applicationId = tmpResult.get1PShopApplicationIdForSKU(skuId);
  }
  const tmpResult5 = tmp(tmp2[10]);
  sKUOrbPrice = tmpResult5.useSKUOrbPrice({ sku: stateFromStores1 });
  const tmpResult6 = tmp(tmp2[11]);
  const product = tmpResult6.useFetchCollectiblesProduct(skuId).product;
  c5 = product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = c5(() => {
    if (null != sKUOrbPrice) {
      return { orbPriceAmount: tmp.amount };
    } else if (null != c5) {
      const obj3 = { product: tmp2, hasShopDiscount: stateFromStores };
      const obj = CollectiblesProductUtils;
      const productOrbPrice = obj.getProductOrbPrice(obj3);
      let amount = null;
      if (null !== productOrbPrice) {
        amount = productOrbPrice.amount;
      }
      return { orbPriceAmount: amount };
    } else {
      return null;
    }
  }, items3);
  let orbPriceAmount;
  if (tmp8 != null) {
    orbPriceAmount = tmp8.orbPriceAmount;
  }
  if (null == orbPriceAmount) {
    let obj3 = { tags: obj4, fingerprint: ["orb-price-not-found-for-product"] };
    obj4 = { sku_id: skuId };
    const tmpResult7 = tmp(tmp2[13]);
    const result = tmpResult7.captureBillingMessage("Orb price not found for product", obj3);
  }
  const tmpResult8 = tmp(tmp2[14]);
  const redeemVirtualCurrency1 = tmpResult8.useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure });
  redeemVirtualCurrency = redeemVirtualCurrency1.redeemVirtualCurrency;
  const items4 = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency1);
  const obj5 = {
    skuId,
    skuProductLine: productLine,
    skuApplicationId: applicationId,
    loadId,
    orbProductContext: tmp8,
    onRedeemVirtualCurrency: sKUOrbPrice((arg0) => {
      let closure_0 = arg0;
      const tmp = redeemVirtualCurrency(closure_0, loadId, (entitlements) => {
        if (onCheckoutSuccess != null) {
          const obj = { entitlements, skuId };
          tmp(obj);
        }
        closure_0(entitlements);
      });
    }, items4),
    isRedeeming: isSubmitting,
    orbRedemptionError: error
  };
  return obj5;
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let analyticsLocations;
  let analyticsSourceLocation;
  let children;
  let isRedeeming;
  let loadId;
  let onCheckoutSuccess;
  let onRedeemVirtualCurrency;
  let orbProductContext;
  let orbRedemptionError;
  let skuApplicationId;
  let skuId;
  let skuProductLine;
  const obj = react2;
  const cResult = obj.c(20);
  ({ skuId, loadId, analyticsSourceLocation, analyticsLocations, onCheckoutSuccess, children } = arg0);
  if (cResult[0] === loadId) {
    if (cResult[1] === onCheckoutSuccess) {
      let tmp2;
      let tmp5;
      if (cResult[2] === skuId) {
        tmp2 = cResult[3];
      }
      ({ orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError, skuProductLine, skuApplicationId } = closure_10(tmp2));
      closure_10(tmp2);
      if (cResult[4] !== analyticsLocations) {
        let items = analyticsLocations;
        if (analyticsLocations == null) {
          items = [];
        }
        cResult[4] = analyticsLocations;
        cResult[5] = items;
        tmp5 = items;
      } else {
        tmp5 = cResult[5];
      }
      if (cResult[6] === analyticsSourceLocation) {
        if (cResult[7] === isRedeeming) {
          if (cResult[8] === loadId) {
            if (cResult[9] === onRedeemVirtualCurrency) {
              if (cResult[10] === orbProductContext) {
                if (cResult[11] === orbRedemptionError) {
                  if (cResult[12] === skuApplicationId) {
                    if (cResult[13] === skuId) {
                      if (cResult[14] === skuProductLine) {
                        let tmp7;
                        if (cResult[15] === tmp5) {
                          tmp7 = cResult[16];
                        }
                        if (cResult[17] === children) {
                          let tmp8;
                          if (cResult[18] === tmp7) {
                            tmp8 = cResult[19];
                          }
                          return tmp8;
                        }
                        const tmp11 = <redux.Provider value={tmp7}>{children}</redux.Provider>;
                        cResult[17] = children;
                        cResult[18] = tmp7;
                        cResult[19] = tmp11;
                        tmp8 = tmp11;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj3 = { skuId, skuProductLine, skuApplicationId, loadId, analyticsLocations: tmp5, analyticsSourceLocation, orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError };
      cResult[6] = analyticsSourceLocation;
      cResult[7] = isRedeeming;
      cResult[8] = loadId;
      cResult[9] = onRedeemVirtualCurrency;
      cResult[10] = orbProductContext;
      cResult[11] = orbRedemptionError;
      cResult[12] = skuApplicationId;
      cResult[13] = skuId;
      cResult[14] = skuProductLine;
      cResult[15] = tmp5;
      cResult[16] = obj3;
      tmp7 = obj3;
    }
  }
  const obj4 = { skuId, loadId, onCheckoutSuccess };
  cResult[0] = loadId;
  cResult[1] = onCheckoutSuccess;
  cResult[2] = skuId;
  cResult[3] = obj4;
  tmp2 = obj4;
}) : ((onCheckoutSuccess) => {
  let analyticsLocations;
  let analyticsSourceLocation;
  let children;
  let isRedeeming;
  let loadId;
  let onRedeemVirtualCurrency;
  let orbProductContext;
  let orbRedemptionError;
  let skuId;
  ({ skuId, loadId, analyticsLocations } = onCheckoutSuccess);
  const obj = { skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess };
  ({ analyticsSourceLocation, children } = onCheckoutSuccess);
  const tmp = closure_10(obj);
  const obj2 = { skuId, skuProductLine: tmp.skuProductLine, skuApplicationId: tmp.skuApplicationId, loadId, analyticsLocations, analyticsSourceLocation, orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError };
  ({ orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = tmp);
  const Provider = redux.Provider;
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  return <Provider value={obj2}>{children}</Provider>;
});
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let result1 = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export const useOrbCheckoutModalContextProvider = tmp3;
export const OrbCheckoutModalContextProvider = tmp4;
export const useOrbCheckoutModalContext = () => _false(redux);