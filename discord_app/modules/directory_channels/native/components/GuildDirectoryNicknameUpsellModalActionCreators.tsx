// === Module 12565: GuildDirectoryNicknameUpsellModalActionCreators ===

// Module 12565 (GuildDirectoryNicknameUpsellModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

let c3 = "GUILD_DIRECTORY_NICKNAME_UPSELL_MODAL_KEY";
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModalActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12566, dependencyMap.paths), merged, c3);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(c3);
  }
};