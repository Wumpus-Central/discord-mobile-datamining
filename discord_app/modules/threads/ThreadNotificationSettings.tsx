// === Module 10088: ThreadNotificationSettings ===

// Module 10088 (ThreadNotificationSettings)
import FlagUtils from "FlagUtils" /* 1384 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 4741 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4201 */;

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
      let tmp6Result = FlagUtils;
      if (tmp6Result.hasFlag(flagsResult, ThreadMemberFlags.ONLY_MENTIONS)) {
        return ThreadMemberFlags.ONLY_MENTIONS;
      } else {
        tmp6Result = FlagUtils;
        if (tmp6Result.hasFlag(flagsResult, ThreadMemberFlags.NO_MESSAGES)) {
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
      }
    }
    obj6 = FlagUtils;
  }
}
const ThreadMemberFlags = fn(1113).ThreadMemberFlags;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  _require = channel;
  const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
  const items1 = [channel];
  return require("initialize").useStateFromStores(items, () => computeThreadNotificationSetting(closure_0), items1);
};