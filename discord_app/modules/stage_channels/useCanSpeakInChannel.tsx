// === Module 9583: useCanSpeakInChannel ===

// Module 9583 (useCanSpeakInChannel)
import initialize from "initialize" /* 504 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 4707 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};