// discord_app/modules/stage_channels/shouldShowEndStageModal.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";
import StageInstanceStore from "StageInstanceStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/stage_channels/shouldShowEndStageModal.tsx");

export default function shouldShowEndStageModal(isGuildStageVoice) {
  _require = isGuildStageVoice;
  if (isGuildStageVoice.isGuildStageVoice()) {
    if (StageInstanceStore.isLive(isGuildStageVoice.id)) {
      const id = AuthenticationStore.getId();
      let isModeratorResult = StageChannelRoleStore.isModerator(id, isGuildStageVoice.id);
      if (isModeratorResult) {
        let isSpeakerResult = StageChannelRoleStore.isSpeaker(id, isGuildStageVoice.id);
        if (isSpeakerResult) {
          const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(isGuildStageVoice.id);
          let tmp7 =
            null ==
            mutableParticipants.find((user) => {
              const isModeratorResult =
                user.user.id !== id && StageChannelRoleStore.isModerator(user.user.id, isGuildStageVoice.id);
              return isModeratorResult;
            });
          if (!tmp7) {
            const mutableParticipants1 = StageChannelParticipantStore.getMutableParticipants(
              isGuildStageVoice.id,
              require("StageChannelParticipants").StageChannelParticipantNamedIndex.SPEAKER,
            );
            tmp7 =
              null ==
              mutableParticipants1.find((user) => {
                const isModeratorResult =
                  user.user.id !== id && StageChannelRoleStore.isModerator(user.user.id, isGuildStageVoice.id);
                return isModeratorResult;
              });
          }
          isSpeakerResult = tmp7;
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
}
