// === Module 9769: ModeratorStartStageHeader ===

// Module 9769 (ModeratorStartStageHeader)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import NavigatorConstants from "NavigatorConstants" /* 6075 */;
import StageActionHeader from "StageActionHeader" /* 9724 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 9730 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { header: obj2 };
obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
let closure_6 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let items;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(14);
  channel = channel.channel;
  const tmp4 = closure_6();
  const tmp5 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp5 != null) {
    speaker = tmp5.speaker;
  }
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    const tmp10 = React3(StageActionHeader.HideStageChannelCallIcon, obj2);
    const obj3 = { channel };
    const tmp11 = React3(StageActionHeader.StageChannelCallHeader, obj3);
    cResult[0] = channel;
    cResult[1] = tmp10;
    cResult[2] = tmp11;
    tmp8 = tmp11;
    tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] === channel.id) {
    let tmp12;
    let tmp15;
    if (cResult[4] === speaker) {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== channel.id) {
      const obj4 = { channelId: channel.id };
      const tmp17 = React3(StageActionHeader.StageInviteButton, obj4);
      cResult[6] = channel.id;
      cResult[7] = tmp17;
      tmp15 = tmp17;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] === tmp4.header) {
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp8) {
          if (cResult[11] === tmp12) {
            let tmp18;
            if (cResult[12] === tmp15) {
              tmp18 = cResult[13];
            }
            return tmp18;
          }
        }
      }
    }
    const obj5 = { style: tmp4.header, pointerEvents: "box-none", children: items };
    items = [tmp7, tmp8, tmp12, tmp15];
    const tmp21 = hasOwnProperty(View, obj5);
    cResult[8] = tmp4.header;
    cResult[9] = tmp7;
    cResult[10] = tmp8;
    cResult[11] = tmp12;
    cResult[12] = tmp15;
    cResult[13] = tmp21;
    tmp18 = tmp21;
  }
  let tmp13 = speaker;
  if (tmp13) {
    const obj6 = { channelId: channel.id };
    tmp13 = React3(StageActionHeader.MusicMuteButton, obj6);
  }
  cResult[3] = channel.id;
  cResult[4] = speaker;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((channel) => {
  let items;
  channel = channel.channel;
  const tmp = closure_6();
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: tmp.header, pointerEvents: "box-none", children: items };
  items = [React3(StageActionHeader.HideStageChannelCallIcon, { channel }), React3(StageActionHeader.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = React3(StageActionHeader.MusicMuteButton, obj2);
  }
  items[2] = speaker;
  const obj3 = { channelId: channel.id };
  items[3] = React3(StageActionHeader.StageInviteButton, obj3);
  return hasOwnProperty(View, obj);
}));
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default memoResult;