// discord_app/modules/game_console/hooks/useVoiceStateForRemoteSession.tsx
import fetchFingerprint from "fetchFingerprint";
import updateVoiceState from "updateVoiceState";
import set from "set";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [fetchFingerprint, updateVoiceState, set];
  return require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};