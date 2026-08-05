import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
// discord_app/modules/guild_scheduled_events/useCanCreateAnEvent.tsx
import _slicedToArray from "_slicedToArray";
import comparator from "comparator";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import { Permissions } from "ME";

const require = arg1;
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/guild_scheduled_events/useCanCreateAnEvent.tsx");

export default function useCanCreateAnEvent(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  const items = [createGuildRecordFromRust, comparator, getUncachedChannelPermissions];
  const items1 = [arg0, arg1];
  return _initialize.useStateFromStores(items, () => {
    const guild = outer1_5.getGuild(callback);
    if (!outer1_6.can(outer1_7.ADMINISTRATOR, guild)) {
      if (!outer1_6.can(outer1_7.CREATE_EVENTS, guild)) {
        const tmp8 = outer1_3.getChannels(callback)[outer1_4];
        const iter = tmp8[Symbol.iterator]();
        while (iter !== undefined) {
          let channel = iter.next().channel;
          if (null == table) {
            let tmp15 = callback;
            let tmp16 = table;
            let obj2 = callback(table[6]);
            let tmp17 = channel;
            let tmp18 = outer1_2;
            let tmp19 = outer1_6;
            let tmp20 = outer1_6;
            if (outer1_6.can(outer1_2(obj2.attachChannelPermissions(channel), 1)[0], channel)) {
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