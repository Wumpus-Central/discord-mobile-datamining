// === Module 19766: RestrictedHoursActionCreators ===

// Module 19766 (RestrictedHoursActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
function closeRestrictedHoursModal() {
  ModalActionCreatorsDefault.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export function openRestrictedHoursModal() {
  ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
    await require("asyncRequireImpl")(paths[2], paths.paths);
    return value.default;
  }), { onClose: closeRestrictedHoursModal }, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
}
export { closeRestrictedHoursModal };