// discord_app/modules/video_calls/native/components/SingleScreenshare.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelRTCActionCreatorsDefault from "../../../../actions/ChannelRTCActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ChannelCallStore = fn(9599);
({ resetFocus: c2, toggleFocus: c3 } = ChannelCallStore);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
const obj2 = { stageStreamContainer: { backgroundColor: nativeDefault.colors.BLACK } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/components/SingleScreenshare.tsx");

export default function SingleScreenshare(channel) {
  channel = channel.channel;
  channel(5076)(() => {
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
    containerStyle: null,
  };
  const tmp = closure_5();
  let stageStreamContainer;
  if (channel.isGuildStageVoice()) {
    stageStreamContainer = tmp.stageStreamContainer;
  }
  obj.containerStyle = stageStreamContainer;
  return jsx(channel(10155), {
    participant: channel.participant,
    onSingleTap() {
      closure_1_3();
    },
    onDoubleTap() {
      React2();
      const participant = ChannelRTCActionCreatorsDefault.selectParticipant(channel.id, null);
    },
    containerStyle: null,
  });
}
