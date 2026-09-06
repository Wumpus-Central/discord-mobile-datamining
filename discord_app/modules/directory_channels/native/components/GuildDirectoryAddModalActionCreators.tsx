// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx",
);

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(
      asyncRequireImpl(12309, dependencyMap.paths),
      merged,
      GUILD_DIRECTORY_ADD_MODAL_KEY,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
};
