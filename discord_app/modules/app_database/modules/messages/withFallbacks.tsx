// discord_app/modules/app_database/modules/messages/withFallbacks.tsx
import Constants from "../../../../Constants.tsx";
import ExtendedMemoryLru from "../../util/ExtendedMemoryLru.tsx";
import isReadableChannel from "isReadableChannel.tsx";
import isLimitedChannel from "isLimitedChannel.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function isSaveableChannel(item10025) {
  return (
    item10025.type === ChannelTypes.DM ||
    item10025.type === ChannelTypes.GROUP_DM ||
    item10025.type === ChannelTypes.GUILD_TEXT
  );
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
  const tmp2 = allEntriesResult[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    let putResult = extendedMemoryLru.put(tmp5[0], tmp5[1]);
    continue;
  }
  return extendedMemoryLru;
}
const ChannelTypes = Constants.ChannelTypes;
const result = size.fileFinishedImporting("modules/app_database/modules/messages/withFallbacks.tsx");

export const withFallbacks = function withFallbacks(extendedMemoryLru, arg1) {
  if (extendedMemoryLru.totalLength >= arg1) {
    return extendedMemoryLru;
  } else {
    const self = this;
    const self2 = this;
    extendedMemoryLru = new ExtendedMemoryLru.ExtendedMemoryLru(
      extendedMemoryLru.primaryCapacity,
      extendedMemoryLru.extendedCapacity,
    );
    const diff = arg1 - extendedMemoryLru.totalLength;
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
            let tmp24 = mergeInto(extendedMemoryLru, extendedMemoryLru);
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
