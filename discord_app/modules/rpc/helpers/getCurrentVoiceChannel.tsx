// discord_app/modules/rpc/helpers/getCurrentVoiceChannel.tsx
import closure_0 from "../../../stores/AuthenticationStore.tsx";
import closure_1 from "../../../stores/ChannelStore.tsx";
import closure_2 from "../../../stores/VoiceStateStore.tsx";

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = store.getId();
  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return channel.getChannel(channelId);
}
