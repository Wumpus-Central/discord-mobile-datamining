// === Module 18942: SharedSpacesWarningManager ===

// Module 18942 (SharedSpacesWarningManager)
import ConstantsIOS from "ConstantsIOS" /* 1107 */;
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 15042 */;
import showGdmBlockedUserModal from "showGdmBlockedUserModal" /* 18943 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;
import RelationshipStore from "RelationshipStore" /* 4913 */;
import VoiceChannelBlockedUserStore from "VoiceChannelBlockedUserStore" /* 15039 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7214 */;

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
            blockedUserWarningDismissed = React5(channelId);
          }
          if (!blockedUserWarningDismissed) {
            const obj2 = { channelId, blockedUserIds: found, ignoredUserIds: found1 };
            const result = showGdmBlockedUserModal.showGdmBlockedUserModal(obj2);
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
        if (hasOwnProperty()) {
          const _Set = Set;
          const items = [];
          HermesBuiltin.arraySpread(ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0));
          const set = new Set(items);
          if (!closure_1_8(set)) {
            const items1 = [];
            HermesBuiltin.arraySpread(ignoredUsersForVoiceChannel, HermesBuiltin.arraySpread(blockedUsersForVoiceChannel, 0));
            const result = showVoiceChannelBlockedUserWarning.showVoiceChannelBlockedUserWarning(channelId, items1[0]);
            const tmpResult = showVoiceChannelBlockedUserWarning;
          }
        }
      }
      timestampProducer();
    } else {
      timestampProducer();
    }
  }
}
const SharedSpacesWarningStore = fn(15041);
({ isBlockedWarningQueued: hasOwnProperty, dequeueBlockWarning: metroRequire, gdmBlockedWarningInCooldown: closure_7, voiceBlockedWarningInCooldownForUsers: closure_8 } = SharedSpacesWarningStore);
const prototype = function SharedSpacesWarningManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { CHANNEL_SELECT: handleChannelSelect, APP_STATE_UPDATE: handleAppStateChanged };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/shared_space_warnings/SharedSpacesWarningManager.tsx");

export default prototype1;