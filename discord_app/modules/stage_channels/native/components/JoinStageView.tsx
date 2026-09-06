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
  let obj = StageChannelParticipantStoreHooks;
  const stageParticipants = obj.useStageParticipants(
    channel.id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  const found = stageParticipants.filter(
    (type) => type.type === StageChannelParticipants.StageChannelParticipantTypes.VOICE,
  );
  obj = { title: null, body: null, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.WZOeQv);
  obj.body = StageChannelUtils.getParticipantNamesText(channel, found);
  obj.children = jsx(StageActionBarButtons.JoinStagePrompt, { channel });
  return (
    <tmp2 title={null} body={null}>
      {null}
    </tmp2>
  );
}
