// === Module 10022: computeThreadNotificationSetting ===

// Module 10022 (computeThreadNotificationSetting)
import hasFlag from "hasFlag" /* 1403 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal" /* 5043 */;
import storeThread from "storeThread" /* 4023 */;
import { ThreadMemberFlags } from "AbortCodes" /* 1235 */;
import { UserNotificationSettings } from "ME" /* 676 */;

require = fn;
function computeThreadNotificationSetting(channel) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = closure_4;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = closure_3;
  }
  let obj3 = arg3;
  if (arg3 === undefined) {
    obj3 = closure_2;
  }
  const flagsResult = obj.flags(channel.id);
  if (null == flagsResult) {
    return ThreadMemberFlags.NO_MESSAGES;
  } else {
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return ThreadMemberFlags.ALL_MESSAGES;
    } else {
      let tmp6Result = hasFlag;
      if (tmp6Result.hasFlag(flagsResult, ThreadMemberFlags.ONLY_MENTIONS)) {
        return ThreadMemberFlags.ONLY_MENTIONS;
      } else {
        tmp6Result = hasFlag;
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
    obj6 = hasFlag;
  }
}
let result = require("obj132").fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  const _require = channel;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [channel];
  return _require(589).useStateFromStores(items, () => computeThreadNotificationSetting(closure_0), items1);
};