// === Module 9290: openEditCustomStatusModal ===

// Module 9290 (openEditCustomStatusModal)
import obj132 from "obj132" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

const result = obj132.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9291, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};