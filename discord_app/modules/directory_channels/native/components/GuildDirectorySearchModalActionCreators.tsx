// === Module 11784: ? ===

// Module 11784
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    _modDef4676.pushLazy(asyncRequireImpl(11785, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    _modDef4676.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};