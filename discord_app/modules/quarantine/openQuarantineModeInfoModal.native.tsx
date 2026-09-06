// === Module 5522: openQuarantineModeInfoModal ===

// Module 5522 (openQuarantineModeInfoModal)
import ChatInputUtils from "ChatInputUtils" /* 4425 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import noop from "module_19" /* 19 */;

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = ChatInputUtils;
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return require("asyncRequireImpl")(paths[5], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_2_4(closure_0, {});
        };
      });
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};