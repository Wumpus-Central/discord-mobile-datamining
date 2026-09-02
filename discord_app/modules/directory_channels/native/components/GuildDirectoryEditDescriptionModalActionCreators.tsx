// === Module 12104: ? ===

// Module 12104
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4723.pushLazy(asyncRequireImpl(12105, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4723.popWithKey(c3);
  }
};