// === Module 11881: ? ===

// Module 11881
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4611 from "module_4611" /* 4611 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4611.pushLazy(asyncRequireImpl(11882, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4611.popWithKey(c3);
  }
};