// === Module 11834: ? ===

// Module 11834
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import _modDef5260 from "module_5260" /* 5260 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef5260.pushLazy(asyncRequireImpl(11835, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef5260.popWithKey(c3);
  }
};