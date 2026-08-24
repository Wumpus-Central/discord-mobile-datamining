// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../../actions/ModalActionCreators.tsx";

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef5265.pushLazy(asyncRequireImpl(11525, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    _modDef5265.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};