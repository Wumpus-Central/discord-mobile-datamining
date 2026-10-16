// === Module 9630: openPremiumModal ===

// Module 9630 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7353, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};