// discord_app/modules/app_launcher/hooks/useCommandContext.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

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
  const items = [context];
  return noop.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "Array", guild: "flexDirection" };
    } else {
      obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    return obj;
  }, items);
}
