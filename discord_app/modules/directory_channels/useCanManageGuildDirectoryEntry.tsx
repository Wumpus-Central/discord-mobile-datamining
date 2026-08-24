// discord_app/modules/directory_channels/useCanManageGuildDirectoryEntry.tsx
import closure_2 from "../../stores/ChannelStore.tsx";
import closure_3 from "../../stores/GuildStore.tsx";
import closure_4 from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/directory_channels/useCanManageGuildDirectoryEntry.tsx");

export default function useCanManageGuildDirectoryEntry(arg0) {
  const _require = arg0;
  let obj = initialize;
  const items = [closure_3];
  dependencyMap = obj.useStateFromStores(items, () => closure_1_3.getGuild(closure_0.guildId));
  const items1 = [closure_2];
  closure_2 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items1, () => channel.getChannel(closure_0.channelId));
  const obj2 = initialize;
  const items2 = [closure_4];
  let stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items2, () => closure_1_4.can(closure_1_5.ADMINISTRATOR, closure_1));
  const obj3 = initialize;
  const items3 = [closure_4];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items3, () => closure_1_4.can(closure_1_5.MANAGE_MESSAGES, closure_2));
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
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => closure_1_4.can(closure_1_5.SEND_MESSAGES, closure_0));
};