// === Module 10216: SimpleLoadingModal ===

// Module 10216 (SimpleLoadingModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const result = size.fileFinishedImporting("modules/mobile_web_handoff/native/SimpleLoadingModal.tsx");

export function showSimpleLoadingModal(c3, arg1) {
  _require = c3;
  importDefault = arg1;
  const obj = ModalActionCreatorsDefault;
  const obj2 = {};
  const merged = Object.assign(arg1);
  obj2.onDismissed = function onDismissed() {
    ModalActionCreatorsDefault.popWithKey(closure_0);
    onDismissed = onDismissed.onDismissed;
    if (onDismissed != null) {
      onDismissed();
    }
  };
  obj.pushLazy(require("asyncRequireImpl")(10217, dependencyMap.paths), obj2, c3, { animation: "none" });
}