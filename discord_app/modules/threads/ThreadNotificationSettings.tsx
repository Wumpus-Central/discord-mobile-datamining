// discord_app/modules/threads/ThreadNotificationSettings.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import storeThread from "storeThread";
import { ThreadMemberFlags } from "AbortCodes";
import { UserNotificationSettings } from "ME";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { hasFlag } from "../../../discord_common/js/shared/utils/FlagUtils.tsx";

const require = arg1;
function computeThreadNotificationSetting(channel) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = storeThread;
  }
  let obj2 = arg2;
  if (arg2 === undefined) {
    obj2 = updateUserGuildSettingsInternal;
  }
  let obj3 = arg3;
  if (arg3 === undefined) {
    obj3 = ensureGuildLoaded;
  }
  const flagsResult = obj.flags(channel.id);
  if (null == flagsResult) {
    return ThreadMemberFlags.NO_MESSAGES;
  } else {
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return tmp8.ALL_MESSAGES;
    } else {
      let tmp6Result = tmp6(1403);
      if (tmp6Result.hasFlag(flagsResult, tmp8.ONLY_MENTIONS)) {
        return tmp8.ONLY_MENTIONS;
      } else {
        tmp6Result = tmp6(1403);
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
let result = require("storeThread").fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = function useThreadNotificationSetting(channel) {
  const _require = channel;
  const items = [storeThread, updateUserGuildSettingsInternal, ensureGuildLoaded];
  const items1 = [channel];
  return _initialize.useStateFromStores(items, () => outer1_7(closure_0), items1);
};