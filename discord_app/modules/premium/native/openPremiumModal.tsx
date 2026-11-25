// === Module 9059: openPremiumModal ===

// Module 9059 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/native/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(9060, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};