// discord_app/modules/quarantine/openQuarantineModeInfoModal.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import ChatInputUtils from "../../utils/native/ChatInputUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const Keyboard = react_native.Keyboard;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  let paths;
  Keyboard.dismiss();
  let obj = ChatInputUtils;
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  const obj2 = {
    importer() {
      const promise = require("asyncRequire")(paths[5], paths.paths);
      return promise.then((result) => {
        let closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          return closure_2_4(closure_0, obj);
        };
      });
    },
    isDismissable: false,
  };
  const obj3 = actions_AlertActionCreatorsDefault;
  obj3.openLazy(obj2);
}
