// === Module 12723: voiceChannelAppSession ===

// Module 12723 (voiceChannelAppSession)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5627 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_channel_apps/voiceChannelAppSession.tsx");

export const voiceChannelAppSurface = function voiceChannelAppSurface(id) {
  return { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: id };
};
export const hasVoiceChannelAppSession = function hasVoiceChannelAppSession(framesForSurface, voiceChannelApplicationId) {
  closure_0 = voiceChannelApplicationId;
  let someResult = null != voiceChannelApplicationId;
  if (someResult) {
    someResult = framesForSurface.some((applicationId) => applicationId.applicationId === closure_0);
  }
  return someResult;
};