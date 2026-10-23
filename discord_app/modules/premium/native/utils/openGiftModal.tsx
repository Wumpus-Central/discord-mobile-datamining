// === Module 10423: utils/openGiftModal ===

// Module 10423 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10424, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};