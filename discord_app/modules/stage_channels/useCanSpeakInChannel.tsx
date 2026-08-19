// === Module 10526: useCanCurrentUserSpeakInChannel ===

// Module 10526 (useCanCurrentUserSpeakInChannel)
import initialize from "initialize" /* 589 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4981 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4981 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};