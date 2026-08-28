// === Module 9581: useCanCreateAnEvent ===

// Module 9581 (useCanCreateAnEvent)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "comparator" /* 1983 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1983 */;
import closure_5 from "createGuildRecordFromRust" /* 1910 */;
import closure_6 from "getUncachedChannelPermissions" /* 4090 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_5, closure_3, closure_6];
  const items1 = [arg0, arg1];
  return _require(589).useStateFromStores(items, () => {
    const guild = closure_1_5.getGuild(callback);
    if (!closure_1_6.can(closure_1_7.ADMINISTRATOR, guild)) {
      if (!closure_1_6.can(closure_1_7.CREATE_EVENTS, guild)) {
        const tmp8 = closure_1_3.getChannels(callback)[closure_1_4];
        const iter = tmp8[Symbol.iterator]();
        while (iter !== undefined) {
          let channel = iter.next().channel;
          if (null == table) {
            let tmp15 = callback;
            let tmp16 = table;
            let obj2 = callback(table[6]);
            let tmp17 = channel;
            let tmp18 = closure_1_2;
            let tmp19 = closure_1_6;
            let tmp20 = closure_1_6;
            if (closure_1_6.can(closure_1_2(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
              let tmp21 = iter;
              iter.return();
              let flag = true;
              return true;
            }
          } else {
            let tmp14 = channel;
          }
          continue;
        }
        return false;
      }
    }
    return true;
  }, items1);
};