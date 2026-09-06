// === Module 9940: JoinStageView ===

// Module 9940 (JoinStageView)
import util from "util" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5425 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5431 */;
import StageChannelUtils from "StageChannelUtils" /* 8400 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9675 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9898 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  let obj = StageChannelParticipantStoreHooks;
  const stageParticipants = obj.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE);
  obj = { title: null, body: null, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.WZOeQv);
  obj.body = StageChannelUtils.getParticipantNamesText(channel, found);
  obj.children = jsx(StageActionBarButtons.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};