// discord_app/modules/quarantine/openQuarantineModeInfoModal.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import getBestActiveInput from "../../utils/native/ChatInputUtils.tsx";
import _modDef4656 from "../../actions/native/AlertActionCreators.tsx";
import { Keyboard } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = getBestActiveInput;
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(paths[6])(paths[5], paths.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_1_4(closure_0, {});
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};