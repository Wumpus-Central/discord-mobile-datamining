// discord_app/modules/stage_channels/native/components/JoinStageView.tsx
import util from "../../../../intl/index.native.tsx";
import StageChannelParticipants from "../../StageChannelParticipants.tsx";
import StageChannelParticipantStoreHooks from "../../StageChannelParticipantStoreHooks.tsx";
import StageChannelUtils from "../../StageChannelUtils.tsx";
import StageViewWithPromptsDefault from "StageViewWithPrompts.tsx";
import StageActionBarButtons from "StageActionBarButtons.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/JoinStageView.tsx");

export default function JoinStageView(channel) {
  channel = channel.channel;
  const stageParticipants = StageChannelParticipantStoreHooks.useStageParticipants(
    channel.id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  const found = stageParticipants.filter(
    (type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE,
  );
  const obj2 = { title: null, body: null, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t.WZOeQv);
  obj2.body = StageChannelUtils.getParticipantNamesText(channel, found);
  obj2.children = jsx(StageActionBarButtons.JoinStagePrompt, { channel });
  return (
    <tmp2 title={null} body={null}>
      {null}
    </tmp2>
  );
}
