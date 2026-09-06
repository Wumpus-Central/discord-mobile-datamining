// === Module 9678: useIsInvitedToSpeak ===

// Module 9678 (useIsInvitedToSpeak)
import initialize from "initialize" /* 504 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4707 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [SelectedChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const items1 = [AuthenticationStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};