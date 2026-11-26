// === Module 11113: utils/openGiftModal ===

// Module 11113 (utils/openGiftModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.assign({ navigationParams: 0 }));
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11114, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
}