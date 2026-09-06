// === Module 13963: GuildAntiRaidModalActionCreators ===

// Module 13963 (GuildAntiRaidModalActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import GuildAntiRaidConstants from "GuildAntiRaidConstants" /* 8016 */;
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
  obj.pushLazy(asyncRequireImpl(13964, dependencyMap.paths), obj, closure_3);
};