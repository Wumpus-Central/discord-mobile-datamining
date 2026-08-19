// === Module 12494: useIsInvitedToSpeak ===

// Module 12494 (useIsInvitedToSpeak)
import initialize from "initialize" /* 589 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4981 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4981 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [closure_4];
  const stateFromStores = initialize.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const items1 = [closure_3];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores1, stateFromStores) === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};