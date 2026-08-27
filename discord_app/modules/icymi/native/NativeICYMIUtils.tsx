// === Module 15966: pushICYMIInfoModal ===

// Module 15966 (pushICYMIInfoModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 15968 */;

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef4676;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(15967, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};