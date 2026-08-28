// === Module 9586: useIsInvitedToSpeak ===

// Module 9586 (useIsInvitedToSpeak)
import initialize from "initialize" /* 589 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4634 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4634 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "handleConnectionOpen" /* 1982 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const obj = initialize;
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  const obj2 = initialize;
  return useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};