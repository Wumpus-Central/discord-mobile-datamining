// === Module 13830: openGuildLimitedAccessInfoModal ===

// Module 13830 (openGuildLimitedAccessInfoModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import noop from "module_19" /* 19 */;

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
    }
  };
  actions_AlertActionCreatorsDefault.openLazy(obj);
};