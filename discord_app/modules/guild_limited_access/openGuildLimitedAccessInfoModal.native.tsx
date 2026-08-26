// discord_app/modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import _modDef4809 from "../../actions/native/AlertActionCreators.tsx";
import { Keyboard } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import { getBestActiveInput } from "../../utils/native/ChatInputUtils.tsx";

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  const _require = arg0;
  Keyboard.dismiss();
  let obj = getBestActiveInput;
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(closure_1_2[6])(closure_1_2[5], closure_1_2.paths).then((arg0) => {
        closure_0 = arg0.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4809.openLazy(obj);
};