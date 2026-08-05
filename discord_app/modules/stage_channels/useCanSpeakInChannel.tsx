// discord_app/modules/stage_channels/useCanSpeakInChannel.tsx
import fetchFingerprint from "fetchFingerprint";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { useAudienceRequestToSpeakState } from "useAudienceRequestToSpeakState.tsx";

const require = arg1;
const result = require("useAudienceRequestToSpeakState").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [fetchFingerprint];
  const stateFromStores = initialize.useStateFromStores(items, () => id.getId());
  const obj = initialize;
  return useAudienceRequestToSpeakState(stateFromStores, arg0) === useAudienceRequestToSpeakState.RequestToSpeakStates.ON_STAGE;
};