// === Module 10675: openGiftModal ===

// Module 10675 (openGiftModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

const result = set.fileFinishedImporting("modules/premium/native/utils/openGiftModal.tsx");

export const openGiftModal = function openGiftModal(navigationParams) {
  const merged = Object.assign(navigationParams, Object.create(null));
  _modDef4723.pushLazy(asyncRequireImpl(10676, dependencyMap.paths), merged, "gift_modal_key", navigationParams.navigationParams);
};