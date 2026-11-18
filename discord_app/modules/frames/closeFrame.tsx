// === Module 13804: closeFrame ===

// Module 13804 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5467 */;
import leaveFrame from "leaveFrame" /* 6864 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13805 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13806 */;
import FramesStore from "FramesStore" /* 6531 */;

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