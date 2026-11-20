// === Module 8935: CustomStatusUtils ===

// Module 8935 (CustomStatusUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(8936, dependencyMap.paths), { analyticsLocations, prompt: _prompt }, undefined, { presentation: "modal" });
}