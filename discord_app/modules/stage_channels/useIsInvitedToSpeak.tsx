// discord_app/modules/stage_channels/useIsInvitedToSpeak.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import handleConnectionOpen from "../../stores/SelectedChannelStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};