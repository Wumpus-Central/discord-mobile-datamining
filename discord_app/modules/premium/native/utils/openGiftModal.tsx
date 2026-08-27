// === Module 10373: openGiftModal ===

// Module 10373 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4676.pushLazy(asyncRequireImpl(10374, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};