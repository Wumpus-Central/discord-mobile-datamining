// === Module 10252: openGiftModal ===

// Module 10252 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4675.pushLazy(asyncRequireImpl(10253, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};