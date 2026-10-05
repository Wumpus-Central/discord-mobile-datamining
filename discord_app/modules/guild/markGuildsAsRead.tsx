// discord_app/modules/guild/markGuildsAsRead.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import ReadStateConstants from "../read_states/ReadStateConstants.tsx";
import GuildOnboardingPromptsStore from "../guild_onboarding/GuildOnboardingPromptsStore.tsx";
import ActiveJoinedThreadsStore from "../threads/ActiveJoinedThreadsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import ReadStateStore from "../../stores/ReadStateStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let activeJoinedThreadsForGuild, channel;

const AnalyticEvents = Constants.AnalyticEvents;
const ReadStateTypes = ReadStateConstants.ReadStateTypes;
const result = size.fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = _modDef12;
  const flatMapResult = obj.flatMap(arr, (id) => {
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
  const mapped = flatMapResult.map((channelId) => {
    let fromTimestampResult;
    const obj = { channelId, readStateType: constants.CHANNEL, messageId: fromTimestampResult };
    channel = channel.getChannel(channelId);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const _Date = Date;
      const obj3 = SnowflakeUtilsDefault;
      fromTimestampResult = obj3.fromTimestamp(Date.now());
    } else {
      fromTimestampResult = ReadStateStore.lastMessageId(channelId);
    }
    return obj;
  });
  const item = arr.forEach((item) => {
    let obj2;
    let obj4;
    const push = mapped.push;
    const obj = {
      channelId: obj2.cast(item),
      readStateType: ReadStateTypes.GUILD_EVENT,
      messageId: ReadStateStore.lastMessageId(item, ReadStateTypes.GUILD_EVENT),
    };
    obj2 = SnowflakeUtilsDefault;
    push(obj);
    const push2 = mapped.push;
    const obj3 = {
      channelId: obj4.cast(item),
      readStateType: ReadStateTypes.GUILD_ONBOARDING_QUESTION,
      messageId: GuildOnboardingPromptsStore.ackIdForGuild(item),
    };
    obj4 = SnowflakeUtilsDefault;
    push2(obj3);
  });
  let obj2 = AnalyticsUtilsDefault;
  let obj3 = { source, type: "guild" };
  obj2.track(AnalyticEvents.MARK_AS_READ, obj3);
  let obj4 = mapped(6605);
  return obj4.bulkAck(mapped, onFinished);
}
