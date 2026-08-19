// discord_app/modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import _modDef4656 from "../../actions/native/AlertActionCreators.tsx";
import { Keyboard } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import { getBestActiveInput } from "../../utils/native/ChatInputUtils.tsx";

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

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
      return callback(dependencyMap[6])(dependencyMap[5], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};