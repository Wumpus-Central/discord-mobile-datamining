// discord_app/modules/quarantine/openQuarantineModeInfoModal.native.tsx
import ChatInputUtils from "../../utils/native/ChatInputUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";

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
    },
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
}
