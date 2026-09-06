// discord_app/modules/parent_tools/RestrictedHoursActionCreators.native.tsx
import _modDef4763 from "../../actions/ModalActionCreators.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";

const require = arg1;
function closeRestrictedHoursModal() {
  _modDef4763.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("set").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = _modDef4763;
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(
    callback(function* () {
      yield v0(closure_1_2[3])(closure_1_2[2], closure_1_2.paths);
      return arg1.default;
    }),
    obj,
    RESTRICTED_HOURS_MODAL_KEY,
    { animation: "none", presentation: "fullScreenModal" },
  );
};
export { closeRestrictedHoursModal };
