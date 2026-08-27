// === Module 9472: useCanCurrentUserSpeakInChannel ===

// Module 9472 (useCanCurrentUserSpeakInChannel)
import initialize from "initialize" /* 589 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4633 */;
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState" /* 4633 */;
import closure_3 from "fetchFingerprint" /* 1218 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const obj = initialize;
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};