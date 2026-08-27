// discord_app/modules/collectibles/native/openGiftModal.tsx
import set from "../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4676 from "../../../actions/ModalActionCreators.tsx";

let c3 = "Shop Gift Modal";
const result = set.fileFinishedImporting("modules/collectibles/native/openGiftModal.tsx");

export const ShopGiftModalKey = "Shop Gift Modal";
export const openShopGiftModal = function openShopGiftModal(arg0) {
  ({ navigationParams, skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin } = arg0);
  let obj = _modDef4676;
  obj = { skuId, analyticsLocations, lockedRecipientUser, onGiftModalDismiss, giftingOrigin };
  obj.pushLazy(asyncRequireImpl(10662, dependencyMap.paths), obj, c3, navigationParams);
};
export const closeShopGiftModal = function closeShopGiftModal() {
  _modDef4676.popWithKey(c3);
};