// discord_app/modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx
import asyncRequireImpl from "../../../_runtime/01896_asyncRequireImpl.js";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import GuildAntiRaidConstants from "GuildAntiRaidConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_3 = GuildAntiRaidConstants.GUILD_REPORT_RAID_MOBILE_KEY;
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidModalActionCreators.native.tsx");

export const openReportRaidModal = function openReportRaidModal(id) {
  const obj = {
    onCloseModal() {
      ModalActionCreatorsDefault.popWithKey(closure_1_3);
    },
    guildId: id,
  };
  obj.pushLazy(asyncRequireImpl(13964, dependencyMap.paths), obj, closure_3);
};
