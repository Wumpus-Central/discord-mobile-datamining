// discord_app/modules/guild_scheduled_events/useCanCreateAnEvent.tsx
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(2012).GUILD_VOCAL_CHANNELS_KEY;
const Permissions = fn(1074).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [GuildStore, GuildChannelStore, PermissionStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const guild = GuildStore.getGuild(closure_0);
      if (!PermissionStore.can(Permissions.ADMINISTRATOR, guild)) {
        if (!PermissionStore.can(Permissions.CREATE_EVENTS, guild)) {
          const tmp8 = GuildChannelStore.getChannels(closure_0)[GUILD_VOCAL_CHANNELS_KEY];
          const iter = tmp8[Symbol.iterator]();
          while (iter !== undefined) {
            let channel = iter.next().channel;
            if (null == closure_1) {
              let obj2 = useManageResourcePermissions;
              if (PermissionStore.can(_slicedToArray(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
                iter.return();
                let flag = true;
                return true;
              }
            }
            continue;
          }
          return false;
        }
      }
      return true;
    },
    items1,
  );
}
