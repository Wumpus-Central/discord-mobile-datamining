// discord_app/modules/app_launcher/hooks/useCommandContext.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "hash", guild: "call" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
};
export const useCommandContext = function useCommandContext(context) {
  noop = context;
  const items = [context];
  return noop.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "hash", guild: "call" };
    } else {
      obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    return obj;
  }, items);
};
