// discord_app/modules/stage_channels/useCanSpeakInChannel.tsx
import fetchFingerprint from "fetchFingerprint";

const require = arg1;
const result = require("useAudienceRequestToSpeakState").fileFinishedImporting("modules/stage_channels/useCanSpeakInChannel.tsx");

export default function useCanCurrentUserSpeakInChannel(arg0) {
  const items = [fetchFingerprint];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => id.getId());
  const obj = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  return require("useAudienceRequestToSpeakState.tsx")(stateFromStores, arg0) === require("useAudienceRequestToSpeakState.tsx") /* useAudienceRequestToSpeakState */.RequestToSpeakStates.ON_STAGE;
};