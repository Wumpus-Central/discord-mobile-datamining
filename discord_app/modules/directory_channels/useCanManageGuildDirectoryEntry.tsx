// discord_app/modules/directory_channels/useCanManageGuildDirectoryEntry.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default function useCanManageGuildDirectoryEntry(arg0) {
  _require = arg0;
  let obj = require("initialize");
  const items = [GuildStore];
  dependencyMap = obj.useStateFromStores(items, () => GuildStore.getGuild(closure_0.guildId));
  const items1 = [closure_2];
  closure_2 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(closure_0.channelId));
  const obj2 = require("initialize");
  const items2 = [PermissionStore];
  let stateFromStores = require("initialize").useStateFromStores(items2, () =>
    PermissionStore.can(Permissions.ADMINISTRATOR, closure_1),
  );
  const obj3 = require("initialize");
  const items3 = [PermissionStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items3, () =>
    PermissionStore.can(Permissions.MANAGE_MESSAGES, closure_2),
  );
  obj = { isEntryAdmin: stateFromStores, canEdit: null, canRemove: null };
  let tmp3 = stateFromStores;
  if (!stateFromStores) {
    tmp3 = stateFromStores1;
  }
  obj.canEdit = tmp3;
  if (!stateFromStores) {
    stateFromStores = stateFromStores1;
  }
  obj.canRemove = stateFromStores;
  return obj;
}
export const useCanCreateOrAddGuildInDirectory = function useCanCreateOrAddGuildInDirectory(channel) {
  _require = channel;
  const items = [PermissionStore];
  return require("initialize").useStateFromStores(items, () =>
    PermissionStore.can(Permissions.SEND_MESSAGES, closure_0),
  );
};
