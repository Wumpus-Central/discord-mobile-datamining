// === Module 15721: pushICYMIInfoModal ===

// Module 15721 (pushICYMIInfoModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 15723 */;

const result = obj132.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(15722, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};