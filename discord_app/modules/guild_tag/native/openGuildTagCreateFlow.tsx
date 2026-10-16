// discord_app/modules/guild_tag/native/openGuildTagCreateFlow.tsx
import asyncRequireImpl from "../../../../_runtime/02002_asyncRequireImpl.js";
import Powerups from "../../../../discord_common/js/shared/shared-constants/Powerups.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import openGuildPowerupsModalDefault from "../../premium/powerups/native/utils/openGuildPowerupsModal.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(13880, dependencyMap.paths),
      "GuildTagCreateGuildListBottomSheet",
      obj3,
    );
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    openGuildPowerupsModalDefault(obj);
  }
}
