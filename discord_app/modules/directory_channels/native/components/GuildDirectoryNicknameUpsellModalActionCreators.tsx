// discord_app/modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4611 from "../../../../actions/ModalActionCreators.tsx";

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4611.pushLazy(asyncRequireImpl(12220, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef4611.popWithKey(c3);
  }
};