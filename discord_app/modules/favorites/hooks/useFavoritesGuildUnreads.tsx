// === Module 15575: useFavoritesGuildUnreads ===

// Module 15575 (useFavoritesGuildUnreads)
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import rebuild from "rebuild" /* 5251 */;
import storeThread from "storeThread" /* 4023 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel" /* 5383 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import generateOldThreadCutoff from "generateOldThreadCutoff" /* 4772 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default function useFavoritesGuildUnreads(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_5, closure_6, closure_4, closure_7, closure_8, closure_9];
  return _require(589).useStateFromStoresObject(items, () => {
    const keys = DISCORD_EPOCHDefault.keys(set);
    set = new Set();
    return keys.reduce((acc, item, index) => {
      const channel = closure_1_5.getChannel(item);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const mentionCount = closure_1_8.getMentionCount(item);
      if (!set.has(item)) {
        set.add(item);
        acc.badge = acc.badge + mentionCount;
      }
      let unread = acc.unread;
      if (!unread) {
        let hasUnreadResult = closure_1_8.hasUnread(item);
        if (hasUnreadResult) {
          hasUnreadResult = closure_1_6.shouldCountChannelUnread(channel, mentionCount);
        }
        unread = hasUnreadResult;
      }
      acc.unread = unread;
      if (null != guildId) {
        const activeJoinedRelevantThreadsForParent = closure_1_3.getActiveJoinedRelevantThreadsForParent(guildId, item);
        for (const key10024 in activeJoinedRelevantThreadsForParent) {
          let mentionCount1 = closure_1_8.getMentionCount(key10024);
          if (!set.has(key10024)) {
            let addResult1 = set.add(key10024);
            arg0.badge = arg0.badge + mentionCount1;
          }
          let unread2 = arg0.unread;
          if (!unread2) {
            let hasUnreadResult1 = closure_1_8.hasUnread(key10024);
            if (hasUnreadResult1) {
              hasUnreadResult1 = closure_1_6.shouldCountChannelUnread(tmp8, mentionCount1);
            }
            unread2 = hasUnreadResult1;
          }
          arg0.unread = unread2;
          continue;
        }
      }
      return acc;
    }, { badge: 0, unread: false });
  });
};