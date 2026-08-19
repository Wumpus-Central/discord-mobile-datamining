// === Module 11474: useCanManageGuildDirectoryEntry ===

// Module 11474 (useCanManageGuildDirectoryEntry)
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default function useCanManageGuildDirectoryEntry(arg0) {
  const _require = arg0;
  let obj = _require(589);
  const items = [closure_3];
  dependencyMap = obj.useStateFromStores(items, () => closure_1_3.getGuild(closure_0.guildId));
  const items1 = [closure_2];
  closure_2 = _require(589).useStateFromStores(items1, () => channel.getChannel(closure_0.channelId));
  const obj2 = _require(589);
  const items2 = [closure_4];
  let stateFromStores = _require(589).useStateFromStores(items2, () => closure_1_4.can(Permissions.ADMINISTRATOR, closure_1));
  const obj3 = _require(589);
  const items3 = [closure_4];
  const stateFromStores1 = _require(589).useStateFromStores(items3, () => closure_1_4.can(Permissions.MANAGE_MESSAGES, closure_2));
  obj = { isEntryAdmin: stateFromStores, canEdit: null, canRemove: null };
  let tmp3 = stateFromStores;
  if (!stateFromStores) {
    tmp3 = stateFromStores1;
  }
  obj[1] = tmp3;
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  obj[2] = stateFromStores;
  return obj;
};
export const useCanCreateOrAddGuildInDirectory = function useCanCreateOrAddGuildInDirectory(channel) {
  const _require = channel;
  const items = [closure_4];
  return _require(589).useStateFromStores(items, () => closure_1_4.can(Permissions.SEND_MESSAGES, closure_0));
};