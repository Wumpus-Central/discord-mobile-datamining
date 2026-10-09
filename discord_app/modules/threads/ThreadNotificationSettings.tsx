// === Module 6090: ThreadNotificationSettings ===

// Module 6090 (ThreadNotificationSettings)
import FlagUtils from "FlagUtils" /* 1403 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5973 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4711 */;

const require = globalThis.__r;

require = fn;
function computeThreadNotificationSetting(channel) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = JoinedThreadsStore;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = UserGuildSettingsStore;
  }
  let obj3 = arg3;
  if (arg3 === undefined) {
    obj3 = ChannelStore;
  }
  const flagsResult = obj.flags(channel.id);
  if (null == flagsResult) {
    return ThreadMemberFlags.NO_MESSAGES;
  } else {
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return ThreadMemberFlags.ALL_MESSAGES;
    } else {
      if (tmp6Result.hasFlag(flagsResult, ThreadMemberFlags.ONLY_MENTIONS)) {
        return ThreadMemberFlags.ONLY_MENTIONS;
      } else {
        if (tmp6Result2.hasFlag(flagsResult, ThreadMemberFlags.NO_MESSAGES)) {
          return ThreadMemberFlags.NO_MESSAGES;
        } else {
          channel = obj3.getChannel(channel.parent_id);
          if (null == channel) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else if (obj2.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else {
            const result = obj2.resolvedMessageNotifications(channel);
            if (result === UserNotificationSettings.NO_MESSAGES) {
              let NO_MESSAGES = ThreadMemberFlags.NO_MESSAGES;
            } else {
              NO_MESSAGES = result === tmp4.ONLY_MENTIONS ? ThreadMemberFlags.ONLY_MENTIONS : ThreadMemberFlags.ALL_MESSAGES;
            }
            return NO_MESSAGES;
          }
        }
        tmp6Result2 = FlagUtils;
      }
      tmp6Result = FlagUtils;
    }
    obj6 = FlagUtils;
  }
}
const ThreadMemberFlags = fn(1125).ThreadMemberFlags;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = ReactCompilerGating.isReactCompilerEnabled() ? (function useThreadNotificationSetting(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class N {
      constructor() {
        return computeThreadNotificationSetting(closure_0);
      }
    }
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = N;
    cResult[3] = items1;
    let tmp9 = items1;
  } else {
    class N {
      constructor() {
        return computeThreadNotificationSetting(closure_0);
      }
    }
    tmp9 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, N, tmp9);
}) : (function useThreadNotificationSetting(arg0) {
  _require = arg0;
  const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => computeThreadNotificationSetting(closure_0), items1);
});