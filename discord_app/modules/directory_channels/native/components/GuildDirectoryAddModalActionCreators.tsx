// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const GUILD_DIRECTORY_ADD_MODAL_KEY = "GUILD_DIRECTORY_ADD_MODAL_KEY";
let obj = {
  open(merged) {
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(asyncRequire(11951, dependencyMap.paths), merged, GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(GUILD_DIRECTORY_ADD_MODAL_KEY);
  },
};
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryAddModalActionCreators.tsx",
);

export default obj;
