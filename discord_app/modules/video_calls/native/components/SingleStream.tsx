// === Module 10281: SingleStream ===

// Module 10281 (SingleStream)
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4957 */;
import StreamTileDefault from "StreamTile" /* 9682 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ChannelCallStore = fn(9639);
({ toggleFocus: c3, resetFocus: closure_4 } = ChannelCallStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(9690).ResizeMode.CONTAIN,
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
    resizeMode: channel(9690).ResizeMode.CONTAIN,
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