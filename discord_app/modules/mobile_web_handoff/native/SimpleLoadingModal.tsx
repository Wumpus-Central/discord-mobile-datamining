// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModal.tsx
import set from "../../../../_runtime/00002_set.js";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";
import { asyncRequireImpl } from "../../../../_runtime/02008_asyncRequireImpl.js";

const result = set.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_4, arg1) {
  const _require = closure_4;
  importDefault = arg1;
  let obj = _modDef5265;
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(closure_1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(asyncRequireImpl(7319, dependencyMap.paths), obj, closure_4, { animation: "none" });
};