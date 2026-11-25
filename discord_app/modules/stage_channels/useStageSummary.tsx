// === Module 10284: useStageSummary ===

// Module 10284 (useStageSummary)
import util from "util" /* 1112 */;
import StageChannelParticipants from "StageChannelParticipants" /* 6824 */;
import StageChannelParticipantStoreHooks from "StageChannelParticipantStoreHooks" /* 6830 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/stage_channels/useStageSummary.tsx");

export default function useStageSummary(id) {
  const actualStageSpeakerCount = StageChannelParticipantStoreHooks.useActualStageSpeakerCount(id);
  const count = StageChannelParticipantStoreHooks.useStageParticipantsCount(id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE);
  const intl = util.intl;
  const intl2 = util.intl;
  return "" + intl.formatToPlainString(util.t.chmM9N, { count: actualStageSpeakerCount }) + " \u00B7 " + intl2.formatToPlainString(util.t["+v2pN2"], { count });
};