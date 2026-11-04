// === Module 14609: closeFrame ===

// Module 14609 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5809 */;
import leaveFrame from "leaveFrame" /* 11125 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14610 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14611 */;
import FramesStore from "FramesStore" /* 6981 */;

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