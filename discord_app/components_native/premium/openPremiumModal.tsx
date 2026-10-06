// === Module 8943: openPremiumModal ===

// Module 8943 (openPremiumModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  const obj = ModalActionCreatorsDefault;
  return obj.pushLazy(asyncRequire(6929, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};