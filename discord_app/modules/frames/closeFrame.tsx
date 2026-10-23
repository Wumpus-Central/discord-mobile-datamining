// === Module 13822: closeFrame ===

// Module 13822 (closeFrame)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 5624 */;
import leaveFrame from "leaveFrame" /* 10764 */;
import closeFramePopoutDefault from "closeFramePopout" /* 13823 */;
import VoiceChannelAppActionCreators from "VoiceChannelAppActionCreators" /* 13824 */;
import FramesStore from "FramesStore" /* 6773 */;

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