// discord_app/modules/parent_tools/RestrictedHoursActionCreators.native.tsx
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
function closeRestrictedHoursModal() {
  ModalActionCreatorsDefault.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  const obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(
    asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[2], paths.paths);
      return value.default;
    }),
    obj,
    RESTRICTED_HOURS_MODAL_KEY,
    { animation: "none", presentation: "fullScreenModal" },
  );
};
export { closeRestrictedHoursModal };
