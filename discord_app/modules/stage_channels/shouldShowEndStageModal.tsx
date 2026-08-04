// discord_app/modules/stage_channels/shouldShowEndStageModal.tsx
import fetchFingerprint from "fetchFingerprint";
import getActiveStageChannelIds from "getActiveStageChannelIds";
import buildStageChannelUserRoles from "buildStageChannelUserRoles";
import handleStageInstanceCreateOrUpdate from "handleStageInstanceCreateOrUpdate";

const require = arg1;
const result = require("buildStageChannelUserRoles").fileFinishedImporting("modules/stage_channels/shouldShowEndStageModal.tsx");

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
          let tmp7 = null == mutableParticipants.find((user) => {
            let isModeratorResult = user.user.id !== id;
            if (isModeratorResult) {
              isModeratorResult = outer1_4.isModerator(user.user.id, isGuildStageVoice.id);
            }
            return isModeratorResult;
          });
          if (!tmp7) {
            const mutableParticipants1 = obj2.getMutableParticipants(isGuildStageVoice.id, _require(id[4]).StageChannelParticipantNamedIndex.SPEAKER);
            tmp7 = null == mutableParticipants1.find((user) => {
              let isModeratorResult = user.user.id !== id;
              if (isModeratorResult) {
                isModeratorResult = outer1_4.isModerator(user.user.id, isGuildStageVoice.id);
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