// === Module 15040: handleBlockedOrIgnoredUserVoiceChannelJoin ===

// Module 15040 (handleBlockedOrIgnoredUserVoiceChannelJoin)
import showVoiceChannelBlockedUserWarning from "showVoiceChannelBlockedUserWarning" /* 15042 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5714 */;

require = fn;
let closure_4 = fn(15041).userBlockedWarningInCooldown;
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