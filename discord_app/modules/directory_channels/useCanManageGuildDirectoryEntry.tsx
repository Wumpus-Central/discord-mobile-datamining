import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default function useCanManageGuildDirectoryEntry(arg0) {
  const _require = arg0;
  let obj = _require(589);
  const items = [createGuildRecordFromRust];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_3.getGuild(closure_0.guildId));
  const items1 = [ensureGuildLoaded];
  ensureGuildLoaded = _require(589).useStateFromStores(items1, () => channel.getChannel(closure_0.channelId));
  const obj2 = _require(589);
  const items2 = [getUncachedChannelPermissions];
  let stateFromStores = _require(589).useStateFromStores(items2, () => outer1_4.can(outer1_5.ADMINISTRATOR, closure_1));
  const obj3 = _require(589);
  const items3 = [getUncachedChannelPermissions];
  const stateFromStores1 = _require(589).useStateFromStores(items3, () => outer1_4.can(outer1_5.MANAGE_MESSAGES, ensureGuildLoaded));
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
  const items = [getUncachedChannelPermissions];
  return _require(589).useStateFromStores(items, () => outer1_4.can(outer1_5.SEND_MESSAGES, closure_0));
};