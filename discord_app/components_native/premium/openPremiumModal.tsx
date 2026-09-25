// === Module 8687: openPremiumModal ===

// Module 8687 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(6827, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};