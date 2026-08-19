// === Module 16506: closeRestrictedHoursModal ===

// Module 16506 (closeRestrictedHoursModal)
import _modDef5260 from "module_5260" /* 5260 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function closeRestrictedHoursModal() {
  _modDef5260.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("obj132").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  const obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(function*() {
    yield v0(closure_1_2[3])(closure_1_2[2], closure_1_2.paths);
    return arg1.default;
  }), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };