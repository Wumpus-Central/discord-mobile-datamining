// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx",
);

export default {
  open(channel) {
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(12301, dependencyMap.paths),
      { channel: channel.channel },
      GUILD_DIRECTORY_SEARCH_MODAL_KEY,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
};
