// discord_app/modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import collectibles_CollectiblesUtils from "../CollectiblesUtils.tsx";
import useMobilePurchaseSKUDefault from "../../../billing/native/hooks/useMobilePurchaseSKU.android.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx",
);

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.assign({ product: 0 }));
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return useMobilePurchaseSKUDefault(obj);
}
