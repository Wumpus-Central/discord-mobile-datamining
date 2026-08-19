// === Module 8890: useCanCreateAnEvent ===

// Module 8890 (useCanCreateAnEvent)
import _slicedToArray from "_slicedToArray" /* 32 */;
import comparator from "comparator" /* 1980 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1980 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_5, closure_3, closure_6];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_5.getGuild(callback);
    if (!closure_1_6.can(Permissions.ADMINISTRATOR, guild)) {
      if (!closure_1_6.can(Permissions.CREATE_EVENTS, guild)) {
        const tmp8 = closure_1_3.getChannels(callback)[GUILD_VOCAL_CHANNELS_KEY];
        const iter = tmp8[Symbol.iterator]();
        while (iter !== undefined) {
          let channel = iter.next().channel;
          if (null == table) {
            let obj2 = callback(table[6]);
            if (closure_1_6.can(closure_1_2(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
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