// discord_app/modules/stage_channels/useIsInvitedToSpeak.tsx
import fetchFingerprint from "fetchFingerprint";
import handleConnectionOpen from "handleConnectionOpen";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/stage_channels/useIsInvitedToSpeak.tsx");

export default function useIsInvitedToSpeak() {
  const items = [handleConnectionOpen];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => voiceChannelId.getVoiceChannelId());
  const obj = require(589) /* initialize */;
  const items1 = [fetchFingerprint];
  const stateFromStores1 = require(589) /* initialize */.useStateFromStores(items1, () => id.getId());
  const obj2 = require(589) /* initialize */;
  return importDefault(4378)(stateFromStores1, stateFromStores) === require(4378) /* useAudienceRequestToSpeakState */.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
};