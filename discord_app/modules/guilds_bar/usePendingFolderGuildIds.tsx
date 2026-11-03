// === Module 13354: usePendingFolderGuildIds ===

// Module 13354 (usePendingFolderGuildIds)
import initialize from "initialize" /* 504 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5173 */;
import GuildStore from "GuildStore" /* 5012 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  items = [UserGuildJoinRequestStore, GuildStore];
  return initialize.useStateFromStoresArray(items, () => {
    items = [UserGuildJoinRequestStore, GuildStore];
    [obj, obj2] = items;
    const guildIds = obj.computeGuildIds();
    const guilds = obj2.getGuilds();
    return guildIds.filter((item) => null == closure_0[item]);
  });
};
export function getPendingFolderGuildIds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    items = [UserGuildJoinRequestStore, GuildStore];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter((item) => null == closure_0[item]);
}