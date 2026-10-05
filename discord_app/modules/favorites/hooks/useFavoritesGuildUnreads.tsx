// discord_app/modules/favorites/hooks/useFavoritesGuildUnreads.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import ActiveJoinedThreadsStore from "../../threads/ActiveJoinedThreadsStore.tsx";
import JoinedThreadsStore from "../../threads/JoinedThreadsStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildReadStateStore from "../../../stores/GuildReadStateStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import UserGuildSettingsStore from "../../../stores/UserGuildSettingsStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, activeJoinedRelevantThreadsForParent, channel, set;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp12;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [
          ActiveJoinedThreadsStore,
          ChannelStore,
          GuildReadStateStore,
          JoinedThreadsStore,
          PermissionStore,
          ReadStateStore,
          UserGuildSettingsStore,
        ];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function c() {
          const obj = SnowflakeUtilsDefault;
          const keys = obj.keys(closure_0);
          set = new Set();
          return keys.reduce(
            (badge, item) => {
              channel = channel.getChannel(item);
              let guildId;
              if (channel != null) {
                guildId = channel.getGuildId();
              }
              const mentionCount = closure_2_8.getMentionCount(item);
              if (!set.has(item)) {
                set.add(item);
                badge.badge = badge.badge + mentionCount;
              }
              let unread = badge.unread;
              if (!unread) {
                unread = closure_2_8.hasUnread(item) && closure_2_6.shouldCountChannelUnread(channel, mentionCount);
                const hasUnreadResult =
                  closure_2_8.hasUnread(item) && closure_2_6.shouldCountChannelUnread(channel, mentionCount);
              }
              badge.unread = unread;
              if (null != guildId) {
                activeJoinedRelevantThreadsForParent =
                  activeJoinedRelevantThreadsForParent.getActiveJoinedRelevantThreadsForParent(guildId, item);
                for (const key10024 in activeJoinedRelevantThreadsForParent) {
                  let mentionCount1 = closure_2_8.getMentionCount(key10024);
                  if (!set.has(key10024)) {
                    let addResult1 = set.add(key10024);
                    badge.badge = badge.badge + mentionCount1;
                  }
                  let unread2 = badge.unread;
                  if (!unread2) {
                    let hasUnreadResult1 =
                      closure_2_8.hasUnread(key10024) && closure_2_6.shouldCountChannelUnread(tmp8, mentionCount1);
                    unread2 = hasUnreadResult1;
                  }
                  badge.unread = unread2;
                  continue;
                }
              }
              return badge;
            },
            { badge: 0, unread: false },
          );
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, tmp12);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [
        ActiveJoinedThreadsStore,
        ChannelStore,
        GuildReadStateStore,
        JoinedThreadsStore,
        PermissionStore,
        ReadStateStore,
        UserGuildSettingsStore,
      ];
      return obj.useStateFromStoresObject(items, () => {
        const obj = SnowflakeUtilsDefault;
        const keys = obj.keys(closure_0);
        set = new Set();
        return keys.reduce(
          (badge, item) => {
            channel = channel.getChannel(item);
            let guildId;
            if (channel != null) {
              guildId = channel.getGuildId();
            }
            const mentionCount = closure_2_8.getMentionCount(item);
            if (!set.has(item)) {
              set.add(item);
              badge.badge = badge.badge + mentionCount;
            }
            let unread = badge.unread;
            if (!unread) {
              unread = closure_2_8.hasUnread(item) && closure_2_6.shouldCountChannelUnread(channel, mentionCount);
              const hasUnreadResult =
                closure_2_8.hasUnread(item) && closure_2_6.shouldCountChannelUnread(channel, mentionCount);
            }
            badge.unread = unread;
            if (null != guildId) {
              activeJoinedRelevantThreadsForParent =
                activeJoinedRelevantThreadsForParent.getActiveJoinedRelevantThreadsForParent(guildId, item);
              for (const key10024 in activeJoinedRelevantThreadsForParent) {
                let mentionCount1 = closure_2_8.getMentionCount(key10024);
                if (!set.has(key10024)) {
                  let addResult1 = set.add(key10024);
                  badge.badge = badge.badge + mentionCount1;
                }
                let unread2 = badge.unread;
                if (!unread2) {
                  let hasUnreadResult1 =
                    closure_2_8.hasUnread(key10024) && closure_2_6.shouldCountChannelUnread(tmp8, mentionCount1);
                  unread2 = hasUnreadResult1;
                }
                badge.unread = unread2;
                continue;
              }
            }
            return badge;
          },
          { badge: 0, unread: false },
        );
      });
    };
const result = size.fileFinishedImporting("modules/favorites/hooks/useFavoritesGuildUnreads.tsx");

export default tmp2;
