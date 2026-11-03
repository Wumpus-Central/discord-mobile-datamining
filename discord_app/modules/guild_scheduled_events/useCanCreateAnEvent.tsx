// === Module 9217: useCanCreateAnEvent ===

// Module 9217 (useCanCreateAnEvent)
import useManageResourcePermissions from "useManageResourcePermissions" /* 9148 */;
import _slicedToArray from "module_32" /* 32 */;
import GuildChannelStore from "GuildChannelStore" /* 5071 */;
import GuildStore from "GuildStore" /* 5012 */;
import PermissionStore from "PermissionStore" /* 5073 */;

const require = globalThis.__r;

require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(5071).GUILD_VOCAL_CHANNELS_KEY;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  items = [GuildStore, GuildChannelStore, PermissionStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    guild = GuildStore.getGuild(closure_0);
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
  }, items1);
};