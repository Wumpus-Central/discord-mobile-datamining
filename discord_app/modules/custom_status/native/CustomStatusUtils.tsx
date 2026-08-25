// === Module 9600: openEditCustomStatusModal ===

// Module 9600 (openEditCustomStatusModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef4611;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9601, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};