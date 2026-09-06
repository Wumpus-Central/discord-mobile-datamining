// === Module 11113: CustomStatusUtils ===

// Module 11113 (CustomStatusUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(11114, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};