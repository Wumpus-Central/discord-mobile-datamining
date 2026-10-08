// === Module 14022: GuildAntiRaidModalActionCreators ===

// Module 14022 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8018 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14023, dependencyMap.paths), {
    onCloseModal: function handleClose() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id
  }, closure_3);
};