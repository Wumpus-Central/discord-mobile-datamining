// discord_app/modules/stage_channels/useCanSpeakInChannel.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

const useAudienceRequestToSpeakStateDefault = useAudienceRequestToSpeakState;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [AuthenticationStore];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  return (
    useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) ===
    useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE
  );
}
