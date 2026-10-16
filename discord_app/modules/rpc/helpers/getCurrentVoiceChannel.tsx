// === Module 7308: getCurrentVoiceChannel ===

// Module 7308 (getCurrentVoiceChannel)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import VoiceStateStore from "VoiceStateStore" /* 5174 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = AuthenticationStore.getId();
  const voiceStateForSession = VoiceStateStore.getVoiceStateForSession(id, AuthenticationStore.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return ChannelStore.getChannel(channelId);
};