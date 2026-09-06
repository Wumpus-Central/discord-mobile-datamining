// discord_app/modules/calls/toggleVoiceChannelChat.tsx
import ChannelRTCActionCreatorsDefault from "../../actions/ChannelRTCActionCreators.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import ChannelRTCStore from "ChannelRTCStore.tsx";

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
