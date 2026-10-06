// discord_app/modules/premium/native/utils/openGiftModal.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  navigationParams = navigationParams.navigationParams;
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequire(10406, dependencyMap.paths), merged, "gift_modal_key", navigationParams);
};
