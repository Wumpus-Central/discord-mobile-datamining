// === Module 9720: openPremiumModal ===

// Module 9720 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7471, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};