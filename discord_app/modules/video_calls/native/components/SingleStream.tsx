// discord_app/modules/video_calls/native/components/SingleStream.tsx
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import StreamTileDefault from "StreamTile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ChannelCallStore = fn(10320);
({ toggleFocus: c3, resetFocus: closure_4 } = ChannelCallStore);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SingleStream(arg0) {
      const cResult = channel(576).c(7);
      ({ participant, channel } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        function onSingleTap() {
          closure_1_3();
        }
        cResult[0] = onSingleTap;
        let first = onSingleTap;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        function onDoubleTap() {
          React4();
          const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        }
        cResult[1] = channel.id;
        cResult[2] = onDoubleTap;
        let tmp5 = onDoubleTap;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { flex: 1 };
        cResult[3] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        if (cResult[5] === participant) {
          let tmp7 = cResult[6];
        }
        return tmp7;
      }
      const obj3 = {
        gestureEnabled: true,
        resizeMode: null,
        onSingleTap: null,
        onDoubleTap: null,
        participant: null,
        style: null,
      };
      const obj = channel(576);
      obj3.resizeMode = channel(10856).ResizeMode.CONTAIN;
      obj3.onSingleTap = first;
      obj3.onDoubleTap = tmp5;
      obj3.participant = participant;
      obj3.style = tmp6;
      const tmp9 = jsx(StreamTileDefault, {
        gestureEnabled: true,
        resizeMode: null,
        onSingleTap: null,
        onDoubleTap: null,
        participant: null,
        style: null,
      });
      cResult[4] = tmp5;
      cResult[5] = participant;
      cResult[6] = tmp9;
      tmp7 = tmp9;
    }
  : function SingleStream(channel) {
      channel = channel.channel;
      const obj = {
        gestureEnabled: true,
        resizeMode: channel(10856).ResizeMode.CONTAIN,
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
        resizeMode: channel(10856).ResizeMode.CONTAIN,
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
    };
