// === Module 13153: OrbCheckoutModalContext ===

// Module 13153 (OrbCheckoutModalContext)
import jsxProd from "jsxProd" /* 21 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7553 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SKUStore from "SKUStore" /* 5510 */;
import v1 from "v1" /* 1256 */;
import size from "module_2" /* 2 */;

function useOrbCheckoutModalContextProvider(value) {
  const skuId = value.skuId;
  const loadId = value.loadId;
  const onCheckoutSuccess = value.onCheckoutSuccess;
  let sKUOrbPrice;
  c5 = undefined;
  let redeemVirtualCurrency;
  ({ onSignFailure, order } = value);
  let obj = skuId(onCheckoutSuccess[5]);
  const items = [redeemVirtualCurrency];
  const stateFromStores = obj.useStateFromStores(items, () => loadId(onCheckoutSuccess[6]).canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser()));
  let obj1 = skuId(onCheckoutSuccess[5]);
  const items1 = [SKUStore];
  const items2 = [skuId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => SKUStore.get(skuId), items2);
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (stateFromStores1 != null) {
    applicationId = stateFromStores1.applicationId;
  }
  if (applicationId == null) {
    let tmpResult = tmp(tmp2[7]);
    applicationId = tmpResult.get1PShopApplicationIdForSKU(skuId);
  }
  tmpResult = tmp(tmp2[8]);
  sKUOrbPrice = tmpResult.useSKUOrbPrice({ sku: stateFromStores1 });
  const product = skuId(onCheckoutSuccess[9]).useFetchCollectiblesProduct(skuId).product;
  c5 = product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = c5(() => {
    if (null != sKUOrbPrice) {
      let obj = { orbPriceAmount: tmp.amount };
      return obj;
    } else if (null != c5) {
      obj = { product: tmp2, hasShopDiscount: stateFromStores };
      const productOrbPrice = obj.getProductOrbPrice(obj);
      let amount = null;
      if (null !== productOrbPrice) {
        amount = productOrbPrice.amount;
      }
      const obj1 = { orbPriceAmount: amount };
      return obj1;
    } else {
      return null;
    }
  }, items3);
  let orbPriceAmount;
  if (tmp8 != null) {
    orbPriceAmount = tmp8.orbPriceAmount;
  }
  if (null == orbPriceAmount) {
    obj = { tags: null };
    obj = { sku_id: skuId };
    obj.tags = obj;
    const result = tmp(tmp2[11]).captureBillingMessage("Orb price not found for product", obj);
    const tmpResult2 = tmp(tmp2[11]);
  }
  const tmpResult1 = skuId(onCheckoutSuccess[9]);
  redeemVirtualCurrency = skuId(onCheckoutSuccess[12]).useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure });
  redeemVirtualCurrency = redeemVirtualCurrency.redeemVirtualCurrency;
  const items4 = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency);
  obj1 = {
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
  return obj1;
}
({ useContext: c3, useCallback: closure_4, useMemo: hasOwnProperty, createContext } = noop);
const jsx = jsxProd.jsx;
let obj = { skuId: "123", skuProductLine: null, skuApplicationId: "r", loadId: "PX_16", analyticsLocations: null, analyticsSourceLocation: null, isRedeeming: null, orbRedemptionError: "lg", orbProductContext: null, onRedeemVirtualCurrency: true };
obj.loadId = v1.v4();
obj.analyticsLocations = [];
obj.onRedeemVirtualCurrency = function onRedeemVirtualCurrency() {

};
const redux = createContext(obj);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export { useOrbCheckoutModalContextProvider };
export const OrbCheckoutModalContextProvider = function OrbCheckoutModalContextProvider(onCheckoutSuccess) {
  ({ skuId, loadId, analyticsLocations } = onCheckoutSuccess);
  value = { skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess };
  ({ analyticsSourceLocation, children } = onCheckoutSuccess);
  const tmp = useOrbCheckoutModalContextProvider(value);
  value = { skuId, skuProductLine: tmp.skuProductLine, skuApplicationId: tmp.skuApplicationId, loadId, analyticsLocations: null, analyticsSourceLocation: null, orbProductContext: null, onRedeemVirtualCurrency: null, isRedeeming: null, orbRedemptionError: null };
  ({ orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = tmp);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  value.analyticsLocations = analyticsLocations;
  value.analyticsSourceLocation = analyticsSourceLocation;
  value.orbProductContext = orbProductContext;
  value.onRedeemVirtualCurrency = onRedeemVirtualCurrency;
  value.isRedeeming = isRedeeming;
  value.orbRedemptionError = orbRedemptionError;
  return <redux.Provider value={value}>{children}</redux.Provider>;
};
export const useOrbCheckoutModalContext = function useOrbCheckoutModalContext() {
  return React3(closure_9);
};