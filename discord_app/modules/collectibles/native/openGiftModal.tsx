// === Module 13874: openGiftModal ===

// Module 13874 (openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(items1) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = items1);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13875, dependencyMap.paths), { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin }, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};