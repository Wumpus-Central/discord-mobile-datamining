// === Module 9769: ModeratorStartStageHeader ===

// Module 9769 (ModeratorStartStageHeader)
import c from "c" /* 576 */;
import StageActionHeader from "StageActionHeader" /* 9724 */;
import useMyCurrentStageChannelRoleDefault from "useMyCurrentStageChannelRole" /* 9730 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj = { header: { height: fn(6075).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" } };
let closure_6 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { height: fn(6075).NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center", paddingHorizontal: 8, marginTop: 4, overflow: "visible" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ModeratorStartStageHeader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(14);
  channel = channel.channel;
  const tmp4 = closure_6();
  const tmp5 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp5 != null) {
    speaker = tmp5.speaker;
  }
  if (cResult[0] !== channel) {
    const obj2 = { channel };
    const tmp10 = React4(StageActionHeader.HideStageChannelCallIcon, obj2);
    const obj3 = { channel };
    const tmp11 = React4(StageActionHeader.StageChannelCallHeader, obj3);
    cResult[0] = channel;
    cResult[1] = tmp10;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  if (cResult[3] === channel.id) {
    if (cResult[4] === speaker) {
      let tmp12 = cResult[5];
    }
    if (cResult[6] !== channel.id) {
      const obj4 = { channelId: channel.id };
      const tmp17 = React4(StageActionHeader.StageInviteButton, obj4);
      cResult[6] = channel.id;
      cResult[7] = tmp17;
      let tmp15 = tmp17;
    } else {
      tmp15 = cResult[7];
    }
    if (cResult[8] === tmp4.header) {
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp8) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp15) {
              let tmp18 = cResult[13];
            }
            return tmp18;
          }
        }
      }
    }
    const obj5 = { style: tmp4.header, pointerEvents: "box-none", children: null };
    const items = [tmp7, tmp8, tmp12, tmp15];
    obj5.children = items;
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
  if (speaker) {
    const obj6 = { channelId: channel.id };
    tmp13 = React4(StageActionHeader.MusicMuteButton, obj6);
  }
  cResult[3] = channel.id;
  cResult[4] = speaker;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : ((channel) => {
  channel = channel.channel;
  const tmp3 = useMyCurrentStageChannelRoleDefault(channel.id);
  let speaker;
  if (tmp3 != null) {
    speaker = tmp3.speaker;
  }
  const obj = { style: closure_6().header, pointerEvents: "box-none", children: null };
  const items = [React4(StageActionHeader.HideStageChannelCallIcon, { channel }), React4(StageActionHeader.StageChannelCallHeader, { channel }), , ];
  if (speaker) {
    const obj2 = { channelId: channel.id };
    speaker = React4(StageActionHeader.MusicMuteButton, obj2);
  }
  items[2] = speaker;
  items[3] = React4(StageActionHeader.StageInviteButton, { channelId: channel.id });
  obj.children = items;
  return hasOwnProperty(View, obj);
}));