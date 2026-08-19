// discord_app/modules/rpc/helpers/getCurrentVoiceChannel.tsx
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import updateVoiceState from "../../../stores/VoiceStateStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = store.getId();
  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return channel.getChannel(channelId);
};