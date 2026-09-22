// === Module 16662: useFavoritesGuildUnreads ===

// Module 16662 (useFavoritesGuildUnreads)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import ActiveJoinedThreadsStore from "ActiveJoinedThreadsStore" /* 5725 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4398 */;
import ChannelStore from "ChannelStore" /* 2042 */;
import GuildReadStateStore from "GuildReadStateStore" /* 7875 */;
import PermissionStore from "PermissionStore" /* 4396 */;
import ReadStateStore from "ReadStateStore" /* 4772 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4938 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default function useFavoritesGuildUnreads(arg0) {
  _require = arg0;
  const items = [ActiveJoinedThreadsStore, ChannelStore, GuildReadStateStore, JoinedThreadsStore, PermissionStore, ReadStateStore, UserGuildSettingsStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const keys = SnowflakeUtilsDefault.keys(closure_0);
    const set = new Set();
    return keys.reduce((badge, item) => {
      channel = channel.getChannel(item);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const mentionCount = ReadStateStore.getMentionCount(item);
      if (!set.has(item)) {
        set.add(item);
        badge.badge = badge.badge + mentionCount;
      }
      let unread = badge.unread;
      if (!unread) {
        let hasUnreadResult = ReadStateStore.hasUnread(item);
        if (hasUnreadResult) {
          hasUnreadResult = GuildReadStateStore.shouldCountChannelUnread(channel, mentionCount);
        }
        unread = hasUnreadResult;
      }
      badge.unread = unread;
      if (null != guildId) {
        activeJoinedRelevantThreadsForParent = activeJoinedRelevantThreadsForParent.getActiveJoinedRelevantThreadsForParent(guildId, item);
        for (const key10024 in activeJoinedRelevantThreadsForParent) {
          let mentionCount1 = ReadStateStore.getMentionCount(key10024);
          if (!set.has(key10024)) {
            let addResult1 = set.add(key10024);
            arg0.badge = arg0.badge + mentionCount1;
          }
          let unread2 = arg0.unread;
          if (!unread2) {
            let hasUnreadResult1 = ReadStateStore.hasUnread(key10024);
            if (hasUnreadResult1) {
              hasUnreadResult1 = GuildReadStateStore.shouldCountChannelUnread(tmp8, mentionCount1);
            }
            unread2 = hasUnreadResult1;
          }
          arg0.unread = unread2;
          continue;
        }
      }
      return badge;
    }, { badge: 0, unread: false });
  });
};