// === Module 7280: showSimpleLoadingModal ===

// Module 7280 (showSimpleLoadingModal)
import obj132 from "obj132" /* 2 */;
import _modDef5260 from "module_5260" /* 5260 */;

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
  obj.pushLazy(_require(2007)(7281, dependencyMap.paths), obj, closure_1_8, { animation: "none" });
};