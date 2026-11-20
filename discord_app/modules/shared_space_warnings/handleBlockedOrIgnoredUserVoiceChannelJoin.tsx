// === Module 14889: handleBlockedOrIgnoredUserVoiceChannelJoin ===

// Module 14889 (handleBlockedOrIgnoredUserVoiceChannelJoin)
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 14891 */;
import ChannelStore from "ChannelStore" /* 4643 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5535 */;

require = fn;
let closure_4 = fn(14890).userBlockedWarningInCooldown;
const size = fn(2);
let result = size.fileFinishedImporting("modules/shared_space_warnings/handleBlockedOrIgnoredUserVoiceChannelJoin.tsx");

export default function handleBlockedOrIgnoredUserVoiceChannelJoin(arg0, items1) {
  const channelId = RTCConnectionStore.getChannelId();
  let tmp2 = arg0 === channelId;
  if (tmp2) {
    tmp2 = null != ChannelStore.getChannel(arg0);
  }
  if (tmp2) {
    if (!closure_4(items1)) {
      const result = showVoiceChannelBlockedUserWarning.showVoiceChannelBlockedUserWarning(channelId, items1);
    }
  }
};