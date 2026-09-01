// === Module 10171: computeThreadNotificationSetting ===

// Module 10171 (computeThreadNotificationSetting)
import hasFlag from "hasFlag" /* 1399 */;
import closure_2 from "ensureGuildLoaded" /* 1387 */;
import closure_3 from "updateUserGuildSettingsInternal" /* 4701 */;
import closure_4 from "storeThread" /* 4123 */;
import { ThreadMemberFlags } from "AbortCodes" /* 1235 */;
import { UserNotificationSettings } from "ME" /* 676 */;

require = arg1;
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
      return tmp8.ALL_MESSAGES;
    } else {
      let tmp6Result = tmp6(1399);
      if (tmp6Result.hasFlag(flagsResult, tmp8.ONLY_MENTIONS)) {
        return tmp8.ONLY_MENTIONS;
      } else {
        tmp6Result = tmp6(1399);
        if (tmp6Result.hasFlag(flagsResult, tmp8.NO_MESSAGES)) {
          return tmp8.NO_MESSAGES;
        } else {
          channel = obj3.getChannel(channel.parent_id);
          if (null == channel) {
            return tmp8.NO_MESSAGES;
          } else if (obj2.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
            return tmp8.NO_MESSAGES;
          } else {
            const result = obj2.resolvedMessageNotifications(channel);
            if (result === UserNotificationSettings.NO_MESSAGES) {
              let NO_MESSAGES = tmp8.NO_MESSAGES;
            } else {
              NO_MESSAGES = result === tmp4.ONLY_MENTIONS ? tmp8.ONLY_MENTIONS : tmp8.ALL_MESSAGES;
            }
            return NO_MESSAGES;
          }
        }
      }
    }
    obj6 = hasFlag;
  }
}
let result = require("set").fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  const _require = channel;
  const items = [closure_4, closure_3, closure_2];
  const items1 = [channel];
  return _require(589).useStateFromStores(items, () => closure_1_7(closure_0), items1);
};