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
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = collectibles_CollectiblesUtils.getCollectibleGoogleSkuId(product, stateFromStores);
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.skuId = product.skuId;
  obj3.platformSkuId = collectibleGoogleSkuId;
  obj3.isFreeForStaffSelfPurchase = true;
  return useMobilePurchaseSKUDefault(obj3);
}
