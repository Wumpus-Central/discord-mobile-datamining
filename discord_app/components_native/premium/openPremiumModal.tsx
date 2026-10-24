// === Module 9792: openPremiumModal ===

// Module 9792 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7522, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};