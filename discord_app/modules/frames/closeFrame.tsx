// === Module 13875: closeFrame ===

// Module 13875 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5557 */;
import leaveFrame from "leaveFrame" /* 6953 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13876 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13877 */;
import FramesStore from "FramesStore" /* 6623 */;

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