// discord_app/modules/stage_channels/shouldShowEndStageModal.tsx
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import getActiveStageChannelIds from "StageChannelParticipantStore.tsx";
import buildStageChannelUserRoles from "StageChannelRoleStore.tsx";
import handleStageInstanceCreateOrUpdate from "StageInstanceStore.tsx";

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