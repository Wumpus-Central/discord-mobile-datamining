// === Module 10867: JoinStageView ===

// Module 10867 (JoinStageView)
import util from "util" /* 1113 */;
import StageChannelUtils from "StageChannelUtils" /* 6384 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6416 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6422 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 10784 */;
import StageActionBarButtons from "StageActionBarButtons" /* 10817 */;
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