// discord_app/modules/calls/toggleVoiceChannelChat.tsx
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import getParticipants from "getParticipants";
import { ChannelRTCActionCreators } from "../../actions/ChannelRTCActionCreators.tsx";

const result = require("getParticipants").fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

export const toggleVoiceChannelChat = function toggleVoiceChannelChat(open) {
  let obj = connected;
  if (connected.isConnected()) {
    const channelId = obj.getChannelId();
    if (null == channelId) {
      return null;
    } else {
      channel = channel.getChannel(channelId);
      if (null != channel) {
        if (channel.isGuildVoice()) {
          let tmp3 = open;
          if (open == null) {
            tmp3 = !chatOpen.getChatOpen(channelId);
          }
          ChannelRTCActionCreators.updateChatOpen(channelId, tmp3);
          obj = { channelId: null, chatOpen: null };
          obj[0] = channelId;
          obj[1] = tmp3;
          return obj;
        }
      }
      return null;
    }
  } else {
    return null;
  }
};