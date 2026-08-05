// discord_app/modules/stage_channels/useIsInvitedToSpeak.tsx
import fetchFingerprint from "fetchFingerprint";
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [handleConnectionOpen];
  const stateFromStores = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const obj = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items1 = [fetchFingerprint];
  const stateFromStores1 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items1, () => id.getId());
  const obj2 = require("../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  return require("useAudienceRequestToSpeakState.tsx")(stateFromStores1, stateFromStores) === require("useAudienceRequestToSpeakState.tsx") /* useAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};