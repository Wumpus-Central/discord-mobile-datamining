// === Module 18257: NativeICYMIUtils ===

// Module 18257 (NativeICYMIUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import ICYMIInfoModalTypes from "ICYMIInfoModalTypes" /* 18259 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/icymi/native/NativeICYMIUtils.tsx");

export function pushICYMIInfoModal(arg0) {
  ({ extendedOnboarding, skipIntro } = arg0);
  const obj = ModalActionCreatorsDefault;
  obj.pushLazy(asyncRequireImpl(18258, dependencyMap.paths), { extendedOnboarding, skipIntro }, ICYMIInfoModalTypes.ICYMI_INFO_MODAL_KEY, { presentation: "fullScreenModal" });
}