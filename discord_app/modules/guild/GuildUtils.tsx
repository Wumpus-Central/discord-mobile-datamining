// === Module 10244: guild/GuildUtils ===

// Module 10244 (guild/GuildUtils)
import GuildActionCreatorsDefault from "GuildActionCreators" /* 7037 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export function handleJoinGuild(id) {
  _require = id;
  if (null != id) {
    const joinGuildResult = GuildActionCreatorsDefault.joinGuild(id);
    GuildActionCreatorsDefault.joinGuild(id).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    }).catch(require("JoinGuildRefusedError").ignoreJoinGuildRefused);
    const nextPromise = GuildActionCreatorsDefault.joinGuild(id).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    });
  }
}