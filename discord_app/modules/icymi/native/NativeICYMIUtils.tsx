// === Module 16309: NativeICYMIUtils ===

// Module 16309 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 16311 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(16310, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};