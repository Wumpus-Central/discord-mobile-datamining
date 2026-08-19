// === Module 12585: SingleStream ===

// Module 12585 (SingleStream)
import noopAll from "noop" /* 19 */;
import _modDef8666 from "module_8666" /* 8666 */;
import StreamTextOverlayDefault from "StreamTextOverlay" /* 12438 */;
import VoiceChatDrawerState from "VoiceChatDrawerState" /* 8669 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
({ toggleFocus: c3, resetFocus: c4 } = VoiceChatDrawerState);
const result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(12445).ResizeMode.CONTAIN,
    onSingleTap() {
      callback();
    },
    onDoubleTap() {
      closure_1_4();
      const participant = _modDef8666.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  };
  return jsx(StreamTextOverlayDefault, {
    gestureEnabled: true,
    resizeMode: channel(12445).ResizeMode.CONTAIN,
    onSingleTap() {
      callback();
    },
    onDoubleTap() {
      closure_1_4();
      const participant = _modDef8666.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  });
};