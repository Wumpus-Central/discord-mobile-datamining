// discord_app/modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx
import { GUILD_REPORT_RAID_MOBILE_KEY as closure_3 } from "GUILD_REPORT_RAID_MOBILE_KEY";

const result = require("ReportModal").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  let obj = require("../../actions/ModalActionCreators.tsx");
  obj = {
    onCloseModal() {
      callback(table[1]).popWithKey(closure_3);
    },
    guildId: id
  };
  obj.pushLazy(require("../../../_runtime/01959_asyncRequireImpl.js") /* asyncRequireImpl */(13218, dependencyMap.paths), obj, closure_3);
};