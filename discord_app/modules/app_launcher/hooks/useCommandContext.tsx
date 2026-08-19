// === Module 11204: getCommandContext ===

// Module 11204 (getCommandContext)
import noop from "noop" /* 19 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

const result = require("obj132").fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export const getCommandContext = function getCommandContext(type) {
  if ("contextless" === type.type) {
    let obj = { channel: "r", guild: "accessibilityRole" };
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
      let obj = { channel: "r", guild: "accessibilityRole" };
    } else {
      obj = { channel: null, guild: null };
      obj[0] = type.channel;
      obj[1] = closure_1_1.getGuild(type.channel.guild_id);
    }
    return obj;
  }, items);
};