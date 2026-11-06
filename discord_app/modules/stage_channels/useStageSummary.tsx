// discord_app/modules/stage_channels/useStageSummary.tsx
import util from "../../intl/index.native.tsx";
import StageChannelParticipants from "StageChannelParticipants.tsx";
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/stage_channels/useStageSummary.tsx");

export default function useStageSummary(id) {
  const actualStageSpeakerCount = StageChannelParticipantStoreHooks.useActualStageSpeakerCount(id);
  const count = StageChannelParticipantStoreHooks.useStageParticipantsCount(
    id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE,
  );
  const intl = util.intl;
  const intl2 = util.intl;
  return (
    "" +
    intl.formatToPlainString(util.t.chmM9N, { count: actualStageSpeakerCount }) +
    " \u00B7 " +
    intl2.formatToPlainString(util.t["+v2pN2"], { count })
  );
}
