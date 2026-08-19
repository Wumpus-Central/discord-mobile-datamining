// === Module 9535: usePendingFolderGuildIds ===

// Module 9535 (usePendingFolderGuildIds)
import initialize from "initialize" /* 589 */;
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate" /* 4198 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

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