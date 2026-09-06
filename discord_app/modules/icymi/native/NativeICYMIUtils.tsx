// === Module 16465: NativeICYMIUtils ===

// Module 16465 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16467 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16466, dependencyMap.paths), obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};