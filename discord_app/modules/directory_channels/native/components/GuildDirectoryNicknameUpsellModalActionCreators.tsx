// discord_app/modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx
import { asyncRequireImpl } from "../../../../../_runtime/01988_asyncRequireImpl.js";
import { ModalActionCreators } from "../../../../actions/ModalActionCreators.tsx";
let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(closure_0) {
    ModalActionCreators.pushLazy(asyncRequireImpl(11952, dependencyMap.paths), closure_0, c3);
  },
  close() {
    ModalActionCreators.popWithKey(c3);
  }
};