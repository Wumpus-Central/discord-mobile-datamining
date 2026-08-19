// === Module 5077: isSaveableChannel ===

// Module 5077 (isSaveableChannel)
import totalLength from "totalLength" /* 5071 */;
import isReadableChannel from "isReadableChannel" /* 5075 */;
import LIMITED_GUILD_MEMBER_THRESHOLD from "LIMITED_GUILD_MEMBER_THRESHOLD" /* 5076 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import { ChannelTypes } from "ME" /* 676 */;

require = fn;
function isSaveableChannel(item10025) {
  return item10025.type === ChannelTypes.DM || item10025.type === ChannelTypes.GROUP_DM || item10025.type === ChannelTypes.GUILD_TEXT;
}
function addFallback(item10013, id, extendedMemoryLru) {
  if (!extendedMemoryLru.hasExtended(id.id)) {
    const obj = { guildId: null, channelId: null, channelType: null, fallback: true };
    obj[0] = item10013;
    ({ id: obj[1], type: obj[2] } = id);
    extendedMemoryLru.put(id.id, obj);
  }
}
function mergeInto(extendedMemoryLru, allEntries) {
  const allEntriesResult = allEntries.allEntries();
  while (tmp2 !== undefined) {
    let tmp5 = callback(tmp3, 2);
    let putResult = extendedMemoryLru.put(tmp5[0], tmp5[1]);
    continue;
  }
  return extendedMemoryLru;
}
const result = require("obj132").fileFinishedImporting("modules/app_database/modules/messages/withFallbacks.tsx");

export const withFallbacks = function withFallbacks(extendedMemoryLru, arg1) {
  if (extendedMemoryLru.totalLength >= arg1) {
    return extendedMemoryLru;
  } else {
    extendedMemoryLru = new totalLength.ExtendedMemoryLru(extendedMemoryLru.primaryCapacity, extendedMemoryLru.extendedCapacity);
    const diff = arg1 - extendedMemoryLru.totalLength;
    guildFolders = guildFolders.getGuildFolders();
    const iter = guildFolders[Symbol.iterator]();
    while (iter !== undefined) {
      let guildIds = iter.next().guildIds;
      for (const item10013 of guildIds) {
        let _Object = Object;
        let values = Object.values(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(item10013));
        for (const item10025 of values) {
          let isReadableChannelResult = isSaveableChannel(item10025);
          if (isReadableChannelResult) {
            let obj3 = isReadableChannel;
            isReadableChannelResult = obj3.isReadableChannel(item10025);
          }
          if (isReadableChannelResult) {
            let obj4 = LIMITED_GUILD_MEMBER_THRESHOLD;
            isReadableChannelResult = !obj4.isLimitedChannel(item10025);
          }
          if (isReadableChannelResult) {
            let tmp22 = addFallback(item10013, item10025, extendedMemoryLru);
          }
          if (extendedMemoryLru.totalLength >= diff) {
            let tmp24 = mergeInto(extendedMemoryLru, arg0);
            obj2.return();
            obj.return();
            iter.return();
            return extendedMemoryLru;
          }
        }
        continue;
      }
      continue;
    }
    mergeInto(extendedMemoryLru, extendedMemoryLru);
    return extendedMemoryLru;
  }
};