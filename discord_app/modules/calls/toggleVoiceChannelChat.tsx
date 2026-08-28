// === Module 14099: toggleVoiceChannelChat ===

// Module 14099 (toggleVoiceChannelChat)
import _modDef4687 from "module_4687" /* 4687 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "createRTCConnection" /* 4520 */;
import closure_4 from "getParticipants" /* 4462 */;

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
          _modDef4687.updateChatOpen(channelId, tmp3);
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