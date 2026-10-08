// discord_app/modules/video_calls/native/components/SingleScreenshare.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import useMountEffectDefault from "../../../../hooks/useMountEffect.tsx";
import ScreenshareParticipantDefault from "ScreenshareParticipant.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const ChannelCallStore = fn(10333);
({ resetFocus: c3, toggleFocus: closure_4 } = ChannelCallStore);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { stageStreamContainer: { backgroundColor: nativeDefault.colors.BLACK } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { backgroundColor: nativeDefault.colors.BLACK };
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SingleScreenshare(arg0) {
      const cResult = channel(576).c(11);
      ({ participant, channel } = arg0);
      const tmp3 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s() {
          closure_1_3();
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      useMountEffectDefault(first);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        function onSingleTap() {
          closure_1_4();
        }
        cResult[1] = onSingleTap;
        let tmp7 = onSingleTap;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] !== channel.id) {
        function onDoubleTap() {
          React3();
          const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        }
        cResult[2] = channel.id;
        cResult[3] = onDoubleTap;
        let tmp8 = onDoubleTap;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === channel) {
        if (cResult[5] === tmp3) {
          let tmp9 = cResult[6];
        }
        if (cResult[7] === tmp8) {
          if (cResult[8] === participant) {
            if (cResult[9] === tmp9) {
              let tmp11 = cResult[10];
            }
            return tmp11;
          }
        }
        const obj2 = { participant, onSingleTap: tmp7, onDoubleTap: tmp8, containerStyle: tmp9 };
        const tmp13 = jsx(ScreenshareParticipantDefault, {
          participant,
          onSingleTap: tmp7,
          onDoubleTap: tmp8,
          containerStyle: tmp9,
        });
        cResult[7] = tmp8;
        cResult[8] = participant;
        cResult[9] = tmp9;
        cResult[10] = tmp13;
        tmp11 = tmp13;
      }
      let stageStreamContainer;
      if (channel.isGuildStageVoice()) {
        stageStreamContainer = tmp3.stageStreamContainer;
      }
      cResult[4] = channel;
      cResult[5] = tmp3;
      cResult[6] = stageStreamContainer;
      tmp9 = stageStreamContainer;
      const obj = channel(576);
    }
  : function SingleScreenshare(channel) {
      channel = channel.channel;
      useMountEffectDefault(() => {
        closure_1_3();
      });
      const obj = {
        participant: channel.participant,
        onSingleTap() {
          closure_1_4();
        },
        onDoubleTap() {
          React3();
          const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        },
        containerStyle: null,
      };
      const tmp = closure_6();
      let stageStreamContainer;
      if (channel.isGuildStageVoice()) {
        stageStreamContainer = tmp.stageStreamContainer;
      }
      obj.containerStyle = stageStreamContainer;
      return jsx(ScreenshareParticipantDefault, {
        participant: channel.participant,
        onSingleTap() {
          closure_1_4();
        },
        onDoubleTap() {
          React3();
          const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
        },
        containerStyle: null,
      });
    };
