// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModal.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";

const result = obj132.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_1_8, arg1) {
  const _require = closure_1_8;
  importDefault = arg1;
  const obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(dependencyMap[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(asyncRequireImpl(7281, dependencyMap.paths), obj, closure_1_8, { animation: "none" });
};