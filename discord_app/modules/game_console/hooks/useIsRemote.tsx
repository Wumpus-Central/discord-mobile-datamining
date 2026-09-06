// === Module 7271: useIsRemote ===

// Module 7271 (useIsRemote)
import initialize from "initialize" /* 504 */;
import GameConsoleStore from "GameConsoleStore" /* 4577 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [GameConsoleStore];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};