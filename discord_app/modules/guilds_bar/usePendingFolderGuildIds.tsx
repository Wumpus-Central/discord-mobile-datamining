// discord_app/modules/guilds_bar/usePendingFolderGuildIds.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import UserGuildJoinRequestStore from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  let items = [UserGuildJoinRequestStore, GuildStore];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [UserGuildJoinRequestStore, GuildStore];
    [obj, obj2] = items;
    const guildIds = obj.computeGuildIds();
    const guilds = obj2.getGuilds();
    return guildIds.filter((item) => null == closure_0[item]);
  });
}
export const getPendingFolderGuildIds = function getPendingFolderGuildIds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserGuildJoinRequestStore, GuildStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter((item) => null == closure_0[item]);
};
