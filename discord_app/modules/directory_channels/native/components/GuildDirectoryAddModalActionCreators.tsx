import { asyncRequireImpl } from "../../../../../_runtime/01959_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx
const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx");

export default {
  open(closure_0) {
    ModalActionCreators.pushLazy(asyncRequireImpl /* asyncRequireImpl */(11593, dependencyMap.paths), closure_0, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    ModalActionCreators.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  }
};