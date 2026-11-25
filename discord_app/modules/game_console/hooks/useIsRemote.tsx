// === Module 9998: useIsRemote ===

// Module 9998 (useIsRemote)
import initialize from "initialize" /* 504 */;
import GameConsoleStore from "GameConsoleStore" /* 5821 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  items = [GameConsoleStore];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};