// === Module 16536: NativeICYMIUtils ===

// Module 16536 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16538 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16537, dependencyMap.paths), obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};