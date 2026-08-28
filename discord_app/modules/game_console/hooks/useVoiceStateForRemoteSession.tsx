// === Module 9589: useVoiceStateForRemoteSession ===

// Module 9589 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 589 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "updateVoiceState" /* 4465 */;
import closure_4 from "set" /* 4463 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  const items = [closure_2, closure_3, closure_4];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};