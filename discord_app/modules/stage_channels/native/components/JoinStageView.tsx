// === Module 10031: JoinStageView ===

// Module 10031 (JoinStageView)
import util from "util" /* 1114 */;
import StageChannelParticipants from "StageChannelParticipants" /* 5476 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 5482 */;
import StageChannelUtils from "StageChannelUtils" /* 8486 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 9766 */;
import StageActionBarButtons from "StageActionBarButtons" /* 9989 */;
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