// === Module 13847: closeFrame ===

// Module 13847 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5626 */;
import leaveFrame from "leaveFrame" /* 10766 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13848 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13849 */;
import FramesStore from "FramesStore" /* 6775 */;

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