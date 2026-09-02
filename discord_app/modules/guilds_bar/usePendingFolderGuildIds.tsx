// === Module 9044: usePendingFolderGuildIds ===

// Module 9044 (usePendingFolderGuildIds)
import initialize from "initialize" /* 586 */;
import closure_2 from "handleGatewayJoinRequestUpdate" /* 4300 */;
import closure_3 from "createGuildRecordFromRust" /* 1908 */;

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