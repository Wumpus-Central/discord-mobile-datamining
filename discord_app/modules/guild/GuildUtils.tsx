// === Module 9488: guild/GuildUtils ===

// Module 9488 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6102 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export const handleJoinGuild = function handleJoinGuild(guildId) {
  _require = guildId;
  if (null != guildId) {
    const joinGuildResult = GuildActionCreatorsDefault.joinGuild(guildId);
    GuildActionCreatorsDefault.joinGuild(guildId).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    }).catch(require("JoinGuildRefusedError").ignoreJoinGuildRefused);
    const nextPromise = GuildActionCreatorsDefault.joinGuild(guildId).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    });
  }
};