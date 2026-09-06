// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../../actions/ModalActionCreators.tsx";

const GUILD_DIRECTORY_SEARCH_MODAL_KEY = "GUILD_DIRECTORY_SEARCH_MODAL_KEY";
const result = set.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectorySearchModalActionCreators.tsx",
);

export default {
  open(channel) {
    _modDef4763.pushLazy(
      asyncRequireImpl(12301, dependencyMap.paths),
      { channel: channel.channel },
      GUILD_DIRECTORY_SEARCH_MODAL_KEY,
    );
  },
  close() {
    _modDef4763.popWithKey(GUILD_DIRECTORY_SEARCH_MODAL_KEY);
  },
};
