// discord_app/modules/threads/ThreadNotificationSettings.tsx
import Constants from "../../Constants.tsx";
import ThreadConstants from "ThreadConstants.tsx";
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import UserGuildSettingsStore from "../../stores/UserGuildSettingsStore.tsx";
import JoinedThreadsStore from "JoinedThreadsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

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
    const obj6 = FlagUtils;
    if (obj6.hasFlag(flagsResult, ThreadMemberFlags.ALL_MESSAGES)) {
      return ThreadMemberFlags.ALL_MESSAGES;
    } else {
      const tmp6Result = FlagUtils;
      if (tmp6Result.hasFlag(flagsResult, ThreadMemberFlags.ONLY_MENTIONS)) {
        return ThreadMemberFlags.ONLY_MENTIONS;
      } else {
        const tmp6Result2 = FlagUtils;
        if (tmp6Result2.hasFlag(flagsResult, ThreadMemberFlags.NO_MESSAGES)) {
          return ThreadMemberFlags.NO_MESSAGES;
        } else {
          channel = obj3.getChannel(channel.parent_id);
          if (null == channel) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else if (obj2.isGuildOrCategoryOrChannelMuted(channel.guild_id, channel.id)) {
            return ThreadMemberFlags.NO_MESSAGES;
          } else {
            let NO_MESSAGES;
            const result = obj2.resolvedMessageNotifications(channel);
            if (result === UserNotificationSettings.NO_MESSAGES) {
              NO_MESSAGES = ThreadMemberFlags.NO_MESSAGES;
            } else {
              NO_MESSAGES =
                result === tmp4.ONLY_MENTIONS ? ThreadMemberFlags.ONLY_MENTIONS : ThreadMemberFlags.ALL_MESSAGES;
            }
            return NO_MESSAGES;
          }
        }
      }
    }
  }
}
const ThreadMemberFlags = ThreadConstants.ThreadMemberFlags;
const UserNotificationSettings = Constants.UserNotificationSettings;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
        cResult[0] = items;
        first = items;
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
        tmp9 = items1;
      } else {
        class N {
          constructor() {
            return computeThreadNotificationSetting(closure_0);
          }
        }
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, N, tmp9);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [JoinedThreadsStore, UserGuildSettingsStore, ChannelStore];
      const items1 = [arg0];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => computeThreadNotificationSetting(closure_0), items1);
    };
let result = size.fileFinishedImporting("modules/threads/ThreadNotificationSettings.tsx");

export { computeThreadNotificationSetting };
export const useThreadNotificationSetting = tmp2;
