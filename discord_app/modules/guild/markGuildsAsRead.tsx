// discord_app/modules/guild/markGuildsAsRead.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import GuildOnboardingPromptsStore from "../guild_onboarding/GuildOnboardingPromptsStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";

const require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const ReadStateTypes = fn(4742).ReadStateTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = _modDef12;
  const mapped = obj
    .flatMap(arr, (guildId) => {
      const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guildId);
      const vocalChannelIds = GuildChannelStore.getVocalChannelIds(guildId);
      const items = [...vocalChannelIds];
      activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(guildId);
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
    })
    .map((channelId) => {
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
    let obj = {
      channelId: SnowflakeUtilsDefault.cast(item),
      readStateType: ReadStateTypes.GUILD_EVENT,
      messageId: ReadStateStore.lastMessageId(item, ReadStateTypes.GUILD_EVENT),
    };
    mapped.push(obj);
    obj = { channelId: null, readStateType: null, messageId: null };
    obj.channelId = SnowflakeUtilsDefault.cast(item);
    obj.readStateType = ReadStateTypes.GUILD_ONBOARDING_QUESTION;
    obj.messageId = GuildOnboardingPromptsStore.ackIdForGuild(item);
    mapped.push(obj);
  });
  const flatMapResult = obj.flatMap(arr, (guildId) => {
    const selectableChannelIds = GuildChannelStore.getSelectableChannelIds(guildId);
    const vocalChannelIds = GuildChannelStore.getVocalChannelIds(guildId);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(guildId);
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
  obj = { source, type: "guild" };
  AnalyticsUtilsDefault.track(AnalyticEvents.MARK_AS_READ, obj);
  return mapped(7110).bulkAck(mapped, onFinished);
}
