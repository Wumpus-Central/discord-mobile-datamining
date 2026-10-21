// === Module 12017: useCommandContext ===

// Module 12017 (useCommandContext)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4843 */;

require = fn;
const ReactCompilerGating = fn(558);
function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "toCharArray$esjava$1", guild: "Symbol" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export { getCommandContext };
export const useCommandContext = ReactCompilerGating.isReactCompilerEnabled() ? (function useCommandContext(type) {
  const cResult = c.c(2);
  if (cResult[0] !== type) {
    if ("contextless" === type.type) {
      let obj2 = { channel: "toCharArray$esjava$1", guild: "Symbol" };
    } else {
      obj2 = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    cResult[0] = type;
    cResult[1] = obj2;
  } else {
    return cResult[1];
  }
}) : (function useCommandContext(arg0) {
  const type = arg0;
  const items = [arg0];
  return noop.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "toCharArray$esjava$1", guild: "Symbol" };
    } else {
      obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    return obj;
  }, items);
});