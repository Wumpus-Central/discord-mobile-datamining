// discord_app/modules/video_calls/native/components/SingleStream.tsx
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import StreamTileDefault from "StreamTile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ChannelCallStore = fn(9467);
({ toggleFocus: c3, resetFocus: closure_4 } = ChannelCallStore);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default function SingleStream(channel) {
  channel = channel.channel;
  const obj = {
    gestureEnabled: true,
    resizeMode: channel(9604).ResizeMode.CONTAIN,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 },
  };
  return jsx(StreamTileDefault, {
    gestureEnabled: true,
    resizeMode: channel(9604).ResizeMode.CONTAIN,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React4();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    participant: channel.participant,
    style: { flex: 1 },
  });
}
