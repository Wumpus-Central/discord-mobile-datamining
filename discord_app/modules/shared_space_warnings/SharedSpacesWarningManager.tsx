// discord_app/modules/shared_space_warnings/SharedSpacesWarningManager.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import showGdmBlockedUserModal from "show_gdm_modal/showGdmBlockedUserModal.native.tsx";
import showVoiceChannelBlockedUserWarning2 from "show_voice_channel_warning/showVoiceChannelBlockedUserWarning.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import SharedSpacesWarningStore from "SharedSpacesWarningStore.tsx";
import VoiceChannelBlockedUserStore from "VoiceChannelBlockedUserStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f115140 = (item) => {
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
};
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
        const tmp = found.length > 0 || found1.length > 0;
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
            const obj2 = { channelId, blockedUserIds: found, ignoredUserIds: found1 };
            const obj = showGdmBlockedUserModal;
            const result = obj.showGdmBlockedUserModal(obj2);
          }
        }
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
        if (metroImportAll()) {
          const _Set = Set;
          const items = [];
          HermesBuiltin.arraySpread(
            items,
            ignoredUsersForVoiceChannel,
            HermesBuiltin.arraySpread(items, blockedUsersForVoiceChannel, 0),
          );
          const self = this;
          const self2 = this;
          set = new Set(items);
          let num3 = metroImportDefault();
          if (num3 == null) {
            num3 = 0;
          }
          const _Date = Date;
          let everyResult = num3 > Date.now() - HOUR;
          if (!everyResult) {
            const _Array = Array;
            const arr = Array.from(set);
            everyResult = arr.every(f115140);
          }
          if (!everyResult) {
            const items1 = [];
            const showVoiceChannelBlockedUserWarning =
              showVoiceChannelBlockedUserWarning2.showVoiceChannelBlockedUserWarning;
            showVoiceChannelBlockedUserWarning2;
            HermesBuiltin.arraySpread(
              items1,
              ignoredUsersForVoiceChannel,
              HermesBuiltin.arraySpread(items1, blockedUsersForVoiceChannel, 0),
            );
            const result = showVoiceChannelBlockedUserWarning(channelId, items1[0]);
          }
        }
      }
      React4();
    } else {
      React4();
    }
  }
}
({
  getChannelDismissTimestamp: hasOwnProperty,
  getUserDismissTimestamp: metroRequire,
  getGlobalDismissTimestamp: metroImportDefault,
  isBlockedWarningQueued: metroImportAll,
  dequeueBlockWarning: c9,
} = SharedSpacesWarningStore);
let closure_11 = 3 * DurationsDefault.Millis.DAY;
let closure_12 = 2 * DurationsDefault.Millis.DAY;
const HOUR = DurationsDefault.Millis.HOUR;
class SharedSpacesWarningManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = { CHANNEL_SELECT: handleChannelSelect, APP_STATE_UPDATE: handleAppStateChanged };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  handleBlockedOrIgnoredUserVoiceChannelJoin(channelId, userId) {
    channelId = RTCConnectionStore.getChannelId();
    if (channelId === channelId) {
      if (null != ChannelStore.getChannel(channelId)) {
        let num = metroImportDefault();
        if (num == null) {
          num = 0;
        }
        const _Date = Date;
        const tmp5 = num <= Date.now() - HOUR;
        let tmp6 = !tmp5;
        if (tmp5) {
          let num2 = metroRequire(userId);
          if (num2 == null) {
            num2 = 0;
          }
          const _Date2 = Date;
          tmp6 = num2 > Date.now() - closure_12;
        }
        if (!tmp6) {
          const obj = showVoiceChannelBlockedUserWarning2;
          const result = obj.showVoiceChannelBlockedUserWarning(channelId, userId);
        }
      }
    }
  }
}
const prototype = SharedSpacesWarningManager.prototype;
const sharedSpacesWarningManager = new SharedSpacesWarningManager();
let result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningManager.tsx");

export default sharedSpacesWarningManager;
export const voiceBlockedWarningInCooldownForUsers = function voiceBlockedWarningInCooldownForUsers(arg0) {
  let num = metroImportDefault();
  if (num == null) {
    num = 0;
  }
  let everyResult = num > Date.now() - HOUR;
  if (!everyResult) {
    const _Array = Array;
    const arr = Array.from(arg0);
    everyResult = arr.every(f115140);
  }
  return everyResult;
};
export const userBlockedWarningInCooldown = function userBlockedWarningInCooldown(View) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  if (!flag) {
    let num = metroImportDefault();
    if (num == null) {
      num = 0;
    }
    const _Date = Date;
    flag = num <= Date.now() - HOUR;
  }
  let tmp5 = !flag;
  if (flag) {
    let num2 = metroRequire(View);
    if (num2 == null) {
      num2 = 0;
    }
    const _Date2 = Date;
    tmp5 = num2 > Date.now() - closure_12;
  }
  return tmp5;
};
