// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../../actions/ModalActionCreators.tsx";

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    _modDef5265.pushLazy(asyncRequireImpl(11517, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    _modDef5265.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};