// discord_app/modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";
import GUILD_REPORT_RAID_MOBILE_KEY from "GuildAntiRaidConstants.tsx";

let closure_3 = GUILD_REPORT_RAID_MOBILE_KEY.GUILD_REPORT_RAID_MOBILE_KEY;
const result = obj132.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  const obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequireImpl(13424, dependencyMap.paths), obj, closure_3);
};