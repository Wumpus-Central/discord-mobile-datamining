// === Module 14601: toggleVoiceChannelChat ===

// Module 14601 (toggleVoiceChannelChat)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4837 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4659 */;
import ChannelRTCStore from "ChannelRTCStore" /* 4652 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  if (RTCConnectionStore.isConnected()) {
    const channelId = RTCConnectionStore.getChannelId();
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
          const obj2 = { channelId, chatOpen: tmp3 };
          return obj2;
        }
      }
      return null;
    }
  } else {
    return null;
  }
};