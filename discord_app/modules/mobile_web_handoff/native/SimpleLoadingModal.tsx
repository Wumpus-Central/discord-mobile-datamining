// === Module 6041: showSimpleLoadingModal ===

// Module 6041 (showSimpleLoadingModal)
import set from "set" /* 2 */;
import _modDef4611 from "module_4611" /* 4611 */;

const result = set.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_4, arg1) {
  const _require = closure_4;
  importDefault = arg1;
  let obj = _modDef4611;
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(closure_1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(_require(2009)(6042, dependencyMap.paths), obj, closure_4, { animation: "none" });
};