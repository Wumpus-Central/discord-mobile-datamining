// discord_app/modules/guild/markGuildsAsRead.tsx
import applyDefault from "../../../_runtime/00012_apply.js";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import closure_3 from "../guild_onboarding/GuildOnboardingPromptsStore.tsx";
import closure_4 from "../threads/ActiveJoinedThreadsStore.tsx";
import closure_5 from "../../stores/ChannelStore.tsx";
import closure_6 from "../../stores/GuildChannelStore.tsx";
import closure_7 from "../../stores/ReadStateStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import { ReadStateTypes } from "../read_states/ReadStateConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = applyDefault;
  const mapped = obj.flatMap(arr, (closure_0) => {
    const selectableChannelIds = store.getSelectableChannelIds(closure_0);
    const vocalChannelIds = store.getVocalChannelIds(closure_0);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(closure_0);
    const iter = selectableChannelIds[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = activeJoinedThreadsForGuild[iter.next()];
      if (obj == null) {
        obj = {};
      }
      let tmp4 = obj;
      for (const key10027 in obj) {
        let tmp5 = key10027;
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
      let fromTimestampResult = callback(table[8]).fromTimestamp(Date.now());
      const obj3 = callback(table[8]);
    } else {
      fromTimestampResult = closure_7.lastMessageId(channelId);
    }
    obj[2] = fromTimestampResult;
    return obj;
  });
  const item = arr.forEach((id) => {
    let obj = { channelId: closure_1_1(closure_1_2[8]).cast(id), readStateType: closure_1_9.GUILD_EVENT, messageId: closure_1_7.lastMessageId(id, closure_1_9.GUILD_EVENT) };
    mapped.push(obj);
    obj = { channelId: null, readStateType: null, messageId: null };
    const obj2 = closure_1_1(closure_1_2[8]);
    obj[0] = closure_1_1(closure_1_2[8]).cast(id);
    obj[1] = closure_1_9.GUILD_ONBOARDING_QUESTION;
    obj[2] = closure_1_3.ackIdForGuild(id);
    mapped.push(obj);
  });
  const flatMapResult = obj.flatMap(arr, (closure_0) => {
    const selectableChannelIds = store.getSelectableChannelIds(closure_0);
    const vocalChannelIds = store.getVocalChannelIds(closure_0);
    const items = [...vocalChannelIds];
    activeJoinedThreadsForGuild = activeJoinedThreadsForGuild.getActiveJoinedThreadsForGuild(closure_0);
    const iter = selectableChannelIds[Symbol.iterator]();
    while (iter !== undefined) {
      let obj = activeJoinedThreadsForGuild[iter.next()];
      if (obj == null) {
        obj = {};
      }
      let tmp4 = obj;
      for (const key10027 in obj) {
        let tmp5 = key10027;
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  });
  obj = { source, type: "guild" };
  expandEventPropertiesDefault.track(AnalyticEvents.MARK_AS_READ, obj);
  let obj2 = expandEventPropertiesDefault;
  return mapped(5478).bulkAck(mapped, onFinished);
};