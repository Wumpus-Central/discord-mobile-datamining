// === Module 11102: openGiftModal ===

// Module 11102 (openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(items1) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = items1);
  const obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(asyncRequireImpl(11103, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};