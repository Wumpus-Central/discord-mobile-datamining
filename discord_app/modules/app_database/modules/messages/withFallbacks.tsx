// discord_app/modules/app_database/modules/messages/withFallbacks.tsx
import _slicedToArray from "_slicedToArray";
import ensureGuildLoaded from "ensureGuildLoaded";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { ChannelTypes } from "ME";

const require = arg1;
function isSaveableChannel(item10025) {
  return item10025.type === ChannelTypes.DM || item10025.type === ChannelTypes.GROUP_DM || item10025.type === ChannelTypes.GUILD_TEXT;
}
function addFallback(arg0, id, extendedMemoryLru) {
  if (!extendedMemoryLru.hasExtended(id.id)) {
    const obj = { guildId: null, channelId: null, channelType: null, fallback: true };
    obj[0] = arg0;
    ({ id: obj[1], type: obj[2] } = id);
    extendedMemoryLru.put(id.id, obj);
  }
}
function mergeInto(extendedMemoryLru, allEntries) {
  const allEntriesResult = allEntries.allEntries();
  while (tmp2 !== undefined) {
    let tmp4 = callback;
    let tmp5 = callback(tmp3, 2);
    let putResult = extendedMemoryLru.put(tmp5[0], tmp5[1]);
    continue;
  }
  return extendedMemoryLru;
}
const result = require("insertUnsortedGuilds").fileFinishedImporting("modules/app_database/modules/messages/withFallbacks.tsx");

export const withFallbacks = function withFallbacks(extendedMemoryLru, arg1) {
  if (extendedMemoryLru.totalLength >= arg1) {
    return extendedMemoryLru;
  } else {
    extendedMemoryLru = new require(5741) /* totalLength */.ExtendedMemoryLru(extendedMemoryLru.primaryCapacity, extendedMemoryLru.extendedCapacity);
    const diff = arg1 - extendedMemoryLru.totalLength;
    guildFolders = guildFolders.getGuildFolders();
    const iter = guildFolders[Symbol.iterator]();
    while (iter !== undefined) {
      let guildIds = iter.next().guildIds;
      let tmp3 = guildIds;
      let tmp4 = guildIds;
      for (const item10013 of guildIds) {
        let _Object = Object;
        let tmp6 = mutableBasicGuildChannelsForGuild;
        let tmp5 = item10013;
        let values = Object.values(mutableBasicGuildChannelsForGuild.getMutableBasicGuildChannelsForGuild(item10013));
        let tmp8 = values;
        let tmp9 = values;
        for (const item10025 of values) {
          let tmp10 = item10025;
          let tmp11 = isSaveableChannel;
          let isReadableChannelResult = isSaveableChannel(item10025);
          if (isReadableChannelResult) {
            let tmp13 = require;
            let tmp14 = dependencyMap;
            let obj3 = require(5745) /* isReadableChannel */;
            let tmp15 = item10025;
            isReadableChannelResult = obj3.isReadableChannel(tmp10);
          }
          if (isReadableChannelResult) {
            let tmp16 = require;
            let tmp17 = dependencyMap;
            let obj4 = require(5746) /* LIMITED_GUILD_MEMBER_THRESHOLD */;
            let tmp18 = item10025;
            isReadableChannelResult = !obj4.isLimitedChannel(tmp10);
          }
          if (isReadableChannelResult) {
            let tmp19 = addFallback;
            let tmp20 = item10013;
            let tmp21 = item10025;
            let tmp22 = addFallback(tmp5, tmp10, extendedMemoryLru);
          }
          if (extendedMemoryLru.totalLength >= diff) {
            let tmp23 = mergeInto;
            let tmp24 = mergeInto(extendedMemoryLru, arg0);
            let tmp25 = obj2;
            obj2.return();
            let tmp26 = obj;
            obj.return();
            let tmp27 = iter;
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