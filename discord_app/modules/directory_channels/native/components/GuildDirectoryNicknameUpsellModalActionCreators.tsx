// discord_app/modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx
import set from "../../../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../../../actions/ModalActionCreators.tsx";

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = set.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef5260.pushLazy(asyncRequireImpl(11835, dependencyMap.paths), closure_0, c3);
  },
  close() {
    _modDef5260.popWithKey(c3);
  }
};