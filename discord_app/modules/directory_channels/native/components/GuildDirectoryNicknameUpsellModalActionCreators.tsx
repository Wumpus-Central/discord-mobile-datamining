// === Module 12113: ? ===

// Module 12113
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4676.pushLazy(asyncRequireImpl(12114, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4676.popWithKey(c3);
  }
};