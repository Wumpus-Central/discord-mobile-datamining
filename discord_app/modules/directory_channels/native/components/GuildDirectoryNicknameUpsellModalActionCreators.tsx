// === Module 12435: ? ===

// Module 12435
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4724.pushLazy(asyncRequireImpl(12436, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4724.popWithKey(c3);
  }
};