// === Module 12869: GuildDirectorySearchModalActionCreators ===

// Module 12869 (GuildDirectorySearchModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12870, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};