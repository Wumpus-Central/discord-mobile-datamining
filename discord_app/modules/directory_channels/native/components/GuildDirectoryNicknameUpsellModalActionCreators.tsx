// === Module 12661: ? ===

// Module 12661
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4763.pushLazy(asyncRequireImpl(12662, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4763.popWithKey(c3);
  }
};