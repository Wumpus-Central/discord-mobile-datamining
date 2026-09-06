// === Module 7307: ForumUtils ===

// Module 7307 (ForumUtils)
import util from "util" /* 1114 */;
import ThreadSortOrder from "ThreadSortOrder" /* 1966 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildStore from "GuildStore" /* 1979 */;
import ReadStateStore from "ReadStateStore" /* 4575 */;

require = fn;
function getCreationDefaultFormatter() {
  const time = { minutes: util.t.nFt9ck, hours: util.t.jzCewe, days: util.t.U4I0sw, month: null };
  const intl = util.intl;
  time.month = intl.string(util.t["nBNJ/L"]);
  return time;
}
const ForumTimestampFormats = fn(7273).ForumTimestampFormats;
const ChannelFlags = fn(1964).ChannelFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/ForumUtils.tsx");

export const getForumPostReadStates = function getForumPostReadStates(isArchivedThread, guild) {
  let tmp = items;
  if (items === undefined) {
    items = [ReadStateStore];
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
  obj.hasUnreads = isForumPostUnreadResult;
  return obj;
};
export const getForumPostReadStatesById = function getForumPostReadStatesById(item) {
  let tmp = arg1;
  if (arg1 === undefined) {
    const items = [ChannelStore, GuildStore, ReadStateStore];
    tmp = items;
  }
  [obj, obj2, tmp5] = tmp;
  const channel = obj.getChannel(item);
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
      obj = { isNew: isNewForumThreadResult, hasUnreads: null };
      const isArchivedThreadResult1 = channel.isArchivedThread();
      let isForumPostUnreadResult = !isArchivedThreadResult1;
      if (!isArchivedThreadResult1) {
        isForumPostUnreadResult = obj4.isForumPostUnread(channel.id);
      }
      obj.hasUnreads = isForumPostUnreadResult;
      tmp11 = obj;
    }
    return tmp11;
  }
};
export const getForumTimestampFormatter = function getForumTimestampFormatter(arg0, DURATION_AGO) {
  if (DURATION_AGO === ForumTimestampFormats.POSTED_DURATION_AGO) {
    if (arg0 === ThreadSortOrder.ThreadSortOrder.CREATION_DATE) {
      return getCreationDefaultFormatter;
    }
  }
};
export const canDisplayPostUnreadMessageCount = function canDisplayPostUnreadMessageCount(id, items) {
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
  const channel = ChannelStore.getChannel(id);
  let hasFlagResult;
  if (channel != null) {
    hasFlagResult = channel.hasFlag(ChannelFlags.PINNED);
  }
  return true === hasFlagResult;
};