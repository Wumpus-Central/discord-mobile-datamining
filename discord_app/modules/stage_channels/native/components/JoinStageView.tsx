// === Module 10070: JoinStageView ===

// Module 10070 (JoinStageView)
import util from "util" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5506 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5512 */;
import StageChannelUtils from "StageChannelUtils" /* 8518 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9805 */;
import StageActionBarButtons from "StageActionBarButtons" /* 10028 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  const stageParticipants = StageChannelParticipantStoreHooks.useStageParticipants(channel.id, StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER);
  const found = stageParticipants.filter((type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE);
  const obj2 = { title: null, body: null, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.WZOeQv);
  obj2.body = StageChannelUtils.getParticipantNamesText(channel, found);
  obj2.children = jsx(StageActionBarButtons.JoinStagePrompt, { channel });
  return <tmp2 title={null} body={null}>{null}</tmp2>;
};