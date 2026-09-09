// === Module 16499: NativeICYMIUtils ===

// Module 16499 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16501 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = { extendedOnboarding, skipIntro };
  obj.pushLazy(asyncRequireImpl(16500, dependencyMap.paths), obj, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};