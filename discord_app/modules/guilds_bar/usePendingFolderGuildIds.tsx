// discord_app/modules/guilds_bar/usePendingFolderGuildIds.tsx
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/guilds_bar/usePendingFolderGuildIds.tsx");

export default function usePendingFolderGuildIds() {
  let items = [handleGatewayJoinRequestUpdate, createGuildRecordFromRust];
  return initialize /* initialize */.useStateFromStoresArray(items, () => {
    let obj;
    let obj2;
    const items = [handleGatewayJoinRequestUpdate, createGuildRecordFromRust];
    [obj, obj2] = items;
    let guilds;
    const guildIds = obj.computeGuildIds();
    guilds = obj2.getGuilds();
    return guildIds.filter((arg0) => null == table[arg0]);
  });
};
export const getPendingFolderGuildIds = function getPendingFolderGuildIds() {
  let obj;
  let obj2;
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [handleGatewayJoinRequestUpdate, createGuildRecordFromRust];
    tmp = items;
  }
  [obj, obj2] = tmp;
  let guilds;
  const guildIds = obj.computeGuildIds();
  guilds = obj2.getGuilds();
  return guildIds.filter((arg0) => null == table[arg0]);
};