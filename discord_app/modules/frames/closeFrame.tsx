// === Module 14528: closeFrame ===

// Module 14528 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5795 */;
import leaveFrame from "leaveFrame" /* 11076 */;
import closeFramePopoutDefault from "closeFramePopout" /* 14529 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 14530 */;
import FramesStore from "FramesStore" /* 6966 */;

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