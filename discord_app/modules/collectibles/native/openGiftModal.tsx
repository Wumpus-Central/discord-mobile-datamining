// discord_app/modules/collectibles/native/openGiftModal.tsx
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(items1) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = items1);
  const obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(asyncRequireImpl(11008, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
