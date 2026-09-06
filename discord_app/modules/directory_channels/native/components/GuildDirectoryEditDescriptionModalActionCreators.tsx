// discord_app/modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import _modDef4763 from "../../../../actions/ModalActionCreators.tsx";

let c3 = "GUILD_DIRECTORY_EDIT_DESCRIPTION_MODAL_KEY";
const result = set.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryEditDescriptionModalActionCreators.tsx",
);

export default {
  open(closure_0) {
    _modDef4763.pushLazy(asyncRequireImpl(12315, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4763.popWithKey(c3);
  },
};
