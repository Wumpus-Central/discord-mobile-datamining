// === Module 15276: useFavoritesGuildUnreads ===

// Module 15276 (useFavoritesGuildUnreads)
import rebuild from "rebuild";
import storeThread from "storeThread";
import ensureGuildLoaded from "ensureGuildLoaded";
import updateGuildUnreadSentinel from "updateGuildUnreadSentinel";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import generateOldThreadCutoff from "generateOldThreadCutoff";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";

const require = arg1;
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default function useFavoritesGuildUnreads(arg0) {
  const _require = arg0;
  const items = [rebuild, ensureGuildLoaded, updateGuildUnreadSentinel, storeThread, getUncachedChannelPermissions, generateOldThreadCutoff, updateUserGuildSettingsInternal];
  return _require(589).useStateFromStoresObject(items, () => {
    const keys = outer1_1(outer1_2[8]).keys(set);
    set = new Set();
    return keys.reduce((badge, id) => {
      const channel = outer1_5.getChannel(id);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const mentionCount = outer1_8.getMentionCount(id);
      if (!set.has(id)) {
        set.add(id);
        badge.badge = badge.badge + mentionCount;
      }
      let unread = badge.unread;
      if (!unread) {
        let hasUnreadResult = outer1_8.hasUnread(id);
        if (hasUnreadResult) {
          hasUnreadResult = outer1_6.shouldCountChannelUnread(channel, mentionCount);
        }
        unread = hasUnreadResult;
      }
      badge.unread = unread;
      if (null != guildId) {
        const activeJoinedRelevantThreadsForParent = outer1_3.getActiveJoinedRelevantThreadsForParent(guildId, id);
        for (const key10024 in activeJoinedRelevantThreadsForParent) {
          let tmp14 = key10024;
          let obj4 = outer1_8;
          let mentionCount1 = outer1_8.getMentionCount(key10024);
          let obj5 = set;
          if (!set.has(key10024)) {
            let addResult1 = obj5.add(key10024);
            arg0.badge = arg0.badge + mentionCount1;
          }
          let tmp7 = outer1_5;
          let unread2 = arg0.unread;
          if (!unread2) {
            let hasUnreadResult1 = obj4.hasUnread(key10024);
            if (hasUnreadResult1) {
              let tmp10 = outer1_6;
              hasUnreadResult1 = outer1_6.shouldCountChannelUnread(tmp8, mentionCount1);
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