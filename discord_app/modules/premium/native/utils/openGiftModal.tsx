// === Module 10415: openGiftModal ===

// Module 10415 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4691.pushLazy(asyncRequireImpl(10416, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};