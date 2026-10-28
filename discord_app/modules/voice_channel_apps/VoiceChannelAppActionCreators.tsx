// === Module 14083: VoiceChannelAppActionCreators ===

// Module 14083 (VoiceChannelAppActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import leaveFrame from "leaveFrame" /* 10803 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 12770 */;
import FramesStore from "FramesStore" /* 6810 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelAppActionCreators.tsx");

export const toggleVoiceChannelAppSurface = function toggleVoiceChannelAppSurface(id) {
  DispatcherDefault.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: id });
};
export const closeVoiceChannelApp = function closeVoiceChannelApp(id) {
  const framesForSurface = FramesStore.getFramesForSurface(voiceChannelAppSession.voiceChannelAppSurface(id));
  for (const item10014 of framesForSurface) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10014.id);
    continue;
  }
  DispatcherDefault.dispatch({ type: "VOICE_CHANNEL_APP_CLOSE", channelId: id });
  const obj4 = { type: "VOICE_CHANNEL_APP_CLOSE", channelId: id };
};