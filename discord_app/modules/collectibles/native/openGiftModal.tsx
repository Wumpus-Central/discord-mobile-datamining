// discord_app/modules/collectibles/native/openGiftModal.tsx
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c3 = "Shop Gift Modal";
const result = size.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(items1) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = items1);
  ModalActionCreatorsDefault.pushLazy(
    asyncRequireImpl(11262, dependencyMap.paths),
    { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin },
    c3,
    navigationParams,
  );
};
export const closeShopGiftModal = function closeShopGiftModal() {
  ModalActionCreatorsDefault.popWithKey(c3);
};
