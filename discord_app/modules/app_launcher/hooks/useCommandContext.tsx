// === Module 11642: useCommandContext ===

// Module 11642 (useCommandContext)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((type) => {
  let tmp2;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] !== type) {
    let obj2;
    if ("contextless" === type.type) {
      obj2 = { channel: "Array", guild: "Set" };
    } else {
      obj2 = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    cResult[0] = type;
    cResult[1] = obj2;
    tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  const type = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    let obj;
    if ("contextless" === type.type) {
      obj = { channel: "Array", guild: "Set" };
    } else {
      obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
    }
    return obj;
  }, items);
});
function getCommandContext(type) {
  let obj;
  if ("contextless" === type.type) {
    obj = { channel: "Array", guild: "Set" };
  } else {
    obj = { channel: type.channel, guild: GuildStore.getGuild(type.channel.guild_id) };
  }
  return obj;
}
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useCommandContext.tsx");

export { getCommandContext };
export const useCommandContext = tmp2;