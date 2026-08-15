// discord_app/modules/guild/markGuildsAsRead.tsx
import handleUpdate from "handleUpdate";
import rebuild from "rebuild";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { AnalyticEvents } from "ME";
import { ReadStateTypes } from "ReadStateTypes";
import { apply } from "../../../_runtime/00012_apply.js";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";

const require = arg1;
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild/markGuildsAsRead.tsx");

export default function markGuildsAsRead(arr, source, onFinished) {
  let obj = apply;
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
      fromTimestampResult = generateOldThreadCutoff.lastMessageId(channelId);
    }
    obj[2] = fromTimestampResult;
    return obj;
  });
  const item = arr.forEach((id) => {
    let obj = { channelId: null, readStateType: null, messageId: null };
    obj[0] = outer1_1(outer1_2[8]).cast(id);
    obj[1] = outer1_9.GUILD_EVENT;
    obj[2] = outer1_7.lastMessageId(id, outer1_9.GUILD_EVENT);
    mapped.push(obj);
    obj = { channelId: null, readStateType: null, messageId: null };
    const obj2 = outer1_1(outer1_2[8]);
    obj[0] = outer1_1(outer1_2[8]).cast(id);
    obj[1] = outer1_9.GUILD_ONBOARDING_QUESTION;
    obj[2] = outer1_3.ackIdForGuild(id);
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
  expandEventProperties.track(AnalyticEvents.MARK_AS_READ, obj);
  let obj2 = expandEventProperties;
  return mapped(5277).bulkAck(mapped, onFinished);
};