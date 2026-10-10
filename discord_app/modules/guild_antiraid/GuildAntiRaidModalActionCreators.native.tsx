// === Module 14174: GuildAntiRaidModalActionCreators ===

// Module 14174 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8044 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14175, dependencyMap.paths), {
    onCloseModal: function handleClose() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
};