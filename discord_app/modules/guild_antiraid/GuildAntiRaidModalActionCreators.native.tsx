// === Module 16096: GuildAntiRaidModalActionCreators ===

// Module 16096 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8554 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16097, dependencyMap.paths), {
    onCloseModal: function handleClose() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
}