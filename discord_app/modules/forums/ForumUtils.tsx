// discord_app/modules/forums/ForumUtils.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import { ForumTimestampFormats } from "FORUM_GUIDELINES_ACTION_SHEET";
import { ChannelFlags } from "set";

const require = arg1;
function getCreationDefaultFormatter() {
  const obj = { minutes: require(1236) /* getSystemLocale */.t.nFt9ck, hours: require(1236) /* getSystemLocale */.t.jzCewe, days: require(1236) /* getSystemLocale */.t.U4I0sw, month: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["nBNJ/L"]);
  return obj;
}
const result = require("generateOldThreadCutoff").fileFinishedImporting("modules/forums/ForumUtils.tsx");

export const getForumPostReadStates = function getForumPostReadStates(isArchivedThread, guild, items) {
  let obj;
  let tmp = items;
  if (items === undefined) {
    items = [generateOldThreadCutoff];
    tmp = items;
  }
  [obj] = tmp;
  const isArchivedThreadResult = isArchivedThread.isArchivedThread();
  let isNewForumThreadResult = !isArchivedThreadResult;
  if (!isArchivedThreadResult) {
    isNewForumThreadResult = obj.isNewForumThread(isArchivedThread.id, isArchivedThread.parent_id, guild);
  }
  obj = { isNew: isNewForumThreadResult, hasUnreads: null };
  const isArchivedThreadResult1 = isArchivedThread.isArchivedThread();
  let isForumPostUnreadResult = !isArchivedThreadResult1;
  if (!isArchivedThreadResult1) {
    isForumPostUnreadResult = obj.isForumPostUnread(isArchivedThread.id);
  }
  obj[1] = isForumPostUnreadResult;
  return obj;
};
export const getForumPostReadStatesById = function getForumPostReadStatesById(arg0) {
  let obj;
  let obj2;
  let obj4;
  let tmp5;
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [ensureGuildLoaded, createGuildRecordFromRust, generateOldThreadCutoff];
    tmp = items;
  }
  [obj, obj2, tmp5] = tmp;
  const channel = obj.getChannel(arg0);
  if (null == channel) {
    return null;
  } else {
    const guild = obj2.getGuild(channel.guild_id);
    let tmp11 = null;
    if (null != guild) {
      const items1 = [tmp5];
      [obj4] = items1;
      const isArchivedThreadResult = channel.isArchivedThread();
      let isNewForumThreadResult = !isArchivedThreadResult;
      if (!isArchivedThreadResult) {
        isNewForumThreadResult = obj4.isNewForumThread(channel.id, channel.parent_id, guild);
      }
      obj = { isNew: null, hasUnreads: null };
      obj[0] = isNewForumThreadResult;
      const isArchivedThreadResult1 = channel.isArchivedThread();
      let isForumPostUnreadResult = !isArchivedThreadResult1;
      if (!isArchivedThreadResult1) {
        isForumPostUnreadResult = obj4.isForumPostUnread(channel.id);
      }
      obj[1] = isForumPostUnreadResult;
      tmp11 = obj;
    }
    return tmp11;
  }
};
export const getForumTimestampFormatter = function getForumTimestampFormatter(closure_1, DURATION_AGO) {
  if (DURATION_AGO === ForumTimestampFormats.POSTED_DURATION_AGO) {
    if (closure_1 === require(1381) /* set */.ThreadSortOrder.CREATION_DATE) {
      return getCreationDefaultFormatter;
    }
  }
};
export const canDisplayPostUnreadMessageCount = function canDisplayPostUnreadMessageCount(id, items) {
  let obj;
  [obj] = items;
  let hasTrackedUnreadResult = obj.hasTrackedUnread(id);
  const hasOpenedThreadResult = obj.hasOpenedThread(id);
  if (hasTrackedUnreadResult) {
    hasTrackedUnreadResult = hasOpenedThreadResult;
  }
  if (hasTrackedUnreadResult) {
    hasTrackedUnreadResult = tmp3;
  }
  return hasTrackedUnreadResult;
};
export const isForumPostPinned = function isForumPostPinned(id) {
  channel = channel.getChannel(id);
  let hasFlagResult;
  if (channel != null) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  return true === hasFlagResult;
};