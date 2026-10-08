// discord_app/modules/guilds_bar/usePendingFolderGuildIds.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import UserGuildJoinRequestStore from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
function getPendingFolderGuildIds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserGuildJoinRequestStore, GuildStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter((item) => null == closure_0[item]);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function usePendingFolderGuildIds() {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserGuildJoinRequestStore, GuildStore];
        const fn = function u() {
          const items = [UserGuildJoinRequestStore, GuildStore];
          [obj, obj2] = items;
          const guildIds = obj.computeGuildIds();
          const guilds = obj2.getGuilds();
          return guildIds.filter((item) => null == closure_0[item]);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStoresArray(tmp4, tmp5);
    }
  : function usePendingFolderGuildIds() {
      let items = [UserGuildJoinRequestStore, GuildStore];
      return initialize.useStateFromStoresArray(items, () => {
        const items = [UserGuildJoinRequestStore, GuildStore];
        [obj, obj2] = items;
        const guildIds = obj.computeGuildIds();
        const guilds = obj2.getGuilds();
        return guildIds.filter((item) => null == closure_0[item]);
      });
    };
export { getPendingFolderGuildIds };
