// discord_app/modules/stage_channels/useCanSpeakInChannel.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import useAudienceRequestToSpeakStateDefault from "useAudienceRequestToSpeakState.tsx";
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [closure_3];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  return useAudienceRequestToSpeakStateDefault(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};