// === Module 11025: useVoiceStateForRemoteSession ===

// Module 11025 (useVoiceStateForRemoteSession)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;
import GameConsoleStore from "GameConsoleStore" /* 5111 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useVoiceStateForRemoteSession.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useVoiceStateForRemoteSession() {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
    const fn = function u() {
      id = id.getId();
      voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
      return voiceStateForSession;
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp4 = items;
    tmp5 = fn;
    tmp6 = items1;
  } else {
    [tmp4, tmp5, tmp6] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5, tmp6);
}) : (function useVoiceStateForRemoteSession() {
  const items = [AuthenticationStore, VoiceStateStore, GameConsoleStore];
  return initialize.useStateFromStores(items, () => {
    id = id.getId();
    voiceStateForSession = voiceStateForSession.getVoiceStateForSession(id, remoteSessionId.getRemoteSessionId());
    return voiceStateForSession;
  }, []);
});