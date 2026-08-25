// === Module 15822: pushICYMIInfoModal ===

// Module 15822 (pushICYMIInfoModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;
import ICYMI_INFO_MODAL_KEY from "ICYMI_INFO_MODAL_KEY" /* 15824 */;

const result = set.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  let obj = _modDef4611;
  obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(15823, dependencyMap.paths), obj, ICYMI_INFO_MODAL_KEY.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};