// === Module 10928: SingleStream ===

// Module 10928 (SingleStream)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5530 */;
import StreamTileDefault from "StreamTile" /* 10599 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ChannelCallStore = fn(10516);
({ toggleFocus: c3, resetFocus: closure_4 } = ChannelCallStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(10607).ResizeMode.CONTAIN,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  };
  return jsx(StreamTileDefault, {
    gestureEnabled: true,
    resizeMode: channel(10607).ResizeMode.CONTAIN,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 }
  });
};