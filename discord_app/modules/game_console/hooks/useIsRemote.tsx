// === Module 7271: useIsRemote ===

// Module 7271 (useIsRemote)
import initialize from "initialize" /* 504 */;
import closure_2 from "set" /* 4577 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};