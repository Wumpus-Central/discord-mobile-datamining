// === Module 15704: markGuildsAsRead ===

// Module 15704 (markGuildsAsRead)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import _modDef12 from "module_12" /* 12 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import ReadStateActionCreators from "ReadStateActionCreators" /* 7266 */;
import GuildOnboardingPromptsStore from "GuildOnboardingPromptsStore" /* 7255 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 6828 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildChannelStore from "GuildChannelStore" /* 4935 */;
import ReadStateStore from "ReadStateStore" /* 6829 */;

require = fn;
const AnalyticEvents = fn(1084).AnalyticEvents;
const ReadStateTypes = fn(6763).ReadStateTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  const mapped = _modDef12.flatMap(arr, (id) => {
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(id);
    const vocalChannelIds = GuildChannelStore.getVocalChannelIds(id);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(id);
    const iter = selectableChannelIds[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = activeJoinedThreadsForGuild[iter.next()];
      if (obj == null) {
        obj = {};
      }
      for (const key10027 in obj) {
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  }).map((channelId) => {
    const obj = { channelId, readStateType: constants.CHANNEL, messageId: null };
    channel = channel.getChannel(channelId);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const _Date = Date;
      let fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
    } else {
      fromTimestampResult = ReadStateStore.lastMessageId(channelId);
    }
    obj.messageId = fromTimestampResult;
    return obj;
  });
  const item = arr.forEach((item) => {
    const obj = { channelId: SnowflakeUtilsDefault.cast(item), readStateType: ReadStateTypes.GUILD_EVENT, messageId: ReadStateStore.lastMessageId(item, ReadStateTypes.GUILD_EVENT) };
    mapped.push(obj);
    const obj3 = { channelId: null, readStateType: null, messageId: null };
    obj3.channelId = SnowflakeUtilsDefault.cast(item);
    obj3.readStateType = ReadStateTypes.GUILD_ONBOARDING_QUESTION;
    obj3.messageId = GuildOnboardingPromptsStore.ackIdForGuild(item);
    mapped.push(obj3);
  });
  const flatMapResult = _modDef12.flatMap(arr, (id) => {
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(id);
    const vocalChannelIds = GuildChannelStore.getVocalChannelIds(id);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(id);
    const iter = selectableChannelIds[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = activeJoinedThreadsForGuild[iter.next()];
      if (obj == null) {
        obj = {};
      }
      for (const key10027 in obj) {
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  });
  AnalyticsUtilsDefault.track(AnalyticEvents.MARK_AS_READ, { source, type: "guild" });
  let obj3 = { source, type: "guild" };
  return mapped(7266).bulkAck(mapped, onFinished);
};
export function markChannelsAsRead(arr, source, onFinished) {
  const mapped = arr.map((channelId) => {
    const obj = { channelId, readStateType: constants.CHANNEL, messageId: null };
    channel = channel.getChannel(channelId);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const _Date = Date;
      let fromTimestampResult = SnowflakeUtilsDefault.fromTimestamp(Date.now());
    } else {
      fromTimestampResult = ReadStateStore.lastMessageId(channelId);
    }
    obj.messageId = fromTimestampResult;
    return obj;
  });
  AnalyticsUtilsDefault.track(AnalyticEvents.MARK_AS_READ, { source, type: "guild" });
  const obj2 = { source, type: "guild" };
  return ReadStateActionCreators.bulkAck(mapped, onFinished);
}