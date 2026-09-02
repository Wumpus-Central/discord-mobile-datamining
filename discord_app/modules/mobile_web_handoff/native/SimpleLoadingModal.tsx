// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModal.tsx
import set from "../../../../_runtime/00002_set.js";
import _modDef4723 from "../../../actions/ModalActionCreators.tsx";
import { asyncRequireImpl } from "../../../../_runtime/02008_asyncRequireImpl.js";

const result = set.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(c3, arg1) {
  const _require = c3;
  importDefault = arg1;
  let obj = _modDef4723;
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(closure_1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(asyncRequireImpl(6171, dependencyMap.paths), obj, c3, { animation: "none" });
};
