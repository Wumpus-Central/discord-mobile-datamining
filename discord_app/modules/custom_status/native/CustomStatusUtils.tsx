// === Module 9011: openEditCustomStatusModal ===

// Module 9011 (openEditCustomStatusModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const result = set.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  let obj = _modDef4676;
  obj = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequireImpl(9012, dependencyMap.paths), obj, undefined, { presentation: "modal" });
};