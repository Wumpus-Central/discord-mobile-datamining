// === Module 13868: openGuildTagCreateFlow ===

// Module 13868 (openGuildTagCreateFlow)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import Powerups from "Powerups" /* 5070 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13089 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13869, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    openGuildPowerupsModalDefault(obj);
  }
};