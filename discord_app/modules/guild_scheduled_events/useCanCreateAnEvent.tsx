// discord_app/modules/guild_scheduled_events/useCanCreateAnEvent.tsx
import closure_2 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../stores/GuildChannelStore.tsx";
import { GUILD_VOCAL_CHANNELS_KEY } from "../../stores/GuildChannelStore.tsx";
import closure_5 from "../../stores/GuildStore.tsx";
import closure_6 from "../../stores/PermissionStore.tsx";
import { Permissions } from "../../Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_5, closure_3, closure_6];
  const items1 = [arg0, arg1];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
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