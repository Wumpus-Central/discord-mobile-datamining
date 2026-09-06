// === Module 17293: RestrictedHoursActionCreators ===

// Module 17293 (RestrictedHoursActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
function closeRestrictedHoursModal() {
  ModalActionCreatorsDefault.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  const obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[2], paths.paths);
    return arg1.default;
  }), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };