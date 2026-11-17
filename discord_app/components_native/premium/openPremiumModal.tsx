// === Module 9591: openPremiumModal ===

// Module 9591 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9592, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};