// discord_app/modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import GuildAntiRaidConstants from "GuildAntiRaidConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onCloseModal() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_1_3);
    },
    guildId: id,
  };
  obj.pushLazy(asyncRequire(13780, dependencyMap.paths), obj2, closure_3);
};
