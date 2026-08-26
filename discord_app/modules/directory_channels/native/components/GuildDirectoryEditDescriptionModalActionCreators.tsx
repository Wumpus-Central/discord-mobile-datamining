// === Module 11954: ? ===

// Module 11954
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4675.pushLazy(asyncRequireImpl(11955, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4675.popWithKey(c3);
  }
};