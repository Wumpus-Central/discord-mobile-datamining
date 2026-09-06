// discord_app/modules/stage_channels/useIsInvitedToSpeak.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [SelectedChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const items1 = [AuthenticationStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  return (
    useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) ===
    useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
  );
}
