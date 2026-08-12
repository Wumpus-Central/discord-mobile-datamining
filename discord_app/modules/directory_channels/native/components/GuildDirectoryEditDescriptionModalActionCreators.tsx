// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../_runtime/02007_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    ModalActionCreators.pushLazy(asyncRequireImpl(11747, dependencyMap.paths), closure_0, c3);
  },
  close() {
    ModalActionCreators.popWithKey(c3);
  }
};