// === Module 12638: useCommandContext ===

// Module 12638 (useCommandContext)
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5011 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "Array", guild: "flexDirection" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
}
export function useCommandContext(context) {
  noop = context;
  items = [context];
  return noop.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "Array", guild: "flexDirection" };
    } else {
      obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    return obj;
  }, items);
}