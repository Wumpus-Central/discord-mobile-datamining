// === Module 9424: openPremiumModal ===

// Module 9424 (openPremiumModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("components_native/premium/openPremiumModal.tsx");

export default function openPremiumModal(merged) {
  return ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(7426, dependencyMap.paths), merged, "PREMIUM_KEY", { presentation: "modal" });
};