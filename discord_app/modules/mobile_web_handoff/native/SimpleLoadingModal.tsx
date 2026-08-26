// === Module 6107: showSimpleLoadingModal ===

// Module 6107 (showSimpleLoadingModal)
import set from "set" /* 2 */;
import _modDef4675 from "module_4675" /* 4675 */;

const result = set.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(closure_4, arg1) {
  const _require = closure_4;
  importDefault = arg1;
  let obj = _modDef4675;
  obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    lib(closure_1_2[0]).popWithKey(closure_0);
    const onDismissed = lib.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(_require(2009)(6108, dependencyMap.paths), obj, closure_4, { animation: "none" });
};