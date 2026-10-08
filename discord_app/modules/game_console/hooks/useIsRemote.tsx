// === Module 6959: useIsRemote ===

// Module 6959 (useIsRemote)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import GameConsoleStore from "GameConsoleStore" /* 5109 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsRemote() {
  const cResult = c.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GameConsoleStore];
    const fn = function s() {
      return null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  return initialize.useStateFromStores(tmp4, tmp5);
}) : (function useIsRemote() {
  const items = [GameConsoleStore];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
});