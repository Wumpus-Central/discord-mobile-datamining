// === Module 14080: toggleVoiceChannelChat ===

// Module 14080 (toggleVoiceChannelChat)
import _modDef4674 from "module_4674" /* 4674 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "createRTCConnection" /* 4519 */;
import closure_4 from "getParticipants" /* 4461 */;

const result = require("set").fileFinishedImporting("modules/calls/toggleVoiceChannelChat.tsx");

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
          _modDef4674.updateChatOpen(channelId, tmp3);
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