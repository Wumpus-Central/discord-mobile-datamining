// === Module 13879: toggleVoiceChannelChat ===

// Module 13879 (toggleVoiceChannelChat)
import _modDef8666 from "module_8666" /* 8666 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import getParticipants from "getParticipants" /* 4773 */;

const result = require("obj132").fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

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
          _modDef8666.updateChatOpen(channelId, tmp3);
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