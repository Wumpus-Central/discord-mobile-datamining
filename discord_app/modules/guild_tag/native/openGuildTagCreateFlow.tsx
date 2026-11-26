// === Module 14313: openGuildTagCreateFlow ===

// Module 14313 (openGuildTagCreateFlow)
import asyncRequireImpl from "asyncRequireImpl" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Powerups from "Powerups" /* 8300 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 13466 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_tag/native/openGuildTagCreateFlow.tsx");

export default function openGuildTagCreateFlow(guilds, analyticsLocation) {
  if (1 !== guilds.length) {
    const obj3 = { guilds, analyticsLocation };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14314, dependencyMap.paths), "GuildTagCreateGuildListBottomSheet", obj3);
  } else {
    const obj = { guildId: guilds[0].id, autoOpenPerkId: Powerups.GUILD_POWERUP_TAG_SKU_ID, analyticsLocation };
    openGuildPowerupsModalDefault(obj);
  }
};