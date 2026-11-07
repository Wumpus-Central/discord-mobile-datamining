// === Module 11538: CustomStatusUtils ===

// Module 11538 (CustomStatusUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11539, dependencyMap.paths), { analyticsLocations, prompt: _prompt }, undefined, { presentation: "modal" });
}