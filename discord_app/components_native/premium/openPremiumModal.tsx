// === Module 9393: openPremiumModal ===

// Module 9393 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7129, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};