// discord_app/modules/premium/native/utils/openGiftModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef4724 from "../../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4724.pushLazy(
    asyncRequireImpl(10680, dependencyMap.paths),
    merged,
    "gift_modal_key",
    navigationParams.navigationParams,
  );
};
