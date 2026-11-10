// === Module 14659: closeFrame ===

// Module 14659 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5801 */;
import leaveFrame from "leaveFrame" /* 11024 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14660 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14661 */;
import FramesStore from "FramesStore" /* 6904 */;

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