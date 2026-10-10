// === Module 5954: useGuildMemberDisplayRole ===

// Module 5954 (useGuildMemberDisplayRole)
import PermissionUtilsAll from "PermissionUtils" /* 4755 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;

const require = globalThis.__r;

const require = fn;
function getHighestHoistedRole(arg0, arg1) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [GuildStore, GuildMemberStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  if (null != arg0) {
    if (null != arg1) {
      guild = obj.getGuild(arg0);
      if (null == guild) {
        return null;
      } else {
        const member = obj2.getMember(guild.id, arg1);
        let highestHoistedRole = null;
        if (null != member) {
          highestHoistedRole = PermissionUtilsAll.getHighestHoistedRole(guild, member);
        }
        return highestHoistedRole;
      }
    }
  }
  return null;
}
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useGuildMemberDisplayRole.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useGuildMemberDisplayRole(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildStore, GuildMemberStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp7, tmp8);
  }
  const fn = function n() {
    const items = [GuildStore, GuildMemberStore];
    return getHighestHoistedRole(closure_0, closure_1, items);
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp8 = items1;
  tmp7 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useGuildMemberDisplayRole(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  let items = [GuildStore, GuildMemberStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    const items = [GuildStore, GuildMemberStore];
    return getHighestHoistedRole(closure_0, closure_1, items);
  }, items1);
});
export { getHighestHoistedRole };