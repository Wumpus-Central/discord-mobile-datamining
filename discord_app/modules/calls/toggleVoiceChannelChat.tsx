// === Module 14589: toggleVoiceChannelChat ===

// Module 14589 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4806 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4628 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4621 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  let obj = RTCConnectionStore;
  if (RTCConnectionStore.isConnected()) {
    const channelId = obj.getChannelId();
    if (null == channelId) {
      return null;
    } else {
      const channel = ChannelStore.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVoice()) {
          let tmp3 = open;
          if (open == null) {
            tmp3 = !ChannelRTCStore.getChatOpen(channelId);
          }
          ChannelRTCActionCreatorsDefault.updateChatOpen(channelId, tmp3);
          obj = { channelId, chatOpen: tmp3 };
          return obj;
        }
      }
      return null;
    }
  } else {
    return null;
  }
};