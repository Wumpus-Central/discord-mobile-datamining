// discord_app/modules/shared_space_warnings/SharedSpacesWarningManager.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import showGdmBlockedUserModal from "show_gdm_modal/showGdmBlockedUserModal.native.tsx";
import showVoiceChannelBlockedUserWarning from "show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import VoiceChannelBlockedUserStore from "VoiceChannelBlockedUserStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function handleChannelSelect(channelId) {
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    if (null != channel) {
      if (channel.isGroupDM()) {
        const recipients = channel.recipients;
        const found = recipients.filter((item) => RelationshipStore.isBlocked(item));
        const recipients1 = channel.recipients;
        const found1 = recipients1.filter((item) => RelationshipStore.isIgnored(item));
        if (tmp) {
          let blockedUserWarningDismissed = channel.blockedUserWarningDismissed;
          if (!blockedUserWarningDismissed) {
            let num2 = hasOwnProperty(channelId);
            if (num2 == null) {
              num2 = 0;
            }
            const _Date = Date;
            blockedUserWarningDismissed = num2 > Date.now() - closure_11;
          }
          if (!blockedUserWarningDismissed) {
            const obj = { channelId, blockedUserIds: found, ignoredUserIds: found1 };
            const result = obj.showGdmBlockedUserModal(obj);
          }
        }
        tmp = found.length > 0 || found1.length > 0;
      }
    }
  }
}
function handleAppStateChanged(state) {
  if (state.state === ConstantsIOS.AppStates.ACTIVE) {
    const channelId = RTCConnectionStore.getChannelId();
    if (null != channelId) {
      const blockedUsersForVoiceChannel = VoiceChannelBlockedUserStore.getBlockedUsersForVoiceChannel(channelId);
      const ignoredUsersForVoiceChannel = VoiceChannelBlockedUserStore.getIgnoredUsersForVoiceChannel(channelId);
      if (blockedUsersForVoiceChannel.size > 0) {
        if (React6()) {
          const _Set = Set;
          const items = [];
          HermesBuiltin.arraySpread(
            ignoredUsersForVoiceChannel,
            HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0),
          );
          const set = new Set(items);
          let num3 = React5();
          if (num3 == null) {
            num3 = 0;
          }
          const _Date = Date;
          let everyResult = num3 > Date.now() - HOUR;
          if (!everyResult) {
            const _Array = Array;
            everyResult = Array.from(set).every((item) => {
              let flag = false;
              {
                let num = closure_1_6(item);
                if (num == null) {
                  num = 0;
                }
                const _Date = Date;
                flag = num > Date.now() - closure_1_12;
              }
              return flag;
            });
            const arr = Array.from(set);
          }
          if (!everyResult) {
            const items1 = [];
            HermesBuiltin.arraySpread(
              ignoredUsersForVoiceChannel,
              HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0),
            );
            const result = showVoiceChannelBlockedUserWarning.showVoiceChannelBlockedUserWarning(channelId, items1[0]);
            const tmpResult = showVoiceChannelBlockedUserWarning;
          }
        }
      }
      React7();
    } else {
      React7();
    }
  }
}
const SharedSpacesWarningStore = fn(13734);
({
  getChannelDismissTimestamp: hasOwnProperty,
  getUserDismissTimestamp: metroRequire,
  getGlobalDismissTimestamp: closure_7,
  isBlockedWarningQueued: closure_8,
  dequeueBlockWarning: closure_9,
} = SharedSpacesWarningStore);
let closure_11 = 3 * DurationsDefault.Millis.DAY;
let closure_12 = 2 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
class SharedSpacesWarningManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { CHANNEL_SELECT: handleChannelSelect, APP_STATE_UPDATE: handleAppStateChanged };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
SharedSpacesWarningManager.prototype["handleBlockedOrIgnoredUserVoiceChannelJoin"] =
  function handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, userId) {
    channelId = RTCConnectionStore.getChannelId();
    if (channelId === channelId) {
      if (null != ChannelStore.getChannel(channelId)) {
        let num = React5();
        if (num == null) {
          num = 0;
        }
        const _Date = Date;
        const tmp5 = num <= Date.now() - HOUR;
        let tmp6 = !tmp5;
        if (tmp5) {
          let num2 = timestampProducer(userId);
          if (num2 == null) {
            num2 = 0;
          }
          const _Date2 = Date;
          tmp6 = num2 > Date.now() - closure_12;
        }
        if (!tmp6) {
          const result = showVoiceChannelBlockedUserWarning.showVoiceChannelBlockedUserWarning(channelId, userId);
        }
      }
    }
  };
const sharedSpacesWarningManager = new SharedSpacesWarningManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningManager.tsx");

export default sharedSpacesWarningManager;
export const voiceBlockedWarningInCooldownForUsers = function voiceBlockedWarningInCooldownForUsers(arg0) {
  let num = React5();
  if (num == null) {
    num = 0;
  }
  let everyResult = num > Date.now() - HOUR;
  if (!everyResult) {
    const _Array = Array;
    everyResult = Array.from(arg0).every((item) => {
      let flag = false;
      {
        let num = closure_1_6(item);
        if (num == null) {
          num = 0;
        }
        const _Date = Date;
        flag = num > Date.now() - closure_1_12;
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
    let num = React5();
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    flag = num <= Date.now() - HOUR;
  }
  let tmp5 = !flag;
  if (flag) {
    let num2 = timestampProducer(arg0);
    if (num2 == null) {
      num2 = 0;
    }
    const _Date2 = Date;
    tmp5 = num2 > Date.now() - closure_12;
  }
  return tmp5;
};
