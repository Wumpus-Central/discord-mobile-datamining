// === Module 7486: withFallbacks ===

// Module 7486 (withFallbacks)
import ExtendedMemoryLru from "ExtendedMemoryLru" /* 7480 */;
import isReadableChannel from "isReadableChannel" /* 7484 */;
import isLimitedChannel from "isLimitedChannel" /* 7485 */;
import _slicedToArray from "module_32" /* 32 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
function isSaveableChannel(item10025) {
  return item10025.type === ChannelTypes.DM || item10025.type === ChannelTypes.GROUP_DM || item10025.type === ChannelTypes.GUILD_TEXT;
}
function addFallback(guildId, id, extendedMemoryLru) {
  if (!extendedMemoryLru.hasExtended(id.id)) {
    const obj = { guildId, channelId: null, channelType: null, fallback: true };
    ({ id: obj.channelId, type: obj.channelType } = id);
    extendedMemoryLru.put(id.id, obj);
  }
}
function mergeInto(extendedMemoryLru, allEntries) {
  const allEntriesResult = allEntries.allEntries();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let putResult = extendedMemoryLru.put(tmp5[0], tmp5[1]);
    continue;
  }
  return extendedMemoryLru;
}
const ChannelTypes = fn(1074).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_database/modules/messages/withFallbacks.tsx");

export const withFallbacks = function withFallbacks(global, arg1) {
  if (global.totalLength >= arg1) {
    return global;
  } else {
    const extendedMemoryLru = new ExtendedMemoryLru.ExtendedMemoryLru(global.primaryCapacity, global.extendedCapacity);
    const diff = arg1 - global.totalLength;
    const guildFolders = SortedGuildStore.getGuildFolders();
    const iter = guildFolders[Symbol.iterator]();
    while (iter !== undefined) {
      let guildIds = iter.next().guildIds;
      for (const item10013 of guildIds) {
        let _Object = Object;
        let values = Object.values(ChannelStore.getMutableBasicGuildChannelsForGuild(item10013));
        for (const item10025 of values) {
          let isReadableChannelResult = isSaveableChannel(item10025);
          if (isReadableChannelResult) {
            let obj3 = isReadableChannel;
            isReadableChannelResult = obj3.isReadableChannel(item10025);
          }
          if (isReadableChannelResult) {
            let obj4 = isLimitedChannel;
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
    mergeInto(extendedMemoryLru, global);
    return extendedMemoryLru;
  }
};