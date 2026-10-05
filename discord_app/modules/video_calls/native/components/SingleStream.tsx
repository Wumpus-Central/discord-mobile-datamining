// discord_app/modules/video_calls/native/components/SingleStream.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import StreamTileDefault from "StreamTile.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelCallStore from "../ChannelCallStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ toggleFocus: c3, resetFocus: closure_4 } = ChannelCallStore);
const jsx = Fragment.jsx;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let first;
      let participant;
      let tmp5;
      let tmp6;
      let obj = channel(576);
      const cResult = obj.c(7);
      ({ participant, channel } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
          closure_1_3();
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel.id) {
        const fn2 = function f() {
          React3();
          const obj = ChannelRTCActionCreatorsDefault;
          const participant = obj.selectParticipant(channel.id, null);
        };
        cResult[1] = channel.id;
        cResult[2] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { flex: 1 };
        cResult[3] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === tmp5) {
        let tmp7;
        if (cResult[5] === participant) {
          tmp7 = cResult[6];
        }
        return tmp7;
      }
      StreamTileDefault;
      const tmp9 = (
        <tmp8
          gestureEnabled
          resizeMode={channel(9105).ResizeMode.CONTAIN}
          onSingleTap={first}
          onDoubleTap={tmp5}
          participant={participant}
          style={tmp6}
        />
      );
      cResult[4] = tmp5;
      cResult[5] = participant;
      cResult[6] = tmp9;
      tmp7 = tmp9;
    }
  : (channel) => {
      channel = channel.channel;
      let participant = channel.participant;
      StreamTileDefault;
      return (
        <tmp
          gestureEnabled
          resizeMode={channel(9105).ResizeMode.CONTAIN}
          onSingleTap={function onSingleTap() {
            closure_1_3();
          }}
          onDoubleTap={function onDoubleTap() {
            React3();
            const obj = ChannelRTCActionCreatorsDefault;
            const participant = obj.selectParticipant(channel.id, null);
          }}
          participant={participant}
          style={{ flex: 1 }}
        />
      );
    };
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleStream.tsx");

export default tmp4;
