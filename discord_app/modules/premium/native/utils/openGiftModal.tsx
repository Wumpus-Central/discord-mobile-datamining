// === Module 10661: openGiftModal ===

// Module 10661 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4763.pushLazy(asyncRequireImpl(10662, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};