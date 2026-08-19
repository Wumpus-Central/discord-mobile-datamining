// === Module 9590: ShopGiftModalKey ===

// Module 9590 (ShopGiftModalKey)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

let c3 = "Shop Gift Modal";
const result = obj132.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(items1) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = items1);
  const obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(asyncRequireImpl(9591, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  _modDef5260.popWithKey(c3);
};