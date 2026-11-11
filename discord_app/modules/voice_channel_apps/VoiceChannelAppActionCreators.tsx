// === Module 15041: VoiceChannelAppActionCreators ===

// Module 15041 (VoiceChannelAppActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import leaveFrame from "leaveFrame" /* 7285 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 13940 */;
import FramesStore from "FramesStore" /* 6956 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelAppActionCreators.tsx");

export function toggleVoiceChannelAppSurface(id) {
  DispatcherDefault.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: id });
}
export function closeVoiceChannelApp(channelId) {
  const framesForSurface = FramesStore.getFramesForSurface(voiceChannelAppSession.voiceChannelAppSurface(channelId));
  for (const item10014 of framesForSurface) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10014.id);
    continue;
  }
  DispatcherDefault.dispatch({ type: "VOICE_CHANNEL_APP_CLOSE", channelId });
  const obj4 = { type: "VOICE_CHANNEL_APP_CLOSE", channelId };
}