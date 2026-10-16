// === Module 17540: NativeICYMIUtils ===

// Module 17540 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 17542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export const pushICYMIInfoModal = function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(17541, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
};