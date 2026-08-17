// discord_app/modules/rpc/helpers/getCurrentVoiceChannel.tsx
import closure_0 from "fetchFingerprint" /* 1218 */;
import closure_1 from "ensureGuildLoaded" /* 1391 */;
import closure_2 from "updateVoiceState" /* 4542 */;

const result = require("set").fileFinishedImporting("modules/rpc/helpers/getCurrentVoiceChannel.tsx");

export default function getCurrentVoiceChannel() {
  const id = store.getId();
  voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, store.getSessionId());
  let channelId;
  if (voiceStateForSession != null) {
    channelId = voiceStateForSession.channelId;
  }
  return channel.getChannel(channelId);
};