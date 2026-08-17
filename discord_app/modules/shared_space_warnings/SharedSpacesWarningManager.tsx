// discord_app/modules/shared_space_warnings/SharedSpacesWarningManager.tsx
import setDefault from "set" /* 687 */;
import keys from "keys" /* 691 */;
import initializeDefault from "initialize" /* 5038 */;
import showGdmBlockedUserModal from "showGdmBlockedUserModal" /* 13284 */;
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 13288 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "createRTCConnection" /* 4539 */;
import closure_4 from "markAllUserIdListsStale" /* 4030 */;
import useSharedSpacesWarningStore from "useSharedSpacesWarningStore" /* 13283 */;
import closure_10 from "init" /* 13281 */;

require = arg1;
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = store.getChannel(channelId);
    if (null != channel) {
      if (channel.isGroupDM()) {
        const recipients = channel.recipients;
        const found = recipients.filter((arg0) => closure_4.isBlocked(arg0));
        const recipients1 = channel.recipients;
        const found1 = recipients1.filter((arg0) => closure_4.isIgnored(arg0));
        if (tmp) {
          let blockedUserWarningDismissed = channel.blockedUserWarningDismissed;
          if (!blockedUserWarningDismissed) {
            let num2 = callback(channelId);
            if (num2 == null) {
              num2 = 0;
            }
            const _Date = Date;
            blockedUserWarningDismissed = num2 > Date.now() - closure_11;
          }
          if (!blockedUserWarningDismissed) {
            let obj = showGdmBlockedUserModal;
            obj = { channelId: null, blockedUserIds: null, ignoredUserIds: null };
            obj[0] = channelId;
            obj[1] = found;
            obj[2] = found1;
            const result = obj.showGdmBlockedUserModal(obj);
          }
        }
        tmp = found.length > 0 || found1.length > 0;
      }
    }
  }
}
function handleAppStateChanged(state) {
  if (state.state === keys.AppStates.ACTIVE) {
    const channelId = store2.getChannelId();
    if (null != channelId) {
      const blockedUsersForVoiceChannel = authStore.getBlockedUsersForVoiceChannel(channelId);
      const ignoredUsersForVoiceChannel = authStore.getIgnoredUsersForVoiceChannel(channelId);
      if (blockedUsersForVoiceChannel.size > 0) {
        if (callback4()) {
          const _Set = Set;
          const items = [];
          HermesBuiltin.arraySpread(ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0));
          const set = new Set(items);
          let num3 = callback3();
          if (num3 == null) {
            num3 = 0;
          }
          const _Date = Date;
          let everyResult = num3 > Date.now() - HOUR;
          if (!everyResult) {
            const _Array = Array;
            everyResult = Array.from(set).every((arg0) => {
              let flag = false;
              {
                let num = callback(arg0);
                if (num == null) {
                  num = 0;
                }
                const _Date = Date;
                flag = num > Date.now() - closure_12;
              }
              return flag;
            });
            const arr = Array.from(set);
          }
          if (!everyResult) {
            const items1 = [];
            HermesBuiltin.arraySpread(ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0));
            const result = showVoiceChannelBlockedUserWarning.showVoiceChannelBlockedUserWarning(channelId, items1[0]);
            const tmpResult = showVoiceChannelBlockedUserWarning;
          }
        }
      }
      callback5();
    } else {
      callback5();
    }
  }
}
({ getChannelDismissTimestamp: c5, getUserDismissTimestamp: closure_6, getGlobalDismissTimestamp: error, isBlockedWarningQueued: closure_8, dequeueBlockWarning: c9 } = useSharedSpacesWarningStore);
let closure_11 = 3 * setDefault.Millis.DAY;
let closure_12 = 2 * setDefault.Millis.DAY;
const HOUR = setDefault.Millis.HOUR;
initializeDefault;
class SharedSpacesWarningManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { CHANNEL_SELECT: handleChannelSelect, APP_STATE_UPDATE: handleAppStateChanged };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
SharedSpacesWarningManager.prototype["handleBlockedOrIgnoredUserVoiceChannelJoin"] = function handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, id) {
  channelId = store2.getChannelId();
  if (channelId === channelId) {
    if (null != store.getChannel(channelId)) {
      let num = callback3();
      if (num == null) {
        num = 0;
      }
      const _Date = Date;
      const tmp5 = num <= Date.now() - HOUR;
      let tmp6 = !tmp5;
      if (tmp5) {
        let num2 = callback2(id);
        if (num2 == null) {
          num2 = 0;
        }
        const _Date2 = Date;
        tmp6 = num2 > Date.now() - closure_12;
      }
      if (!tmp6) {
        const result = showVoiceChannelBlockedUserWarning.showVoiceChannelBlockedUserWarning(channelId, id);
        const obj = showVoiceChannelBlockedUserWarning;
      }
    }
  }
};
const sharedSpacesWarningManager = new SharedSpacesWarningManager();
let result = require("set").fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningManager.tsx");

export default sharedSpacesWarningManager;
export const voiceBlockedWarningInCooldownForUsers = function voiceBlockedWarningInCooldownForUsers(arg0) {
  let num = callback3();
  if (num == null) {
    num = 0;
  }
  let everyResult = num > Date.now() - HOUR;
  if (!everyResult) {
    const _Array = Array;
    everyResult = Array.from(arg0).every((arg0) => {
      let flag = false;
      {
        let num = callback(arg0);
        if (num == null) {
          num = 0;
        }
        const _Date = Date;
        flag = num > Date.now() - closure_12;
      }
      return flag;
    });
    const arr = Array.from(arg0);
  }
  return everyResult;
};
export const userBlockedWarningInCooldown = function userBlockedWarningInCooldown(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    let num = callback3();
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    flag = num <= Date.now() - HOUR;
  }
  let tmp5 = !flag;
  if (flag) {
    let num2 = callback2(arg0);
    if (num2 == null) {
      num2 = 0;
    }
    const _Date2 = Date;
    tmp5 = num2 > Date.now() - closure_12;
  }
  return tmp5;
};