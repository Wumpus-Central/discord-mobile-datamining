// === Module 14002: openGuildTagCreateFlow ===

// Module 14002 (openGuildTagCreateFlow)
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import Powerups from "Powerups" /* 5146 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5171 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13220 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14003, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    openGuildPowerupsModalDefault(obj);
  }
};