// === Module 10778: CustomStatusUtils ===

// Module 10778 (CustomStatusUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10779, dependencyMap.paths), { analyticsLocations, prompt: _prompt }, undefined, { presentation: "modal" });
};