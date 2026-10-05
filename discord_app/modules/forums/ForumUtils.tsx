// === Module 6810: ForumUtils ===

// Module 6810 (ForumUtils)
import intl2 from "intl" /* 1126 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import ThreadSortOrder from "ThreadSortOrder" /* 2061 */;
import ForumConstants from "ForumConstants" /* 6776 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildStore from "GuildStore" /* 2074 */;
import ReadStateStore from "ReadStateStore" /* 4905 */;
import size from "module_2" /* 2 */;

function getCreationDefaultFormatter() {
  let intl;
  const time = { minutes: intl2.t.nFt9ck, hours: intl2.t.jzCewe, days: intl2.t.U4I0sw, month: intl.string(intl2.t["nBNJ/L"]) };
  intl = intl2.intl;
  return time;
}
const ForumTimestampFormats = ForumConstants.ForumTimestampFormats;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/forums/ForumUtils.tsx");

export const getForumPostReadStates = function getForumPostReadStates(isArchivedThread, guild) {
  let isArchivedThreadResult1;
  let items;
  let obj;
  let tmp = items;
  if (items === undefined) {
    items = [ReadStateStore];
    tmp = items;
  }
  [obj] = tmp;
  let isNewForumThreadResult = !isArchivedThread.isArchivedThread();
  isArchivedThread.isArchivedThread();
  if (isNewForumThreadResult) {
    isNewForumThreadResult = obj.isNewForumThread(isArchivedThread.id, isArchivedThread.parent_id, guild);
  }
  const obj2 = { isNew: isNewForumThreadResult, hasUnreads: !isArchivedThreadResult1 && obj.isForumPostUnread(isArchivedThread.id) };
  isArchivedThreadResult1 = isArchivedThread.isArchivedThread();
  !isArchivedThreadResult1 && obj.isForumPostUnread(isArchivedThread.id);
  return obj2;
};
export const getForumPostReadStatesById = function getForumPostReadStatesById(item) {
  let isArchivedThreadResult1;
  let obj;
  let obj2;
  let obj4;
  let tmp5;
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
      const obj3 = { isNew: !isArchivedThreadResult && obj4.isNewForumThread(channel.id, channel.parent_id, guild), hasUnreads: !isArchivedThreadResult1 && obj4.isForumPostUnread(channel.id) };
      !isArchivedThreadResult && obj4.isNewForumThread(channel.id, channel.parent_id, guild);
      isArchivedThreadResult1 = channel.isArchivedThread();
      tmp11 = obj3;
      !isArchivedThreadResult1 && obj4.isForumPostUnread(channel.id);
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
  let obj;
  [obj] = items;
  let hasTrackedUnreadResult = obj.hasTrackedUnread(id);
  const hasOpenedThreadResult = obj.hasOpenedThread(id);
  const tmp3 = null != obj.getTrackedAckMessageId(id);
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