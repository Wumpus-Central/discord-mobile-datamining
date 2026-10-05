// discord_app/modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_0;

const Keyboard = react_native.Keyboard;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  _require = arg0;
  Keyboard.dismiss();
  const obj = require("ChatInputUtils");
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  const obj2 = {
    importer() {
      let guildId;
      const promise = asyncRequire(13644, dependencyMap.paths);
      return promise.then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return <closure_0 guildId={guildId} />;
        };
      });
    },
    isDismissable: false,
  };
  const obj3 = actions_AlertActionCreatorsDefault;
  obj3.openLazy(obj2);
}
