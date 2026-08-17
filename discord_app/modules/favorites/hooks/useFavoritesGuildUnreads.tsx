// discord_app/modules/favorites/hooks/useFavoritesGuildUnreads.tsx
import closure_3 from "rebuild" /* 5251 */;
import closure_4 from "storeThread" /* 4023 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "updateGuildUnreadSentinel" /* 5383 */;
import closure_7 from "getUncachedChannelPermissions" /* 4021 */;
import closure_8 from "generateOldThreadCutoff" /* 4772 */;
import closure_9 from "updateUserGuildSettingsInternal" /* 5043 */;
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default function useFavoritesGuildUnreads(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_5, closure_6, closure_4, closure_7, closure_8, closure_9];
  return _initialize.useStateFromStoresObject(items, () => {
    const keys = closure_1_1(closure_1_2[8]).keys(set);
    set = new Set();
    return keys.reduce((badge, id) => {
      const channel = closure_1_5.getChannel(id);
      let guildId;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      const mentionCount = closure_1_8.getMentionCount(id);
      if (!set.has(id)) {
        set.add(id);
        badge.badge = badge.badge + mentionCount;
      }
      let unread = badge.unread;
      if (!unread) {
        let hasUnreadResult = closure_1_8.hasUnread(id);
        if (hasUnreadResult) {
          hasUnreadResult = closure_1_6.shouldCountChannelUnread(channel, mentionCount);
        }
        unread = hasUnreadResult;
      }
      badge.unread = unread;
      if (null != guildId) {
        const activeJoinedRelevantThreadsForParent = closure_1_3.getActiveJoinedRelevantThreadsForParent(guildId, id);
        for (const key10024 in activeJoinedRelevantThreadsForParent) {
          let tmp14 = key10024;
          let obj4 = closure_1_8;
          let mentionCount1 = closure_1_8.getMentionCount(key10024);
          let obj5 = set;
          if (!set.has(key10024)) {
            let addResult1 = obj5.add(key10024);
            arg0.badge = arg0.badge + mentionCount1;
          }
          let tmp7 = closure_1_5;
          let unread2 = arg0.unread;
          if (!unread2) {
            let hasUnreadResult1 = obj4.hasUnread(key10024);
            if (hasUnreadResult1) {
              let tmp10 = closure_1_6;
              hasUnreadResult1 = closure_1_6.shouldCountChannelUnread(tmp8, mentionCount1);
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