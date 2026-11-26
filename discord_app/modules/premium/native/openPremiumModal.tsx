// === Module 9101: openPremiumModal ===

// Module 9101 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9102, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};