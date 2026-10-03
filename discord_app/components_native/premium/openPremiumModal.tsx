// === Module 8914: openPremiumModal ===

// Module 8914 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(6918, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};