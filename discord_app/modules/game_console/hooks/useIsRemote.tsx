// === Module 7235: useIsRemote ===

// Module 7235 (useIsRemote)
import initialize from "initialize" /* 589 */;
import set from "set" /* 4540 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/game_console/hooks/useIsRemote.tsx");

export default function useIsRemote() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => null != remoteSessionId.getRemoteSessionId() || null != remoteSessionId.getAwaitingRemoteSessionInfo());
};