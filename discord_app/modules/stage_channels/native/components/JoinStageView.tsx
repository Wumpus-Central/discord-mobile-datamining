// === Module 9623: JoinStageView ===

// Module 9623 (JoinStageView)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5582 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5588 */;
import StageChannelUtils from "StageChannelUtils" /* 8076 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9558 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9603 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  let tmp10;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(14);
  channel = channel.channel;
  const obj2 = StageChannelParticipantStoreHooks;
  const stageParticipants = obj2.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  if (cResult[0] === stageParticipants) {
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp13;
    if (cResult[1] === channel) {
      tmp4 = cResult[2];
      tmp5 = cResult[3];
      tmp6 = cResult[4];
    }
    if (cResult[7] !== channel) {
      const tmp15 = jsx(StageActionBarButtons.JoinStagePrompt, { channel });
      cResult[7] = channel;
      cResult[8] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp6) {
          let tmp16;
          if (cResult[12] === tmp13) {
            tmp16 = cResult[13];
          }
          return tmp16;
        }
      }
    }
    const tmp18 = <tmp4 title={tmp5} body={tmp6}>{tmp13}</tmp4>;
    cResult[9] = tmp4;
    cResult[10] = tmp5;
    cResult[11] = tmp6;
    cResult[12] = tmp13;
    cResult[13] = tmp18;
    tmp16 = tmp18;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(type) {
      return type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE;
    };
    cResult[5] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[5];
  }
  const found = stageParticipants.filter(tmp7);
  const tmp9 = StageViewWithPromptsDefault;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.WZOeQv);
    cResult[6] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[6];
  }
  const tmpResult = StageChannelUtils;
  const participantNamesText = tmpResult.getParticipantNamesText(channel, found);
  cResult[0] = stageParticipants;
  cResult[1] = channel;
  cResult[2] = tmp9;
  cResult[3] = tmp10;
  cResult[4] = participantNamesText;
  tmp5 = tmp10;
  tmp6 = participantNamesText;
  tmp4 = tmp9;
}) : ((channel) => {
  channel = channel.channel;
  const obj = StageChannelParticipantStoreHooks;
  const stageParticipants = obj.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE);
  StageViewWithPromptsDefault;
  const intl = intl2.intl;
  const obj3 = StageChannelUtils;
  return <tmp2 title={intl.string(intl2.t.WZOeQv)} body={obj3.getParticipantNamesText(channel, found)}>{null}</tmp2>;
});
const result = size.fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default tmp3;