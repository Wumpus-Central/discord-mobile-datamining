// discord_app/modules/premium/native/utils/openGiftModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef5260.pushLazy(asyncRequireImpl(10296, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};