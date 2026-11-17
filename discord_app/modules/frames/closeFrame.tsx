// === Module 15176: closeFrame ===

// Module 15176 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5971 */;
import leaveFrame from "leaveFrame" /* 7359 */;
import closeFramePopoutDefault from "closeFramePopout" /* 15177 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 15178 */;
import FramesStore from "FramesStore" /* 7027 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/closeFrame.tsx");

export default function closeFrame(frameId) {
  const frame = FramesStore.getFrame(frameId);
  if (null != frame) {
    closeFramePopoutDefault(frame.id);
    if (frame.surface.type !== EmbeddedSurfaceType.EmbeddedSurfaceType.VOICE_CHANNEL) {
      leaveFrame.leaveFrame(frame.id);
      const tmp7Result = leaveFrame;
    } else {
      VoiceChannelAppActionCreators.closeVoiceChannelApp(frame.surface.channelId);
      const tmp7Result2 = VoiceChannelAppActionCreators;
    }
  }
};