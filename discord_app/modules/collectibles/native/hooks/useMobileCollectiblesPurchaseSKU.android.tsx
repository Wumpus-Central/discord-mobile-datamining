// discord_app/modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("hasAtLeastOneGPlaySynced").fileFinishedImporting("modules/collectibles/native/hooks/useMobileCollectiblesPurchaseSKU.android.tsx");

export default function useMobileCollectiblesPurchaseSKU(product) {
  product = product.product;
  const merged = Object.assign(product, Object.create(null));
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const collectibleGoogleSkuId = require("../CollectiblesUtils.tsx") /* hasAtLeastOneGPlaySynced */.getCollectibleGoogleSkuId(product, stateFromStores);
  obj = {};
  const obj2 = require("../CollectiblesUtils.tsx") /* hasAtLeastOneGPlaySynced */;
  const merged1 = Object.assign(merged);
  obj.skuId = product.skuId;
  obj.platformSkuId = collectibleGoogleSkuId;
  obj.isFreeForStaffSelfPurchase = true;
  return require("../../../billing/native/hooks/useMobilePurchaseSKU.android.tsx")(obj);
};