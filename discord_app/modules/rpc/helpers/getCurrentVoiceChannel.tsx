// === Module 7333: getCurrentVoiceChannel ===

// Module 7333 (getCurrentVoiceChannel)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;

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