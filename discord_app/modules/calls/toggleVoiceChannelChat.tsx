// === Module 13945: toggleVoiceChannelChat ===

// Module 13945 (toggleVoiceChannelChat)
import _modDef8703 from "module_8703" /* 8703 */;
import closure_2 from "ensureGuildLoaded" /* 1391 */;
import closure_3 from "createRTCConnection" /* 4544 */;
import closure_4 from "getParticipants" /* 4778 */;

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
          _modDef8703.updateChatOpen(channelId, tmp3);
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