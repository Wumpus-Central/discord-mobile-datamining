// discord_app/modules/guilds_bar/usePendingFolderGuildIds.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import UserGuildJoinRequestStore from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f100670 = (item) => null == closure_0[item];
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
  return guildIds.filter(f100670);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
          return guildIds.filter(f100670);
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
    }
  : () => {
      const obj = get_initialized;
      let items = [UserGuildJoinRequestStore, GuildStore];
      return obj.useStateFromStoresArray(items, () => {
        let obj;
        let obj2;
        const items = [UserGuildJoinRequestStore, GuildStore];
        [obj, obj2] = items;
        const guildIds = obj.computeGuildIds();
        const guilds = obj2.getGuilds();
        return guildIds.filter(f100670);
      });
    };
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default tmp2;
export { getPendingFolderGuildIds };
