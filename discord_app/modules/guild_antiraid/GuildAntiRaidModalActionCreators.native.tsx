// === Module 14038: GuildAntiRaidModalActionCreators ===

// Module 14038 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8068 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  const obj = {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequireImpl(14039, dependencyMap.paths), obj, closure_3);
};