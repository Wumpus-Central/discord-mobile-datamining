// === Module 12516: shouldShowEndStageModal ===

// Module 12516 (shouldShowEndStageModal)
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import getActiveStageChannelIds from "getActiveStageChannelIds" /* 4989 */;
import buildStageChannelUserRoles from "buildStageChannelUserRoles" /* 4990 */;
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate" /* 1396 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/shouldShowEndStageModal.tsx");

export default function shouldShowEndStageModal(isGuildStageVoice) {
  const _require = isGuildStageVoice;
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (live.isLive(isGuildStageVoice.id)) {
      id = id.getId();
      let isModeratorResult = moderator.isModerator(id, isGuildStageVoice.id);
      if (isModeratorResult) {
        let isSpeakerResult = moderator.isSpeaker(id, isGuildStageVoice.id);
        if (isSpeakerResult) {
          mutableParticipants = mutableParticipants.getMutableParticipants(isGuildStageVoice.id);
          let tmp7 = null == mutableParticipants.find((item, index) => {
            let isModeratorResult = item.user.id !== id;
            if (isModeratorResult) {
              isModeratorResult = closure_1_4.isModerator(item.user.id, isGuildStageVoice.id);
            }
            return isModeratorResult;
          });
          if (!tmp7) {
            const mutableParticipants1 = obj2.getMutableParticipants(isGuildStageVoice.id, _require(id[4]).StageChannelParticipantNamedIndex.SPEAKER);
            tmp7 = null == mutableParticipants1.find((item, index) => {
              let isModeratorResult = item.user.id !== id;
              if (isModeratorResult) {
                isModeratorResult = closure_1_4.isModerator(item.user.id, isGuildStageVoice.id);
              }
              return isModeratorResult;
            });
          }
          isSpeakerResult = tmp7;
          obj2 = mutableParticipants;
        }
        isModeratorResult = isSpeakerResult;
      }
      return isModeratorResult;
    } else {
      return false;
    }
  } else {
    return false;
  }
};