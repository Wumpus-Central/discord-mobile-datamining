// === Module 9583: useCanCurrentUserSpeakInChannel ===

// Module 9583 (useCanCurrentUserSpeakInChannel)
import initialize from "initialize" /* 504 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4707 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4707 */;
import closure_3 from "fetchFingerprint" /* 502 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const obj = initialize;
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};