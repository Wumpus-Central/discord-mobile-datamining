// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx");

export default {
  open(channel) {
    ModalActionCreators.pushLazy(asyncRequireImpl(11673, dependencyMap.paths), { channel: channel.channel }, GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
  close() {
    ModalActionCreators.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  }
};