// === Module 10185: openGiftModal ===

// Module 10185 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4611.pushLazy(asyncRequireImpl(10186, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};