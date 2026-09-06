// === Module 10341: guild/GuildUtils ===

// Module 10341 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  importDefault = guildId;
  if (null != guildId) {
    GuildActionCreatorsDefault.joinGuild(guildId).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    });
    const joinGuildResult = GuildActionCreatorsDefault.joinGuild(guildId);
  }
};