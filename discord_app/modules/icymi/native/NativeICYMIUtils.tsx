// === Module 19299: NativeICYMIUtils ===

// Module 19299 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 19301 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(19300, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
}