// === Module 9794: openPremiumModal ===

// Module 9794 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7523, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};