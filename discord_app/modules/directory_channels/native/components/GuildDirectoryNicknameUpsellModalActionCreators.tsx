// === Module 12199: ? ===

// Module 12199
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4723.pushLazy(asyncRequireImpl(12200, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4723.popWithKey(c3);
  }
};