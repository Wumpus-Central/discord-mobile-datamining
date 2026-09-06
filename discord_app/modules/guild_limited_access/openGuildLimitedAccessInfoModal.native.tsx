// discord_app/modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import actions_AlertActionCreatorsDefault from "../../actions/native/AlertActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const Keyboard = fn(17).Keyboard;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  _require = arg0;
  Keyboard.dismiss();
  let obj = require("ChatInputUtils");
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return asyncRequireImpl(13831, dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = guildId;
          return <closure_0 />;
        };
      });
    },
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
}
