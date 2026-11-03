// === Module 11997: useVoiceStateForRemoteSession ===

// Module 11997 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 504 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5799 */;
import GameConsoleStore from "GameConsoleStore" /* 5885 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default function useVoiceStateForRemoteSession() {
  items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
};