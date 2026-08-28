// discord_app/modules/premium/native/utils/openGiftModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4689.pushLazy(asyncRequireImpl(10392, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};