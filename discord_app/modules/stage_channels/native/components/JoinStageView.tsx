// === Module 12087: JoinStageView ===

// Module 12087 (JoinStageView)
import util from "util" /* 1113 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6839 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6845 */;
import StageChannelUtils from "StageChannelUtils" /* 8037 */;
import StageViewWithPromptsDefault from "StageViewWithPrompts" /* 12026 */;
import StageActionBarButtons from "StageActionBarButtons" /* 12045 */;
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