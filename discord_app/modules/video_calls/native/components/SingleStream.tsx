// === Module 10995: SingleStream ===

// Module 10995 (SingleStream)
import noopAll from "noop" /* 19 */;
import StreamTextOverlayDefault from "StreamTextOverlay" /* 10768 */;
import VoiceChatDrawerState from "VoiceChatDrawerState" /* 9895 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
({ toggleFocus: c3, resetFocus: c4 } = VoiceChatDrawerState);
const result = require("set").fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(10778).ResizeMode.CONTAIN,
    onSingleTap() {
      callback();
    },
    onDoubleTap() {
      closure_1_4();
      const participant = closure_1_1(closure_1_2[5]).selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  };
  return jsx(StreamTextOverlayDefault, {
    gestureEnabled: true,
    resizeMode: channel(10778).ResizeMode.CONTAIN,
    onSingleTap() {
      callback();
    },
    onDoubleTap() {
      closure_1_4();
      const participant = closure_1_1(closure_1_2[5]).selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  });
};