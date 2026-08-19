// === Module 10295: openGiftModal ===

// Module 10295 (openGiftModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const result = obj132.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef5260.pushLazy(asyncRequireImpl(10296, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};