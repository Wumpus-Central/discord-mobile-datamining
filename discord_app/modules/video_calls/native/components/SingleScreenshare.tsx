// === Module 9720: SingleScreenshare ===

// Module 9720 (SingleScreenshare)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 5097 */;
import useMountEffectDefault from "useMountEffect" /* 5597 */;
import ScreenshareParticipantDefault from "ScreenshareParticipant" /* 9721 */;
import react from "react" /* 19 */;
import ChannelCallStore from "ChannelCallStore" /* 9086 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
({ resetFocus: c3, toggleFocus: closure_4 } = ChannelCallStore);
const jsx = Fragment.jsx;
let obj = { stageStreamContainer: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BLACK };
let closure_6 = createStyles.createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let first;
  let participant;
  let tmp7;
  let tmp8;
  let obj = channel(576);
  const cResult = obj.c(11);
  ({ participant, channel } = arg0);
  const tmp3 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      closure_1_3();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  useMountEffectDefault(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u() {
      closure_1_4();
    };
    cResult[1] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== channel.id) {
    const fn3 = function _() {
      _false();
      const obj = ChannelRTCActionCreatorsDefault;
      const participant = obj.selectParticipant(channel.id, null);
    };
    cResult[2] = channel.id;
    cResult[3] = fn3;
    tmp8 = fn3;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === channel) {
    let tmp9;
    if (cResult[5] === tmp3) {
      tmp9 = cResult[6];
    }
    if (cResult[7] === tmp8) {
      if (cResult[8] === participant) {
        let tmp11;
        if (cResult[9] === tmp9) {
          tmp11 = cResult[10];
        }
        return tmp11;
      }
    }
    const tmp13 = jsx(ScreenshareParticipantDefault, { participant, onSingleTap: tmp7, onDoubleTap: tmp8, containerStyle: tmp9 });
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
}) : ((channel) => {
  channel = channel.channel;
  let participant = channel.participant;
  const tmp = closure_6();
  useMountEffectDefault(() => {
    closure_1_3();
  });
  let stageStreamContainer;
  ScreenshareParticipantDefault;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  return <tmp4 participant={participant} onSingleTap={function onSingleTap() {
    closure_1_4();
  }} onDoubleTap={function onDoubleTap() {
    _false();
    const obj = ChannelRTCActionCreatorsDefault;
    const participant = obj.selectParticipant(channel.id, null);
  }} containerStyle={stageStreamContainer} />;
});
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default tmp4;