// discord_app/modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../_runtime/00576_c.js";
import CollectiblesProductUtils from "../../collectibles/utils/CollectiblesProductUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import v1 from "../../../../_runtime/01279_v1.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import "ReactCompilerGating";
import size from "../../../../_runtime/metro/00002__.js";

({ useContext: c3, useCallback: closure_4, useMemo: hasOwnProperty, createContext } = noop);
const jsx = jsxProd.jsx;
let obj = {
  skuId: "123",
  skuProductLine: null,
  skuApplicationId: "r",
  loadId: "Set",
  analyticsLocations: null,
  analyticsSourceLocation: null,
  isRedeeming: null,
  orbRedemptionError: "lg",
  orbProductContext: null,
  onRedeemVirtualCurrency: true,
};
obj.loadId = v1.v4();
obj.analyticsLocations = [];
obj.onRedeemVirtualCurrency = function onRedeemVirtualCurrency() {};
const redux = createContext(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useOrbCheckoutModalContextProvider(skuId) {
      const cResult = skuId(onCheckoutSuccess[6]).c(37);
      skuId = skuId.skuId;
      const loadId = skuId.loadId;
      onCheckoutSuccess = skuId.onCheckoutSuccess;
      ({ onSignFailure, order } = skuId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function n() {
          return loadId(onCheckoutSuccess[7]).canUseShopDiscounts(currentUser.getCurrentUser());
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = skuId(onCheckoutSuccess[6]);
      const stateFromStores = skuId(onCheckoutSuccess[8]).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SKUStore];
        cResult[2] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== skuId) {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
        const items2 = [skuId];
        cResult[3] = skuId;
        cResult[4] = P;
        cResult[5] = items2;
        let tmp11 = items2;
      } else {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
        tmp11 = cResult[5];
      }
      const tmpResult = skuId(onCheckoutSuccess[8]);
      const stateFromStores1 = skuId(onCheckoutSuccess[8]).useStateFromStores(tmp8, P, tmp11);
      if (null != stateFromStores1) {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
      }
      if (stateFromStores1 != null) {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
      }
      if (cResult[6] === undefined) {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
        if (cResult[9] !== stateFromStores1) {
          class P {
            constructor() {
              return closure_7.get(skuId);
            }
          }
          tmp15[0] = stateFromStores1;
          cResult[9] = stateFromStores1;
          cResult[10] = tmp15;
        } else {
          class P {
            constructor() {
              return closure_7.get(skuId);
            }
          }
        }
        const sKUOrbPrice = tmp(tmp2[10]).useSKUOrbPrice(tmp15);
        const tmpResult6 = tmp(tmp2[10]);
        const product = tmp(tmp2[11]).useFetchCollectiblesProduct(skuId).product;
        if (null == sKUOrbPrice) {
          class P {
            constructor() {
              return closure_7.get(skuId);
            }
          }
          if (null != product) {
            class P {
              constructor() {
                return closure_7.get(skuId);
              }
            }
            const obj2 = { product, hasShopDiscount: stateFromStores };
            const productOrbPrice = tmp(tmp2[12]).getProductOrbPrice(obj2);
            cResult[13] = stateFromStores;
            cResult[14] = product;
            cResult[15] = productOrbPrice;
            const tmpResult8 = tmp(tmp2[12]);
          }
        } else {
          class P {
            constructor() {
              return closure_7.get(skuId);
            }
          }
        }
        if (tmp17 != null) {
          class P {
            constructor() {
              return closure_7.get(skuId);
            }
          }
        }
        if (null == undefined) {
          class P {
            constructor() {
              return closure_7.get(skuId);
            }
          }
          const obj3 = { tags: null, fingerprint: null };
          const obj5 = { sku_id: skuId };
          obj3.tags = obj5;
          obj3.fingerprint = ["orb-price-not-found-for-product"];
          const result = obj9.captureBillingMessage("Orb price not found for product", obj3);
        }
        if (cResult[18] === loadId) {
          class P {
            constructor() {
              return closure_7.get(skuId);
            }
          }
        }
        const obj6 = { skuId, loadId, order, onSignFailure };
        cResult[18] = loadId;
        cResult[19] = onSignFailure;
        cResult[20] = order;
        cResult[21] = skuId;
        cResult[22] = obj6;
        const tmpResult7 = tmp(tmp2[11]);
      }
      let result1;
      if (stateFromStores1 != null) {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
      }
      if (result1 == null) {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
        result1 = obj4.get1PShopApplicationIdForSKU(skuId);
      }
      if (stateFromStores1 != null) {
        class P {
          constructor() {
            return closure_7.get(skuId);
          }
        }
      }
      cResult[6] = undefined;
      cResult[7] = skuId;
      cResult[8] = result1;
      const tmpResult5 = skuId(onCheckoutSuccess[8]);
    }
  : function useOrbCheckoutModalContextProvider(skuId) {
      skuId = skuId.skuId;
      const loadId = skuId.loadId;
      const onCheckoutSuccess = skuId.onCheckoutSuccess;
      let sKUOrbPrice;
      c5 = undefined;
      let redeemVirtualCurrency;
      ({ onSignFailure, order } = skuId);
      const items = [redeemVirtualCurrency];
      const stateFromStores = skuId(onCheckoutSuccess[8]).useStateFromStores(items, () =>
        loadId(onCheckoutSuccess[7]).canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser()),
      );
      let obj = skuId(onCheckoutSuccess[8]);
      const items1 = [SKUStore];
      const items2 = [skuId];
      const stateFromStores1 = skuId(onCheckoutSuccess[8]).useStateFromStores(
        items1,
        () => SKUStore.get(skuId),
        items2,
      );
      let productLine = null;
      if (null != stateFromStores1) {
        productLine = stateFromStores1.productLine;
      }
      let applicationId;
      if (stateFromStores1 != null) {
        applicationId = stateFromStores1.applicationId;
      }
      if (applicationId == null) {
        applicationId = tmp(tmp2[9]).get1PShopApplicationIdForSKU(skuId);
        const tmpResult = tmp(tmp2[9]);
      }
      let obj2 = skuId(onCheckoutSuccess[8]);
      sKUOrbPrice = skuId(onCheckoutSuccess[10]).useSKUOrbPrice({ sku: stateFromStores1 });
      const tmpResult5 = skuId(onCheckoutSuccess[10]);
      const product = skuId(onCheckoutSuccess[11]).useFetchCollectiblesProduct(skuId).product;
      c5 = product;
      const items3 = [sKUOrbPrice, product, stateFromStores];
      const tmp8 = c5(() => {
        if (null != sKUOrbPrice) {
          const obj2 = { orbPriceAmount: tmp.amount };
          return obj2;
        } else if (null != c5) {
          const obj3 = { product: tmp2, hasShopDiscount: stateFromStores };
          const productOrbPrice = CollectiblesProductUtils.getProductOrbPrice(obj3);
          let amount = null;
          if (null !== productOrbPrice) {
            amount = productOrbPrice.amount;
          }
          const obj4 = { orbPriceAmount: amount };
          return obj4;
        } else {
          return null;
        }
      }, items3);
      let orbPriceAmount;
      if (tmp8 != null) {
        orbPriceAmount = tmp8.orbPriceAmount;
      }
      if (null == orbPriceAmount) {
        let obj3 = { tags: null, fingerprint: null };
        let obj4 = { sku_id: skuId };
        obj3.tags = obj4;
        obj3.fingerprint = ["orb-price-not-found-for-product"];
        const result = tmp(tmp2[13]).captureBillingMessage("Orb price not found for product", obj3);
        const tmpResult7 = tmp(tmp2[13]);
      }
      const tmpResult6 = skuId(onCheckoutSuccess[11]);
      const redeemVirtualCurrency1 = skuId(onCheckoutSuccess[14]).useRedeemVirtualCurrency({
        skuId,
        loadId,
        order,
        onSignFailure,
      });
      redeemVirtualCurrency = redeemVirtualCurrency1.redeemVirtualCurrency;
      const items4 = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
      ({ isSubmitting, error } = redeemVirtualCurrency1);
      const tmpResult8 = skuId(onCheckoutSuccess[14]);
      return {
        skuId,
        skuProductLine: productLine,
        skuApplicationId: applicationId,
        loadId,
        orbProductContext: tmp8,
        onRedeemVirtualCurrency: sKUOrbPrice((arg0) => {
          closure_0 = arg0;
          redeemVirtualCurrency(closure_0, loadId, (entitlements) => {
            if (onCheckoutSuccess != null) {
              const obj = { entitlements, skuId };
              tmp(obj);
            }
            closure_0(entitlements);
          });
        }, items4),
        isRedeeming: isSubmitting,
        orbRedemptionError: error,
      };
    };
let closure_10 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let result1 = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export const useOrbCheckoutModalContextProvider = tmp3;
export const OrbCheckoutModalContextProvider = ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbCheckoutModalContextProvider(arg0) {
      const cResult = c.c(20);
      ({ skuId, loadId, analyticsSourceLocation, analyticsLocations, onCheckoutSuccess, children } = arg0);
      if (cResult[0] === loadId) {
        if (cResult[1] === onCheckoutSuccess) {
          if (cResult[2] === skuId) {
            let tmp2 = cResult[3];
          }
          ({
            orbProductContext,
            onRedeemVirtualCurrency,
            isRedeeming,
            orbRedemptionError,
            skuProductLine,
            skuApplicationId,
          } = closure_10(tmp2));
          if (cResult[4] !== analyticsLocations) {
            let items = analyticsLocations;
            if (analyticsLocations == null) {
              items = [];
            }
            cResult[4] = analyticsLocations;
            cResult[5] = items;
            let tmp5 = items;
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
                            if (cResult[15] === tmp5) {
                              let tmp7 = cResult[16];
                            }
                            if (cResult[17] === children) {
                              if (cResult[18] === tmp7) {
                                let tmp8 = cResult[19];
                              }
                              return tmp8;
                            }
                            const obj2 = { value: tmp7, children };
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
          const obj3 = {
            skuId,
            skuProductLine,
            skuApplicationId,
            loadId,
            analyticsLocations: tmp5,
            analyticsSourceLocation,
            orbProductContext,
            onRedeemVirtualCurrency,
            isRedeeming,
            orbRedemptionError,
          };
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
          const tmp4 = closure_10(tmp2);
        }
      }
      const obj4 = { skuId, loadId, onCheckoutSuccess };
      cResult[0] = loadId;
      cResult[1] = onCheckoutSuccess;
      cResult[2] = skuId;
      cResult[3] = obj4;
      tmp2 = obj4;
    }
  : function OrbCheckoutModalContextProvider(onCheckoutSuccess) {
      ({ skuId, loadId, analyticsLocations } = onCheckoutSuccess);
      ({ analyticsSourceLocation, children } = onCheckoutSuccess);
      const tmp = closure_10({ skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess });
      const obj2 = {
        skuId,
        skuProductLine: tmp.skuProductLine,
        skuApplicationId: tmp.skuApplicationId,
        loadId,
        analyticsLocations: null,
        analyticsSourceLocation: null,
        orbProductContext: null,
        onRedeemVirtualCurrency: null,
        isRedeeming: null,
        orbRedemptionError: null,
      };
      ({ orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = tmp);
      if (analyticsLocations == null) {
        analyticsLocations = [];
      }
      obj2.analyticsLocations = analyticsLocations;
      obj2.analyticsSourceLocation = analyticsSourceLocation;
      obj2.orbProductContext = orbProductContext;
      obj2.onRedeemVirtualCurrency = onRedeemVirtualCurrency;
      obj2.isRedeeming = isRedeeming;
      obj2.orbRedemptionError = orbRedemptionError;
      return <redux.Provider value={obj2}>{children}</redux.Provider>;
    };
export const useOrbCheckoutModalContext = function useOrbCheckoutModalContext() {
  return React3(closure_9);
};
