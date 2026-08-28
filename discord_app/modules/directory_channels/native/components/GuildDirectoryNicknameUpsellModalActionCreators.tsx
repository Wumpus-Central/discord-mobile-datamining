// === Module 12132: ? ===

// Module 12132
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4689.pushLazy(asyncRequireImpl(12133, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4689.popWithKey(c3);
  }
};