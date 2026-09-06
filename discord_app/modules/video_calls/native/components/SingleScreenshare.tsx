// === Module 10023: SingleScreenshare ===

// Module 10023 (SingleScreenshare)
import nativeDefault from "native" /* 576 */;
import ChannelRTCActionCreatorsDefault from "ChannelRTCActionCreators" /* 4761 */;
import noop from "module_19" /* 19 */;

const ChannelCallStore = fn(9467);
({ resetFocus: c2, toggleFocus: c3 } = ChannelCallStore);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { stageStreamContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BLACK };
createStyles.stageStreamContainer = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(4992)(() => {
    closure_1_2();
  });
  const obj = {
    participant: channel.participant,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React2();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    containerStyle: null
  };
  const tmp = closure_5();
  const tmp3 = jsx;
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj.containerStyle = stageStreamContainer;
  return tmp3(channel(10024), obj);
};