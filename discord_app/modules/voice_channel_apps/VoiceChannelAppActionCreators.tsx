// === Module 14316: VoiceChannelAppActionCreators ===

// Module 14316 (VoiceChannelAppActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import leaveFrame from "leaveFrame" /* 10879 */;
import voiceChannelAppSession from "voiceChannelAppSession" /* 12987 */;
import FramesStore from "FramesStore" /* 6833 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_apps/VoiceChannelAppActionCreators.tsx");

export function toggleVoiceChannelAppSurface(id) {
  DispatcherDefault.dispatch({ type: "VOICE_CHANNEL_APP_SURFACE_TOGGLE", channelId: id });
}
export function closeVoiceChannelApp(id) {
  const framesForSurface = FramesStore.getFramesForSurface(voiceChannelAppSession.voiceChannelAppSurface(id));
  for (const item10014 of framesForSurface) {
    let obj2 = leaveFrame;
    let leaveFrameResult = obj2.leaveFrame(item10014.id);
    continue;
  }
  DispatcherDefault.dispatch({ type: "VOICE_CHANNEL_APP_CLOSE", channelId: id });
  const obj4 = { type: "VOICE_CHANNEL_APP_CLOSE", channelId: id };
}