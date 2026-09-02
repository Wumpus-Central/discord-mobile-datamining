// === Module 16284: pushICYMIInfoModal ===

// Module 16284 (pushICYMIInfoModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 16286 */;

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef4723;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16285, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};