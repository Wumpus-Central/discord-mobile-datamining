// discord_app/modules/guild/markGuildsAsRead.tsx
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import applyDefault from "../../../_runtime/00012_apply.js";
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import handleUpdate from "../guild_onboarding/GuildOnboardingPromptsStore.tsx";
import rebuild from "../threads/ActiveJoinedThreadsStore.tsx";
import ensureGuildLoaded from "../../stores/ChannelStore.tsx";
import comparator from "../../stores/GuildChannelStore.tsx";
import generateOldThreadCutoff from "../../stores/ReadStateStore.tsx";
import { AnalyticEvents } from "../../Constants.tsx";
import { ReadStateTypes } from "../read_states/ReadStateConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

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
      for (const key10027 in obj) {
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  }).map((item, index) => {
    const obj = { channelId: item, readStateType: constants.CHANNEL, messageId: null };
    channel = channel.getChannel(item);
    let isForumLikeChannelResult;
    if (channel != null) {
      isForumLikeChannelResult = channel.isForumLikeChannel();
    }
    if (isForumLikeChannelResult) {
      const _Date = Date;
      let fromTimestampResult = callback(table[8]).fromTimestamp(Date.now());
      const obj3 = callback(table[8]);
    } else {
      fromTimestampResult = closure_7.lastMessageId(item);
    }
    obj[2] = fromTimestampResult;
    return obj;
  });
  const item = arr.forEach((item, index) => {
    let obj = { channelId: DISCORD_EPOCHDefault.cast(item), readStateType: ReadStateTypes.GUILD_EVENT, messageId: closure_1_7.lastMessageId(item, ReadStateTypes.GUILD_EVENT) };
    mapped.push(obj);
    obj = { channelId: null, readStateType: null, messageId: null };
    obj[0] = DISCORD_EPOCHDefault.cast(item);
    obj[1] = ReadStateTypes.GUILD_ONBOARDING_QUESTION;
    obj[2] = closure_1_3.ackIdForGuild(item);
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
      for (const key10027 in obj) {
        let arr = items.push(key10027);
        continue;
      }
      continue;
    }
    return items;
  });
  obj = { source, type: "guild" };
  expandEventPropertiesDefault.track(AnalyticEvents.MARK_AS_READ, obj);
  return mapped(5277).bulkAck(mapped, onFinished);
};