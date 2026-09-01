// discord_app/modules/app_launcher/hooks/useCommandContext.tsx
import closure_0 from "../../../../_runtime/00019_noop.js";
import closure_1 from "../../../stores/GuildStore.tsx";

const result = require("set").fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "children", guild: "c" };
  } else {
    obj = { channel: null, guild: null };
    obj[0] = type.channel;
    obj[1] = guild.getGuild(type.channel.guild_id);
  }
  return obj;
};
export const useCommandContext = function useCommandContext(context) {
  const React = context;
  const items = [context];
  return React.useMemo(() => {
    if ("contextless" === type.type) {
      let obj = { channel: "children", guild: "c" };
    } else {
      obj = { channel: null, guild: null };
      obj[0] = tmp.channel;
      obj[1] = closure_1_1.getGuild(tmp.channel.guild_id);
    }
    return obj;
  }, items);
};
