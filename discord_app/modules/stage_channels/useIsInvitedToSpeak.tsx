// discord_app/modules/stage_channels/useIsInvitedToSpeak.tsx
import fetchFingerprint from "fetchFingerprint";
import handleConnectionOpen from "handleConnectionOpen";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useAudienceRequestToSpeakState } from "useAudienceRequestToSpeakState.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [handleConnectionOpen];
  const stateFromStores = initialize /* initialize */.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const obj = initialize /* initialize */;
  const items1 = [fetchFingerprint];
  const stateFromStores1 = initialize /* initialize */.useStateFromStores(items1, () => id.getId());
  const obj2 = initialize /* initialize */;
  return useAudienceRequestToSpeakState(stateFromStores1, stateFromStores) === useAudienceRequestToSpeakState /* useAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};