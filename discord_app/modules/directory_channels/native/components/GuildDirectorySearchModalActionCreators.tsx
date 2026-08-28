// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../../actions/ModalActionCreators.tsx";

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    _modDef4689.pushLazy(asyncRequireImpl(11804, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    _modDef4689.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};