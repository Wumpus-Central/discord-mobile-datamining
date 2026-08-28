// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../../actions/ModalActionCreators.tsx";

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4689.pushLazy(asyncRequireImpl(11812, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    _modDef4689.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};