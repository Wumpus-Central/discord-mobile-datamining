// discord_app/modules/guilds_bar/usePendingFolderGuildIds.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import closure_3 from "../../stores/GuildStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  let items = [closure_2, closure_3];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [closure_2, closure_3];
    [obj, obj2] = items;
    let guilds;
    const guildIds = obj.computeGuildIds();
    guilds = obj2.getGuilds();
    return guildIds.filter((arg0) => null == table[arg0]);
  });
};
export const getPendingFolderGuildIds = function getPendingFolderGuildIds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  let guilds;
  const guildIds = obj.computeGuildIds();
  guilds = obj2.getGuilds();
  return guildIds.filter((arg0) => null == table[arg0]);
};