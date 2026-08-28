// === Module 10391: openGiftModal ===

// Module 10391 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4689.pushLazy(asyncRequireImpl(10392, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};