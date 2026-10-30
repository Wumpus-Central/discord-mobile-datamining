// === Module 14375: openGiftModal ===

// Module 14375 (openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export function openShopGiftModal(items1) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = items1);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14376, dependencyMap.paths), { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin }, c3, navigationParams);
}
export function closeShopGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
}