// discord_app/modules/guilds_bar/usePendingFolderGuildIds.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import handleGatewayJoinRequestUpdate from "../guild_member_verification/UserGuildJoinRequestStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  let items = [closure_2, closure_3];
  return initialize.useStateFromStoresArray(items, () => {
    const items = [closure_2, closure_3];
    [obj, obj2] = items;
    const guildIds = obj.computeGuildIds();
    const guilds = obj2.getGuilds();
    return guildIds.filter((item, index) => null == table[item]);
  });
};
export const getPendingFolderGuildIds = function getPendingFolderGuildIds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [closure_2, closure_3];
    tmp = items;
  }
  [obj, obj2] = tmp;
  const guildIds = obj.computeGuildIds();
  const guilds = obj2.getGuilds();
  return guildIds.filter((item, index) => null == table[item]);
};