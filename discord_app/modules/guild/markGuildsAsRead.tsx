// === Module 13420: markGuildsAsRead ===

// Module 13420 (markGuildsAsRead)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import applyDefault from "apply" /* 12 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import handleUpdate from "handleUpdate" /* 6788 */;
import rebuild from "rebuild" /* 5251 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import comparator from "comparator" /* 1980 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { ReadStateTypes } from "ReadStateTypes" /* 5044 */;

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