// discord_app/modules/parent_tools/RestrictedHoursActionCreators.native.tsx
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

function closeRestrictedHoursModal() {
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let paths;
  const obj = ModalActionCreatorsDefault;
  const obj2 = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(
    _asyncToGenerator(async () => {
      let c0;
      let c1;
      await require("asyncRequire")(paths[2], paths.paths);
      return value.default;
    }),
    obj2,
    RESTRICTED_HOURS_MODAL_KEY,
    { animation: "none", presentation: "fullScreenModal" },
  );
};
export { closeRestrictedHoursModal };
