// === Module 15013: OrbCheckoutHooks ===

// Module 15013 (OrbCheckoutHooks)
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7724 */;
import useRedeemVirtualCurrency from "useRedeemVirtualCurrency" /* 9537 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import SKUStore from "SKUStore" /* 6890 */;
import size from "module_2" /* 2 */;

({ useCallback: c3, useMemo: closure_4 } = noop);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/OrbCheckoutHooks.tsx");

export function useOrbProductContext(skuId) {
  skuId = skuId.skuId;
  let shouldCaptureExceptions = skuId.shouldCaptureExceptions;
  let sKUOrbPrice;
  c3 = undefined;
  const items = [UserStore];
  const stateFromStores = skuId(sKUOrbPrice[3]).useStateFromStores(items, () => stateFromStores(sKUOrbPrice[4]).canUseShopDiscounts(currentUser.getCurrentUser()));
  const obj = skuId(sKUOrbPrice[3]);
  const items1 = [SKUStore];
  const items2 = [skuId];
  const stateFromStores1 = skuId(sKUOrbPrice[3]).useStateFromStores(items1, () => SKUStore.get(skuId), items2);
  let obj2 = skuId(sKUOrbPrice[3]);
  sKUOrbPrice = skuId(sKUOrbPrice[5]).useSKUOrbPrice({ sku: stateFromStores1 });
  let productLine = null;
  if (null != stateFromStores1) {
    productLine = stateFromStores1.productLine;
  }
  let applicationId;
  if (stateFromStores1 != null) {
    applicationId = stateFromStores1.applicationId;
  }
  if (applicationId == null) {
    applicationId = tmp(tmp2[6]).get1PShopApplicationIdForSKU(skuId);
    const tmpResult = tmp(tmp2[6]);
  }
  let obj3 = skuId(sKUOrbPrice[5]);
  const product = skuId(sKUOrbPrice[7]).useFetchCollectiblesProduct(skuId).product;
  c3 = product;
  const items3 = [sKUOrbPrice, product, stateFromStores];
  const tmp8 = closure_4(() => {
    if (null != sKUOrbPrice) {
      const obj2 = { orbPriceAmount: tmp.amount };
      return obj2;
    } else if (null != c3) {
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
  if (shouldCaptureExceptions) {
    let orbPriceAmount;
    if (tmp8 != null) {
      orbPriceAmount = tmp8.orbPriceAmount;
    }
    shouldCaptureExceptions = null == orbPriceAmount;
  }
  if (shouldCaptureExceptions) {
    let obj4 = { tags: null, fingerprint: null };
    const obj5 = { sku_id: skuId };
    obj4.tags = obj5;
    obj4.fingerprint = ["orb-price-not-found-for-product"];
    const result = tmp(tmp2[9]).captureBillingMessage("Orb price not found for product", obj4);
    const tmpResult4 = tmp(tmp2[9]);
  }
  return { orbProductContext: tmp8, isLoading: null == tmp8, skuProductLine: productLine, skuApplicationId: applicationId };
}
export function useOrbCheckoutRedemption(skuId) {
  skuId = skuId.skuId;
  const loadId = skuId.loadId;
  const onCheckoutSuccess = skuId.onCheckoutSuccess;
  ({ onSignFailure, order, onSetIsSubmitting } = skuId);
  const redeemVirtualCurrency1 = useRedeemVirtualCurrency.useRedeemVirtualCurrency({ skuId, loadId, order, onSignFailure, onSetIsSubmitting });
  const redeemVirtualCurrency = redeemVirtualCurrency1.redeemVirtualCurrency;
  const obj2 = { onRedeemVirtualCurrency: null, isRedeeming: isSubmitting, orbRedemptionError: error };
  const items = [skuId, loadId, redeemVirtualCurrency, onCheckoutSuccess];
  ({ isSubmitting, error } = redeemVirtualCurrency1);
  obj2.onRedeemVirtualCurrency = React3((arg0) => {
    closure_0 = arg0;
    redeemVirtualCurrency(closure_0, loadId, (entitlements) => {
      if (onCheckoutSuccess != null) {
        const obj = { entitlements, skuId };
        tmp(obj);
      }
      closure_0(entitlements);
    });
  }, items);
  return obj2;
}