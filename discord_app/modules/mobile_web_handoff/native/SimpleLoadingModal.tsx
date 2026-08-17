// discord_app/modules/mobile_web_handoff/native/SimpleLoadingModal.tsx
import set from "set" /* 2 */;
import _modDef5260 from "module_5260" /* 5260 */;
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";

const result = set.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_4, arg1) {
  const _require = closure_4;
  importDefault = arg1;
  let obj = _modDef5260;
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(closure_1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(_asyncRequireImpl(7281, dependencyMap.paths), obj, closure_4, { animation: "none" });
};