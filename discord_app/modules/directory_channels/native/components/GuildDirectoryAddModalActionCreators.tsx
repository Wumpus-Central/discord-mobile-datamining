// === Module 11792: ? ===

// Module 11792
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4676.pushLazy(asyncRequireImpl(11793, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    _modDef4676.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};