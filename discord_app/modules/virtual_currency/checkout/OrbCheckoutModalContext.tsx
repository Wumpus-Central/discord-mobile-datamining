// discord_app/modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx
import set from "../../../../_runtime/00002_set.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import noop from "../../../../_runtime/00019_noop.js";
import closure_6 from "../../../stores/UserStore.tsx";
import closure_7 from "../../../stores/game_store/SKUStore.tsx";
import v1 from "../../../../_runtime/00514_v1.js";

function useOrbCheckoutModalContextProvider(value) {
  const skuId = value.skuId;
  const loadId = value.loadId;
  const onCheckoutSuccess = value.onCheckoutSuccess;
  let stateFromStores;
  let sKUOrbPrice;
  let callback2;
  let redeemVirtualCurrency;
  ({ onSignFailure, order } = value);
  let obj = skuId(onCheckoutSuccess[5]);
  const items = [redeemVirtualCurrency];
  stateFromStores = obj.useStateFromStores(items, () => loadId(onCheckoutSuccess[6]).canUseShopDiscounts(redeemVirtualCurrency.getCurrentUser()));
  obj1 = skuId(onCheckoutSuccess[5]);
  const items1 = [closure_7];
  const items2 = [skuId];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_7.get(skuId), items2);
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
  callback2 = product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = callback2(() => {
    if (null != sKUOrbPrice) {
      let obj = { orbPriceAmount: null };
      obj[0] = tmp.amount;
      return obj;
    } else if (null != c5) {
      obj = skuId(onCheckoutSuccess[10]);
      obj = { product: null, hasShopDiscount: null };
      obj[0] = tmp2;
      obj[1] = stateFromStores;
      const productOrbPrice = obj.getProductOrbPrice(obj);
      let amount = null;
      if (null !== productOrbPrice) {
        amount = productOrbPrice.amount;
      }
      obj1 = { orbPriceAmount: null };
      obj1[0] = amount;
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
    obj = { sku_id: null };
    obj[0] = skuId;
    obj[0] = obj;
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
      redeemVirtualCurrency(closure_0, loadId, (arg0) => {
        if (closure_1_2 != null) {
          const obj = { entitlements: null, skuId: null };
          obj[0] = arg0;
          obj[1] = callback;
          tmp(obj);
        }
        callback(arg0);
      });
    }, items4),
    isRedeeming: isSubmitting,
    orbRedemptionError: error
  };
  return obj1;
}
({ useContext: c3, useCallback: c4, useMemo: c5, createContext } = noop);
const jsx = jsxProd.jsx;
let obj = { skuId: "123", skuProductLine: null, skuApplicationId: "r", loadId: "PX_16", analyticsLocations: null, analyticsSourceLocation: null, isRedeeming: null, orbRedemptionError: "lg", orbProductContext: null, onRedeemVirtualCurrency: true };
obj[3] = v1.v4();
obj[4] = [];
obj[9] = function onRedeemVirtualCurrency() {

};
let closure_9 = createContext(obj);
let result = set.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutModalContext.tsx");

export { useOrbCheckoutModalContextProvider };
export const OrbCheckoutModalContextProvider = function OrbCheckoutModalContextProvider(onCheckoutSuccess) {
  ({ skuId, loadId, analyticsLocations } = onCheckoutSuccess);
  let value = { skuId, loadId, onCheckoutSuccess: onCheckoutSuccess.onCheckoutSuccess };
  ({ analyticsSourceLocation, children } = onCheckoutSuccess);
  const tmp = useOrbCheckoutModalContextProvider(value);
  value = { skuId, skuProductLine: tmp.skuProductLine, skuApplicationId: tmp.skuApplicationId, loadId, analyticsLocations: null, analyticsSourceLocation: null, orbProductContext: null, onRedeemVirtualCurrency: null, isRedeeming: null, orbRedemptionError: null };
  ({ orbProductContext, onRedeemVirtualCurrency, isRedeeming, orbRedemptionError } = tmp);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  value[4] = analyticsLocations;
  value[5] = analyticsSourceLocation;
  value[6] = orbProductContext;
  value[7] = onRedeemVirtualCurrency;
  value[8] = isRedeeming;
  value[9] = orbRedemptionError;
  return <redux.Provider value={value}>{children}</redux.Provider>;
};
export const useOrbCheckoutModalContext = function useOrbCheckoutModalContext() {
  return callback(closure_9);
};