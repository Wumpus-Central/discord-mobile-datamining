// === Module 7317: SimpleLoadingModal ===

// Module 7317 (SimpleLoadingModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export const showSimpleLoadingModal = function showSimpleLoadingModal(c3, arg1) {
  _require = c3;
  importDefault = arg1;
  const obj = {};
  const merged = Object.assign(arg1);
  obj.onDismissed = function onDismissed() {
    ModalActionCreatorsDefault.popWithKey(closure_0);
    onDismissed = onDismissed.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(require("asyncRequireImpl")(7318, dependencyMap.paths), obj, c3, { animation: "none" });
};