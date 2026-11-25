// === Module 13608: GuildDirectoryNicknameUpsellModalActionCreators ===

// Module 13608 (GuildDirectoryNicknameUpsellModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(13609, dependencyMap.paths), merged, c3);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};