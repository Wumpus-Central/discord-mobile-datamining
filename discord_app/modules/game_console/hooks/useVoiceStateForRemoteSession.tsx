// === Module 9748: useVoiceStateForRemoteSession ===

// Module 9748 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 589 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import set from "set" /* 4540 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [closure_2, closure_3, closure_4];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};