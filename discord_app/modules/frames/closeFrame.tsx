// === Module 14622: closeFrame ===

// Module 14622 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5811 */;
import leaveFrame from "leaveFrame" /* 11078 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14623 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14624 */;
import FramesStore from "FramesStore" /* 6984 */;

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