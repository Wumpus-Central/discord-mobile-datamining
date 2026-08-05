import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
// discord_app/modules/premium/native/utils/openGiftModal.tsx
const result = require("asyncRequireImpl").fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  ModalActionCreators.pushLazy(asyncRequireImpl /* asyncRequireImpl */(9950, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};