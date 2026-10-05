// === Module 9415: usePendingFolderGuildIds ===

// Module 9415 (usePendingFolderGuildIds)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4700 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const f100518 = (item) => null == closure_0[item];
function getPendingFolderGuildIds() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserGuildJoinRequestStore, GuildStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter(f100518);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserGuildJoinRequestStore, GuildStore];
    const fn = function u() {
      let obj;
      let obj2;
      const items = [UserGuildJoinRequestStore, GuildStore];
      [obj, obj2] = items;
      const guildIds = obj.computeGuildIds();
      const guilds = obj2.getGuilds();
      return guildIds.filter(f100518);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStoresArray(tmp4, tmp5);
}) : (() => {
  const obj = get_initialized;
  let items = [UserGuildJoinRequestStore, GuildStore];
  return obj.useStateFromStoresArray(items, () => {
    let obj;
    let obj2;
    const items = [UserGuildJoinRequestStore, GuildStore];
    [obj, obj2] = items;
    const guildIds = obj.computeGuildIds();
    const guilds = obj2.getGuilds();
    return guildIds.filter(f100518);
  });
});
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default tmp2;
export { getPendingFolderGuildIds };