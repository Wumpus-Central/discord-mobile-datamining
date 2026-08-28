// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02010_asyncRequireImpl.js";
import _modDef4689 from "../../../../actions/ModalActionCreators.tsx";

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4689.pushLazy(asyncRequireImpl(11818, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4689.popWithKey(c3);
  }
};