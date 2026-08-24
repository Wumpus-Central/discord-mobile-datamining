// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02008_asyncRequireImpl.js";
import _modDef5265 from "../../../../actions/ModalActionCreators.tsx";

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef5265.pushLazy(asyncRequireImpl(11531, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef5265.popWithKey(c3);
  }
};