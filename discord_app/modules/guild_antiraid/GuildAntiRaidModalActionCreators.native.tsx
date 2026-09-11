// === Module 14016: GuildAntiRaidModalActionCreators ===

// Module 14016 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4809 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8090 */;
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
  obj.pushLazy(asyncRequireImpl(14017, dependencyMap.paths), obj, closure_3);
};