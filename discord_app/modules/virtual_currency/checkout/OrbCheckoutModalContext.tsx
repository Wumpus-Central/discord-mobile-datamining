// === Module 13467: OrbCheckoutModalContext ===

// Module 13467 (OrbCheckoutModalContext)
import jsxProd from "jsxProd" /* 21 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7798 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5729 */;
import v1 from "v1" /* 1255 */;
import size from "module_2" /* 2 */;

function useOrbCheckoutModalContextProvider(skuId) {
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  const onCheckoutSuccess = skuId.onCheckoutSuccess;
  let sKUOrbPrice;
  c5 = undefined;
  let redeemVirtualCurrency;
  ({ onSignFailure, order } = skuId);
  const items = [redeemVirtualCurrency];
  const stateFromStores = skuId(onCheckoutSuccess[5]).useStateFromStores(items, () => loadId(onCheckoutSuccess[6]).canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser()));
  let obj = skuId(onCheckoutSuccess[5]);
  const items1 = [SKUStore];
  const items2 = [skuId];
  const stateFromStores1 = skuId(onCheckoutSuccess[5]).useStateFromStores(items1, () => SKUStore.get(skuId), items2);
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (stateFromStores1 != null) {
    applicationId = stateFromStores1.applicationId;
  }
  if (applicationId == null) {
    applicationId = tmp(tmp2[7]).get1PShopApplicationIdForSKU(skuId);
    const tmpResult = tmp(tmp2[7]);
  }
  let obj2 = skuId(onCheckoutSuccess[5]);
  sKUOrbPrice = skuId(onCheckoutSuccess[8]).useSKUOrbPrice({ sku: stateFromStores1 });
  const tmpResult5 = skuId(onCheckoutSuccess[8]);
  const product = skuId(onCheckoutSuccess[9]).useFetchCollectiblesProduct(skuId).product;
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
    let obj3 = { tags: null };
    let obj4 = { sku_id: skuId };
    obj3.tags = obj4;
    const result = tmp(tmp2[11]).captureBillingMessage("Orb price not found for product", obj3);
    const tmpResult7 = tmp(tmp2[11]);
  }
  const tmpResult6 = skuId(onCheckoutSuccess[9]);
  const redeemVirtualCurrency1 = skuId(onCheckoutSuccess[12]).useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure });
  redeemVirtualCurrency = redeemVirtualCurrency1.redeemVirtualCurrency;
  const items4 = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency1);
  const tmpResult8 = skuId(onCheckoutSuccess[12]);
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
    orbRedemptionError: error
  };
}
({ useContext: c3, useCallback: closure_4, useMemo: hasOwnProperty, createContext } = noop);
const jsx = jsxProd.jsx;
let obj = { skuId: "123", skuProductLine: null, skuApplicationId: "r", loadId: "flex", analyticsLocations: null, analyticsSourceLocation: null, isRedeeming: null, orbRedemptionError: "lg", orbProductContext: null, onRedeemVirtualCurrency: true };
obj.loadId = v1.v4();
obj.analyticsLocations = [];
obj.onRedeemVirtualCurrency = function onRedeemVirtualCurrency() {

};
const redux = createContext(obj);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export { useOrbCheckoutModalContextProvider };
export const OrbCheckoutModalContextProvider = function OrbCheckoutModalContextProvider(onCheckoutSuccess) {
  ({ skuId, loadId, analyticsLocations } = onCheckoutSuccess);
  ({ analyticsSourceLocation, children } = onCheckoutSuccess);
  const tmp = useOrbCheckoutModalContextProvider({ skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess });
  const obj2 = { skuId, skuProductLine: tmp.skuProductLine, skuApplicationId: tmp.skuApplicationId, loadId, analyticsLocations: null, analyticsSourceLocation: null, orbProductContext: null, onRedeemVirtualCurrency: null, isRedeeming: null, orbRedemptionError: null };
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