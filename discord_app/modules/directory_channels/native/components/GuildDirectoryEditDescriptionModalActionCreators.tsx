// === Module 11530: ? ===

// Module 11530
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef5265.pushLazy(asyncRequireImpl(11531, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef5265.popWithKey(c3);
  }
};