// discord_app/modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx
import set from "../../../_runtime/00002_set.js";
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4723 from "../../actions/ModalActionCreators.tsx";
import GUILD_REPORT_RAID_MOBILE_KEY from "GuildAntiRaidConstants.tsx";

let closure_3 = GUILD_REPORT_RAID_MOBILE_KEY.GUILD_REPORT_RAID_MOBILE_KEY;
const result = set.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = _modDef4723;
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(asyncRequireImpl(13703, dependencyMap.paths), obj, closure_3);
};