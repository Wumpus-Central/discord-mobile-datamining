// discord_app/modules/premium/native/utils/openGiftModal.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../../actions/ModalActionCreators.tsx";

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4763.pushLazy(
    asyncRequireImpl(10662, dependencyMap.paths),
    merged,
    "gift_modal_key",
    navigationParams.navigationParams,
  );
};
