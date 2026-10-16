// discord_app/modules/voice_channel_apps/voiceChannelAppSession.tsx
import EmbeddedSurfaceType from "../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/voice_channel_apps/voiceChannelAppSession.tsx");

export const voiceChannelAppSurface = function voiceChannelAppSurface(id) {
  return { type: EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL, channelId: id };
};
export const hasVoiceChannelAppSession = function hasVoiceChannelAppSession(
  framesForSurface,
  voiceChannelApplicationId,
) {
  closure_0 = voiceChannelApplicationId;
  let someResult = null != voiceChannelApplicationId;
  if (someResult) {
    someResult = framesForSurface.some((applicationId) => applicationId.applicationId === closure_0);
  }
  return someResult;
};
